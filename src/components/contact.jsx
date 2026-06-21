import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaGlobe,
  FaBuilding,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowRight,
  FaWhatsapp as FaWA,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EMAILJS = {
  serviceId: "service_d38bmc6",
  templateId: "template_nbcdp86",
  publicKey: "UhA1kX6jZaw9PeVCN",
};

// Contact details — all verbatim from the original site.
const QUICK_CARDS = [
  { Icon: FaPhone, title: "Call us", lines: ["+91 9714820103", "+91 9904222841"], href: "tel:+919714820103" },
  { Icon: FaEnvelope, title: "Email us", lines: ["info@qualityconsulting.co.in", "qualityconsulting04@gmail.com"], href: "mailto:info@qualityconsulting.co.in" },
  { Icon: FaWA, title: "WhatsApp", lines: ["Chat with us", "+91 9714820103"], href: "https://wa.me/919714820103", external: true },
];

const DETAIL_BLOCKS = [
  {
    Icon: FaUser,
    title: "Contact Person",
    body: ["Jaydev Parmar"],
  },
  {
    Icon: FaMapMarkerAlt,
    title: "Address",
    body: ["B-205, Vrundavan Residency", "Besides Shraddha Pioneer", "Hathijan, Ahmedabad-382445", "Gujarat, India"],
  },
  {
    Icon: FaBuilding,
    title: "Corporate Office",
    body: ["B/H Khadayata Bhuvan", "Kapadvanj Road, Arban Nagar Society", "Dakor-388225, Gujarat"],
  },
  {
    Icon: FaGlobe,
    title: "Website",
    body: ["www.qualityconsulting.co.in"],
    href: "https://www.qualityconsulting.co.in",
    external: true,
  },
];

