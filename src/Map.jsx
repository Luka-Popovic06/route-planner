import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Routing from "./Routing";

function MapComponent({ mapMarkers, movement, routeInfo }) {
  const center = [44.792, 20.455];

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

      {!mapMarkers ? (
        <Marker position={center}>
          <Popup>Beograd</Popup>
        </Marker>
      ) : (
        mapMarkers?.map((m, index) => (
          <Marker key={index} position={[m.lat, m.lon]}>
            <Popup>{m.name}</Popup>
          </Marker>
        ))
      )}

      {mapMarkers?.length >= 2 && (
        <Routing
          points={mapMarkers}
          movementType={movement}
          info={(distance, time) => routeInfo(distance, time)}
        />
      )}
    </MapContainer>
  );
}

export default MapComponent;
