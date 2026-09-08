export const site = {
  name: 'George Owulama Andzutsi',
  shortName: 'George Andzutsi',
  title: 'AI Engineer & Software Engineer',
  currentRole: 'Web Developer | AI Integration | Automation',
  positioning: 'Web Development · AI / LLM Integration · Automation · APIs · Full-Stack Engineering',
  description: 'George Owulama Andzutsi is an AI Engineer and Software Engineer whose work connects web development, AI and LLM integration, API engineering, automation and practical digital solutions.',
  professionalSummary: 'AI Engineer and Software Engineer with a practical foundation in web development, React.js, TypeScript, JavaScript, REST APIs and third-party integrations. Builds responsive interfaces, connects applications to services such as Paystack, and works across Python, FastAPI, Node.js, databases and cloud deployment. Also works with AI and LLM APIs including OpenAI, Anthropic, Google Gemini, OpenRouter and Groq, alongside prompt engineering, AI-assisted development, AI evaluation and workflow automation with Zapier and Make.com. Experience spans independent engineering projects, digital-economy work, professional development programmes and practical technical environments.',
  experienceYears: '3+ years of professional and practical experience',
  email: 'andzutsiowulama@outlook.com',
  phone: '+2348100362060',
  location: 'Nigeria',
  remote: 'Remote · Available for global collaboration',
  availability: 'Available Immediately',
  github: 'https://github.com/evanandzutsi-eng',
  linkedin: 'https://www.linkedin.com/in/george-andzutsi-833948268',
  x: 'https://x.com/Andzutsi_',
  whatsapp: 'https://api.whatsapp.com/send/?phone=2348100362060&text&type=phone_number&app_absent=0&wame_ctl=1',
  facebook: 'https://www.facebook.com/profile.php?id=61588327748153&mibextid=ZbWKwL',
  telegram: 'https://t.me/George_buddy',
  youtube: 'https://youtube.com/@evanandzutsi?si=k9tV1DxsO9iBSWLc',
  booking: 'https://tally.so/r/VLqJoE',
  contactEndpoint: '[CONTACT_ENDPOINT]',
  profileImage: { avif: '/assets/images/profile/george-profile.avif', webp: '/assets/images/profile/george-profile.webp', fallback: '/assets/images/profile/george-profile.webp' },
  heroImage: { avif: '/assets/images/hero/george-hero.avif', webp: '/assets/images/hero/george-hero.webp', fallback: '/assets/images/hero/george-hero.webp' },
  cv: '/assets/George_Andzutsi_Web_Developer_CV_99xAutomation.pdf',
  certification: {
    name: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    date: '',
    credentialUrl: '',
  },
  certifications: [
    { name: 'Scientific Computing with Python', issuer: 'freeCodeCamp', date: '', credentialUrl: '' },
    { name: 'Mastercard Foundation PREP2SOAR', issuer: 'Mastercard Foundation', date: '2026', credentialUrl: '' },
  ],
  education: 'Bachelor of Science (B.Sc.) in Mass Communication — Nasarawa State University, Keffi, Nigeria',
}

export const navLinks = [
  ['Home','/'], ['About','/about'], ['Skills','/skills'], ['Projects','/projects'],
  ['Experience','/experience'], ['Services','/services'], ['Case Studies','/case-studies'],
  ['Blog','/blog'], ['Media','/media'], ['Contact','/contact'], ['AI Assistant','/ai-assistant']
] as const

