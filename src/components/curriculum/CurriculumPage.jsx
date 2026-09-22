// FILE: src/components/curriculum/CurriculumPage.jsx
import { useState, useMemo } from 'react'
import { curriculumModules } from '../../data/curriculum'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { BookOpen, GraduationCap, CheckCircle2, ChevronRight, Layers, Search } from 'lucide-react'

export default function CurriculumPage() {
  const [selectedTier, setSelectedTier] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeModule, setActiveModule] = useState(curriculumModules[0])

  const tiers = ['All', 'Micro', 'Meso', 'Macro']

  const filteredModules = useMemo(() => {
    return curriculumModules.filter((mod) => {
      const matchesTier = selectedTier === 'All' || mod.tier === selectedTier
      const query = searchQuery.toLowerCase().trim()
      const matchesQuery =
        !query ||
        mod.title.toLowerCase().includes(query) ||
        mod.coreConcept.toLowerCase().includes(query) ||
        mod.academicFoundations.some((f) => f.toLowerCase().includes(query))
      return matchesTier && matchesQuery
    })
  }, [selectedTier, searchQuery])

  const tierBadges = {
    Micro: 'brand',
    Meso: 'purple',
    Macro: 'success',
  }

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <Badge variant="brand" className="mb-3">
            <GraduationCap className="w-3 h-3 mr-1" />
            Master Academic Syllabus
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-main tracking-tight">
            Complete Organizational Behavior Curriculum
          </h1>
          <p className="mt-3 text-base text-muted leading-relaxed">
            12 modular lessons bridging foundational behavioral science with distributed systems, modern management, and human-AI collaboration.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts or authors..."
              className="w-full bg-card border border-subtle text-main rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                  selectedTier === tier
                    ? 'bg-indigo-600 text-white border-indigo-500'
                    : 'bg-card-subtle text-muted border-subtle hover:text-main'
                }`}
              >
                {tier} {tier !== 'All' ? 'OB' : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Master-Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Module Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredModules.map((mod) => {
              const isSelected = activeModule.id === mod.id
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-card border-indigo-500 shadow-md ring-1 ring-indigo-500/20'
                      : 'bg-card/60 border-subtle hover:border-hover hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-muted">
                      Module {String(mod.moduleNumber).padStart(2, '0')}
                    </span>
                    <Badge variant={tierBadges[mod.tier]} size="sm">
                      {mod.tier} Level
                    </Badge>
                  </div>
                  <h3 className="text-sm font-bold text-main leading-snug">{mod.title}</h3>
                  <p className="text-xs text-muted line-clamp-2 mt-1">{mod.coreConcept}</p>
                </div>
              )
            })}
          </div>

          {/* Detailed Lesson Viewer */}
          <div className="lg:col-span-7 sticky top-24">
            <Card className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-subtle">
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                    Detailed Lesson • Module {String(activeModule.moduleNumber).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-main mt-1">
                    {activeModule.title}
                  </h2>
                </div>
                <Badge variant={tierBadges[activeModule.tier]}>{activeModule.tier} Level</Badge>
              </div>

              {/* Classical Foundations */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  Canonical Academic Foundations
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeModule.academicFoundations.map((foundation, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-card-subtle text-slate-300 border border-subtle"
                    >
                      {foundation}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Concept */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-muted uppercase tracking-wider">Core Theory</h4>
                <p className="text-sm text-main leading-relaxed">{activeModule.coreConcept}</p>
              </div>

              {/* Digital Manifestation */}
              <div className="p-4 rounded-xl bg-card-subtle border border-subtle space-y-1.5">
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Digital Workplace Manifestation
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {activeModule.digitalManifestation}
                </p>
              </div>

              {/* Applied Case Study */}
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1.5">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Applied Operational Scenario
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModule.caseStudy}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="pt-2 border-t border-subtle space-y-3">
                <h4 className="text-xs font-bold text-muted uppercase tracking-wider">
                  Operational Takeaways
                </h4>
                <ul className="space-y-2">
                  {activeModule.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}