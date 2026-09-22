// FILE: src/data/pillars.js
export const pillars = [
  {
    id: 'async-collab',
    number: '01',
    title: 'Asynchronous Collaboration & Documentation',
    subtitle: 'From Co-located Presence to Written Architecture',
    canonicalDefinition:
      'Replacing synchronous, verbal meeting cascades with persistent, searchable, and structured documentation (RFCs, tickets, and technical specs). Team members contribute independently across varying schedules and time zones.',
    friction:
      'Continuous conversational ping-pong, fragmented calendars, and telepressure—the anxious impulse to reply instantaneously to messages rather than engaging in deep focus.',
    countermeasure:
      'Establish explicit response-time SLAs (e.g., 4-hour turnaround), mandate pre-read memos 24 hours prior to decision meetings, and treat the documentation wiki as the single source of truth.',
    researchInsight:
      "Research from Gloria Mark's lab suggests it can take around 23 minutes (a commonly cited estimate) to return to the original task after an interruption. In lab studies, people compensated for interruptions by working faster, at the cost of more stress (Mark, Gudith & Klocke, 2008).",
    badge: 'Meso & Execution',
  },
  {
    id: 'output-trust',
    number: '02',
    title: 'Output-Based Trust vs. Presenteeism',
    subtitle: 'From Panopticon Surveillance to Verifiable Impact',
    canonicalDefinition:
      'Evaluating contributors on outcomes, quality and impact rather than hours logged, active green status dots, or physical presence. Sprint velocity is a team planning metric; using it or PR counts to rate individuals invites gaming. Avoids the modern digital Panopticon (a metaphor from Bentham, popularized by Foucault) and intrusive Electronic Performance Monitoring (EPM).',
    friction:
      'Management anxiety leading to keystroke loggers, screen capture spyware, and artificial face-time culture, which decimates psychological safety and intrinsic motivation.',
    countermeasure:
      'Co-create unambiguous "Definitions of Done" (DoD), assess impact over quarterly horizons via peer review, and explicitly forbid tracking passive activity statuses.',
    researchInsight:
      'Self-Determination Theory (Deci & Ryan) shows that autonomy, competence and relatedness support intrinsic motivation; controlling conditions such as intrusive monitoring tend to undermine it.',
    badge: 'Micro & Meso',
  },
  {
    id: 'flat-networked',
    number: '03',
    title: 'Flatter, Networked Organizational Structures',
    subtitle: 'From Bureaucratic Silos to Modular Teams',
    canonicalDefinition:
      'Organizing work around autonomous, cross-functional squads that interact through well-defined APIs and documentation channels rather than multi-layered management hierarchies.',
    friction:
      'Information hoarding, cross-department coordination bottlenecks, and conflicting team priorities.',
    countermeasure:
      'Adopt open-by-default communication in public channels, establish internal Request for Comments (RFC) decision processes, and maintain transparent roadmaps.',
    researchInsight:
      "Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations (Conway, 1968). Some teams reshape their structure on purpose to get the architecture they want (the 'Inverse Conway Maneuver', a practitioner idea, not part of the law itself).",
    badge: 'Macro Structure',
  },
  {
    id: 'ai-teaming',
    number: '04',
    title: 'Human-AI Teaming and Algorithmic Influence',
    subtitle: 'From Tool Usage to Co-Intelligence Integration',
    canonicalDefinition:
      'Treating autonomous algorithms and generative AI models as active collaborators (centaur or cyborg workflows) rather than static calculators, requiring continuous calibration of trust and verification.',
    friction:
      'Automation complacency (over-reliance on erroneous AI output) vs. algorithm aversion (rejection of high-value automated synthesis), paired with employee anxiety over skill obsolescence.',
    countermeasure:
      'Institute mandatory human-in-the-loop review for high-stakes decisions, run pair-prompting workshops, and clarify ethical accountability guidelines.',
    researchInsight:
      "In a field experiment with 758 BCG consultants (Dell'Acqua et al., 2023), GPT-4 users on tasks inside the AI's capability range finished 12.2% more tasks, 25.1% faster, with roughly 40% higher quality. On a task outside that range they were 19 percentage points less likely to get the correct answer — the 'jagged frontier'.",
    badge: 'Meso & Micro',
  },
  {
    id: 'well-being',
    number: '05',
    title: 'Digital Well-Being & Work-Home Boundary Erosion',
    subtitle: 'From Always-On Availability to Sustainable Detachment',
    canonicalDefinition:
      'Protecting cognitive capacity and mental health by actively preventing work-home boundary erosion, technostress, and digital exhaustion in distributed environments.',
    friction:
      'The collapse of physical boundaries between work and personal life, off-hours notification surges, and constant cognitive switching leading to chronic burnout.',
    countermeasure:
      'Establish explicit right-to-disconnect norms, schedule outbound messages to send during the recipient’s core hours, and implement calendar-blocked focus windows.',
    researchInsight:
      'Research on psychological detachment (e.g., Sonnentag & Fritz, 2007; Sonnentag, 2003) links failing to switch off from work during off-hours with more exhaustion and lower next-day engagement.',
    badge: 'Micro Recovery',
  },
]