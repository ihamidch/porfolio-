"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { fadeUp } from "@/components/motion-presets";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5 px-4 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-gradient-to-t from-cyan-500/10 to-transparent blur-2xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/95 shadow-lg shadow-cyan-500/5">
            Open to opportunities · {siteConfig.location}
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              {siteConfig.headline}
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {siteConfig.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-xl shadow-cyan-500/25 transition hover:shadow-cyan-400/40"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full border border-zinc-600 bg-zinc-900/50 px-8 py-3.5 text-sm font-semibold text-zinc-100 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-cyan-500/50 hover:bg-zinc-800/80 hover:text-cyan-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-500 underline-offset-4 transition hover:text-cyan-400 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-500 underline-offset-4 transition hover:text-cyan-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
