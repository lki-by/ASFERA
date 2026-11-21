import "./Dust.css";

// Debu halus untuk background parchment (Events, Competitions, FAQ)
const DUST = Array.from({ length: 56 }, (_, i) => ({
  x: `${(i * 37 + 11) % 100}%`,
  y: `${(i * 61 + 7) % 100}%`,
  s: `${3 + (i % 5)}px`,
  d: `${10 + (i % 6) * 2}s`,
  delay: `${-(i * 1.3)}s`,
  dx: `${(i % 2 ? 1 : -1) * (14 + (i % 4) * 10)}px`,
  dy: `${-(30 + (i % 5) * 14)}px`,
}));

export default function Dust() {
  return (
    <div className="dust" aria-hidden="true">
      {DUST.map((p, i) => (
        <span
          key={i}
          style={{ "--x": p.x, "--y": p.y, "--s": p.s, "--d": p.d, "--delay": p.delay, "--dx": p.dx, "--dy": p.dy }}
        />
      ))}
    </div>
  );
}
