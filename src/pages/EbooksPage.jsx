import PageLayout from '@components/layout/PageLayout'
import ebooks from '@data/ebooks.json'
import { Download, BookOpen } from 'lucide-react'

export default function EbooksPage() {
  return (
    <PageLayout
      title="Free eBooks"
      description="Download free eBooks on Web Development, Python, Machine Learning, AI, and MERN Stack by Aman Raj."
      path="/ebooks"
    >
      <section className="section-container section-padding">
        <h1 className="font-display font-bold text-display-md text-text-primary mb-2">
          Free eBook Library
        </h1>
        <p className="text-text-secondary mb-10">
          {ebooks.length} free resources — download and level up.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((book) => (
            <div
              key={book.id}
              className="group rounded-2xl border border-bg-border bg-bg-surface p-6 hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <BookOpen size={22} />
              </div>
              <span className="tag mb-3 inline-block">{book.category}</span>
              <h3 className="font-display font-semibold text-text-primary mb-1">
                {book.title}
              </h3>
              <p className="text-sm text-text-secondary mb-1">{book.subtitle}</p>
              <p className="text-xs text-text-muted mb-5">{book.pages} pages · Free</p>

              <div className="flex gap-3">
                <a
                  href={book.downloadUrl}
                  download
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-3 py-2 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
                >
                  <Download size={14} /> Download
                </a>
                {book.previewUrl && (
                  <a
                    href={book.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg border border-bg-border px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Preview
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
