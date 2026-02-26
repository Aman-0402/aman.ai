import PageLayout from '@components/layout/PageLayout'
import resources from '@data/resources.json'
import { Download, ArrowUpRight } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <PageLayout
      title="Resources"
      description="Free developer resources, cheatsheets, templates and tools curated by Aman Raj."
      path="/resources"
    >
      <section className="section-container section-padding">
        <h1 className="font-display font-bold text-display-md text-text-primary mb-2">
          Resources
        </h1>
        <p className="text-text-secondary mb-10">
          Free cheatsheets, templates and starter kits.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((res) => (
            <div
              key={res.id}
              className="flex flex-col rounded-2xl border border-bg-border bg-bg-surface p-6 hover:border-brand-primary/30 transition-all duration-300"
            >
              <span className="tag mb-3 self-start">{res.type}</span>
              <h3 className="font-semibold text-text-primary mb-2">{res.title}</h3>
              <p className="text-sm text-text-secondary mb-5 flex-1">{res.description}</p>

              <a
                href={res.url}
                target={res.isExternal ? '_blank' : undefined}
                rel={res.isExternal ? 'noopener noreferrer' : undefined}
                download={!res.isExternal || undefined}
                className="flex items-center justify-center gap-2 rounded-xl border border-bg-border px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-brand-primary hover:border-brand-primary/40 transition-all"
              >
                {res.isExternal ? (
                  <>View Resource <ArrowUpRight size={13} /></>
                ) : (
                  <>Download <Download size={13} /></>
                )}
              </a>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
