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

export const mainFeaturedProject: MainFeaturedProject = {
  label: "FEATURED PROJECT ⭐",
  title: "MERN E-commerce Platform",
  subtitle:
    "Full-Stack SaaS E-commerce System with Admin Dashboard and Order Management",
  description:
    "A production-level full-stack e-commerce platform built using MERN stack with authentication, admin dashboard, cart system, checkout flow, and order management system.",
  overview:
    "A production-oriented shopping platform where users can discover products, manage carts, checkout, and track orders while administrators manage inventory and order operations in a dedicated dashboard.",
  problem:
    "Many small businesses need a single system for customer shopping and admin operations, but most starter e-commerce demos do not include role-aware flows, reliable order handling, or scalable API boundaries.",
  solution:
    "Built a MERN full-stack architecture with a React frontend, Node.js + Express API layer, and MongoDB persistence, backed by JWT authentication and role-based authorization for secure buyer/admin experiences.",
  keyFeatures: [
    "JWT Authentication (Login/Register)",
    "Role-based Access (Admin/User)",
    "Admin Dashboard (CRUD Products & Orders)",
    "Cart & Checkout System",
    "Order Management System",
    "REST API Architecture",
    "Fully Responsive UI",
  ],
  techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  liveUrl: "https://ecommerece-mern-jiq2p8nuv-ihamidchs-projects.vercel.app/",
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
    "Job posting system",
    "Freelancer applications",
    "Admin dashboard",
    "Role-based access",
  ],
  techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  liveUrl: freelancerProject.liveUrl,
  repoUrl: freelancerProject.repoUrl,
  apiUrl: freelancerProject.apiUrl,
};

/** Core three: Task Management, E-commerce, Job Portal (marketplace) */
export const featuredProjects: FeaturedProject[] = [
  {
    showcase: tasksProject,
    headline: "Full-stack Task Management App",
    tagline: "Supporting project · FlowBoard collaboration workspace",
    narrative:
      "A supporting MERN build focused on team productivity: authenticated workspaces, boards, and drag-and-drop task flow with dedicated API deployment. Built to demonstrate clean product UX and real-world collaboration patterns.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    gradient: "emerald",
  },
];