const SOCIAL = [
  { Icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919714820103" },
];

const FloatField = ({ label, error, children }) => (
  <div className={`float-field ${error ? "invalid" : ""}`}>
    {children}
    <label>{label}</label>
    {error && (
      <p className="error-text flex items-center gap-1.5">
        <FaExclamationTriangle className="text-[10px]" /> {error}
      </p>
    )}
  </div>
);

export default function Contact() {
  const root = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const {
    register, handleSubmit, reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    defaultValues: { uname: "", email: "", tel: "", message: "" },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text + quick-action cards live above the fold; animate on mount.
      gsap.from(".ct-head > *", {
        y: 18, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.05,
      });
      gsap.from(".ct-quick > *", {
        y: 18, opacity: 0, duration: 0.7, stagger: 0.08, delay: 0.4,
      });
      // Below-the-fold reveals use ScrollTrigger.
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray(".reveal-stagger").forEach((wrap) => {
        gsap.fromTo(wrap.children, { y: 22, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.06,
          scrollTrigger: { trigger: wrap, start: "top 88%", once: true },
        });
      });
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const onSubmit = async () => {
    if (!formRef.current) return;
    setStatus({ state: "sending" });
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, EMAILJS.publicKey);
      setStatus({ state: "ok" });
      reset();
    } catch {
      setStatus({
        state: "err",
        message: "Sorry, we couldn't send that. Please try again or email info@qualityconsulting.co.in.",
      });
    }
  };

  return (
    <main ref={root}>
      {/* HERO — clearly "contact us" feeling */}
      <section className="relative overflow-hidden border-b border-cream-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 via-white to-cream-100" />
        <div className="container-x relative py-14 sm:py-20">
          <div className="ct-head max-w-3xl">
            <p className="eyebrow">Get in touch</p>
            <h1 className="display mt-5 text-4xl text-ink-900 sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
              Need help? Reach out to us. We are always ready to answer your questions.
            </p>
          </div>

          {/* Three quick-action cards */}
          <div className="ct-quick mt-12 grid gap-4 sm:grid-cols-3">
            {QUICK_CARDS.map(({ Icon, title, lines, href, external }) => (
              <a
                key={title}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card group flex items-center gap-4 p-5 transition hover:ring-brand-500 hover:shadow-[var(--shadow-blue)]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-500 text-white">
                  <Icon className="text-lg" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                    {title}
                  </p>
                  {lines.map((l) => (
                    <p key={l} className="truncate text-sm font-medium text-ink-900">{l}</p>
                  ))}
                </div>
                <FaArrowRight className="ml-auto shrink-0 text-xs text-ink-300 transition group-hover:translate-x-1 group-hover:text-brand-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="container-x py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          {/* Form */}
          <div className="reveal-up card p-6 sm:p-10">
            <p className="eyebrow">Send a message</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
              We&apos;ll get back to you soon.
            </h2>
            <p className="mt-3 text-sm text-ink-600">
              Or use the <a href="/enquiry" className="font-semibold text-brand-600 hover:underline">full enquiry form</a> for a detailed brief.
            </p>

            {status.state === "ok" ? (
              <div className="mt-8 grid place-items-center rounded-xl bg-brand-50 px-6 py-12 text-center">
                <FaCheckCircle className="text-5xl text-brand-500" />
                <h3 className="mt-5 text-xl font-semibold text-ink-900">Message sent</h3>
                <p className="mt-2 text-sm text-ink-600">Email sent successfully. We&apos;ll be in touch.</p>
                <button
                  type="button"
                  onClick={() => setStatus({ state: "idle" })}
                  className="btn btn-primary mt-6"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 space-y-5">
                <FloatField label="Your Name *" error={errors.uname?.message}>
                  <input
                    type="text" placeholder=" " autoComplete="name"
                    {...register("uname", {
                      required: "Please enter your name",
                      minLength: { value: 2, message: "Name is too short" },
                    })}
                  />
                </FloatField>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatField label="Email *" error={errors.email?.message}>
                    <input
                      type="email" placeholder=" " autoComplete="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                  </FloatField>
                  <FloatField label="Phone" error={errors.tel?.message}>
                    <input type="tel" placeholder=" " autoComplete="tel" {...register("tel")} />
                  </FloatField>
                </div>
                <FloatField label="Message *" error={errors.message?.message}>
                  <textarea
                    placeholder=" " rows={5}
                    {...register("message", {
                      required: "Please add a short message",
                      minLength: { value: 5, message: "Please add a bit more detail" },
                    })}
                  />
                </FloatField>

                {status.state === "err" && (
                  <div className="flex items-start gap-3 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                    <FaExclamationTriangle className="mt-0.5 shrink-0" /> <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || status.state === "sending"}
                  className="btn btn-primary w-full justify-center sm:w-auto sm:min-w-[200px]"
                >
                  {status.state === "sending" || isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>Send Message <FaPaperPlane className="text-xs" /></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info column */}
          <aside className="reveal-up space-y-5">
            <div className="card p-6 sm:p-8">
              <p className="eyebrow">Office details</p>
              <ul className="reveal-stagger mt-5 space-y-5">
                {DETAIL_BLOCKS.map(({ Icon, title, body, href, external }) => (
                  <li key={title} className="flex items-start gap-4 border-b border-cream-200 pb-5 last:border-0 last:pb-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon className="text-sm" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                        {title}
                      </p>
                      <div className="mt-1 text-sm leading-relaxed text-ink-700">
                        {href ? (
                          body.map((l) => (
                            <p key={l}>
                              <a
                                href={href}
                                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="hover:text-brand-600"
                              >
                                {l}
                              </a>
                            </p>
                          ))
                        ) : (
                          body.map((l) => <p key={l}>{l}</p>)
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 sm:p-8">
              <p className="eyebrow">Connect with us</p>
              <div className="mt-5 flex gap-3">
                {SOCIAL.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-600 transition hover:bg-brand-500 hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MAP — full width */}
      <section className="border-t border-cream-200 bg-white">
        <div className="container-x py-12 sm:py-16">
          <div className="reveal-up max-w-2xl">
            <p className="eyebrow">Visit us</p>
            <h2 className="mt-5 text-2xl font-semibold text-ink-900 sm:text-3xl">
              Our office in Ahmedabad
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              B-205, Vrundavan Residency, Besides Shraddha Pioneer, Hathijan, Ahmedabad-382445, Gujarat, India.
            </p>
          </div>
          <div className="reveal-up map-frame mt-8 h-[420px] overflow-hidden rounded-xl ring-1 ring-cream-300">
            <iframe
              title="Quality Consulting office on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3486230084595!2d72.6726112724347!3d22.93738453333775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8997319bf835%3A0x30cb4a4a45e5eb11!2sVrundavan%20residency!5e0!3m2!1sen!2sin!4v1739388771116!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Vrundavan+Residency+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Get directions <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
