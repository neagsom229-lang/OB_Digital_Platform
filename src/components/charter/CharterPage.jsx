// FILE: src/components/charter/CharterPage.jsx
import { useLocalStorageSafe } from '../../hooks/useLocalStorageSafe'
import CharterForm from './CharterForm'
import CharterPreview from './CharterPreview'
import Badge from '../ui/Badge'
import { FileText } from 'lucide-react'

const initialCharterState = {
  teamName: 'Distributed Core Engineering',
  responseSla: 'Within 4 business hours',
  syncWindow: '14:00 – 16:00 UTC (10:00 AM – 12:00 PM ET)',
  timezones: 'UTC-5 to UTC+1 (about 2h overlap on 9–5 schedules)',
  escalationPolicy: 'PagerDuty high-severity on-call rotation only; Slack DMs are never used for emergencies.',
  docHub: 'GitHub Wiki / Notion RFCs',
}

export default function CharterPage() {
  const [charterData, setCharterData] = useLocalStorageSafe(
    'digitalob_charter_state',
    initialCharterState
  )

  const handleReset = () => {
    setCharterData({
      teamName: '',
      responseSla: 'Within 4 business hours',
      syncWindow: '14:00 – 16:00 UTC (10:00 AM – 12:00 PM ET)',
      timezones: 'UTC-5 to UTC+1 (about 2h overlap on 9–5 schedules)',
      escalationPolicy: '',
      docHub: '',
    })
  }

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="brand" className="mb-3">
            <FileText className="w-3 h-3 mr-1" />
            Operational Tool
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-main tracking-tight">
            Team Working Agreement Generator
          </h1>
          <p className="mt-3 text-base text-muted leading-relaxed">
            Ambiguity creates anxiety, meeting sprawl, and telepressure. Configure and generate an explicit, version-controlled remote team charter ready for your repository or wiki.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-card border border-subtle rounded-2xl p-6">
            <CharterForm
              data={charterData}
              onChange={setCharterData}
              onReset={handleReset}
            />
          </div>

          <div className="lg:col-span-7">
            <CharterPreview data={charterData} />
          </div>
        </div>
      </div>
    </div>
  )
}