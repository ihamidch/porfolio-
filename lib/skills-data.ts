import type { IconId } from "@/components/icons";

export type SkillItem = { name: string; icon: IconId };

export type SkillCategory = {
  id: string;
  title: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "JavaScript / TypeScript", icon: "code" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML & CSS", icon: "layout" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "server" },
      { name: "REST & GraphQL APIs", icon: "api" },
      { name: "JWT Auth", icon: "lock" },
      { name: "Python", icon: "code" },
      { name: "FastAPI", icon: "api" },
    ],
  },
  {
    id: "database",
    title: "Database",
    items: [
      { name: "MongoDB", icon: "mongo" },
      { name: "Mongoose", icon: "db" },
      { name: "Schema design", icon: "schema" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    items: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "cloud" },
      { name: "AWS & Terraform", icon: "aws" },
      { name: "VS Code / Postman", icon: "tool" },
      { name: "LLMs", icon: "cloud" },
      { name: "LangChain", icon: "tool" },
      { name: "RAG Pipelines", icon: "schema" },
      { name: "Vector DB (FAISS / Pinecone)", icon: "db" },
      { name: "Hugging Face", icon: "cloud" },
    ],
  },
];
