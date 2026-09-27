import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

function OverviewMap() {
  const pods = [
    {
      id: "Pod 01",
      position: [-64.2, -58.8],
      status: "Online",
      battery: "86%",
    },
    {
      id: "Pod 02",
      position: [-64.8, -59.5],
      status: "Online",
      battery: "82%",
    },
    {
      id: "Pod 03",
      position: [-65.4, -60.2],
      status: "Warning",
      battery: "74%",
    },
  ];

  const gateway = [-64.7, -59.1];

  return (
    <div className="overview-map-card">
      <div className="overview-map-header">
        <div>
          <h2>Deployment Overview</h2>
          <p>Current sensor pod locations</p>
        </div>

        <span className="map-status">12 Pods Active</span>
      </div>

      <div className="overview-map">
        <MapContainer
          center={[-64.7, -59.5]}
          zoom={4}
          scrollWheelZoom={false}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={gateway}>
            <Popup>
              <strong>Gateway Buoy</strong>
              <br />
              Status: Connected
            </Popup>
          </Marker>

          {pods.map((pod) => (
            <Marker key={pod.id} position={pod.position}>
              <Popup>
                <strong>{pod.id}</strong>
                <br />
                Status: {pod.status}
                <br />
                Battery: {pod.battery}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <Link to="/live-map" className="view-map-button">
        View Full Live Map →
      </Link>
    </div>
  );
}

export default OverviewMap;