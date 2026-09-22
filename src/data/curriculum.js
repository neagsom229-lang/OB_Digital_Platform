// FILE: src/data/curriculum.js
export const curriculumModules = [
  {
    id: 'mod-01',
    tier: 'Micro',
    moduleNumber: 1,
    title: 'Personality & Individual Differences in Remote Work',
    academicFoundations: ['Costa & McCrae (Big Five)', 'Bandura (Self-Efficacy)', 'Rotter (Locus of Control)'],
    coreConcept:
      'How stable personality traits and self-regulatory capacities dictate an individual\'s adaptability to high-autonomy, low-supervision digital environments.',
    digitalManifestation:
      'High Conscientiousness predicts remote performance, but High Neuroticism amplifies telepressure. High Extraversion requires deliberate virtual social channels to avoid isolation.',
    caseStudy:
      'Engineering onboarding without physical peers: using Bandura\'s enactive mastery (small PR wins) to build self-efficacy in early-career developers.',
    keyTakeaways: [
      'Internal Locus of Control thrives in asynchronous models; external locus requires structured feedback loops.',
      'Emotional Intelligence (EQ) in digital work shifts toward text-based empathy and tone regulation.',
      'Personality cannot be trained, but cognitive scaffolding (checklists, working agreements) levels execution differences.',
    ],
  },
  {
    id: 'mod-02',
    tier: 'Micro',
    moduleNumber: 2,
    title: 'Perception, Attribution & Cognitive Biases in Written Channels',
    academicFoundations: ['Heider & Kelley (Attribution Theory)', 'Kahneman & Tversky (System 1 & 2)', 'Nickerson (Confirmation Bias)'],
    coreConcept:
      'The cognitive shortcuts and evaluative distortions people make when interpreting ambiguous data or interpersonal actions.',
    digitalManifestation:
      'The "Fundamental Attribution Error" is severely amplified in chat apps: when a colleague takes 6 hours to respond, peers attribute it to laziness (internal) rather than a family emergency or deep work focus (external).',
    caseStudy:
      'Code and Design Reviews: mitigating negativity bias by instituting standard pull-request review templates with explicit semantic tags (e.g., [nitpick], [blocking], [kudos]).',
    keyTakeaways: [
      'Text carries no vocal timbre; human readers default to interpreting ambiguous short text negatively.',
      'Cognitive offloading prevents working memory exhaustion but can induce automation bias when reviewing AI drafts.',
      'System 2 deliberation must be designed into communication workflows (RFCs, quiet reading periods).',
    ],
  },
  {
    id: 'mod-03',
    tier: 'Micro',
    moduleNumber: 3,
    title: 'Motivation Architecture: Beyond Simple Extrinsics',
    academicFoundations: ['Deci & Ryan (SDT)', 'Vroom (Expectancy Theory)', 'Locke & Latham (Goal-Setting)', 'Adams (Equity Theory)'],
    coreConcept:
      'How intrinsic drivers, perceived fairness, and transparent goal clarity produce sustainable cognitive output without physical oversight.',
    digitalManifestation:
      'Locke & Latham\'s goal-setting directly translates to modern Objectives and Key Results (OKRs). When employees work remotely, Adams\' Equity Theory manifests in sensitivity to salary transparency and equitable access to senior leaders.',
    caseStudy:
      'Transitioning from activity tracking (keystrokes) to Vroom\'s Expectancy framework: ensuring contributors see a direct link between effort, high-quality PR merges, and compensation review.',
    keyTakeaways: [
      'Extrinsic surveillance destroys intrinsic motivation (Deci & Ryan).',
      'Goals must be specific, measurable, and challenging, with continuous asynchronous telemetry.',
      'Perceptions of inequity spread faster in digital organizations through anonymous review platforms.',
    ],
  },
  {
    id: 'mod-04',
    tier: 'Micro',
    moduleNumber: 4,
    title: 'Cognitive Ergonomics, Technostress & Detachment',
    academicFoundations: ['Sonnentag (Psychological Detachment)', 'Tarafdar et al. (Technostress)', 'Leroy (Attention Residue)'],
    coreConcept:
      'The neurobiological limits of attention, the cost of interruption cascades, and the science of recovery experiences.',
    digitalManifestation:
      'Techno-overload and techno-invasion collapse the recovery window. Attention residue accumulates when jumping between Slack, Jira, Zoom, and code editors, reducing working memory for complex problem-solving.',
    caseStudy:
      'Implementing "No-Meeting Wednesdays" and mandatory notification scheduled-sends to protect psychological detachment and restore next-day engagement.',
    keyTakeaways: [
      'Interruption recovery takes an estimated 23 minutes on complex cognitive tasks (Mark et al.).',
      'Psychological detachment is non-negotiable for burnout prevention and creative problem-solving.',
      'Telepressure is an employee-internalized anxiety that must be counteracted by leadership modeling.',
    ],
  },
  {
    id: 'mod-05',
    tier: 'Meso',
    moduleNumber: 5,
    title: 'Virtual Team Dynamics, Social Loafing & Swift Trust',
    academicFoundations: ['Tuckman (Stages of Group Development)', 'Meyerson et al. (Swift Trust)', 'Ringelmann (Social Loafing)'],
    coreConcept:
      'How distributed groups form, align, establish norms, and prevent disengagement without physical proximity.',
    digitalManifestation:
      'Virtual teams often skip informal "Storming" and stay in artificial politeness, or fragment due to lack of shared context. Swift trust replaces long-term social bonding with clear role clarity and rapid initial deliverables.',
    caseStudy:
      'Designing an Agile squad\'s initial sprint zero: using a Team Working Agreement to accelerate directly from Forming to Norming in under 2 weeks.',
    keyTakeaways: [
      'Social loafing increases when individual contribution is opaque; public project boards restore accountability.',
      'Swift trust is task-based, fragile, and maintained through predictability and prompt delivery.',
      'De-individuation in large digital channels reduces empathy; keep cross-functional squads small (Amazon\'s "two-pizza" rule).',
    ],
  },
  {
    id: 'mod-06',
    tier: 'Meso',
    moduleNumber: 6,
    title: 'Asynchronous Conflict Management & Psychological Safety',
    academicFoundations: ['Edmondson (Psychological Safety)', 'Thomas & Kilmann (TKI Conflict Model)', 'Jehn (Task vs. Relationship Conflict)'],
    coreConcept:
      'Navigating interpersonal and task disagreements across digital media while maintaining team vulnerability and voice.',
    digitalManifestation:
      'Task conflict (debate over code architecture or product strategy) easily degrades into destructive relationship conflict when argued via threaded comments due to missing body language.',
    caseStudy:
      'The "3-Reply Rule": if a text debate in a PR or Slack thread exceeds 3 exchanges without consensus, participants must jump to a 10-minute live video call to de-escalate.',
    keyTakeaways: [
      'Psychological safety is the number one predictor of team effectiveness (Google Project Aristotle).',
      'Collaborative conflict resolution requires high assertiveness and high cooperativeness in shared RFC docs.',
      'Blameless post-mortems convert failures into collective organizational learning.',
    ],
  },
  {
    id: 'mod-07',
    tier: 'Meso',
    moduleNumber: 7,
    title: 'E-Leadership & Situational Delegation',
    academicFoundations: ['Avolio & Kahai (E-Leadership)', 'Hersey & Blanchard (Situational Leadership)', 'Graen & Uhl-Bien (LMX Theory)'],
    coreConcept:
      'Leading teams through digital interfaces: balancing supportive versus directive behavior depending on individual team maturity.',
    digitalManifestation:
      'Leader-Member Exchange (LMX) in remote teams often suffers from proximity bias: leaders develop higher-trust relationships with employees who match their working hours or visit the office.',
    caseStudy:
      'Auditing executive 1-on-1 distribution and promotion velocity to ensure remote ICs have equal sponsorship compared to co-located personnel.',
    keyTakeaways: [
      'E-leadership requires intentional communication redundancy (saying it in chat, in a memo, and in all-hands).',
      'Situational leadership: high task direction for junior hires via pair programming; high autonomy for senior staff.',
      'A manager\'s primary remote role is unblocking friction and clarifying priorities, not monitoring effort.',
    ],
  },
  {
    id: 'mod-08',
    tier: 'Meso',
    moduleNumber: 8,
    title: 'Human-AI Teaming, Co-Intelligence & The Jagged Frontier',
    academicFoundations: ['Mollick (Co-Intelligence)', 'Dell\'Acqua et al. (Jagged Technological Frontier)', 'Parasuraman et al. (Automation Trust)'],
    coreConcept:
      'Integrating generative AI agents and algorithmic co-pilots into interpersonal team workflows and cognitive division of labor.',
    digitalManifestation:
      'Team members split into "Centaurs" (dividing tasks strictly between human and AI) and "Cyborgs" (weaving AI into the loop continuously). The key leadership challenge is preventing automation complacency.',
    caseStudy:
      'Creating clear protocol boundaries for using LLMs in code reviews: requiring engineers to disclose AI assistance and assume 100% legal and architectural liability.',
    keyTakeaways: [
      'The "Jagged Frontier": AI excels at complex reasoning on some tasks while failing abruptly at basic adjacent tasks.',
      'Trust calibration in algorithms requires understanding failure modes, not just success rates.',
      'AI transforms junior apprenticeship: entry-level roles shift earlier toward evaluation and curation.',
    ],
  },
  {
    id: 'mod-09',
    tier: 'Macro',
    moduleNumber: 9,
    title: 'Power, Influence & Digital Organizational Politics',
    academicFoundations: ['French & Raven (Bases of Power)', 'Pfeffer (Power in Organizations)', 'Cialdini (Influence Principles)'],
    coreConcept:
      'How authority, leverage, and political coalition-building operate when physical executive suites and watercooler lobbying are absent.',
    digitalManifestation:
      'Coercive and Legitimate power decline in efficacy across remote engineering teams. Expert power and Informational power (who controls documentation, repos, and architectural RFCs) become dominant.',
    caseStudy:
      'Open RFC decision-making: replacing back-room executive alignments with a 14-day public review period on GitHub where all stakeholders can vote and comment.',
    keyTakeaways: [
      'Power in digital companies flows to those who write the clearest documentation and control technical architecture.',
      'Digital politics manifests as "thread lobbying" (DMing peers before a public debate) rather than hallway influence.',
      'Social proof and reciprocity remain powerful remote influence levers.',
    ],
  },
  {
    id: 'mod-10',
    tier: 'Macro',
    moduleNumber: 10,
    title: 'Organizational Culture Without Physical Spaces',
    academicFoundations: ['Schein (Three Levels of Culture)', 'Cameron & Quinn (Competing Values Framework)', 'Ouchi (Theory Z)'],
    coreConcept:
      'Sustaining shared norms, values, and organizational identity when there are no branded offices, communal kitchens, or physical rituals.',
    digitalManifestation:
      'Schein\'s "Artifacts" shift from building architecture and dress codes to codebase formatting, Slack emoji traditions, meeting hygiene, and documentation tone. "Underlying Assumptions" are tested when crises occur.',
    caseStudy:
      'Preserving culture during a 200% headcount growth at an all-remote startup: establishing an open-source company handbook that documents cultural non-negotiables.',
    keyTakeaways: [
      'Culture in a remote organization is not ping-pong tables; it is how you write, conduct meetings, and make decisions.',
      'Artifacts are digital: open issue trackers, recorded town halls, and transparent compensation formulas.',
      'Acculturation requires formal digital onboarding paths rather than informal osmotic learning.',
    ],
  },
  {
    id: 'mod-11',
    tier: 'Macro',
    moduleNumber: 11,
    title: 'Cross-Cultural OB in Global Asynchronous Teams',
    academicFoundations: ['Hofstede (Cultural Dimensions)', 'Meyer (The Culture Map)', 'Hall (High vs. Low Context Communication)'],
    coreConcept:
      'Managing psychological differences in communication style, authority deference, and feedback across international distributed nodes.',
    digitalManifestation:
      'High-context cultures (relying heavily on implicit shared understanding and interpersonal relationships) struggle with lean, direct text channels compared to low-context cultures (accustomed to precise, literal documentation).',
    caseStudy:
      'Managing feedback between US (low-context, explicit positive framing) and Dutch or German (low-context, direct critique) engineers in public PR threads.',
    keyTakeaways: [
      'High Power Distance cultures are less likely to publicly challenge leadership in open Slack channels; anonymous feedback forms are necessary.',
      'Async communication favors low-context, highly explicit writing.',
      'Time zone diplomacy: rotating sync meeting schedules so the same geographic region does not always bear the late-night burden.',
    ],
  },
  {
    id: 'mod-12',
    tier: 'Macro',
    moduleNumber: 12,
    title: 'Digital Change Management & Structural Transformation',
    academicFoundations: ['Kotter (8-Step Change Model)', 'Lewin (Force Field Analysis)', 'Conway (Conway\'s Law)'],
    coreConcept:
      'Guiding organizations through structural shifts, tooling migrations, and operating model re-architectures.',
    digitalManifestation:
      'Lewin\'s "Unfreezing" stage requires proving the cost of meeting sprawl and presenteeism through team health telemetry before attempting to enforce async-first policies.',
    caseStudy:
      'Executing a company-wide transition from 30 weekly synchronous status meetings to automated asynchronous standups using Kotter\'s model (creating urgency, building a guiding coalition).',
    keyTakeaways: [
      'Change fails when leaders change tools (e.g., introducing Notion or Slack) without changing behavioral incentive structures.',
      'Inverse Conway Maneuver: restructuring teams to force a more decoupled, resilient software architecture.',
      'Resistance to digital transformation is usually rooted in fear of loss of status, control, or competence.',
    ],
  },
]