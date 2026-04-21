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
      "Build and maintain MERN applications with emphasis on scalability and maintainable API design.",
      "Integrate GraphQL in production features alongside REST services and collaborate on release-ready code.",
    ],
  },
  {
    id: "cyberwings",
    role: "DevOps Engineer Associate",
    company: "CyberWings.pk",
    period: "2025",
    location: "Lahore, Pakistan",
    highlights: [
      "Automated AWS infrastructure with Terraform and hardened Docker-based deployments.",
      "Supported Node.js and Python services with repeatable CI-style delivery patterns.",
    ],
  },
  {
    id: "metalogics",
    role: "React.js Developer (MERN Stack)",
    company: "Metalogics",
    period: "2024 – 2025",
    location: "Lahore, Pakistan",
    highlights: [
      "Delivered responsive React interfaces wired to Node.js backends and MongoDB-backed APIs.",
      "Improved data loading and state handling using Context/Redux patterns in client code.",
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
    "Owned three separate MERN codebases (e-commerce, job marketplace, task management), each with its own Express API and MongoDB layer deployed apart from the others.",
    "Implemented JWT auth, role-aware flows, dashboards, and REST integrations; verified end-to-end behavior against live staging-style URLs.",
    "Published client and API to Vercel with environment-driven configuration (e.g. VITE_API_URL) so frontends only talk to their matching backend.",
    "Iterated on UI/UX in React, API contracts in Express, and schema design in MongoDB—same discipline as shipping in a product team, applied to portfolio-grade demos.",
  ],
};
