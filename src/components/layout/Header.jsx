// FILE: src/components/layout/Header.jsx
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, Layers } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import MobileNav from './MobileNav'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-app/80 border-b border-subtle transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-indigo-600 via-sky-500 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
            <Layers className="w-4 h-4" />
          </div>
          <span className="font-bold text-lg tracking-tight text-main">
            Digital<span className="text-indigo-400">OB</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-muted hover:text-main hover:bg-slate-800/40'
              }`
            }
          >
            Overview
          </NavLink>

          {isHome && (
            <>
              <a
                href="#pillars"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-muted hover:text-main hover:bg-slate-800/40 transition-colors"
              >
                Pillars
              </a>
              <a
                href="#playbook"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-muted hover:text-main hover:bg-slate-800/40 transition-colors"
              >
                Playbook
              </a>
            </>
          )}

          <NavLink
            to="/charter"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-muted hover:text-main hover:bg-slate-800/40'
              }`
            }
          >
            Charter Tool
          </NavLink>
          <NavLink
            to="/audit"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-muted hover:text-main hover:bg-slate-800/40'
              }`
            }
          >
            Health Audit
          </NavLink>
          <NavLink
            to="/lexicon"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-muted hover:text-main hover:bg-slate-800/40'
              }`
            }
          >
            Lexicon
          </NavLink>
          <NavLink
            to="/sources"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-muted hover:text-main hover:bg-slate-800/40'
              }`
            }
          >
            Sources
          </NavLink>

          <NavLink
  to="/curriculum"
  className={({ isActive }) =>
    `px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
      isActive ? 'text-indigo-400 bg-indigo-500/10' : 'text-muted hover:text-main'
    }`
  }
>
  Curriculum (12 Modules)
</NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-xl text-muted hover:text-main bg-card-subtle border border-subtle cursor-pointer"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}