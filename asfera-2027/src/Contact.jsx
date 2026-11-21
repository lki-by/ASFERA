import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";
import ComingSoon from "./ComingSoon.jsx";
import "./Contact.css";

const CAMPUSES = ["Jalancagak", "Wanareja", "Sagalaherang", "Jalancagak 2"];

const ADMINS = [
  {
    title: "Admin Putra",
    levels: [
      {
        level: "SMA",
        desc: "Untuk informasi dan koordinasi terkait jenjang SMP dan SMA, silakan menghubungi admin putra SMA",
        contacts: [
          { phone: "0821-2736-620", label: "Administrasi Jalancagak Putra" },
          { phone: "0852-2401-9012", label: "Administrasi Wanareja Putra" },
          { phone: "0812-7779-1000", label: "Administrasi Sagalaherang Putra" },
          { phone: "0877-0503-4282", label: "Administrasi Jalancagak 2 Putra" },
        ],
      },
      {
        level: "SMP",
        desc: "Untuk informasi dan koordinasi terkait jenjang SMP dan SMA, silakan menghubungi admin putra SMA",
        contacts: [
          { phone: "0857-8800-8123", label: "Administrasi Jalancagak Putra" },
          { phone: "0877-7881-7598", label: "Administrasi Wanareja Putra" },
          { phone: "0812-7779-1000", label: "Administrasi Sagalaherang Putra" },
          { phone: "0838-6281-8334", label: "Administrasi Jalancagak 2 Putra" },
        ],
      },
    ],
  },
  {
    title: "Admin Putri",
    levels: [
      {
        level: "SMA",
        desc: "Untuk informasi dan koordinasi terkait jenjang SMP dan SMA, silakan menghubungi admin putri SMA",
        contacts: [
          { phone: "0851-9603-4928", label: "Administrasi Jalancagak Putri" },
          { phone: "0858-7120-0031", label: "Administrasi Wanareja Putri" },
          { phone: "0852-8468-0314", label: "Administrasi Sagalaherang Putri" },
        ],
      },
      {
        level: "SMP",
        desc: "Untuk informasi dan koordinasi terkait jenjang SMP dan SMA, silakan menghubungi admin putri SMA",
        contacts: [
          { phone: "0857-8800-8123", label: "Administrasi Jalancagak Putri" },
          { phone: "0821-1608-4470", label: "Administrasi Wanareja Putri" },
          { phone: "0821-2117-2855", label: "Administrasi Sagalaherang Putri" },
          { phone: "0895-0382-8298", label: "Administrasi Jalancagak 2 Putri" },
        ],
      },
    ],
  },
];

const LOCATION_TABS = [
  { id: "putra", label: "Kampus Putra" },
  { id: "putri", label: "Kampus Putri" },
];

// nomor lokal (08xx) → format tel: internasional (+628xx)
const toTel = (phone) => `tel:+62${phone.replace(/\D/g, "").replace(/^0/, "")}`;

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="7.6" r="4.2" />
      <path d="M4 21c0-4.4 3.6-7.4 8-7.4s8 3 8 7.4z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export default function Contact() {
  const [tab, setTab] = useState("putra");
  const tabRefs = useRef({});

  const onTabKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = tab === "putra" ? "putri" : "putra";
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-grid">
        {/* ---------- kiri: kontak admin ---------- */}
        <ScrollReveal variant="left" className="contact-col">
          <h2 id="contact-title" className="contact-heading">Contact</h2>

          <div className="admin-stack">
            {ADMINS.map((admin) => (
              <div className="admin" key={admin.title}>
                <h3 className="admin-name">
                  <PersonIcon />
                  {admin.title}
                </h3>

                <div className="admin-levels">
                  {admin.levels.map((l) => (
                    <div className="admin-level" key={l.level}>
                      <h4>{l.level}</h4>
                      <p className="admin-desc">{l.desc}</p>
                      <ul className="phone-list">
                        {l.contacts.map((c) => (
                          <li key={c.label}>
                            <a className="phone-item" href={toTel(c.phone)}>
                              <PhoneIcon />
                              <span>
                                <strong>{c.phone}</strong>
                                <small>{c.label}</small>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ---------- kanan: lokasi ---------- */}
        <ScrollReveal variant="right" className="contact-col" delay={150}>
          <h2 className="contact-heading">Our Location</h2>

          <div className="location-tabs" role="tablist" aria-label="Pilih kampus" onKeyDown={onTabKeyDown}>
            {LOCATION_TABS.map((t) => (
              <button
                key={t.id}
                ref={(el) => (tabRefs.current[t.id] = el)}
                type="button"
                role="tab"
                id={`loc-tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls="loc-panel"
                tabIndex={tab === t.id ? 0 : -1}
                className={`location-tab${tab === t.id ? " is-active" : ""}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* 👉 Nanti ganti <ComingSoon /> dengan foto / peta tiap kampus */}
          <div className="location-grid" id="loc-panel" role="tabpanel" aria-labelledby={`loc-tab-${tab}`} key={tab}>
            {CAMPUSES.map((campus, i) => (
              <div className="location-item" style={{ "--i": i }} key={campus}>
                <ComingSoon variant="outline" bang caption={campus} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
