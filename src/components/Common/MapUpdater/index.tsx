import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useVehicles } from "@/contexts/VehicleContext";

export default function MapUpdater() {
  const map = useMap();
  const { vehicles } = useVehicles();

  useEffect(() => {
    if (!map || vehicles.length === 0) return;

    const bounds = new google.maps.LatLngBounds();

    vehicles.forEach((v) => {
      if (v.lat && v.lng) {
        bounds.extend(new google.maps.LatLng(v.lat, v.lng));
      }
    });

    if (!bounds.isEmpty()) {
      map.fitBounds(bounds);
    }
  }, [vehicles, map]);

  return null;
}
