This is a professional portfolio built with Next.js (App Router), Tailwind CSS, and Framer Motion.

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

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Use default build settings (`next build`).
4. Deploy.

Or deploy with Vercel CLI:

```bash
npm i -g vercel
vercel
```
