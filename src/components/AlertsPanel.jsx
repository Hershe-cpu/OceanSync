function AlertsPanel() {
  const alerts = [
    {
      pod: "Pod 03",
      message: "Battery level below normal",
      time: "8 min ago",
      type: "warning",
    },
    {
      pod: "Pod 07",
      message: "Signal strength is low",
      time: "15 min ago",
      type: "warning",
    },
    {
      pod: "Pod 02",
      message: "Sensor data received",
      time: "22 min ago",
      type: "normal",
    },
  ];

  return (
    <div className="alerts-card">
      <div className="alerts-header">
        <div>
          <h2>Recent Alerts</h2>
          <p>System notifications</p>
        </div>

        <span className="alert-count">{alerts.length}</span>
      </div>

      <div className="alerts-list">
        {alerts.map((alert, index) => (
          <div className="alert-item" key={index}>
            <div className={`alert-icon ${alert.type}`}>
              !
            </div>

            <div className="alert-info">
              <strong>{alert.pod}</strong>
              <p>{alert.message}</p>
              <span>{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlertsPanel;
