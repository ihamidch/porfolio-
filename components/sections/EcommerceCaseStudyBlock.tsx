"use client";

import { motion } from "framer-motion";
import type {
  CaseStudyFeatureCard,
  MainFeaturedProject,
} from "@/lib/featured-projects";
import { deployHostname } from "@/lib/utils";
import { fadeUp } from "@/components/motion-presets";

function FeatureIcon({ icon }: { icon: CaseStudyFeatureCard["icon"] }) {
  const common = "h-5 w-5 text-cyan-300";
  switch (icon) {
    case "shield":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V7l7-4z" />
        </svg>
      );
    case "layout":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5h16v14H4zM9 5v14M4 10h16" />
        </svg>
      );
    case "cart":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-1.3 5M17 13l1.3 5M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
      );
    case "api":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 10l-2 2m0 0l-2 2m2-2l2 2m-2-2l-2-2m8 4a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case "media":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 20h16V4H4v16z" />
        </svg>
      );
    default:
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
}

export function EcommerceCaseStudyBlock({
  project,
}: {
  project: MainFeaturedProject;
}) {
  return (
    <motion.article
      {...fadeUp}
      whileHover={{ scale: 1.005 }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="overflow-hidden rounded-3xl border border-cyan-400/35 bg-gradient-to-br from-cyan-600/18 via-blue-600/10 to-zinc-950/80 p-1 shadow-2xl shadow-cyan-500/15"
    >
      <div className="rounded-[1.35rem] border border-white/10 bg-zinc-950/95">
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-white/10 px-6 py-8 sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_45%)]" />
          <div className="relative space-y-5">
            <div className="inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              {project.label}
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {project.title}
              </h3>
              <p className="max-w-3xl text-base font-medium leading-relaxed text-cyan-100/95 sm:text-lg">
                {project.caseStudyTagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-7 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span aria-hidden>🔗</span>
                Live Demo
              </motion.a>
              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-500 bg-zinc-900/60 px-7 py-3 text-sm font-semibold text-zinc-100 shadow-md transition hover:border-cyan-400/60 hover:bg-white/5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span aria-hidden>💻</span>
                GitHub
              </motion.a>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              Live app · {deployHostname(project.liveUrl)}
            </p>
          </div>
        </div>

        <div className="space-y-10 px-6 py-8 sm:px-10 sm:py-10">
          {/* Visual showcase — styled panels until real screenshots are added */}
          <motion.div {...fadeUp} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
              Product showcase
            </p>
            <p className="text-sm text-zinc-400">
              UI surface map of the live storefront and admin workspace. Replace with real screenshots anytime by adding images under{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-cyan-200">public/ecommerce/</code>.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.showcasePanels.map((panel, i) => (
                <motion.div
                  key={panel.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-zinc-950 shadow-lg shadow-black/40"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_40%)] opacity-80 transition group-hover:opacity-100" />
                  <div className="absolute inset-x-0 top-0 flex h-8 items-center gap-1.5 border-b border-white/5 bg-black/30 px-3">
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex h-full flex-col justify-end p-4 pt-10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300/90">
                      {panel.label}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Hover to preview emphasis — swap for PNG/WebP captures.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Problem → Solution */}
          <div className="grid gap-4 lg:grid-cols-2">
            <motion.article
              {...fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-300/90">
                Problem
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {project.caseStudyProblemLead}
              </p>
            </motion.article>
            <motion.article
              {...fadeUp}
              className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
                Solution
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200 sm:text-base">
                {project.caseStudySolutionLead}
              </p>
            </motion.article>
          </div>

          {/* Key features */}
          <motion.div {...fadeUp} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
              Key features
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.caseStudyFeatures.map((f) => (
                <motion.div
                  key={f.title}
                  whileHover={{ y: -3 }}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-zinc-900/60 p-4 shadow-md transition hover:border-cyan-400/30 hover:shadow-cyan-500/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10">
                    <FeatureIcon icon={f.icon} />
                  </div>
                  <p className="text-sm font-medium leading-snug text-zinc-200">{f.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div {...fadeUp} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
              Tech stack
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.techStackGroups.map((g) => (
                <div
                  key={g.label}
                  className="rounded-2xl border border-white/10 bg-zinc-900/50 p-4 shadow-inner"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {g.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/12 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What I did */}
          <motion.div {...fadeUp} className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-6 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
              What I did
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.contribution.map((line) => (
                <li
                  key={line}
                  className="flex gap-2 text-sm leading-relaxed text-zinc-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Impact */}
          <motion.div
            {...fadeUp}
            className="rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.06] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
              Impact / engineering highlights
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {project.engineeringHighlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-cyan-400" aria-hidden>
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-zinc-400">
              {project.impact}
            </p>
          </motion.div>

          {/* Challenges */}
          <motion.div {...fadeUp} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
              Challenges & solutions
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {project.challenges.map((c) => (
                <div
                  key={c.challenge}
                  className="rounded-2xl border border-white/10 bg-zinc-900/55 p-5 shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-rose-300/85">
                    Challenge
                  </p>
                  <p className="mt-2 text-sm text-zinc-200">{c.challenge}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-300/85">
                    Solution
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">{c.solution}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            className="rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-500/10 via-transparent to-indigo-500/10 p-6 text-center sm:p-8"
          >
            <p className="text-lg font-semibold text-white sm:text-xl">
              Open to MERN Stack opportunities
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
              If this case study matches the kind of product work you ship, let’s connect.
            </p>
            <motion.a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
