
"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Aperture,
  Blocks,
  Code2,
  Layers3,
  MoveUpRight,
  Palette,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Digital Experiences",
    description:
      "Websites that do more than look good. We create immersive digital experiences designed to capture attention and turn curiosity into action.",
    items: ["Website design", "Creative development", "Interactive experiences"],
    icon: Aperture,
    color: "#8ba8ff",
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that express who you are, what you believe in, and why people should remember you.",
    items: ["Visual identity", "Brand strategy", "Art direction"],
    icon: Palette,
    color: "#ffb18b",
  },
  {
    number: "03",
    title: "Creative Development",
    description:
      "We bring ambitious ideas to life through thoughtful engineering, refined interactions, and purposeful motion.",
    items: ["Frontend development", "GSAP animation", "Creative coding"],
    icon: Code2,
    color: "#86e4cb",
  },
  {
    number: "04",
    title: "Digital Products",
    description:
      "Useful, intuitive digital products built around real needs, clear thinking, and experiences people enjoy using.",
    items: ["Product design", "UI/UX design", "Design systems"],
    icon: Blocks,
    color: "#d3a7ff",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We ask questions, understand your goals, and find the opportunity that makes your project different.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We shape the strategy, visual direction, and experience before moving into execution.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Design and technology come together through focused collaboration, iteration, and attention to detail.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We refine the final experience, check the details, and prepare the work for its next chapter.",
  },
];

export default function ServicesPage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      // SERVICES_HERO: reveal the main heading and supporting copy.
      gsap.from(".services-hero-item", {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.13,
        ease: "power3.out",
      });

      // SERVICE_CARDS: reveal each service when it enters the viewport.
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 38, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      // PROCESS_REVEAL: animate the project workflow in sequence.
      gsap.from(".process-step", {
        y: 25,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 82%",
          once: true,
        },
      });

      // STUDIO_ORBIT: slowly rotate the decorative orbit.
      gsap.to(".services-orbit", {
        rotation: 360,
        duration: 32,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    },
    { scope: root },
  );

  return (
    <main ref={root} className="min-h-screen overflow-hidden">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 -z-10 size-[420px] rounded-full opacity-40 blur-3xl sm:size-[600px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--primary) 24%, transparent), transparent 70%)",
          }}
        />

        <div className="container-shell pb-20 pt-20 sm:pb-28 sm:pt-32">
          <p className="services-hero-item mb-8 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-muted sm:text-xs">
            <span className="size-2 rounded-full bg-success" />
            WHAT WE BRING TO THE TABLE
          </p>

          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <h1 className="services-hero-item text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.85] tracking-[-0.09em]">
              Ideas into
              <span className="block text-gradient italic">impact.</span>
            </h1>

            <div className="services-hero-item relative pb-2 lg:pl-8">
              <div className="services-orbit absolute -right-1 -top-24 hidden size-24 rounded-full border border-border sm:block">
                <span className="absolute left-1/2 top-[-4px] size-2 -translate-x-1/2 rounded-full bg-primary" />
                <span className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border" />
              </div>

              <p className="max-w-lg text-base leading-8 text-muted sm:text-lg">
                Strategy, design and technology working together to create
                digital experiences that make a lasting impression.
              </p>

              <a
                href="#services-list"
                className="mt-7 inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary"
              >
                Explore our services
                <ArrowDownRight size={18} />
              </a>
            </div>
          </div>

          <div className="services-hero-item mt-20 grid grid-cols-2 gap-5 border-t border-border pt-6 sm:grid-cols-4">
            {[
              ["01", "Strategy first"],
              ["02", "Design led"],
              ["03", "Technology driven"],
              ["04", "Detail obsessed"],
            ].map(([number, label]) => (
              <div key={number}>
                <span className="text-[10px] tracking-[0.18em] text-primary">
                  / {number}
                </span>
                <p className="mt-2 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services-list" className="section-padding scroll-mt-20">
        <div className="container-shell">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-muted">
                OUR CAPABILITIES / 01—04
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.07em] sm:text-6xl">
                What we <span className="text-gradient">do.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-muted">
              A considered mix of creative thinking and technical execution,
              tailored to the challenges of your next big idea.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="service-card group relative overflow-hidden border border-border bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover sm:p-9"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundColor: service.color }}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="text-xs tracking-[0.18em] text-muted">
                      / {service.number}
                    </span>

                    <div
                      className="flex size-12 items-center justify-center rounded-full border border-border transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                      style={{ color: service.color }}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="relative mt-12 text-2xl font-semibold tracking-[-0.055em] sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="relative mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
                    {service.description}
                  </p>

                  <div className="relative mt-7 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-2 text-[11px] text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-9 flex items-center justify-between border-t border-border pt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                      Discuss a project
                      <MoveUpRight size={16} />
                    </Link>

                    <ArrowUpRight
                      size={19}
                      className="text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-shell section-padding">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-muted">
                HOW WE WORK
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.07em] sm:text-6xl">
                Good work
                <span className="block text-gradient">is no accident.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                Every successful outcome starts with clear thinking and grows
                through a process built around collaboration and craft.
              </p>

              <div className="mt-9 flex size-16 items-center justify-center rounded-full border border-border text-primary">
                <Layers3 size={28} strokeWidth={1.4} />
              </div>
            </div>

            <div className="process-grid">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="process-step grid gap-4 border-t border-border py-6 sm:grid-cols-[70px_1fr] sm:gap-6"
                >
                  <span className="text-xs tracking-[0.15em] text-primary">
                    / {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.04em]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <div className="relative isolate overflow-hidden border border-border px-6 py-14 sm:px-12 sm:py-20 lg:px-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 -z-10 size-80 rounded-full opacity-30 blur-3xl sm:size-[500px]"
              style={{
                background:
                  "radial-gradient(circle, var(--primary), transparent 70%)",
              }}
            />

            <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-muted">
              <Sparkles size={15} className="text-primary" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <div className="mt-8 flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                Have a big idea?
                <span className="block text-gradient">Let&apos;s build it.</span>
              </h2>

              <Link
                href="/contact"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
              >
                Start a project
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
