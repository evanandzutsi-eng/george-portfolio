import {useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {Menu, X, Sun, Moon, ArrowUpRight} from 'lucide-react'
import {site,navLinks} from '../data/site'

export function Navbar({dark,onToggle}:{dark:boolean,onToggle:()=>void}){
 const [open,setOpen]=useState(false)
 return <header className="navbar"><div className="container nav-inner">
   <Link to="/" className="brand" onClick={()=>setOpen(false)} aria-label={`${site.name} home`}><span className="brand-mark">GA</span><span>George<span className="muted">.dev</span></span></Link>
   <nav className={open?'nav-links open':'nav-links'} aria-label="Primary navigation">{navLinks.map(([label,path])=><NavLink key={path} to={path} end={path==='/' } onClick={()=>setOpen(false)} className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}</nav>
   <div className="nav-actions"><button className="icon-btn" aria-label={`Switch to ${dark?'light':'dark'} mode`} onClick={onToggle}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button><Link className="button button-small hide-mobile" to="/start-a-project">Hire Me <ArrowUpRight size={15}/></Link><button className="menu-btn" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button></div>
 </div></header>
}
