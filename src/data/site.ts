export const site = {
  name: 'George Owulama Andzutsi',
  shortName: 'George Andzutsi',
  title: 'AI/ML Engineer & Software Engineer',
  currentRole: 'ML / Evaluation & MLOps Engineer (ML/EvalOps) | NASITDEA',
  positioning: 'Applied AI/ML · LLM Engineering · ML Evaluation & MLOps · Python · FastAPI · Software Engineering',
  description: 'George Owulama Andzutsi is an applied AI/ML engineer focused on LLM-powered applications, RAG, machine learning evaluation, MLOps workflows, Python backend engineering and reliable AI system integration.',
  professionalSummary: 'Applied AI/ML engineer who designs, integrates, evaluates and deploys LLM-powered software, from RAG and conversational AI to evaluation workflows and API services. Currently ML/EvalOps Engineer at NASITDEA, assessing AI-system response quality through structured test cases, and Team Lead of the AI/ML Department at DalaCare AI, directing chatbot engineering, symptom and triage intelligence, and evaluation/MLOps workstreams for a safety-sensitive healthcare assistant. Works across the Hugging Face ecosystem and integrates OpenAI, Anthropic, Gemini, Groq and OpenRouter models into Python/FastAPI backends with Docker-based deployment, Langfuse observability and secure REST API practices. Turns real-world problems into reliable AI products and works across engineering and product stakeholders throughout the AI solution lifecycle.',
  experienceYears: 'Applied AI/ML Engineering · LLM Integration · ML Evaluation & MLOps',
  email: 'andzutsiowulama@gmail.com',
  phone: '+2348100362060',
  location: 'Nigeria',
  remote: 'Remote · Available for global collaboration',
  availability: 'Open to Remote Opportunities',
  github: 'https://github.com/evanandzutsi-eng',
  linkedin: 'https://www.linkedin.com/in/george-andzutsi-833948268',
  x: 'https://x.com/Andzutsi_',
  whatsapp: 'https://wa.me/2348100362060',
  facebook: 'https://www.facebook.com/profile.php?id=61588327748153&mibextid=ZbWKwL',
  telegram: 'https://t.me/George_buddy',
  youtube: 'https://youtube.com/@evanandzutsi?si=k9tV1DxsO9iBSWLc',
  teams: 'https://teams.microsoft.com/l/chat/0/0?users=andzutsiowulama@gmail.com',
  booking: 'https://tally.so/r/VLqJoE',
  contactEndpoint: '[CONTACT_ENDPOINT]',
  profileImage: { avif: '/assets/images/profile/george-profile.avif', webp: '/assets/images/profile/george-profile.webp', fallback: '/assets/images/profile/george-profile.webp' },
  heroImage: { avif: '/assets/images/hero/george-hero.avif', webp: '/assets/images/hero/george-hero.webp', fallback: '/assets/images/hero/george-hero.webp' },
  cv: '/assets/George_Andzutsi_AI_ML_Engineer_Resume.pdf',
  certification: { name: 'Scientific Computing with Python', issuer: 'freeCodeCamp', date: '', credentialUrl: 'https://freecodecamp.org/certification/fcc-74269a2b-0e4c-4508-b7e3-299ebc76e4cf-python-v9' },
  certifications: [
    { name: 'Scientific Computing with Python', issuer: 'freeCodeCamp', date: '', credentialUrl: 'https://freecodecamp.org/certification/fcc-74269a2b-0e4c-4508-b7e3-299ebc76e4cf-python-v9' },
    { name: 'Mastercard Foundation PREP2SOAR', issuer: 'Mastercard Foundation', date: '2026', credentialUrl: '' },
  ],
  education: 'B.Sc. Mass Communication — Nasarawa State University, Keffi, Nigeria (2017–2023)',
}

export function whatsappUrl(){ return site.whatsapp }
export function isPlaceholder(value:string){ return !value || value.startsWith('[') || value === '#' }
export const socialLinks = [
  {key:'github',label:'GitHub',url:site.github},
  {key:'linkedin',label:'LinkedIn',url:site.linkedin},
  {key:'x',label:'X',url:site.x},
  {key:'whatsapp',label:'WhatsApp',url:site.whatsapp},
  {key:'facebook',label:'Facebook',url:site.facebook},
  {key:'telegram',label:'Telegram',url:site.telegram},
  {key:'youtube',label:'YouTube',url:site.youtube},
  {key:'teams',label:'Microsoft Teams',url:site.teams},
  {key:'email',label:'Email',url:`mailto:${site.email}`},
  {key:'phone',label:'Phone',url:`tel:${site.phone.replace(/[^+\\d]/g,'')}`},
]

