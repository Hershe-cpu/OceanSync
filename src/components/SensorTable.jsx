function SensorTable() {
  const sensors = [
    {
      id: "Pod 01",
      temperature: "-1.5 °C",
      depth: "115 m",
      battery: "86%",
      status: "Online",
    },
    {
      id: "Pod 02",
      temperature: "-1.7 °C",
      depth: "120 m",
      battery: "82%",
      status: "Online",
    },
    {
      id: "Pod 03",
      temperature: "-1.3 °C",
      depth: "108 m",
      battery: "74%",
      status: "Warning",
    },
  ];

  return (
    <div className="sensor-table-card">
      <div className="table-header">
        <div>
          <h2>Sensor Pods</h2>
          <p>Current deployment status</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sensor Pod</th>
            <th>Temperature</th>
            <th>Depth</th>
            <th>Battery</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {sensors.map((sensor) => (
            <tr key={sensor.id}>
              <td>{sensor.id}</td>
              <td>{sensor.temperature}</td>
              <td>{sensor.depth}</td>
              <td>{sensor.battery}</td>
              <td>
                <span className={`status-badge ${sensor.status.toLowerCase()}`}>
                  {sensor.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SensorTable;