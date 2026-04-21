"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/components/motion-presets";

const user = siteConfig.githubUser;

const statsUrl = `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=dark&hide_border=true&bg_color=0a0a0f&title_color=22d3ee&icon_color=22d3ee&text_color=a1a1aa`;
const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=dark&hide_border=true&bg_color=0a0a0f&title_color=22d3ee&text_color=a1a1aa`;

export function GitHubSection() {
  return (
    <section
      id="github"
      className="scroll-mt-24 space-y-10 border-t border-white/5 px-4 py-20 sm:px-8 lg:px-12"
    >
      <motion.div {...fadeUp}>
        <SectionHeading
          eyebrow="Open source"
          title="GitHub"
          description="Live contribution snapshot and language mix—links go straight to repositories behind this portfolio."
        />
      </motion.div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 shadow-xl transition hover:border-cyan-500/30"
          >
            <Image
              src={statsUrl}
              alt={`${user} GitHub stats`}
              width={495}
              height={195}
              className="h-auto w-full"
              loading="lazy"
              unoptimized
            />
          </a>
          <a
            href={`${siteConfig.githubUrl}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 shadow-xl transition hover:border-cyan-500/30"
          >
            <Image
              src={langsUrl}
              alt={`${user} top languages`}
              width={495}
              height={195}
              className="h-auto w-full"
              loading="lazy"
              unoptimized
            />
          </a>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-6 text-sm text-zinc-400 lg:max-w-xs">
          <p className="font-medium text-zinc-200">Repositories</p>
          <p>
            Featured MERN apps above link to{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-cyan-300">
              Ecommerece
            </code>
            ,{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-cyan-300">
              Freelancer-Marketplace
            </code>
            ,{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-cyan-300">
              Full-stack-task-management
            </code>
            , and more under @{user}.
          </p>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300"
          >
            View profile →
          </a>
        </div>
      </div>
    </section>
  );
}
