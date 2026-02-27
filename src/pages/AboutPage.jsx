import PageLayout from '@components/layout/PageLayout'
import About from '@components/sections/About/About'

export default function AboutPage() {
  return (
    <PageLayout
      title="About"
      description="Learn about Aman Raj — Full-Stack MERN Developer, AI/ML Engineer, Python Expert, and Technical Trainer with 5+ years of experience building intelligent web products."
      path="/about"
    >
      <About />
    </PageLayout>
  )
}
