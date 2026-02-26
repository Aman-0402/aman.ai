import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import PageLayout from '@components/layout/PageLayout'
import projects from '@data/projects.json'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  return (
    <PageLayout
      title={project.title}
      description={project.shortDesc}
      path={`/projects/${project.slug}`}
    >
      <article className="section-container section-padding max-w-prose-lg mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <h1 className="font-display font-bold text-display-md text-text-primary mb-4">
          {project.title}
        </h1>
        <p className="text-text-secondary mb-6">{project.longDesc}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-primary text-white text-sm font-medium hover:bg-brand-dark transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-bg-border text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
            >
              <Github size={14} /> Source Code
            </a>
          )}
        </div>
      </article>
    </PageLayout>
  )
}
