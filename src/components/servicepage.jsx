import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight, FaArrowLeft, FaListUl, FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "./data.json";
import { SERVICES } from "./services-data.js";

function slugify(str) {
  return (str || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "section";
}

function ImagePara({ heading, para, image, flip }) {
  return (
    <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        {heading && (
          <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">{heading}</h2>
        )}
        {para && (
          <p className="mt-4 text-base leading-[1.85] text-ink-700">{para}</p>
        )}
      </div>
      <div className="overflow-hidden rounded-xl bg-cream-50 ring-1 ring-cream-300">
        <img
          src={image}
          alt={heading || "Service illustration"}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
    </div>
  );
}

function ContentBlock({ block, flip }) {
  const { class: cls, heading, para, list, image } = block;

  if (cls === "image-para") {
    return <ImagePara heading={heading} para={para} image={image} flip={flip} />;
  }
  if (cls === "h-para") {
    return (
      <div>
        {heading && <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">{heading}</h2>}
        {para && <p className="mt-4 text-base leading-[1.85] text-ink-700">{para}</p>}
      </div>
    );
  }
  if (cls === "h-para sub-head") {
    return (
      <div>
        {heading && (
          <h3 className="flex items-center gap-3 text-xl font-semibold text-ink-900 sm:text-2xl">
            <span className="inline-block h-1.5 w-6 rounded-full bg-gold-500" />
            {heading}
          </h3>
        )}
        {para && <p className="mt-3 text-base leading-[1.85] text-ink-700">{para}</p>}
      </div>
    );
  }
  if (cls === "para") {
    return (
      <div>
        {heading && <h3 className="text-lg font-semibold text-ink-900">{heading}</h3>}
        <p className={`text-base leading-[1.85] text-ink-700 ${heading ? "mt-3" : ""}`}>{para}</p>
      </div>
    );
  }
  if (cls === "h-list" || cls === "h-list sub-list") {
    const isSub = cls === "h-list sub-list";
    return (
      <div>
        {heading && (
          isSub ? (
            <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">{heading}</h3>
          ) : (
            <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">{heading}</h2>
          )
        )}
        <ul className="mt-5 grid gap-3">
          {(list || []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg bg-cream-50 px-5 py-4 ring-1 ring-cream-300">
              <FaCheckCircle className="mt-0.5 shrink-0 text-brand-500" />
              <span className="text-sm leading-relaxed text-ink-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (cls === "simplelist") {
    return (
      <ul className="grid gap-3">
        {(list || []).map((item, i) => (
          <li key={i} className="flex items-start gap-3 rounded-lg bg-cream-50 px-5 py-4 ring-1 ring-cream-300">
            <FaCheckCircle className="mt-0.5 shrink-0 text-brand-500" />
            <span className="text-sm leading-relaxed text-ink-700">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

function buildToc(blocks) {
  const toc = [];
  for (const b of blocks) {
    const isMainHeading =
      b.heading && (b.class === "h-para" || b.class === "image-para" || b.class === "h-list");
    if (isMainHeading) toc.push({ id: slugify(b.heading), label: b.heading });
  }
  const seen = new Set();
  return toc.filter((t) => (seen.has(t.id) ? false : (seen.add(t.id), true)));
}

function NotFound({ id }) {
  return (
    <main className="container-x py-16 text-center sm:py-24">
      <p className="eyebrow justify-center">404</p>
      <h1 className="mt-5 text-3xl font-semibold text-ink-900 sm:text-4xl">
        We couldn&apos;t find that service.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-ink-600">
        The service <code className="rounded bg-cream-200 px-2 py-0.5 text-sm">{id}</code> isn&apos;t in our catalogue.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/services" className="btn btn-primary">Browse all services <FaArrowRight /></Link>
        <Link to="/enquiry" className="btn btn-ghost">Send an enquiry</Link>
      </div>
    </main>
  );
}

export default function ServicePage() {
  const { id } = useParams();
  const blocks = data[id];
  const meta = useMemo(() => SERVICES.find((s) => s.slug === id), [id]);
  const root = useRef(null);
  const [activeId, setActiveId] = useState(null);

  const toc = useMemo(() => (blocks ? buildToc(blocks) : []), [blocks]);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".sp-hero > *", {
        y: 18, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.1,
      });
      gsap.utils.toArray(".sp-block").forEach((el) => {
        gsap.fromTo(el, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [id]);

  useEffect(() => {
    if (!toc.length) return;
    const els = toc.map((t) => document.getElementById(t.id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [toc, id]);

  if (!blocks) return <NotFound id={id} />;

  const title = meta?.title || id;
  const subtitle = meta?.subtitle || "Consulting & Certification";
  const category = meta?.category;

  let imageParaCount = 0;

  return (
    <main ref={root}>
      {/* HERO */}
      <section className="container-x pt-10 pb-10 sm:pt-14">
        <div className="sp-hero">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 hover:text-ink-900"
          >
            <FaArrowLeft className="text-[10px]" /> All Services
          </Link>
          {category && <p className="mt-6 eyebrow">{category}</p>}
          <h1 className="mt-4 text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-ink-600">{subtitle}</p>
        </div>
      </section>

      <div className="hairline container-x" />

      {/* CONTENT */}
      <section className="container-x py-14">
        <div className={`grid gap-12 ${toc.length > 1 ? "lg:grid-cols-[240px_1fr] lg:gap-16" : ""}`}>
          {toc.length > 1 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                  <FaListUl /> On this page
                </p>
                <nav className="toc-scroll mt-5 max-h-[60vh] overflow-y-auto border-l border-cream-300 pl-4">
                  <ul className="space-y-2 text-sm">
                    {toc.map((t) => (
                      <li key={t.id}>
                        <a
                          href={`#${t.id}`}
                          className={`block border-l-2 -ml-[1.05rem] pl-3 py-1 transition ${
                            activeId === t.id
                              ? "border-brand-500 font-semibold text-ink-900"
                              : "border-transparent text-ink-500 hover:text-ink-900"
                          }`}
                        >
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          )}

          <article className="min-w-0 space-y-12">
            {blocks.map((b, i) => {
              const isMainHeading =
                b.heading && (b.class === "h-para" || b.class === "image-para" || b.class === "h-list");
              const blockId = isMainHeading ? slugify(b.heading) : undefined;
              const flip = b.class === "image-para" ? imageParaCount++ % 2 === 1 : false;
              return (
                <div key={i} id={blockId} className="sp-block scroll-mt-28">
                  <ContentBlock block={b} flip={flip} />
                </div>
              );
            })}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20">
        <div className="grid items-center gap-6 rounded-2xl bg-ink-900 px-8 py-10 text-cream-50 sm:px-12 sm:py-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Send an enquiry about {title}</h2>
            <p className="mt-2 text-cream-100/80">
              Tell us about your scope and we&apos;ll get back to you.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link to="/enquiry" className="btn btn-gold justify-center">Send Enquiry <FaArrowRight /></Link>
            <Link to="/contactus" className="btn btn-outline-light justify-center">Contact Details</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
