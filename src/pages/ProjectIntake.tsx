import { FormEvent, useState } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site, isPlaceholder } from '../data/site';
import { PageHero } from '../components/Section';

export function ProjectIntake(){
  const [submitted,setSubmitted]=useState(false);
  const submit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const rows=[
      `Name: ${data.get('name')||''}`,
      `Email: ${data.get('email')||''}`,
      `Company: ${data.get('company')||''}`,
      `What are you building?: ${data.get('project')||''}`,
      `Need AI?: ${data.get('ai')||''}`,
      `Existing application?: ${data.get('existing')||''}`,
      `Timeline: ${data.get('timeline')||''}`,
      `Budget: ${data.get('budget')||''}`,
      `Preferred contact: ${data.get('contact')||''}`,
      '',
      `Details: ${data.get('details')||''}`,
    ].join('\n');
    if(!isPlaceholder(site.contactEndpoint)){
      fetch(site.contactEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(data.entries()))}).catch(()=>{});
      setSubmitted(true); return;
    }
    const subject=encodeURIComponent(`Project inquiry — ${data.get('name')||'New enquiry'}`);
    window.location.href=`mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(rows)}`;
    setSubmitted(true);
  };
  return <>
    <PageHero eyebrow="START A PROJECT" title="Let's turn the idea into a clear technical plan." description="A short intake helps me understand what you are building, where you are starting from, and what kind of engineering support you need."/>
    <section className="section"><div className="container intake-layout">
      <aside className="intake-aside">
        <Link className="back-link" to="/contact"><ArrowLeft size={14}/> Back to contact</Link>
        <p className="eyebrow">WHAT HAPPENS NEXT</p>
        <h2>Clarity before code.</h2>
        <div className="intake-steps">
          {['Review the brief','Clarify scope and priorities','Recommend an appropriate technical approach','Agree on the next step'].map((x,i)=><div className="intake-step" key={x}><span>0{i+1}</span><p>{x}</p></div>)}
        </div>
        <p className="small">No commitment is created by submitting this form. The information is used to understand the project and determine the most useful next conversation.</p>
      </aside>
      <div className="form-card">
        {submitted ? <div className="success"><CheckCircle2 size={30}/><h2>Brief received.</h2><p>Your inquiry has been prepared for George. If you used the email fallback, your mail application should contain the project brief.</p><div className="hero-actions"><Link className="button" to="/projects">View Projects <ArrowUpRight size={16}/></Link><Link className="button button-ghost" to="/contact">Contact Page</Link></div></div> : <form onSubmit={submit}>
          <div className="form-row"><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@company.com"/></label></div>
          <div className="form-row"><label>Company / Organisation<input name="company" placeholder="Optional"/></label><label>What are you building?<select required name="project"><option value="">Select one</option><option>Web application</option><option>AI-powered application</option><option>Automation workflow</option><option>API / integration</option><option>Existing product improvement</option><option>Other</option></select></label></div>
          <div className="form-row"><label>Do you need AI?<select name="ai"><option>Not sure yet</option><option>Yes</option><option>No</option></select></label><label>Do you already have an application?<select name="existing"><option>No — starting from an idea</option><option>Yes — needs improvement</option><option>Yes — needs integration</option></select></label></div>
          <div className="form-row"><label>Timeline<select name="timeline"><option>Flexible</option><option>ASAP</option><option>1–4 weeks</option><option>1–3 months</option><option>3+ months</option></select></label><label>Approximate budget<select name="budget"><option>Not sure yet</option><option>Under $1,000</option><option>$1,000 — $5,000</option><option>$5,000 — $10,000</option><option>$10,000+</option></select></label></div>
          <label>Preferred contact method<select name="contact"><option>Email</option><option>WhatsApp</option><option>Phone</option><option>Telegram</option><option>LinkedIn</option></select></label>
          <label>Tell me about the problem, goal or current situation<textarea required name="details" rows={8} placeholder="What problem are you trying to solve? What would a successful outcome look like?"/></label>
          <button className="button" type="submit">Submit Project Brief <ArrowUpRight size={16}/></button>
        </form>}
      </div>
    </div></section>
  </>;
}
