# Mitra Maleki — Portfolio Website

**Live:** [mitramaleki.github.io](https://mitramaleki.github.io)

A minimalist, cinematic academic portfolio built with React + Vite. The background is a live three-layer parallax starfield that responds to mouse movement and scrolling. No frameworks beyond Vite/React — pure CSS, Canvas API.

---

## Project Structure

```
src/
├── components/
│   ├── StarCanvas.jsx    ← Three-layer parallax star background
│   ├── Nav.jsx           ← Fixed navigation with mobile menu
│   ├── Nav.css
│   └── SectionReveal.jsx ← IntersectionObserver fade-in wrapper
├── sections/
│   ├── Hero.jsx / Hero.css
│   ├── Research.jsx
│   ├── Publications.jsx
│   ├── Projects.jsx
│   ├── Notes.jsx
│   ├── Beyond.jsx / Beyond.css   ← Image gallery section
│   ├── Contact.jsx / Contact.css
│   └── Sections.css              ← Shared section styles
├── styles/
│   └── globals.css               ← CSS variables, reset, typography
└── assets/images/                ← Import-style images (alternative)

public/
├── assets/
│   ├── images/    ← Place your photos here (Beyond section)
│   ├── notes/     ← Place PDF notes here
│   └── cv/        ← Place your CV PDF here
└── favicon.svg
```

---

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173
```

---

## Customizing Content

### Text Content
Every section uses plain JavaScript arrays/objects at the top of each file. No CMS, no config files — just edit the arrays directly.

### Images (Beyond section)
1. Place your photos in `public/assets/images/`
2. Open `src/sections/Beyond.jsx`
3. Update the `image` field in each entry:
   ```js
   image: '/assets/images/your-photo.jpg'
   ```

### CV
Place your CV at `public/assets/cv/mitra-maleki-cv.pdf` — the Contact section will auto-link it.

### Notes / PDFs
Place PDFs in `public/assets/notes/` and update paths in `src/sections/Notes.jsx`.

### Colors
Edit CSS variables in `src/styles/globals.css`:
```css
--color-nebula: #6b7fd4;   /* accent color — currently indigo */
```

---

## Deploy to GitHub Pages

### Option A — Push built files directly

```bash
npm run build
# Copy everything inside dist/ to your repository root
# Commit and push
```

### Option B — GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then:
1. Push this workflow file
2. Go to GitHub → Settings → Pages → Source: `gh-pages` branch

### Option C — Manual deploy with gh-pages

```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
#   "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

---

## Performance

- **Stars:** 1,000 canvas points across 3 parallax layers (targeting 60 FPS)
- **Build size:** ~67 kB gzipped (JS + CSS)
- **No external dependencies at runtime** — all fonts loaded from Google Fonts CDN
- `@media (prefers-reduced-motion)`: scroll-triggered animations are skipped

---

## Tech Stack

- **React 18** + **Vite 5**
- **Canvas API** — starfield (no Three.js needed for this)
- **IntersectionObserver** — scroll reveal
- **CSS Custom Properties** — theming
- **Google Fonts** — Cormorant Garamond + Inter

