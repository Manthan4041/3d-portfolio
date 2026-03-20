# 🚀 Manthan Awasthi — 3D Developer Portfolio

A stunning, interactive developer portfolio built with **Next.js 14**, **Three.js/Spline**, **GSAP**, and **Framer Motion**. Features 3D models, particle animations, smooth scrolling, dark/light theme, a contact form, and a blog system.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)

---

## ✨ Features

- **🎮 Interactive 3D Models** — Spline-powered 3D keyboard and objects rendered directly in the browser
- **🌌 Particle Background** — Animated space-themed particle system using Canvas
- **🎬 Rich Animations** — GSAP & Framer Motion powered reveal animations, blur-ins, and box reveals
- **🌓 Dark / Light Theme** — Toggle between themes with a fun animated theme switcher
- **📱 Fully Responsive** — Mobile-first design that looks great on all devices
- **📬 Contact Form** — Working email form powered by [Resend](https://resend.com)
- **📝 Blog System** — MDX-based blog with gray-matter frontmatter parsing
- **🎯 Smooth Scrolling** — Lenis-powered buttery smooth scroll experience
- **🔗 Social Links** — GitHub, LinkedIn, Instagram integration
- **🎨 Radix UI Components** — Tooltips, dialogs, dropdowns, tabs, toasts, and more
- **🐱 Easter Eggs** — Hidden surprises throughout the site (Nyan Cat, confetti, and more!)
- **🔍 SEO Optimized** — Open Graph, Twitter cards, and metadata configured

---

## 🛠️ Tech Stack

| Category       | Technologies                                                  |
| -------------- | ------------------------------------------------------------- |
| **Framework**  | Next.js 14 (App Router)                                       |
| **Language**   | TypeScript                                                    |
| **Styling**    | Tailwind CSS, SASS, Radix UI, ShadCN UI, Aceternity UI       |
| **3D / Visual**| Spline, Three.js                                              |
| **Animations** | GSAP, Framer Motion                                           |
| **Email**      | Resend                                                        |
| **Blog**       | MDX (next-mdx-remote), gray-matter                            |
| **Scrolling**  | Lenis                                                         |
| **Validation** | Zod                                                           |
| **Realtime**   | Socket.io (optional)                                          |
| **Icons**      | Lucide React, React Icons                                     |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **yarn**, or **pnpm**

### 1. Clone the Repository

```bash
git clone https://github.com/Manthan4041/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Copy the example env file and add your keys:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Required — Resend API key for the contact form
RESEND_API_KEY=re_your_api_key_here

# Optional — WebSocket server URL for realtime features (live cursors, chat, presence)
NEXT_PUBLIC_WS_URL=

# Optional — Umami analytics
UMAMI_DOMAIN=
UMAMI_SITE_ID=
```

> **Note:** Get your Resend API key from [resend.com/api-keys](https://resend.com/api-keys). The contact form won't work without it.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── public/
│   └── assets/
│       ├── projects-screenshots/   # Project showcase images
│       ├── seo/                    # OG images for SEO
│       ├── keycap-sounds/          # Sound effects for 3D keyboard
│       ├── nav-link-previews/      # Navigation hover previews
│       ├── skills-keyboard.spline  # 3D keyboard model
│       └── me.jpg                  # Profile photo
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata & fonts
│   │   ├── page.tsx                # Main landing page
│   │   ├── not-found.tsx           # Custom 404 page
│   │   ├── globals.css             # Global styles
│   │   ├── api/send/route.ts       # Contact form API endpoint
│   │   ├── blogs/                  # Blog pages
│   │   └── projects/               # Individual project pages
│   │
│   ├── components/
│   │   ├── sections/               # Page sections (Hero, Skills, Experience, Projects, Contact)
│   │   ├── header/                 # Navigation header
│   │   ├── footer/                 # Site footer
│   │   ├── ui/                     # Reusable UI components (ShadCN, custom)
│   │   ├── theme/                  # Theme toggle with fun animations
│   │   ├── preloader/              # Page preloader
│   │   ├── realtime/               # Live cursor & presence features
│   │   ├── animated-background.tsx # Particle canvas background
│   │   ├── ContactForm.tsx         # Contact form component
│   │   ├── reveal-animations.tsx   # GSAP/Framer reveal effects
│   │   └── smooth-scroll.tsx       # Lenis smooth scroll wrapper
│   │
│   ├── data/
│   │   ├── config.ts               # Site-wide configuration (name, email, socials)
│   │   └── projects.tsx            # Projects data & content
│   │
│   ├── content/blogs/              # MDX blog posts
│   ├── contexts/                   # React contexts
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility libraries
│   ├── types/                      # TypeScript type definitions
│   └── utils/                      # Helper utilities
```

---

## ⚙️ Configuration

All site-wide settings are in **`src/data/config.ts`**:

```ts
const config = {
  title: "Manthan Awasthi | Full-Stack Developer",
  author: "Manthan Awasthi",
  email: "manthanawasthi4041@gmail.com",
  site: "",  // Set your deployed URL here

  githubUsername: "Manthan4041",
  githubRepo: "Portfolio",

  social: {
    linkedin: "https://www.linkedin.com/in/...",
    instagram: "https://www.instagram.com/...",
    github: "https://github.com/Manthan4041",
  },
};
```

Update these values to personalize the portfolio.

---

## 📧 Contact Form

The contact form uses [Resend](https://resend.com) to send emails. When a visitor submits the form:

1. Data is validated with **Zod** (name ≥ 2 chars, valid email, message ≥ 10 chars)
2. An email is sent to your configured email address via the Resend API
3. The email uses a custom React email template (`src/components/email-template.tsx`)

---

## 🚀 Deployment

This project can be deployed on any platform that supports Next.js:

- **[Vercel](https://vercel.com)** (recommended) — Zero-config deployment
- **[Netlify](https://netlify.com)** — With Next.js adapter
- **[Railway](https://railway.app)** — Full-stack hosting

Remember to set your environment variables (`RESEND_API_KEY`) in your deployment platform's settings, and update `config.site` in `src/data/config.ts` with your production URL.

---

## 📜 Scripts

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Start development server           |
| `npm run build`  | Build for production                |
| `npm start`      | Start production server             |
| `npm run lint`   | Run ESLint                          |

---

## 📄 License

This project is private. All rights reserved.

---

## 🤝 Connect

- **GitHub**: [Manthan4041](https://github.com/Manthan4041)
- **LinkedIn**: [Manthan Awasthi](https://www.linkedin.com/in/manthan-awasthi-47475234a/)
- **Instagram**: [@_manthanawasthi](https://www.instagram.com/_manthanawasthi/)
- **Email**: manthanawasthi4041@gmail.com
