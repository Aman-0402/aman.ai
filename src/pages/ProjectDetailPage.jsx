import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PageLayout from '@components/layout/PageLayout'
import projects from '@data/projects.json'
import { assetUrl } from '@utils/assetUrl'

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

        {project.thumbnail && (
          <img
            src={assetUrl(project.thumbnail)}
            alt={project.title}
            className="w-full rounded-xl mb-6 object-cover max-h-72"
          />
        )}

        <div className="prose prose-sm max-w-none text-text-secondary mb-6 [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:text-lg [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:font-semibold [&_h3]:text-text-primary [&_h3]:mt-4 [&_h3]:mb-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-text-secondary [&_p]:mb-3">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.longDesc}</ReactMarkdown>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <h2 className="font-display font-semibold text-text-primary text-lg mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={assetUrl(img)}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full rounded-lg object-cover border border-bg-border"
                />
              ))}
            </div>
          </div>
        )}

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
