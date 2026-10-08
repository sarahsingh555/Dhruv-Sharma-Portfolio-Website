import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ContactActions from "@/components/ContactActions";
import {
  person,
  interests,
  developing,
  competencies,
  tools,
  languages,
  experience,
  experienceNote,
  research,
  moots,
  achievements,
  services,
  process,
  freelance,
  certificates,
  facts,
} from "@/lib/content";
import { featuredNote } from "@/lib/notes";

const enquire = (service: string) =>
  `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(`Hello, I would like to discuss: ${service}.`)}`;

export default function Home() {
  const note = featuredNote();
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: person.site,
    email: person.email,
    jobTitle: "Law student; freelance legal research and drafting support",
    sameAs: [person.linkedin],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Amity University, Noida" },
    address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  };

  return (
    <>
      <a href="#about" className="skip">
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
              Court and senior advocates&apos; chambers. Available for freelance legal research, drafting and litigation
              support.
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
              Hire for a project
            </a>
            <a className="btn" href="#services">
              View services
            </a>
            <a className="btn" href={person.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="scroll-cue" href="#about" aria-label="Scroll to about">
              <span>Scroll</span>
              <i aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ——— 01 About ——— */}
        <section className="section wrap" aria-labelledby="about">
          <SectionHead id="about" n="01" label="About" />
          <div className="grid profile-grid">
            <Reveal className="statement">
              <h2 className="t-statement">Advocacy begins with the facts, then the law.</h2>
            </Reveal>
            <Reveal className="bio" delay={80}>
              <p>
                Dhruv Sharma is a fifth-year B.A. LL.B. student at Amity University, Noida (graduating 2027). He has
                completed five legal internships: at the High Court of Delhi with Hon&apos;ble Mr. Justice Girish
                Kathpalia, in the chambers of Senior Advocates Vikas Pahwa and K.T.S. Tulsi, with Advocate Gaurav Gupta
                and at International Investment &amp; Law Consultants. The work covers statutory and precedent-based
                research, case briefs and memoranda, review of pleadings, contracts and legal notices, and drafting
                support.
              </p>
              <p>
                He has competed in national and institutional moot courts, placing second at the Amity Intra-Moot
                Competition in 2024, and has co-authored a paper submitted to The GNLU Law Review. He also writes on
                contracts and commercial questions, in plain terms. He now takes freelance research, drafting and
                litigation-support assignments.
              </p>
              <p className="cta-inline">
                <a className="btn btn-solid" href="#contact">
                  Hire for a project
                </a>
              </p>
            </Reveal>
          </div>
          <Reveal className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="fact-n">{f.n}</p>
                <p className="label">{f.label}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="meta-grid">
            <div>
              <h3 className="label">Education</h3>
              <p className="meta-main">B.A. LL.B.</p>
              <p>Amity University, Noida, Uttar Pradesh</p>
              <p className="muted">2022—2027 · CGPA {person.cgpa}</p>
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

        {/* ——— 02 Portfolio ——— */}
        <section className="section wrap" aria-labelledby="portfolio">
          <SectionHead id="portfolio" n="02" label="Portfolio" />
          <h2 className="t-statement sr-gap">Experience, research and advocacy.</h2>

          <h3 className="sub-label" id="experience">
            Experience
          </h3>
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
                  <h4 className="t-org">{e.org}</h4>
                  <p className="role">{e.role}</p>
                  <p>{e.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="muted note-line">{experienceNote}</p>

          <h3 className="sub-label" id="research">
            Research
          </h3>
          <ol className="archive">
            {research.map((r, i) => (
              <Reveal as="li" key={r.title} className="archive-row" delay={i * 60}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="t-title">{r.title}</h4>
                  <p className="muted">{r.note}</p>
                </div>
                <div className="archive-meta">
                  <p className="label">{r.type}</p>
                  {r.venue !== r.type && <p>{r.venue}</p>}
                </div>
              </Reveal>
            ))}
          </ol>

          <h3 className="sub-label" id="moot-courts">
            Moot courts
          </h3>
          <p className="lede">
            Competitive advocacy and legal research. Moot courts are simulated proceedings: they build research, written
            submissions and oral advocacy, and are not appearances for clients.
          </p>
          <div className="moots">
            {moots.map((y) => (
              <div className="moot-year" key={y.year}>
                <h4 className="year num">{y.year}</h4>
                <ol>
                  {y.items.map((m, i) => (
                    <Reveal as="li" key={m.name} className={`moot${m.top ? " moot-top" : ""}`} delay={i * 50}>
                      {m.top && (
                        <p className="placing">
                          <span className="num">2nd</span> place
                        </p>
                      )}
                      <h5 className="t-title">{m.name}</h5>
                      <p className="host">{m.host}</p>
                      <p className="muted">{m.detail}</p>
                      <p className="label tags">{m.tags.join(" · ")}</p>
                    </Reveal>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <h3 className="sub-label" id="achievements">
            Achievements
          </h3>
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

        {/* ——— 03 Services ——— */}
        <section className="section wrap" aria-labelledby="services">
          <SectionHead id="services" n="03" label="Services" />
          <div className="grid services-intro">
            <Reveal>
              <h2 className="t-statement">Research and drafting support, delivered clearly.</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede">
                {freelance.line} Work is scoped and quoted per assignment, for advocates, chambers, law firms, startups
                and creators.
              </p>
            </Reveal>
          </div>
          <ol className="services">
            {services.map((s, i) => (
              <Reveal as="li" key={s.n} className="service" delay={i * 40}>
                <span className="num service-n">{s.n}</span>
                <div className="service-main">
                  <h3 className="t-title">{s.title}</h3>
                  <p className="label for">For {s.for}</p>
                  <p>{s.body}</p>
                </div>
                <div className="service-out">
                  <p className="label">You receive</p>
                  <ul className="plain">
                    {s.outputs.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                  <a className="ulink enquire" href={enquire(s.title)} target="_blank" rel="noopener noreferrer">
                    Enquire on WhatsApp →
                  </a>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="process">
            {process.map((p) => (
              <div key={p.n}>
                <p className="num label">{p.n}</p>
                <h3 className="t-org">{p.title}</h3>
                <p className="muted">{p.body}</p>
              </div>
            ))}
          </Reveal>
          <p className="muted note-line disclaimer">{freelance.disclaimer}</p>
          <p className="cta-inline">
            <a className="btn btn-solid" href="#contact">
              Discuss a project
            </a>
          </p>
        </section>

        {/* ——— 04 Wall of Merit ——— */}
        <section className="section wrap" aria-labelledby="wall-of-merit">
          <SectionHead id="wall-of-merit" n="04" label="Wall of Merit" />
          <h2 className="t-statement sr-gap">Certificates and recognition.</h2>
          <p className="lede">Internship certificates and moot court certificates. Select any to view it in full.</p>
          {certificates.map((g) => (
            <div className="wall-group" key={g.group}>
              <h3 className="sub-label">{g.group}</h3>
              <ul className="wall">
                {g.items.map((c) => (
                  <Reveal as="li" key={c.file} className="cert">
                    <a href={`/certificates/${c.file}.webp`} target="_blank" rel="noopener noreferrer">
                      <span className="cert-img">
                        <Image
                          src={`/certificates/${c.file}.webp`}
                          alt={`Certificate: ${c.title}. ${c.sub}.`}
                          fill
                          sizes="(min-width: 1100px) 30vw, (min-width: 760px) 45vw, 92vw"
                          loading="lazy"
                        />
                      </span>
                      <span className="cert-title">{c.title}</span>
                      <span className="muted cert-sub">
                        {c.sub} · {c.date}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ——— 05 Notes ——— */}
        <section className="section wrap" aria-labelledby="notes">
          <SectionHead id="notes" n="05" label="Notes" />
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

        {/* ——— 06 Contact ——— */}
        <section className="section wrap contact" aria-labelledby="contact">
          <SectionHead id="contact" n="06" label="Contact" />
          <div className="grid contact-grid">
            <Reveal>
              <h2 className="t-statement">Hire Dhruv Sharma</h2>
              <p className="muted">
                {person.degree} · Amity University
                <br />
                {freelance.line}
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
