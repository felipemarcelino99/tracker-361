import { render, screen } from "@testing-library/react";
import MapWrapper from ".";
import { APIProvider } from "@vis.gl/react-google-maps";
import { QueryClient, QueryClientProvider } from "react-query";
import { VehiclesProvider } from "@/contexts/VehicleContext";

const queryClient = new QueryClient();

describe("MapWrapper component", () => {
  it("renders with the given component", () => {
    render(
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <QueryClientProvider client={queryClient}>
          <VehiclesProvider>
            <MapWrapper />
          </VehiclesProvider>
        </QueryClientProvider>
      </APIProvider>
    );
    expect(screen.getByTestId("mapWrapper")).toBeInTheDocument();
  });
});
