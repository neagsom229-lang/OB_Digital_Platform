// FILE: src/components/layout/Footer.jsx
import { Link } from 'react-router'
import { Layers } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-subtle bg-card/40 mt-24 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-main tracking-tight">DigitalOB Hub</span>
            </div>
            <p className="text-sm text-muted max-w-md leading-relaxed">
              Synthesizing organizational psychology, asynchronous software engineering workflows, and human-AI systems into high-trust operational practices.
            </p>
            <p className="text-xs text-faint">
              Content last reviewed: September 2026. Educational summary, not professional advice.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-main uppercase tracking-wider mb-3">Tools & Assessment</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link to="/charter" className="hover:text-indigo-400 transition-colors">
                  Team Charter Generator
                </Link>
              </li>
              <li>
                <Link to="/audit" className="hover:text-indigo-400 transition-colors">
                  Team Health Audit
                </Link>
              </li>
              <li>
                <Link to="/lexicon" className="hover:text-indigo-400 transition-colors">
                  OB Lexicon (36 Terms)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-main uppercase tracking-wider mb-3">Foundations & Citations</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link to="/#pillars" className="hover:text-indigo-400 transition-colors">
                  The 5 Pillars
                </Link>
              </li>
              <li>
                <Link to="/#playbook" className="hover:text-indigo-400 transition-colors">
                  Leadership Playbook
                </Link>
              </li>
              <li>
                <Link to="/sources" className="hover:text-indigo-400 transition-colors">
                  Empirical Literature (29 Sources)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 Summary of OB In Digital World Research</p>
          <p>produced by Samnang</p>
        </div>
      </div>
    </footer>
  )
}