// FILE: src/components/lexicon/LexiconPage.jsx
import { useState, useMemo } from 'react'
import { lexiconTerms } from '../../data/lexicon'
import LexiconSearch from './LexiconSearch'
import CategoryFilterChips from './CategoryFilterChips'
import LexiconCard from './LexiconCard'
import Badge from '../ui/Badge'
import { BookOpen } from 'lucide-react'

export default function LexiconPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Core', 'Micro', 'Meso', 'Macro', 'Execution']

  const filteredTerms = useMemo(() => {
    return lexiconTerms.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' ||
        item.category === activeCategory ||
        (activeCategory === 'Meso' && item.category.includes('Meso')) ||
        (activeCategory === 'Macro' && item.category.includes('Macro'))

      const query = searchTerm.toLowerCase().trim()
      const matchesSearch =
        !query ||
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query) ||
        item.source.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [searchTerm, activeCategory])

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <Badge variant="brand" className="mb-3">
            <BookOpen className="w-3 h-3 mr-1" />
            Knowledge Repository
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-main tracking-tight">
            The Digital OB Lexicon
          </h1>
          <p className="mt-3 text-base text-muted leading-relaxed">
            36 standardized organizational psychology definitions, execution concepts, and socio-technical terms for remote, hybrid, and AI-enabled teams.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="w-full sm:max-w-md">
            <LexiconSearch
              value={searchTerm}
              onChange={setSearchTerm}
              onClear={() => setSearchTerm('')}
            />
          </div>
          <CategoryFilterChips
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        {/* Term Grid */}
        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((item) => (
              <LexiconCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-card border border-subtle rounded-2xl space-y-3">
            <p className="text-sm font-semibold text-main">No matching terms found</p>
            <p className="text-xs text-muted">
              Try adjusting your search query or switching the category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}