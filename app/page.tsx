import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ContactActions from "@/components/ContactActions";
import {
  person,
  interests,
  competencies,
  tools,
  languages,
  experience,
  exposure,
  research,
  moots,
  achievements,
} from "@/lib/content";

export default function Home() {
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
              Fifth-year B.A. LL.B. student at Amity University with chamber and litigation-support experience in civil,
              constitutional, commercial and criminal matters.
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
                Dhruv Sharma is a fifth-year B.A. LL.B. student at Amity University, Noida (2022—2027). He has worked
                with the chambers of K.T.S. Tulsi and Vikas Pahwa, with Advocate Gaurav Gupta and with International
                Investment &amp; Law Consultants, and has observed proceedings before the Delhi High Court, District
                Courts and specialised tribunals.
              </p>
              <p>
                His work centres on statutory and precedent-based research, case briefs and research memoranda, review
                of pleadings, contracts and legal notices, and drafting support. He has competed in national and
                institutional moot courts and has co-authored a paper submitted to The GNLU Law Review. His interests
                lie in civil and commercial litigation, constitutional law, arbitration and property law.
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
          <h2 className="t-statement sr-gap">Chambers, counsel and consultancy.</h2>
          <ol className="timeline">
            {experience.map((e, i) => (
              <Reveal as="li" key={e.org} className="entry" delay={i * 40}>
                <span className="entry-n num">{String(i + 1).padStart(2, "0")}</span>
                <div className="entry-areas">
                  {e.areas.map((a) => (
                    <span key={a} className="label">
                      {a}
                    </span>
                  ))}
                </div>
                <div className="entry-body">
                  <h3 className="t-org">{e.org}</h3>
                  <p>{e.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ——— 03 Legal exposure ——— */}
        <section className="section wrap" aria-labelledby="exposure">
          <SectionHead id="exposure" n="03" label="Areas of Legal Exposure" />
          <div className="exposure">
            {exposure.map((g, i) => (
              <Reveal key={g.title} className="exposure-col" delay={i * 80}>
                <h3 className="t-org">{g.title}</h3>
                <ul className="rules">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— 04 Research ——— */}
        <section className="section wrap" aria-labelledby="research">
          <SectionHead id="research" n="04" label="Research" />
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

        {/* ——— 05 Moot courts ——— */}
        <section className="section wrap" aria-labelledby="moot-courts">
          <SectionHead id="moot-courts" n="05" label="Moot Courts" />
          <Reveal>
            <p className="lede">
              National and institutional competitions involving legal research, memorial drafting and oral advocacy.
            </p>
            <div className="table-wrap">
              <table className="moots">
                <thead>
                  <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Competition</th>
                    <th scope="col">Organiser</th>
                    <th scope="col">Standing</th>
                  </tr>
                </thead>
                <tbody>
                  {moots.map((m) => (
                    <tr key={m.name + m.year}>
                      <td className="num">{m.year}</td>
                      <td>{m.name}</td>
                      <td className="muted">{m.host}</td>
                      <td className={m.result === "Second place" ? "strong" : "muted"}>{m.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ——— 06 Achievements ——— */}
        <section className="section wrap" aria-labelledby="achievements">
          <SectionHead id="achievements" n="06" label="Achievements" />
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

      <footer className="footer wrap">
        <span>© 2026 {person.name}</span>
        <span>New Delhi · India</span>
        <a className="ulink" href={person.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </>
  );
}
