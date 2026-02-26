import PageLayout from '@components/layout/PageLayout'
import services from '@data/services.json'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <PageLayout
      title="Services"
      description="Hire Aman Raj for Full-Stack Web Development, AI/ML Engineering, MERN Stack projects, Python development, and Technical Training."
      path="/services"
    >
      <section className="section-container section-padding">
        <div className="text-center mb-14">
          <h1 className="font-display font-bold text-display-md text-text-primary mb-3">
            Services
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            From concept to deployment — I help founders, startups, and enterprises build
            intelligent digital products.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="gradient-border rounded-2xl bg-bg-surface p-8 flex flex-col"
            >
              <div className="mb-5 text-3xl">{svc.icon}</div>
              <h3 className="font-display font-bold text-text-primary mb-2">
                {svc.title}
              </h3>
              <p className="text-sm text-text-secondary mb-6 flex-1">
                {svc.description}
              </p>

              <ul className="space-y-2 mb-8">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle2 size={15} className="text-brand-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to={`/contact?service=${svc.slug}`}
                className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
              >
                {svc.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
