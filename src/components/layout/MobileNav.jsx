// FILE: src/components/layout/MobileNav.jsx
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Layers, FileText, ShieldCheck, BookOpen, Compass } from 'lucide-react'

export default function MobileNav({ isOpen, onClose }) {
  const drawerRef = useRef(null)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { to: '/', label: 'Overview & Foundations', icon: Layers },
    { to: '/charter', label: 'Team Charter Generator', icon: FileText },
    { to: '/audit', label: 'Team Health Audit', icon: ShieldCheck },
    { to: '/lexicon', label: 'OB Lexicon (40 Terms)', icon: BookOpen },
    { to: '/sources', label: 'Academic Citations', icon: Compass },
  ]

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-out Drawer */}
          <motion.aside
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-[85%] max-w-sm h-dvh bg-slate-950 border-l border-subtle shadow-2xl flex flex-col justify-between z-10 overflow-y-auto px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-subtle">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-base tracking-tight text-main">
                    Digital<span className="text-indigo-400">OB</span> Hub
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-muted hover:text-main bg-card-subtle border border-subtle active:scale-95 transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
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
                        `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/25 shadow-sm'
                            : 'text-muted hover:text-main hover:bg-slate-800/40 border border-transparent'
                        }`
                      }
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{link.label}</span>
                    </NavLink>
                  )
                })}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-subtle mt-8">
              <p className="text-[11px] text-muted leading-relaxed">
                Organizational Behavior systems for distributed, hybrid, and AI-enabled teams.
              </p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}