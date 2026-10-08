import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuestInvite from "@/components/GuestInvite";
import { dhruvThoughts, guestThoughts, type Thought } from "@/lib/thoughts";

export const metadata: Metadata = {
  title: "Thoughts — Dhruv Sharma",
  description:
    "Dhruv Sharma's views on contracts, legal research, business and recent legal questions, with a guest column for other voices.",
  alternates: { canonical: "/thoughts" },
};

function List({ items }: { items: Thought[] }) {
  return (
    <ol className="archive">
      {items.map((n, i) => (
        <li key={n.slug} className="archive-row">
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="t-title">
              <Link href={`/thoughts/${n.slug}`} className="ulink">
                {n.title}
              </Link>
            </h3>
            <p className="muted">{n.excerpt}</p>
          </div>
          <div className="archive-meta">
            <p className="label">{n.category}</p>
            <p className="muted">
              {n.kind === "guest" ? `${n.author}${n.authorRole ? `, ${n.authorRole}` : ""}` : n.author}
              {n.date && ` · ${new Date(n.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}`}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ThoughtsPage() {
  const mine = dhruvThoughts();
  const guests = guestThoughts();
  return (
    <>
      <Header />
      <main className="wrap page-top">
        <p className="section-label">
          <span className="num">05</span> / Thoughts
        </p>
        <h1 className="t-statement sr-gap">Thoughts</h1>
        <p className="lede">
          Dhruv Sharma&apos;s views on contracts, legal research, business and recent legal questions. An evolving
          journal, added to as he writes.
        </p>
        <h2 className="sub-label">Dhruv Sharma</h2>
        <List items={mine} />
        <h2 className="sub-label">Guest column</h2>
        {guests.length > 0 && <List items={guests} />}
        <GuestInvite />
      </main>
      <Footer />
    </>
  );
}
