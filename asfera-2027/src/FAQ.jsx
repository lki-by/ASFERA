import { useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";
import faqBottomElement from "./assets/images/showcase-bottom-rings.png";
import "./FAQ.css";

const FAQS = [
  {
    q: "As-Syifa Festival Raya 2027 itu apa sih?",
    intro:
      'Festival tahunan terbesar se-Yayasan As-Syifa dengan tema "Fatum Odysseym, Pratigna Harmony" - ajang unjuk bakat, kompetisi, dan pengembangan diri buat pelajar se-Indonesia yang pengen ngasah potensi mereka!',
  },
  {
    q: "Siapa aja yang ngadain acara ini?",
    intro: "Kolaborasi 4 kampus di bawah naungan Yayasan As-Syifa:",
    ordered: true,
    items: [
      "Pondok Pesantren As-Syifa Jalancagak",
      "Pondok Pesantren As-Syifa Wanareja",
      "As-Syifa Sagalaherang",
      "As-Syifa Jalancagak 2",
    ],
  },
  {
    q: "Lokasinya dimana?",
    intro: "Berputar di 4 kampus As-Syifa (Jalancagak, Jalancagak 2, Wanareja, dan Sagalaherang)",
  },
  {
    q: "Kenapa kamu harus ikutan?",
    items: [
      "Wadah sempurna untuk ngasah dan pamer kemampuan kamu",
      "Kesempatan berjejaring dengan pelajar se-Indonesia",
      "Pengalaman berharga yang tidak akan terlupakan",
      "Bisa dapat sertifikat dan hadiah menarik!",
    ],
  },
  {
    q: "Kapan acaranya?",
    intro: "3 April - 17 April 2027 (15 hari penuh keseruan)",
  },
  {
    q: "Ada kegiatan apa aja?",
    items: [
      "Kompetisi multi kategori (akademik, seni, olahraga)",
      "Seminar inspiratif dengan pembicara keren",
      "Workshop edukatif & pengembangan keterampilan",
      "Pentas seni & pertunjukan budaya",
    ],
    outro: "Dan masih banyak kejutan lainnya!",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0); // item pertama terbuka dari awal

  return (
    <section id="faq" className="events-section faq-section" aria-labelledby="faq-title">
      <ScrollReveal as="h2" variant="title" id="faq-title" className="events-title">
        FAQ
      </ScrollReveal>

      <ScrollReveal variant="zoom" className="faq-list" delay={100}>
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          const List = item.ordered ? "ol" : "ul";
          return (
            <div className={`faq-item${isOpen ? " is-open" : ""}`} style={{ "--i": i }} key={item.q}>
              <h3>
                <button
                  type="button"
                  className="faq-question"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-chevron" aria-hidden="true" />
                </button>
              </h3>
              <div className="faq-answer" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                <div className="faq-answer-inner">
                  <div className="faq-answer-content">
                    {item.intro && <p>{item.intro}</p>}
                    {item.items && (
                      <List>
                        {item.items.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </List>
                    )}
                    {item.outro && <p>{item.outro}</p>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollReveal>
      <img className="faq-bottom-element" src={faqBottomElement} alt="" />
    </section>
  );
}