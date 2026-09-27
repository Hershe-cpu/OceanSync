import { useState } from "react";

function Alerts() {
  const [filter, setFilter] = useState("All");

  const alerts = [
    {
      id: 1,
      pod: "Pod 03",
      sensor: "Battery",
      severity: "Warning",
      value: "74%",
      threshold: "< 75%",
      time: "8 min ago",
      status: "Active",
      message: "Battery level is below the recommended operating range.",
    },
    {
      id: 2,
      pod: "Pod 07",
      sensor: "Signal",
      severity: "Warning",
      value: "62%",
      threshold: "< 70%",
      time: "15 min ago",
      status: "Active",
      message: "Communication signal strength is lower than expected.",
    },
    {
      id: 3,
      pod: "Pod 02",
      sensor: "Temperature",
      severity: "Normal",
      value: "-1.7°C",
      threshold: "-2 to 0°C",
      time: "22 min ago",
      status: "Resolved",
      message: "Temperature returned to the expected operating range.",
    },
    {
      id: 4,
      pod: "Pod 05",
      sensor: "Pressure",
      severity: "Normal",
      value: "116.2 bar",
      threshold: "110–120 bar",
      time: "31 min ago",
      status: "Resolved",
      message: "Pressure reading is within the expected range.",
    },
    {
      id: 5,
      pod: "Pod 01",
      sensor: "Transmission",
      severity: "Critical",
      value: "No data",
      threshold: "< 10 min",
      time: "42 min ago",
      status: "Active",
      message: "No transmission received from the sensor pod.",
    },
    {
      id: 6,
      pod: "Pod 08",
      sensor: "Battery",
      severity: "Normal",
      value: "87%",
      threshold: "> 75%",
      time: "1 hr ago",
      status: "Resolved",
      message: "Battery level is operating normally.",
    },
  ];

  const filteredAlerts =
    filter === "All"
      ? alerts
      : alerts.filter((alert) => alert.severity === filter);

  return (
    <div className="alerts-page">

      {/* HEADER */}

      <div className="alerts-page-header">

        <div>
          <h1>Alerts & Events</h1>
          <p>
            Monitor warnings, system events and sensor anomalies
          </p>
        </div>

        <div className="alert-system-status">
          <span></span>
          Monitoring Active
        </div>

      </div>

      {/* SUMMARY */}

      <div className="alert-summary-grid">

        <div className="alert-summary-card critical-card">
          <span>Critical</span>
          <strong>1</strong>
          <small>Requires immediate attention</small>
        </div>

        <div className="alert-summary-card warning-card">
          <span>Warnings</span>
          <strong>2</strong>
          <small>Needs monitoring</small>
        </div>

        <div className="alert-summary-card normal-card">
          <span>Resolved</span>
          <strong>3</strong>
          <small>Recently resolved events</small>
        </div>

        <div className="alert-summary-card">
          <span>Total Events</span>
          <strong>6</strong>
          <small>Recent system events</small>
        </div>

      </div>

      {/* ALERT LIST */}

      <div className="alerts-card">

        <div className="alerts-card-header">

          <div>
            <h2>Recent Alerts</h2>
            <p>Latest events received from the deployment</p>
          </div>

          <div className="alert-filters">

            {["All", "Critical", "Warning", "Normal"].map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        <div className="alert-list">

          {filteredAlerts.map((alert) => (

            <div
              className={`alert-item ${alert.severity.toLowerCase()}`}
              key={alert.id}
            >

              <div className="alert-severity-icon">
                {alert.severity === "Critical" && "!"}
                {alert.severity === "Warning" && "!"}
                {alert.severity === "Normal" && "✓"}
              </div>

              <div className="alert-main">

                <div className="alert-title-row">

                  <strong>{alert.sensor} Alert</strong>

                  <span
                    className={`alert-badge ${alert.severity.toLowerCase()}`}
                  >
                    {alert.severity}
                  </span>

                </div>

                <p>{alert.message}</p>

                <div className="alert-meta">
                  <span>
                    <strong>{alert.pod}</strong>
                  </span>

                  <span>
                    Value: {alert.value}
                  </span>

                  <span>
                    Threshold: {alert.threshold}
                  </span>

                  <span>
                    {alert.time}
                  </span>
                </div>

              </div>

              <div className="alert-status">
                <span
                  className={
                    alert.status === "Active"
                      ? "status-active"
                      : "status-resolved"
                  }
                >
                  {alert.status}
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Alerts;