"use client";

import { motion } from "framer-motion";
import {
  professionalExperience,
  selfProjectExperience,
} from "@/lib/experience-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/components/motion-presets";

function TimelineBlock({
  role,
  company,
  period,
  location,
  highlights,
  accent = "cyan",
}: {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  accent?: "cyan" | "emerald";
}) {
  const dot =
    accent === "emerald"
      ? "bg-emerald-400 shadow-emerald-400/50"
      : "bg-cyan-400 shadow-cyan-400/50";
  return (
    <article className="relative pb-12 last:pb-0">
      <span
        className={`absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full shadow-[0_0_12px] ${dot}`}
      />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
        {period}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-white">
        {role}{" "}
        <span className="font-normal text-zinc-500">· {company}</span>
      </h3>
      <p className="mt-1 text-sm text-zinc-500">{location}</p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-zinc-400 marker:text-cyan-500/60">
        {highlights.map((h) => (
          <li key={h.slice(0, 40)} className="pl-1">
            {h}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 space-y-12 px-4 py-20 sm:px-8 lg:px-12"
    >
      <motion.div {...fadeUp}>
        <SectionHeading
          eyebrow="Background"
          title="Experience"
          description="Professional roles plus self-directed MERN delivery framed the way recruiters expect to read impact."
        />
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-8 text-lg font-semibold text-zinc-200">
            Professional roles
          </h3>
          <div className="border-l border-zinc-800 pl-8">
            {professionalExperience.map((job) => (
              <TimelineBlock
                key={job.id}
                role={job.role}
                company={job.company}
                period={job.period}
                location={job.location}
                highlights={job.highlights}
              />
            ))}
          </div>
        </div>

        <motion.div
          {...fadeUp}
          className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/30 to-zinc-950/80 p-8 shadow-xl shadow-emerald-900/20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400/90">
            Self projects experience
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            {selfProjectExperience.role}
          </h3>
          <p className="mt-1 text-sm text-emerald-200/70">
            {selfProjectExperience.company}
          </p>
          <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
            {selfProjectExperience.period} · {selfProjectExperience.location}
          </p>
          <ul className="mt-6 list-inside list-disc space-y-3 text-sm leading-relaxed text-zinc-300 marker:text-emerald-500/70">
            {selfProjectExperience.highlights.map((h) => (
              <li key={h.slice(0, 48)}>{h}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
