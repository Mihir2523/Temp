import { useEffect, useRef, useState } from "react";
import { Outlet, NavLink, useLocation, Link } from "react-router-dom";
import {
  FaHome,
  FaImages,
  FaServicestack,
  FaEnvelope,
  FaPhone,
  FaInfoCircle,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTimes,
  FaBars,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import gsap from "gsap";
import Footer from "./footer.jsx";

const NAV_ITEMS = [
  { to: "/",         label: "Home",     icon: FaHome,         end: true },
  { to: "/services", label: "Services", icon: FaServicestack },
  { to: "/gallery",  label: "Gallery",  icon: FaImages },
  { to: "/aboutus",  label: "About",    icon: FaInfoCircle },
  { to: "/contactus",label: "Contact",  icon: FaPhone },
];

function Logo({ stacked = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-lg bg-brand-500 text-white shadow-[var(--shadow-blue)]">
        <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <FaCheckCircle className="relative text-lg text-white" />
      </span>
      <div className={`flex flex-col leading-tight ${stacked ? "" : "hidden sm:flex"}`}>
        <span className="text-base font-semibold text-ink-900">Quality Consulting</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
          ISO Certification Consultant
        </span>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden bg-brand-700 text-brand-100 lg:block">
      <div className="container-x flex h-9 items-center justify-between text-[12px]">
        <div className="flex items-center gap-6">
          <a href="tel:+919714820103" className="flex items-center gap-2 hover:text-white">
            <FaPhone className="text-[10px] text-brand-300" />
            +91 9714820103
          </a>
          <a href="mailto:info@qualityconsulting.co.in" className="flex items-center gap-2 hover:text-white">
            <FaEnvelope className="text-[10px] text-brand-300" />
            info@qualityconsulting.co.in
          </a>
          <span className="flex items-center gap-2 text-brand-200">
            <FaMapMarkerAlt className="text-[10px] text-brand-300" />
            Ahmedabad, Gujarat &mdash; India
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-brand-200">Follow:</span>
          {[
            { href: "https://facebook.com", Icon: FaFacebook, label: "Facebook" },
            { href: "https://linkedin.com", Icon: FaLinkedin, label: "LinkedIn" },
            { href: "https://wa.me/919714820103", Icon: FaWhatsapp, label: "WhatsApp" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-brand-200 transition hover:text-white"
            >
              <Icon className="text-xs" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { y: -16, opacity: 0, duration: 0.6, delay: 0.1 });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-40">
      <TopBar />
      <div className={`transition-shadow duration-300 ${scrolled ? "bg-white shadow-[0_1px_0_rgba(15,23,42,0.06),0_10px_30px_-15px_rgba(15,23,42,0.10)]" : "bg-white/95 backdrop-blur"}`}>
        <div className="container-x flex h-[72px] items-center justify-between gap-6 lg:h-[80px]">
          <NavLink to="/" aria-label="Quality Consulting home">
            <Logo />
          </NavLink>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/enquiry" className="btn btn-primary">
              <FaEnvelope className="text-xs" /> Send Enquiry
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-cream-300 text-ink-700 hover:border-brand-500 hover:text-brand-600 lg:hidden"
          >
            <FaBars className="text-sm" />
          </button>
        </div>
      </div>
      </header>

      {/* Mobile drawer — sibling of <header> (NOT inside) so the GSAP
          transform applied to <header> doesn't establish a containing
          block for the drawer's fixed positioning. */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[55] bg-ink-900/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-hidden={!isOpen}
        aria-label="Mobile menu"
        className={`drawer fixed inset-y-0 right-0 z-[60] flex w-full flex-col bg-white shadow-2xl transition-transform duration-500 sm:w-[88%] sm:max-w-sm lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-cream-200 px-5 py-4">
          <Logo stacked />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-cream-100"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile primary navigation">
          {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive ? "bg-brand-50 text-brand-600" : "text-ink-700 hover:bg-cream-100"
                }`
              }
            >
              <Icon className="text-brand-500" />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-cream-200 p-5 space-y-3">
          <Link
            to="/enquiry"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary w-full"
          >
            <FaEnvelope /> Send Enquiry
          </Link>
          <a
            href="tel:+919714820103"
            className="flex items-center justify-center gap-2 text-sm text-ink-700"
          >
            <FaPhone className="text-brand-500" />
            +91 9714820103
          </a>
          <div className="flex justify-center gap-3 pt-2">
            {[
              { href: "https://facebook.com", Icon: FaFacebook, label: "Facebook" },
              { href: "https://linkedin.com", Icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://wa.me/919714820103", Icon: FaWhatsapp, label: "WhatsApp" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-cream-100 text-ink-700 hover:bg-brand-500 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default function Header() {
  return (
    <>
      <Nav />
      {/* Padding: 72px nav + 36px topbar (lg only). Mobile only needs 72px. */}
      <div className="relative z-10 pt-[72px] lg:pt-[116px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
