import {ExternalLink, Github, ShieldCheck} from 'lucide-react'
import {projects} from '../data/site'

export function ProjectEvidence({project}:{project:typeof projects[number]}){
  return <div className="evidence-panel">
    <div className="evidence-head">
      <div><p className="eyebrow">PROJECT EVIDENCE</p><h3>{project.evidence}</h3></div>
      <ShieldCheck size={20}/>
    </div>
    <p className="evidence-role"><strong>George's contribution:</strong> {project.role}</p>
    <div className="proof-grid">{project.proof.map((item,i)=><div className="proof-item" key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p></div>)}</div>
    <div className="evidence-actions">
      {project.links.live&&<a className="button button-small" href={project.links.live} target="_blank" rel="noreferrer">Open live project <ExternalLink size={15}/></a>}
      {project.links.github&&<a className="button button-small button-ghost" href={project.links.github} target="_blank" rel="noreferrer">View GitHub <Github size={15}/></a>}
    </div>
  </div>
}
