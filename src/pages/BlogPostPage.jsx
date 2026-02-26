import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import PageLayout from '@components/layout/PageLayout'
import { formatDate } from '@utils/formatDate'

// Blog posts are loaded from markdown files.
// This is a stub — full markdown parsing will be wired in the blog sprint.
// For now it shows a 404-style redirect until posts exist.

export default function BlogPostPage() {
  const { slug } = useParams()

  // TODO: load post from /src/data/blog/${slug}.md using gray-matter
  const post = null

  if (!post) {
    return (
      <PageLayout
        title="Post Not Found"
        path={`/blog/${slug}`}
      >
        <div className="section-container section-padding text-center">
          <h1 className="font-display font-bold text-display-md text-text-primary mb-4">
            Post not found
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-primary hover:underline"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout
      title={post.title}
      description={post.excerpt}
      path={`/blog/${slug}`}
      image={post.coverImage}
    >
      <article className="section-container section-padding max-w-prose-lg mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={13} /> {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {post.readTime} min read
            </span>
          </div>
          <h1 className="font-display font-bold text-display-md text-text-primary mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-text-secondary">{post.excerpt}</p>
        </header>

        {/* Rendered markdown will go here */}
        <div className="prose prose-dark max-w-none">
          <p className="text-text-secondary">Content loading...</p>
        </div>
      </article>
    </PageLayout>
  )
}
