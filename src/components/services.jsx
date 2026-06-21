import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaArrowRight, FaTimesCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES, CATEGORIES } from "./services-data.js";

export default function Services() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const root = useRef(null);
  const gridRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const matchesCat = cat === "All" || s.category === cat;
      const matchesQ =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.subtitle.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, cat]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-head > *", {
        y: 18, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.05,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".svc-card"),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, overwrite: true }
      );
    }, gridRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [filtered.length, cat, query]);

  return (
    <main ref={root}>
      <section className="container-x pt-12 pb-10 sm:pt-16 lg:pt-20">
        <div className="svc-head max-w-3xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-5 text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
            ISO Certification &amp; Consulting
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600">
            Browse the management-system standards we consult on. Click a service for the full description.
          </p>
        </div>

        <div className="svc-head mt-10 flex flex-col gap-4">
          <div className="relative">
            <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by standard, e.g. ISO 9001, HACCP, automotive…"
              className="h-12 w-full rounded-full border border-cream-300 bg-cream-50 pl-11 pr-12 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-900"
              >
                <FaTimesCircle />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.12em] transition ${
                  cat === c
                    ? "border-ink-900 bg-ink-900 text-cream-50"
                    : "border-cream-300 bg-cream-50 text-ink-700 hover:border-ink-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-cream-300 bg-cream-50 p-14 text-center">
            <p className="text-lg font-semibold text-ink-900">No services match your search.</p>
            <p className="mt-2 text-sm text-ink-500">Try clearing the filters or searching for a different standard.</p>
          </div>
        ) : (
          <div
            ref={gridRef}
            key={`${cat}-${query}`}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="svc-card group flex flex-col overflow-hidden rounded-xl bg-cream-50 ring-1 ring-cream-300 transition hover:-translate-y-1 hover:ring-brand-500"
              >
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-500">
                    {s.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">{s.subtitle}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                    View details
                    <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
