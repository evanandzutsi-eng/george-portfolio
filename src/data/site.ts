export const site = {
  name: 'George Owulama Andzutsi',
  shortName: 'George Andzutsi',
  title: 'AI Engineer & Software Engineer',
  currentRole: 'Full Stack Software Engineer | AI Applications | REST APIs | Python | React.js',
  positioning: 'Web Development · AI Applications · REST APIs · API Integration · Workflow Automation · Full-Stack Engineering',
  description: 'George Owulama Andzutsi is an early-career full stack software engineer with practical experience building web applications, integrating APIs and third-party services, and developing AI applications and workflow automations.',
  professionalSummary: 'Early career software engineer with practical full stack development experience and a growing specialization in AI applications, API integration and workflow automation. Builds web applications end to end, working with React.js, TypeScript and JavaScript on the frontend and Node.js, Express, Python and FastAPI on the backend, connecting both layers through REST APIs. Comfortable integrating third party services, working with relational and non relational databases, and handling authentication flows during development. Applies AI APIs and AI assisted development practices directly in project work, including prompt refinement and evaluation of AI generated output rather than accepting it uncritically. Tests and debugs applications using Postman and Jest, works daily in Git and GitHub, and is comfortable with Docker, Windows Terminal, PowerShell and general CLI workflows. Approaches unfamiliar technical problems methodically through documentation, experimentation and direct validation. Strong written communication and research background, supported by a B.Sc. in Mass Communication and field research leadership experience.',
  experienceYears: 'Early-career software engineer',
  email: 'andzutsiowulama@gmail.com',
  phone: '+2348100362060',
  location: 'Nigeria',
  remote: 'Remote · Available for global collaboration',
  availability: 'Available Immediately',
  github: 'https://github.com/evanandzutsi-eng',
  linkedin: 'https://www.linkedin.com/in/george-andzutsi-833948268',
  x: 'https://x.com/Andzutsi_',
  whatsapp: 'https://wa.me/2348100362060',
  facebook: 'https://www.facebook.com/profile.php?id=61588327748153&mibextid=ZbWKwL',
  telegram: 'https://t.me/George_buddy',
  youtube: 'https://youtube.com/@evanandzutsi?si=k9tV1DxsO9iBSWLc',
  booking: 'https://tally.so/r/VLqJoE',
  contactEndpoint: '[CONTACT_ENDPOINT]',
  profileImage: { avif: '/assets/images/profile/george-profile.avif', webp: '/assets/images/profile/george-profile.webp', fallback: '/assets/images/profile/george-profile.webp' },
  heroImage: { avif: '/assets/images/hero/george-hero.avif', webp: '/assets/images/hero/george-hero.webp', fallback: '/assets/images/hero/george-hero.webp' },
  cv: '/assets/George_Andzutsi_Master_Resume.pdf',
  certification: { name: 'Scientific Computing with Python', issuer: 'freeCodeCamp', date: '', credentialUrl: 'https://freecodecamp.org/certification/fcc-74269a2b-0e4c-4508-b7e3-299ebc76e4cf-python-v9' },
  certifications: [
    { name: 'Scientific Computing with Python', issuer: 'freeCodeCamp', date: '', credentialUrl: 'https://freecodecamp.org/certification/fcc-74269a2b-0e4c-4508-b7e3-299ebc76e4cf-python-v9' },
    { name: 'Mastercard Foundation PREP2SOAR', issuer: 'Mastercard Foundation', date: '2026', credentialUrl: '' },
  ],
  education: 'B.Sc. Mass Communication — Nasarawa State University, Keffi, Nigeria',
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
    slug:'codeflow-ai', title:'CodeFlow — AI Powered Coding Assistant Platform', category:'AI', tags:['AI','Full Stack','Web Application','APIs'],
    description:'A live AI-powered coding assistant platform with a React frontend, Node.js/Express backend, multi-provider AI integration, image generation, MongoDB and Paystack billing.',
    problem:'Build a practical coding-assistant application that could combine conversational AI, application data, billing and multiple AI providers while remaining usable when a provider fails.',
    solution:'Built a React frontend and Node.js/Express backend, integrated Google Gemini as the primary AI provider and Groq Llama 3 as a fallback, added image generation through Hugging Face and Pollinations, integrated MongoDB and Paystack billing, and used a circuit-breaker approach for provider failures.',
    architecture:'React UI → Node.js / Express API → AI Provider Layer → Gemini / Groq + Image Providers → MongoDB / Paystack',
    decisions:['Use multiple AI providers to reduce dependence on a single provider.','Use circuit-breaker behavior around provider failures.','Test streaming responses and deployment configuration iteratively.'],
    security:'AI provider credentials and payment secrets should remain server-side. Application requests and provider responses require validation and controlled integration boundaries.',
    deployment:'Deployed and tested through Railway and Vercel.',
    outcome:'A live AI application demonstrating full-stack development, multi-provider AI integration, billing, image generation and hands-on AI behavioral testing.',
    stack:['JavaScript','React.js','Node.js','Express','MongoDB','REST APIs','Google Gemini','Groq Llama 3','Hugging Face','Pollinations','Paystack','Railway','Vercel'],
    status:'Live Demo', evidence:'Public live application', role:'Full-stack implementation · AI integration · API integration · Testing',
    proof:['Live AI coding assistant','Gemini primary + Groq fallback','Image generation integrations','MongoDB application data','Paystack billing','Circuit-breaker approach','Railway + Vercel deployment','AI behavioral testing and evaluation'],
    links:{github:'',live:'https://codeflow-app-mu.vercel.app/'},
  },
  {
    slug:'georgepay', title:'GeorgePay — Fintech Web Application', category:'Full Stack', tags:['Full Stack','Fintech','Web Application','APIs'],
    description:'A fintech web application built with TypeScript and React.js, including REST API integration, authentication, database functionality and Paystack payment workflows.',
    problem:'Build a practical fintech web application connecting frontend workflows to backend logic, user access and payment functionality.',
    solution:'Built the application with TypeScript and React.js, connected frontend workflows to backend logic through REST APIs, implemented authentication and database functionality, and integrated Paystack for payment-related workflows.',
    architecture:'React / TypeScript UI → REST APIs → Backend Logic → Database + Authentication + Paystack',
    decisions:['Use reusable React components for maintainability.','Keep payment and API communication behind explicit integration boundaries.','Test application behavior iteratively and resolve integration issues during development.'],
    security:'Authentication, payment credentials and database credentials should be protected server-side with validated requests and secure configuration.',
    deployment:'Public demo deployed on Vercel.',
    outcome:'A live fintech application demonstrating frontend development, API integration, authentication, database integration and payment workflows.',
    stack:['TypeScript','React.js','REST APIs','Paystack','Authentication','Database Integration','Vercel'],
    status:'Live Demo', evidence:'Public live application', role:'Full-stack implementation · Frontend · API integration',
    proof:['React/TypeScript application','REST API integration','Authentication','Database functionality','Paystack integration','Integration troubleshooting'],
    links:{github:'',live:'https://georgepay-web-al53.vercel.app/'},
  },
  {
    slug:'regismeet', title:'RegisMeet — Meeting Web Application', category:'Backend', tags:['Backend','Web Application','APIs'],
    description:'An active-development meeting web application using Python, Upstash Redis, Redis and Neon for backend logic and data infrastructure.',
    problem:'Develop meeting-oriented application functionality with backend logic, fast key-based access and persistent database infrastructure.',
    solution:'Developing RegisMeet with Python, using Upstash Redis for fast key-based data access and Neon for persistent database infrastructure, while testing and refining backend behavior iteratively.',
    architecture:'Web Application → Python Backend → Upstash Redis + Neon → Application State / Data',
    decisions:['Keep data services explicit and separated from application logic.','Use iterative testing as functionality is developed.','Use GitHub throughout development for version control.'],
    security:'Production deployment should protect database credentials, validate inputs and secure backend endpoints.',
    deployment:'Active development; no production deployment claim is made.',
    outcome:'An active backend project demonstrating Python development, Redis usage, persistent database infrastructure and iterative testing.',
    stack:['Python','Upstash Redis','Redis','Neon','GitHub'], status:'Active Development', evidence:'Active development project',
    role:'Backend development · Data-layer integration', proof:['Python backend logic','Upstash Redis','Neon infrastructure','Iterative testing','GitHub version control'], links:{github:'',live:''},
  },
  {
    slug:'verdant-foundation', title:'Verdant Foundation Website', category:'Full Stack', tags:['Full Stack','Web Application','Frontend'],
    description:'A responsive foundation website built with React.js, JavaScript and Node.js, including a donations feature and Neon-backed application data.',
    problem:'Create a practical foundation website with a usable interface and an online donation workflow.',
    solution:'Built the website end to end with React.js, JavaScript and Node.js, implemented a donations feature for direct contributions and used Neon for application data.',
    architecture:'React UI → Node.js Application Logic → Neon Data Layer → Donation Workflow',
    decisions:['Prioritize practical usability over decorative design.','Build the interface responsively for different screen sizes.','Handle the site as an end-to-end application rather than a static presentation only.'],
    security:'Donation and application data should use validated inputs, protected credentials and secure server-side handling.',
    deployment:'Portfolio project; deployment details are not specified in the current resume.',
    outcome:'A complete responsive foundation website with donation functionality and backend/data integration.',
    stack:['React.js','JavaScript','Node.js','Neon'], status:'Completed Project', evidence:'Portfolio project', role:'End-to-end development', proof:['Responsive React interface','Donations feature','Node.js application logic','Neon data layer'], links:{github:'',live:''},
  },
  {
    slug:'ai-report-processing', title:'AI Report Processing Prototype', category:'AI', tags:['AI','Python','Prototype'],
    description:'A practical prototype for processing student reports, school sheets and health reports using Python, Google Colab and the Groq API.',
    problem:'Explore whether AI could assist with processing different structured report types and producing useful outputs.',
    solution:'Built and tested a prototype in Google Colab using the Groq API, experimenting with AI-generated processing and structured output across student, school and health report types.',
    architecture:'Google Colab / Python → Groq API → AI Processing → Structured Output',
    decisions:['Use a notebook environment for fast experimentation.','Refine the workflow from observed testing results rather than treating the first output as final.','Evaluate structured output across different report contexts.'],
    security:'Health-related information should be handled with appropriate privacy, access and data-protection controls in any real deployment. This portfolio item is presented as a prototype, not a production health system.',
    deployment:'Prototype developed and tested in Google Colab; no production deployment claim is made.',
    outcome:'A hands-on AI prototype demonstrating API integration, structured processing experimentation and iterative evaluation.',
    stack:['Python','Google Colab','Groq API'], status:'Prototype', evidence:'Development prototype', role:'AI application experimentation', proof:['Groq API integration','Google Colab development','Multiple report types','Structured output experimentation'], links:{github:'',live:''},
  },
  {
    slug:'workflow-automation-api-integration', title:'Workflow Automation & API Integration', category:'Automation', tags:['Automation','APIs','Workflow'],
    description:'Workflow automation experiments using Zapier and Make.com with APIs, webhooks, Gmail, Discord and CRM integration flows.',
    problem:'Connect repetitive digital tasks and business processes into practical, repeatable workflows.',
    solution:'Built and tested automation workflows using Zapier and Make.com, connecting triggers, actions, APIs, webhooks, Gmail, Discord and CRM-related flows, including experiments with AI-powered business workflows.',
    architecture:'Trigger → API / Webhook → Automation Logic → Gmail / Discord / CRM / External Service → Output',
    decisions:['Use automation platforms where they reduce unnecessary implementation overhead.','Test triggers, actions and outputs iteratively.','Treat AI agents and AI-powered workflows as ongoing experimentation rather than established production expertise.'],
    security:'API credentials, webhook endpoints, CRM access and connected service tokens should be protected as secrets with appropriate access controls.',
    deployment:'Workflow-specific configurations; no single public deployment is claimed.',
    outcome:'Hands-on automation experience connecting services and exploring practical AI-powered business workflows.',
    stack:['Zapier','Make.com','AI APIs','Webhooks','Gmail','Discord','CRM Integrations','REST APIs'], status:'Professional Work / Experimentation', evidence:'Workflow automation experiments', role:'Automation · API integration · Workflow testing', proof:['Zapier','Make.com','Gmail integration','Discord notifications','CRM integration flows','API/webhook workflows'], links:{github:'',live:''},
  },
]

