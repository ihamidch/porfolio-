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
