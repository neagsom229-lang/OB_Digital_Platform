// FILE: src/components/home/PlaybookSection.jsx
import { playbookTactics } from '../../data/playbook'
import PlaybookCard from './PlaybookCard'

export default function PlaybookSection() {
  return (
    <section id="playbook" className="py-16 border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
            Leadership & Culture
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-main tracking-tight">
            The Remote Manager&apos;s Trust Playbook
          </h3>
          <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
            Concrete management protocols designed to cultivate psychological safety, eliminate hybrid bias, and sustain team cohesion across distributed nodes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {playbookTactics.map((tactic) => (
            <PlaybookCard key={tactic.id} item={tactic} />
          ))}
        </div>
      </div>
    </section>
  )
}