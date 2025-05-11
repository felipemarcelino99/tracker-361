import MapWrapper from "../MapWrapper";
import Title from "../Title";

export default function MapContainer() {
  return (
    <div className="map-container" data-testid="mapContainer">
      <Title label="Mapa rastreador" variant="semibold" size="md" tag="h3" />
      <MapWrapper />
    </div>
  );
}
