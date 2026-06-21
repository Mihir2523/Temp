import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onDone }) {
  const shellRef = useRef(null);
  const barFillRef = useRef(null);
  const monoRef = useRef(null);
  const wordRef = useRef(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        setGone(true);
        onDone?.();
      },
    });

    tl.from(monoRef.current.querySelectorAll("circle, path"), {
      drawSVG: 0,
      duration: 0,
    });

    tl.fromTo(
      monoRef.current.querySelectorAll("circle, path"),
      { strokeDasharray: 400, strokeDashoffset: 400, opacity: 0 },
      { strokeDashoffset: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: "power2.inOut" },
      0
    );

    tl.fromTo(
      wordRef.current,
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      0.2
    );

    tl.fromTo(
      barFillRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.0, ease: "power2.inOut" },
      0.4
    );

    tl.to(
      [monoRef.current, wordRef.current, barFillRef.current.parentElement],
      { y: -14, opacity: 0, duration: 0.4, stagger: 0.05, ease: "power2.in" },
      "+=0.15"
    );

    tl.to(
      shellRef.current,
      {
        yPercent: -100,
        duration: 0.9,
        ease: "expo.inOut",
      },
      "-=0.1"
    );

    return () => tl.kill();
  }, [onDone]);

  if (gone) return null;

  return (
    <div ref={shellRef} className="loader-shell" aria-hidden="true">
      <div className="loader-mark">
        <div className="loader-monogram" ref={monoRef}>
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="46" />
            <circle cx="50" cy="50" r="34" opacity="0.6" />
            {/* Stylised Q */}
            <path d="M 30 50 A 20 20 0 1 1 70 50 A 20 20 0 1 1 30 50 Z" />
            <path d="M 60 60 L 74 74" />
            {/* C */}
            <path d="M 64 38 A 16 16 0 1 0 64 62" opacity="0.5" />
          </svg>
        </div>
        <div ref={wordRef} className="loader-word">
          Quality Consulting
        </div>
        <div className="loader-bar">
          <div ref={barFillRef} className="loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
