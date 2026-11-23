import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";
import homestayImage from "./assets/images/homestay.png";
import homestayExpandedImage from "./assets/images/homestay-klik.png";
import jalancagakPutraRulebook from "./assets/rulebooks/homestay-jalancagak-putra-2027.pdf";
import putriRulebook from "./assets/rulebooks/homestay-putri-2027.pdf";
import "./Homestay.css";

// 👉 Isi link pendaftaran & rulebook di sini (Google Form / Drive / PDF).
//    Kalau masih kosong (""), tombolnya tampil tapi belum bisa diklik.
const HOMESTAYS = [
  { name: "Homestay Jalancagak Putra", place: "Jalancagak Subang", registration: "https://docs.google.com/forms/d/e/1FAIpQLSc9SVMIp7p5ft8oWFtDYdaPTpyuMg_EQvhGiaPeHi-QQ0i5Cw/viewform", rulebook: jalancagakPutraRulebook },
  { name: "Homestay Jalancagak Putri", place: "Jalancagak Subang", registration: "https://docs.google.com/forms/d/e/1FAIpQLSfd7o46Ci275Gkn25IbbNp4pWNcbMcwOwhpmgYdckkLwuLW0A/viewform", rulebook: putriRulebook },
  { name: "Homestay Wanareja Putra", place: "Wanareja Subang", registration: "", rulebook: "" },
  { name: "Homestay Wanareja Putri", place: "Wanareja Subang", registration: "https://docs.google.com/forms/d/e/1FAIpQLSf5YbN5ppeELuIZWJNizpooWxOEU2KIdSBtCu7YK06A320s8A/viewform", rulebook: putriRulebook },
  { name: "Homestay Sagalaherang Putra", place: "Sagalaherang Subang", registration: "", rulebook: "" },
  { name: "Homestay Sagalaherang Putri", place: "Sagalaherang Subang", registration: "", rulebook: putriRulebook },
  {
    name: "Homestay Jalancagak 2",
    place: "Jalancagak Subang",
    note: "Campuran (Putra & Putri)",
    wide: true,
    registration: "",
    rulebook: "",
  },
];

const HOMESTAY_FAQS = [
  {
    question: "Syarat dan ketentuan umum",
    answer: [
      "Panitia menyediakan penginapan selama Asfera berlangsung.",
      "Penyediaan penginapan tidak dikenakan biaya, namun diwajibkan untuk membayar jika adanya kerusakan terhadap fasilitas.",
      "Penginapan diprioritaskan untuk sekolah yang berjarak ≥ 50 km dari lokasi lomba.",
      "Pembagian lokasi dari akomodasi ditentukan oleh panitia.",
      "Tamu penginapan wajib melakukan check in dan check out.",
      "Penyediaan penginapan diperuntukkan bagi peserta Asfera yang terlebih dahulu mendaftarkan diri.",
      "Penginapan hanya disediakan bagi peserta Asfera yang masih aktif sebagai peserta berikut official atau pembina yang berhubungan dengan sekolah tersebut.",
      "Jumlah penginapan yang disediakan terbatas.",
      "Wajib melapor kepada panitia bagian penginapan jika terjadi kepulangan.",
    ],
  },
  {
    question: "Apa saja fasilitas yang disediakan di penginapan?",
    answer: [
      "Kamar penginapan (kapasitas maks. 20 orang).",
      "Kamar mandi.",
      "Air minum (hubungi panitia untuk isi ulang jika habis).",
      "Jemuran handuk.",
      "Alat kebersihan.",
      "Sewa kasur tambahan (Rp 5.000/hari).",
    ],
  },
  {
    question: "Tata Cara Pendaftaran",
    answer: [
      "Pendaftaran dibuka mulai 23 November 2026 - 1 Maret.",
      "Mengisi Google Formulir di situs web resmi Asfera.",
      "Konfirmasi pendaftaran dilakukan 5 hari sebelum kedatangan melalui:",
      "0852-2401-9012 (Admin Wanareja Putra)",
      "0821-2736-620  (Admin Jalancagak Putra)",
      " 0812-7779-1000 (Admin Sagalaherang Putra)",
      " 0877-0503-4282 (Admin Jalancagak 2 Putra)",
      "Melakukan registrasi ulang di stand saat kedatangan.",
    ],
  },
  {
    question: "Tata Cara Check In dan Check Out",
    answer: [
      "Registrasi ulang dan check-in dibuka pada 2 april 2027.",
      "Peserta mulai menginap pada tanggal 2 april 2027.",
      "Prosedur check-out diselesaikan di meja registrasi login.",
    ],
  },
  {
    question: "Tata Tertib",
    answer: [
      "Dilarang merokok, miras, atau mengganggu keamanan acara.",
      "Wajib berpakaian sopan dan menutup aurat di lingkungan Asfera.",
      "Barang pribadi menjadi tanggung jawab masing-masing penginap.",
      "Gunakan fasilitas sesuai fungsi.",
      "Dilarang merusak, mencuri, atau melakukan vandalisme (ada sanksi).",
      "Dilarang menggunakan fasilitas di luar yang diberikan tanpa izin panitia.",
      "Dilarang berkata kotor atau membuat ringkasan di lingkungan As-Syifa Boarding School.",
      "Wajib menjaga kebersihan dan kerapihan setiap saat.",
    ],
  },
];

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.6 3 7.2v1.6h18V7.2z" />
      <rect x="5" y="10.4" width="2.6" height="7.2" rx="0.4" />
      <rect x="10.7" y="10.4" width="2.6" height="7.2" rx="0.4" />
      <rect x="16.4" y="10.4" width="2.6" height="7.2" rx="0.4" />
      <rect x="3" y="19" width="18" height="2.2" rx="0.5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-15.6a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2z"
      />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none-" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="16" cy="16" r="13.5" />
      <path d="M13 10.5 8.5 15l4.5 4.5" />
      <path d="M9 15h8.5a4.2 4.2 0 0 1 0 8.4H15" />
    </svg>
  );
}

