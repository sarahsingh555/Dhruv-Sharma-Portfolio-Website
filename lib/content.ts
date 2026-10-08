// Source of truth: Dhruv Sharma's CV. Nothing here goes beyond it.
export const person = {
  name: "Dhruv Sharma",
  degree: "B.A. LL.B.",
  university: "Amity University, Noida",
  years: "2022—2027",
  city: "New Delhi",
  country: "India",
  email: "dhruvvsharmaa05@gmail.com",
  phone: "+91 98910 87876",
  whatsapp: "919891087876",
  linkedin: "https://www.linkedin.com/in/dhruvvsharmaa05/",
  site: "https://dhruv-sharma-portfolio-website.vercel.app",
};

export const sections = [
  { id: "profile", n: "01", label: "Profile" },
  { id: "experience", n: "02", label: "Experience" },
  { id: "exposure", n: "03", label: "Legal Exposure" },
  { id: "research", n: "04", label: "Research" },
  { id: "moot-courts", n: "05", label: "Moot Courts" },
  { id: "achievements", n: "06", label: "Achievements" },
  { id: "contact", n: "07", label: "Contact" },
] as const;

export const interests = [
  "Civil Litigation",
  "Constitutional Law",
  "Commercial Litigation",
  "Arbitration",
  "Property Law",
];

export const competencies = [
  "Statutory and precedent-based research",
  "Case briefs, research memoranda and legal summaries",
  "Review of pleadings, contracts and legal notices",
  "Drafting support: replies and legal queries",
  "Memorial drafting and oral advocacy",
];

export const tools = ["SCC Online", "Manupatra", "LexisNexis", "Microsoft Office"];
export const languages = ["English", "Hindi"];

export const experience = [
  {
    org: "International Investment & Law Consultants",
    areas: ["Civil Litigation", "Commercial Litigation", "Arbitration"],
    body: "Worked on litigation files through legal research, pleadings review, drafting support and factual analysis.",
  },
  {
    org: "Chambers of K.T.S. Tulsi",
    areas: ["Constitutional Law", "Administrative Law", "Criminal Litigation"],
    body: "Supported constitutional and administrative matters through precedent research and structured case preparation.",
  },
  {
    org: "Chambers of Vikas Pahwa",
    areas: ["Criminal Litigation"],
    body: "Researched criminal law issues and judicial precedents while assisting in litigation strategy.",
  },
  {
    org: "Advocate Gaurav Gupta",
    areas: ["Civil Litigation", "Property Litigation"],
    body: "Assisted in civil and property disputes before the Delhi High Court and District Courts through litigation research, writ preparation and procedural support.",
  },
  {
    org: "Justice Girish Kathpalia",
    areas: ["Delhi High Court"],
    body: "Observed judicial proceedings while assisting with research on statutory interpretation, judicial precedents and procedural law.",
  },
];

export const exposure = [
  {
    title: "Legal research & analysis",
    items: [
      "Statutory and precedent-based research",
      "Case briefs, research memoranda and legal summaries",
      "Analysis of pleadings and judicial decisions",
    ],
  },
  {
    title: "Litigation support",
    items: [
      "Review of pleadings, contracts and legal notices",
      "Assisting in drafting replies and legal queries",
      "Organising case files for hearings",
    ],
  },
  {
    title: "Courtroom practice",
    items: [
      "Observed proceedings before the Delhi High Court, District Courts and specialised tribunals",
      "Developed understanding of advocacy and judicial reasoning",
      "Mentioned a matter under counsel's instructions",
    ],
  },
];

export const research = [
  {
    title: "Judicial Oversight in Corporate-State Environmental Law Circumvention",
    venue: "Submitted to The GNLU Law Review (TGLR), Volume X, Issue II",
    type: "Co-authored paper",
    note: "Examines judicial oversight as a mechanism for ensuring corporate and governmental accountability for environmental violations.",
  },
  {
    title: "Arbitration in India: Exploring the Scope & Limitations of Divorce",
    venue: "Research paper",
    type: "Research paper",
    note: "Analyses the arbitrability of matrimonial disputes through statutory interpretation, judicial precedents and comparative legal analysis.",
  },
];

export const moots = [
  { year: "2025", name: "B.R. Sawhney National Moot Court Competition", host: "NALSAR University of Law", result: "Participant" },
  { year: "2025", name: "NUJS–HSF Corporate Moot Court Competition", host: "WBNUJS × Herbert Smith Freehills", result: "Participant" },
  { year: "2024", name: "B.R. Sawhney National Moot Court Competition", host: "NALSAR University of Law", result: "Participant" },
  { year: "2024", name: "Amity Intra Moot Court Competition", host: "Amity University", result: "Second place" },
  { year: "2023", name: "NHRC–USLLS National Moot Court Competition", host: "GGSIPU", result: "Participant" },
];

export const achievements = {
  major: [
    { title: "Second place", detail: "Amity Intra Moot Court Competition, 2024" },
    { title: "Co-author", detail: "Paper submitted to The GNLU Law Review, Volume X, Issue II" },
  ],
  minor: [
    "Four national-level moot court competitions, 2023–2025: NALSAR (B.R. Sawhney, 2024 and 2025), WBNUJS × Herbert Smith Freehills (2025), GGSIPU (NHRC–USLLS, 2023)",
    "Chamber and litigation-support experience across the Delhi High Court and District Courts",
  ],
};
