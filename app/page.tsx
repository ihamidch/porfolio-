"use client";

import { motion } from "framer-motion";
import type { ProjectShowcase } from "@/lib/portfolio-data";
import {
  devOpsShowcases,
  devopsCapabilities,
  mernStackProjects,
  mernProjectsOther,
} from "@/lib/portfolio-data";

const timeline = [
  {
    role: "Software Developer",
    company: "IntraGuard (UK-based, Remote)",
    period: "Sep 2025 - Present",
    location: "Remote",
    impact:
      "Developing scalable MERN applications and contributing to industry-level products with GraphQL API integration.",
  },
  {
    role: "DevOps Engineer Associate",
    company: "CyberWings.pk",
    period: "2025",
    location: "Lahore, Pakistan",
    impact:
      "Automated AWS infrastructure using Terraform and containerized high-availability AI and Node.js workloads with Docker.",
  },
  {
    role: "React.js Developer (MERN Stack)",
    company: "Metalogics",
    period: "2024 - 2025",
    location: "Lahore, Pakistan",
    impact:
      "Built responsive React frontends integrated with Node.js services and optimized MongoDB-backed data flows.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function isGitHubUrl(url: string) {
  return url.includes("github.com");
}

function deployHostname(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function mernCardBorderClass(id: ProjectShowcase["id"]) {
  if (id === "ecommerce") {
    return "border-cyan-600/35 hover:border-cyan-400/60";
  }
  if (id === "freelancer") {
    return "border-indigo-500/35 hover:border-indigo-400/55";
  }
  if (id === "tasks") {
    return "border-emerald-600/35 hover:border-emerald-400/55";
  }
  if (id === "talentscout") {
    return "border-fuchsia-600/35 hover:border-fuchsia-400/55";
  }
  return "border-zinc-800 hover:border-cyan-400/50";
}

function mernAnchorId(id: ProjectShowcase["id"]) {
  if (id === "ecommerce") return "mern-ecommerce";
  if (id === "freelancer") return "mern-freelancer";
  if (id === "tasks") return "mern-flowboard";
  if (id === "talentscout") return "mern-talentscout";
  return `mern-${id}`;
}

const navLinkClass =
  "text-sm text-zinc-400 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#070b14] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 code-grid opacity-55" />
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-56 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-[#070b14]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
          <span className="font-mono text-sm text-zinc-300">Hamid Rafique</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a className={navLinkClass} href="#mern">
              MERN
            </a>
            <a className={navLinkClass} href="#mern-ecommerce">
              E-commerce
            </a>
            <a className={navLinkClass} href="#mern-freelancer">
              Marketplace
            </a>
            <a className={navLinkClass} href="#mern-talentscout">
              TalentScout
            </a>
            <a className={navLinkClass} href="#devops">
              DevOps
            </a>
            <a className={navLinkClass} href="#experience">
              Experience
            </a>
            <a className={navLinkClass} href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 sm:px-10 lg:px-16">
        <motion.section {...reveal} className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
            Hamid Rafique - Software Developer at IntraGuard (UK-based, Remote)
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Full-Stack Engineer &amp; DevOps Specialist
          </h1>

          <p className="max-w-3xl text-lg text-zinc-300 sm:text-xl">
            I build scalable MERN applications and automate cloud infrastructure
            end-to-end. From product architecture to deployment pipelines, I
            ship production-ready platforms with performance, security, and
            maintainability in focus.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.linkedin.com/in/hamid-rafique-a75b9a3a5"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ihamidch"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800"
            >
              GitHub
            </a>
            <a
              href="/Hamid-Rafique-CV.pdf"
              className="rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
            >
              Download CV
            </a>
          </div>
        </motion.section>

        <motion.section id="mern" {...reveal} className="scroll-mt-28 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              MERN stack — live production apps
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">
              Three separate repositories, each with{" "}
              <strong className="font-medium text-zinc-300">
                its own Vercel frontend and API
              </strong>
              . Do not reuse one app&apos;s URLs in another repo—each build uses{" "}
              <span className="font-mono text-zinc-400">VITE_API_URL</span> (or
              equivalent) pointed only at that project&apos;s backend. Hostnames
              are on each card. Override with{" "}
              <span className="font-mono text-cyan-300/90">
                NEXT_PUBLIC_LIVE_*
              </span>{" "}
              in <span className="font-mono">.env.local</span> if URLs change.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Three MERN deployments (official demo links)
            </h3>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {mernStackProjects.map((project) => {
                const primaryIsRepo = isGitHubUrl(project.liveUrl);
                const anchorId = mernAnchorId(project.id);
                return (
                  <motion.article
                    id={anchorId}
                    key={project.id}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className={`scroll-mt-32 flex flex-col overflow-hidden rounded-2xl border bg-zinc-900/70 transition ${mernCardBorderClass(project.id)}`}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 flex-col p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                        {project.label}
                      </p>
                      <h3 className="mt-3 text-xl font-medium text-zinc-100">
                        {project.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-zinc-300">
                        {project.summary}
                      </p>
                      <div className="mt-4 space-y-1 font-mono text-[11px] leading-relaxed text-zinc-500">
                        <p>
                          <span className="text-zinc-600">App: </span>
                          {deployHostname(project.liveUrl)}
                        </p>
                        {project.apiUrl ? (
                          <p>
                            <span className="text-zinc-600">API: </span>
                            {deployHostname(project.apiUrl)}
                          </p>
                        ) : null}
                      </div>
                      <p className="mt-6 text-sm font-medium text-cyan-300">
                        {primaryIsRepo
                          ? "View on GitHub (add live URL in env)"
                          : "Open live app →"}
                      </p>
                    </a>
                    <div className="flex flex-wrap gap-3 border-t border-zinc-800/80 bg-zinc-950/40 px-6 py-4">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-zinc-400 underline-offset-4 hover:text-cyan-300 hover:underline"
                      >
                        Source code
                      </a>
                      {project.apiUrl ? (
                        <a
                          href={project.apiUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-zinc-400 underline-offset-4 hover:text-cyan-300 hover:underline"
                        >
                          Public API
                        </a>
                      ) : null}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {mernProjectsOther.length > 0 ? (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                More MERN projects
              </h3>
              <div className="grid gap-5 md:grid-cols-2">
                {mernProjectsOther.map((project) => {
                  const primaryIsRepo = isGitHubUrl(project.liveUrl);
                  return (
                    <motion.article
                      id={`mern-${project.id}`}
                      key={project.id}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className={`flex flex-col overflow-hidden rounded-2xl border bg-zinc-900/70 transition ${mernCardBorderClass(project.id)}`}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 flex-col p-6"
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                          {project.label}
                        </p>
                        <h3 className="mt-3 text-xl font-medium text-zinc-100">
                          {project.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-300">
                          {project.summary}
                        </p>
                        <div className="mt-4 space-y-1 font-mono text-[11px] leading-relaxed text-zinc-500">
                          <p>
                            <span className="text-zinc-600">App: </span>
                            {deployHostname(project.liveUrl)}
                          </p>
                          {project.apiUrl ? (
                            <p>
                              <span className="text-zinc-600">API: </span>
                              {deployHostname(project.apiUrl)}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-6 text-sm font-medium text-cyan-300">
                          {primaryIsRepo
                            ? "View on GitHub (add live URL in env)"
                            : "Open live app →"}
                        </p>
                      </a>
                      <div className="flex flex-wrap gap-3 border-t border-zinc-800/80 bg-zinc-950/40 px-6 py-4">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-zinc-400 underline-offset-4 hover:text-cyan-300 hover:underline"
                        >
                          Source code
                        </a>
                        {project.apiUrl ? (
                          <a
                            href={project.apiUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-medium text-zinc-400 underline-offset-4 hover:text-cyan-300 hover:underline"
                          >
                            Public API
                          </a>
                        ) : null}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          ) : null}
        </motion.section>

        <motion.section id="devops" {...reveal} className="scroll-mt-28 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              DevOps &amp; cloud delivery
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
              Tooling from Terraform through Kubernetes, plus real deployments
              you can hit in the browser (APIs and this site on Vercel).
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {devopsCapabilities.map((capability) => (
              <motion.article
                key={capability.title}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {capability.tech}
                </p>
                <h3 className="text-xl font-medium">{capability.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  {capability.detail}
                </p>
              </motion.article>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-medium text-zinc-200">
              Live DevOps &amp; deployment surfaces
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-500">
              Each MERN repo has its own API host on Vercel (e-commerce,
              Freelancer, FlowBoard, TalentScout)—same separation as the cards
              above; no shared backend URLs across projects.
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {devOpsShowcases.map((item) => (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 transition hover:border-cyan-400/50"
                >
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 flex-col p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                      {item.label}
                    </p>
                    <h4 className="mt-3 text-lg font-medium text-zinc-100">
                      {item.title}
                    </h4>
                    <p className="mt-2 flex-1 text-sm leading-7 text-zinc-300">
                      {item.summary}
                    </p>
                    <p className="mt-4 font-mono text-[11px] text-zinc-500">
                      <span className="text-zinc-600">Host: </span>
                      {deployHostname(item.liveUrl)}
                    </p>
                    <p className="mt-6 text-sm font-medium text-cyan-300">
                      Open deployment →
                    </p>
                  </a>
                  {item.repoUrl ? (
                    <div className="border-t border-zinc-800/80 bg-zinc-950/40 px-6 py-4">
                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-zinc-400 underline-offset-4 hover:text-cyan-300 hover:underline"
                      >
                        Source code
                      </a>
                    </div>
                  ) : null}
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          {...reveal}
          className="scroll-mt-28 space-y-6"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Experience Timeline
          </h2>
          <div className="space-y-4 border-l border-zinc-800 pl-6">
            {timeline.map((entry) => (
              <article
                key={`${entry.company}-${entry.period}`}
                className="relative"
              >
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-cyan-300" />
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {entry.period}
                </p>
                <h3 className="mt-2 text-xl font-medium">
                  {entry.role} - {entry.company}
                </h3>
                <p className="text-sm text-zinc-400">{entry.location}</p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  {entry.impact}
                </p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          {...reveal}
          className="scroll-mt-28 space-y-6 pb-10"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
          <div className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-lg font-medium text-zinc-100">Hamid Rafique</p>
              <p className="text-sm text-zinc-400">
                Lahore, Pakistan · Open to remote roles (UK / global teams)
              </p>
              <p className="text-sm text-zinc-400">
                Software Developer at IntraGuard (UK-based, Remote)
          </p>
        </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                className="text-cyan-300 underline-offset-4 hover:underline"
                href="mailto:hamidch0866@gmail.com"
              >
                hamidch0866@gmail.com
              </a>
              <a
                className="text-cyan-300 underline-offset-4 hover:underline"
                href="tel:+923246763616"
              >
                +92 324-6763616
              </a>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/hamid-rafique-a75b9a3a5"
            target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-200 underline-offset-4 hover:text-cyan-300 hover:underline"
                >
                  LinkedIn
          </a>
          <a
                  href="https://github.com/ihamidch"
            target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-200 underline-offset-4 hover:text-cyan-300 hover:underline"
          >
                  GitHub
          </a>
        </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
