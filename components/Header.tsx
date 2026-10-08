"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { person, sections } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [solid, setSolid] = useState(true);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      setSolid(hero.getBoundingClientRect().bottom < 90);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" data-solid={solid || open}>
      <Link href="/" className="brand" aria-label={`${person.name} — home`}>
        <Logo />
        <span className="brand-name">{person.name}</span>
      </Link>
      <nav aria-label="Primary" className="nav">
        <ul className="nav-links">
          {sections
            .filter((s) => s.id !== "contact")
            .map((s) => (
              <li key={s.id}>
                <Link
                  href={`/#${s.id}`}
                  className="nav-link"
                  aria-current={active === s.id ? "true" : undefined}
                >
                  {s.label}
                </Link>
              </li>
            ))}
        </ul>
        <button
          type="button"
          className="nav-link nav-toggle"
          aria-expanded={open}
          aria-controls="index-panel"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <Link href="/#contact" className="nav-cta">
          Hire
        </Link>
      </nav>
      <div id="index-panel" className="index-panel" hidden={!open}>
        <ol>
          {sections.map((s) => (
            <li key={s.id}>
              <Link href={`/#${s.id}`} onClick={() => setOpen(false)} aria-current={active === s.id ? "true" : undefined}>
                <span className="num">{s.n}</span>
                <span className="lbl">{s.label}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </header>
  );
}