export const skills = [
  { category:'Frontend Development', icon:'PanelsTopLeft', description:'Responsive, component-based frontend development and interface implementation.', items:['HTML5','CSS3','JavaScript (ES6+)','TypeScript','React.js','Reusable Components','Responsive UI Development','Frontend Architecture','Performance Optimization'] },
  { category:'APIs & Integrations', icon:'ServerCog', description:'Connecting frontend applications to APIs, third-party services and authentication flows.', items:['REST APIs','Third-Party API Integration','JWT','OAuth','Webhooks','JSON','Payment API Integration','Postman'] },
  { category:'Backend Exposure', icon:'Database', description:'Backend technologies used to support API-connected applications and data workflows.', items:['Node.js','Python','FastAPI','REST API Development'] },
  { category:'Databases & Data', icon:'Database', description:'Practical exposure to relational, document, hosted and in-memory data services.', items:['MySQL','MongoDB','Supabase','Neon','Redis','Upstash'] },
  { category:'Automation & AI', icon:'Workflow', description:'Automation and AI-assisted workflows that connect applications and digital operations.', items:['Zapier','Make.com','API-Based Workflows','AI-assisted Development','Prompt Engineering','OpenAI APIs','Anthropic APIs','Google Gemini','OpenRouter','Groq','LLM Integration','AI Agents','AI Evaluation'] },
  { category:'Design & UI/UX', icon:'PanelsTopLeft', description:'Translating design files and interface concepts into clear, responsive products.', items:['Figma','UI/UX Design','Responsive Interface Design','Typography','Layout & Spacing'] },
  { category:'Development & Delivery', icon:'CloudCog', description:'Tools and platforms used to build, troubleshoot, version, containerize and deploy applications.', items:['Git','GitHub','Docker','VS Code','Windows Terminal','PowerShell','Vercel','Netlify','Railway','Render'] },
  { category:'Troubleshooting & Quality', icon:'ShieldCheck', description:'A practical approach to debugging, integration testing and validating fixes before release.', items:['Bug Fixing','API Troubleshooting','Website Troubleshooting','Integration Testing','Code Review','Technical Problem Solving','Cross-browser Testing'] },
]

export const services = [
  {title:'Frontend Development', icon:'PanelsTopLeft', description:'Build responsive, maintainable interfaces with React.js, TypeScript and JavaScript.', deliverables:['React.js interfaces','Responsive UI','Reusable component architecture','Figma-to-React implementation']},
  {title:'API & Third-Party Integration', icon:'ServerCog', description:'Connect web applications to REST APIs, payment services, authentication systems and external platforms.', deliverables:['REST API connections','Paystack/payment integrations','JWT/OAuth flows','Webhook and JSON handling']},
  {title:'Workflow Automation', icon:'Workflow', description:'Automate repetitive digital processes with Zapier, Make.com, APIs, webhooks and structured data flows.', deliverables:['Workflow mapping','Trigger/action setup','API and webhook connections','Workflow troubleshooting']},
  {title:'AI Integration & AI-Assisted Development', icon:'Sparkles', description:'Add practical AI capabilities to software workflows while keeping the surrounding engineering reliable and maintainable.', deliverables:['AI feature integration','Prompt and workflow design','AI-assisted development workflows','Integration testing']},
  {title:'Website Troubleshooting & Optimization', icon:'ShieldCheck', description:'Investigate frontend, API and integration problems, apply fixes and validate results before considering an issue resolved.', deliverables:['Bug investigation','API troubleshooting','Regression checks','Performance and maintainability improvements']},
  {title:'Technical Support & UI Implementation', icon:'Lightbulb', description:'Turn interface concepts into working products and support teams through implementation, testing and documentation.', deliverables:['Figma implementation','Responsive layouts','Technical documentation','Clear implementation communication']},
]

