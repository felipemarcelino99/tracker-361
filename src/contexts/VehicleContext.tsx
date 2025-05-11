"use client";

import { createContext, useContext, useState, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { ResponseData, Vehicle } from "@/types";

interface VehiclesContextData {
  vehicles: Vehicle[];
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  setFilter: (value: string) => void;
  setType: (value: string) => void;
  observerRef: (node: HTMLDivElement | null) => void;
}

const VehiclesContext = createContext({} as VehiclesContextData);

export const VehiclesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery<ResponseData>(
      ["paginatedVehicles", filter, type],
      async ({ pageParam = 1 }) => {
        const query = new URLSearchParams({
          ...(type && { type }),
          ...(filter && { filter }),
          page: pageParam.toString(),
          perPage: "20",
        });

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/vehicles/list-with-paginate?${query}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
          }
        );

        if (!res.ok) {
          console.error(res);
          throw new Error("Erro ao buscar veículos");
        }

        const json = await res.json();
        return json;
      },
      {
        getNextPageParam: (lastPage, allPages) =>
          lastPage.content.vehicles.length === 20
            ? allPages.length + 1
            : undefined,
        enabled: !!type,
        keepPreviousData: false,
      }
    );

  const unfilteredData =
    data?.pages.flatMap((page) => page.content.vehicles) || [];
  const locationVehicles =
    data?.pages.flatMap((page) => page.content.locationVehicles) || [];

  const vehicles = unfilteredData.map((vehicle) => {
    const location = locationVehicles.find(
      (loc) => loc?.plate === vehicle?.plate
    );

    if (location) {
      return {
        ...vehicle,
        lat: location.lat,
        lng: location.lng,
      };
    }

    return vehicle;
  });

  const observer = useRef<IntersectionObserver | null>(null);

  const observerRef = (node: HTMLDivElement | null) => {
    if (isFetchingNextPage) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (node) observer.current.observe(node);
  };

  return (
    <VehiclesContext.Provider
      value={{
        vehicles,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        setFilter,
        setType,
        observerRef,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};

export const useVehicles = () => useContext(VehiclesContext);
