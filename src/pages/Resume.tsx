import {Download,ArrowUpRight,ExternalLink} from 'lucide-react'
import {Link} from 'react-router-dom'
import {site} from '../data/site'
import {PageHero} from '../components/Section'

const experienceItems = [
  {period:'2026 — Present',role:'ML / Evaluation & MLOps Engineer (ML/EvalOps)',organization:'Nasarawa State Information and Digital Economy Agency (NASITDEA)',bullets:[
    'Promoted from Stack Assistant into the ML/EvalOps engineering role in 2026.',
    'Support machine learning and AI engineering workflows, contributing to model evaluation and assessment of AI-system responses for quality, consistency and reliability.',
    'Work with evaluation datasets, test cases and structured assessment processes; maintain evaluation and experiment documentation.',
    'Support experiment tracking and model-versioning practices so evaluation results remain comparable and reproducible.',
    'Collaborate with software developers and technical stakeholders on integrating, testing and improving AI-powered systems.',
    'Apply software engineering practices (version control, testing, documentation) to ML and evaluation workflows.'
  ]},
  {period:'',role:'Team Lead, AI/ML Department',organization:'DalaCare AI',bullets:[
    'Lead and coordinate the AI/ML department across three workstreams: chatbot engineering, symptom and triage intelligence, and evaluation/MLOps.',
    'Provide technical direction on LLM integration, conversational response quality and AI system architecture; review technical contributions and guide cross-functional integration.',
    'Guide task allocation, sprint planning and delivery priorities; coordinate evaluation strategy and structured test-case development.',
    'Keep AI behavior aligned with product requirements and healthcare safety expectations.'
  ]},
  {period:'2024 — Present',role:'Independent Full-Stack Software Engineer | AI Integration & Automation',organization:'',bullets:[
    'Build intelligent applications with Python, FastAPI, JavaScript, TypeScript and React, integrating LLM providers including OpenAI, Anthropic, Google Gemini, Groq and OpenRouter.',
    'Design backend services and REST APIs; develop AI-powered assistants, conversational systems and automated workflows from product requirements.',
    'Implement authentication, authorization, request validation and rate limiting; work with PostgreSQL, MongoDB and Supabase.',
    'Deploy and maintain applications with Docker, Railway, Render, Vercel and Netlify; debug, test and iterate to improve reliability.'
  ]}
]

const projects = [
  {name:'DalaCare AI — AI-Powered Healthcare Assistant',role:'AI/ML Department Team Lead (technical direction, evaluation oversight, integration guidance)',stack:'Python, FastAPI, RAG, FAISS, Sentence Transformers, Groq (Llama 3.3 70B), Exa Search, Whisper, SSE, Langfuse, Docker, Hugging Face Spaces',url:'https://github.com/DalaCare-AI-Architecture/DalaCare-AI-2',bullets:[
    'Conversational healthcare assistant combining LLM response generation with retrieval-grounded answers (FAISS, Sentence Transformers), Exa Search fallback, Whisper speech transcription and streamed responses over SSE.',
    'Directed structured symptom and urgency classification workflows, evaluation test cases and response-quality assessment to improve reliability.',
    'Championed safety principles: emergency red flags override lower urgency; missing information is never treated as a negative finding; insufficient information triggers human review. Designed as decision support, not a substitute for professional diagnosis.',
    'Coordinated Langfuse observability, Docker packaging and Hugging Face Spaces deployment across the team.'
  ]},
  {name:'RegisMeet — AI Meeting Intelligence',role:'Reference implementation',stack:'Whisper, Gemini 2.5 Flash, OpenAI embeddings, PostgreSQL, pgvector, Supabase RLS, Upstash QStash',bullets:[
    'AI meeting transcription and intelligence workflow: Whisper transcription, Gemini 2.5 Flash analysis, and OpenAI embeddings stored in PostgreSQL/pgvector for semantic retrieval.',
    'Multi-tenant architecture using Supabase Row-Level Security, background job processing with Upstash QStash and real-time application updates. Not a commercially established product.'
  ]},
  {name:'CodeFlow — AI Coding Assistant',role:'',stack:'React, Node.js, Express, MongoDB, Gemini, Groq, Paystack',url:'https://codeflow-app-mu.vercel.app/',bullets:[
    'AI-assisted coding workflows with a multi-provider design: Gemini as primary model and Groq as fallback to keep responses available.',
    'Full-stack implementation with a React frontend, Node/Express API, MongoDB persistence and Paystack payment integration.'
  ]},
  {name:'2WaY — Private Social Lounge',role:'Supporting project',stack:'Node.js, Express, Socket.IO, PostgreSQL, Argon2id, PWA',bullets:[
    'Real-time messaging backend with Socket.IO, authentication and access control, Argon2id password hashing and Progressive Web App capabilities.'
  ]}
]

