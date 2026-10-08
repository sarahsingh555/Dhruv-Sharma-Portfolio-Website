export default function SectionHead({ n, label, id }: { n: string; label: string; id: string }) {
  return (
    <p className="section-label" id={id}>
      <span className="num">{n}</span> / {label}
    </p>
  );
}
