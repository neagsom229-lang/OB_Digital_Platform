// FILE: src/components/home/TierCard.jsx
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function TierCard({ level, title, description, points, badgeVariant = 'brand' }) {
  return (
    <Card className="flex flex-col justify-between h-full hover:border-hover">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-bold text-muted uppercase tracking-wider">
            {level}
          </span>
          <Badge variant={badgeVariant}>{title}</Badge>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>
      </div>

      <div className="pt-4 border-t border-subtle">
        <h4 className="text-xs font-semibold text-main uppercase tracking-wider mb-2.5">
          Key Dynamics:
        </h4>
        <ul className="space-y-2 text-xs text-muted">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1 shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}