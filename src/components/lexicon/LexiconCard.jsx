// FILE: src/components/lexicon/LexiconCard.jsx
import { Link } from 'lucide-react'
import { useClipboard } from '../../hooks/useClipboard'
import { useToast } from '../../context/ToastContext'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function LexiconCard({ item }) {
  const { copy } = useClipboard()
  const { showToast } = useToast()

  const handleCopyLink = async () => {
    const url = `${window.location.origin}/lexicon#${item.id}`
    const ok = await copy(url)
    if (ok) {
      showToast(`Copied link to "${item.term}"`, 'success')
    }
  }

  const categoryVariants = {
    Core: 'brand',
    Micro: 'brand',
    Meso: 'purple',
    'Meso/Macro': 'purple',
    Macro: 'success',
    Execution: 'warning',
  }

  return (
    <Card id={item.id} className="flex flex-col justify-between h-full scroll-mt-28">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant={categoryVariants[item.category] || 'default'} size="sm">
            {item.category}
          </Badge>
          <button
            onClick={handleCopyLink}
            className="text-muted hover:text-main p-1 rounded-md transition-colors cursor-pointer"
            aria-label={`Copy link to ${item.term}`}
            title="Copy deep link"
          >
            <Link className="w-3.5 h-3.5" />
          </button>
        </div>

        <h3 className="text-base font-bold text-main leading-snug">{item.term}</h3>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">{item.definition}</p>
      </div>

      <div className="pt-4 border-t border-subtle mt-4">
        <span className="text-[11px] font-mono text-faint block">
          Source: {item.source}
        </span>
      </div>
    </Card>
  )
}