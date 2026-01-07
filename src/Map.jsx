import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
function MapComponent({ mapMarkers }) {
  const center = [44.892, 20.459]; // Beograd

  const customIcon = new L.Icon({
    iconUrl: "marker-icon.png",
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new L.divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-cluster",
      iconSize: [40, 40],
    });
  };
  return (
    <MapContainer
      center={center}
      zoom={7}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {!mapMarkers ? (
          <Marker position={center} icon={customIcon}>
            <Popup>Beograd</Popup>
          </Marker>
        ) : (
          mapMarkers?.map((m, index) => (
            <Marker key={index} position={[m.lat, m.lon]} icon={customIcon}>
              <Popup>{m.name}</Popup>
            </Marker>
          ))
        )}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default MapComponent;
