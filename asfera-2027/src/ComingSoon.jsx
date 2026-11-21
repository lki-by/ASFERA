import "./ComingSoon.css";

/**
 * Kartu "Coming Soon" berornamen renda.
 * Dipakai bareng oleh Sponsors (variant "frame") dan Contact → Our Location (variant "outline").
 * Ukuran teks & ornamen ikut lebar kartu (container query), jadi aman di semua layar.
 */
export default function ComingSoon({ variant = "frame", bang = false, caption }) {
  return (
    <div className={`soon-card soon-card--${variant}`}>
      <div className="soon-panel">
        <span className="soon-text">
          <span>Coming</span> <span>Soon{bang ? "!" : ""}</span>
        </span>
        {caption && <small className="soon-caption">{caption}</small>}
      </div>
    </div>
  );
}
