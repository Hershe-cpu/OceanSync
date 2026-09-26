function Sidebar() {
  return (
    <aside className="sidebar">
    <div className="logo">
      <h2>OCEANSYNC</h2>
      <span>POLAR OCEAN MONITORING</span>
    </div>

      <nav className="nav">
        <p className="active">Overview</p>
        <p>Live Map</p>
        <p>Sensor Data</p>
        <p>Analytics</p>
        <p>Alerts</p>
        <p>Reports</p>
        <p>Settings</p>
      </nav>
    </aside>
  );
}

export default Sidebar;
