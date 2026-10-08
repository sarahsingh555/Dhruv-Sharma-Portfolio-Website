import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ContactActions from "@/components/ContactActions";
import {
  person,
  interests,
  competencies,
  tools,
  languages,
  developing,
  experience,
  experienceNote,
  research,
  moots,
  achievements,
} from "@/lib/content";
import { featuredNote } from "@/lib/notes";

export default function Home() {
  const note = featuredNote();
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: person.site,
    email: person.email,
    sameAs: [person.linkedin],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Amity University, Noida" },
    address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  };

  return (
    <>
      <a href="#profile" className="skip">
        Skip to content
      </a>
      <Header />
      <main id="top">
        {/* ——— Opening ——— */}
        <section className="hero wrap" aria-labelledby="name">
          <p className="label hero-kicker">Law · Litigation · Legal Research</p>
          <h1 id="name" className="hero-name">
            <span className="line">
              <span>Dhruv</span>
            </span>
            <span className="line">
              <span>Sharma</span>
            </span>
          </h1>
          <div className="hero-lower">
            <p className="hero-statement">
              Fifth-year B.A. LL.B. student at Amity University, Noida, with five legal internships across the Delhi High
              Court and senior advocates&apos; chambers. Interested in litigation, legal research and advocacy.
            </p>
            <dl className="hero-meta">
              <div>
                <dt className="label">Degree</dt>
                <dd>{person.degree}</dd>
              </div>
              <div>
                <dt className="label">University</dt>
                <dd>Amity University, Noida</dd>
              </div>
              <div>
                <dt className="label">Years</dt>
                <dd>{person.years}</dd>
              </div>
              <div>
                <dt className="label">Based in</dt>
                <dd>
                  {person.city}, {person.country}
                </dd>
              </div>
            </dl>
          </div>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#contact">
              Get in touch
            </a>
            <a className="btn" href={person.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn profile
            </a>
            <a className="scroll-cue" href="#profile" aria-label="Scroll to profile">
              <span>Scroll</span>
              <i aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ——— 01 Profile ——— */}
        <section className="section wrap" aria-labelledby="profile">
          <SectionHead id="profile" n="01" label="Profile" />
          <div className="grid profile-grid">
            <Reveal className="statement">
              <h2 className="t-statement">Advocacy begins with the facts, then the law.</h2>
            </Reveal>
            <Reveal className="bio" delay={80}>
              <p>
                Dhruv Sharma is a fifth-year B.A. LL.B. student at Amity University, Noida (graduating 2027). He has
                completed five legal internships: with Hon&apos;ble Mr. Justice Girish Kathpalia at the High Court of
                Delhi, in the chambers of Senior Advocates Vikas Pahwa and K.T.S. Tulsi, with Gaurav Gupta and at
                International Investment &amp; Law Consultants. The work has been legal research, case notes and the
                observation of hearings before the Supreme Court, the Delhi High Court and District Courts.
              </p>
              <p>
                He has competed in national and institutional moot courts, placing second at the Amity Intra-Moot
                Competition in 2024, and has co-authored a paper submitted to The GNLU Law Review. His interest is
                litigation and legal research. He also writes on contracts and commercial questions, and explains legal
                issues in plain terms.
              </p>
            </Reveal>
          </div>
          <Reveal className="meta-grid">
            <div>
              <h3 className="label">Education</h3>
              <p className="meta-main">B.A. LL.B.</p>
              <p>Amity University, Noida, Uttar Pradesh</p>
              <p className="muted">2022—2027</p>
            </div>
            <div>
              <h3 className="label">Location</h3>
              <p className="meta-main">{person.city}</p>
              <p className="muted">{person.country}</p>
            </div>
            <div>
              <h3 className="label">Areas of interest</h3>
              <ul className="plain">
                {interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <h3 className="label sub">Developing interests</h3>
              <ul className="plain">
                {developing.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label">Competencies</h3>
              <ul className="plain">
                {competencies.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="muted tools">
                {tools.join(" · ")}
                <br />
                {languages.join(" · ")}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ——— 02 Experience ——— */}
        <section className="section wrap" aria-labelledby="experience">
          <SectionHead id="experience" n="02" label="Experience" />
          <h2 className="t-statement sr-gap">Five legal internships, 2023—2025.</h2>
          <ol className="timeline">
            {experience.map((e, i) => (
              <Reveal as="li" key={e.org} className="entry" delay={i * 40}>
                <span className="entry-n num">{String(i + 1).padStart(2, "0")}</span>
                <div className="entry-areas">
                  <span className="period">{e.period}</span>
                  {e.areas.map((a) => (
                    <span key={a} className="label">
                      {a}
                    </span>
                  ))}
                </div>
                <div className="entry-body">
                  <h3 className="t-org">{e.org}</h3>
                  <p className="role">{e.role}</p>
                  <p>{e.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="muted note-line">{experienceNote}</p>
        </section>

        {/* ——— 03 Research ——— */}
        <section className="section wrap" aria-labelledby="research">
          <SectionHead id="research" n="03" label="Research" />
          <ol className="archive">
            {research.map((r, i) => (
              <Reveal as="li" key={r.title} className="archive-row" delay={i * 60}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="t-title">{r.title}</h3>
                  <p className="muted">{r.note}</p>
                </div>
                <div className="archive-meta">
                  <p className="label">{r.type}</p>
                  {r.venue !== r.type && <p>{r.venue}</p>}
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ——— 04 Moot courts ——— */}
        <section className="section wrap" aria-labelledby="moot-courts">
          <SectionHead id="moot-courts" n="04" label="Moot Courts" />
          <h2 className="t-statement sr-gap">Competitive advocacy and legal research.</h2>
          <p className="lede">
            Moot courts are simulated proceedings. They build research, written submissions and oral advocacy; they are
            not appearances for clients.
          </p>
          <div className="moots">
            {moots.map((y) => (
              <div className="moot-year" key={y.year}>
                <h3 className="year num">{y.year}</h3>
                <ol>
                  {y.items.map((m, i) => (
                    <Reveal as="li" key={m.name} className={`moot${m.top ? " moot-top" : ""}`} delay={i * 50}>
                      {m.top && (
                        <p className="placing">
                          <span className="num">2nd</span> place
                        </p>
                      )}
                      <h4 className="t-title">{m.name}</h4>
                      <p className="host">{m.host}</p>
                      <p className="muted">{m.detail}</p>
                      <p className="label tags">{m.tags.join(" · ")}</p>
                    </Reveal>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* ——— 05 Achievements ——— */}
        <section className="section wrap" aria-labelledby="achievements">
          <SectionHead id="achievements" n="05" label="Achievements" />
          <div className="ach">
            <div className="ach-major">
              {achievements.major.map((a, i) => (
                <Reveal key={a.title} className="ach-item" delay={i * 80}>
                  <p className="t-statement">{a.title}</p>
                  <p>{a.detail}</p>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <ul className="rules">
                {achievements.minor.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ——— 06 Notes ——— */}
        <section className="section wrap" aria-labelledby="notes">
          <SectionHead id="notes" n="06" label="Notes" />
          <div className="grid notes-grid">
            <Reveal>
              <h2 className="t-statement">Thinking through law.</h2>
              <p className="lede">
                Selected observations on contracts, legal research, business and emerging legal questions.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <Link href={`/notes/${note.slug}`} className="feature">
                <span className="label">{note.category}</span>
                <span className="feature-title">{note.title}</span>
                <span className="feature-excerpt">{note.excerpt}</span>
                <span className="feature-cta">Read note →</span>
              </Link>
              <Link href="/notes" className="ulink all-notes">
                All notes
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ——— 07 Contact ——— */}
        <section className="section wrap contact" aria-labelledby="contact">
          <SectionHead id="contact" n="07" label="Contact" />
          <div className="grid contact-grid">
            <Reveal>
              <h2 className="t-statement">{person.name}</h2>
              <p className="muted">
                {person.degree} · Amity University
                <br />
                For internships, research collaboration and professional enquiries.
              </p>
              <dl className="contact-list">
                <div>
                  <dt className="label">Email</dt>
                  <dd>
                    <a className="ulink" href={`mailto:${person.email}`}>
                      {person.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label">WhatsApp / Phone</dt>
                  <dd>
                    <a className="ulink" href={`https://wa.me/${person.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      {person.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label">LinkedIn</dt>
                  <dd>
                    <a className="ulink" href={person.linkedin} target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/dhruvvsharmaa05
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label">Location</dt>
                  <dd>
                    {person.city}, {person.country}
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={80}>
              <ContactActions />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </>
  );
}
