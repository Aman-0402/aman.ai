import PageLayout from '@components/layout/PageLayout'

export default function BlogPage() {
  return (
    <PageLayout
      title="Blog"
      description="Technical articles, tutorials and insights on Web Development, AI/ML, Python, MERN Stack, and software engineering by Aman Raj."
      path="/blog"
    >
      <section className="section-container section-padding">
        <h1 className="font-display font-bold text-display-md text-text-primary mb-2">
          Blog
        </h1>
        <p className="text-text-secondary">
          Technical articles and tutorials — coming soon.
        </p>
      </section>
    </PageLayout>
  )
}
