// FILE: src/components/lexicon/CategoryFilterChips.jsx
export default function CategoryFilterChips({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelect(cat)}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              isActive
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                : 'bg-card-subtle text-muted border-subtle hover:border-hover hover:text-main'
            }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}