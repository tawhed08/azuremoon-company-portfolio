
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    number: "01",
    name: "NOVA®",
    type: "Brand identity · Digital experience",
    category: "Branding",
    year: "2026",
    description: "A new perspective on tomorrow.",
    visual: "nova",
    size: "large",
  },
  {
    number: "02",
    name: "FORM / FUTURE",
    type: "Art direction · Creative technology",
    category: "Art Direction",
    year: "2026",
    description: "Where structure meets imagination.",
    visual: "form",
    size: "normal",
  },
  {
    number: "03",
    name: "OBJECT 001",
    type: "Digital product · Interaction",
    category: "Digital",
    year: "2025",
    description: "A study in digital simplicity.",
    visual: "object",
    size: "normal",
  },
  {
    number: "04",
    name: "AFTERGLOW",
    type: "Visual identity · Campaign",
    category: "Branding",
    year: "2025",
    description: "A visual language for a new energy.",
    visual: "afterglow",
    size: "large",
  },
];

const filters = ["All", "Branding", "Art Direction", "Digital"];

export default function WorkPage() {
  const root = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      // WORK_INTRO: reveal the page heading in sequence.
      gsap.from(".work-heading-item", {
        y: 35,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
      });

      // PROJECT_ENTRANCE: reveal each project as it enters the viewport.
      gsap.utils.toArray<HTMLElement>(".work-project-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 34, autoAlpha: 0 },
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
    },
    {
      scope: root,
      dependencies: [activeFilter],
      revertOnUpdate: true,
    },
  );

  return (
    <main ref={root} className="min-h-screen overflow-hidden">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 78% 28%, color-mix(in srgb, var(--primary) 15%, transparent), transparent 38%)",
          }}
        />

        <div className="container-shell pb-16 pt-20 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-36">
          <p className="work-heading-item mb-8 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-muted sm:text-xs">
            <span className="size-2 rounded-full bg-success" />
            A SELECTION OF OUR CREATIVE EXPLORATIONS
          </p>

          <h1 className="work-heading-item text-[clamp(4rem,12vw,11rem)] font-semibold leading-[0.84] tracking-[-0.09em]">
            Selected
            <span className="block text-gradient italic">work.</span>
          </h1>

          <div className="work-heading-item mt-10 flex flex-col justify-between gap-6 border-t border-border pt-6 sm:flex-row sm:items-end">
            <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              A collection of ideas, identities and digital experiences built
              around a simple belief: meaningful work should make you feel
              something.
            </p>

            <span className="text-[10px] tracking-[0.18em] text-muted">
              INDEPENDENT IDEAS / 2025—2026
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-border pb-6 sm:flex-row sm:items-center">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-muted">
              PROJECT ARCHIVE
              <span className="ml-3 text-primary">
                / {String(filteredProjects.length).padStart(2, "0")}
              </span>
            </p>

            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                    activeFilter === filter
                      ? "border-primary bg-primary text-white"
                      : "border-border text-muted hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.number}
                className={`work-project-card group ${
                  project.size === "large" ? "md:col-span-2" : ""
                }`}
              >
                <Link
                  href="/contact"
                  aria-label={`Discuss a project inspired by ${project.name}`}
                  className="block"
                >
                  <div
                    className={`relative isolate flex aspect-[1.1/1] items-center justify-center overflow-hidden border border-border ${
                      project.size === "large"
                        ? "md:aspect-[2.15/1]"
                        : "md:aspect-[0.95/1]"
                    }`}
                  >
                    <span className="absolute left-5 top-5 z-20 text-[9px] tracking-[0.18em] text-white/70 sm:left-7 sm:top-7">
                      {project.category.toUpperCase()} / {project.year}
                    </span>

                    {project.visual === "nova" && (
                      <>
                        <div
                          className="absolute inset-0 -z-10"
                          style={{
                            background:
                              "radial-gradient(ellipse at 50% 50%, #334e98, #182443 40%, #0a1020 78%)",
                          }}
                        />
                        <div className="absolute aspect-square w-[67%] rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute aspect-square w-[49%] rounded-full border border-dashed border-white/20" />
                        <div
                          className="absolute aspect-square w-[32%] rounded-full"
                          style={{
                            background:
                              "radial-gradient(circle at 28% 23%, #fff, #9dbaf6 16%, #405d9c 42%, #101a36 78%)",
                            boxShadow: "0 0 100px #7197ff44",
                          }}
                        />
                        <div className="absolute h-px w-[78%] rotate-[-25deg] bg-white/25" />
                        <div className="absolute h-px w-[78%] rotate-[30deg] bg-white/15" />
                        <span className="absolute bottom-[12%] left-[9%] text-5xl font-semibold tracking-[-0.09em] text-white sm:text-7xl">
                          NOVA<span className="text-cyan">®</span>
                        </span>
                      </>
                    )}

                    {project.visual === "form" && (
                      <>
                        <div
                          className="absolute inset-0 -z-10"
                          style={{
                            background:
                              "linear-gradient(145deg, #e8d8bd, #b8a28d 58%, #76665b)",
                          }}
                        />
                        <div className="absolute left-[15%] top-[20%] h-[55%] w-[40%] rotate-[-13deg] border border-black/20 bg-[#eee3d3] shadow-2xl transition-transform duration-700 group-hover:rotate-[-7deg]" />
                        <div className="absolute right-[17%] top-[19%] h-[58%] w-[28%] rotate-[12deg] bg-[#c65338] shadow-2xl transition-transform duration-700 group-hover:rotate-[5deg]">
                          <span className="absolute bottom-[10%] left-[12%] text-4xl text-white">
                            F/
                          </span>
                        </div>
                        <span className="absolute bottom-[8%] left-[8%] text-[9px] tracking-[0.2em] text-black/60">
                          FORM FOLLOWS FEELING
                        </span>
                      </>
                    )}

                    {project.visual === "object" && (
                      <>
                        <div
                          className="absolute inset-0 -z-10"
                          style={{
                            background:
                              "radial-gradient(ellipse at center, #29423e, #101b1a 72%)",
                          }}
                        />
                        <div className="absolute aspect-square w-[65%] rounded-full border border-[#a4d9c5]/30 transition-transform duration-700 group-hover:rotate-12" />
                        <div className="absolute aspect-square w-[44%] rounded-full border border-dashed border-[#a4d9c5]/30" />
                        <div
                          className="absolute aspect-square w-[27%] rotate-45 border border-[#e0f8eb]/60"
                          style={{
                            background:
                              "linear-gradient(135deg, #c7f5e3, #76b8a0 35%, #24483f 68%, #152b28)",
                          }}
                        />
                        <span className="absolute bottom-[12%] left-[10%] text-5xl font-light tracking-[-0.08em] text-[#d7f2e6]">
                          001
                        </span>
                      </>
                    )}

                    {project.visual === "afterglow" && (
                      <>
                        <div
                          className="absolute inset-0 -z-10"
                          style={{
                            background:
                              "radial-gradient(ellipse at 52% 46%, #f5a75c, #b64b49 32%, #552e57 65%, #18182e 100%)",
                          }}
                        />
                        <div className="absolute aspect-square w-[57%] rounded-full border border-white/25 transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute aspect-square w-[43%] rounded-full border border-white/30" />
                        <div
                          className="absolute aspect-square w-[29%] rounded-full"
                          style={{
                            background:
                              "radial-gradient(circle at 35% 25%, #ffe7b5, #f1a76a 35%, #bd585c 68%, #69385e)",
                            boxShadow: "0 0 90px #ffb47755",
                          }}
                        />
                        <span className="absolute bottom-[12%] left-[9%] text-4xl font-semibold tracking-[-0.08em] text-white sm:text-6xl">
                          AFTERGLOW
                        </span>
                      </>
                    )}

                    <span className="absolute right-5 top-5 z-20 flex size-10 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-7 sm:top-7">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4 border-b border-border pb-5">
                    <div>
                      <p className="mb-2 text-[10px] tracking-[0.12em] text-muted">
                        {project.number} / {project.type}
                      </p>
                      <h2 className="text-xl font-semibold tracking-[-0.05em] sm:text-2xl">
                        {project.name}
                      </h2>
                      <p className="mt-1 text-sm text-muted">
                        {project.description}
                      </p>
                    </div>

                    <MoveUpRight
                      size={20}
                      className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                    />
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] tracking-[0.2em] text-muted">
                HAVE SOMETHING IN MIND?
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.06em] sm:text-4xl">
                Let&apos;s make it <span className="text-gradient">matter.</span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
            >
              Start a conversation
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
