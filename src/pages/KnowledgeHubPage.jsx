import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ExternalLink, Star } from 'lucide-react'
import PageLayout from '@components/layout/PageLayout'
import toolsData from '@data/tools.json'

const PRICING_COLORS = {
  free:     'bg-green-500/10 text-green-400 border-green-500/20',
  freemium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  paid:     'bg-red-500/10 text-red-400 border-red-500/20',
}

export default function KnowledgeHubPage() {
  const { category: paramCategory } = useParams()
  const navigate = useNavigate()

  const categories = toolsData.categories
  const defaultCategory = paramCategory || categories[0]?.id

  const [activeCategory, setActiveCategory] = useState(defaultCategory)

  const current = categories.find((c) => c.id === activeCategory)

  const handleCategoryChange = (id) => {
    setActiveCategory(id)
    navigate(`/knowledge-hub/${id}`, { replace: true })
  }

  return (
    <PageLayout
      title="Knowledge Hub"
      description="Curated directory of the best AI tools, UI/UX tools, frontend, backend, data science, DevOps and cloud tools — handpicked by Aman Raj."
      path="/knowledge-hub"
    >
      <section className="section-container section-padding">
        <h1 className="font-display font-bold text-display-md text-text-primary mb-2">
          Knowledge Hub
        </h1>
        <p className="text-text-secondary mb-10">
          Handpicked tools and resources across the full development stack.
        </p>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={[
                'flex-shrink-0 flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium border transition-all duration-200',
                activeCategory === cat.id
                  ? 'bg-brand-primary/10 text-brand-primary border-brand-primary/30'
                  : 'border-bg-border text-text-secondary hover:text-text-primary hover:border-brand-primary/20',
              ].join(' ')}
            >
              {cat.label}
              <span className="text-xs text-text-muted">
                {cat.tools.length}
              </span>
            </button>
          ))}
        </div>

        {/* Tools grid */}
        {current && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {current.tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-bg-border bg-bg-surface p-5 hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-xl bg-bg-elevated border border-bg-border flex items-center justify-center text-xl">
                    {tool.emoji || '🔧'}
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-text-muted group-hover:text-brand-primary transition-colors"
                  />
                </div>

                <h3 className="font-semibold text-text-primary mb-1 text-sm">
                  {tool.name}
                </h3>
                <p className="text-xs text-text-secondary mb-3 flex-1 leading-relaxed">
                  {tool.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${
                      PRICING_COLORS[tool.pricing] || PRICING_COLORS.free
                    }`}
                  >
                    {tool.pricing}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className={
                          i < tool.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-bg-border'
                        }
                      />
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </PageLayout>
  )
}
