# Akhilesh Yerram — Personal Portfolio & Digital Garden

A clean, modern, typography-focused personal portfolio and digital garden for **Akhilesh Yerram**, inspired by [chester.how](https://chester.how).

Built with semantic HTML5, modern CSS3 (custom properties, light/dark mode, responsive design), and vanilla JavaScript. **Zero build dependencies, zero frameworks, 100% lightweight and blazingly fast.**

---

## ✨ Features

- **Chester.how Aesthetic**: Content-first minimalist layout, generous whitespace, refined typography (Inter + Newsreader editorial serif + JetBrains Mono), and subtle borders.
- **Dark & Light Mode**: Seamless theme toggle with system preference detection (`prefers-color-scheme`) and persistent `localStorage` preference.
- **Interactive Project Filtering**: Filter projects dynamically by category (*All*, *AI & ML*, *Full Stack / Web*, *Vision & Systems*).
- **Interactive Command Palette (`Cmd+K` / `Ctrl+K`)**: Instant modal navigation to jump between sections, toggle theme, copy email, or open profiles.
- **Live Clock**: Dynamic local time counter for Hyderabad, India (IST).
- **One-Click Email Copy & Toast**: Instant clipboard feedback for recruiters and visitors.
- **Print / PDF Resume Friendly**: Includes `@media print` styling that formats the page into a clean, distraction-free resume if printed or saved to PDF.
- **GitHub Pages Ready**: Zero build steps — just push to GitHub and your site is live immediately!

---

## 🚀 How to Deploy to GitHub Pages (Takes 1-2 Minutes)

### Option 1: Personal User Site (`Akhilesh-0529.github.io`)
This will make your website accessible directly at `https://akhilesh-0529.github.io/`.

1. Go to GitHub and create a new public repository named:
   ```
   Akhilesh-0529.github.io
   ```
2. In your local terminal, navigate to this project folder:
   ```bash
   cd /Users/yerramakhilesh/.gemini/antigravity/scratch/akhilesh-portfolio
   ```
3. Initialize git, commit, and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: chester.how inspired portfolio"
   git branch -M main
   git remote add origin https://github.com/Akhilesh-0529/Akhilesh-0529.github.io.git
   git push -u origin main
   ```
4. On GitHub, go to your repository **Settings** → **Pages**:
   - Under **Source**, select **Deploy from a branch**.
   - Branch: `main` / Folder: `/ (root)`.
   - Click **Save**.
5. Your website will be live in ~30 seconds at `https://akhilesh-0529.github.io/`!

---

### Option 2: Project Repository (`portfolio`)
If you name your repository `portfolio`, it will be live at `https://akhilesh-0529.github.io/portfolio/`.

```bash
git init
git add .
git commit -m "Initial commit: portfolio"
git branch -M main
git remote add origin https://github.com/Akhilesh-0529/portfolio.git
git push -u origin main
```
Then enable GitHub Pages in Settings → Pages (Branch: `main`, Folder: `/ (root)`).

---

## 💻 Local Preview

To preview the website on your local machine, run:

```bash
cd /Users/yerramakhilesh/.gemini/antigravity/scratch/akhilesh-portfolio
python3 -m http.server 8000
```

Then open your browser to [http://localhost:8000](http://localhost:8000).

---

## 📂 Project Structure

```
akhilesh-portfolio/
├── index.html       # Main webpage structure and content
├── style.css        # Minimalist CSS styling, themes, animations, print stylesheet
├── script.js        # Theme toggle, Cmd+K palette, project filter, live clock, toasts
└── README.md        # Documentation and deployment guide
```

---

## 🎨 Customizing Content

- **Update Projects**: Open `index.html` and search for `<section id="projects">`. Each project is an `<article class="project-card">` with category tags.
- **Update Experience**: Search for `<section id="experience">` and edit or add `<div class="timeline-item">`.
- **Add Notes/Reads**: Search for `<section id="garden">` to add books, essays, or tools you are currently experimenting with.
