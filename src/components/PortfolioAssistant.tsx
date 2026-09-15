import {FormEvent, useMemo, useState} from 'react'
import {Bot, ExternalLink, Send, Sparkles, UserRound, X} from 'lucide-react'
import {Link} from 'react-router-dom'
import {site, projects, services, skills, experience, careerInterests} from '../data/site'

type Message = {id:number; role:'assistant'|'user'; text:string; sources?:{label:string;to:string}[]}

const normalize=(value:string)=>value.toLowerCase().replace(/[^a-z0-9\s]/g,' ')

function localAnswer(question:string){
  const q=normalize(question)
  const sources:{label:string;to:string}[]=[]
  const add=(label:string,to:string)=>sources.push({label,to})

  if (/who|about|george|profile|background|journey/.test(q)) {
    add('About George','/about')
    return {text:`George Owulama Andzutsi is an AI Engineer & Software Engineer whose work connects web development, software engineering, AI/LLM integration, APIs, automation and practical digital solutions. His career story combines independent engineering work with NASITDEA, the Nigerian Jubilee Fellows Programme (NJFP), NYSC, industrial training and other technical environments.`,sources}
  }
  if (/hire|contact|work with|start|project|consult/.test(q)) {
    add('Start a project','/start-a-project'); add('Contact','/contact')
    return {text:`The best way to engage George is through the project intake. You can describe the problem, whether AI or automation is involved, your timeline and budget, then choose how you would like to be contacted.`,sources}
  }
  if (/skill|technology|stack|tech|python|react|typescript|fastapi|openai|gemini|anthropic|groq|redis|postgres|supabase|mongo/.test(q)) {
    add('Skills','/skills')
    return {text:`George's current technical profile spans React.js, TypeScript, JavaScript, Python, FastAPI, REST APIs, authentication, databases, Docker, Git/GitHub, Vercel, Netlify, Railway, Render, Zapier and Make.com. AI/LLM work includes OpenAI, Anthropic, Google Gemini, OpenRouter and Groq, alongside prompt engineering, AI-assisted development, AI evaluation and AI agents.`,sources}
  }
  if (/project|georgepay|codeflow|regismeet|work/.test(q)) {
    add('Projects','/projects')
    return {text:`The portfolio currently presents ${projects.length} structured project records, including GeorgePay, CodeFlow, RegisMeet and workflow/API automation work. Project status is labeled honestly, such as live demo, active development or professional engineering reference.`,sources}
  }
  if (/service|offer|build|can you build/.test(q)) {
    add('Services','/services')
    return {text:`Services presented on the portfolio include frontend development, backend/API work, AI and LLM integration, workflow automation, third-party integrations, troubleshooting and technical support. The exact scope is defined during project discovery.`,sources}
  }
  if (/experience|career|nasitdea|njfp|nysc|nta|option fm/.test(q)) {
    add('Experience','/experience')
    return {text:`The experience timeline includes independent Web Developer & Software Engineer work with AI integration and automation, NASITDEA as a Stack Assistant, the Nigerian Jubilee Fellows Programme (NJFP), NYSC teaching experience, NTA industrial training/team leadership, Option FM technical operations and university field research leadership.`,sources}
  }
  if (/ai|llm|agent|automation/.test(q)) {
    add('AI / software approach','/about')
    return {text:`The portfolio treats AI as an engineering capability rather than a standalone buzzword. The focus is on integrating models into useful software through APIs, application logic, data, automation, security and deployment. Career interests include practical LLM applications, AI-assisted development, AI evaluation and intelligent business processes.`,sources}
  }
  if (/remote|global|location|where/.test(q)) {
    return {text:`George is based in Nigeria and presents himself as available for remote and global collaboration. The portfolio does not claim specific international clients or locations that have not been verified.`}
  }
  if (/github|repository|code/.test(q)) {
    add('GitHub','https://github.com/evanandzutsi-eng')
    return {text:`George's GitHub profile is available from the portfolio. Individual project repositories are only linked where a verified repository is configured.`,sources}
  }
  if (/cv|resume|curriculum/.test(q)) {
    add('Download CV','/resume')
    return {text:`You can view the online résumé and download the current CV from the Resume page.`,sources}
  }
  return {text:`I can answer grounded questions about George's profile, career journey, skills, AI/LLM work, services, projects, experience and how to start a project. Try: “What does George build?”, “Tell me about his AI experience”, or “How can I hire George?”`}
}

