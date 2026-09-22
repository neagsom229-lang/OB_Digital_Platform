// FILE: src/components/home/PillarDetailCard.jsx
import { motion } from 'framer-motion'
import Badge from '../ui/Badge'
import { BookOpen, AlertCircle, ShieldCheck } from 'lucide-react'

export default function PillarDetailCard({ pillar }) {
  return (
    <motion.div
      key={pillar.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="bg-card border border-subtle rounded-2xl p-6 sm:p-8 space-y-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-subtle">
        <div>
          <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
            Pillar {pillar.number}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-main mt-1">{pillar.title}</h3>
          <p className="text-sm text-muted mt-0.5">{pillar.subtitle}</p>
        </div>
        <Badge variant="brand">{pillar.badge}</Badge>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            Canonical Definition
          </h4>
          <p className="text-sm sm:text-base text-main leading-relaxed">
            {pillar.canonicalDefinition}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-card-subtle p-4 rounded-xl border border-subtle space-y-1.5">
            <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              Behavioral Friction / Tension
            </h5>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">{pillar.friction}</p>
          </div>

          <div className="bg-card-subtle p-4 rounded-xl border border-subtle space-y-1.5">
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Managerial Countermeasure
            </h5>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {pillar.countermeasure}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-subtle">
          <h5 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">
            Peer-Reviewed Empirical Insight:
          </h5>
          <blockquote className="border-l-2 border-indigo-500 pl-4 py-1 text-xs sm:text-sm text-slate-300 italic leading-relaxed">
            &ldquo;{pillar.researchInsight}&rdquo;
          </blockquote>
        </div>
      </div>
    </motion.div>
  )
}