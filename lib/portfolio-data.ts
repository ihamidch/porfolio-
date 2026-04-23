/**
 * Official production URLs per repo (separate Vercel projects—do not reuse across apps).
 * Override with NEXT_PUBLIC_* in `.env.local` if needed.
 */
const env = (key: string, fallback: string) => {
  const v =
    typeof process !== "undefined" ? process.env[key] : undefined;
  return v && v.length > 0 ? v : fallback;
};

export type ProjectShowcase = {
  id: "ecommerce" | "freelancer" | "tasks";
  title: string;
  label: string;
  summary: string;
  liveUrl: string;
  repoUrl: string;
  apiUrl?: string;
};

/** Ecommerece — Vercel: ecommerece-mern-web + backend-two-weld-46 */
export const ecommerceProject: ProjectShowcase = {
  id: "ecommerce",
  title: "E-commerce Platform",
  label: "MERN · Ecommerece (own Vercel projects)",
  summary:
    "Storefront, cart, checkout, admin—Express + MongoDB. Frontend uses VITE_API_URL pointing at this repo’s backend only.",
  liveUrl: env(
    "NEXT_PUBLIC_LIVE_ECOMMERCE",
    "https://ecommerece-mern-web.vercel.app",
  ),
  repoUrl: "https://github.com/ihamidch/Ecommerece",
  apiUrl: env(
    "NEXT_PUBLIC_LIVE_ECOMMERCE_API",
    "https://backend-two-weld-46.vercel.app",
  ),
};

/** Freelancer Marketplace — Vercel: freelancer-marketplace-web + freelancer-marketplace-api */
export const freelancerProject: ProjectShowcase = {
  id: "freelancer",
  title: "Freelancer Marketplace",
  label: "MERN · Freelancer-Marketplace (own Vercel projects)",
  summary:
    "Jobs, applications, employers, seekers—separate repo and hosts from E-commerce. VITE_API_URL targets this backend only.",
  liveUrl: env(
    "NEXT_PUBLIC_LIVE_FREELANCER",
    "https://frontend-kappa-amber-29.vercel.app",
  ),
  repoUrl: "https://github.com/ihamidch/Freelancer-Marketplace",
  apiUrl: env(
    "NEXT_PUBLIC_LIVE_FREELANCER_API",
    "https://backend-pi-khaki-68.vercel.app",
  ),
};

/** FlowBoard / full-stack task management — own client + API deployments */
export const tasksProject: ProjectShowcase = {
  id: "tasks",
  title: "Full-stack Task Management (FlowBoard)",
  label: "MERN · FlowBoard (own Vercel projects)",
  summary:
    "JWT auth, boards, lists, drag-and-drop tasks—live client and API per DEPLOYMENT.md; not shared with other repos.",
  liveUrl: env(
    "NEXT_PUBLIC_LIVE_TASKS",
    "https://client-eight-puce-44.vercel.app",
  ),
  repoUrl: "https://github.com/ihamidch/Full-stack-task-management",
  apiUrl: env(
    "NEXT_PUBLIC_LIVE_TASKS_API",
    "https://server-xi-khaki-22.vercel.app",
  ),
};

/** Three MERN production apps highlighted on the site (each repo = its own Vercel URLs). */
export const mernStackProjects: ProjectShowcase[] = [
  ecommerceProject,
  freelancerProject,
  tasksProject,
];

export const mernProjectsOther: ProjectShowcase[] = [];

export type DevOpsShowcase = {
  id: string;
  title: string;
  label: string;
  summary: string;
  liveUrl: string;
  repoUrl?: string;
};

export const devOpsShowcases: DevOpsShowcase[] = [
  {
    id: "api-ecommerce",
    title: "E-commerce — production API",
    label: "Vercel · Express · MongoDB",
    summary:
      "Ecommerece backend only (backend-two-weld-46). Not used by Freelancer or FlowBoard.",
    liveUrl: env(
      "NEXT_PUBLIC_LIVE_ECOMMERCE_API",
      "https://backend-two-weld-46.vercel.app",
    ),
    repoUrl: "https://github.com/ihamidch/Ecommerece",
  },
  {
    id: "api-freelancer",
    title: "Freelancer marketplace — production API",
    label: "Vercel · Express · MongoDB",
    summary:
      "Freelancer-Marketplace backend only (backend-pi-khaki-68). Not the e-commerce API.",
    liveUrl: env(
      "NEXT_PUBLIC_LIVE_FREELANCER_API",
      "https://backend-pi-khaki-68.vercel.app",
    ),
    repoUrl: "https://github.com/ihamidch/Freelancer-Marketplace",
  },
  {
    id: "api-flowboard",
    title: "FlowBoard — production API",
    label: "Vercel · Express",
    summary:
      "Full-stack-task-management API only (server-xi-khaki-22). Separate from other MERN backends.",
    liveUrl: env(
      "NEXT_PUBLIC_LIVE_TASKS_API",
      "https://server-xi-khaki-22.vercel.app",
    ),
    repoUrl: "https://github.com/ihamidch/Full-stack-task-management",
  },
  {
    id: "portfolio-site",
    title: "This portfolio",
    label: "Next.js 15 · Vercel",
    summary:
      "Static delivery on Vercel with automated production builds from Git.",
    liveUrl: env(
      "NEXT_PUBLIC_LIVE_PORTFOLIO",
      "https://porfolio-alpha-murex.vercel.app",
    ),
  },
];

export const devopsCapabilities = [
  {
    title: "Infrastructure as Code",
    detail: "Provisioning and managing cloud services with Terraform modules.",
    tech: "Terraform",
  },
  {
    title: "Containerization",
    detail: "Packaging and scaling complex Node.js and AI workflows in Docker.",
    tech: "Docker",
  },
  {
    title: "Cloud Automation",
    detail: "Deploying and optimizing workloads on AWS for reliability and cost.",
    tech: "AWS",
  },
  {
    title: "Orchestration & Delivery",
    detail: "Operating CI/CD pipelines with Kubernetes-oriented release workflows.",
    tech: "Kubernetes + CI/CD",
  },
] as const;
