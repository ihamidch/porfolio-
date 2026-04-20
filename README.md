This is a professional portfolio built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Live Demo

- **App (Portfolio):** [https://porfolio-ihamidchs-projects.vercel.app](https://porfolio-ihamidchs-projects.vercel.app)
- **Repository:** [https://github.com/ihamidch/porfolio-](https://github.com/ihamidch/porfolio-)

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CV (Download CV button)

The site serves **`public/Hamid-Rafique-CV.pdf`**. Regenerate it after editing content in **`scripts/generate-cv-pdf.cjs`**:

```bash
npm run cv:pdf
```

Source LaTeX (for print-quality PDF via `pdflatex` on your machine): **`public/Hamid-Rafique-CV.tex`**.

## Live project URLs

MERN and DevOps cards open **deployed** URLs. The MERN section lists three production apps—**E‑commerce**, **Freelancer Marketplace**, and **TalentScout AI**—each with its own Vercel frontend and API. FlowBoard and other APIs still appear under DevOps. Override URLs with `NEXT_PUBLIC_LIVE_*` in `.env.local` (see `lib/portfolio-data.ts`).

## Deploy to Vercel (same flow as your other apps)

This repo is a **single Next.js app at the root** — like connecting **TalentScout** or **E‑commerce**, but **Root Directory = `.`** (not `client/` or `server/`).

1. Push `main` to [github.com/ihamidch/porfolio-](https://github.com/ihamidch/porfolio-).
2. [Vercel → Add New → Project](https://vercel.com/new) → **Import** `porfolio-`.
3. **Framework Preset:** Next.js (auto). **Root Directory:** `.` (leave default).
4. **Build:** `npm run build` (default; `vercel.json` uses `npm ci` for installs).
5. **Deploy.** Future pushes to `main` auto-deploy if Git integration is enabled.

Optional env vars (only if you change live demo URLs): set `NEXT_PUBLIC_LIVE_*` in the Vercel project to match `lib/portfolio-data.ts`.

### Vercel CLI (optional)

```bash
cd ~/porfolio
npx vercel@latest login
npx vercel@latest deploy --prod
```
