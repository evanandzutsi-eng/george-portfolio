import {ArrowDown, Boxes, Database, Globe, BrainCircuit, ServerCog, Workflow} from 'lucide-react'

const nodes = [
  {name:'User', icon:Globe},
  {name:'Frontend', icon:Boxes},
  {name:'API', icon:ServerCog},
  {name:'Backend', icon:ServerCog},
  {name:'AI / LLM', icon:BrainCircuit},
  {name:'Database', icon:Database},
  {name:'Integrations', icon:Workflow},
]

export function Architecture(){
  return (
    <div className="architecture" aria-label="Illustrative software architecture flow">
      {nodes.map((node,index) => {
        const Icon = node.icon
        return (
          <div className="architecture-step" key={node.name}>
            <div className="arch-node">
              <span>{String(index + 1).padStart(2,'0')}</span>
              <Icon size={16} aria-hidden="true" />
              <strong>{node.name}</strong>
            </div>
            {index < nodes.length - 1 && (
              <div className="architecture-connector" aria-hidden="true">
                <ArrowDown size={15} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
