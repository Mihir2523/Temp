import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCertificate,
  FaLeaf,
  FaShieldAlt,
  FaIndustry,
  FaWrench,
  FaTrain,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPhone,
} from "react-icons/fa";
import gsap from "gsap";

import first from "../assets/main/first.jpg";
import second from "../assets/main/second.jpg";

const SLIDER_MODULES = import.meta.glob("../assets/slider/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});
const SLIDER_LOGOS = Object.entries(SLIDER_MODULES)
  .filter(([path]) => !/Copy/i.test(path))
  .sort(([a], [b]) => {
    const na = parseInt(a.split("/").pop().split("_")[0], 10);
    const nb = parseInt(b.split("/").pop().split("_")[0], 10);
    return na - nb;
  })
  .map(([, src]) => src);

const CLIENT_MODULES = import.meta.glob("../assets/client/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});
const INDUSTRIES = [
  { key: "agro-based-industry", label: "Agro-based Industry" },
  { key: "hospitals", label: "Hospitals" },
  { key: "automobile-Industry", label: "Automobile Industry" },
  { key: "pharmaceuticals-industry", label: "Pharmaceuticals Industry" },
  { key: "chemical-industry", label: "Chemical Industry" },
  { key: "transportation-logistics", label: "Transportation & Logistics" },
  { key: "food-processing-beverages", label: "Food Processing & Beverages" },
].map((c) => ({
  ...c,
  src:
    CLIENT_MODULES[`../assets/client/${c.key}.jpg`] ||
    CLIENT_MODULES[`../assets/client/${c.key}.png`],
}));

// Exact original 6 service cards
const HOME_SERVICES = [
  { icon: FaWrench,       title: "ISO 3834",                       desc: "Welding Workshop Approval for Quality Requirements of Fusion welding in metallic materials." },
  { icon: FaIndustry,     title: "EN 1090",                        desc: "CE Mark Steel Structure Part of Steel structure in metallic materials." },
  { icon: FaTrain,        title: "EN 15085",                       desc: "Manufacturing of Railway Vehicles or of components of Railway Vehicles." },
  { icon: FaCertificate,  title: "Quality Management",             desc: "Achieve excellence in quality management with our ISO 9001 certification services." },
  { icon: FaLeaf,         title: "Environmental Management",       desc: "Enhance your environmental management practices with our ISO 14001 certification." },
  { icon: FaShieldAlt,    title: "Occupational Health and Safety", desc: "Ensure occupational health and safety with our ISO 45001 certification services." },
];

const HERO_IMAGES = [first, second];

function HeroImage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-2xl sm:h-[500px] lg:h-[560px]">
      {HERO_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Quality Consulting"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/80 via-ink-900/40 to-ink-900/10" />
      <div className="absolute bottom-8 left-8 max-w-md sm:bottom-12 sm:left-12">
        <h2 className="!text-white text-3xl font-semibold leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
          ISO Consulting,<br />Business Planning
        </h2>
      </div>
    </div>
  );
}

function IndustriesCarousel() {
  const [idx, setIdx] = useState(0);
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth;
      if (w >= 1200) setPerPage(3);
      else if (w >= 768) setPerPage(2);
      else setPerPage(1);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  const total = INDUSTRIES.length;
  const maxIdx = Math.max(0, total - perPage);
  useEffect(() => { if (idx > maxIdx) setIdx(maxIdx); }, [perPage, idx, maxIdx]);

  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl lg:text-4xl">
            Types of Clients Catered
          </h2>
          <p className="mt-3 text-base text-ink-600">
            Hire experienced ISO Certification Consultant in Gujarat for quick assistance with the ISO certification process.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-300 text-ink-700 transition hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            onClick={() => setIdx((i) => Math.min(maxIdx, i + 1))}
            disabled={idx >= maxIdx}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-300 text-ink-700 transition hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>
      <div className="mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(idx * 100) / perPage}%)` }}
        >
          {INDUSTRIES.map((c) => (
            <div key={c.key} className="shrink-0 px-3" style={{ width: `${100 / perPage}%` }}>
              <div className="overflow-hidden rounded-xl bg-cream-50 ring-1 ring-cream-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.src}
                    alt={c.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink-900">{c.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Main() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text > *", {
        y: 18, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.1,
      });
      gsap.from(".hero-art", {
        opacity: 0, scale: 0.98, duration: 1, delay: 0.2,
      });
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray(".reveal-stagger").forEach((wrap) => {
        gsap.fromTo(wrap.children, { y: 24, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.06,
          scrollTrigger: { trigger: wrap, start: "top 85%", once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const marqueeLogos = useMemo(() => [...SLIDER_LOGOS, ...SLIDER_LOGOS], []);

  return (
    <main ref={root}>
      {/* HERO */}
      <section className="container-x pt-10 pb-16 sm:pt-14 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="hero-text">
            <p className="eyebrow">Quality Consulting</p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl lg:text-5xl">
              ISO Consultant in Gujarat, ISO Certification in Gujarat, ISO Certification Consultant in Gujarat
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600">
              The Company is promoted by 10 years industrial experience related to ISO Management systems with an aim to provide effective and result-oriented services across ISO 9001, EN ISO 3834-2, EN ISO 1090-2, ISO 14001, ISO 45001, ISO 27001, IATF 16949, ISO 22163, HACCP, ISO 22000, FSSC 22000, BRC, Eco Vadis, SA 8000, SMETA, ISO 17025 NABL and various statistical tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/enquiry" className="btn btn-primary">
                Send Enquiry <FaArrowRight />
              </Link>
              <Link to="/services" className="btn btn-ghost">
                View Services
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      {marqueeLogos.length > 0 && (
        <section className="bg-cream-50 py-12 ring-1 ring-cream-300">
          <div className="marquee">
            <div className="marquee-track">
              {marqueeLogos.map((src, i) => (
                <div key={i} className="flex h-20 w-40 shrink-0 items-center justify-center sm:h-24 sm:w-48">
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="max-h-full max-w-full object-contain opacity-70 transition hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INTRO TEXT */}
      <section className="container-x py-14 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="reveal-up">
            <p className="eyebrow">About</p>
            <h2 className="mt-5 text-3xl font-semibold text-ink-900 sm:text-4xl">
              Quality Consulting
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-700">
            <p className="reveal-up">
              Quality Consulting is certified for various industries including Engineering, Fabrication, Machinery, Pharmaceutical, Packaging, Food, Automotive, Textile, Rubber, and Civil. Quality Consulting firm is registered under MSME Udyog Adhar number GJ01D0105671 since 09.05.2018.
            </p>
            <p className="reveal-up">
              Mr. Jaydev Parmar is the proprietor with extensive experience in quality management systems and customer audit compliance. He holds a Bachelor of Commerce degree and an MSC in Quality and Productivity Management since 2013.
            </p>
            <p className="reveal-up">
              Our team of experts is equipped with the latest knowledge and skills to tackle any challenge in the industry.
            </p>
            <div className="reveal-up pt-3">
              <Link to="/aboutus" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink-900 hover:text-brand-500">
                Read more about us <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — exact 6 from original */}
      <section className="container-x pb-14 sm:pb-20 lg:pb-24">
        <div className="reveal-up text-center">
          <p className="eyebrow justify-center">Our Work</p>
          <h2 className="mt-5 text-3xl font-semibold text-ink-900 sm:text-4xl">
            Services &mdash; ISO Consultant and Certification in Gujarat
          </h2>
        </div>
        <div className="reveal-stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-4 rounded-xl bg-cream-50 p-7 ring-1 ring-cream-300 transition hover:ring-brand-500"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-500/10 text-brand-500">
                <s.icon className="text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-ink-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal-up mt-10 text-center">
          <Link to="/services" className="btn btn-ghost">
            View All Services <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-x reveal-up pb-14 sm:pb-20 lg:pb-24">
        <IndustriesCarousel />
      </section>

      {/* CONTACT CTA */}
      <section className="container-x pb-24">
        <div className="reveal-up grid items-center gap-8 rounded-2xl bg-ink-900 px-8 py-12 text-cream-50 sm:px-12 sm:py-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow-light">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              +91 9714820103
            </h2>
            <p className="mt-3 text-base text-cream-100/80">
              Contact Us Today &mdash; We Answer Our Phones
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link to="/contactus" className="btn btn-gold justify-center">
              Contact Us <FaArrowRight />
            </Link>
            <a href="tel:+919714820103" className="btn btn-outline-light justify-center">
              <FaPhone className="text-xs" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
