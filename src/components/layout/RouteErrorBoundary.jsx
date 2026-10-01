import { Component } from 'react'
import { Link } from 'react-router'

export default class RouteErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Page rendering failed:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto max-w-xl px-4 py-24 text-center">
          <p className="text-sm font-semibold text-rose-500">Something went wrong</p>
          <h1 className="mt-2 text-2xl font-bold text-main">This page could not be loaded</h1>
          <p className="mt-2 text-muted">Try again, or return to the DigitalOB Hub home page.</p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Reload page
            </button>
            <Link
              to="/"
              className="rounded-xl border border-subtle px-4 py-2 text-sm font-semibold text-main hover:bg-card-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Go home
            </Link>
          </div>
        </main>
      )
    }
    return this.props.children
  }
}