export const projects = [
  {
    slug:'georgepay',
    title:'GeorgePay — Fintech Web Application',
    category:'Full Stack',
    tags:['Full Stack','Fintech','Web Application','APIs'],
    description:'A fintech web application built end-to-end with TypeScript and React.js, including payment, authentication and REST API integration work.',
    problem:'Build a responsive fintech-oriented web application while connecting the user interface to payment, authentication and API-driven functionality.',
    solution:'Built GeorgePay with TypeScript and React.js, integrated Paystack for payment processing, implemented authentication and session handling, and connected the frontend to REST API endpoints.',
    architecture:'React / TypeScript UI → REST API → Authentication / Application Logic → Paystack Payment Service',
    decisions:['Use reusable React components for maintainability.','Keep payment and API communication behind clear integration boundaries.','Test request/response behavior with Postman while troubleshooting integration issues.'],
    security:'Authentication and payment-related flows require secure handling of credentials, validated requests and protected server-side secrets. No private credentials are exposed in the portfolio.',
    deployment:'Public demo deployed on Vercel.',
    outcome:'A live fintech application demonstrating responsive frontend development, payment integration, authentication and API troubleshooting.',
    stack:['TypeScript','React.js','REST APIs','Paystack','Authentication','Vercel'],
    status:'Live Demo',
    evidence:'Public live application',
    role:'Full-stack implementation · Frontend · API integration',
    proof:['Responsive React/TypeScript interface','Paystack payment integration','Authentication and session handling','REST API integration and troubleshooting'],
    links:{github:'',live:'https://georgepay-web-al53.vercel.app/'},
  },
  {
    slug:'codeflow-ai',
    title:'CodeFlow — Software Development Platform',
    category:'AI',
    tags:['AI','Web Application','APIs'],
    description:'A software development platform with a React.js frontend and REST API integration, designed around a multi-model AI experience.',
    problem:'Create a usable web experience around multiple AI models while keeping frontend components reusable and API-driven.',
    solution:'Built the frontend with JavaScript and React.js, developed reusable components for core interface elements and integrated REST APIs for application data and requests.',
    architecture:'React UI → REST API / Integration Layer → AI Model Services → Response',
    decisions:['Separate API integration concerns from reusable interface components.','Design the interface around the user task rather than a specific model provider.','Test frontend request handling and debug integration issues before deployment.'],
    security:'AI provider credentials should remain outside client-side code, with validated requests and controlled server-side integration boundaries in production.',
    deployment:'Public demo deployed on Vercel.',
    outcome:'A working public AI-oriented application demonstrating React development, API integration and practical multi-model product implementation.',
    stack:['JavaScript','React.js','REST APIs','AI Model APIs','Vercel'],
    status:'Live Demo',
    evidence:'Public live application',
    role:'Frontend implementation · API integration · AI product interface',
    proof:['React.js reusable components','REST API integration','Multi-model AI-oriented experience','Frontend request handling and troubleshooting'],
    links:{github:'',live:'https://codeflow-app-mu.vercel.app/'},
  },
  {
    slug:'regismeet',
    title:'RegisMeet — Meeting Web Application',
    category:'Backend',
    tags:['Backend','Web Application','APIs'],
    description:'An active-development meeting web application using Python, Upstash Redis and Neon as part of its backend and data layer.',
    problem:'Develop a meeting-oriented web application with backend logic and persistent data services.',
    solution:'Currently building RegisMeet in Python, using Upstash Redis and Neon as part of the data layer and GitHub for version control.',
    architecture:'Web Application → Python Backend → Redis / Upstash + Neon Data Layer',
    decisions:['Keep data services explicit and separated from application logic.','Use GitHub for version control and incremental development.','Treat the project as active development rather than presenting unfinished functionality as production-ready.'],
    security:'Production deployment should protect database credentials, validate user input and secure backend endpoints. No private credentials are exposed in the portfolio.',
    deployment:'Active development; no production deployment claim is made.',
    outcome:'An active engineering project demonstrating backend development and practical data-layer integration.',
    stack:['Python','Upstash','Redis','Neon','GitHub'],
    status:'Active Development',
    evidence:'Active development project',
    role:'Backend development · Data-layer integration',
    proof:['Python backend development','Upstash Redis integration','Neon data layer','GitHub-based incremental development'],
    links:{github:'',live:''},
  },
  {
    slug:'workflow-automation-api-integration',
    title:'Workflow Automation & API Integration',
    category:'Automation',
    tags:['Automation','APIs'],
    description:'Practical automation work using Zapier and Make.com to connect APIs, webhooks and digital operations.',
    problem:'Reduce repetitive work by connecting services and business steps into repeatable digital workflows.',
    solution:'Build and troubleshoot automation workflows using triggers, actions, APIs, webhooks and structured JSON data flows.',
    architecture:'Trigger → Webhook / API → Workflow Logic → External Service → Output',
    decisions:['Use automation platforms where they reduce unnecessary implementation overhead.','Keep workflow steps explicit so failures can be isolated and debugged.','Test triggers and outputs before considering a workflow reliable.'],
    security:'API credentials, webhook endpoints and connected service tokens should be protected as secrets and configured with appropriate access controls.',
    deployment:'Workflow-specific configuration; no single public deployment is claimed.',
    outcome:'Practical experience connecting digital services and automating repetitive workflows.',
    stack:['Zapier','Make.com','REST APIs','Webhooks','JSON'],
    status:'Professional Work / Reference',
    evidence:'Professional engineering reference',
    role:'Automation · API integration · Workflow troubleshooting',
    proof:['Zapier workflow automation','Make.com workflow automation','API and webhook connections','Structured JSON data flows'],
    links:{github:'',live:''},
  },
]