async function remoteAnswer(question:string){
  const endpoint=import.meta.env.VITE_PORTFOLIO_AI_ENDPOINT as string|undefined
  if(!endpoint) return null
  const controller=new AbortController(); const timeout=window.setTimeout(()=>controller.abort(),8000)
  try {
    const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question}),signal:controller.signal})
    if(!response.ok) return null
    const data=await response.json() as {answer?:string;sources?:{label:string;to:string}[]}
    if(!data.answer) return null
    return {text:data.answer,sources:data.sources}
  } catch { return null } finally { window.clearTimeout(timeout) }
}

export function PortfolioAssistant({fullPage=false}:{fullPage?:boolean}){
  const [open,setOpen]=useState(fullPage)
  const [question,setQuestion]=useState('')
  const [loading,setLoading]=useState(false)
  const [messages,setMessages]=useState<Message[]>([{id:1,role:'assistant',text:'Hi 👋 I’m here to help you get to know George. Ask me about his work, projects, technical experience, or how you can work with him.'}])
  const suggestions=useMemo(()=>['What does George build?','Show me his AI work','What is his technical stack?','I want to hire George'],[])

  async function submit(value=question){
    const clean=value.trim(); if(!clean||loading)return
    setQuestion(''); setLoading(true)
    const userId=Date.now(); setMessages(prev=>[...prev,{id:userId,role:'user',text:clean}])
    const result=await remoteAnswer(clean) ?? localAnswer(clean)
    setMessages(prev=>[...prev,{id:userId+1,role:'assistant',text:result.text,sources:result.sources}])
    setLoading(false)
  }

  function onSubmit(e:FormEvent){e.preventDefault();void submit()}

  const card=<div className={`assistant-card ${fullPage?'assistant-card-full':''}`}>
    <div className="assistant-header"><span className="assistant-icon"><Sparkles size={18}/></span><div><strong>Chat with George’s portfolio</strong><small>Portfolio-guided answers · no invented credentials</small></div>{!fullPage&&<button className="icon-btn assistant-close" onClick={()=>setOpen(false)} aria-label="Close assistant"><X size={17}/></button>}</div>
    <div className="assistant-messages" aria-live="polite">
      {messages.map(message=><div className={`assistant-message ${message.role}`} key={message.id}><span className="message-avatar">{message.role==='assistant'?<Sparkles size={14}/>:<UserRound size={14}/>}</span><div><p>{message.text}</p>{message.sources?.length?<div className="assistant-sources">{message.sources.map(source=>source.to.startsWith('http')?<a key={source.label} href={source.to} target="_blank" rel="noreferrer">{source.label}<ExternalLink size={12}/></a>:<Link key={source.label} to={source.to}>{source.label}<ExternalLink size={12}/></Link>)}</div>:null}</div></div>)}
      {loading&&<div className="assistant-message assistant"><span className="message-avatar"><Sparkles size={14}/></span><div><p className="typing"><i></i><i></i><i></i></p></div></div>}
    </div>
    <div className="quick-prompts">{suggestions.map(item=><button key={item} onClick={()=>void submit(item)}>{item}</button>)}</div>
    <form className="assistant-input" onSubmit={onSubmit}><input aria-label="Ask the portfolio assistant" value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Ask me about George..."/><button type="submit" aria-label="Send question" disabled={loading||!question.trim()}><Send size={17}/></button></form>
    <small className="assistant-disclaimer">Built from verified portfolio information. When the portfolio does not support an answer, the assistant says so.</small>
  </div>

  if(fullPage) return <section className="section"><div className="container assistant-page"><div className="assistant-page-intro"><p className="eyebrow">GET TO KNOW GEORGE</p><h1>Have a question?</h1><p className="lead">Ask about George’s projects, engineering experience, AI work, services or how to start a conversation. The assistant stays grounded in the portfolio.</p></div>{card}</div></section>
  return <section className="section section-alt"><div className="container assistant-grid"><div><p className="eyebrow">A QUICK CONVERSATION</p><h2>Get to know the work.</h2><p className="lead">Ask the portfolio about George’s projects, technical experience, AI work or ways to collaborate.</p><div className="assistant-stats"><span><b>{projects.length}</b> project records</span><span><b>{services.length}</b> service areas</span><span><b>{skills.length}</b> skill groups</span></div><Link className="text-link" to="/ai-assistant">Open full conversation <ExternalLink size={14}/></Link></div>{open?card:<button className="assistant-launch" onClick={()=>setOpen(true)}><Sparkles size={18}/><span>Start a conversation</span></button>}</div></section>
}
