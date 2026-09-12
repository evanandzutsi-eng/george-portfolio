import {useEffect,useState} from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {FloatingContact} from './components/FloatingContact'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Skills} from './pages/Skills'
import {Projects} from './pages/Projects'
import {ProjectDetail} from './pages/ProjectDetail'
import {Services} from './pages/Services'
import {Experience} from './pages/Experience'
import {CaseStudies} from './pages/CaseStudies'
import {Blog} from './pages/Blog'
import {Media} from './pages/Media'
import {Contact} from './pages/Contact'
import {Resume} from './pages/Resume'
import {Privacy} from './pages/Privacy'
import {Terms} from './pages/Terms'
import {Accessibility} from './pages/Accessibility'
import {ProjectIntake} from './pages/ProjectIntake'
import {Seo} from './components/Seo'
import {site} from './data/site'
import {PortfolioAssistant} from './components/PortfolioAssistant'
import {NotFound} from './pages/NotFound'

export default function App(){
 const [dark,setDark]=useState(()=>localStorage.getItem('theme')!=='light')
 const location=useLocation()
 useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('theme',dark?'dark':'light');window.scrollTo({top:0,behavior:'instant' as ScrollBehavior})},[dark,location.pathname])
 const pageTitles:Record<string,string>={'/':'Home','/about':'About','/skills':'Skills','/projects':'Projects','/services':'Services','/experience':'Experience','/case-studies':'Case Studies','/blog':'Blog','/media':'Media','/contact':'Contact','/resume':'Resume','/privacy':'Privacy','/terms':'Terms','/accessibility':'Accessibility','/start-a-project':'Start a Project','/ai-assistant':'AI Portfolio Assistant'}
 return <div className="app-shell"><Seo title={pageTitles[location.pathname] ?? site.title}/><Navbar dark={dark} onToggle={()=>setDark(v=>!v)}/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/skills" element={<Skills/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/services" element={<Services/>}/><Route path="/experience" element={<Experience/>}/><Route path="/case-studies" element={<CaseStudies/>}/><Route path="/blog" element={<Blog/>}/><Route path="/media" element={<Media/>}/><Route path="/contact" element={<Contact/>}/><Route path="/resume" element={<Resume/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/terms" element={<Terms/>}/><Route path="/accessibility" element={<Accessibility/>}/><Route path="/start-a-project" element={<ProjectIntake/>}/><Route path="/ai-assistant" element={<PortfolioAssistant fullPage/>}/><Route path="*" element={<NotFound/>}/></Routes></main><FloatingContact/><Footer/></div>
}
