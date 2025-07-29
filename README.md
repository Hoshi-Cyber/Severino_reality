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

```
📁 public/
  ├── index.html         → Dynamic property page
  ├── home.html          → Homepage with links to all properties
📁 src/
  ├── components/        → Reusable JavaScript UI components
  ├── data/              → Property data in JSON format
  ├── styles/            → Modular CSS (organized by type)
  └── main.js            → Assembles the page dynamically
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
