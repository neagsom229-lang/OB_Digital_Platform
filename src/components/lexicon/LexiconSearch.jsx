// FILE: src/components/lexicon/LexiconSearch.jsx
import { Search, X } from 'lucide-react'

export default function LexiconSearch({ value, onChange, onClear }) {
  return (
    <div className="relative">
      <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search 36 OB terms, authors, or theories..."
        className="w-full bg-card border border-subtle hover:border-hover text-main rounded-xl pl-10 pr-10 py-2.5 text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
      />
      {value && (
        <button
          onClick={onClear}
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-main p-1 cursor-pointer"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}