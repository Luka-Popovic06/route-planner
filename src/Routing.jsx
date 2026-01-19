import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

function Routing({ points, movementType, info }) {
  const map = useMap();

  useEffect(() => {
    if (!points || points.length < 2) return;

    const control = L.Routing.control({
      waypoints: points.map((p) => L.latLng(p.lat, p.lon)),
      router: L.Routing.osrmv1({
        serviceUrl: "https://router.project-osrm.org/route/v1",
        profile: "car",
      }),
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
    })
      .on("routesfound", (e) => {
        const route = e.routes[0];
        const distance = route.summary.totalDistance / 1000;
        const time = route.summary.totalTime;

        const t =
          movementType === "walking"
            ? formatTime(time * 3.5)
            : formatTime(time);

        info(distance.toFixed(2), t);
      })
      .addTo(map);

    return () => map.removeControl(control);
  }, [map, points, movementType]);
}

export default Routing;
