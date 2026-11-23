import { useCallback, useEffect, useRef, useState } from "react";
import asferalogo from "./assets/icons/logo-asfera.png";
import cornerOrnament from "./assets/images/corner-ornament.png";
import emblem from "./assets/icons/logo-emblem.png";
import topCornerOrnament from "./assets/images/corner-ornament-top.png";
import countdownFrame from "./assets/images/countdown-frame.png";
import trailerArtwork from "./assets/images/trailer-event.png";
import trailerComingSoon from "./assets/images/trailer-coming-soon.png";
import eventCard from "./assets/images/event-card.png";
import eventCornerLeft from "./assets/images/event-corner-left.png";
import eventCornerRight from "./assets/images/event-corner-right.png";
import eventCornerTopRight from "./assets/images/event-corner-top-right.png";
import eventCornerBottomLeft from "./assets/images/event-corner-bottom-left.png";
import About from "./About.jsx";
import Competitions from "./Competitions.jsx";
import CompetitionPage from "./CompetitionPage.jsx";
import FAQ from "./FAQ.jsx";
import Sponsors from "./Sponsors.jsx";
import Homestay from "./Homestay.jsx";
import Contact from "./Contact.jsx";
import Dust from "./Dust.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import TimelinePage from "./TimelinePage.jsx";
import Catalogue from "./Catalogue.jsx";
import "./App.css";

const EVENT_DATE = new Date("2027-04-03T00:00:00+07:00");

const LEFT_LINKS = ["Home", "About", "Events", "Competitions"];
const RIGHT_LINKS = ["FAQ", "Homestay", "Contact", "Catalogue"];

function useCountdown(target) {
  const calc = useCallback(() => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      Days: Math.floor(diff / 86400000),
      Hours: Math.floor((diff / 3600000) % 24),
      Minutes: Math.floor((diff / 60000) % 60),
      Seconds: Math.floor((diff / 1000) % 60),
    };
  }, [target]);
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);
  return time;
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  x: `${(i * 53 + 7) % 100}%`,
  s: `${3 + (i % 4) * 1.5}px`,
  d: `${11 + (i % 5) * 2.5}s`,
  delay: `${-(i * 1.7)}s`,
  dx: `${(i % 2 ? 1 : -1) * (20 + (i % 3) * 25)}px`,
}));

function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const link = (t) => (
    <a key={t} href={t === "Catalogue" ? "#/catalogue" : `#${t === "Competition" ? "competitions" : t.toLowerCase()}`} onClick={() => setOpen(false)}>
      {t === "Catalogue" ? "Merchandise" : t}
    </a>
  );
  return (
    <header className="nav">
      <nav className="nav-pill nav-left" aria-label="Menu kiri">
        {LEFT_LINKS.map(link)}
      </nav>

      <a href="#home" className="nav-logo" aria-label="Asfera - Home">
        <img src={asferalogo} alt="Logo Asfera" />
      </a>

      <nav className="nav-pill nav-right" aria-label="Menu kanan">
        {RIGHT_LINKS.map(link)}
      </nav>

      <button
        className="nav-burger"
        aria-expanded={open}
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <nav id="mobile-navigation" className="nav-mobile" aria-label="Menu utama">
          {[...LEFT_LINKS, ...RIGHT_LINKS].map(link)}
        </nav>
      )}
    </header>
  );
}

