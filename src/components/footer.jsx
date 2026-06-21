import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Enquiry", to: "/enquiry" },
  { label: "Contact Us", to: "/contactus" },
  { label: "About Us", to: "/aboutus" },
];

const SOCIAL = [
  { Icon: FaFacebook,  label: "Facebook",  href: "https://facebook.com" },
  { Icon: FaLinkedin,  label: "LinkedIn",  href: "https://linkedin.com" },
  { Icon: FaWhatsapp,  label: "WhatsApp",  href: "https://wa.me/919714820103" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-ink-900 text-cream-200">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-500 text-white shadow-[var(--shadow-blue)]">
                <FaCheckCircle />
              </span>
              <div>
                <p className="text-base font-semibold text-white">Quality Consulting</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-cream-200/65">
                  ISO Certification Consultant
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/70">
              ISO consulting and certification services across India.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-cream-200/75 ring-1 ring-white/10 transition hover:bg-brand-500 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              Pages
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm">
              {FOOTER_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-cream-200/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              Reach us
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-brand-300" />
                <span className="text-cream-200/75">
                  B-205, Vrundavan Residency, Hathijan,<br />
                  Ahmedabad-382445, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="shrink-0 text-brand-300" />
                <a href="tel:+919714820103" className="text-cream-200/75 hover:text-white">
                  +91 9714820103
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-brand-300" />
                <a href="mailto:info@qualityconsulting.co.in" className="break-all text-cream-200/75 hover:text-white">
                  info@qualityconsulting.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-[12px] text-cream-200/55 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Quality Consulting. All Rights Reserved.</p>
          <p>Reach on Social Media</p>
        </div>
      </div>
    </footer>
  );
}
