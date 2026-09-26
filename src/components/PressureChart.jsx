import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PressureChart() {
  const data = [
    { time: "00:00", pressure: 114.8 },
    { time: "02:00", pressure: 115.1 },
    { time: "04:00", pressure: 115.4 },
    { time: "06:00", pressure: 115.0 },
    { time: "08:00", pressure: 115.6 },
    { time: "10:00", pressure: 115.3 },
    { time: "12:00", pressure: 115.2 },
  ];

  return (
    <div className="chart-card">
      <h2>Pressure Trend</h2>
      <p>Last 24 hours</p>

      <ResponsiveContainer width="100%" height={210}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="pressure"
            stroke="#1261a0"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PressureChart;