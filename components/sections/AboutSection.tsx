"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/components/motion-presets";

const trustItems = [
  "Deployed on Vercel, Render, and MongoDB Atlas",
  "Full-stack MERN architecture",
  "Authentication and role-based systems",
] as const;

const stack = ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-white/5 bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent px-4 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Profile"
            title="About Me"
            description="I am a MERN Stack Developer focused on building full-stack SaaS applications."
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.article
            {...fadeUp}
            className="rounded-2xl border border-white/10 bg-zinc-950/65 p-7 shadow-xl shadow-black/25 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-cyan-500/10"
          >
            <p className="text-base leading-relaxed text-zinc-300">
              I specialize in React frontend development, Node.js backend APIs, and
              MongoDB database design. I build real-world systems that solve
              business problems.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                React frontend development
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                Node.js backend APIs
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                MongoDB database design
              </div>
            </div>
          </motion.article>

          <motion.article
            {...fadeUp}
            className="rounded-2xl border border-white/10 bg-zinc-950/65 p-7 shadow-xl shadow-black/25 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-cyan-500/10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
              Trust & Credibility
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              {trustItems.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.div
          {...fadeUp}
          className="rounded-2xl border border-white/10 bg-zinc-950/55 p-6 shadow-lg shadow-black/20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
            Core Tech Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-2 text-sm font-medium text-zinc-200 transition hover:-translate-y-0.5 hover:border-cyan-400/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.article
          {...fadeUp}
          className="rounded-2xl border border-white/10 bg-zinc-950/55 p-6 shadow-lg shadow-black/20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
            Technical Focus
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
            I prioritize clean, type-safe, and maintainable code with
            production-ready API boundaries. My delivery standard emphasizes
            secure auth flows, predictable deployments, and architecture that a
            team can scale without rewrites.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-200">
              Security-first authentication and validation
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-200">
              CI-driven quality checks before release
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-200">
              Scalable full-stack architecture decisions
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
