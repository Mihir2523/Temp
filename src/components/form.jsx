import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import gsap from "gsap";

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina",
  "Australia", "Austria", "Bangladesh", "Belgium", "Brazil", "Canada",
  "China", "Denmark", "Egypt", "Finland", "France", "Germany", "Greece",
  "India", "Indonesia", "Iran", "Ireland", "Italy", "Japan", "Mexico",
  "Netherlands", "New Zealand", "Norway", "Pakistan", "Poland", "Portugal",
  "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea",
  "Spain", "Sweden", "Switzerland", "Turkey", "United Arab Emirates",
  "United Kingdom", "United States",
];

const EMAILJS = {
  serviceId: "service_d38bmc6",
  templateId: "template_nbcdp86",
  publicKey: "UhA1kX6jZaw9PeVCN",
};

const FloatField = ({ label, error, children }) => (
  <div className={`float-field ${error ? "invalid" : ""}`}>
    {children}
    <label>{label}</label>
    {error && (
      <p className="error-text flex items-center gap-1.5">
        <FaExclamationTriangle className="text-[10px]" />
        {error}
      </p>
    )}
  </div>
);

export default function Form() {
  const root = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const {
    register, handleSubmit, reset, watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      uname: "", cname: "", email: "", tel: "", city: "", zip: "",
      country: "", address: "", message: "",
    },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fm-head > *", {
        y: 18, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.05,
      });
      gsap.from(".fm-card", {
        y: 24, opacity: 0, duration: 0.7, delay: 0.15,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const onSubmit = async () => {
    if (!formRef.current) return;
    setStatus({ state: "sending", message: "" });
    try {
      await emailjs.sendForm(
        EMAILJS.serviceId, EMAILJS.templateId, formRef.current, EMAILJS.publicKey
      );
      setStatus({ state: "ok", message: "" });
      reset();
    } catch {
      setStatus({
        state: "err",
        message: "Sorry, we couldn't send that. Please try again or email info@qualityconsulting.co.in.",
      });
    }
  };

  const watchedCountry = watch("country");

  return (
    <main ref={root}>
      <section className="container-x pt-12 pb-10 sm:pt-16">
        <div className="fm-head max-w-3xl">
          <p className="eyebrow">Enquiry</p>
          <h1 className="mt-5 text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
            Send an enquiry
          </h1>
          <p className="mt-5 text-base text-ink-600">
            Fill in the form and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="fm-card mx-auto max-w-3xl rounded-2xl bg-cream-50 p-6 ring-1 ring-cream-300 sm:p-10">
          {status.state === "ok" ? (
            <div className="grid place-items-center px-6 py-12 text-center">
              <FaCheckCircle className="text-5xl text-brand-500" />
              <h2 className="mt-5 text-2xl font-semibold text-ink-900">
                Enquiry received
              </h2>
              <p className="mt-3 text-sm text-ink-600">Email sent successfully.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to="/services" className="btn btn-ghost">Browse services</Link>
                <button
                  type="button"
                  onClick={() => setStatus({ state: "idle", message: "" })}
                  className="btn btn-primary"
                >
                  Send another
                </button>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FloatField label="Your Name *" error={errors.uname?.message}>
                  <input
                    type="text" placeholder=" " autoComplete="name"
                    {...register("uname", {
                      required: "Please enter your name",
                      minLength: { value: 2, message: "Name is too short" },
                    })}
                  />
                </FloatField>
                <FloatField label="Company Name" error={errors.cname?.message}>
                  <input type="text" placeholder=" " autoComplete="organization" {...register("cname")} />
                </FloatField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FloatField label="Your Email *" error={errors.email?.message}>
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
                <FloatField label="City" error={errors.city?.message}>
                  <input type="text" placeholder=" " autoComplete="address-level2" {...register("city")} />
                </FloatField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FloatField label="Postal Code" error={errors.zip?.message}>
                  <input type="text" placeholder=" " autoComplete="postal-code" {...register("zip")} />
                </FloatField>
                <FloatField label="Telephone No" error={errors.tel?.message}>
                  <input type="tel" placeholder=" " autoComplete="tel" {...register("tel")} />
                </FloatField>
              </div>

              <FloatField label="Country" error={errors.country?.message}>
                <select className={watchedCountry ? "has-value" : ""} {...register("country")}>
                  <option value="">Select Country</option>
                  {COUNTRIES.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </FloatField>

              <FloatField label="Address" error={errors.address?.message}>
                <textarea placeholder=" " rows={3} {...register("address")} />
              </FloatField>

              <FloatField label="Subject of Enquiry" error={errors.message?.message}>
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
                  <FaExclamationTriangle className="mt-0.5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || status.state === "sending"}
                  className="btn btn-primary sm:min-w-[200px] justify-center"
                >
                  {isSubmitting || status.state === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>Submit <FaPaperPlane /></>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
