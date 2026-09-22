// FILE: src/data/auditQuestions.js
export const auditQuestions = [
  {
    id: 'q1',
    dimension: 'Asynchronous Maturity',
    question:
      'Decisions and project updates are documented in searchable, written channels rather than relying on synchronous meetings or verbal hallway updates.',
    lowAnchor: '1 = Rarely / Meeting Heavy',
    highAnchor: '5 = Consistently Documented',
  },
  {
    id: 'q2',
    dimension: 'Output-Based Trust',
    question:
      'Performance is judged mainly on outcomes and impact, not on green-dot availability or login hours.',
    lowAnchor: '1 = Heavy Presenteeism',
    highAnchor: '5 = True Outcome Focus',
  },
  {
    id: 'q3',
    dimension: 'Psychological Safety',
    question:
      'Team members openly voice disagreement, share early-stage ideas, and admit mistakes in digital channels without fear of negative repercussions.',
    lowAnchor: '1 = Hesitant / Fear of Blame',
    highAnchor: '5 = High Psychological Safety',
  },
  {
    id: 'q4',
    dimension: 'Boundary Protection',
    question:
      'The team respects off-hours boundaries, and there is no unspoken pressure to respond to late-night messages or weekend pings.',
    lowAnchor: '1 = Constant Telepressure',
    highAnchor: '5 = Respected Right to Disconnect',
  },
  {
    id: 'q5',
    dimension: 'Human-AI Collaboration',
    question:
      'Our team uses AI tools deliberately with critical evaluation of outputs, understanding capability boundaries rather than blind reliance or complete aversion.',
    lowAnchor: '1 = Ad-hoc / Mistrusted',
    highAnchor: '5 = Balanced Co-Intelligence',
  },
  {
    id: 'q6',
    dimension: 'Hybrid Equity',
    question:
      'Remote contributors have equal visibility, project opportunities, and influence compared to colleagues working in central office hubs.',
    lowAnchor: '1 = Severe Proximity Bias',
    highAnchor: '5 = Complete Hybrid Equity',
  },
]