"use client";

import { useEffect, useState } from "react";
import { person, sections } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

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
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label={`${person.name} — back to top`}>
        {person.name}
      </a>
      <nav aria-label="Primary" className="nav">
        <button
          type="button"
          className="nav-link"
          aria-expanded={open}
          aria-controls="index-panel"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Index"}
        </button>
        <a href="#contact" className="nav-link nav-contact">
          Contact
        </a>
      </nav>
      <div id="index-panel" className="index-panel" data-open={open} hidden={!open}>
        <ol>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={() => setOpen(false)} aria-current={active === s.id ? "true" : undefined}>
                <span className="num">{s.n}</span>
                <span className="lbl">{s.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </header>
  );
}
