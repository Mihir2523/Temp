import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaArrowRight,
  FaImages,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import gsap from "gsap";

// Certificate / business-card photographs served from /public (3.jpg … 21.jpg).
const IMAGES = Array.from({ length: 19 }, (_, i) => ({
  src: `/${i + 3}.jpg`,
  alt: `Quality Consulting certificate ${i + 1}`,
}));

function Lightbox({ index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const item = IMAGES[index];
  return (
    <div
      className="lightbox-backdrop fixed inset-0 z-[150] grid place-items-center p-4 sm:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate ${index + 1} of ${IMAGES.length}`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
      >
        <FaTimes />
      </button>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous certificate"
        className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10 sm:left-8"
      >
        <FaChevronLeft />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next certificate"
        className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10 sm:right-8"
      >
        <FaChevronRight />
      </button>
      <figure className="relative max-h-[88vh] max-w-5xl">
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[88vh] w-auto rounded-lg shadow-2xl"
        />
        <figcaption className="absolute inset-x-0 -bottom-9 text-center text-xs uppercase tracking-[0.18em] text-white/65">
          {String(index + 1).padStart(2, "0")} / {String(IMAGES.length).padStart(2, "0")}
        </figcaption>
      </figure>
    </div>
  );
}

function Slider({ idx, setIdx, onExpand, playing, setPlaying }) {
  const total = IMAGES.length;
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [setIdx, total]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [setIdx, total]);

  // Auto-advance
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [playing, next]);

  // Keyboard nav on the slider itself
  const sliderRef = useRef(null);
  useEffect(() => {
    const node = sliderRef.current;
    if (!node) return;
    const onKey = (e) => {
      if (document.activeElement !== node && !node.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Thumbnail strip: scroll active into view
  const thumbStripRef = useRef(null);
  useEffect(() => {
    const strip = thumbStripRef.current;
    if (!strip) return;
    const active = strip.querySelector(`[data-thumb="${idx}"]`);
    active?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [idx]);

  // Touch swipe on the main display
  const touchRef = useRef({ x: 0, y: 0, active: false });
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY, active: true };
  };
  const onTouchMove = (e) => {
    if (!touchRef.current.active) return;
    const t = e.touches[0];
    // Lock horizontal swipe if predominantly horizontal motion
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
      e.preventDefault();
    }
  };
  const onTouchEnd = (e) => {
    if (!touchRef.current.active) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    touchRef.current.active = false;
    // Swipe must be horizontal and > 50px
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
  };

  return (
    <div ref={sliderRef} tabIndex={-1} className="outline-none">
      {/* Main display — fixed responsive heights so it always fits the viewport */}
      <div
        className="relative overflow-hidden rounded-xl bg-cream-50 ring-1 ring-cream-300 shadow-[var(--shadow-card)]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative h-[260px] max-h-[55vh] sm:h-[360px] sm:max-h-[60vh] lg:h-[440px] lg:max-h-[62vh]">
          {IMAGES.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? "eager" : "lazy"}
              aria-hidden={i !== idx}
              draggable={false}
              style={{
                opacity: i === idx ? 1 : 0,
                pointerEvents: i === idx ? "auto" : "none",
                transition: "opacity 500ms ease",
              }}
              className="absolute inset-0 h-full w-full select-none object-contain p-3 sm:p-6 lg:p-8"
            />
          ))}

          {/* Top-right counter */}
          <span className="absolute right-3 top-3 rounded-full bg-ink-900/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:right-4 sm:top-4 sm:px-3 sm:text-[11px]">
            {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          {/* Bottom-right expand */}
          <button
            type="button"
            onClick={() => onExpand(idx)}
            aria-label="View full size"
            className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink-900 shadow-md ring-1 ring-cream-300 transition hover:bg-cream-100 sm:bottom-4 sm:right-4 sm:h-11 sm:w-11"
          >
            <FaExpand className="text-xs sm:text-sm" />
          </button>

          {/* Bottom-left play/pause */}
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause autoplay" : "Play autoplay"}
            className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-700 shadow-md ring-1 ring-cream-300 transition hover:bg-cream-100 sm:bottom-4 sm:left-4 sm:gap-2 sm:px-3 sm:py-2 sm:text-[11px]"
          >
            {playing ? <FaPause className="text-[9px] sm:text-[10px]" /> : <FaPlay className="text-[9px] sm:text-[10px]" />}
            <span className="hidden sm:inline">{playing ? "Pause" : "Play"}</span>
          </button>
        </div>

        {/* Side arrows — smaller on mobile */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-ink-900 shadow-md ring-1 ring-cream-300 transition hover:bg-cream-100 sm:left-4 sm:h-12 sm:w-12"
        >
          <FaChevronLeft className="text-xs sm:text-sm" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-ink-900 shadow-md ring-1 ring-cream-300 transition hover:bg-cream-100 sm:right-4 sm:h-12 sm:w-12"
        >
          <FaChevronRight className="text-xs sm:text-sm" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-5">
        <div
          ref={thumbStripRef}
          className="flex gap-2 overflow-x-auto pb-2 sm:gap-3 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-cream-300"
        >
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              data-thumb={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to certificate ${i + 1}`}
              aria-current={i === idx ? "true" : undefined}
              className={`group relative aspect-square h-16 shrink-0 overflow-hidden rounded-md transition sm:h-20 ${
                i === idx
                  ? "ring-2 ring-brand-500 shadow-[0_0_0_2px_white,var(--shadow-card)]"
                  : "ring-1 ring-cream-300 hover:ring-brand-300"
              }`}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span
                className={`absolute inset-0 transition ${
                  i === idx ? "bg-transparent" : "bg-white/35 group-hover:bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [idx, setIdx] = useState(0);
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(true);
  const root = useRef(null);

  const openLightbox = useCallback((i) => {
    setActive(i);
    setPlaying(false);
  }, []);
  const closeLightbox = useCallback(() => setActive(null), []);
  const lightboxPrev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length)),
    []
  );
  const lightboxNext = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % IMAGES.length)),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gal-head > *", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        delay: 0.05,
      });
      gsap.from(".gal-slider", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay: 0.35,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      {/* HERO + SLIDER in one section — no doubled padding between them */}
      <section className="relative overflow-hidden border-b border-cream-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 via-white to-cream-100" />
        <div className="container-x relative pb-10 pt-10 sm:pt-14 sm:pb-14">
          <div className="gal-head max-w-3xl">
            <p className="eyebrow">
              <FaImages className="text-[10px]" /> Gallery
            </p>
            <h1 className="display mt-5 text-4xl text-ink-900 sm:text-5xl">
              Our Service Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-base text-ink-600">
              A selection of certificates and credentials from our consulting work.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-ink-500">
              <span>
                <strong className="font-semibold text-ink-900">
                  {String(IMAGES.length).padStart(2, "0")}
                </strong>{" "}
                items
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:inline-block" />
              <span>Click thumbnail or arrows to navigate</span>
              <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:inline-block" />
              <span>← → to browse · Esc to close</span>
            </div>
          </div>

          {/* SLIDER directly under hero text — tight, no big empty gap */}
          <div className="gal-slider mt-8">
            <Slider
              idx={idx}
              setIdx={setIdx}
              onExpand={openLightbox}
              playing={playing}
              setPlaying={setPlaying}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-12">
        <div className="grid items-center gap-6 rounded-2xl bg-ink-900 px-8 py-10 text-white sm:px-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow-light">Get in touch</p>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Want to know more about our certifications?
            </h2>
            <p className="mt-2 text-white/70">
              Send us an enquiry and we&apos;ll be in touch.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link to="/enquiry" className="btn btn-gold justify-center">
              Send Enquiry <FaArrowRight />
            </Link>
            <Link to="/contactus" className="btn btn-outline-light justify-center">
              Contact Details
            </Link>
          </div>
        </div>
      </section>

      {active !== null && (
        <Lightbox
          index={active}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}
    </main>
  );
}
