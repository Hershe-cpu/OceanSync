import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TemperatureChart() {
  const data = [
    { time: "00:00", temperature: -1.8 },
    { time: "02:00", temperature: -1.7 },
    { time: "04:00", temperature: -1.9 },
    { time: "06:00", temperature: -1.6 },
    { time: "08:00", temperature: -1.5 },
    { time: "10:00", temperature: -1.7 },
    { time: "12:00", temperature: -1.4 },
  ];

  return (
    <div className="chart-card">
      <h2>Temperature Trend</h2>
      <p>Last 24 hours</p>

    <ResponsiveContainer width="100%" height={210}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#1261a0"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureChart;