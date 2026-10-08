export type NoteBlock =
  | { type: "p"; text: string }
  | { type: "q"; text: string }
  | { type: "list"; items: string[] };

export type NoteSection = { n?: string; heading: string; blocks: NoteBlock[] };

export type Note = {
  slug: string;
  title: string;
  category: string;
  author: string;
  /** ISO date (YYYY-MM-DD). Leave undefined until the original publication date is confirmed. */
  date?: string;
  excerpt: string;
  intro: string[];
  sections: NoteSection[];
  closing: string;
  source?: string;
};

// Add new notes to this array. The newest (by date, then array order) is featured on the homepage.
const notes: Note[] = [
  {
    slug: "signing-an-influencer-agreement",
    title: "Signing an Influencer Agreement? Don't Skip These 3 Things.",
    category: "Contracts / Creator Economy",
    author: "Dhruv Sharma",
    date: "2026-09-24",
    excerpt:
      "A brand collaboration may look straightforward: create the content, post it, get paid. The agreement behind it can decide far more than the payment.",
    source: "First published as a post on LinkedIn on 24 September 2026.",
    intro: [
      "A brand collaboration may look straightforward: create the content, post it, get paid.",
      "But the agreement behind that collaboration can decide far more than just the payment. Three areas deserve a careful read before anything is signed.",
    ],
    sections: [
      {
        n: "01",
        heading: "Be Specific About the Deliverables",
        blocks: [
          { type: "p", text: "Start with what, exactly, is being delivered. The agreement should state:" },
          {
            type: "list",
            items: [
              "How many posts, Reels, Stories and videos are required, and on which platforms",
              "The deadlines for each",
              "Whether the brand must approve the content before it goes live",
              "How many revisions the brand can ask for",
              "How long the content must remain live",
            ],
          },
        ],
      },
      {
        n: "02",
        heading: "Know What Happens to the Content After It Is Posted",
        blocks: [
          { type: "q", text: "Can the brand repost the influencer's content?" },
          {
            type: "p",
            text: "Reposting is not the same as broader commercial usage rights. A brand simply sharing the content is one thing; running it as a paid advertisement, or using the influencer's name and image, is another.",
          },
          { type: "p", text: "If usage rights are being given, the agreement should say:" },
          {
            type: "list",
            items: [
              "What the brand may do with the content: reposting, commercial use, paid advertisements, use of name and image",
              "For how long",
              "On which platforms",
              "In which territories",
            ],
          },
        ],
      },
      {
        n: "03",
        heading: "Don't Overlook Exclusivity",
        blocks: [
          { type: "q", text: "But what counts as a “competitor”?" },
          {
            type: "p",
            text: "An exclusivity clause limits future collaborations, so its terms matter commercially. Check:",
          },
          {
            type: "list",
            items: [
              "How a competitor is defined",
              "How long the exclusivity lasts",
              "Which categories of product or service it covers",
              "The geographic scope",
            ],
          },
        ],
      },
      {
        heading: "Advertising Disclosure",
        blocks: [
          {
            type: "p",
            text: "Where the relationship is paid or sponsored, it should be disclosed appropriately. It is worth settling in the agreement how that disclosure will be made.",
          },
        ],
      },
    ],
    closing: "A short agreement does not necessarily mean a simple agreement.",
  },
];

function sortKey(n: Note, i: number) {
  return n.date ? Date.parse(n.date) : -i; // undated notes keep array order, below dated ones
}

export function getNotes(): Note[] {
  return notes
    .map((n, i) => ({ n, k: sortKey(n, i) }))
    .sort((a, b) => b.k - a.k)
    .map((x) => x.n);
}

export const getNote = (slug: string) => notes.find((n) => n.slug === slug);
export const featuredNote = () => getNotes()[0];
