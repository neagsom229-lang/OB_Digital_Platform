// FILE: src/components/home/ComparisonTable.jsx
import { comparisonRows } from '../../data/comparisonRows'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-16 border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
            Structural Comparison
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-main tracking-tight">
            Traditional (Co-located) vs. Digital (Distributed) Work
          </h3>
          <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
            Most organizations sit between the two; hybrid work is a spectrum. Moving toward distributed maturity requires deliberately shifting habits across each behavioral dimension.
          </p>
        </div>

        {/* Desktop View (Table >= 768px) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-subtle bg-card shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-subtle bg-card-subtle/50 text-xs font-semibold text-muted uppercase tracking-wider">
                <th className="py-4 px-6 w-1/4">Dimension</th>
                <th className="py-4 px-6 w-3/8 text-slate-300">Traditional (Co-located) Work</th>
                <th className="py-4 px-6 w-3/8 text-indigo-400">Digital (Distributed) Work</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-subtle text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-4 px-6 font-semibold text-main align-top">{row.dimension}</td>
                  <td className="py-4 px-6 text-muted leading-relaxed align-top">
                    {row.traditional}
                  </td>
                  <td className="py-4 px-6 text-main font-medium leading-relaxed align-top">
                    {row.digital}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Cards < 768px) */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row, idx) => (
            <Card key={idx} className="space-y-4">
              <Badge variant="brand">{row.dimension}</Badge>
              <div className="space-y-2">
                <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Traditional (Co-located):
                </div>
                <p className="text-sm text-muted leading-relaxed">{row.traditional}</p>
              </div>
              <div className="pt-2 border-t border-subtle space-y-1">
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  Digital (Distributed):
                </div>
                <p className="text-sm text-main font-medium leading-relaxed">{row.digital}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}