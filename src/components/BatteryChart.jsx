import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function BatteryChart() {
  const data = [
    { time: "00:00", battery: 88 },
    { time: "02:00", battery: 87 },
    { time: "04:00", battery: 87 },
    { time: "06:00", battery: 86 },
    { time: "08:00", battery: 86 },
    { time: "10:00", battery: 85 },
    { time: "12:00", battery: 84 },
  ];

  return (
    <div className="chart-card">
      <h2>Battery Trend</h2>
      <p>Last 24 hours</p>

      <ResponsiveContainer width="100%" height={210}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="battery"
            stroke="#1261a0"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BatteryChart;