import {Link} from 'react-router-dom'
import {ArrowLeft, Home} from 'lucide-react'
import {PageHero} from '../components/Section'

export function NotFound(){
  return <>
    <PageHero eyebrow="404" title="This page doesn't exist." description="The address may be outdated or the page may have moved. Use the navigation below to continue exploring George's portfolio."/>
    <section className="section"><div className="container"><div className="card-actions"><Link className="button primary" to="/"><Home size={17}/> Back Home</Link><Link className="button secondary" to="/projects"><ArrowLeft size={17}/> View Projects</Link></div></div></section>
  </>
}