export const navLinks = [
  ['Home','/'], ['About','/about'], ['Skills','/skills'], ['Projects','/projects'],
  ['Experience','/experience'], ['Services','/services'], ['Case Studies','/case-studies'],
  ['Blog','/blog'], ['Media','/media'], ['Contact','/contact'], ['AI Assistant','/ai-assistant']
] as const

export const skills = [
  { category:'Programming', icon:'Code2', description:'Core languages used across frontend, backend and application development.', items:['Python','TypeScript','JavaScript (ES6+)','HTML5','CSS3'] },
  { category:'Frontend Development', icon:'PanelsTopLeft', description:'Responsive interfaces and reusable components built around practical product requirements.', items:['React.js','Responsive Interfaces','Reusable Components','Figma','UI/UX'] },
  { category:'Backend & APIs', icon:'ServerCog', description:'Backend services and API-driven application architecture.', items:['Node.js','Express','Python','FastAPI','REST APIs','REST API Development','REST API Consumption'] },
  { category:'APIs & Integrations', icon:'Workflow', description:'Connecting applications with third-party services and authentication systems.', items:['Third Party API Integration','Authentication','JWT','OAuth','Webhooks','Paystack','API Testing','Postman'] },
  { category:'Databases & Data', icon:'Database', description:'Practical relational, non-relational, hosted and in-memory data work.', items:['MySQL','MongoDB','Supabase','Neon','Redis','Upstash','Basic SQL'] },
  { category:'Testing & Debugging', icon:'ShieldCheck', description:'Iterative testing and troubleshooting across application layers.', items:['Postman','Jest','Manual Testing','API Testing','Debugging','Troubleshooting','Iterative Testing'] },
  { category:'AI & Automation', icon:'Sparkles', description:'Practical AI application work, AI-assisted development and workflow automation.', items:['AI API Integration','AI Applications','AI-assisted Development','Prompt Engineering','Prompt Refinement','AI Response Evaluation','AI Behavioral Testing','Context Handling','Instruction Adherence Testing','Zapier','Make.com','API-Based Workflows','AI Workflow Experimentation','Agentic AI Concepts'] },
  { category:'Development & Delivery', icon:'CloudCog', description:'Tools used for source control, local development, deployment and CLI workflows.', items:['Git','GitHub','Docker','Windows Terminal','PowerShell','CLI Workflows','Vercel','Railway','Render','Netlify'] },
]

export const services = [
  {title:'Full-Stack Web Development', icon:'PanelsTopLeft', description:'Build responsive web applications across React.js frontends, backend services and REST APIs.', deliverables:['React.js interfaces','Node.js / Express backends','Python / FastAPI services','API-connected application flows']},
  {title:'API & Third-Party Integration', icon:'ServerCog', description:'Connect applications to external services, payment platforms, authentication systems and APIs.', deliverables:['REST API integration','Third-party services','Paystack workflows','JWT/OAuth','Webhooks and JSON']},
  {title:'AI Application Integration', icon:'Sparkles', description:'Integrate AI APIs into useful software workflows and application backends without presenting experimentation as production AI engineering.', deliverables:['AI API integration','Prompt refinement','AI response evaluation','Context and instruction testing']},
  {title:'Workflow Automation', icon:'Workflow', description:'Connect business tools, APIs and repetitive processes through practical automation workflows.', deliverables:['Zapier workflows','Make.com workflows','API/webhook connections','Gmail and notification flows']},
  {title:'Testing, Debugging & Troubleshooting', icon:'ShieldCheck', description:'Investigate frontend, backend, API and deployment issues through structured testing and iteration.', deliverables:['Postman testing','Jest tests','Manual testing','Integration troubleshooting']},
  {title:'UI Implementation & Technical Support', icon:'Lightbulb', description:'Translate interface concepts into working responsive products and support technical implementation.', deliverables:['Figma-to-React implementation','Responsive interfaces','Technical investigation','Documentation and communication']},
]

