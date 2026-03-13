# Jilani Basha - Portfolio Website

🌐 **Live:** [workwithjilani.web.app](https://workwithjilani.web.app)

A modern, responsive portfolio website built with React, Vite, and TailwindCSS featuring smooth animations and a stunning dark theme with electric blue/cyan accents.

## ✨ Features

- **Modern Design** - Dark theme with electric blue (#00b4d8) and cyan (#00f5d4) accents
- **Smooth Animations** - AOS (Animate on Scroll) for elegant reveal effects
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized** - Meta tags, Open Graph, structured data, sitemap, robots.txt
- **Contact Form** - Integrated with Google Sheets + WhatsApp notifications via CallMeBot
- **Reusable Components** - Clean, modular React component architecture
- **Fast & Lightweight** - Optimized bundle size with code splitting
- **Firebase Hosted** - Deployed on Firebase Hosting

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** TailwindCSS, Material-UI
- **Animations:** AOS (Animate on Scroll)
- **Icons:** React Icons
- **Build Tool:** Vite
- **Hosting:** Firebase Hosting

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ParticlesBackground.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jilanibashap/workwithjilani.git

# Navigate to the project
cd workwithjilani

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Contact Form Integration

The contact form submits to Google Sheets via Apps Script and sends a WhatsApp notification via CallMeBot.

**Fields sent:** `name`, `email`, `contact_number`, `description`

To configure your own:
1. Create a Google Sheet
2. Go to Extensions > Apps Script
3. Paste the provided script (supports JSON POST + WhatsApp via CallMeBot)
4. Deploy as web app → Anyone can access
5. Update the endpoint URL in `Contact.jsx`

## 🌐 Deployment

### Firebase Hosting (Current)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Build the project
npm run build

# Deploy
firebase deploy
```

### Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Jilani Basha**
- Website: [workwithjilani.web.app](https://workwithjilani.web.app)
- Email: bashajilani.2019@gmail.com
- LinkedIn: [linkedin.com/in/jilanibasha](https://linkedin.com/in/jilanibasha)
- GitHub: [github.com/jilanibashap](https://github.com/jilanibashap)
- LeetCode: [leetcode.com/u/JilaniBashaPulluru](https://leetcode.com/u/JilaniBashaPulluru/)

---

⭐ Star this repo if you find it helpful!