export const experience = [
  {period:'2025 — Present', role:'Software Developer | NASITDEA (Nasarawa State Information Technology and Digital Economy Agency)', bullets:['Integrate APIs and build backend systems to support the agency’s digital initiatives.','Work on backend development, connecting internal systems and services through API integration.']},
  {period:'2024 — Present', role:'Independent Software Developer | Nigeria', bullets:['Build full stack web applications combining React.js frontends with Node.js, Express, Python and FastAPI backends.','Develop and consume REST APIs, connecting frontend applications with backend services and third party platforms.','Implement authentication flows and integrate third party APIs, working through credential handling and response parsing.','Design and manage application data using MySQL, MongoDB, Supabase, Neon and Redis.','Write basic SQL to query, filter, sort and validate records during development and testing.','Test APIs and application workflows using Postman, and write automated tests with Jest.','Debug and troubleshoot issues across frontend, backend and integration layers through manual and iterative testing.','Use Git and GitHub for source control, and Docker for containerized local development.','Work daily in Windows Terminal and PowerShell, building comfort with general CLI workflows.','Deploy and maintain applications through Vercel, Railway, Render and Netlify, troubleshooting deployment configuration issues as they arise.','Integrate AI APIs into application backends and use AI-assisted development tools to accelerate coding and technical research.','Refine prompts and evaluate AI-generated output through manual verification rather than accepting it directly.','Build and test workflow automations using Zapier and Make.com, connecting triggers, actions and APIs.','Research unfamiliar technologies and technical problems through documentation, experimentation and iterative testing.','Learned UI/UX design and Figma during university and applied practical interface design principles to personal project frontends.']},
  {period:'2023 — 2024', role:'NYSC Corps Member — Teacher | Junuco High School, Jos South', bullets:['Worked in a structured environment requiring leadership, communication, organization and collaboration.']},
  {period:'Industrial Training', role:'National Television Authority (NTA)', bullets:['Performed technical hardware and software-related responsibilities under supervision alongside communication tasks.','Worked with staff across different units, applying practical troubleshooting to technical issues as they arose.']},
  {period:'Industrial Training', role:'Option FM', bullets:['Assisted with technical hardware and software responsibilities during industrial training.','Collaborated with team members and handled routine troubleshooting in a fast-paced broadcast environment.']},
  {period:'University Field Research', role:'Team Lead — Business Owner Research Project | Nasarawa State University, Keffi', bullets:['Led a student field research team gathering information directly from business owners.','Coordinated team activities and communicated research requirements clearly to team members.','Worked with team members to gather information and organize findings from the field.','Communicated research findings and observations to the wider project group.']},
]

export const education = [
  {period:'2018 — 2023', title:'Bachelor of Science (B.Sc.) in Mass Communication', institution:'Nasarawa State University, Keffi, Nigeria'}
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