function ActionLink({ href, variant, children }) {
  const ready = Boolean(href);
  return (
    <a
      className={`hs-btn hs-btn--${variant}${ready ? "" : " is-pending"}`}
      href={ready ? href : undefined}
      target={ready ? "_blank" : undefined}
      rel={ready ? "noopener noreferrer" : undefined}
      aria-disabled={ready ? undefined : true}
      title={ready ? undefined : "Segera hadir"}
    >
      {children}
    </a>
  );
}

function HomestayFAQ() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <section className="homestay-faq" aria-labelledby="homestay-faq-title">
      <h3 className="homestay-faq-title" id="homestay-faq-title">FAQ PENGINAPAN</h3>
      <div className="homestay-faq-list">
        {HOMESTAY_FAQS.map((item, index) => {
          const isOpen = openFaq === index;
          const answerId = `homestay-faq-answer-${index}`;
          return (
            <article
              className={`homestay-faq-item${isOpen ? " is-open" : ""}`}
              style={{ "--faq-index": index }}
              key={item.question}
            >
              <h4>
                <button
                  type="button"
                  className="homestay-faq-question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="homestay-faq-chevron" aria-hidden="true" />
                </button>
              </h4>
              <div className="homestay-faq-answer" id={answerId} aria-hidden={!isOpen}>
                <div className="homestay-faq-answer-inner">
                  <ul>
                    {item.answer.map((text, answerIndex) => (
                      <li style={{ "--answer-index": answerIndex }} key={text}>{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function Homestay() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const backRef = useRef(null);
  const moreRef = useRef(null);

  const toggle = (next) => {
    setExpanded(next);
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ block: "start", behavior: smooth ? "smooth" : "auto" });
    });
    // pindahkan fokus keyboard ke tombol yang baru muncul
    setTimeout(() => (next ? backRef : moreRef).current?.focus({ preventScroll: true }), 60);
  };

  return (
    <section
      id="homestay"
      ref={sectionRef}
      className={`homestay-section${expanded ? " is-expanded" : ""}`}
      aria-labelledby="homestay-title"
    >
      <div className="homestay-bg homestay-bg--light" aria-hidden="true" />
      <div className="homestay-bg homestay-bg--dark" aria-hidden="true" />
      <div className="homestay-frame" aria-hidden="true" />

      <button
        ref={backRef}
        type="button"
        className="homestay-back"
        aria-label="Kembali ke ringkasan homestay"
        onClick={() => toggle(false)}
      >
        <BackIcon />
      </button>

      <ScrollReveal as="h2" variant="title" id="homestay-title" className="homestay-title">
        Homestay
      </ScrollReveal>

      <ScrollReveal variant="zoom" className="homestay-gallery" delay={100}>
        <img
          className="homestay-image"
          src={expanded ? homestayExpandedImage : homestayImage}
          alt="Ilustrasi homestay Asfera"
        />
      </ScrollReveal>

      {expanded ? (
        <>
          <HomestayFAQ />
          <ul id="homestay-list" className="homestay-list" aria-label="Daftar homestay">
            {HOMESTAYS.map((h, i) => (
              <li className={`homestay-item${h.wide ? " is-wide" : ""}`} style={{ "--i": i }} key={h.name}>
                <article className="homestay-card">
                  <div className="hs-head">
                    <span className="hs-icon">
                      <BuildingIcon />
                    </span>
                    <div className="hs-text">
                      <h3>{h.name}</h3>
                      <p className="hs-meta">
                        <span className="hs-place">
                          <PinIcon />
                          {h.place}
                        </span>
                        {h.note && <span className="hs-note">{h.note}</span>}
                      </p>
                    </div>
                  </div>
                  <div className="hs-actions">
                    <ActionLink href={h.registration} variant="solid">Registration</ActionLink>
                    <ActionLink href={h.rulebook} variant="outline">Rulebook</ActionLink>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <button
          ref={moreRef}
          type="button"
          className="see-more homestay-more"
          aria-expanded="false"
          aria-controls="homestay-list"
          onClick={() => toggle(true)}
        >
          See More
        </button>
      )}
    </section>
  );
}
