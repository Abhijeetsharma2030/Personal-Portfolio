# Abhijeet Kumar - Personal Portfolio (React + TypeScript)

This is the modern React.js + TypeScript portfolio website for **Abhijeet Kumar**, converted from vanilla HTML/CSS/JS.

## 🚀 Tech Stack

- **React 18** - Component-based UI library
- **TypeScript** - Strict type checking & interfaces
- **Vite** - Next-generation frontend build tool & dev server
- **Lucide Icons & Boxicons** - Clean, modern vector icons
- **IntersectionObserver** - Performant scroll-reveal animations & scroll spy

## 📁 Project Structure

```text
portfolio-master/
├── public/
│   └── assets/
│       └── img/             # All portfolio images and assets
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx         # Hero section with SVG blob avatar
│   │   ├── About.tsx        # Bio & personal summary
│   │   ├── Skills.tsx       # Interactive skill bars with percentages
│   │   ├── Projects.tsx     # Project cards with external links
│   │   ├── Contact.tsx      # Controlled contact form
│   │   └── Footer.tsx       # Social links & copyright
│   ├── data/
│   │   └── portfolioData.ts # Central typed data repository
│   ├── hooks/
│   │   ├── useActiveSection.ts # Active nav link scroll spy
│   │   └── useScrollReveal.ts  # Viewport entrance animation hook
│   ├── styles/
│   │   └── index.css        # Theme variables, responsive layouts
│   ├── types/
│   │   └── portfolio.ts     # TypeScript interfaces
│   ├── App.tsx              # Root component
│   └── main.tsx             # React DOM entry point
├── index.html               # Main HTML template
├── package.json             # NPM dependencies & scripts
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite configuration
```

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your portfolio in the browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

