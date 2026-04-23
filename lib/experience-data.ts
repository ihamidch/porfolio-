export type JobEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

/** Professional roles */
export const professionalExperience: JobEntry[] = [
  {
    id: "intraguard",
    role: "Software Developer",
    company: "IntraGuard",
    period: "Sep 2025 – Present",
    location: "Remote",
    highlights: [
      "Architect and maintain MERN applications with scalable service boundaries and maintainable API contracts.",
      "Integrated GraphQL-driven features alongside REST services and shipped release-ready production modules.",
    ],
  },
  {
    id: "cyberwings",
    role: "DevOps Engineer Associate",
    company: "CyberWings.pk",
    period: "2025",
    location: "Lahore, Pakistan",
    highlights: [
      "Automated AWS infrastructure provisioning with Terraform and hardened Docker-based deployment workflows.",
      "Standardized CI-style delivery patterns for Node.js and Python services to improve release reliability.",
    ],
  },
  {
    id: "metalogics",
    role: "React.js Developer (MERN Stack)",
    company: "Metalogics",
    period: "2024 – 2025",
    location: "Lahore, Pakistan",
    highlights: [
      "Engineered responsive React interfaces integrated with Node.js backends and MongoDB-backed APIs.",
      "Optimized client-side performance with improved data-loading strategy and robust Context/Redux state patterns.",
    ],
  },
];

/** Framed like a role — highlights shipped MERN work */
export const selfProjectExperience: JobEntry = {
  id: "self-mern",
  role: "MERN Stack Engineer (Self Projects)",
  company: "Independent — Production apps on Vercel",
  period: "2024 – Present",
  location: "Remote",
  highlights: [
    "Owned three independent MERN products (e-commerce, marketplace, task management), each with isolated Express APIs and MongoDB persistence layers.",
    "Implemented JWT auth, role-based access, dashboard workflows, and REST integrations with production-style end-to-end verification.",
    "Deployed frontend and API services with environment-specific routing so each client communicates only with its matching backend.",
    "Iterated on React UX, Express API contracts, and MongoDB schema evolution using the same standards expected in product engineering teams.",
  ],
};