function Home() {
  const time = useCountdown(EVENT_DATE);
  return (
    <section id="home" className="hero" aria-label="Asfera">
      <div className="particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            style={{ "--x": p.x, "--s": p.s, "--d": p.d, "--delay": p.delay, "--dx": p.dx }}
          />
        ))}
      </div>
      <div className="frame" aria-hidden="true">
        <img className="corner corner-tl" src={topCornerOrnament} alt="" />
        <img className="corner corner-tr" src={topCornerOrnament} alt="" />
        <img className="corner corner-bl" src={cornerOrnament} alt="" />
        <img className="corner corner-br" src={cornerOrnament} alt="" />
      </div>
      <div className="hero-content">
        <h1 className="sr-only">Asfera</h1>
        <img className="hero-logo" src={emblem} alt="Asfera" />

        <div className="countdown" role="timer" aria-label="Hitung mundur menuju Asfera">
          {Object.entries(time).map(([label, value]) => (
            <div className="card" key={label}>
              <img className="card-frame" src={countdownFrame} alt="" />
              <span className="card-num" key={value}>{String(value).padStart(2, "0")}</span>
              <span className="card-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trailer() {  
  const videos = [
    { title: "Trailer ASFERA", id: "" },
    { title: "Teaser ASFERA", id: "bSz89V4cNKQ" },
  ];
  const [activeIndex, setActiveIndex] = useState(1);
  const activeVideo = videos[activeIndex];

  return (
    <section id="trailer" className="trailer-section" aria-labelledby="trailer-title">
      <h2 id="trailer-title" className="sr-only">Video Trailer dan Teaser Asfera</h2>
      <div className="trailer-carousel">
        <button
          type="button"
          className="trailer-arrow trailer-arrow--trailer"
          onClick={() => setActiveIndex((index) => (index - 1 + videos.length) % videos.length)}
          aria-label="Tampilkan video sebelumnya"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <ScrollReveal variant="zoom" className="trailer-preview">
          <div className="trailer-frame">
            <img className="trailer-artwork" src={trailerArtwork} alt="" />
            <div className="trailer-screen" aria-live="polite">
              {activeVideo.id ? (
                <iframe
                  key={activeVideo.id}
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <img
                  className="trailer-coming-soon"
                  src={trailerComingSoon}
                  alt="Trailer ASFERA coming soon"
                />
              )}
            </div>
          </div>
        </ScrollReveal>

        <button
          type="button"
          className="trailer-arrow trailer-arrow--teaser"
          onClick={() => setActiveIndex((index) => (index + 1) % videos.length)}
          aria-label="Tampilkan video berikutnya"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="events-section" aria-labelledby="events-title">

      <ScrollReveal as="h2" variant="title" id="events-title" className="events-title">
        Events
      </ScrollReveal>
      <div className="events-grid">
        {[0, 1, 2].map((event) => (
          <ScrollReveal
            as="article"
            variant="zoom"
            className="event-item"
            delay={event * 140}
            key={event}
          >
            <img src={eventCard} alt="Event coming soon" />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <div className="showcase">
      <Dust />
      <img className="events-corner events-corner-tl" src={eventCornerLeft} alt="" />
      <img className="events-corner events-corner-tr" src={eventCornerTopRight} alt="" />
      <img className="events-corner events-corner-bl" src={eventCornerBottomLeft} alt="" />
      <img className="events-corner events-corner-br" src={eventCornerLeft} alt="" />
      <Events />
      <Competitions />
      <FAQ />
    </div>
  );
}

export default function App() {
  const [isTimeline, setIsTimeline] = useState(() => window.location.hash === "#timeline");
  const [isCatalogue, setIsCatalogue] = useState(() => window.location.hash === "#/catalogue");
  const [view, setView] = useState(() => {
    const match = window.location.hash.match(/^#\/competition\/(putra|putri)(?:\/(tk|sd|smp|sma))?$/);
    return match ? { gender: match[1], level: match[2] ?? null } : null;
  });

  useEffect(() => {
    const onHashChange = () => {
      setIsTimeline(window.location.hash === "#timeline");
      setIsCatalogue(window.location.hash === "#/catalogue");
      const match = window.location.hash.match(/^#\/competition\/(putra|putri)(?:\/(tk|sd|smp|sma))?$/);
      setView(match ? { gender: match[1], level: match[2] ?? null } : null);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (view || isTimeline || isCatalogue) {
      window.scrollTo(0, 0);
    } else if (window.location.hash === "#competitions") {
      document.getElementById("competitions")?.scrollIntoView();
    } else if (window.location.hash === "#home") {
      document.getElementById("home")?.scrollIntoView();
    }
  }, [view, isTimeline, isCatalogue]);

  if (isCatalogue) {
    return <Catalogue />;
  }

  if (isTimeline) {
    return <TimelinePage />;
  }

  if (view) {
    return <CompetitionPage key={`${view.gender}-${view.level ?? "levels"}`} gender={view.gender} level={view.level} />;
  }

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Navbar />
      <main className="landing-page">
        <Home />
        <About />
        <Trailer />
        <Showcase />
        <Sponsors />
        <Homestay />
        <Contact />
      </main>
      <footer className="copyright-footer" aria-labelledby="copyright-title">
        <h2 id="copyright-title">COPYRIGHT</h2>
        <p>©Asfera. All Rights Reserved</p>
        <p>Created by Teaching Factory From SMKIT As-Syifa</p>
      </footer>
    </div>
  );
}