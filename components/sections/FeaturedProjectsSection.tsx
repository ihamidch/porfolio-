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
  tint: "indigo" | "emerald" | "cyan";
  compact?: boolean;
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
  compact = false,
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
      : tint === "cyan"
        ? {
            shell:
              "border-cyan-400/25 from-cyan-600/12 via-blue-500/10 to-zinc-950/70 shadow-cyan-500/15",
            badge: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200",
            label: "text-cyan-200/90",
            cta:
              "from-cyan-400 to-teal-400 shadow-cyan-500/25 hover:border-cyan-400/70",
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
      whileHover={{ scale: 1.015, y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className={`overflow-hidden rounded-3xl border bg-gradient-to-br p-1 shadow-xl ${tintClasses.shell}`}
    >
      <div className={`grid rounded-[1.3rem] border border-white/10 bg-zinc-950/90 p-6 sm:p-7 ${compact ? "gap-4" : "gap-6"}`}>
        <div className={compact ? "space-y-3" : "space-y-4"}>
          <div className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${tintClasses.badge}`}>
            {label}
          </div>
          <div>
            <h3 className={`${compact ? "text-xl" : "text-2xl"} font-semibold text-white`}>
              {title}
            </h3>
            <p className="mt-2 text-sm font-medium text-zinc-200/90">{subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{description}</p>
          </div>
          <div className={compact ? "space-y-2" : "space-y-3"}>
            <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${tintClasses.label}`}>
              Key Features
            </p>
            <ul className={`grid gap-2 text-sm text-zinc-300 ${compact ? "" : "sm:grid-cols-2"}`}>
              {(compact ? keyFeatures.slice(0, 3) : keyFeatures).map((feature) => (
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

        <div className={`flex flex-col rounded-2xl border border-white/10 bg-zinc-900/70 p-5 ${compact ? "gap-4" : "gap-5"}`}>
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${tintClasses.label}`}>
              Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(compact ? techStack.slice(0, 5) : techStack).map((tech) => (
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
          title="Product-style Project Showcase"
          description="Clear hierarchy for recruiters: flagship e-commerce platform first, then marketplace and task system highlights."
        />
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        <motion.article
          {...fadeUp}
          whileHover={{ scale: 1.015, y: -8 }}
          transition={{ type: "spring", stiffness: 230, damping: 22 }}
          className="overflow-hidden rounded-3xl border border-cyan-400/35 bg-gradient-to-br from-cyan-600/15 via-blue-500/10 to-zinc-950/70 p-1 shadow-2xl shadow-cyan-500/20 lg:col-span-2"
        >
          <div className="grid gap-6 rounded-[1.3rem] border border-white/10 bg-zinc-950/90 p-6 sm:p-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                FEATURED PROJECT ⭐
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  MERN E-commerce SaaS Platform ⭐
                </h3>
                <p className="mt-2 text-sm font-medium text-cyan-100/90 sm:text-base">
                  {mainFeaturedProject.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Full-stack e-commerce system with authentication, cart,
                  checkout, and admin dashboard.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/90">
                Features
              </p>
              <ul className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                <li className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  JWT Authentication & Role-based access
                </li>
                <li className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  Cart & Order Management
                </li>
                <li className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  Admin Dashboard (CRUD operations)
                </li>
                <li className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  Responsive SaaS UI
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-zinc-900/70 p-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/90">
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
                  App · {deployHostname(mainFeaturedProject.liveUrl)}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={mainFeaturedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
                >
                  Live Demo
                </a>
                <a
                  href={mainFeaturedProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-500 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-cyan-400/70 hover:bg-white/5"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-6">
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
            compact
          />
        </div>
      </div>
    </section>
  );
}