export const projects = [
  {
    slug:'dalacare-ai', title:'DalaCare AI — RAG Medical Assistant', category:'AI', tags:['AI','Backend','Healthcare','APIs'],
    description:'A healthcare-support chatbot API for the Nigerian context, combining retrieval-augmented generation, intent-aware response modes, trusted medical web-search fallback, voice input and observable streaming responses.',
    problem:'Provide accessible health information grounded in medical references, handle different health intents and clearly communicate that the assistant is not a substitute for professional care.',
    solution:'Contributed as team lead, coordinating AI/ML priorities around chatbot response quality, architecture, triage safety and evaluation. The documented system uses FAISS retrieval, Groq Llama 3.3 70B, Exa search fallback, Whisper speech-to-text and Langfuse tracing.',
    architecture:'User Request → Intent Detection / Mode Resolution → FAISS Retrieval → Trusted Exa Search Fallback → Groq LLM → JSON / SSE Response + Langfuse Trace',
    decisions:['Separate intent detection and response-mode resolution from generation.','Use retrieval grounding and trusted medical-domain search fallback.','Treat emergency and triage behavior as safety-sensitive and subject to evaluation.','Use tracing and latency visibility for iterative quality improvement.'],
    security:'The API documents per-IP rate limiting and states that it does not diagnose, treat or prescribe. Health outputs must remain informational and direct users to professional care when appropriate.',
    deployment:'Docker-based deployment documented on Hugging Face Spaces, with live API documentation available.',
    outcome:'A team-built medical assistant API demonstrating RAG, intent-aware LLM orchestration, trusted-source fallback, voice processing, streaming and observability. George’s role is team leadership and AI/ML coordination, not sole authorship.',
    stack:['Python','FastAPI','FAISS','Sentence Transformers','Groq','Llama 3.3 70B','Exa Search','Whisper','SSE','Langfuse','Docker','Hugging Face Spaces'],
    status:'Team Project · Deployed API', evidence:'Team project with documented API and live documentation', role:'Team Lead · AI/ML coordination · Technical direction and evaluation oversight',
    proof:['RAG pipeline over medical reference content','Seven intent-based response modes','Trusted medical-domain web-search fallback','Groq Llama 3.3 70B integration','Whisper voice input','Server-sent event streaming','Langfuse observability','Per-IP rate limiting','Live API documentation'],
    links:{github:'https://github.com/DalaCare-AI-Architecture/DalaCare-AI-2',live:'https://dalainnovation-dalacare-chat-ai.hf.space/docs'},
  },
  {
    slug:'regismeet', title:'RegisMeet — AI Meeting Intelligence', category:'AI', tags:['AI','Full Stack','Backend','SaaS'],
    description:'A multi-tenant meeting-intelligence SaaS reference implementation that transcribes recordings, extracts structured summaries and action items, and makes meeting history searchable through semantic retrieval.',
    problem:'Meeting recordings and transcripts make decisions, action items and deadlines difficult to retrieve across an organization.',
    solution:'Designed a serverless-first pipeline using Whisper transcription, Gemini 2.5 Flash with schema-constrained structured extraction, OpenAI embeddings and PostgreSQL pgvector semantic search. Upstash QStash dispatches durable processing jobs and Supabase Realtime surfaces status updates.',
    architecture:'React UI → FastAPI Gateway → Supabase Storage → QStash → Whisper → Gemini → OpenAI Embeddings → Supabase Postgres + pgvector + RLS',
    decisions:['Separate the interactive gateway from longer-running processing jobs.','Use Pydantic-validated structured output for summaries, topics, action items and deadlines.','Use pgvector semantic retrieval across an organization’s meeting history.','Enforce tenant isolation at the database layer and use durable job delivery.'],
    security:'Documented controls include organization-scoped Row-Level Security, caller-scoped database access, strict Pydantic validation, server-side provider credentials, rate limiting, signed webhook handling, sanitized errors and Cloudflare Turnstile.',
    deployment:'The repository documents a Vercel + Supabase + Upstash architecture and presents the project as a portfolio/reference implementation, not a customer production rollout.',
    outcome:'A technically detailed AI SaaS implementation demonstrating speech-to-text, structured LLM extraction, vector search, serverless job orchestration, tenant isolation and usage metering.',
    stack:['Python','FastAPI','React','Supabase','PostgreSQL','pgvector','OpenAI Whisper','Gemini 2.5 Flash','OpenAI Embeddings','Upstash QStash','Upstash Redis','Paystack','Resend','Cloudflare Turnstile','Vercel'],
    status:'Portfolio / Reference Implementation', evidence:'Public repository with architecture and security documentation', role:'AI application engineering · Backend architecture · LLM and API integration',
    proof:['Whisper audio transcription','Gemini structured meeting summaries','Action-item and deadline extraction','Semantic search with pgvector','Multi-tenant Row-Level Security','Durable QStash job orchestration','Usage metering and Paystack billing','Realtime processing updates','Documented security controls'],
    links:{github:'https://github.com/evanandzutsi-eng/regismeet',live:''},
  },
  {
    slug:'codeflow-ai', title:'CodeFlow — AI Coding Assistant', category:'AI', tags:['AI','Full Stack','Web Application','APIs'],
    description:'An AI-powered coding assistant platform combining a React interface, backend APIs, multiple model providers, image-generation integrations, application data and payment workflows.',
    problem:'Build a practical coding-assistant experience that can connect conversational AI, application data and billing while reducing dependence on a single model provider.',
    solution:'Built a React frontend and Node.js/Express backend, integrated Google Gemini as the primary AI provider and Groq Llama 3 as a fallback, added image-generation integrations, MongoDB and Paystack billing, and tested provider-failure behavior.',
    architecture:'React UI → Node.js / Express API → AI Provider Layer → Gemini / Groq + Image Providers → MongoDB / Paystack',
    decisions:['Use multiple AI providers to reduce dependence on one provider.','Keep provider credentials and payment secrets on the server side.','Test streaming behavior and provider failures iteratively.'],
    security:'Provider credentials and payment secrets must remain server-side. Requests and provider responses require validation and controlled integration boundaries.',
    deployment:'A Vercel demo URL is configured in the existing portfolio; verify its current availability before describing it as a live service.',
    outcome:'A full-stack AI application demonstrating LLM provider integration, fallback behavior, image-generation APIs, database integration and billing workflows.',
    stack:['JavaScript','React','Node.js','Express','MongoDB','REST APIs','Google Gemini','Groq Llama 3','Hugging Face','Pollinations','Paystack','Railway','Vercel'],
    status:'Project · Demo URL Configured', evidence:'Project repository and configured demo URL', role:'Full-stack implementation · AI integration · API integration · Testing',
    proof:['React and Express application layers','Gemini primary + Groq fallback','Image-generation API integrations','MongoDB application data','Paystack billing integration','Provider-failure testing','Railway and Vercel workflow'],
    links:{github:'https://github.com/evanandzutsi-eng/codeflow-app',live:'https://codeflow-app-mu.vercel.app/'},
  },
  {
    slug:'georgepay', title:'GeorgePay — Cross-Border Payments for African SMEs', category:'Full Stack', tags:['Full Stack','Fintech','APIs','TypeScript'],
    description:'A cross-border payments product direction for African SMEs, organized as a TypeScript monorepo with a React/Vite web app, Express API and shared validation/types package.',
    problem:'Explore a payments experience for African small and medium-sized businesses with clear boundaries between the interface, API, shared data contracts and payment integrations.',
    solution:'Structured the codebase into a React + Vite + TypeScript web application, an Express + TypeScript API and a shared package for TypeScript types and Zod schemas. Its security documentation outlines secret handling, input validation, rate limiting, structured logging and pre-production controls.',
    architecture:'React + Vite Web App → Express + TypeScript API → Shared Zod Schemas / Types → Payment and identity provider integrations',
    decisions:['Keep shared types and validation schemas in a dedicated package.','Validate environment configuration at API startup and keep server secrets out of the browser bundle.','Treat money movement, idempotency, compliance and operational controls as release gates.'],
    security:'The security guide documents Zod validation, rate limiting, PII-redacting structured logs, strict CORS, security headers and server-side secret management. It lists licensing, data-protection and external penetration testing as pre-production requirements.',
    deployment:'The README documents Vercel for the web application and Render for the API. Security documentation describes a pre-production phase; this is not represented as a licensed live payments service.',
    outcome:'A fintech product codebase demonstrating TypeScript monorepo organization, API design, shared validation and security-first thinking for payments software.',
    stack:['TypeScript','React','Vite','Express','Node.js','Zod','REST APIs','Paystack','Flutterwave','Mono','Render','Vercel'],
    status:'Active Development · Pre-production', evidence:'Public repository and security documentation', role:'Software engineering · Frontend/backend integration · API and security implementation',
    proof:['Cross-border payments product direction','React + Vite + TypeScript web app','Express + TypeScript API','Shared Zod validation and types','Environment validation and secret handling','PII-redacting structured logs','Rate limiting and strict CORS','Documented pre-production checklist'],
    links:{github:'https://github.com/evanandzutsi-eng/georgepay',live:''},
  },
  {
    slug:'2way-private-social-lounge', title:'2WaY — Private Social Lounge', category:'Full Stack', tags:['Full Stack','Backend','Real-time','Security'],
    description:'An invite-only social lounge for a private community, with real-time rooms, one-to-one messaging, presence, ranks, achievements and an installable PWA.',
    problem:'Build a private community space with controlled membership and social features while keeping conversations, account access and administrative actions properly scoped.',
    solution:'Built a lightweight Node.js and PostgreSQL application using Express and Socket.IO. Documented features include single-use invitations, Argon2id password hashing, secure sessions, real-time rooms and DMs, presence controls, server-side XP, admin tools and encrypted backups.',
    architecture:'PWA Frontend → Express REST API + Socket.IO → Security / Membership Services → PostgreSQL → Backup and Operations Layer',
    decisions:['Enforce the 50-member cap and invitation rules in database transactions.','Store only hashes of high-entropy session tokens and use secure HttpOnly cookies.','Enforce private-room membership and DM participant checks on REST and socket paths.','Limit service-worker caching to the app shell and avatars, never private API data.'],
    security:'The project documents Argon2id, hashed session tokens, cookie security, lockouts, CSRF/origin checks, rate limiting, access controls, audit logging, encrypted backups and privacy-aware retention.',
    deployment:'Docker Compose with Caddy for HTTPS and WebSocket proxying, PostgreSQL on an internal network, scheduled encrypted backups and a restore procedure.',
    outcome:'A full-stack real-time application demonstrating secure authentication, private messaging, authorization, PWA behavior, database-backed product rules and operational planning.',
    stack:['Node.js 22','Express 5','Socket.IO','PostgreSQL 16','HTML','CSS','JavaScript','Docker Compose','Caddy','Argon2id','PWA'],
    status:'Self-Hosted Application', evidence:'Public repository with operations, privacy and test documentation', role:'Full-stack product engineering · Backend · Real-time features · Security',
    proof:['Invite-only membership with 50-seat cap','Argon2id password hashing','Secure HttpOnly session cookies','Real-time rooms and one-to-one DMs','Presence and read-receipt controls','Server-side ranks and XP','Admin tools and audit log','PWA with safe app-shell caching','Encrypted backups and restore runbook','Unit and PostgreSQL integration tests'],
    links:{github:'https://github.com/evanandzutsi-eng/2way',live:''},
  },
  {
    slug:'getby-secure-trading-platform', title:'Getby — Security-Hardened Trading Platform', category:'Full Stack', tags:['Full Stack','Security','Fintech','Web Application'],
    description:'A crypto-trading platform prototype with a Tailwind frontend and Netlify Functions backend, including account flows, transactions, plans, referrals and profile management.',
    problem:'Develop a multi-page financial application with account and transaction workflows while addressing common web-application security risks.',
    solution:'Organized the application around Netlify serverless functions and shared utilities for configuration, authentication, validation, rate limiting and responses. The security documentation maps implemented controls to OWASP Top 10 risks.',
    architecture:'Browser UI → Netlify Functions → Shared Auth / Validation / Rate-Limit Utilities → Application Data Store',
    decisions:['Centralize authentication, validation and response behavior in shared server utilities.','Use tiered rate limits for authentication, general API access and sensitive withdrawal routes.','Reject unexpected fields and enforce input length and format rules.','Keep secrets in environment variables and out of frontend JavaScript.'],
    security:'The repository documents bcrypt password hashing, JWTs in HttpOnly/Secure/SameSite cookies, schema-based validation, tiered rate limiting, security headers and 16 passing functional tests. Its README describes an in-memory demo store, so this is not presented as a production exchange.',
    deployment:'The repository includes a Netlify deployment guide and environment checklist. No verified public deployment URL is configured here.',
    outcome:'A security-focused application prototype demonstrating serverless API organization, authentication, validation, rate limiting and OWASP-oriented testing.',
    stack:['JavaScript','Tailwind CSS','Netlify Functions','Node.js','JWT','bcrypt','Schema Validation','Rate Limiting','Netlify'],
    status:'Prototype · Deployment Guide', evidence:'Public repository with security guide and functional test results', role:'Full-stack implementation · Authentication · API security · Testing',
    proof:['Netlify Functions API structure','Signup, login and session endpoints','Plans, transactions and referral workflows','Tiered rate limiting','Schema-based input validation','HttpOnly / Secure / SameSite cookies','OWASP Top 10 security mapping','16 documented functional tests'],
    links:{github:'https://github.com/evanandzutsi-eng/getby',live:''},
  },
  {
    slug:'verdant-foundation', title:'Verdant Foundation — Nonprofit Website', category:'Full Stack', tags:['Full Stack','Web Application','Frontend'],
    description:'A modern responsive nonprofit foundation website built with React and Vite, with program, about, contact and donation-oriented sections.',
    problem:'Create a clear, accessible online presence for a foundation, presenting its mission and programs while making contact and contribution paths easy to find.',
    solution:'Built a responsive React/Vite website with reusable components, Lucide icons, a typography system and Netlify deployment configuration.',
    architecture:'React UI → Reusable Page Components → Responsive CSS → Netlify Hosting',
    decisions:['Use reusable components for navigation, hero, about, programs and contact sections.','Keep visual styling consistent through a centralized CSS system.','Prepare the site for straightforward GitHub-to-Netlify deployment.'],
    security:'Any live donation processing should use a trusted payment provider and secure server-side integration. The repository documents a deployment-ready frontend, not a verified payment backend.',
    deployment:'The repository includes Netlify build and deployment instructions. A public live URL has not been verified.',
    outcome:'A responsive nonprofit website demonstrating frontend implementation, component organization, visual design and deployment configuration.',
    stack:['React','Vite','JavaScript','CSS','Lucide React','Netlify'],
    status:'Completed Website Project', evidence:'Public repository with setup and deployment documentation', role:'Frontend development · Responsive UI · Component implementation',
    proof:['Responsive React/Vite interface','Reusable page components','Programs and foundation information sections','Contact and donation-oriented UI','Netlify deployment configuration'],
    links:{github:'https://github.com/evanandzutsi-eng/foundation-website',live:''},
  },
]

