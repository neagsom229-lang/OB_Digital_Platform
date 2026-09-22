// FILE: src/components/home/TiersSection.jsx
import TierCard from './TierCard'

export default function TiersSection() {
  const tiers = [
    {
      level: 'Level 01',
      title: 'Micro Level',
      badgeVariant: 'brand',
      description:
        'Focuses on the individual knowledge worker, cognitive ergonomics, intrinsic motivation, and personal boundary regulation.',
      points: [
        'Self-Determination Theory: autonomy, competence, and relatedness under remote conditions.',
        'Cognitive offloading and mitigating attention residue from rapid task-switching.',
        'Burnout risk and blurred work-home boundaries: constant interruptions, telepressure and difficulty detaching from work.',
      ],
    },
    {
      level: 'Level 02',
      title: 'Meso Level',
      badgeVariant: 'purple',
      description:
        'Analyzes small group dynamics, virtual team cohesion, psychological safety in text channels, and human-AI teaming.',
      points: [
        'Swift trust formation in distributed, cross-functional project squads.',
        'Establishing psychological safety in asynchronous written communication.',
        'Human-AI co-intelligence workflows and navigating the jagged capability frontier.',
      ],
    },
    {
      level: 'Level 03',
      title: 'Macro Level',
      badgeVariant: 'success',
      description:
        'Examines organizational structure, open-by-default knowledge architectures, and cultural norms across distributed enterprises.',
      points: [
        "Conway's Law and designing modular team topologies to mirror digital system architecture.",
        'Democratizing knowledge via transparent, single-source-of-truth repositories.',
        'Responsible algorithmic management and avoiding surveillance traps (EPM).',
      ],
    },
  ]

  return (
    <section id="tiers" className="py-16 border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
            Theoretical Architecture
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-main tracking-tight">
            The Three Levels of Organizational Behavior
          </h3>
          <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
            Classic OB categorizes organizational life into Micro, Meso, and Macro dynamics. In technology-mediated work, each level faces distinct pressures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <TierCard key={tier.level} {...tier} />
          ))}
        </div>
      </div>
    </section>
  )
}