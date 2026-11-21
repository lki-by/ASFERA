import comingSoonImage from "./assets/images/sponsor-coming-soon.png";
import ScrollReveal from "./ScrollReveal.jsx";
import "./Sponsors.css";

// 👉 Ganti jadi daftar sponsor asli nanti (logo/nama). Sekarang 25 slot "Coming Soon".
const SLOTS = Array.from({ length: 25 }, (_, i) => i);

export default function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-section" aria-labelledby="sponsors-title">
      <ScrollReveal as="h2" variant="title" id="sponsors-title" className="section-title">
        SPONSORS
      </ScrollReveal>

      <ScrollReveal className="sponsor-grid" delay={100}>
        {SLOTS.map((i) => (
          <div className="sponsor-card" style={{ "--i": i }} key={i}>
            <img src={comingSoonImage} alt="Sponsor coming soon" />
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}