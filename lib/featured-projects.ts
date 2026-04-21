import type { ProjectShowcase } from "@/lib/portfolio-data";
import {
  ecommerceProject,
  freelancerProject,
  tasksProject,
} from "@/lib/portfolio-data";

export type ProjectGradient = "emerald" | "cyan" | "indigo";

export type FeaturedProject = {
  showcase: ProjectShowcase;
  /** Card title aligned with job-ready naming */
  headline: string;
  tagline: string;
  /** Longer, recruiter-friendly blurb */
  narrative: string;
  stack: string[];
  gradient: ProjectGradient;
};

/** Core three: Task Management, E-commerce, Job Portal (marketplace) */
export const featuredProjects: FeaturedProject[] = [
  {
    showcase: tasksProject,
    headline: "Task Management System",
    tagline: "FlowBoard — boards, lists, and drag-and-drop tasks",
    narrative:
      "End-to-end MERN app with JWT auth, workspaces, boards, and Kanban-style task movement. Built for teams that need clear ownership of work: lists roll up to boards, APIs stay scoped per deployment, and the React client talks only to its paired Express + MongoDB backend in production.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "DnD"],
    gradient: "emerald",
  },
  {
    showcase: ecommerceProject,
    headline: "E-commerce App",
    tagline: "Storefront through checkout with admin workflows",
    narrative:
      "Full shopping experience: product catalog, cart, and order flows backed by Express and MongoDB. Separated Vite client and API hosts so inventory and checkout logic stay isolated per environment—mirrors how real teams split services without cross-wiring secrets.",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST"],
    gradient: "cyan",
  },
  {
    showcase: freelancerProject,
    headline: "Job Portal",
    tagline: "Freelancer marketplace — jobs, bids, and profiles",
    narrative:
      "Two-sided marketplace connecting employers and freelancers: job posts, applications, and role-aware views. Same MERN discipline as the other apps—its own API URL, its own database boundary, and React screens tuned for hiring-style workflows you can demo live.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    gradient: "indigo",
  },
];
