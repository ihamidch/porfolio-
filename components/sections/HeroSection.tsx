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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(99,102,241,0.2),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(20,184,166,0.14),transparent_35%)]" />
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-gradient-to-t from-cyan-500/10 to-transparent blur-2xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          {...fadeUp}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/95 shadow-lg shadow-cyan-500/5">
            Open to opportunities · {siteConfig.location}
          </div>

          <div className="space-y-5">
            <p className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
              {siteConfig.name}
            </p>
            <h1 className="max-w-4xl text-2xl font-semibold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                {siteConfig.headline}
              </span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-200 sm:text-xl">
              {siteConfig.summary}
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {siteConfig.heroDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-1 text-sm text-zinc-300 sm:text-base">
            {siteConfig.heroHighlights.map((item) => (
              <span
                key={item.text}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-inner backdrop-blur-sm"
              >
                <span aria-hidden>{item.emoji}</span>
                <span className="font-medium">{item.text}</span>
              </span>
            ))}
          </div>

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
            <motion.a
              href="/Hamids_cv.pdf"
              download
              className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-8 py-3.5 text-sm font-semibold text-cyan-200 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-500/20 hover:text-cyan-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
