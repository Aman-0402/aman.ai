import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import RootLayout from '@components/layout/RootLayout'
import PageLoader from '@components/ui/PageLoader'

// ─── Lazy-load all page components ────────────────────────────────────────────
// This enables code-splitting — each page loads only when navigated to
const HomePage         = lazy(() => import('@pages/HomePage'))
const AboutPage        = lazy(() => import('@pages/AboutPage'))
const ProjectsPage     = lazy(() => import('@pages/ProjectsPage'))
const ProjectDetail    = lazy(() => import('@pages/ProjectDetailPage'))
const BlogPage         = lazy(() => import('@pages/BlogPage'))
const BlogPostPage     = lazy(() => import('@pages/BlogPostPage'))
const EbooksPage       = lazy(() => import('@pages/EbooksPage'))
const KnowledgeHubPage = lazy(() => import('@pages/KnowledgeHubPage'))
const ServicesPage     = lazy(() => import('@pages/ServicesPage'))
const ResourcesPage    = lazy(() => import('@pages/ResourcesPage'))
const ContactPage      = lazy(() => import('@pages/ContactPage'))
const NotFoundPage     = lazy(() => import('@pages/NotFoundPage'))

// ─── Router configuration ─────────────────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: 'projects/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetail />
          </Suspense>
        ),
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: 'blog/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPostPage />
          </Suspense>
        ),
      },
      {
        path: 'ebooks',
        element: (
          <Suspense fallback={<PageLoader />}>
            <EbooksPage />
          </Suspense>
        ),
      },
      {
        path: 'knowledge-hub',
        element: (
          <Suspense fallback={<PageLoader />}>
            <KnowledgeHubPage />
          </Suspense>
        ),
      },
      {
        path: 'knowledge-hub/:category',
        element: (
          <Suspense fallback={<PageLoader />}>
            <KnowledgeHubPage />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: 'resources',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ResourcesPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
])

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  return <RouterProvider router={router} />
}
