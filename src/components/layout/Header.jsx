// FILE: src/components/layout/Header.jsx
import { lazy, Suspense, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router'
import { Menu, Layers, Search } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const MobileNav = lazy(() => import('./MobileNav'))

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleSearch = (event) => {
    event.preventDefault()
    const query = searchQuery.trim()
    navigate(`/curriculum${query ? `?q=${encodeURIComponent(query)}` : ''}`)
    setSearchQuery('')
  }

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-app/80 border-b border-subtle transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
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
                  : 'text-muted hover:text-main hover:bg-card-subtle'
              }`
            }
          >
            Overview
          </NavLink>

          {isHome && (
            <>
              <a
                href="#pillars"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-muted hover:text-main hover:bg-card-subtle transition-colors"
              >
                Pillars
              </a>
              <a
                href="#playbook"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-muted hover:text-main hover:bg-card-subtle transition-colors"
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
                  : 'text-muted hover:text-main hover:bg-card-subtle'
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
                  : 'text-muted hover:text-main hover:bg-card-subtle'
              }`
            }
          >
            Health Audit
          </NavLink>
          <NavLink
            to="/curriculum"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-muted hover:text-main hover:bg-card-subtle'
              }`
            }
          >
            Lessons
          </NavLink>
          <NavLink
            to="/lexicon"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-muted hover:text-main hover:bg-card-subtle'
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
                  : 'text-muted hover:text-main hover:bg-card-subtle'
              }`
            }
          >
            Sources
          </NavLink>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <form onSubmit={handleSearch} role="search" className="hidden lg:block">
            <label className="relative block">
              <span className="sr-only">Search lessons</span>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search lessons"
                className="w-40 rounded-xl border border-subtle bg-card px-3 py-2 pl-9 text-xs text-main placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 xl:w-48"
              />
            </label>
          </form>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-xl text-muted hover:text-main bg-card-subtle border border-subtle active:scale-95 transition-transform cursor-pointer"
            aria-label="Open mobile menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Render Portal outside the Header stacking context */}
      <Suspense fallback={null}>
        <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </Suspense>
    </header>
  )
}
