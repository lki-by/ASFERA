import asferaLogo from "./assets/icons/logo-asfera.png";
import Lace from "./Lace.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <ScrollReveal as="a" variant="zoom" className="timeline-link" href="#timeline">
        See Our Timeline
      </ScrollReveal>
      <ScrollReveal as="h2" variant="title" id="about-title" className="section-title" delay={100}>
        ABOUT ASFERA
      </ScrollReveal>
      <ScrollReveal id="about-description" variant="zoom" className="about-panel" delay={150}>
        <Lace className="about-lace about-lace-tl" />
        <Lace className="about-lace about-lace-tr" />
        <Lace className="about-lace about-lace-bl" />
        <Lace className="about-lace about-lace-br" />
        <ScrollReveal as="p" variant="left" delay={300}>
          As-Syifa Festival Raya (ASFERA) merupakan agenda tahunan berskala
          nasional yang diselenggarakan sebagai wujud sinergi dan kolaborasi
          hasil unifikasi empat kampus SMPIT dan SMAIT As-Syifa Boarding School,
          yaitu As-Syifa Boarding School Jalancagak, As-Syifa Boarding School
          Wanareja, As-Syifa Boarding School Sagalaherang, dan As-Syifa Boarding
          School Jalancagak 2. ASFERA dirancang sebagai wadah kompetisi dan
          apresiasi potensi pelajar tingkat TK, SD, SMP, hingga SMA/sederajat di
          seluruh Indonesia melalui berbagai cabang perlombaan di bidang
          olahraga, seni, serta keterampilan. Kegiatan ini bertujuan
          menumbuhkan semangat sportivitas sejak dini, mengasah kreativitas,
          memperluas jejaring antarpelajar, serta mempererat solidaritas dan
          kolaborasi antar lembaga pendidikan.
        </ScrollReveal>
        <ScrollReveal variant="right" className="about-emblem-wrap" delay={450}>
          <img className="about-emblem" src={asferaLogo} alt="Logo Asfera" />
        </ScrollReveal>
      </ScrollReveal>
    </section>
  );
}