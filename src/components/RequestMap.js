import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Pin icons that match your dashboard theme
const yellowIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png", // Submitted
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const blueIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png", // In Progress
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png", // Completed
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function RequestMap({ requests }) {
  const center = [40.6677, -111.9388];

  const getIcon = (status) => {
    if (status === "Submitted") return yellowIcon;
    if (status === "In Progress") return blueIcon;
    if (status === "Completed") return greenIcon;
    return blueIcon;
  };

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "400px", width: "100%", borderRadius: "8px" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {requests.map((req) => (
        <Marker key={req.id} position={[req.lat, req.lng]} icon={getIcon(req.status)}>
          <Popup>
            <strong>Request #{req.id}</strong>
            <br />
            {req.description}
            <br />
            <b>Status:</b> {req.status}
            <br />
            <b>Location:</b> {req.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default RequestMap;