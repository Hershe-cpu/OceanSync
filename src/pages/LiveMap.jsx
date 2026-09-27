import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

function LiveMap() {
  // =========================
  // CUSTOM MAP ICONS
  // =========================

  const gatewayIcon = L.divIcon({
    className: "custom-map-icon",
    html: `<div class="gateway-marker">G</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  const onlineIcon = L.divIcon({
    className: "custom-map-icon",
    html: `<div class="online-marker"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  const warningIcon = L.divIcon({
    className: "custom-map-icon",
    html: `<div class="warning-marker"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  // =========================
  // DEPLOYMENT DATA
  // =========================

  const gateway = [-64.7, -59.1];

  const pods = [
    {
      id: "Pod 01",
      position: [-64.2, -58.8],
      status: "Online",
      battery: "86%",
      depth: "115 m",
    },
    {
      id: "Pod 02",
      position: [-64.8, -59.5],
      status: "Online",
      battery: "82%",
      depth: "120 m",
    },
    {
      id: "Pod 03",
      position: [-65.4, -60.2],
      status: "Warning",
      battery: "74%",
      depth: "108 m",
    },
    {
      id: "Pod 04",
      position: [-64.5, -58.2],
      status: "Online",
      battery: "91%",
      depth: "112 m",
    },
    {
      id: "Pod 05",
      position: [-65.1, -58.9],
      status: "Online",
      battery: "88%",
      depth: "125 m",
    },
    {
      id: "Pod 06",
      position: [-65.7, -59.7],
      status: "Online",
      battery: "83%",
      depth: "118 m",
    },
    {
      id: "Pod 07",
      position: [-64.9, -60.5],
      status: "Warning",
      battery: "69%",
      depth: "130 m",
    },
    {
      id: "Pod 08",
      position: [-65.5, -61.0],
      status: "Online",
      battery: "87%",
      depth: "121 m",
    },
    {
      id: "Pod 09",
      position: [-64.4, -59.8],
      status: "Online",
      battery: "90%",
      depth: "110 m",
    },
    {
      id: "Pod 10",
      position: [-65.8, -60.4],
      status: "Online",
      battery: "81%",
      depth: "135 m",
    },
    {
      id: "Pod 11",
      position: [-64.7, -61.2],
      status: "Online",
      battery: "85%",
      depth: "117 m",
    },
    {
      id: "Pod 12",
      position: [-65.2, -61.8],
      status: "Online",
      battery: "89%",
      depth: "128 m",
    },
  ];

  return (
    <div className="live-map-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="live-map-header">
        <div>
          <h1>Live Deployment Map</h1>

          <p>
            Real-time view of sensor pods and gateway buoy deployment
          </p>
        </div>

        <div className="map-live-status">
          <span></span>
          System Online
        </div>
      </div>

      {/* =========================
          MAIN MAP + STATUS PANEL
      ========================= */}

      <div className="live-map-layout">

        {/* MAP */}

        <div className="live-map-container">

          <MapContainer
            center={[-64.7, -59.5]}
            zoom={5}
            scrollWheelZoom={true}
            style={{
              height: "520px",
              width: "100%",
              borderRadius: "12px",
            }}
          >

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Gateway */}

            <Marker
              position={gateway}
              icon={gatewayIcon}
            >
              <Popup>
                <strong>Gateway Buoy</strong>

                <br />

                Status: Connected

                <br />

                Location: 64.700° S, 59.100° W
              </Popup>
            </Marker>

            {/* Sensor Pods */}

            {pods.map((pod) => (
              <Marker
                key={pod.id}
                position={pod.position}
                icon={
                  pod.status === "Warning"
                    ? warningIcon
                    : onlineIcon
                }
              >
                <Popup>

                  <strong>{pod.id}</strong>

                  <br />

                  Status: {pod.status}

                  <br />

                  Battery: {pod.battery}

                  <br />

                  Depth: {pod.depth}

                  <br />

                  Location:{" "}
                  {Math.abs(pod.position[0]).toFixed(3)}° S,{" "}
                  {Math.abs(pod.position[1]).toFixed(3)}° W

                </Popup>
              </Marker>
            ))}

            {/* Gateway → Pods */}

            {pods.map((pod) => (
              <Polyline
                key={`line-${pod.id}`}
                positions={[
                  gateway,
                  pod.position,
                ]}
              />
            ))}

          </MapContainer>

        </div>

        {/* =========================
            DEPLOYMENT PANEL
        ========================= */}

        <div className="deployment-panel">

          <div className="panel-header">

            <h2>Deployment Status</h2>

            <span>12 Pods</span>

          </div>

          {/* Gateway */}

          <div className="gateway-status">

            <div className="status-dot online"></div>

            <div>

              <strong>Gateway Buoy</strong>

              <p>Connected</p>

            </div>

          </div>

          {/* Pods */}

          <div className="pod-list">

            {pods.map((pod) => (

              <div
                className="pod-item"
                key={pod.id}
              >

                <div>

                  <strong>{pod.id}</strong>

                  <p>
                    {Math.abs(pod.position[0]).toFixed(3)}° S,{" "}
                    {Math.abs(pod.position[1]).toFixed(3)}° W
                  </p>

                </div>

                <div className="pod-details">

                  <span
                    className={
                      pod.status === "Warning"
                        ? "pod-warning"
                        : "pod-online"
                    }
                  >
                    {pod.status}
                  </span>

                  <small>
                    {pod.battery}
                  </small>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* =========================
          BOTTOM STATISTICS
      ========================= */}

      <div className="map-info-grid">

        <div className="map-info-card">

          <span>Active Pods</span>

          <strong>12 / 12</strong>

        </div>

        <div className="map-info-card">

          <span>Gateway Status</span>

          <strong>Connected</strong>

        </div>

        <div className="map-info-card">

          <span>Last Transmission</span>

          <strong>2 min ago</strong>

        </div>

        <div className="map-info-card">

          <span>Average Battery</span>

          <strong>84%</strong>

        </div>

      </div>

    </div>
  );
}

export default LiveMap;