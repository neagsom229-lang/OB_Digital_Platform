// FILE: src/utils/calculateAuditScore.js
export function calculateAuditScore(answers) {
  const values = Object.values(answers)
  if (values.length < 6) return null

  const totalScore = values.reduce((sum, val) => sum + Number(val), 0)

  let tier = ''
  let label = ''
  let description = ''
  let variant = ''

  if (totalScore <= 14) {
    tier = 'Crisis / High Risk'
    label = 'Surveillance & Fragmentation'
    description =
      'The team relies heavily on synchronous presenteeism, reactive communication, and intrusive oversight. High risk of telepressure and burnout.'
    variant = 'danger'
  } else if (totalScore <= 22) {
    tier = 'Fragmented / Transitioning'
    label = 'Emerging Hybrid Discipline'
    description =
      'Healthy foundations are present, but inconsistencies in asynchronous documentation, meeting norms, or off-hours boundaries create friction.'
    variant = 'warning'
  } else {
    tier = 'High-Trust / Elite Async'
    label = 'Autonomous Outcome-Driven Culture'
    description =
      'Strong asynchronous maturity, clear definition of done, psychological safety, and deliberate boundary protection enable sustained high performance.'
    variant = 'success'
  }

  return {
    totalScore,
    maxScore: 30,
    percentage: Math.round((totalScore / 30) * 100),
    tier,
    label,
    description,
    variant,
  }
}