// FILE: src/components/home/PillarsSection.jsx
import PillarTabs from './PillarTabs'

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-16 border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
            The Practitioner Framework
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-main tracking-tight">
            The Five Pillars of Digital OB
          </h3>
          <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
            Synthesized guidelines addressing the unique structural, cognitive, and interpersonal demands of modern technology-mediated work.
          </p>
        </div>

        <PillarTabs />
      </div>
    </section>
  )
}