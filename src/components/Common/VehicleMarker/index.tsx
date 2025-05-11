// components/VehicleMarker.tsx
import { VehicleStatus } from "@/enums";
import { Vehicle } from "@/types";
import { Marker, InfoWindow } from "@vis.gl/react-google-maps";
import { useState } from "react";

interface VehicleMarkerProps {
  vehicle: Vehicle;
}

export default function VehicleMarker({ vehicle }: VehicleMarkerProps) {
  const [showInfo, setShowInfo] = useState(false);

  const getIconUrl = () => {
    switch (vehicle.status) {
      case VehicleStatus.ACTIVE:
        return "/images/green.png";
      case VehicleStatus.MAINTENANCE:
        return "/images/yellow.png";
      case VehicleStatus.INACTIVE:
        return "/images/red.png";
      default:
        return "/images/default.png";
    }
  };

  return (
    <>
      <Marker
        position={{ lat: vehicle.lat, lng: vehicle.lng }}
        onClick={() => setShowInfo(true)}
        icon={{
          url: getIconUrl(),
        }}
      />
      {showInfo && (
        <InfoWindow
          position={{ lat: vehicle.lat, lng: vehicle.lng }}
          onCloseClick={() => setShowInfo(false)}
        >
          <div className="text-sm">
            <p>
              <strong>Placa:</strong> {vehicle.plate}
            </p>
            <p>
              <strong>Frota:</strong> {vehicle.fleet}
            </p>
            <a
              href={`https://www.google.com/maps?q=${vehicle.lat},${vehicle.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {`${vehicle.lat} / ${vehicle.lng}`}
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
}
