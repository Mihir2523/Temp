import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
  FaUserTie,
  FaCog,
  FaShieldAlt,
  FaIndustry,
  FaUsers,
  FaHandshake,
  FaBookOpen,
  FaClipboardCheck,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Industries listed in the original About paragraph.
const INDUSTRIES = [
  "Engineering", "Fabrications", "Machinery", "Pharmaceutical",
  "Packaging", "Food", "Automotive", "Textile",
  "Rubber", "Civil", "Laboratory",
];

// Customer audits faced — verbatim from the original About paragraph.
const AUDITS_FACED = [
  "Tata Motors Ltd", "Nestle", "CLW / DLW", "SPX Flow", "Rexroth",
  "Ingersoll Rand", "Senvion Wind Technology", "INOX Wind",
  "Siemens Limited", "Siemens Gamesha", "Sanmar Group",
  "NTPC", "BHEL", "Microfinish Valves", "Toshima India", "Delvol Flow Controls",
];

// Certification bodies named in the original Company Overview.
const PARTNERS = ["Bureau Veritas", "SGS", "TUV", "DNV", "BSCIC"];

// Why Us — original 6 items, titles only.
const WHY_US = [
  { icon: FaClipboardCheck, label: "Effective Service Range" },
  { icon: FaCog,            label: "Economical And Time Bound Deliverance" },
  { icon: FaHandshake,      label: "Client Centric Approach" },
  { icon: FaBookOpen,       label: "Efficient Training And Documentation" },
  { icon: FaUsers,          label: "Team Of Expert Quality Management Personnel" },
  { icon: FaShieldAlt,      label: "Domain Expertise" },
];

// Service-focus icon strip (just labels — not promises).
const FOCUS = [
  { icon: FaClipboardCheck, label: "ISO Consulting" },
  { icon: FaBookOpen,       label: "Auditor Training" },
  { icon: FaCog,            label: "Internal Auditing" },
  { icon: FaIndustry,       label: "Statistical Tools" },
];

export default function About() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ab-hero > *", {
        y: 18, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.05,
      });
      gsap.from(".ab-art", {
        scale: 0.98, opacity: 0, duration: 1, delay: 0.2,
      });
      gsap.from(".ab-focus > *", {
        y: 18, opacity: 0, duration: 0.7, stagger: 0.07, delay: 0.4,
      });
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray(".reveal-stagger").forEach((wrap) => {
        gsap.fromTo(wrap.children, { y: 22, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.05,
          scrollTrigger: { trigger: wrap, start: "top 88%", once: true },
        });
      });
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-cream-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 via-white to-cream-100" />
        <div className="container-x relative py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div className="ab-hero">
              <p className="eyebrow">About us</p>
              <h1 className="display mt-5 text-4xl text-ink-900 sm:text-5xl lg:text-6xl">
                Quality Consulting
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
                ISO certification consultancy in Gujarat, India. We assist
                organizations in implementing and maintaining international
                management-system standards.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/services" className="btn btn-primary">
                  See Services <FaArrowRight />
                </Link>
                <Link to="/enquiry" className="btn btn-ghost">
                  Send Enquiry
                </Link>
              </div>
            </div>

            <div className="ab-art relative">
              {/* Hero art — decorative card composition (no photo, no broken images) */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-8 text-white shadow-[var(--shadow-deep)] sm:p-10">
                {/* Decorative SVG grid */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="ab-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.6" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#ab-grid)" />
                </svg>
                {/* Decorative orbs */}
                <span className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                <span className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold-400/20 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
                      <FaCheckCircle className="text-xl text-white" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                        Established
                      </p>
                      <p className="text-base font-semibold text-white">09 May 2018</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                      Registered firm
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                      UDYAM<br />GJ-01-0359775
                    </p>
                    <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-brand-200">
                      Standards covered
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["ISO 9001", "ISO 14001", "ISO 45001", "ISO 22000", "IATF 16949", "ISO 17025", "BRC", "HACCP"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white ring-1 ring-white/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Founder badge — overlapping the card */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-white px-5 py-4 shadow-[var(--shadow-deep)] ring-1 ring-cream-300 sm:block">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink-900 text-white">
                    <FaUserTie className="text-sm" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                      Proprietor
                    </p>
                    <p className="text-sm font-semibold text-ink-900">Jaydev Parmar</p>
                    <p className="text-[11px] text-ink-500">MSc QPM &mdash; 2013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus strip */}
          <div className="ab-focus mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-cream-200 bg-white px-5 py-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon />
                </span>
                <span className="text-sm font-medium text-ink-900">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE — verbatim from original Company Overview */}
      <section className="bg-brand-500 text-white">
        <div className="container-x py-14 sm:py-16">
          <div className="reveal-up mx-auto max-w-4xl text-center">
            <FaQuoteLeft className="mx-auto text-2xl text-brand-200" />
            <p className="mt-5 text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
              Our clients successfully clear the ISO audit in the first attempt
              and achieve ISO certificate in first go.
              <span className="block mt-3 text-brand-200">100% successful certification guaranteed.</span>
            </p>
          </div>
        </div>
      </section>

      {/* LEAD PARAGRAPH with side accent image */}
      <section className="container-x py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14">
          <div className="reveal-up text-base leading-[1.85] text-ink-700">
            The Company is promoted by 12 years industrial experience related ISO Management system with an aim to provide effective and result oriented services of ISO 9001 &mdash; Quality management system, EN ISO 3834, EN ISO 1090-2, EN 15085, ISO 14001:2015, ISO 45001, ISO 27001, IATF 16949, ISO 22163, HACCP, ISO 22000, FSSC 22000, BRC for Food &amp; Packaging Material, Eco Vadis CSR Rating, SA 8000:2014, SMETA &mdash; SEDEX 6.1, ISO 17025 NABL, 5s Japanese techniques, 7 quality control tools &amp; other statistical tools &amp; techniques, IATF Core Tools etc.
            <br /><br />
            Quality Consulting firm is registered UDYAM &mdash; GJ-01-0359775, dated 09.05.2018. Mr. Jaydev Parmar is proprietor of Quality Consulting. He was highly experienced in quality management system as well as customer audit compliances. Mr. Jaydev Parmar has completed MSC. QPM (Master in Quality and Productivity Management) since 2013.
          </div>
          <aside className="reveal-up space-y-5">
            {/* Key-facts card */}
            <div className="rounded-xl bg-ink-900 p-6 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                At a glance
              </p>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-white/55">Founded</dt>
                  <dd className="mt-1 text-base font-semibold text-white">09 May 2018</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-white/55">UDYAM</dt>
                  <dd className="mt-1 text-base font-semibold text-white">GJ-01-0359775</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-white/55">Location</dt>
                  <dd className="mt-1 text-base font-semibold text-white">Ahmedabad, Gujarat</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-white/55">Proprietor</dt>
                  <dd className="mt-1 text-base font-semibold text-white">Jaydev Parmar</dd>
                </div>
              </dl>
            </div>

            {/* Founder card */}
            <div className="rounded-xl bg-cream-100 p-5 ring-1 ring-cream-200">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                Credentials
              </p>
              <p className="mt-2 flex items-center gap-3 text-ink-900">
                <FaUserTie className="text-brand-500" />
                <span className="font-semibold">Mr. Jaydev Parmar</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Bachelor of Commerce. MSC in Quality &amp; Productivity Management, 2013.
                Extensive customer-audit compliance experience.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* INDUSTRIES — original list as badge chips */}
      <section className="border-y border-cream-200 bg-white">
        <div className="container-x py-14">
          <div className="reveal-up grid items-end gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
            <div>
              <p className="eyebrow">Industries served</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
                Certified across sectors
              </h2>
            </div>
            <p className="text-sm text-ink-600">
              Quality Consulting is certified ISO Standard for various types of industries:
            </p>
          </div>
          <div className="reveal-stagger mt-8 flex flex-wrap gap-2">
            {INDUSTRIES.map((i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-cream-100 px-4 py-1.5 text-sm text-ink-800"
              >
                <FaCheckCircle className="text-brand-500 text-xs" />
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="container-x py-12 sm:py-16">
        <div className="reveal-up grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <p className="eyebrow">Our practice</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
              Company Overview
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-700">
            <p>
              Our ISO certification consultancy services play a pivotal role in making an organization the trusted one. Our assistance in quality certifications and relevant trainings towards international quality standards has always helped our clients in clearing the ISO audit and getting the subsequent NABL consultant and ISO certification consultancy services in the very first attempt. With our client centric approach, we have established cordial relations with several reputed and recognized clients across the country.
            </p>
            <p>
              Quality Consulting is engaged in providing quality &amp; productivity enhancement implementation training programs &amp; consultation services. We assist and facilitate the organizations in obtaining ISO 9001, ISO 14001, TS/IATF 16949, ISO 22000, AS 9100, OHSAS 18001/ISO 45001 and CE Marking in the most effective, economical, time bound and easy to implement manner.
            </p>
          </div>
        </div>

        {/* Certification body partners — names from original */}
        <div className="reveal-up mt-12 rounded-xl bg-cream-100 p-6 ring-1 ring-cream-200 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
            We work with the most reputed certification bodies
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
            {PARTNERS.map((p) => (
              <span key={p} className="text-lg font-semibold tracking-tight text-ink-700">
                {p}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-ink-500">
            &mdash; ensuring your certificate has proper National and International recognition.
          </p>
        </div>
      </section>

      {/* DOMAIN EXPERTISE — with 4-quadrant icon card instead of photo */}
      <section className="bg-cream-100">
        <div className="container-x py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div className="reveal-up grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-cream-300 ring-1 ring-cream-300">
              {[
                { Icon: FaClipboardCheck, label: "Quality Management Systems", sub: "ISO 9001 · ISO 14001 · ISO 45001" },
                { Icon: FaIndustry,       label: "Welding &amp; Railway",        sub: "ISO 3834 · EN 1090 · EN 15085" },
                { Icon: FaShieldAlt,      label: "Food &amp; Safety",            sub: "HACCP · ISO 22000 · FSSC · BRC" },
                { Icon: FaBookOpen,       label: "Training &amp; Audits",        sub: "Internal audits · Statistical tools" },
              ].map(({ Icon, label, sub }) => (
                <div key={label} className="bg-white p-6 sm:p-8">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500 text-white">
                    <Icon />
                  </span>
                  <p
                    className="mt-4 text-sm font-semibold text-ink-900"
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                  <p className="mt-1 text-[12px] leading-relaxed text-ink-500">{sub}</p>
                </div>
              ))}
            </div>
            <div className="reveal-up">
              <p className="eyebrow">Expertise</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
                Domain Expertise
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-700">
                Our proficient and sound understanding of various quality management systems has enabled us being recognized as one of the most trusted quality management consultancy providers. Certification ensures competitive advantages and secures future business by identifying areas for improvement. The quality training enables our clients in identifying and solving problems and preventing their recurrence, thereby improving performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT SATISFACTION */}
      <section className="container-x py-12 sm:py-16">
        <div className="reveal-up grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <p className="eyebrow">Clients</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
              Client Satisfaction
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-700">
            Our client centric approach and effective ISO certification consultant services offering ISO 9001, ISO 3834, EN 1090, EN 15085, PED &amp; AD 2000, NORSORK, ISO 14001, ISO 22000, ISO 27001, AS 9100C, IATF 16949, OHSAS 45001, SA 8000, GMP WHO, CE marking, NABL 17025 and IRIS certification have returned reviews from our clients across the country. We are known to assist our clients in identifying the areas where they could improve efficiency and effectiveness by minimizing wastage and rejection so that it could improve their marketability.
          </p>
        </div>
      </section>

      {/* CUSTOMER AUDITS — names verbatim from the original About paragraph */}
      <section className="border-y border-cream-200 bg-white">
        <div className="container-x py-14">
          <div className="reveal-up max-w-3xl">
            <p className="eyebrow">Customer audits faced</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
              Audit-room experience
            </h2>
            <p className="mt-3 text-sm text-ink-600">
              Mr. Jaydev Parmar has personally faced these customer audits and supplier-qualification visits.
            </p>
          </div>
          <div className="reveal-stagger mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-cream-200 ring-1 ring-cream-300 sm:grid-cols-3 lg:grid-cols-4">
            {AUDITS_FACED.map((c) => (
              <div key={c} className="bg-white px-4 py-5 text-center text-sm font-medium text-ink-800">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-x py-12 sm:py-16">
        <div className="reveal-up grid items-end gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <div>
            <p className="eyebrow">Why us</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
              Six reasons clients choose us
            </h2>
          </div>
          <p className="text-sm text-ink-600">
            The six attributes our clients consistently call out, as listed on the original site.
          </p>
        </div>
        <div className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-xl border border-cream-300 bg-white p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-500 text-white">
                <Icon className="text-sm" />
              </span>
              <span className="text-sm font-medium text-ink-900">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20">
        <div className="reveal-up grid items-center gap-6 rounded-2xl bg-ink-900 px-8 py-12 text-white sm:px-12 sm:py-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow-light">Get in touch</p>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-white/70">
              For ISO consulting, audit preparation or training enquiries.
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
    </main>
  );
}
