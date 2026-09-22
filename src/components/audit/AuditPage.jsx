// FILE: src/components/audit/AuditPage.jsx
import { useLocalStorageSafe } from '../../hooks/useLocalStorageSafe'
import { auditQuestions } from '../../data/auditQuestions'
import { calculateAuditScore } from '../../utils/calculateAuditScore'
import AuditQuestion from './AuditQuestion'
import AuditResult from './AuditResult'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { ShieldCheck, RotateCcw, AlertCircle } from 'lucide-react'

export default function AuditPage() {
  const [answers, setAnswers] = useLocalStorageSafe('digitalob_audit_answers', {})

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleReset = () => {
    setAnswers({})
  }

  const answeredCount = Object.keys(answers).length
  const result = calculateAuditScore(answers)

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="success" className="mb-3">
            <ShieldCheck className="w-3 h-3 mr-1" />
            Diagnostic Self-Assessment
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-main tracking-tight">
            Digital OB Team Health Audit
          </h1>
          <p className="mt-3 text-base text-muted leading-relaxed">
            Evaluate your team&apos;s asynchronous discipline, psychological safety, and remote fairness across 6 fundamental behavioral dimensions.
          </p>
          <p className="mt-2 text-xs text-faint italic">
            Reflective self-assessment, not a validated psychometric instrument.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                Progress: {answeredCount} of {auditQuestions.length} answered
              </span>
              {answeredCount > 0 && (
                <Button variant="ghost" size="sm" onClick={handleReset} className="text-xs text-muted hover:text-rose-400">
                  <RotateCcw className="w-3 h-3 mr-1" />
                  Reset Answers
                </Button>
              )}
            </div>

            {auditQuestions.map((q) => (
              <AuditQuestion
                key={q.id}
                question={q}
                value={answers[q.id]}
                onChange={handleAnswerChange}
              />
            ))}
          </div>

          {/* Results Side Panel */}
          <div className="lg:col-span-5 sticky top-24">
            {result ? (
              <AuditResult result={result} answers={answers} />
            ) : (
              <div className="bg-card border border-subtle rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center mx-auto text-muted">
                  <AlertCircle className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-main">Diagnostic Pending</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Answer all 6 questions to see your team&apos;s diagnostic score, health tier, and dimensional radar visualization.
                </p>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mt-4">
                  <div
                    className="bg-indigo-500 h-full transition-all duration-300"
                    style={{ width: `${(answeredCount / 6) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-muted block">
                  {6 - answeredCount} question{6 - answeredCount === 1 ? '' : 's'} remaining
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}