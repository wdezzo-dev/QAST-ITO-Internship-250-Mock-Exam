import { Question } from "./types";

export const QUESTIONS_FOCUS_SOFTSKILLS: Question[] = [
  {
    id: 1151,
    text: "During a heated technical debate, a senior engineer strongly disagrees with your architectural proposal. What is the most constructive response?",
    options: [
      { key: "A", text: "Politely ask them to explain their perspective, listen actively without interrupting, and look for a middle ground or technical consensus based on objective pros and cons" },
      { key: "B", text: "Interrupt them immediately to defend your design and prove why your proposal is superior" },
      { key: "C", text: "Withdraw from the discussion and implement your architecture silently to let the results speak" },
      { key: "D", text: "Report their disagreement as a personal attack to your direct supervisor" }
    ],
    correctAnswer: "A",
    explanation: "Active listening and objective, ego-free comparison of technical choices foster healthy collaboration and lead to optimal design outcomes.",
    section: "Soft Skills"
  },
  {
    id: 1152,
    text: "You realize you will miss a critical project deadline due to an unexpected technical roadblock. When and how should you communicate this?",
    options: [
      { key: "A", text: "Wait until the deadline day to explain what went wrong in detail" },
      { key: "B", text: "Inform stakeholders as soon as you identify the roadblock, explain the impact, and present actionable options or an updated timeline proposal" },
      { key: "C", text: "Work late silently and hope nobody notices a minor delay" },
      { key: "D", text: "Blame the roadblock on the legacy code of another team member to preserve your standing" }
    ],
    correctAnswer: "B",
    explanation: "Proactive communication builds trust. Giving stakeholders early warnings allows them to adjust plans and coordinate alternative approaches.",
    section: "Soft Skills"
  },
  {
    id: 1153,
    text: "A non-technical product manager asks why a backend feature is taking longer than expected. How should you explain the situation?",
    options: [
      { key: "A", text: "Provide a highly technical explanation detailing database indexing, thread locks, and memory leaks" },
      { key: "B", text: "Avoid answering to prevent confusing them with technical details" },
      { key: "C", text: "Use a clear, real-world analogy to explain the underlying complexity and focus on how resolving it ensures system stability and user safety" },
      { key: "D", text: "Tell them that non-technical managers cannot understand development complexities" }
    ],
    correctAnswer: "C",
    explanation: "Translating technical obstacles into clear, accessible business-focused explanations bridges the communication gap and maintains alignment.",
    section: "Soft Skills"
  },
  {
    id: 1154,
    text: "You are tasked with onboarding a junior developer to your team. What is the most effective approach to ensure their success?",
    options: [
      { key: "A", text: "Hand them a 50-page architecture document and let them solve tickets independently" },
      { key: "B", text: "Schedule dedicated 1-on-1 pairing sessions, clarify codebase conventions, and assign small, progressive tasks with constructive feedback loops" },
      { key: "C", text: "Tell them to watch you code without asking any questions" },
      { key: "D", text: "Expect them to learn everything by reviewing git commit histories" }
    ],
    correctAnswer: "B",
    explanation: "Empathic, structured mentoring with progressive hands-on practice builds confidence and accelerates the onboarding process.",
    section: "Soft Skills"
  },
  {
    id: 1155,
    text: "Your team is adopting a new framework that you have never used before. What is the best way to handle this transition?",
    options: [
      { key: "A", text: "Complain about the change and advocate for sticking with the old, familiar framework" },
      { key: "B", text: "Embrace the opportunity to learn, research tutorials proactively, and share your findings with the team during standups" },
      { key: "C", text: "Delegate all tasks involving the new framework to others" },
      { key: "D", text: "Pretend you are an expert and write unverified code hoping it works" }
    ],
    correctAnswer: "B",
    explanation: "Adaptability and a growth mindset are essential in the fast-paced IT landscape. Proactive learning benefits both the individual and the team.",
    section: "Soft Skills"
  },
  {
    id: 1156,
    text: "A customer reports a bug in a highly frustrated, rude manner. What is the professional way to respond?",
    options: [
      { key: "A", text: "Acknowledge their frustration, apologize for the inconvenience, ask targeted clarifying questions to isolate the bug, and provide a clear fix plan" },
      { key: "B", text: "Ignore their report until they apologize for being rude" },
      { key: "C", text: "Respond defensively, explaining that the bug is likely due to their own user error" },
      { key: "D", text: "Match their tone and explain how difficult it is to build software" }
    ],
    correctAnswer: "A",
    explanation: "De-escalating customer frustration through empathy, objective diagnosis, and professional communication preserves relationships and resolves issues faster.",
    section: "Soft Skills"
  },
  {
    id: 1157,
    text: "You discover a high-severity security vulnerability in a production system. What should you do?",
    options: [
      { key: "A", text: "Discuss it publicly on external social media to raise awareness" },
      { key: "B", text: "Report it immediately to your security team or manager following internal disclosure protocols, and help draft a patch" },
      { key: "C", text: "Ignore it unless it is assigned as an official ticket to your sprint" },
      { key: "D", text: "Fix it silently in production without notifying anyone or logging the change" }
    ],
    correctAnswer: "B",
    explanation: "Vulnerabilities must be handled securely and responsibly through proper channels to ensure swift remediation without exposing the system to exploits.",
    section: "Soft Skills"
  },
  {
    id: 1158,
    text: "What does 'Active Listening' involve?",
    options: [
      { key: "A", text: "Nodding continuously while planning what you are going to say next" },
      { key: "B", text: "Focusing entirely on the speaker, understanding their message, asking clarifying questions, and summarizing their points to confirm understanding" },
      { key: "C", text: "Recording the conversation to play it back at double speed later" },
      { key: "D", text: "Interrupting with solutions as soon as the speaker mentions a problem" }
    ],
    correctAnswer: "B",
    explanation: "Active listening requires full engagement to comprehend the underlying message, validate feelings, and verify details before jumping to conclusions.",
    section: "Soft Skills"
  },
  {
    id: 1159,
    text: "Which of the following is the most constructive way to deliver feedback to a peer during a code review?",
    options: [
      { key: "A", text: "Say 'This code is terrible, rewrite it completely'" },
      { key: "B", text: "Frame suggestions constructively, explain the 'why' behind best practices, and suggest specific, concrete alternatives" },
      { key: "C", text: "Approve the pull request silently to avoid causing any potential conflict" },
      { key: "D", text: "Fix the peer's code yourself without explaining why" }
    ],
    correctAnswer: "B",
    explanation: "Code reviews should be used for learning. Delivering feedback constructively and explaining the reasoning behind suggestions builds team skills.",
    section: "Soft Skills"
  },
  {
    id: 1160,
    text: "What is the primary benefit of a 'Blameless Post-Mortem' after a production outage?",
    options: [
      { key: "A", text: "To identify and punish the person who introduced the breaking change" },
      { key: "B", text: "To focus on systemic improvements, understand how the failure occurred, and prevent future occurrences without fear of retaliation" },
      { key: "C", text: "To write a legal defense to protect the company from client lawsuits" },
      { key: "D", text: "To prove that the infrastructure team was responsible for the downtime" }
    ],
    correctAnswer: "B",
    explanation: "Blameless post-mortems foster a culture of transparency and safety, encouraging teams to discuss mistakes openly and address systemic weaknesses.",
    section: "Soft Skills"
  },
  {
    id: 1161,
    text: "When managing competing priorities in a sprint, which tool or framework can help categorize tasks by Urgency and Importance?",
    options: [
      { key: "A", text: "The Kanban Board" },
      { key: "B", text: "The Eisenhower Matrix" },
      { key: "C", text: "The Fibonacci Sequence" },
      { key: "D", text: "The Waterfall Flow" }
    ],
    correctAnswer: "B",
    explanation: "The Eisenhower Matrix divides tasks into four quadrants based on Urgency and Importance, helping professionals prioritize what to do, delegate, plan, or eliminate.",
    section: "Soft Skills"
  },
  {
    id: 1162,
    text: "A client requests a significant 'out-of-scope' feature mid-sprint. What is the most appropriate response?",
    options: [
      { key: "A", text: "Agree to build it immediately to keep the client happy, even if it delays existing sprint commitments" },
      { key: "B", text: "Acknowledge the value of the feature, explain the impact on the current sprint scope, and propose adding it to the product backlog for prioritization in the next sprint planning" },
      { key: "C", text: "Refuse the request flatly and tell them they are violating the contract" },
      { key: "D", text: "Ignore their emails until the current sprint is finalized" }
    ],
    correctAnswer: "B",
    explanation: "Managing scope creep involves validating the client's needs while clearly communicating delivery limits and following established sprint planning processes.",
    section: "Soft Skills"
  },
  {
    id: 1163,
    text: "What is the core concept of 'Emotional Intelligence' (EQ) in a professional setting?",
    options: [
      { key: "A", text: "The ability to suppress all emotions to maintain a clinical demeanor" },
      { key: "B", text: "The ability to recognize, understand, and manage your own emotions, and empathize with the emotions of others to guide behavior and relationships" },
      { key: "C", text: "The capacity to persuade colleagues to agree with your design decisions" },
      { key: "D", text: "The intellectual capacity to memorize complex software APIs" }
    ],
    correctAnswer: "B",
    explanation: "EQ is critical for teamwork, leadership, conflict resolution, and stress management, enabling healthier interactions and communication.",
    section: "Soft Skills"
  },
  {
    id: 1164,
    text: "Your manager gives you constructive feedback that you disagree with. What is the best initial step?",
    options: [
      { key: "A", text: "Immediately list reasons why they are wrong and defend your work" },
      { key: "B", text: "Listen objectively, ask clarifying questions to understand their perspective, and reflect on the feedback before responding" },
      { key: "C", text: "Nod in agreement silently and ignore the feedback completely" },
      { key: "D", text: "Ask to be transferred to a different manager immediately" }
    ],
    correctAnswer: "B",
    explanation: "Receiving feedback constructively requires suspending defensiveness. Seeking clarification shows professional maturity and a willingness to grow.",
    section: "Soft Skills"
  },
  {
    id: 1165,
    text: "What does it mean to have 'Influence without Authority' in a software engineering team?",
    options: [
      { key: "A", text: "Using peer pressure to force team members to adopt your coding preferences" },
      { key: "B", text: "The ability to guide, persuade, and align team members toward technical best practices through logic, empathy, trust, and collaboration, rather than relying on managerial rank" },
      { key: "C", text: "Logging changes to production servers without obtaining approval" },
      { key: "D", text: "Demanding that junior developers rewrite their code to match yours" }
    ],
    correctAnswer: "B",
    explanation: "True leadership in engineering often relies on influence without authority—building trust, presenting clear technical arguments, and mentoring others.",
    section: "Soft Skills"
  },
  {
    id: 1166,
    text: "You are leading a project that fails to meet its primary objective. What is the best way to handle this during the review?",
    options: [
      { key: "A", text: "Take personal and collective ownership, analyze the root causes of the failure, and present key lessons learned to prevent similar issues" },
      { key: "B", text: "Highlight the specific failures of individual team members to explain why you couldn't succeed" },
      { key: "C", text: "Explain that the target objective was unrealistic and shift blame to the leadership team" },
      { key: "D", text: "Minimize the failure and focus only on the minor successes" }
    ],
    correctAnswer: "A",
    explanation: "Accountability and ownership are hallmark leadership traits. Framing failures as learning opportunities helps build team resilience and continuous improvement.",
    section: "Soft Skills"
  },
  {
    id: 1167,
    text: "What is the primary objective of a daily scrum/standup meeting?",
    options: [
      { key: "A", text: "To justify your employment by listing every single line of code written" },
      { key: "B", text: "To synchronize activities, discuss progress, identify blockers, and coordinate collaboration for the next 24 hours" },
      { key: "C", text: "To debate deep technical architecture choices" },
      { key: "D", text: "To allow the manager to assign daily tasks to individual engineers" }
    ],
    correctAnswer: "B",
    explanation: "Standups are meant for quick synchronization and alignment. They help teams identify blocks early so they can resolve them collaboratively.",
    section: "Soft Skills"
  },
  {
    id: 1168,
    text: "A colleague is struggling with their workload and appears highly stressed. How can you best support them?",
    options: [
      { key: "A", text: "Tell them to work faster to avoid holding back the team's velocity" },
      { key: "B", text: "Check in with them privately, offer empathy, and see if you can take over a non-blocking task or help them clarify their priorities" },
      { key: "C", text: "Report their stress to HR as a potential performance issue" },
      { key: "D", text: "Ignore them to avoid getting involved in their personal stress" }
    ],
    correctAnswer: "B",
    explanation: "Empathy and supportive teamwork build safe environments and improve group dynamics, directly enhancing productivity and retention.",
    section: "Soft Skills"
  },
  {
    id: 1169,
    text: "Why is complete and up-to-date documentation (like a README or Wiki) critical for engineering teams?",
    options: [
      { key: "A", text: "It is required primarily for compliance audits" },
      { key: "B", text: "It reduces reliance on tribal knowledge, accelerates onboarding, and enables team members to solve problems independently" },
      { key: "C", text: "It prevents managers from asking developers about their daily tasks" },
      { key: "D", text: "It is the primary deliverable reviewed during promotional cycles" }
    ],
    correctAnswer: "B",
    explanation: "Documentation scales knowledge. It minimizes bottlenecks, prevents repetitive questions, and empowers self-service troubleshooting.",
    section: "Soft Skills"
  },
  {
    id: 1170,
    text: "What does the phrase 'Psychological Safety' mean in a high-performing engineering team?",
    options: [
      { key: "A", text: "Providing ergonomic chairs and physical workspace safety" },
      { key: "B", text: "A climate where team members feel safe to take risks, ask questions, voice concerns, and admit mistakes without fear of embarrassment or punishment" },
      { key: "C", text: "Preventing non-technical managers from attending technical planning sessions" },
      { key: "D", text: "Enforcing strict rules that prevent any disagreements during meetings" }
    ],
    correctAnswer: "B",
    explanation: "Psychological safety is the foundation of innovation and continuous growth. It allows teams to learn from mistakes and debate technical choices constructively.",
    section: "Soft Skills"
  },
  {
    id: 1171,
    text: "How should you respond if a project requirement shifts completely in the middle of a sprint?",
    options: [
      { key: "A", text: "Refuse to change your work and complete the original requirements" },
      { key: "B", text: "Assess the impact of the shift, collaborate with the team to reprioritize deliverables, and adapt your plan constructively" },
      { key: "C", text: "Slam your laptop shut and complain to colleagues about the lack of direction" },
      { key: "D", text: "Demand that the product manager be removed from the team" }
    ],
    correctAnswer: "B",
    explanation: "Adaptability is key in Agile environments. Shifting requirements require collaboration, impact analysis, and constructive adjustment.",
    section: "Soft Skills"
  },
  {
    id: 1172,
    text: "What is the most professional way to handle a mistake you made that caused a minor production incident?",
    options: [
      { key: "A", text: "Fix it silently and hope nobody notices or attributes it to you" },
      { key: "B", text: "Acknowledge the mistake immediately, help resolve the incident, and participate in a post-mortem to prevent it from happening again" },
      { key: "C", text: "Blame the failure on the lack of automated testing on the CI/CD pipeline" },
      { key: "D", text: "Minimize the impact and tell users they are overreacting" }
    ],
    correctAnswer: "B",
    explanation: "Taking accountability demonstrates professional integrity and helps teams resolve issues faster and build stronger, more resilient processes.",
    section: "Soft Skills"
  },
  {
    id: 1173,
    text: "You notice that a peer is consistently writing code that violates the team's established style guidelines. How should you address this?",
    options: [
      { key: "A", text: "Complain about their code to the engineering director during lunch" },
      { key: "B", text: "Have a friendly, private conversation, reference the team's documentation, and explain how consistent code styles simplify maintenance for everyone" },
      { key: "C", text: "Submit an anonymous PR comment calling their code messy" },
      { key: "D", text: "Ignore the style violations since the code runs successfully in staging" }
    ],
    correctAnswer: "B",
    explanation: "Addressing style guide issues through peer mentoring and clear, collaborative communication builds trust and alignment without creating defensiveness.",
    section: "Soft Skills"
  },
  {
    id: 1174,
    text: "What is the primary benefit of 'Mentorship' in an engineering organization?",
    options: [
      { key: "A", text: "It allows senior engineers to delegate their tedious tasks to junior engineers" },
      { key: "B", text: "It accelerates professional growth, shares institutional knowledge, and fosters a collaborative culture of continuous learning" },
      { key: "C", text: "It provides managers with a mechanism to monitor employee performance" },
      { key: "D", text: "It reduces the need for comprehensive documentation" }
    ],
    correctAnswer: "B",
    explanation: "Mentorship is a win-win: juniors gain skills and confidence, while seniors refine their leadership, communication, and coaching abilities.",
    section: "Soft Skills"
  },
  {
    id: 1175,
    text: "A team member consistently interrupts others during architecture design meetings. As a meeting facilitator, how should you handle this?",
    options: [
      { key: "A", text: "Interrupt them back and tell them to shut up" },
      { key: "B", text: "Politely intervene, saying: 'Thank you for that point, let's make sure we let [Name] finish their thought first so we don't miss anything, then we'll dive into your feedback'" },
      { key: "C", text: "Cancel the meeting and continue the discussion asynchronously over email" },
      { key: "D", text: "Allow them to continue to avoid creating any potential tension in the meeting" }
    ],
    correctAnswer: "B",
    explanation: "Facilitating meetings professionally involves maintaining structure and ensuring everyone's voice is heard while setting polite boundaries.",
    section: "Soft Skills"
  },
  {
    id: 1176,
    text: "What is the core focus of 'Assertive' communication?",
    options: [
      { key: "A", text: "Demanding that your ideas be implemented immediately" },
      { key: "B", text: "Expressing your views, needs, and boundaries clearly, honestly, and respectfully, while actively valuing the perspectives of others" },
      { key: "C", text: "Agreeing with whatever the majority decides to avoid conflict" },
      { key: "D", text: "Using sarcasm to point out errors in another person's proposal" }
    ],
    correctAnswer: "B",
    explanation: "Assertive communication balances self-advocacy and mutual respect, which is essential for healthy, professional debate.",
    section: "Soft Skills"
  },
  {
    id: 1177,
    text: "Your team is divided between two technical approaches for a new feature. How should the team reach a decision?",
    options: [
      { key: "A", text: "Implement both approaches and see which one finishes first" },
      { key: "B", text: "List the pros, cons, and risks of each approach objectively against project constraints, and choose the one that aligns best with project goals" },
      { key: "C", text: "Have a vote and let the majority decide without discussing the technical trade-offs" },
      { key: "D", text: "Let the senior-most engineer choose without any discussion" }
    ],
    correctAnswer: "B",
    explanation: "Healthy technical alignment relies on objective evaluation of trade-offs, risks, and alignment with business and engineering goals.",
    section: "Soft Skills"
  },
  {
    id: 1178,
    text: "Which of the following is a key characteristic of a collaborative, high-performing team?",
    options: [
      { key: "A", text: "Members work in complete silos and only communicate through status updates" },
      { key: "B", text: "Open communication, mutual trust, shared goals, and a willingness to help each other solve complex challenges" },
      { key: "C", text: "A highly competitive environment where individual performance is prioritized over team outcomes" },
      { key: "D", text: "Zero disagreements or debates during design reviews" }
    ],
    correctAnswer: "B",
    explanation: "High-performing teams thrive on trust, clear shared goals, psychological safety, and a culture of collaborative problem-solving.",
    section: "Soft Skills"
  },
  {
    id: 1179,
    text: "What does the term 'Scope Creep' mean in project management?",
    options: [
      { key: "A", text: "The physical expansion of server racks in a data center" },
      { key: "B", text: "The gradual, uncontrolled expansion of a project's scope due to continuous additions of features without adjustments to time, cost, or resources" },
      { key: "C", text: "The process of refactoring legacy code to improve performance" },
      { key: "D", text: "The movement of database queries to secondary servers" }
    ],
    correctAnswer: "B",
    explanation: "Scope creep occurs when new requirements are added without proper evaluation of their impact on resources, budget, and timelines.",
    section: "Soft Skills"
  },
  {
    id: 1180,
    text: "How can you best manage work-related stress during busy, high-pressure release periods?",
    options: [
      { key: "A", text: "Work 16-hour days and skip breaks to finish tasks faster" },
      { key: "B", text: "Communicate capacity limits, prioritize high-impact tasks, take regular short breaks, and seek support from your team when overloaded" },
      { key: "C", text: "Isolate yourself from colleagues and stop attending team standups" },
      { key: "D", text: "Complain publicly about management decisions to vent stress" }
    ],
    correctAnswer: "B",
    explanation: "Sustaining high performance during peak periods requires effective time management, open communication about capacity, and healthy work habits.",
    section: "Soft Skills"
  },
  {
    id: 1181,
    text: "What is the purpose of a retrospective meeting at the end of an agile sprint?",
    options: [
      { key: "A", text: "To assign tasks and set timelines for the upcoming release cycle" },
      { key: "B", text: "To reflect on the sprint, celebrate wins, identify process bottlenecks, and commit to specific improvements for the next sprint" },
      { key: "C", text: "To explain technical details of features to the product team" },
      { key: "D", text: "To re-evaluate employee salary packages" }
    ],
    correctAnswer: "B",
    explanation: "Retrospectives are dedicated to process optimization and continuous team growth, focusing on what went well, what didn't, and how to improve.",
    section: "Soft Skills"
  },
  {
    id: 1182,
    text: "You notice that a quiet team member rarely speaks during brainstorming sessions. How should you encourage their participation?",
    options: [
      { key: "A", text: "Call on them suddenly and demand that they present an idea immediately" },
      { key: "B", text: "Create a safe space, ask for their input on specific topics they are experts in, and offer alternative ways to contribute (e.g., written notes)" },
      { key: "C", text: "Assume they have no interest in the project and ignore them" },
      { key: "D", text: "Discuss their silence with their manager during their review" }
    ],
    correctAnswer: "B",
    explanation: "Inclusivity requires recognizing different communication styles. Offering multiple ways to contribute ensures quiet team members can share their insights.",
    section: "Soft Skills"
  },
  {
    id: 1183,
    text: "When writing documentation for an API you designed, who should you keep in mind as the primary audience?",
    options: [
      { key: "A", text: "Yourself, to remember how you structured the code" },
      { key: "B", text: "The external or internal developers who will consume the API, focusing on clear examples, setup guides, and error handling" },
      { key: "C", text: "The legal compliance team" },
      { key: "D", text: "The product manager, avoiding all technical details" }
    ],
    correctAnswer: "B",
    explanation: "Developer-centric documentation should prioritize clarity, quick setup, complete parameter definitions, and robust code examples to minimize onboarding friction.",
    section: "Soft Skills"
  },
  {
    id: 1184,
    text: "What is the most professional way to say 'No' to an urgent, last-minute task when your schedule is already completely full?",
    options: [
      { key: "A", text: "Say: 'No, I can't do that. Find someone else'" },
      { key: "B", text: "Say: 'I would love to help, but my current commitments are X and Y. If this task is higher priority, let's collaborate with our manager to adjust my existing deliverables'" },
      { key: "C", text: "Accept the task silently and fail to deliver it on time" },
      { key: "D", text: "Tell them their request is disorganized and reject it outright" }
    ],
    correctAnswer: "B",
    explanation: "Saying 'No' professionally involves communicating your current capacity and collaborating to align priorities with team goals.",
    section: "Soft Skills"
  },
  {
    id: 1185,
    text: "How should you deliver constructive feedback to a colleague about their presentation skills?",
    options: [
      { key: "A", text: "Wait until the next team-wide meeting and point out their mistakes publicly" },
      { key: "B", text: "Schedule a private 1-on-1 meeting, start with their strengths, highlight specific areas for improvement, and offer actionable suggestions" },
      { key: "C", text: "Send a quick, anonymous email listing things they did wrong" },
      { key: "D", text: "Tell them they are not suited for presenting and should avoid it" }
    ],
    correctAnswer: "B",
    explanation: "Delivering feedback in private, starting with positive aspects, and focusing on actionable improvements builds trust and encourages professional growth.",
    section: "Soft Skills"
  },
  {
    id: 1186,
    text: "Which of the following describes 'Compromise' as a conflict resolution style?",
    options: [
      { key: "A", text: "One party giving up completely to keep the other party happy" },
      { key: "B", text: "Both parties finding a middle ground where each gives up some demands to reach a mutually acceptable agreement" },
      { key: "C", text: "Ignoring the conflict and hoping it resolves itself over time" },
      { key: "D", text: "Taking the issue to a senior executive to force a decision" }
    ],
    correctAnswer: "B",
    explanation: "Compromise seeks a balanced middle ground, ensuring both sides contribute to and accept the resolution, which is essential for maintaining relationships.",
    section: "Soft Skills"
  },
  {
    id: 1187,
    text: "What is the primary goal of negotiation in a professional team setting?",
    options: [
      { key: "A", text: "To win the argument and prove the other party is wrong" },
      { key: "B", text: "To reach a win-win solution that aligns with team objectives and respects both parties' core interests" },
      { key: "C", text: "To avoid any discussion and agree with the easiest option" },
      { key: "D", text: "To delay decisions until the deadline forces a resolution" }
    ],
    correctAnswer: "B",
    explanation: "Professional negotiation focuses on shared goals, exploring mutual gains, and strengthening team alignment.",
    section: "Soft Skills"
  },
  {
    id: 1188,
    text: "Why is 'Empathy' critical for software developers?",
    options: [
      { key: "A", text: "It helps them predict how the compiler will optimize their code" },
      { key: "B", text: "It allows them to understand users' frustrations, collaborate effectively with colleagues, and design more intuitive interfaces" },
      { key: "C", text: "It reduces the time required to debug compile-time errors" },
      { key: "D", text: "It is a requirement for passing performance reviews" }
    ],
    correctAnswer: "B",
    explanation: "Empathy helps developers understand the pain points of users and the perspectives of colleagues, leading to better software designs and teamwork.",
    section: "Soft Skills"
  },
  {
    id: 1189,
    text: "A project manager is concerned about progress. How can you reassure them while maintaining a realistic schedule?",
    options: [
      { key: "A", text: "Promise to complete everything tomorrow, even if you know it's impossible" },
      { key: "B", text: "Share regular, transparent updates, highlight completed milestones, discuss outstanding risks, and provide a clear roadmap of remaining work" },
      { key: "C", text: "Tell them to trust you and stop asking for status updates" },
      { key: "D", text: "Blame the delays on external dependencies and refuse to provide an updated timeline" }
    ],
    correctAnswer: "B",
    explanation: "Transparent, evidence-based status updates build trust and allow project managers to coordinate timelines and manage stakeholder expectations effectively.",
    section: "Soft Skills"
  },
  {
    id: 1190,
    text: "What does the term 'Tribal Knowledge' refer to in an organization?",
    options: [
      { key: "A", text: "Historical coding techniques used in early computer science" },
      { key: "B", text: "Unwritten, un-documented information known only by a few key individuals within a team" },
      { key: "C", text: "Strict coding guidelines enforced by automated linters" },
      { key: "D", text: "Industry standards for database administration" }
    ],
    correctAnswer: "B",
    explanation: "Tribal knowledge creates bottlenecks. Documenting this knowledge is essential to enable team members to solve problems independently and scale the organization.",
    section: "Soft Skills"
  },
  {
    id: 1191,
    text: "You notice a critical bug in a feature owned by another developer who is currently on vacation. How should you proceed?",
    options: [
      { key: "A", text: "Wait until they return from vacation to let them fix their own bug" },
      { key: "B", text: "Acknowledge the priority, document the issue, coordinate with your team lead to patch it safely, and leave a friendly, detailed code comment explaining the fix" },
      { key: "C", text: "Rewrite their entire feature completely from scratch" },
      { key: "D", text: "Complain about their code to the team during the daily standup" }
    ],
    correctAnswer: "B",
    explanation: "Collaborative problem-solving means addressing critical issues collectively while maintaining respect and leaving clear notes to help the owner when they return.",
    section: "Soft Skills"
  },
  {
    id: 1192,
    text: "What is the primary benefit of 'Pair Programming'?",
    options: [
      { key: "A", text: "It allows one developer to rest while the other writes all the code" },
      { key: "B", text: "It improves code quality, reduces bugs, facilitates real-time knowledge sharing, and builds collaborative problem-solving skills" },
      { key: "C", text: "It doubles the speed at which physical lines of code are written" },
      { key: "D", text: "It reduces the need for code reviews or automated testing" }
    ],
    correctAnswer: "B",
    explanation: "Pair programming pairs a 'driver' and a 'navigator' to write and review code concurrently, enhancing code quality and sharing technical expertise.",
    section: "Soft Skills"
  },
  {
    id: 1193,
    text: "How should you handle a situation where you realize a technical approach you advocated for is not working?",
    options: [
      { key: "A", text: "Defend your approach and continue trying to make it work to avoid looking incompetent" },
      { key: "B", text: "Acknowledge the issues objectively, present the evidence of why it is failing, and collaborate with the team to pivot to a better solution" },
      { key: "C", text: "Blame the failure on the lack of cooperation from your team members" },
      { key: "D", text: "Withdraw from the project and let others solve the problem" }
    ],
    correctAnswer: "B",
    explanation: "Admitting when an approach is not working demonstrates professional maturity and saves time and resources, focusing on project outcomes rather than personal ego.",
    section: "Soft Skills"
  },
  {
    id: 1194,
    text: "A junior developer asks you a question when you are focused on solving a high-priority bug. What is the most constructive response?",
    options: [
      { key: "A", text: "Ignore them completely and continue working" },
      { key: "B", text: "Say: 'I am currently working on an urgent fix. Let's schedule 15 minutes at [Time] or ping me on Chat, and I would love to help you walk through it'" },
      { key: "C", text: "Tell them their question is basic and they should find the answer themselves" },
      { key: "D", text: "Stop your work immediately and solve their problem for them" }
    ],
    correctAnswer: "B",
    explanation: "Setting polite boundaries while offering dedicated, structured time to support juniors ensures you can focus on urgent tasks while remaining a supportive mentor.",
    section: "Soft Skills"
  },
  {
    id: 1195,
    text: "What is the primary goal of professional networking within an organization?",
    options: [
      { key: "A", text: "To collect contacts for future job searches" },
      { key: "B", text: "To build strong cross-functional relationships, share expertise, understand other teams' challenges, and facilitate collaboration" },
      { key: "C", text: "To find peers who will help you bypass standard approval processes" },
      { key: "D", text: "To monitor other teams' progress and report issues to management" }
    ],
    correctAnswer: "B",
    explanation: "Internal networking breaks down organizational silos, aligns cross-functional goals, and builds a supportive, collaborative company culture.",
    section: "Soft Skills"
  },
  {
    id: 1196,
    text: "Why is 'Continuous Learning' critical for software developers?",
    options: [
      { key: "A", text: "It is required to maintain professional certifications" },
      { key: "B", text: "Because technology evolves rapidly, and staying updated with modern frameworks, tools, and practices ensures long-term career relevance and better solutions" },
      { key: "C", text: "It prevents developers from making any mistakes in their code" },
      { key: "D", text: "It is the primary metric used to calculate salary adjustments" }
    ],
    correctAnswer: "B",
    explanation: "A commitment to continuous learning is essential to navigate the fast-changing tech landscape, enabling developers to build more efficient, modern systems.",
    section: "Soft Skills"
  },
  {
    id: 1197,
    text: "You disagree with the product direction decided by leadership. What is the most professional mindset to adopt?",
    options: [
      { key: "A", text: "Voice your objections destructively to colleagues to undermine the decision" },
      { key: "B", text: "Disagree and commit: voice your concerns constructively during planning, but once a decision is made, execute it with full commitment and support" },
      { key: "C", text: "Do a low-effort job on features you disagree with to prove they are bad ideas" },
      { key: "D", text: "Refuse to work on the project and demand a transfer" }
    ],
    correctAnswer: "B",
    explanation: "'Disagree and commit' is a core professional standard: share technical concerns constructively during decision-making, but fully support the team once a direction is finalized.",
    section: "Soft Skills"
  },
  {
    id: 1198,
    text: "What does it mean to be a 'T-shaped' professional?",
    options: [
      { key: "A", text: "An engineer who only writes code for template structures" },
      { key: "B", text: "Having deep expertise in one specific area (vertical bar of the T) combined with a broad ability to collaborate across other disciplines (horizontal bar)" },
      { key: "C", text: "A developer who works exactly 8 hours a day without any flexibility" },
      { key: "D", text: "An administrator who manages both storage and network racks" }
    ],
    correctAnswer: "B",
    explanation: "T-shaped skills combine deep domain knowledge with broad cross-functional understanding, enabling developers to solve complex specialized tasks and collaborate across teams.",
    section: "Soft Skills"
  },
  {
    id: 1199,
    text: "Which of the following describes the 'Collaborating' style of conflict resolution?",
    options: [
      { key: "A", text: "One party dominating the discussion to force their solution" },
      { key: "B", text: "Both parties working together to explore differences, share insights, and design an innovative, win-win solution that fully satisfies both sides" },
      { key: "C", text: "Avoiding the discussion completely to prevent any potential tension" },
      { key: "D", text: "Relying on a coin toss to make decisions" }
    ],
    correctAnswer: "B",
    explanation: "Collaboration treats conflicts as opportunities for joint problem-solving, digging into root needs to invent superior, shared solutions.",
    section: "Soft Skills"
  },
  {
    id: 1200,
    text: "How should you approach writing a constructive peer evaluation during performance reviews?",
    options: [
      { key: "A", text: "Focus only on personal attributes and list things you don't like about them" },
      { key: "B", text: "Provide objective, balanced feedback, highlight key technical contributions, note specific growth areas, and offer actionable, respectful suggestions" },
      { key: "C", text: "Give them a perfect score to avoid any difficult conversations" },
      { key: "D", text: "Write brief, generic comments to complete the review as fast as possible" }
    ],
    correctAnswer: "B",
    explanation: "Constructive peer reviews support team growth. Keeping feedback balanced, objective, and action-focused helps colleagues develop their careers.",
    section: "Soft Skills"
  }
];
