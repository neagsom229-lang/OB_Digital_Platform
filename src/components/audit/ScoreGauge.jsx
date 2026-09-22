// FILE: src/components/audit/ScoreGauge.jsx
import { motion, useReducedMotion } from 'framer-motion'

export default function ScoreGauge({ score, maxScore = 30 }) {
  const shouldReduceMotion = useReducedMotion()
  const radius = 58
  const strokeWidth = 10
  const circumference = 2 * Math.PI * radius
  const percentage = Math.min(Math.max(score / maxScore, 0), 1)
  const strokeDashoffset = circumference - percentage * circumference

  let strokeColor = '#6366f1'
  if (score <= 14) strokeColor = '#f43f5e'
  else if (score <= 22) strokeColor = '#f59e0b'
  else strokeColor = '#10b981'

  return (
    <div className="relative flex items-center justify-center w-36 h-36 mx-auto">
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 140 140">
        <circle
          cx="70"
          cy="70"
          r={radius}
          className="stroke-slate-800"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: shouldReduceMotion ? strokeDashoffset : strokeDashoffset }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-extrabold font-mono text-main tracking-tight">
          {score}
        </span>
        <span className="text-[11px] font-medium text-muted uppercase tracking-wider">
          / {maxScore} pts
        </span>
      </div>
    </div>
  )
}