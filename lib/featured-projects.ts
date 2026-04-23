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
  label: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
};

export type SecondaryFeaturedProject = {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  apiUrl?: string;
};

export type SupportingFeaturedProject = {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  apiUrl?: string;
};

export const mainFeaturedProject: MainFeaturedProject = {
  label: "FEATURED PROJECT ⭐",
  title: "MERN E-commerce SaaS Platform ⭐",
  subtitle:
    "Production-ready full-stack ecommerce with secure auth, admin controls, and optimized UX",
  description:
    "Built a full-stack MERN ecommerce application with secure JWT authentication, role-based access control, complete shopping workflows, and production deployment on Vercel.",
  overview:
    "A production-ready ecommerce platform where users browse products, manage carts, complete checkout, and track orders while admins control products, users, and order operations from a dedicated dashboard.",
  problem:
    "Most ecommerce demos skip production concerns like secure authentication, role-aware authorization, backend cart synchronization, API hardening, and reliable admin operations.",
  solution:
    "Implemented a hardened MERN architecture with protected routes, auth validation, rate limiting, secure headers, backend cart sync, CI checks, and environment-based frontend/backend deployment on Vercel.",
  impact:
    "Improved release confidence with CI checks, reduced auth attack surface through rate limiting and validation, and kept deployments stable using environment-specific frontend/backend routing.",
  keyFeatures: [
    "JWT authentication, role-based access, and protected routes",
    "Complete ecommerce flow: listing, details, cart, checkout, and order history",
    "Admin dashboard: product CRUD, order status, user role management",
    "Cloudinary-ready image upload support",
    "Security hardening: Helmet, Zod auth validation, and rate limiting",
    "Backend cart sync, loaders/skeletons, and responsive Tailwind UI",
    "CI pipeline with GitHub Actions for lint/build and backend boot checks",
  ],
  techStack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Axios",
    "Cloudinary",
    "Vercel",
    "GitHub Actions",
  ],
  liveUrl: "https://ecommerece-mern-web.vercel.app",
  repoUrl: "https://github.com/ihamidch/Ecommerece",
};

export const secondaryFeaturedProject: SecondaryFeaturedProject = {
  label: "FEATURED SAAS PROJECT",
  title: "Freelancer Marketplace SaaS Platform",
  subtitle:
    "Two-sided MERN marketplace for clients and freelancers with role-aware workflows",
  description:
    "A production-style SaaS marketplace where employers post jobs and freelancers apply with profile-based proposals. Includes role-based dashboard experiences and dedicated API boundaries for stable deployments.",
  keyFeatures: [
    "Client & Freelancer roles",
    "Job posting & applications",
    "Dashboard UI",
    "Workflow management",
  ],
  techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  liveUrl: freelancerProject.liveUrl,
  repoUrl: freelancerProject.repoUrl,
  apiUrl: freelancerProject.apiUrl,
};

export const supportingFeaturedProject: SupportingFeaturedProject = {
  label: "FEATURED SAAS PROJECT",
  title: "Task Management System",
  subtitle:
    "FlowBoard SaaS workspace for boards, lists, task tracking, and team collaboration",
  description:
    "A production-ready task management platform where teams organize work into boards and lists, track progress with drag-and-drop updates, and collaborate through authenticated role-aware workflows.",
  keyFeatures: [
    "Board & list management",
    "Drag-and-drop task flow",
    "Workspace collaboration",
    "Role-based access",
  ],
  techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  liveUrl: tasksProject.liveUrl,
  repoUrl: tasksProject.repoUrl,
  apiUrl: tasksProject.apiUrl,
};

/** Core three: Task Management, E-commerce, Job Portal (marketplace) */
export const featuredProjects: FeaturedProject[] = [
  {
    showcase: tasksProject,
    headline: "Full-stack Task Management App",
    tagline: "FlowBoard collaboration workspace",
    narrative:
      "Production-grade task workflow app with authenticated workspaces and drag-and-drop board management, deployed with a dedicated API surface.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    gradient: "emerald",
  },
];
