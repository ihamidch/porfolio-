import type { ProjectShowcase } from "@/lib/portfolio-data";
import {
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

export type MainFeaturedProject = {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
};

export const mainFeaturedProject: MainFeaturedProject = {
  title: "MERN E-commerce Platform",
  description:
    "A full-stack production-style e-commerce application built using MERN stack with authentication, admin dashboard, cart, checkout, and order management system.",
  features: [
    "JWT Authentication (Login/Signup)",
    "Role-based Access (Admin/User)",
    "Product Management System",
    "Cart & Checkout Flow",
    "Order Management System",
    "Admin Dashboard (CRUD operations)",
    "REST API Integration",
    "Fully Responsive UI",
  ],
  techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  liveUrl: "https://ecommerece-mern-jiq2p8nuv-ihamidchs-projects.vercel.app/",
  repoUrl: "https://github.com/ihamidch/Ecommerece",
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
    showcase: freelancerProject,
    headline: "Job Portal",
    tagline: "Freelancer marketplace — jobs, bids, and profiles",
    narrative:
      "Two-sided marketplace connecting employers and freelancers: job posts, applications, and role-aware views. Same MERN discipline as the other apps—its own API URL, its own database boundary, and React screens tuned for hiring-style workflows you can demo live.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    gradient: "indigo",
  },
];
