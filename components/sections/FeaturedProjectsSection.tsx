"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/featured-projects";
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
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-br bg-zinc-950/40 p-1 shadow-xl shadow-black/40 transition duration-300 ${grad}`}
      whileHover={{ y: -6 }}
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
          eyebrow="Featured work"
          title="Production MERN builds"
          description="Three separate stacks—each with its own Express API and MongoDB data plane on Vercel. Frontends only target their paired backend; no shared URLs across repos."
        />
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
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
