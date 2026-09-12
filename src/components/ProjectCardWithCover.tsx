import {ArrowUpRight, Github, ExternalLink} from 'lucide-react'
import {Link} from 'react-router-dom'
import {projects} from '../data/site'
import {ProjectCover} from './ProjectCover'
import './project-cover.css'

export function ProjectCardWithCover({project}:{project:typeof projects[number]}){
  return <article className="project-card">
    <ProjectCover slug={project.slug} title={project.title}/>
    <div className="project-body">
      <div className="tag-row">{project.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="stack-row">{project.stack.map(s=><span key={s}>{s}</span>)}</div>
      <div className="card-actions">
        <Link to={`/projects/${project.slug}`} className="text-link">Case Study <ArrowUpRight size={15}/></Link>
        {project.links.github&&project.links.github!=='#'&&<a className="icon-link" href={project.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>}
        {project.links.live&&project.links.live!=='#'&&<a className="icon-link" href={project.links.live} target="_blank" rel="noreferrer" aria-label="Live demo"><ExternalLink size={18}/></a>}
      </div>
    </div>
  </article>
}
