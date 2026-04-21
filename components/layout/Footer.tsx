import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#050810] px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year} {siteConfig.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-6">
          <a href={siteConfig.githubUrl} className="hover:text-cyan-400">
            GitHub
          </a>
          <a href={siteConfig.linkedinUrl} className="hover:text-cyan-400">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
