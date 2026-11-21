import "./Lace.css";

const PETALS = Array.from({ length: 12 }, (_, i) => i * 30);

/* Ornamen rosette renda untuk pojok kartu (Sponsors & Our Location) */
export default function Lace({ className = "" }) {
  return (
    <svg className={`lace ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
      <g fill="currentColor">
        {PETALS.map((a) => (
          <path key={a} transform={`rotate(${a} 50 50)`} d="M50 50C44 36 44 22 50 10C56 22 56 36 50 50Z" />
        ))}
      </g>
      <circle cx="50" cy="50" r="13" fill="#2e0404" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}
