"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/components/motion-presets";

export function ContactSection() {
  const nextInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nextInput.current && typeof window !== "undefined") {
      nextInput.current.value = `${window.location.origin}${window.location.pathname}?sent=1`;
    }
  }, []);

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/5 bg-gradient-to-b from-transparent to-zinc-950/50 px-4 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Let’s talk"
            title="Contact"
            description="Send a message for roles, collaborations, or questions about the MERN work above. I reply on email."
          />
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            {...fadeUp}
            className="space-y-4 rounded-2xl border border-white/10 bg-zinc-950/60 p-8 shadow-xl"
          >
            <p className="text-sm font-medium text-zinc-300">
              Direct lines
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-lg font-semibold text-cyan-400 hover:text-cyan-300"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="block text-sm text-zinc-400 hover:text-zinc-200"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-zinc-400 hover:text-zinc-200"
            >
              {siteConfig.portfolioUrl}
            </a>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-600 px-5 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-500/50 hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-600 px-5 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-500/50 hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.form
            {...fadeUp}
            action={`https://formsubmit.co/${siteConfig.email}`}
            method="POST"
            className="space-y-4 rounded-2xl border border-white/10 bg-zinc-950/60 p-8 shadow-xl"
          >
            <input ref={nextInput} type="hidden" name="_next" id="contact-next" />
            <input
              type="hidden"
              name="_subject"
              value="Portfolio — contact form"
            />
            <input type="hidden" name="_template" value="table" />
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none ring-cyan-500/40 transition placeholder:text-zinc-600 focus:border-cyan-500/50 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none ring-cyan-500/40 transition placeholder:text-zinc-600 focus:border-cyan-500/50 focus:ring-2"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none ring-cyan-500/40 transition placeholder:text-zinc-600 focus:border-cyan-500/50 focus:ring-2"
                placeholder="Briefly share the role, stack, or timeline…"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 sm:w-auto sm:px-10"
            >
              Send message
            </button>
            <p className="text-xs text-zinc-600">
              Delivered via FormSubmit. First-time use may ask you to confirm the
              address in your inbox.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
