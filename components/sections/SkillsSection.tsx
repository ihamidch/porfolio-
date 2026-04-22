"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/skills-data";
import { SkillIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerItem } from "@/components/motion-presets";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-white/5 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent px-4 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Capabilities"
            title="Tech Stack"
            description="Cleanly grouped technologies recruiters expect from a production-ready MERN developer."
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              {...staggerItem}
              className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 shadow-xl shadow-black/30 backdrop-blur-md transition hover:border-cyan-500/30 hover:shadow-cyan-500/5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
                {cat.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="text-cyan-400/90">
                      <SkillIcon id={item.icon} />
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