export const experience = [
  {period:'2026 — Present', role:'ML / Evaluation & MLOps Engineer (ML/EvalOps) | Nasarawa State Information and Digital Economy Agency (NASITDEA)', bullets:[
    'Support machine learning and AI engineering workflows, contributing to model evaluation and assessment of AI-system responses for quality, consistency and reliability.',
    'Work with evaluation datasets, test cases and structured assessment processes; maintain evaluation and experiment documentation.',
    'Support experiment tracking and model-versioning practices so evaluation results remain comparable and reproducible.',
    'Collaborate with software developers and technical stakeholders on integrating, testing and improving AI-powered systems.',
    'Apply software engineering practices including version control, testing and documentation to ML and evaluation workflows.'
  ]},
  {period:'Team Leadership', role:'Team Lead, AI/ML Department | DalaCare AI', bullets:[
    'Lead and coordinate the AI/ML department across chatbot engineering, symptom and triage intelligence, and evaluation/MLOps workstreams.',
    'Provide technical direction on LLM integration, conversational response quality and AI system architecture; review technical contributions and guide cross-functional integration.',
    'Guide task allocation, sprint planning and delivery priorities; coordinate evaluation strategy and structured test-case development.',
    'Keep AI behavior aligned with product requirements and healthcare safety expectations.'
  ]},
  {period:'2024 — Present', role:'Independent Full-Stack Software Engineer | AI Integration & Automation', bullets:[
    'Build intelligent applications with Python, FastAPI, JavaScript, TypeScript and React, integrating LLM providers including OpenAI, Anthropic, Google Gemini, Groq and OpenRouter.',
    'Design backend services and REST APIs; develop AI-powered assistants, conversational systems and automated workflows from product requirements.',
    'Implement authentication, authorization, request validation and rate limiting; work with PostgreSQL, MongoDB and Supabase.',
    'Deploy and maintain applications with Docker, Railway, Render, Vercel and Netlify; debug, test and iterate to improve reliability.'
  ]}
]

export const education = [
  {period:'2017 — 2023', title:'BSc, Mass Communication', institution:'Nasarawa State University, Keffi (NSUK)'},
  {period:'2023 — 2024', title:'National Youth Service Corps (NYSC)', institution:'Jos South, Jos, Plateau State, Nigeria'},
  {period:'2012 — 2017', title:'Secondary School Education', institution:'St. John Bosco Secondary School, Doma, Nasarawa State, Nigeria'}
]

export const careerInterests = [
  'AI Engineering and practical LLM applications',
  'Full-stack software engineering',
  'AI-assisted development and AI evaluation',
  'API engineering and third-party integrations',
  'Workflow automation',
  'Developer tools and AI-powered applications',
  'Digital transformation and secure, maintainable user-focused systems',
]
