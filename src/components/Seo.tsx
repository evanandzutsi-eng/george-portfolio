import {useEffect} from 'react'
import {site} from '../data/site'

export function Seo({title,description}: {title?: string; description?: string}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.title}`
    const desc = description ?? site.description
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`
    document.title = fullTitle

    const setMeta = (selector: string, attrs: Record<string,string>) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null
      if (!el) { el = document.createElement('meta'); document.head.appendChild(el) }
      Object.entries(attrs).forEach(([key,value]) => el!.setAttribute(key,value))
    }
    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
      if (!el) { el = document.createElement('link'); el.rel = rel; document.head.appendChild(el) }
      el.href = href
    }

    setMeta('meta[name="description"]', {name:'description', content:desc})
    setMeta('meta[property="og:title"]', {property:'og:title', content:fullTitle})
    setMeta('meta[property="og:description"]', {property:'og:description', content:desc})
    setMeta('meta[property="og:url"]', {property:'og:url', content:canonicalUrl})
    setMeta('meta[name="twitter:title"]', {name:'twitter:title', content:fullTitle})
    setMeta('meta[name="twitter:description"]', {name:'twitter:description', content:desc})
    setMeta('meta[name="robots"]', {name:'robots', content:'index,follow,max-image-preview:large'})
    setLink('canonical', canonicalUrl)

    const structuredData = {
      '@context':'https://schema.org',
      '@graph':[
        {
          '@type':'Person',
          '@id':`${window.location.origin}/#person`,
          name:site.name,
          jobTitle:site.title,
          description:site.description,
          email:`mailto:${site.email}`,
          url:window.location.origin,
          image:`${window.location.origin}${site.profileImage.webp}`,
          sameAs:[site.github,site.linkedin].filter(Boolean),
          knowsAbout:['Artificial Intelligence','LLM Integration','Software Engineering','Web Development','React.js','TypeScript','Python','REST APIs','Workflow Automation','AI-assisted Development']
        },
        {
          '@type':'WebSite',
          '@id':`${window.location.origin}/#website`,
          name:site.name,
          url:window.location.origin,
          description:site.description,
          publisher:{'@id':`${window.location.origin}/#person`}
        }
      ]
    }
    let script = document.head.querySelector('script[data-portfolio-schema]') as HTMLScriptElement | null
    if (!script) { script = document.createElement('script'); script.type='application/ld+json'; script.dataset.portfolioSchema='true'; document.head.appendChild(script) }
    script.textContent = JSON.stringify(structuredData)

    return () => { document.title = `${site.name} | ${site.title}` }
  },[title,description])
  return null
}
