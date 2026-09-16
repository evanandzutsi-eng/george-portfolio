import {Download,ArrowUpRight,FileText} from 'lucide-react';
import {Link} from 'react-router-dom';
import {site,skills,experience,education,projects,careerInterests} from '../data/site';
import {PageHero} from '../components/Section';

export function Resume(){return <>
 <PageHero eyebrow="OFFICIAL RESUME" title="George Owulama Andzutsi" description={`${site.currentRole} · ${site.location} · ${site.remote}`} />
 <section className="section"><div className="container resume">
  <div className="resume-top"><div><p className="eyebrow">PROFESSIONAL SUMMARY</p><p className="lead">{site.professionalSummary}</p></div><a href={site.cv} download className="button"><Download size={17}/> Download Official Resume</a></div>
  <div className="resume-section"><h2>Professional Profile</h2><div className="resume-item"><span>NOW</span><div><h3>{site.currentRole}</h3><p>{site.location} · {site.availability}</p></div></div></div>
  <div className="resume-section"><h2>Experience</h2>{experience.map(e=><div className="resume-item" key={`${e.period}-${e.role}`}><span>{e.period}</span><div><h3>{e.role}</h3>{e.bullets.map(b=><p key={b}>{b}</p>)}</div></div>)}</div>
  <div className="resume-section"><h2>Selected Projects</h2>{projects.map(p=><div className="resume-item" key={p.slug}><span>{p.category}</span><div><h3>{p.title}</h3><p>{p.description}</p><p className="small"><b>Stack:</b> {p.stack.join(' · ')}</p></div></div>)}</div>
  <div className="resume-section"><h2>AI Engineering & Automation</h2><div className="resume-item"><span>FOCUS</span><div><p>Hands-on AI application work including AI API integration, LLM application development, prompt engineering and refinement, AI-assisted software development, evaluation of AI-generated output, context handling, instruction-adherence testing and ongoing experimentation with agentic AI concepts.</p><p className="small">The resume explicitly distinguishes this practical learning and project work from formal production AI engineering roles.</p></div></div></div>
  <div className="resume-section"><h2>Career Interests</h2><div className="skill-chips">{careerInterests.map(i=><span className="skill-chip" key={i}>{i}</span>)}</div></div>
  <div className="resume-section"><h2>Core Skills</h2><div className="skill-chips">{skills.flatMap(s=>s.items).map(s=><span className="skill-chip" key={s}>{s}</span>)}</div></div>
  <div className="resume-section"><h2>Education</h2>{education.map(e=><div className="resume-item" key={e.institution}><span>{e.period}</span><div><h3>{e.title}</h3><p>{e.institution}</p></div></div>)}</div>
  <div className="resume-section"><h2>Certifications</h2>{site.certifications.map(c=><div className="cert-card" key={c.name}><div><h3>{c.name}</h3><p>{c.issuer}{c.date?` · ${c.date}`:''}</p></div>{c.credentialUrl?<a href={c.credentialUrl} target="_blank" rel="noreferrer" className="text-link">Verify credential <ArrowUpRight size={15}/></a>:<span className="muted small">Credential link not supplied</span>}</div>)}</div>
  <div className="resume-document-note"><FileText size={18}/><div><b>Official resume document</b><p className="small">The downloadable document is maintained separately from this online résumé view.</p></div></div>
  <Link to="/contact" className="button">Discuss an opportunity <ArrowUpRight size={16}/></Link>
 </div></section>
 </>}
