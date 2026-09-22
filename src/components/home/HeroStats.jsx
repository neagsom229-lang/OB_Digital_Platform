// FILE: src/components/home/HeroStats.jsx
import { useCountUp } from '../../hooks/useCountUp'
import { motion, useReducedMotion } from 'framer-motion'

function StatItem({ value, label }) {
  const shouldReduceMotion = useReducedMotion()
  const displayValue = shouldReduceMotion ? value : useCountUp(value, 1000)

  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <div className="text-3xl sm:text-4xl font-extrabold text-main font-mono tracking-tight">
        {displayValue}
      </div>
      <div className="text-xs sm:text-sm font-medium text-muted mt-1">{label}</div>
    </div>
  )
}

export default function HeroStats() {
  const stats = [
    { value: 3, label: 'OB Analysis Levels' },
    { value: 5, label: 'Core Digital Pillars' },
    { value: 36, label: 'Standardized Terms' },
    { value: 2, label: 'Operational Tools' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-subtle mt-10 max-w-4xl"
    >
      {stats.map((stat, i) => (
        <StatItem key={i} value={stat.value} label={stat.label} />
      ))}
    </motion.div>
  )
}