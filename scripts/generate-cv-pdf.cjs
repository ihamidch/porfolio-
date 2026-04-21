/**
 * Regenerates public/Hamid-Rafique-CV.pdf (run: npm run cv:pdf).
 * Requires: npm install (pdfkit is a devDependency).
 */
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const OUT = path.join(__dirname, "../public/Hamid-Rafique-CV.pdf");
const MARGIN = 48;
const WIDTH = 595.28 - MARGIN * 2; // A4

function ensureSpace(doc, need = 80) {
  if (doc.y > 750 - need) doc.addPage();
}

function heading(doc, text) {
  ensureSpace(doc, 40);
  doc.moveDown(0.4);
  doc.font("Helvetica-Bold").fontSize(11).fillColor("#000000").text(text.toUpperCase(), {
    width: WIDTH,
  });
  doc.moveTo(MARGIN, doc.y + 2).lineTo(MARGIN + WIDTH, doc.y + 2).stroke();
  doc.moveDown(0.35);
}

function body(doc) {
  doc.font("Helvetica").fontSize(10).fillColor("#000000");
}

function bullet(doc, text) {
  ensureSpace(doc, 36);
  body(doc);
  doc.text(`• ${text}`, MARGIN + 8, doc.y, {
    width: WIDTH - 8,
    align: "left",
  });
}

const doc = new PDFDocument({ size: "A4", margin: MARGIN });
const stream = fs.createWriteStream(OUT);
doc.pipe(stream);

doc.font("Helvetica-Bold").fontSize(20).text("HAMID RAFIQUE", { align: "center" });
doc.moveDown(0.3);
body(doc);
doc.fontSize(10).text(
  "Lahore, Pakistan | +92 324-6763616",
  { align: "center", width: WIDTH },
);
doc.text("hamidch0866@gmail.com", {
  align: "center",
  link: "mailto:hamidch0866@gmail.com",
  underline: true,
  width: WIDTH,
});
doc.fillColor("blue");
doc.text("github.com/ihamidch", {
  align: "center",
  link: "https://github.com/ihamidch",
  underline: true,
  width: WIDTH,
});
doc.text("LinkedIn", {
  align: "center",
  link: "https://linkedin.com/in/hamid-rafique-a75b9a3a5",
  underline: true,
  width: WIDTH,
});
doc.fillColor("#000000");
doc.moveDown(0.8);

heading(doc, "Education");
body(doc);
doc.font("Helvetica-Bold").text("University of Sahiwal (UoS) — Bachelor of Science in Computer Science");
doc.font("Helvetica").text("Sahiwal, Pakistan · 2021 — 2025");
doc.text("Cumulative GPA: 3.47 / 4.0");
doc.moveDown(0.5);

heading(doc, "Experience");

body(doc);
doc.font("Helvetica-Bold").text("INTRAGUARD — Software Developer");
doc.font("Helvetica-Oblique").text("Remote    Sep 2025 — Present");
bullet(doc, "Developed and maintained full-stack MERN web applications with a focus on scalability.");
bullet(doc, "Contributed to an industry-level website with GraphQL API integration.");
doc.moveDown(0.35);

body(doc);
doc.font("Helvetica-Bold").text("METALOGICS — React.js Developer (MERN Stack)");
doc.font("Helvetica-Oblique").text("Lahore, Pakistan    2024 — 2025");
bullet(doc, "Built responsive React frontends integrated with Node.js backends.");
bullet(doc, "Managed state with Redux/Context API and optimized MongoDB-backed queries.");
doc.moveDown(0.35);

body(doc);
doc.font("Helvetica-Bold").text("FLUXXION — Data Analysis Intern");
doc.font("Helvetica-Oblique").text("Remote, Pakistan    May 2025 — Jul 2025");
bullet(doc, "Data cleaning, transformation, and visualization with Power BI and Python.");
bullet(doc, "SQL queries for business metrics and reporting.");
doc.moveDown(0.35);

body(doc);
doc.font("Helvetica-Bold").text("CYBERWINGS.PK — DevOps Engineer Associate");
doc.font("Helvetica-Oblique").text("Lahore, Pakistan    2025");
bullet(doc, "Automated infrastructure for Python and Node.js with Terraform and AWS.");
bullet(doc, "Containerized AI workflows with Docker for high availability.");
doc.moveDown(0.5);

heading(doc, "Technical Skills");
bullet(doc, "Languages: Python, JavaScript, C++, SQL (MS-SQL, MySQL), HTML5, CSS, LaTeX");
bullet(doc, "Frameworks: MERN stack, Next.js, FastAPI, LangChain, Tailwind CSS, GraphQL");
bullet(doc, "Tools: Git, GitHub, Docker, AWS, Terraform, VS Code, Postman, Power BI");
doc.moveDown(0.5);

heading(doc, "Selected projects (aligned with portfolio)");
body(doc);
doc.font("Helvetica-Bold").text("Production MERN — separate Vercel frontends & APIs");
doc.font("Helvetica").fontSize(9);
bullet(
  doc,
  "E-commerce platform (MERN): ecommerece-mern-web.vercel.app — github.com/ihamidch/Ecommerece",
);
bullet(
  doc,
  "Freelancer marketplace (MERN): frontend-kappa-amber-29.vercel.app — github.com/ihamidch/Freelancer-Marketplace",
);
bullet(
  doc,
  "TalentScout AI (MERN + optional AI engine): talentscout-ai-web.vercel.app — github.com/ihamidch/talentscout-ai",
);
doc.moveDown(0.25);
body(doc);
doc.font("Helvetica-Bold").text("Portfolio site");
doc.font("Helvetica").fontSize(9);
bullet(
  doc,
  "Next.js 15 portfolio (MERN & DevOps showcase): porfolio-ihamidchs-projects.vercel.app — github.com/ihamidch/porfolio-",
);
doc.moveDown(0.25);
body(doc);
doc.font("Helvetica-Bold").text("Additional highlights");
doc.font("Helvetica").fontSize(9);
bullet(
  doc,
  "Aqua Insights — ML / data analysis (aqua-insights.vercel.app)",
);
bullet(doc, "MoodSnap — Flutter, Python, AI image processing (Google Drive demo)");
bullet(doc, "Sehat Online — Next.js, MSSQL, NLP chatbot (sehat-online-frontend.vercel.app)");
doc.moveDown(0.5);

heading(doc, "Leadership & extracurricular");
bullet(doc, "Dr. Coders Ambassador — Jul 2025 — Sep 2025");
bullet(doc, "MT bytes Ambassador — Jul 2025 — Oct 2025");
bullet(doc, "Microsoft Learn Student Ambassadors (Beta) — Oct 2023 — Dec 2025");
bullet(doc, "MLSA UoS Chapter — Co Director Team Management — Sep 2024 — Dec 2025");
doc.moveDown(0.5);

heading(doc, "Certifications & courses");
bullet(doc, "HCIA — Huawei AI | Azure Data Scientist Associate | Data Mining & BI (NAVTTC)");
bullet(doc, "Agile fundamentals (PMI) | Problem Solving & SQL (HackerRank)");

doc.end();

stream.on("finish", () => {
  const st = fs.statSync(OUT);
  console.log("Wrote", OUT, `(${st.size} bytes)`);
});
