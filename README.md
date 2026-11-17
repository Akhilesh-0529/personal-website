# Akhilesh Yerram — Personal Website & Digital Garden

<p align="left">
  <a href="https://akhilesh-0529.github.io/personal-website/"><img src="https://img.shields.io/badge/Live_Site-Visit_Portfolio-0f766e?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Website" /></a>
  <a href="https://akhilesh-0529.github.io/personal-website/public/resume.pdf"><img src="https://img.shields.io/badge/Resume-PDF-dc2626?style=for-the-badge&logo=adobeacrobatreader&logoColor=white" alt="Resume PDF" /></a>
  <a href="https://linkedin.com/in/akhileshyerram"><img src="https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:akhileshyerram2006@gmail.com"><img src="https://img.shields.io/badge/Email-Contact_Me-ea4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

> A content-first personal website and digital garden inspired by the clean, minimalist aesthetic of **[chester.how](https://chester.how)**. Built with semantic HTML5, modern CSS3 custom properties, and vanilla JavaScript. Zero heavy build tools, zero runtime bloat, and sub-second load times.

---

## 🌐 Live Deployment

* **Production URL**: [https://akhilesh-0529.github.io/personal-website/](https://akhilesh-0529.github.io/personal-website/)
* **Direct Resume Link**: [https://akhilesh-0529.github.io/personal-website/public/resume.pdf](https://akhilesh-0529.github.io/personal-website/public/resume.pdf)

---

## 🎨 Design Philosophy & Features

- **Chester.how Aesthetic**: Intimate, readable single-column layout centered around typography, whitespace, and subtle micro-interactions.
- **Editorial Typography**: Balanced font pairing using `Inter` for crisp body copy, `Newsreader` for editorial serif italic accents, and `JetBrains Mono` for tags and code.
- **Dark & Light Mode**: Low-contrast obsidian dark mode and warm paper light mode with system preference auto-detection (`prefers-color-scheme`) and persistent `localStorage`.
- **Command Palette (`⌘K` / `Ctrl+K`)**: Keyboard-first navigation modal to jump between sections, toggle theme, copy email, or open external links.
- **Interactive Project Filtering**: Instant client-side categorization across *All*, *AI & ML*, *Full Stack / Web*, and *Vision & Systems*.
- **Live Local Clock**: Real-time ticking clock showing current time in Asia/Kolkata (Hyderabad IST).
- **One-Click Email Copy**: Integrated clipboard action with animated toast feedback.
- **Print & PDF Optimization**: Clean `@media print` stylesheet that transforms the webpage into a distraction-free printable resume format.

---

## 💼 Featured Engineering & Research

| Project | Stack | Highlights |
| :--- | :--- | :--- |
| **Stock Sentiment Predictor** | Python, ML, NLP, Scikit-Learn | Cut prediction error by **70%** and improved directional accuracy by **40%** using historical market pattern and sentiment analysis. |
| **EduSphere (edu-Graph)** | Next.js 16, Supabase, Ollama, Gemma, RAG | RAG study platform with role-based auth and local Gemma inference, re-architected from prototype into production stack. |
| **Smart Factory Monitoring** | YOLOv8, OpenCV, LLMs, Edge AI | Prototyped real-time defect and PPE detection paired with LLM root-cause analysis (Cognizant Technoverse hackathon). |
| **Blockchain IoT Security** | Permissioned Blockchain, PoA, IoT | Zero-trust IoT device authentication and cryptographic tamper resistance demonstrated with Smart Surveillance. |

---

## 🛠️ Technical Stack

- **Languages**: Python, SQL, JavaScript (ES6+), Java, HTML5, CSS3
- **AI & Machine Learning**: PyTorch, RAG, LLMs, Ollama, Gemma, NLP, Knowledge Graphs, Scikit-Learn
- **Computer Vision**: YOLOv8, OpenCV, Object Detection, Multi-Object Tracking, Edge AI
- **Web & Data Engineering**: Next.js, Flask, Supabase, MongoDB, Socket.IO, Bootstrap, jQuery, Power BI
- **Cloud & DevOps**: Google Cloud Platform (GCP), Git/GitHub, Vercel, RESTful APIs

---

## 📂 Repository Structure

```
personal-website/
├── index.html            # Main semantic layout, sections, SVG icons, and SEO metadata
├── style.css             # Theme variables, typography, animations, and @media print rules
├── script.js             # Theme toggle, Cmd+K palette, project filtering, live clock, toasts
├── vercel.json           # Vercel static deployment configuration
├── public/
│   ├── avatar.png        # Profile portrait
│   └── resume.pdf        # Latest resume document
└── README.md             # Project documentation
```

---

## 💻 Local Development

Clone the repository and run a simple local HTTP server:

```bash
# Clone the repository
git clone https://github.com/Akhilesh-0529/personal-website.git
cd personal-website

# Start local server (Python 3)
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🚀 Deployment

### GitHub Pages (Active)
This repository is configured to deploy directly via the `main` branch root directory:
1. In repository **Settings** → **Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / Folder: `/ (root)`
2. Updates pushed to `main` trigger automated deployment within 60 seconds.

### Vercel Deployment
The repository includes a root `vercel.json` with `"framework": null` to ensure Vercel serves the site statically without requiring a build step.

---

## 📬 Contact & Links

- **Name**: Akhilesh Yerram
- **Location**: Hyderabad, India
- **Phone**: [+91-6281798594](tel:+916281798594)
- **Email**: [akhileshyerram2006@gmail.com](mailto:akhileshyerram2006@gmail.com)
- **LinkedIn**: [linkedin.com/in/akhileshyerram](https://linkedin.com/in/akhileshyerram)
- **GitHub**: [github.com/Akhilesh-0529](https://github.com/Akhilesh-0529)

---

<p align="center">
  <sub>Crafted with semantic code & modern CSS · Design inspired by <a href="https://chester.how">chester.how</a></sub>
</p>
