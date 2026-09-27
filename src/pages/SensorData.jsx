import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SensorData() {
  const [selectedPod, setSelectedPod] = useState(null);
  const [range, setRange] = useState("30D");

  const sensors = [
    {
      id: "Pod 01",
      temperature: "-1.5 °C",
      pressure: "115.2 bar",
      depth: "115 m",
      battery: "86%",
      status: "Online",
      location: "64.200° S, 58.800° W",
    },
    {
      id: "Pod 02",
      temperature: "-1.7 °C",
      pressure: "116.1 bar",
      depth: "120 m",
      battery: "82%",
      status: "Online",
      location: "64.800° S, 59.500° W",
    },
    {
      id: "Pod 03",
      temperature: "-1.3 °C",
      pressure: "114.8 bar",
      depth: "108 m",
      battery: "74%",
      status: "Warning",
      location: "65.400° S, 60.200° W",
    },
    {
      id: "Pod 04",
      temperature: "-1.6 °C",
      pressure: "115.5 bar",
      depth: "112 m",
      battery: "91%",
      status: "Online",
      location: "64.500° S, 58.200° W",
    },
    {
      id: "Pod 05",
      temperature: "-1.8 °C",
      pressure: "116.2 bar",
      depth: "125 m",
      battery: "88%",
      status: "Online",
      location: "65.100° S, 58.900° W",
    },
    {
      id: "Pod 06",
      temperature: "-1.4 °C",
      pressure: "115.7 bar",
      depth: "118 m",
      battery: "83%",
      status: "Online",
      location: "65.700° S, 59.700° W",
    },
    {
      id: "Pod 07",
      temperature: "-1.2 °C",
      pressure: "117.0 bar",
      depth: "130 m",
      battery: "69%",
      status: "Warning",
      location: "64.900° S, 60.500° W",
    },
    {
      id: "Pod 08",
      temperature: "-1.6 °C",
      pressure: "115.9 bar",
      depth: "121 m",
      battery: "87%",
      status: "Online",
      location: "65.500° S, 61.000° W",
    },
  ];

  const historyData = {
    "24H": [
      { time: "00:00", temperature: -1.8, pressure: 114.9, depth: 113, battery: 87 },
      { time: "04:00", temperature: -1.7, pressure: 115.1, depth: 114, battery: 87 },
      { time: "08:00", temperature: -1.6, pressure: 115.4, depth: 115, battery: 86 },
      { time: "12:00", temperature: -1.5, pressure: 115.2, depth: 116, battery: 86 },
      { time: "16:00", temperature: -1.4, pressure: 115.5, depth: 115, battery: 86 },
      { time: "20:00", temperature: -1.5, pressure: 115.3, depth: 114, battery: 86 },
      { time: "Now", temperature: -1.5, pressure: 115.2, depth: 115, battery: 86 },
    ],

    "7D": [
      { time: "Sep 20", temperature: -1.9, pressure: 114.7, depth: 112, battery: 89 },
      { time: "Sep 21", temperature: -1.8, pressure: 115.0, depth: 114, battery: 88 },
      { time: "Sep 22", temperature: -1.7, pressure: 115.2, depth: 115, battery: 88 },
      { time: "Sep 23", temperature: -1.6, pressure: 115.4, depth: 116, battery: 87 },
      { time: "Sep 24", temperature: -1.5, pressure: 115.1, depth: 115, battery: 87 },
      { time: "Sep 25", temperature: -1.4, pressure: 115.3, depth: 114, battery: 86 },
      { time: "Sep 26", temperature: -1.5, pressure: 115.2, depth: 115, battery: 86 },
    ],

    "30D": [
      { time: "Aug 28", temperature: -2.1, pressure: 113.9, depth: 111, battery: 100 },
      { time: "Sep 01", temperature: -2.0, pressure: 114.2, depth: 113, battery: 97 },
      { time: "Sep 05", temperature: -1.8, pressure: 114.7, depth: 114, battery: 94 },
      { time: "Sep 09", temperature: -1.7, pressure: 115.0, depth: 116, battery: 91 },
      { time: "Sep 13", temperature: -1.6, pressure: 115.3, depth: 115, battery: 89 },
      { time: "Sep 17", temperature: -1.5, pressure: 115.5, depth: 117, battery: 87 },
      { time: "Sep 21", temperature: -1.4, pressure: 115.3, depth: 114, battery: 86 },
      { time: "Sep 26", temperature: -1.5, pressure: 115.2, depth: 115, battery: 86 },
    ],
  };

  const selectedHistory = historyData[range];

  /* =========================
     POD DETAILS VIEW
  ========================= */

  if (selectedPod) {
    return (
      <div className="sensor-page">

        <button
          className="back-button"
          onClick={() => setSelectedPod(null)}
        >
          ← Back to Sensor Data
        </button>

        <div className="pod-detail-header">

          <div>
            <div className="pod-title-row">
              <h1>{selectedPod.id}</h1>

              <span
                className={
                  selectedPod.status === "Warning"
                    ? "table-status warning"
                    : "table-status online"
                }
              >
                {selectedPod.status}
              </span>
            </div>

            <p>
              Polar ocean observation sensor pod ·{" "}
              {selectedPod.location}
            </p>
          </div>

          <div className="pod-last-update">
            Last transmission
            <strong>2 min ago</strong>
          </div>

        </div>

        {/* CURRENT VALUES */}

        <div className="pod-current-grid">

          <div className="pod-current-card">
            <span>Temperature</span>
            <strong>{selectedPod.temperature}</strong>
            <small>Ocean temperature</small>
          </div>

          <div className="pod-current-card">
            <span>Pressure</span>
            <strong>{selectedPod.pressure}</strong>
            <small>Water pressure</small>
          </div>

          <div className="pod-current-card">
            <span>Depth</span>
            <strong>{selectedPod.depth}</strong>
            <small>Current depth</small>
          </div>

          <div className="pod-current-card">
            <span>Battery</span>
            <strong>{selectedPod.battery}</strong>
            <small>Remaining capacity</small>
          </div>

        </div>

        {/* HISTORY */}

        <div className="history-card">

          <div className="history-header">

            <div>
              <h2>Historical Sensor Data</h2>
              <p>Sensor readings over the selected period</p>
            </div>

            <div className="range-buttons">

              {["24H", "7D", "30D"].map((item) => (
                <button
                  key={item}
                  className={range === item ? "active" : ""}
                  onClick={() => setRange(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* TEMPERATURE */}

          <div className="history-chart-section">

            <div className="history-chart-title">
              <span>Temperature</span>
              <strong>{selectedPod.temperature}</strong>
            </div>

            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={selectedHistory}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#0b5f8a"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

          {/* PRESSURE */}

          <div className="history-chart-section">

            <div className="history-chart-title">
              <span>Pressure</span>
              <strong>{selectedPod.pressure}</strong>
            </div>

            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={selectedHistory}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="pressure"
                  stroke="#247ba0"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

          {/* DEPTH */}

          <div className="history-chart-section">

            <div className="history-chart-title">
              <span>Depth</span>
              <strong>{selectedPod.depth}</strong>
            </div>

            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={selectedHistory}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="depth"
                  stroke="#20b486"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

          {/* BATTERY */}

          <div className="history-chart-section">

            <div className="history-chart-title">
              <span>Battery</span>
              <strong>{selectedPod.battery}</strong>
            </div>

            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={selectedHistory}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="battery"
                  stroke="#f59f00"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* TRANSMISSION HISTORY */}

        <div className="transmission-card">

          <div className="history-header">
            <div>
              <h2>Transmission History</h2>
              <p>Recent communication records from this pod</p>
            </div>
          </div>

          <table className="sensor-data-table">

            <thead>
              <tr>
                <th>Date</th>
                <th>Readings</th>
                <th>Data Quality</th>
                <th>Transmission</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Sep 26, 2026</td>
                <td>1,428</td>
                <td>99.2%</td>
                <td>
                  <span className="table-status online">
                    Successful
                  </span>
                </td>
              </tr>

              <tr>
                <td>Sep 25, 2026</td>
                <td>1,436</td>
                <td>98.8%</td>
                <td>
                  <span className="table-status online">
                    Successful
                  </span>
                </td>
              </tr>

              <tr>
                <td>Sep 24, 2026</td>
                <td>1,391</td>
                <td>96.4%</td>
                <td>
                  <span className="table-status warning">
                    Partial
                  </span>
                </td>
              </tr>

              <tr>
                <td>Sep 23, 2026</td>
                <td>1,442</td>
                <td>99.5%</td>
                <td>
                  <span className="table-status online">
                    Successful
                  </span>
                </td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>
    );
  }

  /* =========================
     SENSOR LIST VIEW
  ========================= */

  return (
    <div className="sensor-page">

      <div className="sensor-page-header">

        <div>
          <h1>Sensor Data</h1>
          <p>
            Monitor real-time readings from deployed sensor pods
          </p>
        </div>

        <div className="sensor-summary">
          <span className="summary-dot"></span>
          12 Sensors Active
        </div>

      </div>

      <div className="sensor-summary-grid">

        <div className="sensor-summary-card">
          <span>Total Sensors</span>
          <strong>12</strong>
          <small>Deployed pods</small>
        </div>

        <div className="sensor-summary-card">
          <span>Online</span>
          <strong>10</strong>
          <small>Currently transmitting</small>
        </div>

        <div className="sensor-summary-card">
          <span>Warnings</span>
          <strong>2</strong>
          <small>Require attention</small>
        </div>

        <div className="sensor-summary-card">
          <span>Data Quality</span>
          <strong>98.4%</strong>
          <small>Valid readings</small>
        </div>

      </div>

      <div className="sensor-data-card">

        <div className="sensor-table-header">

          <div>
            <h2>Live Sensor Readings</h2>
            <p>
              Click any sensor pod to view its complete history
            </p>
          </div>

          <select className="sensor-filter">
            <option>All Sensors</option>
            <option>Online</option>
            <option>Warning</option>
          </select>

        </div>

        <div className="sensor-data-table-wrapper">

          <table className="sensor-data-table">

            <thead>
              <tr>
                <th>Sensor Pod</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Depth</th>
                <th>Battery</th>
                <th>Status</th>
                <th>Last Update</th>
              </tr>
            </thead>

            <tbody>

              {sensors.map((sensor, index) => (

                <tr
                  key={sensor.id}
                  className="clickable-sensor-row"
                  onClick={() => setSelectedPod(sensor)}
                >

                  <td>
                    <div className="sensor-name">
                      <span className="sensor-icon">●</span>
                      <strong>{sensor.id}</strong>
                    </div>
                  </td>

                  <td>{sensor.temperature}</td>

                  <td>{sensor.pressure}</td>

                  <td>{sensor.depth}</td>

                  <td>
                    <div className="battery-cell">
                      <span>{sensor.battery}</span>

                      <div className="battery-bar">
                        <div
                          className={
                            Number(
                              sensor.battery.replace("%", "")
                            ) < 75
                              ? "battery-fill warning"
                              : "battery-fill"
                          }
                          style={{
                            width: sensor.battery,
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span
                      className={
                        sensor.status === "Warning"
                          ? "table-status warning"
                          : "table-status online"
                      }
                    >
                      {sensor.status}
                    </span>
                  </td>

                  <td>
                    <span className="last-update">
                      {index % 2 === 0
                        ? "2 min ago"
                        : "3 min ago"}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default SensorData;