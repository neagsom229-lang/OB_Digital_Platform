import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-sm font-semibold tracking-widest text-indigo-400">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-main">
        We couldn’t find that page
      </h1>
      <p className="mt-3 text-muted">The page may have moved, or the address may be incorrect.</p>
      <Link
        to="/"
        className="mt-7 inline-flex rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        Return to overview
      </Link>
    </section>
  )
}
