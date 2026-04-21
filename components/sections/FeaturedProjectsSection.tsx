"use client";

import { motion } from "framer-motion";
import {
  featuredProjects,
  mainFeaturedProject,
  secondaryFeaturedProject,
} from "@/lib/featured-projects";
import { deployHostname, projectGradientClass } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/components/motion-presets";

function ProjectCard({
  headline,
  tagline,
  narrative,
  stack,
  gradient,
  liveUrl,
  repoUrl,
  apiUrl,
}: {
  headline: string;
  tagline: string;
  narrative: string;
  stack: string[];
  gradient: string;
  liveUrl: string;
  repoUrl: string;
  apiUrl?: string;
}) {
  const grad = projectGradientClass(gradient);
  return (
    <motion.article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-br bg-zinc-950/40 p-1 shadow-xl shadow-black/40 transition duration-300 hover:shadow-cyan-500/20 ${grad}`}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="flex h-full flex-col rounded-[0.9rem] border border-white/5 bg-zinc-950/80 p-6 backdrop-blur-sm">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/80">
          {tagline}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">{headline}</h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{narrative}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-1 font-mono text-[11px] text-zinc-500">
          <p>
            <span className="text-zinc-600">App · </span>
            {deployHostname(liveUrl)}
          </p>
          {apiUrl ? (
            <p>
              <span className="text-zinc-600">API · </span>
              {deployHostname(apiUrl)}
            </p>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-white/5 pt-6">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2.5 text-center text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 sm:flex-none"
          >
            Live demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-cyan-500/50 hover:bg-white/5"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 space-y-12 px-4 py-20 sm:px-8 lg:px-12"
    >
      <motion.div {...fadeUp}>
        <SectionHeading
          eyebrow="Featured SaaS Projects"
          title="Startup-style Product Showcase"
          description="Two product-grade case studies up front, followed by additional production builds."
        />
      </motion.div>

      <motion.article
        {...fadeUp}
        whileHover={{ scale: 1.012, y: -8 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/35 bg-gradient-to-br from-cyan-600/15 via-blue-500/10 to-zinc-950/70 p-1 shadow-2xl shadow-cyan-500/20"
      >
        <div className="grid gap-8 rounded-[1.35rem] border border-white/10 bg-zinc-950/90 p-6 sm:p-8 lg:grid-cols-[1.45fr_1fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {mainFeaturedProject.label}
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {mainFeaturedProject.title}
              </h3>
              <p className="text-sm font-medium text-cyan-200/90 sm:text-base">
                {mainFeaturedProject.subtitle}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
                  Overview
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {mainFeaturedProject.overview}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {mainFeaturedProject.problem}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
                  Solution
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {mainFeaturedProject.solution}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
                Key Features
              </p>
              <ul className="grid gap-3 text-sm leading-relaxed text-zinc-300 sm:grid-cols-2">
                {mainFeaturedProject.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {mainFeaturedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-mono text-xs text-zinc-500">
                {deployHostname(mainFeaturedProject.liveUrl)}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={mainFeaturedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
              >
                Live Demo
              </a>
              <a
                href={mainFeaturedProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-500 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-cyan-400/70 hover:bg-white/5"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </motion.article>

      <motion.article
        {...fadeUp}
        whileHover={{ scale: 1.008, y: -6 }}
        transition={{ type: "spring", stiffness: 240, damping: 24 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo-600/12 via-violet-500/10 to-zinc-950/70 p-1 shadow-xl shadow-indigo-500/15"
      >
        <div className="grid gap-6 rounded-[1.3rem] border border-white/10 bg-zinc-950/90 p-6 sm:p-7 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border border-indigo-300/30 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
              {secondaryFeaturedProject.label}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {secondaryFeaturedProject.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-indigo-100/90">
                {secondaryFeaturedProject.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {secondaryFeaturedProject.description}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200/90">
                Key Features
              </p>
              <ul className="grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
                {secondaryFeaturedProject.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200/90">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {secondaryFeaturedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 space-y-1 font-mono text-xs text-zinc-500">
                {deployHostname(secondaryFeaturedProject.liveUrl)}
              </p>
              {secondaryFeaturedProject.apiUrl ? (
                <p className="mt-1 font-mono text-xs text-zinc-500">
                  API · {deployHostname(secondaryFeaturedProject.apiUrl)}
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={secondaryFeaturedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-indigo-500/25 transition hover:brightness-110"
              >
                Live Demo
              </a>
              <a
                href={secondaryFeaturedProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-500 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-indigo-400/70 hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.article>

      <motion.div {...fadeUp}>
        <SectionHeading
          eyebrow="Supporting Project"
          title="Full-stack Task Management App"
          description="A clean supporting SaaS card that demonstrates collaboration workflows, responsive UX, and deployment-ready MERN architecture."
        />
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((fp) => (
          <ProjectCard
            key={fp.showcase.id}
            headline={fp.headline}
            tagline={fp.tagline}
            narrative={fp.narrative}
            stack={fp.stack}
            gradient={fp.gradient}
            liveUrl={fp.showcase.liveUrl}
            repoUrl={fp.showcase.repoUrl}
            apiUrl={fp.showcase.apiUrl}
          />
        ))}
      </div>
    </section>
  );
}
