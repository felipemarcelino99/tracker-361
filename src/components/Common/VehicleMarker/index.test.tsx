import { render, screen } from "@testing-library/react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { QueryClient, QueryClientProvider } from "react-query";
import { VehiclesProvider } from "@/contexts/VehicleContext";
import VehicleMarker from ".";
import { VehicleStatus, VehicleTypes } from "@/enums";
import { Vehicle } from "@/types";

const queryClient = new QueryClient();
const vehicle = {
  id: 1,
  plate: "HAHA-123",
  fleet: "456",
  type: VehicleTypes.VEHICLE,
  model: "FUSCA",
  status: VehicleStatus.MAINTENANCE,
} as unknown as Vehicle;

describe("VehicleMarker component", () => {
  it("renders with the given component", () => {
    render(
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <QueryClientProvider client={queryClient}>
          <VehiclesProvider>
            <VehicleMarker vehicle={vehicle} />
          </VehiclesProvider>
        </QueryClientProvider>
      </APIProvider>
    );
    expect(screen.getByTestId("VehicleMarker")).toBeInTheDocument();
  });
});
