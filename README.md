# Firas Bouraoui — Portfolio

A sleek, animated portfolio built with **Next.js 14**, **TypeScript**, and **TailwindCSS**.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Google Fonts: Syne, DM Sans, JetBrains Mono

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel (in 3 steps)

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
# Create a new repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to [vercel.com](https://vercel.com) and log in (or sign up with GitHub)
2. Click **"Add New Project"**
3. Select your `portfolio` repository
4. Vercel auto-detects Next.js — click **Deploy**

### Step 3 — Done ✓

Your portfolio will be live at `https://your-repo.vercel.app` in ~60 seconds.

### Optional: Custom Domain

In Vercel → Project → Settings → Domains → Add your domain.

---

## Customization

| File | What to change |
|------|---------------|
| `src/components/Hero.tsx` | Name, bio, stats |
| `src/components/Experience.tsx` | Job details, achievements |
| `src/components/Projects.tsx` | Project cards |
| `src/components/Skills.tsx` | Skill groups |
| `src/components/Education.tsx` | Degrees |
| `src/components/Contact.tsx` | Contact links |
| `src/app/globals.css` | Colors, fonts |
| `src/app/layout.tsx` | Page title, meta description |
