import PageLayout from '@components/layout/PageLayout'

// Sections — each will be built out in subsequent sprints
// import HeroSection       from '@components/sections/Hero/Hero'
// import AboutSection      from '@components/sections/About/About'
// import ProjectsSection   from '@components/sections/Projects/Projects'
// import KnowledgeHub      from '@components/sections/KnowledgeHub/KnowledgeHub'
// import EbooksSection     from '@components/sections/Ebooks/Ebooks'
// import BlogSection       from '@components/sections/Blog/Blog'
// import ServicesSection   from '@components/sections/Services/Services'
// import ContactSection    from '@components/sections/Contact/Contact'

export default function HomePage() {
  return (
    <PageLayout
      path="/"
      withTopPadding={false}
    >
      {/* Sections will be uncommented as they are built */}
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      {/* <ProjectsSection /> */}
      {/* <KnowledgeHub /> */}
      {/* <EbooksSection /> */}
      {/* <BlogSection /> */}
      {/* <ServicesSection /> */}
      {/* <ContactSection /> */}

      {/* ── Temporary placeholder ──────────────────────────────────────── */}
      <div className="flex min-h-screen flex-col items-center justify-center section-container text-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-sm text-brand-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
            </span>
            Site under construction — sections coming soon
          </div>
          <h1 className="font-display font-bold text-display-lg text-text-primary">
            Hi, I'm{' '}
            <span className="gradient-text">Aman Raj</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-lg mx-auto">
            Full-Stack Developer · AI/ML Engineer · Technical Trainer
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
