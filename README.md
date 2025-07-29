# 🏠 Severino Realty Microsite

A fully dynamic, modular, and mobile-responsive real estate microsite system for showcasing property listings.

---

## 🚀 Features

- 🔀 Slug-based routing (`?slug=property-001`)
- 🧩 Modular JS components (Header, Gallery, FAQ, etc.)
- 🎨 Responsive and elegant CSS structure
- 🗃 JSON-powered property data
- 📄 SEO-ready with meta schema
- 🌐 Easy deployment on Netlify or GitHub Pages

---

## 📂 Folder Structure

The project is organised into a clean separation between development sources and public assets.  You edit files under `src/` during development and export the finished site into the `public/` directory.  Only the contents of `public/` are deployed.

```
📁 public/
  ├── home.html           → Landing page listing available properties
  ├── index.html          → Dynamic property detail page (uses query string ?slug=property-XXX)
  ├── js/                 → Self-contained ES module scripts for production
  │   ├── main.js         → Composes and renders the property page
  │   └── components/     → Component modules used by main.js
  ├── styles/             → Compiled CSS copied from src/styles
  ├── data/               → Property data files consumed at runtime
  └── assets/             → Images and logos used by the site
📁 src/
  ├── components/         → Source JavaScript components (mirrored into public/js/components)
  ├── data/               → Source JSON used to generate property pages (mirrored into public/data)
  ├── styles/             → Modular CSS broken into base, components, layouts and utilities
  └── main.js             → Original entry point (mirrored into public/js/main.js)
```

---

## 🧪 Live Preview Locally (VS Code)

1. Open the folder in VS Code
2. Install the Live Server extension
3. Right-click `public/home.html` → “Open with Live Server”
4. Click on a property to preview it (uses `?slug=` in the URL)

---

## 🌍 Hosting via GitHub Pages / Netlify

### GitHub Pages (if using a public repo):
- Make sure `index.html` is in `public/`
- Deploy with Pages using `public` as root

### Netlify:
- Connect your GitHub repo
- Set **Publish Directory**: `public`
- Build command: (leave empty for static site)

---

## ✏️ Add/Edit Properties

1. Go to `/src/data/`
2. Create a file like `property-004.json`
3. Add your JSON data structure (see examples)
4. Link it via: `index.html?slug=property-004`

---

## 👨‍💻 Author

**Severino** — [Colossal Grid / Hoshi Consult Ltd.]

For updates, inquiries or collaborations, please reach out.
