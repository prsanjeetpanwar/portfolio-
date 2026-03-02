# Prsanjeet Panwar — Portfolio

Editorial B&W portfolio built with **Next.js 15 + TypeScript + Tailwind CSS + Shadcn UI**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS animations
- **UI:** Shadcn UI components
- **Fonts:** Playfair Display, EB Garamond, Josefin Sans (Google Fonts)

## 🔧 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles + animations
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Cursor.tsx         # Custom cursor with trailing ring
│   ├── ScrollReveal.tsx   # Intersection observer for reveals
│   ├── Navbar.tsx         # Fixed nav with smooth scroll + active tracking
│   ├── Ticker.tsx         # Scrolling ticker bar
│   ├── Hero.tsx           # Hero section (stats + terminal card)
│   ├── Experience.tsx     # Tabbed work experience
│   ├── Projects.tsx       # Project cards with hover sweep
│   ├── Skills.tsx         # Animated skill bars
│   ├── AchievementsEducation.tsx
│   ├── Contact.tsx        # Contact links + pulse animation
│   └── Footer.tsx
├── lib/
│   └── utils.ts           # cn() utility
└── tailwind.config.ts
```

## ☁️ Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy** ✅

No environment variables needed.

## ✏️ Customisation

All content lives in the component files — just update the data arrays:
- `Hero.tsx` — name, bio, stats
- `Experience.tsx` — work history
- `Projects.tsx` — project list
- `Skills.tsx` — skill categories and percentages
- `AchievementsEducation.tsx` — awards, GPA, courses
- `Contact.tsx` — contact links
