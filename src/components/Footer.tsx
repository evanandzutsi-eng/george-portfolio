import {Link} from 'react-router-dom'
import {ArrowUpRight, Github, Linkedin, Mail, MessageCircle, Send, Phone, Facebook, PlayCircle, UsersRound} from 'lucide-react'
import {site, isPlaceholder, whatsappUrl} from '../data/site'

const connections = [
  {label:'LinkedIn', icon:Linkedin, url:site.linkedin},
  {label:'GitHub', icon:Github, url:site.github},
  {label:'Email', icon:Mail, url:`mailto:${site.email}`},
  {label:'WhatsApp', icon:MessageCircle, url:whatsappUrl()},
  {label:'Telegram', icon:Send, url:site.telegram},
  {label:'Phone', icon:Phone, url:`tel:${site.phone.replace(/[^+\d]/g,'')}`},
  {label:'Facebook', icon:Facebook, url:site.facebook},
  {label:'X', icon:UsersRound, url:site.x},
  {label:'YouTube', icon:PlayCircle, url:site.youtube},
]

export function Footer(){return <footer className="footer"><div className="container"><div className="footer-top"><div><p className="eyebrow">LET'S BUILD IT</p><h2>Have an idea? <span className="text-gradient">Let's build it.</span></h2><p className="footer-copy">AI, software, automation and product engineering for problems worth solving.</p></div><Link to="/start-a-project" className="button">Start a Project <ArrowUpRight size={17}/></Link></div><div className="footer-grid"><div><Link to="/" className="brand"><span className="brand-mark">GA</span><span>George<span className="muted">.dev</span></span></Link><p className="small">{site.title}<br/>{site.positioning}<br/>{site.remote}</p></div><div><p className="footer-label">Explore</p><Link to="/about">About</Link><Link to="/projects">Projects</Link><Link to="/services">Services</Link><Link to="/case-studies">Case Studies</Link><Link to="/resume">Resume</Link></div><div><p className="footer-label">Connect</p>{connections.map(({label,icon:Icon,url})=>{const disabled=isPlaceholder(url)||url==='#';return disabled?<span className="footer-connect-disabled" key={label}><Icon size={15}/> {label}</span>:<a key={label} href={url} target={url.startsWith('http')?'_blank':undefined} rel="noreferrer"><Icon size={15}/> {label}</a>})}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} George Owulama Andzutsi. All rights reserved.</span><span className="footer-legal"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/accessibility">Accessibility</Link></span></div></div></footer>}
