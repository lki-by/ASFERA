import competitionFrame from "./assets/images/competition-frame.png";
import putraCover from "./assets/images/competition-cover-putra.png";
import putriCover from "./assets/images/competition-cover-putri.png";
import ScrollReveal from "./ScrollReveal.jsx";
import "./Competitions.css";

const CATEGORIES = [
  { key: "putra", label: "Putra", cover: putraCover },
  { key: "putri", label: "Putri", cover: putriCover },
];

// Video tata cara pendaftaran Competition.
const VIDEO_ID = "0L48b78xqlA";

// Corner-nya sekarang dipasang di wrapper "showcase" (App.jsx), dipakai bareng Events.
export default function Competitions() {
  return (
    <section
      id="competitions"
      className="events-section competitions-section"
      aria-labelledby="competitions-title"
    >
      <ScrollReveal as="h2" variant="title" id="competitions-title" className="events-title">
        Competition
      </ScrollReveal>

      <ScrollReveal variant="zoom" className="competition-video" delay={100}>
        <div className="competition-video-bg" aria-hidden="true" />
        <div className="competition-video-player">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`}
            title="Video Tata Cara Pendaftaran Competition ASFERA"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <img className="competition-video-frame" src={competitionFrame} alt="" />
      </ScrollReveal>

      <div className="competition-cards">
        {CATEGORIES.map((cat, n) => (
          <ScrollReveal
            as="a"
            className="competition-card"
            delay={n * 160}
            href={`#/competition/${cat.key}`}
            aria-label={`Lihat Competition ${cat.label}`}
            key={cat.key}
          >
            <img src={cat.cover} alt={`Cover Competition ${cat.label}`} />
            {/* kiri = Putra, kanan = Putri */}
            <span className="see-more">
              See More
            </span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}