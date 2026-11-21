import { useEffect, useRef, useState } from "react";

/**
 * Munculkan elemen dengan animasi saat masuk layar.
 * variant: "up" (default) | "left" | "right" | "zoom" | "title"
 */
export default function ScrollReveal({
  as: Element = "div",
  id,
  className = "",
  delay = 0,
  variant = "up",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = ["scroll-reveal", `reveal-${variant}`, visible && "is-visible", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Element ref={ref} id={id} className={classes} style={{ "--reveal-delay": `${delay}ms` }} {...rest}>
      {children}
    </Element>
  );
}
