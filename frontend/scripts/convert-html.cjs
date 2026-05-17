const fs = require('fs')

function convertStyle(s) {
  const props = s
    .split(';')
    .filter(Boolean)
    .map((p) => {
      const idx = p.indexOf(':')
      const k = p.slice(0, idx).trim()
      const v = p.slice(idx + 1).trim()
      if (k.startsWith('--')) {
        return `'${k}': '${v}'`
      }
      const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      return `${camel}: '${v}'`
    })
  return `style={{ ${props.join(', ')} }}`
}

function htmlToJsx(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\bclass=/g, 'className=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/style="([^"]+)"/g, (_, s) => convertStyle(s))
}

function indent(text, spaces) {
  const pad = ' '.repeat(spaces)
  return text
    .split('\n')
    .map((line) => (line.trim() ? pad + line : line))
    .join('\n')
}

const html = fs.readFileSync(
  'C:/Users/9421309441/Desktop/plan2automate/landing-source.html',
  'utf8',
)

const sections = {
  Hero: /<!-- HERO -->([\s\S]*?)<!-- WORKFLOW/,
  Workflow: /<!-- WORKFLOW ANIMATION -->([\s\S]*?)<!-- PROBLEMS/,
  Problems: /<!-- PROBLEMS -->([\s\S]*?)<!-- FEATURES/,
  Features: /<!-- FEATURES -->([\s\S]*?)<!-- DASHBOARD/,
  HowWorks: /<!-- HOW IT WORKS -->([\s\S]*?)<!-- WHY CHOOSE/,
  WhySection: /<!-- WHY CHOOSE -->([\s\S]*?)<!-- FUTURE VISION/,
  VisionSection: /<!-- FUTURE VISION -->([\s\S]*?)<!-- FINAL CTA/,
  FinalCta: /<!-- FINAL CTA -->([\s\S]*?)<!-- FOOTER/,
  Footer: /<!-- FOOTER -->([\s\S]*?)<script>/,
}

const outDir = 'C:/Users/9421309441/Desktop/plan2automate/frontend/src/components'

for (const [name, re] of Object.entries(sections)) {
  const m = html.match(re)
  if (!m) {
    console.log('MISSING', name)
    continue
  }
  const jsx = htmlToJsx(m[1].trim())
  const content = `export default function ${name}() {\n  return (\n${indent(jsx, 4)}\n  )\n}\n`
  fs.writeFileSync(`${outDir}/${name}.jsx`, content)
  console.log('Wrote', name)
}

// Dashboard with useState
const dashMatch = html.match(
  /<!-- DASHBOARD SCREENSHOTS -->([\s\S]*?)<!-- HOW IT WORKS/,
)
if (dashMatch) {
  let body = htmlToJsx(dashMatch[1].trim())
  body = body.replace(
    /<div className="dash-tabs">[\s\S]*?<\/motion.div>\s*\n\s*<div className="dash-screens">/,
    'DASH_TABS\n      <div className="dash-screens">',
  )
  // fix wrong replacement - tabs end with </motion.div> should be </div>
  body = body.replace(
    /<div className="dash-tabs">[\s\S]*?<\/div>\s*\n\s*<motion.div className="dash-screens">/,
    'DASH_TABS\n      <div className="dash-screens">',
  )
  body = body.replace(
    /<motion.div className="dash-tabs">[\s\S]*?<button[\s\S]*?<\/button>\s*<\/motion.div>/,
    'DASH_TABS',
  )
  body = body.replace(
    /<div className="dash-tabs">[\s\S]*?<button className="dash-tab active" data-tab="contractor">Contractor View<\/button>[\s\S]*?<button className="dash-tab" data-tab="client">Client Report<\/button>\s*<\/div>/,
    'DASH_TABS',
  )

  const tabsJsx = `      <div className="dash-tabs">
        <button type="button" className={\`dash-tab\${activeTab === 'contractor' ? ' active' : ''}\`} onClick={() => setActiveTab('contractor')}>Contractor View</button>
        <button type="button" className={\`dash-tab\${activeTab === 'timeline' ? ' active' : ''}\`} onClick={() => setActiveTab('timeline')}>Project Timeline</button>
        <button type="button" className={\`dash-tab\${activeTab === 'ai' ? ' active' : ''}\`} onClick={() => setActiveTab('ai')}>AI Task Engine</button>
        <button type="button" className={\`dash-tab\${activeTab === 'client' ? ' active' : ''}\`} onClick={() => setActiveTab('client')}>Client Report</button>
      </motion.div>`.replace(/motion\.div/g, 'div')

  body = body.replace(
    /<div className="dash-tabs">[\s\S]*?<\/div>/,
    tabsJsx,
  )

  body = body
    .replace(
      'className="dash-screen active" id="tab-contractor"',
      "className={`dash-screen${activeTab === 'contractor' ? ' active' : ''}`} id=\"tab-contractor\"",
    )
    .replace(
      'className="dash-screen" id="tab-timeline"',
      "className={`dash-screen${activeTab === 'timeline' ? ' active' : ''}`} id=\"tab-timeline\"",
    )
    .replace(
      'className="dash-screen" id="tab-ai"',
      "className={`dash-screen${activeTab === 'ai' ? ' active' : ''}`} id=\"tab-ai\"",
    )
    .replace(
      'className="dash-screen" id="tab-client"',
      "className={`dash-screen${activeTab === 'client' ? ' active' : ''}`} id=\"tab-client\"",
    )

  const dashContent = `import { useState } from 'react'

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState('contractor')

  return (
${indent(body, 4)}
  )
}
`
  fs.writeFileSync(`${outDir}/DashboardSection.jsx`, dashContent)
  console.log('Wrote DashboardSection')
}
