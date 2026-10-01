// FILE: src/components/layout/Layout.jsx
import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import ScrollProgressBar from './ScrollProgressBar'

const pageTitles = {
  '/': 'Overview',
  '/charter': 'Team Charter Generator',
  '/audit': 'Team Health Audit',
  '/lexicon': 'OB Lexicon',
  '/sources': 'Academic Sources',
  '/curriculum': 'Curriculum',
}

export default function Layout() {
  const { pathname } = useLocation()
  const pageTitle =
    pageTitles[pathname] ??
    (pathname.startsWith('/curriculum/') ? 'Lesson reader' : 'Page not found')

  useEffect(() => {
    if (pathname.startsWith('/curriculum/')) return
    document.title = `${pageTitle} | DigitalOB Hub`
  }, [pageTitle, pathname])

  return (
    <div className="min-h-screen flex flex-col bg-app text-main">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[70] rounded-lg bg-card px-4 py-2 text-sm font-semibold text-main shadow-lg focus:not-sr-only"
      >
        Skip to content
      </a>
      <ScrollProgressBar />
      <Header />
      <main id="main-content" tabIndex="-1" className="flex-1 w-full">
        {pathname !== '/' && !pathname.startsWith('/curriculum/') && (
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-7xl px-4 pt-6 text-sm sm:px-6 lg:px-8"
          >
            <Link
              to="/"
              className="text-muted hover:text-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
            >
              Home
            </Link>
            <span aria-hidden="true" className="px-2 text-faint">
              /
            </span>
            <span aria-current="page" className="text-main">
              {pageTitle}
            </span>
          </nav>
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
