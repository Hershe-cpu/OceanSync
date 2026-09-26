import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DepthChart() {
  const data = [
    { time: "00:00", depth: 112 },
    { time: "02:00", depth: 114 },
    { time: "04:00", depth: 116 },
    { time: "06:00", depth: 115 },
    { time: "08:00", depth: 118 },
    { time: "10:00", depth: 117 },
    { time: "12:00", depth: 115 },
  ];

  return (
    <div className="chart-card">
      <h2>Depth Trend</h2>
      <p>Last 24 hours</p>

      <ResponsiveContainer width="100%" height={210}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="depth"
            stroke="#1261a0"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DepthChart;