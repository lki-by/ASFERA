import "./BackButton.css";

export default function BackButton({ href, label = "Kembali" }) {
  return (
    <a className="back-btn" href={href} aria-label={label}>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M32 32v-5a6 6 0 0 0-6-6H17M22 15l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