const skillGroups = [
  ['AI & ML Engineering','Applied AI Engineering, LLM Engineering, Generative AI, NLP, Conversational AI, RAG Architecture, Prompt Engineering, ML Evaluation, AI Response Evaluation, Evaluation Dataset Design, AI Safety & Response Quality, Model/API Integration'],
  ['LLM Providers & Tooling','Hugging Face (Hub, Spaces, Sentence Transformers), OpenAI API, Anthropic API, Google Gemini, Groq, OpenRouter, FAISS, Whisper, Exa Search, Langfuse'],
  ['MLOps & Deployment','Structured Test Cases, Experiment Documentation, API-Based Model Serving, Docker, Hugging Face Spaces, Railway, Render, Vercel, Netlify'],
  ['Programming & Backend','Python, FastAPI, JavaScript, TypeScript, Node.js, Express.js, REST API Design, Backend Architecture, API Integration'],
  ['Data & Databases','PostgreSQL, pgvector, MongoDB, Supabase, Embedding Generation & Retrieval, Data Validation, Data Processing'],
  ['Frontend','React, Vite, TypeScript UI Development, Responsive Web Development'],
  ['Security & Engineering Practice','JWT, Argon2id, OWASP Principles, Input Validation, Rate Limiting, Integration Testing, Git/GitHub, Debugging'],
  ['Working Familiarity','LangChain, OAuth, model-versioning and experiment-tracking concepts']
]

export function Resume(){return <>
  <PageHero eyebrow="OFFICIAL RESUME" title="George Owulama Andzutsi" description="AI/ML Engineer | LLM Engineering | ML Evaluation & MLOps | Software Engineering · Nigeria (Open to Remote)"/>
  <section className="section"><div className="container resume-page">
    <div className="resume-actions">
      <div><p className="eyebrow">UPDATED PROFESSIONAL RESUME</p><p className="small muted">Print this ATS-friendly version or choose Save as PDF in your browser's print destination.</p></div>
      <button type="button" className="button" onClick={()=>window.print()}><Download size={17}/> Print / Save as PDF</button>
    </div>
    <article className="resume-print-area">
      <header className="resume-document-header">
        <h1>{site.name}</h1>
        <p className="resume-document-title">AI/ML Engineer | LLM Engineering | ML Evaluation & MLOps | Software Engineering</p>
        <p>Nigeria (Open to Remote) · {site.phone} · <a href={'mailto:'+site.email}>{site.email}</a></p>
        <p>GitHub: <a href={site.github}>github.com/evanandzutsi-eng</a> · LinkedIn: <a href={site.linkedin}>linkedin.com/in/george-andzutsi-833948268</a></p>
        <p>Portfolio: <a href={site.portfolio}>george-andzutsi.vercel.app</a></p>
      </header>

      <section className="resume-document-section"><h2>Professional Summary</h2><p>{site.professionalSummary}</p></section>

      <section className="resume-document-section"><h2>Professional Experience</h2>
        {experienceItems.map((item)=><div className="resume-document-role" key={item.role}>
          <div className="resume-role-heading"><h3>{item.role}{item.organization?' | '+item.organization:''}</h3>{item.period&&<span>{item.period}</span>}</div>
          {item.bullets.map(b=><p className="resume-bullet" key={b}>{b}</p>)}
        </div>)}
      </section>

      <section className="resume-document-section"><h2>Selected AI/ML & Software Projects</h2>
        {projects.map((project)=><div className="resume-document-project" key={project.name}>
          <div className="resume-project-heading"><h3>{project.name}</h3>{project.url&&<a href={project.url}>Project link <ExternalLink size={11}/></a>}</div>
          {project.role&&<p className="resume-project-role">{project.role}</p>}
          <p className="resume-stack"><b>Stack:</b> {project.stack}</p>
          {project.bullets.map(b=><p className="resume-bullet" key={b}>{b}</p>)}
        </div>)}
        <p className="resume-additional"><b>Additional:</b> GeorgePay, a pre-production cross-border payments platform (TypeScript monorepo, React/Vite, Express, shared Zod validation); Getby, a security-hardened trading platform prototype with an in-memory demonstration store (Netlify Functions, authentication, rate limiting, OWASP practices). Neither is a live financial service.</p>
      </section>

      <section className="resume-document-section"><h2>Technical Skills</h2>
        {skillGroups.map(([label,items])=><p className="resume-skill-row" key={label}><b>{label}:</b> {items}</p>)}
      </section>

      <section className="resume-document-section"><h2>Education & Certifications</h2>
        <div className="resume-education-item"><b>BSc, Mass Communication, Nasarawa State University, Keffi (NSUK)</b><span>2017 — 2023</span></div>
        <div className="resume-education-item"><b>National Youth Service Corps (NYSC), Jos South, Jos, Plateau State</b><span>2023 — 2024</span></div>
        <div className="resume-education-item"><b>Python Certification, freeCodeCamp</b><a href="https://freecodecamp.org/certification/fcc-74269a2b-0e4c-4508-b7e3-299ebc76e4cf-python-v9">Verify certificate</a></div>
        <div className="resume-education-item"><b>Mastercard Associate Program: Prep2soar Certificate</b><span>Mastercard Foundation</span></div>
        <div className="resume-education-item"><b>St. John Bosco Secondary School, Doma, Nasarawa State, Nigeria</b><span>2012 — 2017</span></div>
      </section>
    </article>
    <div className="resume-bottom-actions"><button type="button" className="button" onClick={()=>window.print()}><Download size={17}/> Print / Save as PDF</button><Link to="/contact" className="text-link">Discuss an opportunity <ArrowUpRight size={15}/></Link></div>
  </div></section>
</>}
