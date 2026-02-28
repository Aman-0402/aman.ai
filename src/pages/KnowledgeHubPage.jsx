import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ExternalLink, Star, Search, X } from 'lucide-react'
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

  const categories = toolsData?.categories || []
  const defaultCategory = paramCategory || categories[0]?.id || 'ai-llm-tools'

  const [activeCategory, setActiveCategory] = useState(defaultCategory)
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    pricing: [],
    rating: null,
    featured: false,
  })

  const current = categories.find((c) => c.id === activeCategory)

  // Filter tools based on search and active filters
  const filteredTools = useMemo(() => {
    if (!current) return []

    return current.tools.filter((tool) => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const matchesName = tool.name.toLowerCase().includes(query)
        const matchesDescription = tool.description.toLowerCase().includes(query)
        const matchesTags = tool.tags?.some((tag) =>
          tag.toLowerCase().includes(query)
        )
        if (!matchesName && !matchesDescription && !matchesTags) return false
      }

      // Pricing filter
      if (filters.pricing.length > 0 && !filters.pricing.includes(tool.pricing)) {
        return false
      }

      // Rating filter
      if (filters.rating && tool.rating < filters.rating) {
        return false
      }

      // Featured filter
      if (filters.featured && !tool.featured) {
        return false
      }

      return true
    })
  }, [current, searchQuery, filters])

  const handleCategoryChange = (id) => {
    setActiveCategory(id)
    setSearchQuery('')
    setFilters({ pricing: [], rating: null, featured: false })
    navigate(`/knowledge-hub/${id}`, { replace: true })
  }

  const togglePricingFilter = (pricing) => {
    setFilters((prev) => ({
      ...prev,
      pricing: prev.pricing.includes(pricing)
        ? prev.pricing.filter((p) => p !== pricing)
        : [...prev.pricing, pricing],
    }))
  }

  const resetFilters = () => {
    setSearchQuery('')
    setFilters({ pricing: [], rating: null, featured: false })
  }

  const hasActiveFilters =
    searchQuery.trim() ||
    filters.pricing.length > 0 ||
    filters.rating ||
    filters.featured

  return (
    <PageLayout
      title="Knowledge Hub"
      description="Curated directory of the best AI tools, UI/UX tools, frontend, backend, design, and learning platforms — handpicked by Aman Raj."
      path="/knowledge-hub"
    >
      <section className="section-container section-padding">
        <h1 className="font-display font-bold text-display-md text-text-primary mb-2">
          Knowledge Hub
        </h1>
        <p className="text-text-secondary mb-8">
          Handpicked tools and resources across design, development, AI, and learning.
        </p>

        {/* Search Bar */}
        <div className="flex items-center gap-2 mb-8 px-4 py-3 rounded-2xl bg-bg-surface border border-bg-border focus-within:border-brand-primary/30 transition-colors">
          <Search size={18} className="text-text-muted flex-shrink-0" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-text-primary placeholder-text-muted text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-text-muted hover:text-text-primary transition-colors flex-shrink-0"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-3 items-center">
          <div className="flex gap-2">
            {['free', 'freemium', 'paid'].map((pricing) => (
              <button
                key={pricing}
                onClick={() => togglePricingFilter(pricing)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 capitalize ${
                  filters.pricing.includes(pricing)
                    ? `${PRICING_COLORS[pricing]} bg-opacity-20`
                    : 'border-bg-border text-text-secondary bg-transparent hover:border-brand-primary/20'
                }`}
              >
                {pricing}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                rating: prev.rating === 5 ? null : 5,
              }))
            }
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 flex items-center gap-1 ${
              filters.rating === 5
                ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                : 'border-bg-border text-text-secondary bg-transparent hover:border-brand-primary/20'
            }`}
          >
            <Star size={12} className="fill-current" />
            5 stars
          </button>

          <button
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                featured: !prev.featured,
              }))
            }
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
              filters.featured
                ? 'bg-brand-primary/10 text-brand-primary border-brand-primary/30'
                : 'border-bg-border text-text-secondary bg-transparent hover:border-brand-primary/20'
            }`}
          >
            ⭐ Featured
          </button>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="ml-auto px-3 py-1.5 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary border border-bg-border hover:border-brand-primary/20 transition-all"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Category tabs — wraps on mobile, single row with visible scroll on desktop */}
        <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto gap-2 pb-2 mb-2">
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

        {/* Category description */}
        {current && (
          <p className="text-xs text-text-muted mb-6 italic">
            {current.description}
          </p>
        )}

        {/* Results count */}
        {hasActiveFilters && current && (
          <p className="text-xs text-text-secondary mb-4">
            Showing {filteredTools.length} of {current.tools.length} tools
          </p>
        )}

        {/* Tools grid */}
        {current && (
          <>
            {filteredTools.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredTools.map((tool) => (
                  <a
                    key={tool.id}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col rounded-2xl border bg-bg-surface p-5 hover:border-brand-primary/30 hover:-translate-y-2 transition-all duration-300 ${
                      tool.featured
                        ? 'border-brand-primary/20 ring-1 ring-brand-primary/10'
                        : 'border-bg-border'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="h-10 w-10 rounded-xl bg-bg-elevated border border-bg-border flex items-center justify-center text-lg flex-shrink-0">
                        {tool.emoji || '🔧'}
                      </div>
                      <div className="flex items-center gap-2">
                        {tool.featured && (
                          <span className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-md font-semibold">
                            Featured
                          </span>
                        )}
                        <ExternalLink
                          size={14}
                          className="text-text-muted group-hover:text-brand-primary transition-colors flex-shrink-0"
                        />
                      </div>
                    </div>

                    <h3 className="font-semibold text-text-primary mb-1 text-sm leading-snug">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-text-secondary mb-3 flex-1 leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Tags */}
                    {tool.tags && tool.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {tool.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-bg-elevated text-text-muted px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {tool.tags.length > 3 && (
                          <span className="text-xs text-text-muted px-2 py-0.5">
                            +{tool.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-bg-border">
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
                            size={12}
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
            ) : (
              <div className="text-center py-12">
                <p className="text-text-secondary mb-2">No tools found matching your filters.</p>
                <button
                  onClick={resetFilters}
                  className="text-sm text-brand-primary hover:text-brand-primary/80 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </PageLayout>
  )
}
