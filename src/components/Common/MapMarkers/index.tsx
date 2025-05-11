import { useVehicles } from "@/contexts/VehicleContext";
import VehicleMarker from "../VehicleMarker";

export default function MapMarkers() {
  const { vehicles } = useVehicles();

  return (
    <>
      {vehicles
        .filter((v) => v?.lat !== undefined && v?.lng !== undefined)
        .map((vehicle) => (
          <VehicleMarker key={vehicle.id} vehicle={vehicle} />
        ))}
    </>
  );
}
