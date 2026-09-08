import {ArrowDown, Boxes, Database, Globe, BrainCircuit, ServerCog, Workflow} from 'lucide-react'

const nodes = [
  {name:'User', icon:Globe}, {name:'Frontend', icon:Boxes}, {name:'API', icon:ServerCog},
  {name:'Backend', icon:ServerCog}, {name:'AI / LLM', icon:BrainCircuit}, {name:'Database', icon:Database}, {name:'Integrations', icon:Workflow}
]

export function Architecture(){
  return <div className="architecture" aria-label="Illustrative software architecture flow">
    {nodes.map((node,i)=>{const Icon=node.icon; return <div className="arch-node" key={node.name}>
      <span>{String(i+1).padStart(2,'0')}</span><Icon size={16}/><strong>{node.name}</strong>{i<nodes.length-1&&<b aria-hidden="true"><ArrowDown size={15}/></b>}
    </div>})}
  </div>
}
