import {
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

const wordData = [
  { day: 1, value: 85 },
  { day: 2, value: 60 },
  { day: 3, value: 72 },
  { day: 4, value: 45 },
  { day: 5, value: 68 },
  { day: 6, value: 58 },
  { day: 7, value: 65 },
  { day: 8, value: 72 },
  { day: 9, value: 78 },
  { day: 10, value: 82 },
  { day: 11, value: 48 },
  { day: 12, value: 38 },
  { day: 13, value: 42 },
  { day: 14, value: 35 },
  { day: 15, value: 40 },
  { day: 16, value: 38 },
  { day: 17, value: 42 },
];

const AVERAGE = 60;

const CustomDot = (props: any) => {
  const { cx, cy, index } = props;
  if (index === 9) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill="white"
        stroke="#5225a0"
        strokeWidth={2}
      />
    );
  }
  return null;
};

const donutData = [
  { name: "30%", value: 30 },
  { name: "70%", value: 70 },
];

const DONUT_COLORS = ["#8b9fd4", "#6b3fa0"];

const renderCustomLabel = ({ cx, cy }: any) => {
  return (
    <g>
      <line
        x1={cx - 28}
        y1={cy - 18}
        x2={cx + 24}
        y2={cy + 18}
        stroke="#ccc"
        strokeWidth={1}
      />
      <text x={cx + 6} y={cy - 6} textAnchor="middle" fill="#888" fontSize={11}>
        30%
      </text>
      <text
        x={cx - 6}
        y={cy + 22}
        textAnchor="middle"
        fill="#6b3fa0"
        fontSize={14}
        fontWeight="bold"
      >
        70%
      </text>
    </g>
  );
};

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 mb-4">
      {/* Line Chart */}
      <div className="lg:col-span-5 bg-purple-50 rounded-lg p-4">
        <h3 className="font-semibold text-black text-sm mb-3">
          Words Used this Month
        </h3>
        <div className="h-32 outline-none focus:outline-none">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={wordData}
              margin={{ top: 5, right: 5, left: -30, bottom: 0 }}
            >
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5225a0" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#5225a0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis domain={[20, 100]} hide />
              <ReferenceLine
                y={AVERAGE}
                stroke="#4db8c8"
                strokeDasharray="4 4"
                strokeWidth={1.5}
              />
              <ReferenceLine
                x={10}
                stroke="#5225a0"
                strokeDasharray="3 3"
                strokeWidth={1.5}
              />
              <Area
                type="linear"
                dataKey="value"
                stroke="#5225a0"
                strokeWidth={2}
                fill="url(#areaGrad)"
                dot={<CustomDot />}
                activeDot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="lg:col-span-3 bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
        <h3 className="font-semibold text-black text-sm mb-3">
          Speech to text
        </h3>
        <div className="flex items-center justify-center h-32 mb-3">
          <PieChart width={130} height={130}>
            <Pie
              data={donutData}
              cx={65}
              cy={65}
              innerRadius={42}
              outerRadius={58}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              labelLine={false}
              label={renderCustomLabel}
            >
              {donutData.map((_, index) => (
                <Cell key={index} fill={DONUT_COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
}
