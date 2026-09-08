import {useState} from 'react';import {Mail,Phone,MessageCircle,Send,Linkedin,X} from 'lucide-react';import {site,whatsappUrl,isPlaceholder} from '../data/site'
export function FloatingContact(){
 const [open,setOpen]=useState(false)
 const items=[
  {label:'WhatsApp',icon:MessageCircle,url:whatsappUrl()},
  {label:'Telegram',icon:Send,url:site.telegram},
  {label:'Email',icon:Mail,url:`mailto:${site.email}`},
  {label:'Phone',icon:Phone,url:site.phone},
  {label:'LinkedIn',icon:Linkedin,url:site.linkedin}
 ].filter(i=>i.url!=='#' && !isPlaceholder(i.url))
 return <div className="float-contact"><div className={open?'float-items show':'float-items'}>{items.map(i=><a key={i.label} href={i.url} target={i.url.startsWith('http')?'_blank':undefined} rel="noreferrer" aria-label={i.label} title={i.label}><i.icon size={18}/></a>)}</div><button className="float-main" aria-label={open?'Close contact options':'Open contact options'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<MessageCircle/>}</button></div>
}
