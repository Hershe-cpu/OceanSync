import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import ConditionCard from "./components/ConditionCard";
import SensorTable from "./components/SensorTable";
import TemperatureChart from "./components/TemperatureChart";
import PressureChart from "./components/PressureChart";
import Depthgraph from "./components/Depthgraph";
import BatteryChart from "./components/BatteryChart";
import AlertsPanel from "./components/AlertsPanel";
function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Header />

        <div className="stats-grid">
          <StatCard
            title="Total Sensor Pods"
            value="12"
            subtitle="All systems active"
          />

          <StatCard
            title="Gateway Buoy"
            value="01"
            subtitle="Connected"
          />

          <StatCard
            title="Last Transmission"
            value="2 min"
            subtitle="Received recently"
          />

          <StatCard
            title="Average Battery"
            value="84%"
            subtitle="Healthy"
          />
        </div>

        <h2 className="section-title">Ocean Conditions</h2>

        <div className="conditions-grid">
          <ConditionCard
            title="Temperature"
            value="-1.8"
            unit="°C"
          />

          <ConditionCard
            title="Pressure"
            value="115.2"
            unit="bar"
          />

          <ConditionCard
            title="Depth"
            value="115"
            unit="m"
          />

          <ConditionCard
            title="Battery"
            value="86"
            unit="%"
          />
        </div>

        <h2 className="section-title">Analytics</h2>

        <div className="charts-grid">
          <TemperatureChart />
          <PressureChart />
          <Depthgraph />
          <BatteryChart />

        </div>
        <div className="bottom-grid">
          <SensorTable />
          <AlertsPanel />
        </div>
      </main>
    </div>
  );
}

export default App;