export const experience = [
  {
    period:'2024 — Present',
    role:'Web Developer & Software Engineer | AI Integration & Automation — Independent Projects',
    bullets:[
      'Build responsive web applications using React.js, JavaScript, TypeScript, HTML5 and CSS3, with reusable components and responsive interfaces.',
      'Turn Figma designs and interface concepts into functional React experiences and connect frontend applications to REST APIs and third-party services.',
      'Work with authentication patterns including JWT and OAuth, payment integrations such as Paystack, webhooks and API-driven application flows.',
      'Use Python, FastAPI and Node.js for backend and API work where required, alongside MySQL, MongoDB, Supabase, Neon, Redis and Upstash.',
      'Integrate AI and LLM services including OpenAI, Anthropic, Google Gemini, OpenRouter and Groq into application and workflow contexts.',
      'Apply prompt engineering, AI-assisted development and AI evaluation practices while keeping application behavior grounded in structured requirements.',
      'Build automation workflows with Zapier and Make.com, connecting APIs, webhooks and third-party services to move data between systems.',
      'Use Git, GitHub, Postman and Docker, troubleshoot frontend/backend/integration issues, and deploy through Vercel, Netlify, Railway and Render.'
    ]
  },
  {
    period:'Professional Technology Experience',
    role:'Stack Assistant — Nasarawa State Information Technology & Digital Economy Agency (NASITDEA)',
    bullets:[
      'Worked within a technology and digital-economy environment as part of the broader professional journey into software engineering and AI-focused work.',
      'Contributed to practical technology and digital work in an organizational setting.'
    ]
  },
  {
    period:'Professional Programme',
    role:'Nigerian Jubilee Fellows Programme (NJFP)',
    bullets:[
      'Part of the professional development journey and broader transition toward technology-focused work.',
      'Presented as a programme experience, distinct from conventional employment.'
    ]
  },
  {
    period:'2023 — 2024',
    role:'NYSC Corps Member — Teacher | Junuco High School, Jos South',
    bullets:[
      'Worked in a structured environment requiring leadership, communication, organization and collaboration.',
      'Managed responsibilities consistently while working with people across different needs and expectations.'
    ]
  },
  {
    period:'Industrial Training',
    role:'National Television Authority (NTA) — Team Lead',
    bullets:[
      'Coordinated information gathering within the group and compiled team-collected information into structured Word and PDF documents for submission to editors.',
      'Communicated with editors on submitted materials and coordinated the team to meet deadlines.'
    ]
  },
  {
    period:'Industrial Training',
    role:'Option FM — Technical Operations',
    bullets:[
      'Monitored radio transmitters and related broadcast equipment as part of daily technical operations.',
      'Assisted technical staff with maintenance tasks on transmitter and broadcast machinery.'
    ]
  },
  {
    period:'University Field Research',
    role:'Team Lead — Business Owner Research Project',
    bullets:[
      'Led a student team gathering information directly from business owners through structured questions.',
      'Coordinated team members, recorded information accurately and resolved challenges during fieldwork.'
    ]
  },
]

export const education = [
  {period:'2018 — 2023', title:'Bachelor of Science (B.Sc.) in Mass Communication', institution:'Nasarawa State University, Keffi, Nigeria'}
]

export const careerInterests = [
  'AI Engineering and practical LLM applications',
  'Full-stack software engineering',
  'AI-assisted development and AI evaluation',
  'API engineering and third-party integrations',
  'Workflow automation and intelligent business processes',
  'Developer tools and AI-powered applications',
  'Digital transformation and technology-enabled solutions',
  'Secure, maintainable and user-focused software systems'
]

export const principles = [
  'Understand the problem before choosing the technology.',
  'Build useful, maintainable systems rather than demos that only look impressive.',
  'Treat testing, reliability and data handling as part of the product.',
  'Keep integrations observable and troubleshootable.',
  'Design for iteration: products change as users teach you more.',
  'Communicate technical decisions clearly with technical and non-technical stakeholders.'
]

export const socialLinks = [
  {label:'X', key:'x', url:site.x},
  {label:'WhatsApp',key:'whatsapp',url:site.whatsapp},
  {label:'LinkedIn',key:'linkedin',url:site.linkedin},
  {label:'Facebook',key:'facebook',url:site.facebook},
  {label:'GitHub',key:'github',url:site.github},
  {label:'Email',key:'email',url:`mailto:${site.email}`},
  {label:'Telegram',key:'telegram',url:site.telegram},
  {label:'Phone',key:'phone',url:`tel:${site.phone.replace(/[^+\d]/g,'')}`}
]

export function isPlaceholder(value: string) {
  return value.startsWith('[') && value.endsWith(']')
}

export function whatsappUrl() {
  if (isPlaceholder(site.whatsapp)) return '#'
  const digits = site.whatsapp.replace(/\D/g, '')
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent('Hello George, I found your portfolio and would like to discuss a project.')}` : '#'
}
