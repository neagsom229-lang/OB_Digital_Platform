// FILE: src/components/layout/MobileNav.jsx
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Layers,
  FileText,
  ShieldCheck,
  BookOpen,
  Compass,
  GraduationCap,
  ChevronRight,
  Sun,
  Moon,
  Sparkles,
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function MobileNav({ isOpen, onClose }) {
  const drawerRef = useRef(null)
  const { resolvedTheme, toggleTheme } = useTheme()

  useEffect(() => {
    if (!isOpen) return undefined
    const previousFocus = document.activeElement
    const focusable = drawerRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    focusable?.[0]?.focus()

    const trapFocus = (event) => {
      if (event.key !== 'Tab' || !drawerRef.current) return
      const items = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', trapFocus)
    return () => {
      document.removeEventListener('keydown', trapFocus)
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background scrolling while drawer is active
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

  const navigationGroups = [
    {
      label: 'Interactive Tools',
      items: [
        {
          to: '/charter',
          label: 'Team Charter Generator',
          subtitle: 'Create Markdown SLAs & Agreements',
          icon: FileText,
          badge: 'Generator',
        },
        {
          to: '/audit',
          label: 'Team Health Audit',
          subtitle: '6-Factor Reflective Diagnostic',
          icon: ShieldCheck,
          badge: 'Diagnostic',
        },
      ],
    },
    {
      label: 'Core Knowledge',
      items: [
        {
          to: '/',
          label: 'Overview & The 5 Pillars',
          subtitle: 'Architecture & Leadership Playbook',
          icon: Layers,
          exact: true,
        },
        {
          to: '/curriculum',
          label: '12-Module Syllabus',
          subtitle: 'Comprehensive University Syllabus',
          icon: GraduationCap,
          badge: 'Curriculum',
        },
        {
          to: '/lexicon',
          label: 'OB Lexicon',
          subtitle: '36 Standardized Workplace Terms',
          icon: BookOpen,
          badge: '40 Terms',
        },
        {
          to: '/sources',
          label: 'Academic Citations',
          subtitle: '29 Peer-Reviewed Google Scholar Papers',
          icon: Compass,
        },
      ],
    },
  ]

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop with frosted blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-out Drawer */}
          <motion.aside
            ref={drawerRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-[88%] max-w-sm h-dvh bg-card/95 backdrop-blur-2xl border-l border-subtle shadow-2xl flex flex-col justify-between z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-4 border-b border-subtle flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm tracking-tight text-main flex items-center gap-1.5">
                    <span>
                      Digital<strong className="text-indigo-400 font-extrabold">OB</strong> Hub
                    </span>
                  </div>
                  <p className="text-[10px] text-muted font-mono tracking-wider uppercase">
                    Systems for Distributed Work
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-muted hover:text-main bg-card-subtle border border-subtle active:scale-95 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6 scrollbar-none">
              {navigationGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-muted px-2 font-mono">
                    {group.label}
                  </div>
                  <div className="space-y-1.5">
                    {group.items.map((item) => {
                      const Icon = item.icon
                      return (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          end={item.exact}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `group flex items-center justify-between p-3 rounded-2xl border transition-all ${
                              isActive
                                ? 'bg-indigo-600/15 border-indigo-500/30 shadow-sm shadow-indigo-950/50'
                                : 'bg-card-subtle/50 border-subtle hover:bg-card-subtle hover:border-hover'
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <div className="flex items-center gap-3 min-w-0">
                                <div
                                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                    isActive
                                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                                      : 'bg-card-subtle text-muted group-hover:text-brand-soft group-hover:bg-card'
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`text-xs font-semibold truncate ${
                                        isActive
                                          ? 'text-brand-soft'
                                          : 'text-main group-hover:text-main'
                                      }`}
                                    >
                                      {item.label}
                                    </span>
                                    {item.badge && (
                                      <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-card-subtle text-brand-soft border border-indigo-500/20">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-muted truncate mt-0.5">
                                    {item.subtitle}
                                  </p>
                                </div>
                              </div>

                              <ChevronRight
                                className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                                  isActive ? 'text-brand-soft' : 'text-muted'
                                }`}
                              />
                            </>
                          )}
                        </NavLink>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Drawer Footer with Theme Switcher */}
            <div className="p-5 border-t border-subtle bg-card/90 pb-[max(1.25rem,env(safe-area-inset-bottom))] space-y-3">
              <div className="flex items-center justify-between p-2 rounded-xl bg-card-subtle border border-subtle">
                <span className="text-xs font-medium text-muted pl-2">Theme Appearance</span>
                <button
                  onClick={toggleTheme}
                  type="button"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card hover:bg-card-subtle text-xs font-semibold text-main border border-subtle active:scale-95 transition-all cursor-pointer"
                >
                  {resolvedTheme === 'dark' ? (
                    <>
                      <Moon className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Dark</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-muted px-1 font-mono">
                <span>DigitalOB Hub v1.0</span>
                <span>Edu Reference</span>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
