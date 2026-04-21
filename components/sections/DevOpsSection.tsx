"use client";

import { motion } from "framer-motion";
import { devOpsShowcases, devopsCapabilities } from "@/lib/portfolio-data";
import { deployHostname } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/components/motion-presets";

export function DevOpsSection() {
  return (
    <section
      id="devops"
      className="scroll-mt-24 space-y-12 px-4 py-20 sm:px-8 lg:px-12"
    >
      <motion.div {...fadeUp}>
        <SectionHeading
          eyebrow="Delivery"
          title="DevOps & cloud"
          description="Infrastructure automation and live deployment surfaces you can verify in the browser—Terraform, Docker, AWS, and Vercel-hosted APIs."
        />
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {devopsCapabilities.map((cap) => (
          <motion.article
            key={cap.title}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-6 shadow-lg shadow-black/30"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
              {cap.tech}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">{cap.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{cap.detail}</p>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto max-w-6xl space-y-6">
        <h3 className="text-lg font-semibold text-zinc-200">Live deployments</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {devOpsShowcases.map((item) => (
            <motion.a
              key={item.id}
              href={item.liveUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-950/70 p-6 shadow-lg transition hover:border-cyan-500/35"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/80">
                {item.label}
              </p>
              <h4 className="mt-2 text-lg font-medium text-white">{item.title}</h4>
              <p className="mt-2 flex-1 text-sm text-zinc-400">{item.summary}</p>
              <p className="mt-4 font-mono text-xs text-zinc-500">
                {deployHostname(item.liveUrl)}
              </p>
              <span className="mt-4 text-sm font-medium text-cyan-400 group-hover:text-cyan-300">
                Open →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
