// FILE: src/App.jsx
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import Layout from './components/layout/Layout'
import Skeleton from './components/ui/Skeleton'
import RouteErrorBoundary from './components/layout/RouteErrorBoundary'

const HomePage = lazy(() => import('./components/home/HomePage'))
const CharterPage = lazy(() => import('./components/charter/CharterPage'))
const AuditPage = lazy(() => import('./components/audit/AuditPage'))
const LexiconPage = lazy(() => import('./components/lexicon/LexiconPage'))
const SourcesPage = lazy(() => import('./components/sources/SourcesPage'))
const CurriculumPage = lazy(() => import('./components/curriculum/CurriculumPage'))
const LessonReaderPage = lazy(() => import('./components/curriculum/LessonReaderPage'))
const NotFoundPage = lazy(() => import('./components/layout/NotFoundPage'))

export default function App() {
  return (
    <RouteErrorBoundary>
      <Suspense
        fallback={
          <div
            className="mx-auto max-w-7xl space-y-5 px-4 py-12 sm:px-6 lg:px-8"
            role="status"
            aria-label="Loading page"
          >
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-12 w-2/3" />
            <Skeleton className="h-40 w-full" />
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="charter" element={<CharterPage />} />
            <Route path="audit" element={<AuditPage />} />
            <Route path="lexicon" element={<LexiconPage />} />
            <Route path="sources" element={<SourcesPage />} />
            <Route path="curriculum" element={<CurriculumPage />} />
            <Route path="curriculum/:lessonId" element={<LessonReaderPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </RouteErrorBoundary>
  )
}
