import { useState } from "react";
import BackButton from "./BackButton.jsx";
import timelineIllustration from "./assets/images/timeline-illustration.png";
import timelineTitle from "./assets/images/timeline-title.png";
import "./TimelinePage.css";

const events = [
  { date: "23 November 2026", title: "Open Registrasi Peserta" },
  { date: "4 Januari 2027", title: "Dimulai Rangkaian Kegiatan Pre-event" },
  { date: "21 Februari 2027", title: "Close Registrasi Peserta" },
  { date: "1 Maret - 27 Maret 2027", title: "Rangkaian Technical Meeting" },
  { date: "3 April 2027", title: "Grand Opening As-Syifa Festival Raya 2027" },
  { date: "17 April 2027", title: "Closing Ceremony As-Syifa Festival Raya 2027" },
];

export default function TimelinePage() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <main
      className="site-shell timeline-page"
      aria-labelledby="timeline-title"
    >
      <BackButton href="#" label="Kembali ke halaman utama" />
      <h1 id="timeline-title" className="sr-only">Timeline Asfera 2027</h1>
      <img className="timeline-title-art" src={timelineTitle} alt="" />
      <p className="timeline-subtitle">Setiap langkah membawa kita lebih dekat ke puncak.</p>

      <section className="timeline-layout" aria-label="Rangkaian acara As-Syifa Festival Raya 2027">
        <div className="timeline-stage">
          <img
            className="timeline-illustration"
            src={timelineIllustration}
            alt="Ilustrasi jam pasir di atas bukit pasir"
          />
          <svg className="timeline-trail" viewBox="0 0 768 768" aria-hidden="true">
            <path d="M 138 538 C 177 507, 202 480, 238 461 S 298 420, 330 400 S 384 370, 414 361 S 478 402, 506 438 S 581 498, 622 530" />
          </svg>
          <ol className="timeline-events">
            {events.map((event, index) => {
              const isActive = activeEvent === index;
              return (
                <li className={`timeline-event timeline-event--${index + 1}`} key={event.title}>
                  <button
                    type="button"
                    className="timeline-marker"
                    aria-label={`${isActive ? "Sembunyikan" : "Tampilkan"} detail acara ${index + 1}: ${event.title}`}
                    aria-expanded={isActive}
                    aria-controls={`timeline-details-${index + 1}`}
                    onClick={() => setActiveEvent(isActive ? null : index)}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                  <div
                    className="timeline-card"
                    id={`timeline-details-${index + 1}`}
                    role="region"
                    hidden={!isActive}
                  >
                    <time>{event.date}</time>
                    <h2>{event.title}</h2>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        {activeEvent !== null && (
          <div className="timeline-selected-card" aria-live="polite">
            <time>{events[activeEvent].date}</time>
            <h2>{events[activeEvent].title}</h2>
          </div>
        )}
      </section>
    </main>
  );
}
