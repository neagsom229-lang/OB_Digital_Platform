// FILE: src/components/layout/MobileNav.jsx
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'
import { X, ExternalLink, ShieldCheck, Compass, FileText, BookOpen, Layers } from 'lucide-react'

export default function MobileNav({ isOpen, onClose }) {
  const drawerRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const navLinks = [
    { to: '/', label: 'Overview & Foundations', icon: Layers },
    { to: '/charter', label: 'Team Charter Generator', icon: FileText },
    { to: '/audit', label: 'Team Health Audit', icon: ShieldCheck },
    { to: '/lexicon', label: 'OB Lexicon (36 Terms)', icon: BookOpen },
    { to: '/sources', label: 'Academic Sources', icon: Compass },
    { to: '/curriculum', label: 'Curriculum & Learning Path', icon: ExternalLink },
  ]

  return (
    <div className="fixed inset-0 z-50 md:hidden flex justify-end">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className="relative w-full max-w-xs bg-card border-l border-subtle h-full p-6 shadow-2xl flex flex-col justify-between z-10 overflow-y-auto"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-subtle">
            <span className="font-bold text-base tracking-tight bg-linear-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              DigitalOB Hub
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-muted hover:text-main bg-card-subtle border border-subtle cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/20'
                        : 'text-muted hover:text-main hover:bg-slate-800/40'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {link.label}
                </NavLink>
              )
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-subtle">
          <p className="text-xs text-muted leading-relaxed">
            Content last reviewed: September 2026. Educational reference for distributed systems design.
          </p>
        </div>
      </div>
    </div>
  )
}