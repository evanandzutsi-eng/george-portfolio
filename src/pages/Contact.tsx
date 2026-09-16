import { FormEvent, useState } from 'react';
import { ArrowUpRight, Mail, Phone, MessageCircle, Send, CalendarDays } from 'lucide-react';
import { site, isPlaceholder, socialLinks } from '../data/site';
import { PageHero } from '../components/Section';

const WHATSAPP_URL = 'https://wa.me/2348100362060';

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio project inquiry — ${data.get('name') || 'New enquiry'}`);
    const body = encodeURIComponent([`Name: ${data.get('name') || ''}`,`Email: ${data.get('email') || ''}`,`Company: ${data.get('company') || ''}`,`Project type: ${data.get('type') || ''}`,`Budget: ${data.get('budget') || ''}`,`Timeline: ${data.get('timeline') || ''}`,'',`Project description: ${data.get('description') || ''}`].join('\n'));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`; setSent(true);
  };
  return <>
    <PageHero eyebrow="CONTACT" title="Let's build something intelligent." description="Have an idea, technical challenge, automation opportunity or software project? Tell me what you are building and let's explore how I can help." />
    <section className="section"><div className="container contact-grid"><div><p className="eyebrow">DIRECT CONTACT</p><h2>Choose your preferred channel.</h2><div className="contact-list">
      <a href={`mailto:${site.email}`}><Mail size={19}/><span><b>Email</b><small>{site.email}</small></span></a>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={19}/><span><b>WhatsApp</b><small>+234 810 036 2060 · Direct conversation</small></span></a>
      <a href={`tel:${site.phone.replace(/[^+\d]/g,'')}`}><Phone size={19}/><span><b>Phone</b><small>{site.phone}</small></span></a>
      <a href={isPlaceholder(site.telegram)?'#':site.telegram}><Send size={19}/><span><b>Telegram</b><small>Direct message</small></span></a>
      <a href={isPlaceholder(site.booking)?'#':site.booking}><CalendarDays size={19}/><span><b>Book a Call</b><small>Schedule a conversation</small></span></a>
    </div><div className="contact-social-row">{socialLinks.filter(x=>['linkedin','github','x'].includes(x.key)).map(x=><a className="text-link" key={x.key} href={x.url} target="_blank" rel="noreferrer">{x.label} <ArrowUpRight size={14}/></a>)}</div></div>
    <div className="form-card"><p className="eyebrow">PROJECT INTAKE</p><p className="small intake-linkline">Prefer a guided brief? <a className="text-link" href="/start-a-project">Start a Project <ArrowUpRight size={13}/></a></p>{sent?<div className="success"><h2>Your email draft is ready.</h2><p>Your default email client should open with the project brief addressed to George.</p><button className="button button-ghost" onClick={()=>setSent(false)}>Send another</button></div>:<form onSubmit={submit}>
      <div className="form-row"><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@company.com"/></label></div>
      <div className="form-row"><label>Company<input name="company" placeholder="Company / startup"/></label><label>Project Type<select name="type"><option>AI Engineering</option><option>Full-Stack Development</option><option>AI Automation</option><option>API / Backend</option><option>Technical Consulting</option><option>Other</option></select></label></div>
      <div className="form-row"><label>Budget Range<select name="budget"><option>Not sure yet</option><option>Under $1,000</option><option>$1,000 — $5,000</option><option>$5,000 — $10,000</option><option>$10,000+</option></select></label><label>Timeline<select name="timeline"><option>Flexible</option><option>ASAP</option><option>1–4 weeks</option><option>1–3 months</option><option>3+ months</option></select></label></div>
      <label>Project Description<textarea required name="description" rows={6} placeholder="What are you building? What problem are you trying to solve?"/></label><button className="button" type="submit">Send Message <ArrowUpRight size={16}/></button>
    </form>}</div></div></section>
  </>
}
