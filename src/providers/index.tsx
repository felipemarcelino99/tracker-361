"use client";
import { VehiclesProvider } from "@/contexts/VehicleContext";
import { APIProvider } from "@vis.gl/react-google-maps";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <QueryClientProvider client={queryClient}>
        <VehiclesProvider>{children}</VehiclesProvider>
      </QueryClientProvider>
    </APIProvider>
  );
}
