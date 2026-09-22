// FILE: src/components/home/PlaybookCard.jsx
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { CheckCircle2 } from 'lucide-react'

export default function PlaybookCard({ item }) {
  return (
    <Card className="flex flex-col justify-between h-full space-y-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="purple">{item.category}</Badge>
        </div>
        <h4 className="text-lg font-bold text-main">{item.title}</h4>
        <p className="text-sm text-muted leading-relaxed">{item.principle}</p>
      </div>

      <div className="pt-4 border-t border-subtle">
        <h5 className="text-xs font-bold text-main uppercase tracking-wider mb-3">
          Tactical Actions:
        </h5>
        <ul className="space-y-2.5">
          {item.actions.map((act, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-snug">{act}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}