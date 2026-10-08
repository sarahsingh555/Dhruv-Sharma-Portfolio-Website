import { person } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <span>© 2026 {person.name}</span>
      <span>New Delhi · India</span>
      <a className="ulink" href={person.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </footer>
  );
}
