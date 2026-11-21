import Dust from "./Dust.jsx";
import eventCornerLeft from "./assets/images/event-corner-left.png";
import eventCornerTopRight from "./assets/images/event-corner-top-right.png";
import eventCornerBottomLeft from "./assets/images/event-corner-bottom-left.png";

/* Blok parchment: background + frame + debu + 4 corner. Dipakai Events/Competitions/FAQ dan Homestay. */
export default function ParchmentFrame({ dust = 56, children }) {
  return (
    <div className="showcase">
      <Dust count={dust} />
      <img className="events-corner events-corner-tl" src={eventCornerLeft} alt="" />
      <img className="events-corner events-corner-tr" src={eventCornerTopRight} alt="" />
      <img className="events-corner events-corner-bl" src={eventCornerBottomLeft} alt="" />
      <img className="events-corner events-corner-br" src={eventCornerLeft} alt="" />
      {children}
    </div>
  );
}
