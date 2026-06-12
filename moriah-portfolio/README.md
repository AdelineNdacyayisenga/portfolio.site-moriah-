# Moriah Chiang — Portfolio

Personal portfolio site for Moriah Chiang, Freelance Digital Product Designer.

## Tech Stack

- **React 19** + **Vite**
- **React Router v7** — client-side routing
- **CSS** (custom properties, no Tailwind utilities)
- **Montserrat** font via Google Fonts

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # SVGs, images, resume PDF
├── components/
│   ├── Header.jsx   # Top nav + work page hero section
│   ├── Footer.jsx   # Bottom nav + contact info + LinkedIn
│   └── ProjectCard.jsx
├── pages/
│   ├── WorkPage.jsx  # Project listing
│   └── AboutPage.jsx # Bio, photo, skills & tools
├── App.jsx
├── App.css          # All styles + responsive breakpoints
└── index.css        # Global reset + font import
```

## Pages

| Route | Description |
|-------|-------------|
| `/` or `/work` | Work page — lists all projects |
| `/about` | About page — bio, skills, tools, resume |

## Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| > 900px | Desktop — full side-by-side layouts |
| ≤ 900px | Tablet — condensed grid, single-column skills |
| ≤ 600px | Mobile — stacked cards, hamburger nav |

## Planned Next Steps

- Project detail pages (linked from "View Me" buttons)
- Services page
- Contact section / form
