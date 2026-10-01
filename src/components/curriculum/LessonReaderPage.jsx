import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import { curriculumModules } from '../../data/curriculum'
import Card from '../ui/Card'
import NotFoundPage from '../layout/NotFoundPage'
import LessonContent from './LessonContent'

export default function LessonReaderPage() {
  const { lessonId } = useParams()
  const moduleIndex = curriculumModules.findIndex((module) => module.id === lessonId)
  const module = curriculumModules[moduleIndex]

  useEffect(() => {
    document.title = `${module?.title ?? 'Page not found'} | DigitalOB Hub`
  }, [module])

  if (!module) return <NotFoundPage />

  const previousModule = curriculumModules[moduleIndex - 1]
  const nextModule = curriculumModules[moduleIndex + 1]

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-7 text-sm text-muted">
        <Link
          to="/curriculum"
          className="rounded hover:text-main focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          Curriculum
        </Link>
        <ChevronRight className="mx-2 inline h-3.5 w-3.5" aria-hidden="true" />
        <span aria-current="page" className="text-main">
          {module.title}
        </span>
      </nav>

      <Card className="space-y-6 p-5 sm:p-8" spotlight={false}>
        <LessonContent module={module} totalLessons={curriculumModules.length} />
      </Card>

      <nav aria-label="Lesson navigation" className="mt-5 flex items-center justify-between gap-4">
        {previousModule ? (
          <Link
            to={`/curriculum/${previousModule.id}`}
            className="inline-flex items-center gap-2 rounded-xl border border-subtle bg-card px-4 py-2.5 text-sm font-semibold text-main hover:bg-card-subtle focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </Link>
        ) : (
          <span />
        )}
        {nextModule ? (
          <Link
            to={`/curriculum/${nextModule.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Next lesson
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
