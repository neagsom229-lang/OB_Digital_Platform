// FILE: src/components/audit/AuditResult.jsx
import Badge from '../ui/Badge'
import ScoreGauge from './ScoreGauge'
import AuditRadarChart from './AuditRadarChart'

export default function AuditResult({ result, answers }) {
  return (
    <div className="bg-card border border-subtle rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="text-center space-y-2">
        <Badge variant={result.variant} size="md">
          {result.tier}
        </Badge>
        <h3 className="text-2xl font-bold text-main">{result.label}</h3>
        <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
          {result.description}
        </p>
      </div>

      <ScoreGauge score={result.totalScore} maxScore={result.maxScore} />

      {/* Threshold Legend */}
      <div className="p-3.5 rounded-xl bg-card-subtle border border-subtle space-y-1.5 text-xs">
        <div className="font-semibold text-main">Scoring Thresholds:</div>
        <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
          <div className="p-1.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
            6–14: Crisis
          </div>
          <div className="p-1.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
            15–22: Fragmented
          </div>
          <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            23–30: High-Trust
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-subtle">
        <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2 text-center">
          Dimensional Maturity Map
        </h4>
        <AuditRadarChart answers={answers} />
      </div>

      <p className="text-[11px] text-faint text-center italic">
        This audit is a reflective self-assessment tool, not a validated psychometric instrument.
      </p>
    </div>
  )
}