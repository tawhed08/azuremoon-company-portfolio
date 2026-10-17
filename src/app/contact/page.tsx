
"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "Website Design & Development",
  budget: "",
  message: "",
};

const projectTypes = [
  "Website Design & Development",
  "Brand Identity",
  "Creative Development & Animation",
  "Digital Product",
  "Something Else",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Let's discuss",
];

export default function ContactPage() {
  const root = useRef<HTMLElement>(null);
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactForm, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      // CONTACT_HERO: introduce the heading and contact details.
      gsap.from(".contact-hero-item", {
        y: 28,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // CONTACT_FORM: reveal the form when it enters the viewport.
      gsap.from(".contact-form-panel", {
        y: 30,
        autoAlpha: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form-panel",
          start: "top 85%",
          once: true,
        },
      });

      // CONTACT_ORBIT: gently rotate the decorative artwork.
      gsap.to(".contact-orbit", {
        rotation: 360,
        duration: 36,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    },
    { scope: root },
  );

  function updateField<K extends keyof ContactForm>(
    field: K,
    value: ContactForm[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));

    setErrors((current) => {
      if (!current[field]) return current;

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validateForm() {
    const nextErrors: Partial<Record<keyof ContactForm, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    } else if (form.name.trim().length < 2) {
      nextErrors.name = "Your name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject) {
      nextErrors.subject = "Please select a project type.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please tell us a little about your project.";
    } else if (form.message.trim().length < 10) {
      nextErrors.message = "Please enter at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    if (!validateForm()) {
      toast.error("Please check the highlighted fields.");
      return;
    }

    // DEMO MODE: no backend or email service is connected yet.
    // Keep the form local and do not claim that a message was delivered.
    setSubmitting(true);

    const messagePreview = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Project: ${form.subject}`,
      `Budget: ${form.budget || "Not specified"}`,
      "",
      form.message.trim(),
    ].join("\n");

    try {
      toast.success("Your form is valid!", {
        description:
          "Demo mode: copy your project details below to send them manually.",
        duration: 6000,
        action: {
          label: "Copy details",
          onClick: async () => {
            try {
              await navigator.clipboard.writeText(messagePreview);
              toast.success("Project details copied.");
            } catch {
              toast.error("Copy failed. Please copy your details manually.");
            }
          },
        },
      });

      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-none border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary";

  return (
    <main ref={root} className="min-h-screen overflow-hidden">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-10 -z-10 size-[400px] rounded-full opacity-40 blur-3xl sm:size-[620px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--primary) 24%, transparent), transparent 70%)",
          }}
        />

        <div className="container-shell pb-16 pt-20 sm:pb-24 sm:pt-32">
          <p className="contact-hero-item mb-8 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-muted sm:text-xs">
            <span className="size-2 rounded-full bg-success" />
            LET&apos;S START SOMETHING
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="contact-hero-item text-[clamp(4rem,12vw,11rem)] font-semibold leading-[0.84] tracking-[-0.09em]">
              Have an
              <span className="block text-gradient italic">idea?</span>
              <span className="block">Let&apos;s talk.</span>
            </h1>

            <div className="contact-hero-item relative pb-2 lg:pl-8">
              <div className="contact-orbit absolute -right-2 -top-24 hidden size-24 rounded-full border border-border sm:block">
                <span className="absolute left-1/2 top-[-4px] size-2 -translate-x-1/2 rounded-full bg-primary" />
                <span className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border" />
              </div>

              <p className="max-w-md text-base leading-8 text-muted sm:text-lg">
                Tell us what you&apos;re imagining. A big ambition, a fresh
                challenge, or just an idea you can&apos;t stop thinking about.
              </p>

              <a
                href="#contact-form"
                className="mt-7 inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary"
              >
                Start a conversation
                <ArrowDownRight size={18} />
              </a>
            </div>
          </div>

          <div className="contact-hero-item mt-16 grid gap-7 border-t border-border pt-7 sm:grid-cols-3">
            <div className="flex items-start gap-4">
              <Mail size={18} className="mt-1 text-primary" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="mt-2 text-xs leading-6 text-muted">
                  Add your official studio email before publishing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock3 size={18} className="mt-1 text-primary" />
              <div>
                <p className="text-sm font-medium">Availability</p>
                <p className="mt-2 text-xs leading-6 text-muted">
                  Project enquiries are welcome.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={18} className="mt-1 text-primary" />
              <div>
                <p className="text-sm font-medium">Working everywhere</p>
                <p className="mt-2 text-xs leading-6 text-muted">
                  Digital collaboration, wherever you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="section-padding scroll-mt-20"
      >
        <div className="container-shell">
          <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="contact-hero-item">
              <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-muted">
                YOUR PROJECT / 01
              </p>

              <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.07em] sm:text-5xl">
                Tell us the
                <span className="block text-gradient">interesting part.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                Share a little about your goals, what you want to create, and
                what success would look like for you.
              </p>

              <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex size-11 items-center justify-center rounded-full border border-border text-primary">
                  <Sparkles size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium">No idea is too early.</p>
                  <p className="mt-1 text-xs text-muted">
                    Start wherever you are.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form-panel border border-border bg-surface p-5 sm:p-9 lg:p-11">
              {submitted ? (
                <div className="py-10 sm:py-16">
                  <div className="flex size-14 items-center justify-center rounded-full border border-success/40 text-success">
                    <Check size={27} />
                  </div>

                  <p className="mt-8 text-[10px] tracking-[0.2em] text-muted">
                    FORM VALIDATION COMPLETE
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                    Looking good.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                    Your details passed validation, but they have not been
                    sent to AzureMoon because no backend or email service is
                    connected yet. Copy your details from the notification
                    and send them through your preferred email app.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setForm(initialForm);
                        setErrors({});
                        setSubmitted(false);
                      }}
                      className="rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-surface-hover"
                    >
                      Send another enquiry
                    </button>

                    <Link
                      href="/work"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
                    >
                      Explore our work
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-medium"
                      >
                        Your name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        placeholder="What should we call you?"
                        value={form.name}
                        onChange={(event) =>
                          updateField("name", event.target.value)
                        }
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "contact-name-error" : undefined
                        }
                        className={`${inputClass} ${
                          errors.name ? "border-error" : ""
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          className="mt-2 text-xs text-error"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-medium"
                      >
                        Email address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "contact-email-error" : undefined
                        }
                        className={`${inputClass} ${
                          errors.email ? "border-error" : ""
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          className="mt-2 text-xs text-error"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-subject"
                        className="text-xs font-medium"
                      >
                        What can we help with?{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={(event) =>
                          updateField("subject", event.target.value)
                        }
                        aria-invalid={Boolean(errors.subject)}
                        className={`${inputClass} ${
                          errors.subject ? "border-error" : ""
                        }`}
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="mt-2 text-xs text-error">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-budget"
                        className="text-xs font-medium"
                      >
                        Estimated project budget
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={form.budget}
                        onChange={(event) =>
                          updateField("budget", event.target.value)
                        }
                        className={inputClass}
                      >
                        <option value="">Choose a budget (optional)</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-message"
                        className="text-xs font-medium"
                      >
                        Tell us about your project{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        placeholder="The idea, the challenge, the dream... tell us everything."
                        value={form.message}
                        onChange={(event) =>
                          updateField("message", event.target.value)
                        }
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message
                            ? "contact-message-error"
                            : undefined
                        }
                        className={`${inputClass} resize-y ${
                          errors.message ? "border-error" : ""
                        }`}
                      />
                      {errors.message && (
                        <p
                          id="contact-message-error"
                          className="mt-2 text-xs text-error"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
                    <p className="max-w-xs text-xs leading-6 text-muted">
                      This form currently runs in demo mode. It does not send
                      or store your message on a server.
                    </p>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Checking..." : "Review enquiry"}
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 border-t border-border pt-7 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">
              Still exploring? Take a look at what we create.
            </p>

            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              Discover our work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
