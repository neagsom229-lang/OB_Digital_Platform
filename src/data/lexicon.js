// FILE: src/data/lexicon.js
export const lexiconTerms = [
  {
    id: 'swift-trust',
    term: 'Swift Trust',
    category: 'Meso',
    definition:
      'In temporary or virtual teams, members act as if trust already exists, relying on role expectations and shared action rather than gradual personal bonding.',
    source: 'Meyerson, Weick & Kramer, 1996',
  },
  {
    id: 'proximity-bias',
    term: 'Proximity Bias',
    category: 'Meso/Macro',
    definition:
      'The unconscious tendency to favor people who are physically visible to leaders, which can skew assignments, feedback and promotions against remote peers with equal output. In a Ctrip field experiment, home workers were promoted less conditional on performance.',
    source: 'Bloom et al., 2015',
  },
  {
    id: 'presenteeism',
    term: 'Presenteeism (two meanings)',
    category: 'Micro',
    definition:
      'In research, usually working while sick. In remote-work talk, "digital presenteeism" or face-time culture: signaling effort through visible availability (green status, late messages) instead of results.',
    source: 'Johns, 2010',
  },
  {
    id: 'self-determination-theory',
    term: 'Self-Determination Theory (SDT)',
    category: 'Micro',
    definition:
      "Deci & Ryan's theory that lasting motivation grows when three needs are met: autonomy (acting with a sense of choice and ownership, not just independence), competence (feeling effective) and relatedness (feeling connected and valued).",
    source: 'Deci & Ryan, 2000',
  },
  {
    id: 'cognitive-offloading',
    term: 'Cognitive Offloading',
    category: 'Micro',
    definition:
      'Using external aids such as notes, wikis or AI tools to reduce mental load, freeing working memory for reasoning.',
    source: 'Risko & Gilbert, 2016',
  },
  {
    id: 'algorithmic-alienation',
    term: 'Algorithmic Alienation',
    category: 'Macro',
    definition:
      'An emerging, not yet standard, term for the sense of powerlessness and lost agency when software assigns, rates or disciplines work. Closely related to algorithmic management.',
    source: '—',
  },
  {
    id: 'boundary-management',
    term: 'Work-Home Boundary Management',
    category: 'Micro',
    definition:
      'How people separate (segment) or blend (integrate) work and personal roles. Remote work makes boundaries more permeable, raising the risk of constant availability.',
    source: 'Nippert-Eng, 1996; Ashforth, Kreiner & Fugate, 2000',
  },
  {
    id: 'definition-of-done',
    term: 'Definition of Done (DoD)',
    category: 'Execution',
    definition:
      'A shared, explicit checklist of quality criteria (e.g. tested, reviewed, documented) an item must meet before it counts as finished. A core Scrum concept.',
    source: 'The Scrum Guide',
  },
  {
    id: 'context-switching-penalty',
    term: 'Context-Switching Penalty',
    category: 'Micro',
    definition:
      'The time and performance cost of jumping between tasks, tools or meetings. See also Attention Residue.',
    source: 'Leroy, 2009',
  },
  {
    id: 'organizational-behavior',
    term: 'Organizational Behavior (OB)',
    category: 'Core',
    definition:
      'The study of how individuals, groups and structures shape behavior inside organizations, used to improve performance, well-being and effectiveness.',
    source: '—',
  },
  {
    id: 'digital-ob',
    term: 'Digital OB',
    category: 'Core',
    definition:
      "This hub's label for OB applied to technology-mediated work: remote and hybrid teams, collaboration platforms, data-driven management and AI. An applied framing, not a separate academic discipline.",
    source: '—',
  },
  {
    id: 'micro-meso-macro',
    term: 'Micro / Meso / Macro Levels',
    category: 'Core',
    definition:
      'Levels of analysis: individuals (micro), groups and teams (meso), whole organizations (macro). The meso level links the other two.',
    source: 'House, Rousseau & Thomas-Hunt, 1995',
  },
  {
    id: 'psychological-safety',
    term: 'Psychological Safety',
    category: 'Meso',
    definition:
      'A shared belief in a team that it is safe to take interpersonal risks: asking questions, admitting mistakes, disagreeing.',
    source: 'Edmondson, 1999',
  },
  {
    id: 'interpersonal-trust',
    term: 'Interpersonal Trust (ability, benevolence, integrity)',
    category: 'Meso',
    definition:
      'Willingness to be vulnerable to another party, based on their perceived ability, benevolence and integrity.',
    source: 'Mayer, Davis & Schoorman, 1995',
  },
  {
    id: 'virtual-team',
    term: 'Virtual Team',
    category: 'Meso',
    definition:
      'A team whose members are geographically dispersed and work interdependently mainly through digital communication.',
    source: '—',
  },
  {
    id: 'hybrid-work',
    term: 'Hybrid Work',
    category: 'Macro',
    definition:
      'A model where people split time between a shared workplace and remote locations; creates coordination and fairness challenges such as proximity bias.',
    source: '—',
  },
  {
    id: 'media-richness-theory',
    term: 'Media Richness Theory',
    category: 'Meso',
    definition:
      'Communication channels differ in how well they carry cues and resolve ambiguity: use rich channels (video) for ambiguous tasks and lean ones (text) for routine tasks. Empirical support is mixed.',
    source: 'Daft & Lengel, 1986',
  },
  {
    id: 'zoom-fatigue',
    term: 'Zoom Fatigue',
    category: 'Micro',
    definition:
      'Exhaustion linked to long video calls. One influential account points to close-up eye contact, high cognitive load, constant self-view and reduced mobility.',
    source: 'Bailenson, 2021',
  },
  {
    id: 'asynchronous-communication',
    term: 'Asynchronous (Async-First) Communication',
    category: 'Execution',
    definition:
      'Communication that does not require everyone to be online at the same time (documents, threads, recorded video). Live meetings are kept for work that truly needs them.',
    source: '—',
  },
  {
    id: 'deep-work',
    term: 'Deep Work',
    category: 'Execution',
    definition:
      'Distraction-free concentration on cognitively demanding tasks that produces high-value output.',
    source: 'Newport, 2016',
  },
  {
    id: 'attention-residue',
    term: 'Attention Residue',
    category: 'Micro',
    definition:
      'After switching tasks, part of your attention stays on the unfinished previous task, lowering performance on the next one.',
    source: 'Leroy, 2009',
  },
  {
    id: 'rfc',
    term: 'RFC (Request for Comments)',
    category: 'Execution',
    definition:
      'A written proposal shared for feedback before a decision is made. The format began with internet standards and is now common in engineering teams.',
    source: '—',
  },
  {
    id: 'response-time-sla',
    term: 'Response-Time SLA (team norm)',
    category: 'Execution',
    definition:
      'In a team charter, an agreed expectation for how fast messages are answered. (Formally, an SLA is a Service Level Agreement, a contract term.)',
    source: '—',
  },
  {
    id: 'working-agreement',
    term: 'Working Agreement / Team Charter',
    category: 'Execution',
    definition:
      'A team-written set of norms for how members collaborate. A charter usually adds purpose, scope and roles.',
    source: '—',
  },
  {
    id: 'tacit-vs-explicit',
    term: 'Tacit vs Explicit Knowledge',
    category: 'Macro',
    definition:
      'Explicit knowledge can be written down; tacit knowledge (skills, judgment) is hard to put into words and is often passed on through practice. Async-first cultures must make room for both.',
    source: 'Polanyi, 1966; Nonaka & Takeuchi, 1995',
  },
  {
    id: 'telepressure',
    term: 'Telepressure',
    category: 'Micro',
    definition:
      'A preoccupation with, and urge to respond quickly to, work messages; linked to poorer recovery and well-being.',
    source: 'Barber & Santuzzi, 2015',
  },
  {
    id: 'technostress',
    term: 'Technostress',
    category: 'Micro',
    definition:
      'Stress from struggling to cope with technology demands: overload, invasion of personal time, complexity, insecurity and uncertainty.',
    source: 'Tarafdar et al., 2007',
  },
  {
    id: 'psychological-detachment',
    term: 'Psychological Detachment',
    category: 'Micro',
    definition:
      'Mentally switching off from work during off-hours; one of four recovery experiences (with relaxation, mastery and control).',
    source: 'Sonnentag & Fritz, 2007',
  },
  {
    id: 'burnout',
    term: 'Burnout',
    category: 'Micro',
    definition:
      "In the WHO's ICD-11, an occupational phenomenon from chronic workplace stress that has not been successfully managed: exhaustion, mental distance or cynicism, and reduced efficacy. Not a medical condition.",
    source: 'WHO ICD-11',
  },
  {
    id: 'right-to-disconnect',
    term: 'Right to Disconnect',
    category: 'Macro',
    definition:
      'A law or policy protecting employees from having to respond to work communication outside working hours (e.g. France, 2017; Australia, 2024).',
    source: '—',
  },
  {
    id: 'human-ai-teaming',
    term: 'Human-AI Teaming (Co-Intelligence)',
    category: 'Meso',
    definition:
      'Humans and AI systems working interdependently, with clear roles, oversight and shared accountability. "Co-intelligence" in this sense was popularized by Ethan Mollick.',
    source: 'Mollick, 2024',
  },
  {
    id: 'jagged-frontier',
    term: 'Jagged Frontier',
    category: 'Meso',
    definition:
      "AI's uneven ability boundary: it excels at some tasks and fails at others that look similar in difficulty.",
    source: "Dell'Acqua et al., 2023",
  },
  {
    id: 'centaur-vs-cyborg',
    term: 'Centaur vs Cyborg',
    category: 'Meso',
    definition:
      'Two observed styles of working with AI: centaurs split tasks between human and AI; cyborgs weave AI into every step.',
    source: "Dell'Acqua et al., 2023; Mollick, 2024",
  },
  {
    id: 'human-in-the-loop',
    term: 'Human-in-the-Loop',
    category: 'Macro',
    definition:
      'A design principle in which a person reviews or approves AI outputs or decisions before they take effect.',
    source: '—',
  },
  {
    id: 'algorithmic-management',
    term: 'Algorithmic Management',
    category: 'Macro',
    definition:
      'The use of software to assign, monitor, evaluate and sometimes discipline workers.',
    source: 'Lee et al., 2015',
  },
  {
    id: 'electronic-performance-monitoring',
    term: 'Electronic Performance Monitoring (EPM)',
    category: 'Macro',
    definition:
      'Technology-enabled tracking of work activity (keystrokes, screenshots, location). Intrusive forms are linked to stress and reduced autonomy.',
    source: 'Ravid et al., 2020',
  },
  {
    id: 'organizational-justice',
    term: 'Organizational Justice (Distributive, Procedural, Interactional)',
    category: 'Macro',
    definition:
      'Employee perceptions of fairness in workplace outcomes (distributive), the formal decision-making processes used (procedural), and interpersonal treatment (interactional). Crucial for transparent remote compensation and promotion reviews.',
    source: 'Colquitt, 2001; Greenberg, 1990',
  },
  {
    id: 'emotional-labor',
    term: 'Emotional Labor & Surface Acting',
    category: 'Micro',
    definition:
      'The requirement to display organizationally desired emotions during interactions. In digital work, manifests as "textual cheerfulness" or forced expressive energy on video calls, contributing to cognitive exhaustion.',
    source: 'Hochschild, 1983; Grandey, 2000',
  },
  {
    id: 'job-characteristics-model',
    term: 'Job Characteristics Model (JCM)',
    category: 'Micro',
    definition:
      'Hackman & Oldham’s framework identifying five core job dimensions (skill variety, task identity, task significance, autonomy, feedback) that foster critical psychological states for intrinsic work motivation.',
    source: 'Hackman & Oldham, 1976',
  },
  {
    id: 'batna-negotiation',
    term: 'BATNA & Integrative Negotiation',
    category: 'Execution',
    definition:
      'Best Alternative to a Negotiated Agreement (BATNA). In async project scoping and resource allocation, integrative (win-win) bargaining creates shared value rather than zero-sum distributive conflict.',
    source: 'Fisher, Ury & Patton, 1991',
  },
]