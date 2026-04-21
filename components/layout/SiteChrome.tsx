import type { ReactNode } from "react";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050810] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 code-grid opacity-50" />
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
