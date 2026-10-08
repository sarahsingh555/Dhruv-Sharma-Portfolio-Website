import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getThought, getThoughts } from "@/lib/thoughts";

export function generateStaticParams() {
  return getThoughts().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/thoughts/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const n = getThought(slug);
  if (!n) return {};
  return {
    title: `${n.title} — Dhruv Sharma`,
    description: n.excerpt,
    alternates: { canonical: `/thoughts/${n.slug}` },
    openGraph: { title: n.title, description: n.excerpt, type: "article", authors: [n.author] },
  };
}

export default async function NotePage({ params }: PageProps<"/thoughts/[slug]">) {
  const { slug } = await params;
  const n = getThought(slug);
  if (!n) notFound();

  return (
    <>
      <Header />
      <main className="wrap page-top">
        <p className="section-label">
          <span className="num">05</span> / Thoughts
        </p>
        <article className="note">
          <header className="note-head">
            <p className="label accent">{n.category}</p>
            <h1 className="t-statement">{n.title}</h1>
            <p className="muted byline">
              By {n.author}{n.kind === "guest" && n.authorRole ? `, ${n.authorRole}` : ""}
              {n.date && (
                <>
                  {" · "}
                  <time dateTime={n.date}>
                    {new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  </time>
                </>
              )}
            </p>
          </header>
          <div className="note-body">
            {n.intro.map((t) => (
              <p key={t} className="note-intro">
                {t}
              </p>
            ))}
            {n.sections.map((s) => (
              <section key={s.heading} className="note-sec">
                <h2 className="note-h">
                  {s.n && <span className="num">{s.n}</span>}
                  {s.heading}
                </h2>
                {s.blocks.map((b, i) =>
                  b.type === "list" ? (
                    <ul key={i} className="rules">
                      {b.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  ) : b.type === "q" ? (
                    <p key={i} className="note-q">
                      {b.text}
                    </p>
                  ) : (
                    <p key={i}>{b.text}</p>
                  ),
                )}
              </section>
            ))}
            <p className="note-close">{n.closing}</p>
            {n.source && <p className="muted source">{n.source}</p>}
          </div>
          <p className="back">
            <Link href="/thoughts" className="ulink">
              ← All thoughts
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
