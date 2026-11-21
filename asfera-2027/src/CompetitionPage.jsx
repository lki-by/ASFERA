import BackButton from "./BackButton.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import { COMPETITIONS, GENDERS, LEVELS } from "./competitionData.js";
import levelTk from "./assets/images/competition-level-tk.png";
import levelSd from "./assets/images/competition-level-sd.png";
import levelSmp from "./assets/images/competition-level-smp.png";
import levelSma from "./assets/images/competition-level-sma.png";
import competitionCardFrame from "./assets/images/competition-card-blank.png";
import "./CompetitionPage.css";

const LEVEL_FRAMES = {
  tk: levelTk,
  sd: levelSd,
  smp: levelSmp,
  sma: levelSma,
};

function Action({ href, variant, children }) {
  const cls = `cc-btn cc-btn-${variant}`;
  return href ? (
    <a className={cls} href={href} target="_blank" rel="noreferrer">{children}</a>
  ) : (
    <button type="button" className={cls}>{children}</button>
  );
}

function LevelCard({ href, level, label }) {
  return (
    <a className={`lv-card lv-card--${level}`} href={href} aria-label={`Lihat lomba jenjang ${label}`}>
      <img className="lv-frame" src={LEVEL_FRAMES[level]} alt="" />
    </a>
  );
}

function CompetitionCard({ item }) {
  return (
    <div className="cc-card">
      <img className="cc-frame" src={competitionCardFrame} alt="" />
      <div className="cc-content">
        <p className="cc-campus">{item.campus}</p>
        <h3 className="cc-name">{item.name}</h3>
        <div className="cc-actions">
          <Action href={item.registration} variant="fill">Registration</Action>
          <Action href={item.rulebook} variant="outline">Rulebook</Action>
        </div>
      </div>
    </div>
  );
}

export default function CompetitionPage({ gender, level }) {
  const g = GENDERS.find((x) => x.key === gender) ?? GENDERS[0];
  const lv = LEVELS.find((x) => x.key === level);
  const base = `#/competition/${g.key}`;
  const items = lv ? COMPETITIONS[g.key]?.[lv.key] ?? [] : [];

  return (
    <div className="site-shell competition-page">
      {/* daftar jenjang -> kembali ke landing; daftar lomba -> kembali ke daftar jenjang */}
      <BackButton href={lv ? base : "#competitions"} label={lv ? "Kembali ke pilihan jenjang" : "Kembali ke halaman utama"} />

      <main className="cp-main">
        <ScrollReveal as="h1" variant="title" className="section-title cp-title">COMPETITION</ScrollReveal>

        {lv ? (
          <div className="cp-head">
            <p className="cp-pill">{lv.label}</p>
            <p className="cp-sub">Kategori {g.label}</p>
          </div>
        ) : (
          <nav className="cp-tabs" aria-label="Pilih kategori">
            {GENDERS.map((x) => (
              <a
                key={x.key}
                className="cp-tab"
                href={`#/competition/${x.key}`}
                aria-current={x.key === g.key ? "page" : undefined}
              >
                {x.label}
              </a>
            ))}
          </nav>
        )}

        {/* key = ganti kategori/jenjang -> animasi masuk diulang */}
        {lv ? (
          items.length ? (
            <div className="cp-grid" key={`${g.key}-${lv.key}`}>
              {items.map((item, i) => (
                <ScrollReveal className="cc-wrap" delay={(i % 4) * 90} key={`${item.campus}-${item.name}-${i}`}>
                  <CompetitionCard item={item} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <p className="cp-empty">Coming soon!</p>
          )
        ) : (
          <div className="lv-grid" key={g.key}>
            {LEVELS.map((l, i) => (
              <ScrollReveal className="lv-wrap" delay={i * 110} variant="zoom" key={l.key}>
                <LevelCard href={`${base}/${l.key}`} level={l.key} label={l.label} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}