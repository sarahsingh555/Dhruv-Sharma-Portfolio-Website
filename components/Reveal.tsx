"use client";

import { useEffect, useRef } from "react";

// Fades content in once as it enters the viewport. Content is fully visible without JS.
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  as?: "div" | "li" | "article";
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    el.classList.add("pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("pre");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const T = Tag as React.ElementType;
  return (
    <T ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </T>
  );
}
