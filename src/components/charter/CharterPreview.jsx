// FILE: src/components/charter/CharterPreview.jsx
import { generateCharterMarkdown } from '../../utils/generateCharterMarkdown'
import { downloadFile } from '../../utils/downloadFile'
import { useClipboard } from '../../hooks/useClipboard'
import { useToast } from '../../context/ToastContext'
import Button from '../ui/Button'
import { Copy, Download, Check } from 'lucide-react'

export default function CharterPreview({ data }) {
  const markdown = generateCharterMarkdown(data)
  const { copy, copied } = useClipboard()
  const { showToast } = useToast()

  const safeTeamName = (data.teamName || 'team').toLowerCase().replace(/[^a-z0-9]/g, '_')
  const filename = `${safeTeamName}_working_agreement.md`

  const handleCopy = async () => {
    const success = await copy(markdown)
    if (success) {
      showToast('Charter Markdown copied to clipboard', 'success')
    } else {
      showToast('Could not copy to clipboard', 'error')
    }
  }

  const handleDownload = () => {
    downloadFile(filename, markdown)
    showToast(`Downloaded ${filename}`, 'success')
  }

  return (
    <div className="bg-card border border-subtle rounded-2xl flex flex-col h-full overflow-hidden">
      <div className="px-5 py-4 border-b border-subtle flex items-center justify-between bg-card-subtle/50">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block">
            Live Preview
          </span>
          <span className="text-sm font-semibold text-main">{filename}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={handleCopy}>
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy MD'}
          </Button>
          <Button variant="primary" size="sm" onClick={handleDownload}>
            <Download className="w-3.5 h-3.5" />
            Download .md
          </Button>
        </div>
      </div>

<div className="p-5 flex-1 overflow-auto max-h-[600px] bg-slate-950/40 text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-wrap break-words select-all">
  {markdown}
</div>
    </div>
  )
}