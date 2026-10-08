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
  { id: "research", n: "03", label: "Research" },
  { id: "moot-courts", n: "04", label: "Moot Courts" },
  { id: "achievements", n: "05", label: "Achievements" },
  { id: "notes", n: "06", label: "Notes" },
  { id: "contact", n: "07", label: "Contact" },
] as const;

// Documented focus (CV + internships).
export const interests = [
  "Litigation",
  "Legal research",
  "Advocacy",
  "Criminal litigation",
  "Civil and property litigation",
  "Constitutional law",
  "Arbitration",
];

// Developing interests, evidenced by his writing (see Notes). Not claimed as experience.
export const developing = [
  "Contract drafting and review",
  "Commercial agreements",
  "Startups and growing businesses",
  "Creator economy and influencer agreements",
];

export const competencies = [
  "Statutory and precedent-based research",
  "Case notes, briefs and research memoranda",
  "Analysis of judgments and court documents",
  "Memorial drafting and oral advocacy",
];

export const tools = ["SCC Online", "Manupatra", "LexisNexis", "Microsoft Office"];
export const languages = ["English", "Hindi"];

// Legal internships, most recent first. Dates from LinkedIn and the internship certificates.
export const experience = [
  {
    org: "High Court of Delhi",
    role: "Law intern to Hon'ble Mr. Justice Girish Kathpalia",
    period: "July 2025",
    areas: ["Delhi High Court"],
    body: "A one-month internship with first-hand exposure to court proceedings. Legal research, case-law analysis, review of court documents and observation of hearings.",
  },
  {
    org: "Chambers of Senior Advocate Vikas Pahwa",
    role: "Legal intern",
    period: "May 2025",
    areas: ["Criminal Litigation"],
    body: "Assisted in preparing case notes under the Prevention of Money Laundering Act, the Prevention of Corruption Act, the Indian Penal Code and the NDPS Act. Legal research; attended hearings before the Supreme Court of India, the Delhi High Court and District Courts of Delhi; took part in chamber conferences and case discussions.",
  },
  {
    org: "Chambers of Senior Advocate K.T.S. Tulsi",
    role: "Legal intern",
    period: "December 2024",
    areas: ["Criminal Litigation", "Constitutional Law"],
    body: "Legal research supporting criminal matters before the Supreme Court of India. Identified and analysed judicial precedents, located supporting judgments and authorities, and prepared structured case notes on legal issues, judicial reasoning and case strategy.",
  },
  {
    org: "Law chambers of Gaurav Gupta",
    role: "Legal intern",
    period: "May 2024",
    areas: ["Civil Litigation", "Writ Jurisdiction"],
    body: "Observed courtroom proceedings and studied advocacy techniques, including the structure and presentation of legal arguments. Assisted in understanding the preparation and drafting of briefs for writ petitions, with exposure to procedure in writ litigation.",
  },
  {
    org: "International Investment & Law Consultants (IILC)",
    role: "Legal intern",
    period: "June 2023",
    areas: ["Civil Litigation"],
    body: "Reviewed case files and legal applications in civil litigation matters; analysed case materials under supervision to learn litigation workflows and documentation; observed court proceedings.",
  },
];

export const experienceNote =
  "Also, per his CV: mentioned a matter before court under counsel's instructions.";

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

// Moot courts are simulated proceedings: research, argument, advocacy. Not client representation.
export const moots = [
  {
    year: "2025",
    items: [
      {
        name: "18th NALSAR–Justice Bodh Raj Sawhny Memorial Moot Court Competition",
        host: "NALSAR University of Law, Hyderabad × Bodh Raj Sawhny Memorial Trust",
        detail: "Represented Amity Law School, Noida · 10–12 October 2025 · Certificate of Merit",
        tags: ["Legal Research", "Case Analysis", "Written Advocacy", "Oral Advocacy"],
        top: false,
      },
      {
        name: "NUJS–HSF Corporate Law Moot (17th edition)",
        host: "WBNUJS, Kolkata × Herbert Smith Freehills",
        detail: "Amity Law School, Noida",
        tags: ["Corporate Law", "Legal Research", "Case Analysis", "Written Argument", "Oral Advocacy"],
        top: false,
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        name: "17th NALSAR–Justice Bodh Raj Sawhny Memorial Moot Court Competition",
        host: "NALSAR University of Law, Hyderabad × Bodh Raj Sawhny Memorial Trust",
        detail: "4–6 October 2024",
        tags: ["Legal Research", "Memorial Preparation", "Case Analysis", "Oral Advocacy"],
        top: false,
      },
      {
        name: "2nd Amity Intra-Moot Competition",
        host: "Amity Law School, Noida",
        detail: "26–28 September 2024",
        tags: ["Legal Research", "Case Analysis", "Structured Argumentation", "Oral Advocacy"],
        top: true,
      },
      {
        name: "1st NHRC–USLLS National Moot Court Competition",
        host: "National Human Rights Commission × University School of Law and Legal Studies, GGSIPU",
        detail: "19–21 January 2024 · Certificate of Merit",
        tags: ["Legal Research", "Memorial Preparation", "Legal Reasoning", "Advocacy"],
        top: false,
      },
    ],
  },
];

export const achievements = {
  major: [
    { title: "Second place", detail: "2nd Amity Intra-Moot Competition, Amity Law School, Noida, 2024" },
    { title: "Co-author", detail: "Paper submitted to The GNLU Law Review, Volume X, Issue II" },
  ],
  minor: [
    "Certificates of Merit: 18th NALSAR–Justice Bodh Raj Sawhny Memorial Moot Court Competition (2025); 1st NHRC–USLLS National Moot Court Competition (2024)",
    "Delegate of Italy in UNCSW, Amity International Model United Nations (AMIMUN'23), January 2023",
    "Internship certificates from the High Court of Delhi (Justice Girish Kathpalia), Senior Advocates K.T.S. Tulsi and Vikas Pahwa, Gaurav Gupta and IILC",
  ],
};
