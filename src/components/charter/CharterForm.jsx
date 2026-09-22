// FILE: src/components/charter/CharterForm.jsx
import { useState } from 'react'
import TextInput from '../ui/TextInput'
import Select from '../ui/Select'
import Button from '../ui/Button'
import { Sparkles, RotateCcw, Clock } from 'lucide-react'

export default function CharterForm({ data, onChange, onReset }) {
  const [zoneA, setZoneA] = useState('America/New_York')
  const [zoneB, setZoneB] = useState('Europe/London')

  const presets = [
    {
      name: 'Async-First Engineering',
      config: {
        teamName: 'Core Platform Engineering',
        responseSla: 'Within 4 business hours',
        syncWindow: '14:00 – 16:00 UTC (10:00 AM – 12:00 PM ET)',
        timezones: 'UTC-5 to UTC+1 (about 2h overlap on 9–5 schedules)',
        escalationPolicy: 'PagerDuty high-severity on-call rotation only; Slack DMs are never used for emergencies.',
        docHub: 'GitHub Wiki / Notion RFCs',
      },
    },
    {
      name: 'Balanced Hybrid Product',
      config: {
        teamName: 'Product & Design Guild',
        responseSla: 'Within 2 business hours during core window',
        syncWindow: '13:00 – 16:00 UTC (9:00 AM – 12:00 PM ET)',
        timezones: 'UTC-5 to UTC+1 (about 2h overlap on 9–5 schedules)',
        escalationPolicy: 'Phone call to team lead if a production deployment issue blocks a launch.',
        docHub: 'Notion Workspace & Figma Design System',
      },
    },
    {
      name: 'SRE / Incident Response',
      config: {
        teamName: 'Reliability & Infrastructure',
        responseSla: 'Immediate for Sev-1; within 4 hours for general threads',
        syncWindow: '14:00 – 15:30 UTC (10:00 AM – 11:30 AM ET)',
        timezones: 'UTC-8 to UTC+2 (Global distributed follow-the-sun)',
        escalationPolicy: 'Automated monitoring alerts via Opsgenie; strictly no manual chat pings.',
        docHub: 'Confluence Runbooks & GitHub Incidents',
      },
    },
  ]

  const slaOptions = [
    { value: 'Within 2 business hours', label: 'Within 2 business hours (High-touch sync)' },
    { value: 'Within 4 business hours', label: 'Within 4 business hours (Recommended default)' },
    { value: 'Within 24 hours / next working day', label: 'Within 24 hours (Deep async-first)' },
  ]

  const syncWindowOptions = [
    { value: '14:00 – 16:00 UTC (10:00 AM – 12:00 PM ET)', label: '14:00 – 16:00 UTC (10:00 AM – 12:00 PM ET)' },
    { value: '15:00 – 17:00 UTC (11:00 AM – 1:00 PM ET)', label: '15:00 – 17:00 UTC (11:00 AM – 1:00 PM ET)' },
    { value: 'Flexible / Asynchronous Standup Only', label: 'Flexible / Asynchronous Standup Only' },
  ]

  return (
    <div className="space-y-6">
      {/* Presets */}
      <div>
        <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
          Load Team Archetype Preset:
        </span>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => onChange(preset.config)}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-card-subtle hover:bg-slate-800 border border-subtle hover:border-hover text-muted hover:text-main transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3 inline mr-1 text-indigo-400" />
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <TextInput
          id="teamName"
          label="Team / Guild Name"
          value={data.teamName}
          onChange={(e) => onChange({ ...data, teamName: e.target.value })}
          placeholder="e.g. Distributed Core Engineering"
        />

        <Select
          id="responseSla"
          label="Agreed Response SLA (Core Hours)"
          value={data.responseSla}
          onChange={(e) => onChange({ ...data, responseSla: e.target.value })}
          options={slaOptions}
          helperText="Expected turnaround time for non-urgent @mentions during local hours."
        />

        <Select
          id="syncWindow"
          label="Synchronous Collaboration Window"
          value={data.syncWindow}
          onChange={(e) => onChange({ ...data, syncWindow: e.target.value })}
          options={syncWindowOptions}
          helperText="Shared overlap time reserved for pairing, interviews, and urgent syncs."
        />

        <TextInput
          id="timezones"
          label="Timezone Spread & Overlap Estimate"
          value={data.timezones}
          onChange={(e) => onChange({ ...data, timezones: e.target.value })}
          placeholder="e.g. UTC-5 to UTC+1 (about 2h overlap on 9–5 schedules)"
          helperText="UTC-5 to UTC+1 represents a 6-hour gap (~2h overlap on 9-to-5 schedules)."
        />

        <TextInput
          id="docHub"
          label="Single Source of Truth (Doc Hub)"
          value={data.docHub}
          onChange={(e) => onChange({ ...data, docHub: e.target.value })}
          placeholder="e.g. Notion / GitHub Wiki / Confluence"
          helperText="Where all technical specs, meeting outcomes, and architectures are archived."
        />

        <TextInput
          id="escalationPolicy"
          label="Urgent Escalation Protocol"
          value={data.escalationPolicy}
          onChange={(e) => onChange({ ...data, escalationPolicy: e.target.value })}
          placeholder="e.g. PagerDuty on-call only; no chat pings for emergencies"
          helperText="Rules for interrupting deep work or off-hours when true blockers occur."
        />
      </div>

      {/* Timezone Helper Box */}
      <div className="p-4 rounded-xl bg-card-subtle border border-subtle space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-main uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-indigo-400" />
          Timezone Overlap Check
        </div>
        <p className="text-xs text-muted">
          Typical 9:00 AM – 5:00 PM local schedules with a 6-hour gap (e.g. New York ET and London GMT) produce approximately <strong>2 hours</strong> of shared working time (14:00 – 16:00 UTC / 10:00 AM – 12:00 PM ET). Protect this window for high-ambiguity discussions!
        </p>
      </div>

      <div className="pt-2">
        <Button variant="ghost" size="sm" onClick={onReset} className="w-full text-muted hover:text-rose-400">
          <RotateCcw className="w-3.5 h-3.5 mr-1" />
          Reset to Blank Form
        </Button>
      </div>
    </div>
  )
}