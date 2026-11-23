// Data halaman Competition (diambil dari screenshot). Edit di sini kalau ada yang salah/berubah.
// registration / rulebook = link (kosong = tombol belum aktif)

import basketSmaJalancagakPutraRulebook from "./assets/rulebooks/basket-sma-jalancagak-putra.pdf";

export const GENDERS = [
  { key: "putra", label: "Putra" },
  { key: "putri", label: "Putri" },
];

export const LEVELS = [
  { key: "tk", label: "TK" },
  { key: "sd", label: "SD" },
  { key: "smp", label: "SMP" },
  { key: "sma", label: "SMA" },
];

const J = "Jalancagak";
const J2 = "Jalancagak 2";
const W = "Wanareja";
const S = "Sagalaherang";
const c = (campus, name, registration = "", rulebook = "") => ({ campus, name, registration, rulebook });

// Putri SMP & SMA di screenshot isinya sama persis; pisahkan kalau memang berbeda.
const putriMenengah = [
  c(J, "Solo Vokal"), c(W, "Speech"), c(S, "LCC"),
  c(S, "MHQ"), c(J, "Ratoeh Jaroe"), c(W, "LKBBT"),
  c(W, "Pencak Silat"), c(S, "Badminton"), c(S, "Khitobah"),
  c(S, "Quranic Science"), c(S, "LLAI"), c(J, "Basket"),
];

export const COMPETITIONS = {
  putra: {
    tk: [c(J, "Menyanyi"), c(J, "Mewarnai"), c(W, "Mewarnai"), c(S, "Mewarnai")],
    sd: [
      c(J, "Basket"), c(J, "Futsal"), c(W, "Futsal"),
      c(W, "Tenis Meja"), c(W, "Pencak Silat"), c(S, "MHQ"),
      c(J, "Da'i Cilik"), c(S, "Nasyid"), c(J, "COC"),
      c(J, "Bercerita Islami"), c(J, "Catur"), c(W, "Catur"),
      c(J, "Adzan"), c(J, "Math Arena"), c(J, "English Olympiade"),
      c(W, "Lari Sprint 60m"), c(J2, "Pramuka Jelajah"), c(J2, "Senam Kreasi"),
      c(J2, "Pantomim"),
    ],
    smp: [
      c(J, "Basket"), c(J2, "LOBB"), c(J, "Futsal"),
      c(J, "Panahan"), c(J, "LDBI"), c(J, "Board Art"),
      c(W, "Sepak Bola"), c(W, "Pencak Silat"), c(W, "CCIQ"),
      c(W, "MSQ"), c(J2, "LOBB"), c(S, "MTQ"),
      c(S, "English Speech"),
    ],
    sma: [
      c(J, "Basket", "https://docs.google.com/forms/d/e/1FAIpQLScdO8hvO2-QjXGYWVJ1EsMx9OYLSYOoRlQITEdE-oX8J1P5uw/viewform", basketSmaJalancagakPutraRulebook), c(J2, "LOBB"), c(J, "Futsal"),
      c(J, "Panahan"), c(J, "LDBI"), c(J, "Board Art"),
      c(W, "Sepak Bola"), c(W, "Pencak Silat"), c(W, "CCIQ"),
      c(W, "MSQ"), c(S, "Volleyball"), c(S, "Badminton"),
      c(S, "MHQ"), c(S, "MTQ"), c(S, "English Speech"),
      c(S, "Hadroh"),
    ],
  },
  putri: {
    tk: [
      c(S, "MHQ"), c(S, "Menyanyi"), c(J, "Mewarnai"),
      c(W, "Mewarnai"), c(S, "Mewarnai"), c(S, "Vocal Group"),
    ],
    sd: [
      c(J, "Solo Vokal"), c(W, "Speech"), c(S, "LCC"),
      c(S, "MHQ"), c(J, "IPAS"), c(J, "Math Arena"),
      c(J, "Mewarnai"), c(W, "Mewarnai"), c(S, "Mewarnai"),
      c(W, "Senam Semaphore"), c(S, "Senam Semaphore"),
      c(J, "Bertutur Siroh"), c(J2, "Bertutur Siroh"), c(S, "Bertutur Siroh"),
      c(S, "LCC PAI"), c(J, "Sains Planner"), c(J, "Menggambar"),
      c(J, "Storytelling"), c(W, "Storytelling"), c(J, "Spelling Bee"),
      c(J, "Puisi"), c(J, "Kaligrafi"), c(W, "Kaligrafi"),
      c(W, "Fashion Show"), c(J2, "LKBB"), c(J, "Pramuka Jelajah"),
      c(J, "Rubik"), c(W, "Pantomim"), c(S, "Yel-yel Kreasi"),
    ],
    smp: putriMenengah,
    sma: putriMenengah,
  },
};