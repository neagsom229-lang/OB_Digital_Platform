// FILE: src/utils/generateCharterMarkdown.js
export function generateCharterMarkdown(data) {
  const teamName = data.teamName?.trim() || 'Our Team'
  const updatedAt = new Date().toISOString().split('T')[0]

  return `# ${teamName} — Remote Working Agreement & Team Charter

> **Version:** 1.0  
> **Last Updated:** ${updatedAt}  
> **Status:** Active & Team-Adopted  
> **Review Cadence:** Quarterly or upon major team roster changes

---

## 1. Core Operating Principles
1. **Asynchronous by Default:** We default to open, written, searchable communication over real-time meetings.
2. **Outcome-Based Trust:** Performance is evaluated on documented outcomes, code quality, and business impact—not hours logged or active green dots.
3. **Deep Work Protection:** Uninterrupted focus time is a core team asset that everyone is responsible for respecting.

---

## 2. Response Time Agreements (SLA)
- **General Collaboration Channels:** ${data.responseSla || 'Within 4 business hours'}
- **Direct Pings (@mention):** Within the agreed SLA during local working hours; no expectation of immediate reply.
- **Urgent Escalations:** PagerDuty / Phone call only when production systems are down or block today's sprint goal.

---

## 3. Synchronous Windows & Timezone Collaboration
- **Core Sync Hours:** ${data.syncWindow || '14:00 – 16:00 UTC (10:00 AM – 12:00 PM ET)'}
- **Team Timezone Spread:** ${data.timezones || 'UTC-5 to UTC+1 (about 2h overlap on 9–5 schedules)'}
- **Daily Rhythm:** Async standup logged via team thread by 10:00 AM local time.

---

## 4. Meeting Hygiene Standards
- **Agenda Requirement:** No agenda or pre-read document, no meeting.
- **Pre-reads:** Distributed at least 24 hours in advance for architectural or strategic debates.
- **Hybrid Rule:** *One-in-virtual, all-in-virtual.* If any participant is remote, everyone joins from their individual terminal.
- **Record & Summarize:** Every synchronous meeting logs decisions and assigned action items in the documentation hub.

---

## 5. Documentation & Single Source of Truth
- **Official Documentation Hub:** ${data.docHub || 'Team Notion / GitHub Wiki / Confluence'}
- **Decision Records:** Work decisions made in DMs or calls (not personal or coaching topics) are summarized in the documentation hub within 24 hours.
- **Definition of Done (DoD):** Work is complete only when implementation, automated tests, and user-facing documentation are merged.

---

## 6. Disconnection & Off-Hours Policy
- **Right to Disconnect:** Off-hours communication must be scheduled to deliver during the recipient's working hours.
- **No Weekend Expectation:** Messages sent outside work hours carry zero expectation of a response until the recipient's next working day.
- **Escalation Protocol:** ${data.escalationPolicy || 'Dedicated on-call rotation alerts via incident management tool; never regular Slack channels.'}

---
*Generated via DigitalOB Hub Team Charter Tool.*
`
}