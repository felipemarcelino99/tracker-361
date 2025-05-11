"use client";
import { Map, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import MapMarkers from "../MapMarkers";
import MapUpdater from "../MapUpdater";

export default function MapWrapper() {
  return (
    <div className="w-full h-130 mt-4 rounded-2xl overflow-hidden">
      <Map
        defaultZoom={5}
        defaultCenter={{ lat: -23.5475, lng: -46.6361 }}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom
          )
        }
      >
        <MapUpdater />
        <MapMarkers />
      </Map>
    </div>
  );
}
