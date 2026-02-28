# Aman Raj - Portfolio & Knowledge Hub

[![Visit Live Site](https://img.shields.io/badge/Visit%20Live%20Site-%F0%9F%9A%80-brightgreen?style=for-the-badge)](https://aman-0402.github.io/aman.ai)

A modern, responsive portfolio website featuring an interactive Knowledge Hub with 26+ curated tools, project showcase, blog, resources, and services. Built with React, Vite, and Tailwind CSS.

**Live Demo:** [https://aman-0402.github.io/aman.ai](https://aman-0402.github.io/aman.ai)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Development](#-development)
- [Building & Deployment](#-building--deployment)
- [Pages & Routes](#-pages--routes)
- [Knowledge Hub](#-knowledge-hub)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### Portfolio Showcase
- **About Section** - Professional profile with skills, tech stack, and career timeline
- **Projects Gallery** - Filterable portfolio with project details and tech tags
- **Blog Section** - Articles with dates, categories, and reading time
- **Services** - Full-stack development, AI/ML, and technical training offerings

### Knowledge Hub (Advanced Tool Directory)
- **26+ Curated Tools** across 7 categories
- **Advanced Search** - Find tools by name, description, or tags
- **Smart Filtering** - Filter by pricing (free/freemium/paid), ratings, and featured status
- **Responsive Layout** - Wraps on mobile, single-row scroll on desktop
- **Tool Categories:**
  - 🧠 AI & LLM Tools
  - 🎬 AI / Video / Creative Assets
  - 🎨 Design & UI Inspiration
  - 🛠 Developer Tools & Utilities
  - 👁️ Frontend / Animation / 3D
  - ✏️ Design Tools
  - 📚 Learning Platforms

### Resources & Learning
- **Free eBooks Library** - Curated collection organized by category
- **Resource Downloads** - Cheatsheets, templates, and starter kits
- **Contact Form** - Get in touch for inquiries

### Technical Excellence
- 🎯 **SEO Optimized** - Meta tags, structured data, and optimized titles
- 📱 **Fully Responsive** - Mobile-first design with adaptive layouts
- ⚡ **High Performance** - Code splitting, lazy loading, and optimized builds
- 🎨 **Modern UI** - Framer Motion animations and smooth transitions
- 🌓 **Dark Mode Ready** - Beautiful dark theme support
- ♿ **Accessible** - WCAG compliant with semantic HTML

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|---------------|
| **Frontend** | React 18, React Router 6, Framer Motion |
| **Styling** | Tailwind CSS, PostCSS, Custom theme system |
| **Build Tool** | Vite with HMR |
| **Icons** | Lucide React (400+ icons) |
| **Markdown** | React Markdown with syntax highlighting |
| **Deployment** | GitHub Pages (automated via GitHub Actions) |

### Dependencies
```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "framer-motion": "^10.x",
  "lucide-react": "^0.292.x",
  "react-markdown": "^8.x",
  "remark-gfm": "^3.x",
  "rehype-highlight": "^7.x"
}
```

---

## 📁 Project Structure

```
aman.ai/
├── public/
│   ├── assets/
│   │   ├── downloads/           # Resume PDF
│   │   └── images/
│   │       ├── skills/          # Skill icons (43 PNGs)
│   │       └── projects/        # Project thumbnails
│   └── index.html               # HTML entry point
│
├── src/
│   ├── animations/              # Framer Motion transitions & variants
│   ├── assets/
│   │   └── images/              # Avatar and media assets
│   ├── components/
│   │   ├── layout/              # Page layout wrappers
│   │   │   ├── RootLayout.jsx
│   │   │   ├── PageLayout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MobileMenu.jsx
│   │   ├── sections/
│   │   │   └── About/
│   │   │       └── About.jsx    # Profile, skills, timeline
│   │   └── ui/                  # Reusable UI components
│   │       ├── PageLoader.jsx
│   │       └── ScrollToTop.jsx
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark mode management
│   ├── data/                    # JSON data files
│   │   ├── tools.json           # Knowledge Hub tools (26 items)
│   │   ├── projects.json        # Portfolio projects
│   │   ├── ebooks.json          # Free eBooks collection
│   │   ├── resources.json       # Downloadable resources
│   │   ├── services.json        # Service offerings
│   │   ├── skills.json          # Skill categories & levels
│   │   ├── techstack.json       # Technology breakdown
│   │   └── timeline.json        # Career timeline events
│   ├── pages/                   # Route page components (12 pages)
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogPostPage.jsx
│   │   ├── EbooksPage.jsx
│   │   ├── KnowledgeHubPage.jsx ⭐ (Advanced filtering & search)
│   │   ├── ServicesPage.jsx
│   │   ├── ResourcesPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── styles/
│   │   └── globals.css          # Global styles & theme variables
│   ├── utils/
│   │   └── formatDate.js        # Date formatting utilities
│   ├── App.jsx                  # Router configuration
│   └── main.jsx                 # React entry point
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # Auto-deploy to GitHub Pages
├── vite.config.js               # Build configuration with path aliases
├── tailwind.config.js           # Tailwind theme customization
├── postcss.config.js            # PostCSS plugins
├── eslint.config.js             # Linting rules
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

---

## 🚀 Installation

### Prerequisites
- Node.js 16+ and npm 8+
- Git

### Clone & Setup

```bash
# Clone the repository
git clone https://github.com/aman-0402/aman.ai.git
cd aman.ai

# Install dependencies
npm install

# Create environment file (if needed)
cp .env.example .env.local
```

---

## 💻 Development

### Start Development Server

```bash
npm run dev
```

Opens automatically at `http://localhost:3000` with hot module replacement (HMR).

### Available Scripts

```bash
# Development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Key Development Features
- ⚡ **Vite HMR** - Instant code updates without losing state
- 🎯 **Path Aliases** - Easy imports (`@components`, `@pages`, `@data`, etc.)
- 🎨 **Tailwind IntelliSense** - Full CSS class autocomplete in VSCode
- 📊 **Code Splitting** - Automatic route-based code splitting
- 🔍 **ESLint** - Real-time code quality feedback

---

## 🏗 Building & Deployment

### Production Build

```bash
npm run build
```

Outputs optimized files to `dist/` directory:
- Minified JavaScript bundles
- Optimized images
- Code-split route components
- Sourcemap-free production code

### GitHub Pages Deployment

The site auto-deploys via GitHub Actions when you push to `main`:

```bash
git add .
git commit -m "Add feature"
git push origin main
```

**CI/CD Pipeline:**
1. Runs tests (if configured)
2. Builds production bundle
3. Pushes to `gh-pages` branch
4. GitHub Pages serves at: `https://aman-0402.github.io/aman.ai`

**Deployment Configuration:**
- Base path: `/aman.ai/` (configured in `vite.config.js`)
- Branch: `gh-pages` (automatic)
- Trigger: Push to `main` branch

---

## 📄 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Hero section with intro |
| `/about` | AboutPage | Profile, skills, tech stack, timeline |
| `/projects` | ProjectsPage | Filterable project gallery |
| `/projects/:id` | ProjectDetailPage | Individual project details |
| `/blog` | BlogPage | Blog article listings |
| `/blog/:id` | BlogPostPage | Full article with metadata |
| `/ebooks` | EbooksPage | Free eBooks library |
| `/knowledge-hub` | KnowledgeHubPage | Tool directory with search/filters |
| `/knowledge-hub/:category` | KnowledgeHubPage | Filter by category |
| `/services` | ServicesPage | Service offerings |
| `/resources` | ResourcesPage | Downloadable templates & cheatsheets |
| `/contact` | ContactPage | Contact form |
| `*` | NotFoundPage | 404 error page |

---

## 🧠 Knowledge Hub

The Knowledge Hub is the centerpiece of this portfolio, featuring an advanced tool discovery system.

### Features

#### Search
- Real-time search across tool names, descriptions, and tags
- Case-insensitive matching
- Instant results with result count

#### Filtering
- **Pricing Filters**: Combine free, freemium, and paid tools
- **Rating Filters**: Show only 5-star rated tools
- **Featured Filter**: Discover handpicked featured tools
- **Multi-filter Support**: Combine multiple filters simultaneously
- **Active Filter Display**: Visual indicators show active filters

#### Tool Categories (7 Total)

1. **AI & LLM Tools** (6 tools)
   - Ollama, Yupp.ai, Kling, Higgsfield, Pomelli, Uncensored.ai

2. **AI / Video / Creative Assets** (4 tools)
   - ProductionCrate, LottieFiles, Animagraffs, LottieFlow

3. **Design & UI Inspiration** (4 tools)
   - Lapa Ninja, Uiverse, UI Layouts, IconScout

4. **Developer Tools & Utilities** (4 tools)
   - CodePen, Can I Use, DevDocs, Wave Terminal

5. **Frontend / Animation / 3D** (4 tools)
   - Three.js, CSS-Tricks, ReactBits, React Tilt

6. **Design Tools** (3 tools)
   - Penpot, Mockey.ai, EndlessTools

7. **Learning Platforms** (1 tool)
   - fast.ai

#### Tool Cards
- Emoji icons for quick visual identification
- Tool name and description
- Relevant tags (up to 3 visible)
- Pricing badge (color-coded)
- 5-star ratings
- Featured badge for curated tools
- External link indicator
- Hover animations

#### Responsive Design
- **Mobile (< 768px)**: Category tabs wrap to multiple rows
- **Desktop (≥ 768px)**: Single row with horizontal scroll
- **Full scrollbar visibility** on all devices

### Data Structure

Each tool includes:
```json
{
  "id": "unique-id",
  "name": "Tool Name",
  "description": "Brief description",
  "url": "https://tool-url.com",
  "emoji": "🎯",
  "category": "category-id",
  "tags": ["tag1", "tag2", "tag3"],
  "pricing": "free|freemium|paid",
  "rating": 1-5,
  "featured": true|false,
  "addedAt": "2024-02-28"
}
```

---

## 🎨 Styling & Theme

### Tailwind CSS
- Custom color palette
- Responsive breakpoints
- Component-based utilities
- Dark mode support

### Color System
```css
--brand-primary: Primary brand color
--text-primary: Main text
--text-secondary: Secondary text
--text-muted: Muted text
--bg-surface: Surface backgrounds
--bg-elevated: Elevated surfaces
--bg-border: Border colors
```

### Animations
- Smooth page transitions
- Framer Motion variants
- Hover effects
- Scroll animations
- Loading states

---

## 📊 Performance

### Optimization Strategies
- ⚡ **Code Splitting**: 45KB gzipped main bundle
- 🎯 **Lazy Loading**: Route-based component loading
- 🖼️ **Image Optimization**: Asset pipeline with Vite
- 📦 **Vendor Chunking**: Separate vendor bundle
- 🗜️ **Minification**: Production build optimization

### Bundle Size
```
index.js:        41.17 kB (gzip: 12.97 kB)
framer-motion:  116.87 kB (gzip: 38.91 kB)
vendor:         206.73 kB (gzip: 67.44 kB)
────────────────────────────
Total:          ~365 KB (gzip: ~120 KB)
```

---

## 🔒 Security

- ✅ No sensitive data in version control
- ✅ Environment variables (.env) in .gitignore
- ✅ XSS protection via React's built-in escaping
- ✅ CSRF tokens (if applicable)
- ✅ Content Security Policy ready

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic
- Keep components focused and reusable

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Aman Raj**

- **Portfolio**: [https://aman-0402.github.io/aman.ai](https://aman-0402.github.io/aman.ai)
- **GitHub**: [@aman-0402](https://github.com/aman-0402)
- **LinkedIn**: [aman-raj-081905211](https://www.linkedin.com/in/aman-raj-081905211/)
- **Twitter**: [@Code_Like_Aman](https://x.com/Code_Like_Aman)
- **YouTube**: [@Think_Like_Me](https://www.youtube.com/@Think_Like_Me)
- **Email**: think.like.ai.aman@gmail.com

---

## 🙏 Acknowledgments

- React and Vite communities
- Tailwind CSS for amazing utilities
- Framer Motion for smooth animations
- GitHub Pages for free hosting
- All tool creators featured in the Knowledge Hub

---

## 📞 Support

If you find this project helpful, please:
- ⭐ Star the repository
- 🐛 Report issues via GitHub Issues
- 💬 Suggest features via Discussions
- 📤 Share your feedback

---

## 🚀 Future Enhancements

- [ ] Dark/light theme toggle
- [ ] Tool ratings and reviews
- [ ] User favorites/bookmarks
- [ ] Advanced analytics dashboard
- [ ] AI-powered tool recommendations
- [ ] Newsletter subscription
- [ ] Community contributions module
- [ ] Multi-language support

---

**Last Updated**: February 2024

Made with ❤️ by Aman Raj
