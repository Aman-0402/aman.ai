import { useState, useMemo } from 'react'
import PageLayout from '@components/layout/PageLayout'
import projects from '@data/projects.json'

const ALL_CATEGORY = 'All'

export default function ProjectsPage() {
  const categories = useMemo(() => {
    const cats = projects.flatMap((p) => p.categories)
    return [ALL_CATEGORY, ...Array.from(new Set(cats))]
  }, [])

  const [active, setActive] = useState(ALL_CATEGORY)

  const filtered = useMemo(
    () =>
      active === ALL_CATEGORY
        ? projects
        : projects.filter((p) => p.categories.includes(active)),
    [active]
  )

  return (
    <PageLayout
      title="Projects"
      description="Explore Aman Raj's portfolio of web development, AI/ML, MERN stack and Python projects."
      path="/projects"
    >
      <section className="section-container section-padding">
        <h1 className="font-display font-bold text-display-md text-text-primary mb-2">
          Projects
        </h1>
        <p className="text-text-secondary mb-10">
          {projects.length} projects across web, AI/ML, and more.
        </p>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`tag ${active === cat ? 'tag-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid — cards will be a proper component later */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-bg-border bg-bg-surface p-6 hover:border-brand-primary/30 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
