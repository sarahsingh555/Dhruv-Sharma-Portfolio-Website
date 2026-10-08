import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes — Dhruv Sharma",
  description: "Observations on contracts, legal research, business and emerging legal questions, by Dhruv Sharma.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  const notes = getNotes();
  const groups = new Map<string, typeof notes>();
  for (const n of notes) {
    const y = n.date ? n.date.slice(0, 4) : "";
    groups.set(y, [...(groups.get(y) ?? []), n]);
  }
  let i = 0;
  return (
    <>
      <Header />
      <main className="wrap page-top">
        <p className="section-label">
          <span className="num">06</span> / Notes
        </p>
        <h1 className="t-statement sr-gap">Thinking through law.</h1>
        <p className="lede">
          An evolving journal of observations on contracts, legal research, business and emerging legal questions.
        </p>
        {[...groups].map(([year, list]) => (
          <section key={year || "all"} aria-label={year || "Notes"}>
            {year && <h2 className="year num">{year}</h2>}
            <ol className="archive">
              {list.map((n) => (
                <li key={n.slug} className="archive-row">
                  <span className="num">{String(++i).padStart(2, "0")}</span>
                  <div>
                    <h3 className="t-title">
                      <Link href={`/notes/${n.slug}`} className="ulink">
                        {n.title}
                      </Link>
                    </h3>
                    <p className="muted">{n.excerpt}</p>
                  </div>
                  <div className="archive-meta">
                    <p className="label">{n.category}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
        <p className="muted note-line">More notes will be added here as they are written.</p>
      </main>
      <Footer />
    </>
  );
}
