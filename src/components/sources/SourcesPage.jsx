// FILE: src/components/sources/SourcesPage.jsx
import { academicSources } from '../../data/sources'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import { Compass, ExternalLink } from 'lucide-react'

export default function SourcesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="brand" className="mb-3">
            <Compass className="w-3 h-3 mr-1" />
            Academic Foundations
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-main tracking-tight">
            Empirical References & Citations
          </h1>
          <p className="mt-3 text-base text-muted leading-relaxed">
            The concepts on this platform build on peer-reviewed research across organizational behavior, human-computer interaction, and applied psychology. Each paper can be cross-verified directly on Google Scholar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {academicSources.map((src) => {
            const scholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(
              src.scholarQuery
            )}`

            return (
              <Card key={src.id} className="flex flex-col justify-between p-5 space-y-4">
                <p className="text-xs sm:text-sm text-main leading-relaxed font-sans">
                  {src.citation}
                </p>
                <div className="pt-2 border-t border-subtle flex justify-end">
                  <a
                    href={scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Search on Google Scholar</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-card border border-subtle">
          <h3 className="text-sm font-bold text-main mb-2">Note on General Terminology</h3>
          <p className="text-xs text-muted leading-relaxed">
            Terms marked with &ldquo;—&rdquo; in the Lexicon (e.g. <em>Virtual Team, Hybrid Work, Digital OB, RFC, Right to Disconnect</em>) represent widely adopted industry standards, legal statutes, or generalized socio-technical nomenclature without a single canonical founding paper.
          </p>
        </div>
      </div>
    </div>
  )
}