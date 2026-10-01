import { BookOpen, CheckCircle2 } from 'lucide-react'
import Badge from '../ui/Badge'

const tierBadges = { Micro: 'brand', Meso: 'purple', Macro: 'success' }

export default function LessonContent({ module, totalLessons }) {
  return (
    <>
      <header className="border-b border-subtle pb-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
            Lesson {String(module.moduleNumber).padStart(2, '0')} of {totalLessons}
          </span>
          <Badge variant={tierBadges[module.tier]}>{module.tier} OB</Badge>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-bold text-main">{module.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{module.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
          <span>{module.difficulty} level</span>
          <span className="inline-flex items-center gap-1">
            <span aria-hidden="true">~</span>
            {module.readingTime} min read
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {module.tags.map((tag) => (
            <Badge key={tag} size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <section aria-labelledby="foundations-title">
        <h3
          id="foundations-title"
          className="text-xs font-bold text-muted uppercase tracking-wider"
        >
          <BookOpen className="mr-1.5 inline h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />
          Academic foundations
        </h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {module.academicFoundations.map((foundation) => (
            <li
              key={foundation}
              className="rounded-md bg-card-subtle px-2.5 py-1 text-xs text-muted border border-subtle"
            >
              {foundation}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="theory-title">
        <h3 id="theory-title" className="text-xs font-bold text-muted uppercase tracking-wider">
          Core theory
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-main">{module.coreConcept}</p>
      </section>

      <section className="rounded-xl border border-subtle bg-card-subtle p-4">
        <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
          Digital workplace manifestation
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{module.digitalManifestation}</p>
      </section>

      <section className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
        <h3 className="text-success text-xs font-bold uppercase tracking-wider">
          Applied operational scenario
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{module.caseStudy}</p>
      </section>

      <section aria-labelledby="takeaways-title" className="border-t border-subtle pt-5">
        <h3 id="takeaways-title" className="text-xs font-bold text-muted uppercase tracking-wider">
          Key takeaways
        </h3>
        <ul className="mt-3 space-y-2.5">
          {module.keyTakeaways.map((takeaway) => (
            <li
              key={takeaway}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400"
                aria-hidden="true"
              />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
