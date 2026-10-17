
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
  Compass,
  Layers3,
  MoveUpRight,
  Sparkles,
  Target,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "Purpose over noise.",
    description:
      "Every element needs a reason to exist. We focus on clarity, intention, and ideas that communicate something meaningful.",
    icon: Target,
  },
  {
    number: "02",
    title: "Curiosity drives craft.",
    description:
      "We explore possibilities, challenge familiar patterns, and keep learning so each project can become something distinctive.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Details make the difference.",
    description:
      "From the first impression to the smallest interaction, thoughtful details make digital experiences feel considered and complete.",
    icon: Layers3,
  },
];

const capabilities = [
  "Creative direction",
  "Digital experiences",
  "Brand identity",
  "Frontend engineering",
  "Motion & interaction",
  "Product design",
];

export default function AboutPage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      // ABOUT_HERO: introduce the headline and supporting text.
      gsap.from(".about-hero-item", {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.13,
        ease: "power3.out",
      });

      // ABOUT_REVEAL: animate sections as they enter the viewport.
      gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 32, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      // MOON_ROTATION: slowly rotate the decorative studio artwork.
      gsap.to(".about-moon-orbit", {
        rotation: 360,
        duration: 38,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      // CAPABILITY_REVEAL: stagger the capability labels.
      gsap.from(".about-capability", {
        y: 18,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-capabilities",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <main ref={root} className="min-h-screen overflow-hidden">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-0 -z-10 size-[420px] rounded-full opacity-40 blur-3xl sm:size-[650px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--primary) 24%, transparent), transparent 70%)",
          }}
        />

        <div className="container-shell pb-20 pt-20 sm:pb-28 sm:pt-32">
          <p className="about-hero-item mb-8 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-muted sm:text-xs">
            <span className="size-2 rounded-full bg-success" />
            A LITTLE ABOUT US
          </p>

          <h1 className="about-hero-item max-w-6xl text-[clamp(3.7rem,11vw,10rem)] font-semibold leading-[0.86] tracking-[-0.09em]">
            We believe in
            <span className="block text-gradient italic">the power of</span>
            <span className="block">a good idea.</span>
          </h1>

          <div className="about-hero-item mt-12 grid gap-8 border-t border-border pt-7 sm:mt-16 sm:grid-cols-2 sm:items-end">
            <p className="max-w-xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              AzureMoon is a creative digital studio exploring the space where
              thoughtful design, technology, and imagination meet.
            </p>

            <div className="sm:justify-self-end">
              <a
                href="#our-story"
                className="inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary"
              >
                Get to know our approach
                <ArrowDownRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="our-story" className="section-padding scroll-mt-20">
        <div className="container-shell">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="about-reveal relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center overflow-hidden border border-border">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 45%, color-mix(in srgb, var(--primary) 25%, var(--background)) 0%, var(--background) 70%)",
                }}
              />

              <div className="about-moon-orbit absolute aspect-square w-[76%] rounded-full border border-border">
                <span className="absolute left-[14%] top-[18%] size-3 rounded-full bg-cyan shadow-[0_0_24px_var(--cyan)]" />
                <span className="absolute bottom-[12%] right-[18%] size-2 rounded-full bg-primary" />
              </div>

              <div className="absolute aspect-square w-[56%] rounded-full border border-dashed border-border" />

              <div
                className="relative aspect-square w-[37%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, #ffffff, #9bb7ff 13%, #536cc3 38%, #222a59 67%, #101427 85%)",
                  boxShadow:
                    "0 0 65px color-mix(in srgb, var(--primary) 30%, transparent), inset -18px -18px 38px #05081688",
                }}
              />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-border pt-4 sm:bottom-7 sm:left-7 sm:right-7">
                <span className="text-[9px] tracking-[0.18em] text-muted">
                  CREATIVITY / TECHNOLOGY
                </span>
                <Aperture size={17} className="text-primary" />
              </div>
            </div>

            <div className="about-reveal">
              <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-muted">
                OUR STORY / 01
              </p>

              <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.07em] sm:text-6xl">
                Good design
                <span className="block text-gradient">starts with</span>
                good thinking.
              </h2>

              <div className="mt-8 max-w-xl space-y-5 text-sm leading-8 text-muted sm:text-base">
                <p>
                  We see the digital world as more than screens, interfaces,
                  and technology. It is an opportunity to tell stories, express
                  ideas, and build meaningful connections.
                </p>

                <p>
                  Our approach brings strategy, visual craft, and development
                  together from the beginning. Instead of adding design at the
                  end, we make it part of the thinking that shapes the entire
                  experience.
                </p>

                <p>
                  The goal is simple: create work that feels intentional,
                  functions beautifully, and leaves a memorable impression.
                </p>
              </div>

              <Link
                href="/work"
                className="group mt-9 inline-flex items-center gap-3 border-b border-border pb-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                Explore selected work
                <MoveUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-shell section-padding">
          <div className="about-reveal mb-12 max-w-3xl">
            <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-muted">
              WHAT GUIDES US / 02
            </p>

            <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.07em] sm:text-6xl">
              A few things
              <span className="text-gradient"> we believe.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              These principles shape how we approach creative challenges,
              evaluate decisions, and build every experience.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className="about-reveal group border border-border p-6 transition-colors duration-300 hover:bg-surface-hover sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.15em] text-primary">
                      / {principle.number}
                    </span>

                    <Icon
                      size={23}
                      strokeWidth={1.4}
                      className="text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:text-primary"
                    />
                  </div>

                  <h3 className="mt-12 text-2xl font-medium tracking-[-0.05em]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="about-reveal">
              <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-muted">
                WHAT WE BRING / 03
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.07em] sm:text-6xl">
                Different skills.
                <span className="block text-gradient">One direction.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base">
                A connected approach to building digital work, from the first
                strategic question to the final interaction.
              </p>
            </div>

            <div className="about-capabilities grid content-start gap-0 sm:grid-cols-2 sm:gap-x-8">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="about-capability flex items-center justify-between gap-4 border-t border-border py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.12em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm sm:text-base">{capability}</span>
                  </div>

                  <ArrowUpRight size={16} className="shrink-0 text-muted" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-shell">
          <div className="about-reveal relative isolate overflow-hidden border border-border px-6 py-14 sm:px-12 sm:py-20 lg:px-20">
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
              EVERY GREAT PROJECT STARTS SOMEWHERE
            </div>

            <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                Let&apos;s make
                <span className="block text-gradient">something matter.</span>
              </h2>

              <Link
                href="/contact"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
              >
                Tell us your idea
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
