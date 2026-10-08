// Source of truth: Dhruv Sharma's CV. Nothing here goes beyond it.
export const person = {
  name: "Dhruv Sharma",
  degree: "B.A. LL.B.",
  university: "Amity University, Noida",
  years: "2022—2027",
  cgpa: "7.66 / 10",
  city: "New Delhi",
  country: "India",
  email: "dhruvvsharmaa05@gmail.com",
  phone: "+91 98910 87876",
  whatsapp: "919891087876",
  linkedin: "https://www.linkedin.com/in/dhruvvsharmaa05/",
  site: "https://dhruv-sharma-portfolio-website.vercel.app",
};

export const sections = [
  { id: "about", n: "01", label: "About" },
  { id: "portfolio", n: "02", label: "Portfolio" },
  { id: "services", n: "03", label: "Services" },
  { id: "wall-of-merit", n: "04", label: "Wall of Merit" },
  { id: "thoughts", n: "05", label: "Thoughts" },
  { id: "contact", n: "06", label: "Contact" },
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

// Descriptions from the CV; dates and titles from LinkedIn and the internship certificates.
export const experience = [
  {
    org: "Justice Girish Kathpalia, Delhi High Court",
    role: "Law intern",
    period: "July 2025",
    areas: ["Delhi High Court"],
    body: "Observed judicial proceedings while assisting with research on statutory interpretation, judicial precedents and procedural law.",
  },
  {
    org: "Chambers of Vikas Pahwa",
    role: "Legal intern",
    period: "May 2025",
    areas: ["Criminal Litigation"],
    body: "Researched criminal law issues and judicial precedents while assisting in litigation strategy.",
  },
  {
    org: "Chambers of K.T.S. Tulsi",
    role: "Legal intern",
    period: "December 2024",
    areas: ["Constitutional Law", "Administrative Law", "Criminal Litigation"],
    body: "Supported constitutional and administrative matters through precedent research and structured case preparation.",
  },
  {
    org: "Advocate Gaurav Gupta",
    role: "Legal intern",
    period: "May 2024",
    areas: ["Civil Litigation", "Property Litigation"],
    body: "Assisted in civil and property disputes before the Delhi High Court and District Courts through litigation research, writ preparation and procedural support.",
  },
  {
    org: "International Investment & Law Consultants",
    role: "Legal intern",
    period: "June 2023",
    areas: ["Civil Litigation", "Commercial Litigation", "Arbitration"],
    body: "Worked on litigation files through legal research, pleadings review, drafting support and factual analysis.",
  },
];

export const experienceNote =
  "Court exposure also includes observing proceedings before the Delhi High Court, District Courts and specialised tribunals, and mentioning a matter under counsel's instructions.";

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

export const freelance = {
  line: "Available for freelance legal research, drafting and litigation support.",
  disclaimer:
    "Dhruv is a law student, not an enrolled advocate. Services are research, drafting and writing support. They are not legal advice or representation; work for court matters is delivered to the supervising advocate.",
};

export const services = [
  {
    n: "01",
    title: "Legal research & case-law memoranda",
    for: "Advocates, chambers, law firms",
    body: "Statutory and precedent-based research on a defined legal question, delivered as a structured memorandum with the authorities relied on.",
    outputs: ["Research memoranda and legal summaries", "Issue-wise case briefs", "Compilations of judgments and authorities"],
  },
  {
    n: "02",
    title: "Litigation support",
    for: "Advocates and chambers",
    body: "Working support on a litigation file: reviewing pleadings, contracts and legal notices, and getting material ready for hearings.",
    outputs: ["Case notes and briefs", "Review notes on pleadings, contracts and legal notices", "Organised case files for hearings"],
  },
  {
    n: "03",
    title: "Drafting support",
    for: "Advocates, who review and finalise",
    body: "First drafts of routine documents, built on research, for a supervising advocate to review.",
    outputs: ["Draft replies and legal queries", "Research and preparation for writ matters"],
  },
  {
    n: "04",
    title: "Contract drafting & review",
    for: "Startups, creators, small businesses, advocates",
    body: "First drafts and clause-level review of commercial agreements, including influencer and creator agreements: deliverables, usage rights, exclusivity and disclosure. Prepared for review by a supervising advocate before use.",
    outputs: ["First drafts of agreements", "Clause-by-clause issue notes", "Plain-language summaries", "Questions to raise with counsel before signing"],
  },
  {
    n: "05",
    title: "Moot & academic research support",
    for: "Students, journals, institutions",
    body: "Research and drafting support for memorials and papers, from a moot court competitor and co-author.",
    outputs: ["Issue framing and authority research", "Research notes for memorials and papers", "Source lists"],
  },
  {
    n: "06",
    title: "Legal writing & commentary",
    for: "Businesses, creators, publications",
    body: "Clear explainers on contract and commercial questions, written for readers who are not lawyers.",
    outputs: ["Explainer articles", "Plain-language guides and checklists"],
  },
];

export const process = [
  { n: "01", title: "Brief", body: "Share the question, the documents and the deadline." },
  { n: "02", title: "Scope", body: "Scope, turnaround and quote are agreed before work begins." },
  { n: "03", title: "Delivery", body: "A structured deliverable, with one round of revisions to follow." },
];

// Wall of Merit: certificates, cropped from LinkedIn media. Files in /public/certificates.
export const certificates = [
  {
    group: "Internships",
    items: [
      { file: "delhi-high-court-2025", title: "High Court of Delhi", sub: "Law intern with Hon'ble Mr. Justice Girish Kathpalia", date: "July 2025" },
      { file: "vikas-pahwa", title: "Chambers of Senior Advocate Vikas Pahwa", sub: "Internship certificate", date: "May 2025" },
      { file: "kts-tulsi", title: "Chambers of Senior Advocate K.T.S. Tulsi", sub: "Internship certificate", date: "December 2024" },
      { file: "iilc-2023", title: "International Investment & Law Consultants", sub: "Internship certificate", date: "June 2023" },
    ],
  },
  {
    group: "Moot courts",
    items: [
      { file: "18th-nalsar-2025", title: "18th NALSAR–Justice Bodh Raj Sawhny Memorial Moot Court Competition", sub: "Certificate of Merit", date: "October 2025" },
      { file: "nujs-hsf-2025", title: "NUJS–HSF Corporate Law Moot, 17th edition", sub: "Certificate of Participation", date: "2025" },
      { file: "17th-nalsar-2024", title: "17th NALSAR–Justice Bodh Raj Sawhny Memorial Moot Court Competition", sub: "Certificate of Participation", date: "October 2024" },
      { file: "amity-intra-moot-2024", title: "2nd Amity Intra-Moot Competition", sub: "Certificate of Participation · placed second", date: "September 2024" },
      { file: "nhrc-uslls-2024", title: "1st NHRC–USLLS National Moot Court Competition", sub: "Certificate of Merit", date: "January 2024" },
    ],
  },
  {
    group: "Other",
    items: [
      { file: "amimun-2023", title: "Amity International Model United Nations 2023", sub: "Certificate of Participation · delegate of Italy, UNCSW", date: "January 2023" },
    ],
  },
];

export const facts = [
  { n: "5", label: "Legal internships" },
  { n: "5", label: "Moot court competitions" },
  { n: "2", label: "Research papers" },
];
