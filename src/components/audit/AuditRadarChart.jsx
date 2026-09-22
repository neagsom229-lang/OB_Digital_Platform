// FILE: src/components/audit/AuditRadarChart.jsx
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'

export default function AuditRadarChart({ answers }) {
  const data = [
    { dimension: 'Async Maturity', value: Number(answers.q1) || 0 },
    { dimension: 'Output Trust', value: Number(answers.q2) || 0 },
    { dimension: 'Psych Safety', value: Number(answers.q3) || 0 },
    { dimension: 'Boundaries', value: Number(answers.q4) || 0 },
    { dimension: 'AI Teaming', value: Number(answers.q5) || 0 },
    { dimension: 'Hybrid Equity', value: Number(answers.q6) || 0 },
  ]

  return (
    <div className="w-full h-64 sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#374151" strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: 500 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 5]}
            tick={{ fill: '#6b7280', fontSize: 9 }}
          />
          <Radar
            name="Score"
            dataKey="value"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}