import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { DevOpsSection } from "@/components/sections/DevOpsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const GitHubSection = dynamic(
  () =>
    import("@/components/sections/GitHubSection").then((m) => ({
      default: m.GitHubSection,
    })),
  {
    loading: () => (
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 lg:px-12">
        <div className="h-56 animate-pulse rounded-2xl bg-zinc-900/60" />
      </div>
    ),
  },
);

export default function Home() {
  return (
    <SiteChrome>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <GitHubSection />
        <DevOpsSection />
        <ContactSection />
      </main>
      <Footer />
    </SiteChrome>
  );
}
