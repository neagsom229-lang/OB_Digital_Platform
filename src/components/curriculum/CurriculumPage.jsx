import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { Clock3, GraduationCap, Grid2X2, List, Search } from 'lucide-react'
import { curriculumModules } from '../../data/curriculum'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import LessonContent from './LessonContent'

const tiers = ['All', 'Micro', 'Meso', 'Macro']
const tierBadges = { Micro: 'brand', Meso: 'purple', Macro: 'success' }

export default function CurriculumPage() {
  const [searchParams] = useSearchParams()
  const [selectedTier, setSelectedTier] = useState('All')
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('q') ?? '')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [selectedModuleId, setSelectedModuleId] = useState(curriculumModules[0]?.id)
  const [view, setView] = useState('grid')

  useEffect(() => {
    setSearchQuery(searchParams.get('q') ?? '')
  }, [searchParams])

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setDebouncedQuery(searchQuery.trim()), 250)
    return () => window.clearTimeout(timeoutId)
  }, [searchQuery])

  const filteredModules = useMemo(() => {
    const query = debouncedQuery.toLowerCase()
    return curriculumModules.filter((module) => {
      const matchesTier = selectedTier === 'All' || module.tier === selectedTier
      const searchableContent = [
        module.title,
        module.description,
        module.coreConcept,
        module.tags.join(' '),
        module.academicFoundations.join(' '),
      ]
        .join(' ')
        .toLowerCase()
      return matchesTier && (!query || searchableContent.includes(query))
    })
  }, [debouncedQuery, selectedTier])

  const activeModule =
    filteredModules.find((module) => module.id === selectedModuleId) ?? filteredModules[0]

  return (
    <div className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-9">
          <Badge variant="brand" className="mb-3">
            <GraduationCap className="w-3 h-3 mr-1" aria-hidden="true" />
            Master Academic Syllabus
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-main tracking-tight">
            Organizational Behavior Curriculum
          </h1>
          <p className="mt-3 text-base text-muted leading-relaxed">
            Twelve modular lessons connecting foundational behavioral science with distributed work,
            modern management, and human-AI collaboration.
          </p>
        </div>

        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Search lessons</span>
            <Search
              className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search lessons, concepts, or authors"
              className="w-full bg-card border border-subtle text-main rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            />
          </label>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter lessons by level">
              {tiers.map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setSelectedTier(tier)}
                  aria-pressed={selectedTier === tier}
                  className={`min-h-9 rounded-lg border px-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    selectedTier === tier
                      ? 'bg-indigo-600 text-white border-indigo-500'
                      : 'bg-card text-muted border-subtle hover:text-main hover:border-hover'
                  }`}
                >
                  {tier === 'All' ? 'All levels' : `${tier} OB`}
                </button>
              ))}
            </div>

            <div
              className="flex rounded-lg border border-subtle bg-card p-1"
              role="group"
              aria-label="Lesson layout"
            >
              <button
                type="button"
                onClick={() => setView('grid')}
                aria-label="Grid view"
                aria-pressed={view === 'grid'}
                className={`rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  view === 'grid' ? 'bg-card-subtle text-main' : 'text-muted hover:text-main'
                }`}
              >
                <Grid2X2 className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setView('list')}
                aria-label="List view"
                aria-pressed={view === 'list'}
                className={`rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  view === 'list' ? 'bg-card-subtle text-main' : 'text-muted hover:text-main'
                }`}
              >
                <List className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <section className="lg:col-span-5" aria-label="Lessons">
            <p className="sr-only" role="status" aria-live="polite">
              {filteredModules.length} {filteredModules.length === 1 ? 'lesson' : 'lessons'} found
            </p>
            {filteredModules.length > 0 ? (
              <div
                className={
                  view === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3'
                    : 'space-y-3'
                }
              >
                {filteredModules.map((module) => {
                  const isSelected = activeModule?.id === module.id
                  return (
                    <Card
                      key={module.id}
                      className={`p-0 overflow-hidden transition-colors ${
                        isSelected ? 'border-indigo-500 ring-1 ring-indigo-500/30' : ''
                      }`}
                      spotlight={false}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedModuleId(module.id)}
                        aria-pressed={isSelected}
                        className="w-full h-full text-left p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
                      >
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <span className="text-[11px] font-mono font-bold text-muted">
                            LESSON {String(module.moduleNumber).padStart(2, '0')}
                          </span>
                          <Badge variant={tierBadges[module.tier]} size="sm">
                            {module.tier}
                          </Badge>
                        </div>
                        <h2 className="text-sm font-bold text-main leading-snug">{module.title}</h2>
                        <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">
                          {module.description}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-muted">
                          <span className="inline-flex items-center gap-1">
                            <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                            {module.readingTime} min
                          </span>
                          <span>{module.difficulty}</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {module.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-card-subtle px-2 py-0.5 text-[10px] text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </button>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-subtle bg-card px-6 py-12 text-center">
                <Search className="mx-auto h-6 w-6 text-muted" aria-hidden="true" />
                <h2 className="mt-3 font-semibold text-main">No lessons found</h2>
                <p className="mt-1 text-sm text-muted">
                  Try another search or choose a different level.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedTier('All')
                  }}
                  className="mt-4 text-sm font-semibold text-indigo-400 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>

          {activeModule ? (
            <article
              key={activeModule.id}
              aria-label="Selected lesson preview"
              className="lg:col-span-7 lg:sticky lg:top-24"
            >
              <Card className="space-y-6 p-5 sm:p-7" spotlight={false}>
                <LessonContent module={activeModule} totalLessons={curriculumModules.length} />
                <Link
                  to={`/curriculum/${activeModule.id}`}
                  className="inline-flex items-center rounded-lg text-sm font-semibold text-indigo-400 hover:underline focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Open focused reader
                </Link>
              </Card>
            </article>
          ) : null}
        </div>
      </div>
    </div>
  )
}
