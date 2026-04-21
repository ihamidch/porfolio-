"use client";

import { motion } from "framer-motion";
import {
  mainFeaturedProject,
  secondaryFeaturedProject,
  supportingFeaturedProject,
} from "@/lib/featured-projects";
import { deployHostname } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/components/motion-presets";

type MediumFeaturedCardProps = {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  apiUrl?: string;
  tint: "indigo" | "emerald";
};

function MediumFeaturedCard({
  label,
  title,
  subtitle,
  description,
  keyFeatures,
  techStack,
  liveUrl,
  repoUrl,
  apiUrl,
  tint,
}: MediumFeaturedCardProps) {
  const tintClasses =
    tint === "emerald"
      ? {
          shell:
            "border-emerald-400/25 from-emerald-600/12 via-teal-500/10 to-zinc-950/70 shadow-emerald-500/15",
          badge:
            "border-emerald-300/30 bg-emerald-400/10 text-emerald-200",
          label: "text-emerald-200/90",
          cta:
            "from-emerald-400 to-teal-400 shadow-emerald-500/25 hover:border-emerald-400/70",
        }
      : {
          shell:
            "border-indigo-400/25 from-indigo-600/12 via-violet-500/10 to-zinc-950/70 shadow-indigo-500/15",
          badge:
            "border-indigo-300/30 bg-indigo-400/10 text-indigo-200",
          label: "text-indigo-200/90",
          cta:
            "from-indigo-400 to-violet-400 shadow-indigo-500/25 hover:border-indigo-400/70",
        };

  return (
    <motion.article
      {...fadeUp}
      whileHover={{ scale: 1.008, y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className={`overflow-hidden rounded-3xl border bg-gradient-to-br p-1 shadow-xl ${tintClasses.shell}`}
    >
      <div className="grid gap-6 rounded-[1.3rem] border border-white/10 bg-zinc-950/90 p-6 sm:p-7">
        <div className="space-y-4">
          <div className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${tintClasses.badge}`}>
            {label}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm font-medium text-zinc-200/90">{subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{description}</p>
          </div>
          <div className="space-y-2">
            <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${tintClasses.label}`}>
              Key Features
            </p>
            <ul className="grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
              {keyFeatures.map((feature) => (
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

        <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${tintClasses.label}`}>
              Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs text-zinc-500">
              App · {deployHostname(liveUrl)}
            </p>
            {apiUrl ? (
              <p className="mt-1 font-mono text-xs text-zinc-500">
                API · {deployHostname(apiUrl)}
              </p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg transition hover:brightness-110 ${tintClasses.cta}`}
            >
              Live Demo
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-500 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
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
          description="Flagship e-commerce case study first, then two SaaS product cards with clear hierarchy and strong CTA paths."
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

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <MediumFeaturedCard
          label={secondaryFeaturedProject.label}
          title={secondaryFeaturedProject.title}
          subtitle={secondaryFeaturedProject.subtitle}
          description={secondaryFeaturedProject.description}
          keyFeatures={secondaryFeaturedProject.keyFeatures}
          techStack={secondaryFeaturedProject.techStack}
          liveUrl={secondaryFeaturedProject.liveUrl}
          repoUrl={secondaryFeaturedProject.repoUrl}
          apiUrl={secondaryFeaturedProject.apiUrl}
          tint="indigo"
        />
        <MediumFeaturedCard
          label={supportingFeaturedProject.label}
          title={supportingFeaturedProject.title}
          subtitle={supportingFeaturedProject.subtitle}
          description={supportingFeaturedProject.description}
          keyFeatures={supportingFeaturedProject.keyFeatures}
          techStack={supportingFeaturedProject.techStack}
          liveUrl={supportingFeaturedProject.liveUrl}
          repoUrl={supportingFeaturedProject.repoUrl}
          apiUrl={supportingFeaturedProject.apiUrl}
          tint="emerald"
        />
      </div>
    </section>
  );
}
