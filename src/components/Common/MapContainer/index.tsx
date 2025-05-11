import MapWrapper from "../MapWrapper";
import Title from "../Title";

export default function MapContainer() {
  return (
    <div className="map-container">
      <Title label="Mapa rastreador" variant="semibold" size="md" tag="h3" />
      <MapWrapper />
    </div>
  );
}
