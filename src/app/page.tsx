
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Layers3,
  Orbit,
  Sparkles,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Digital experiences",
    description:
      "Immersive, thoughtful websites that turn first impressions into lasting connections.",
    icon: Orbit,
  },
  {
    number: "02",
    title: "Creative development",
    description:
      "Modern engineering, expressive interactions and performance-first digital products.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Brand & strategy",
    description:
      "Distinctive visual identities and clear digital direction for ambitious brands.",
    icon: Sparkles,
  },
];

const projects = [
  {
    number: "01",
    title: "Lumina",
    category: "Brand experience · 2026",
    className: "project-lumina",
    label: "L",
  },
  {
    number: "02",
    title: "Monograph",
    category: "Digital product · 2026",
    className: "project-monograph",
    label: "M",
  },
  {
    number: "03",
    title: "Form & Field",
    category: "Creative direction · 2026",
    className: "project-field",
    label: "F",
  },
];

export default function Home() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .fromTo(
          ".am-hero-eyebrow",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
        )
        .fromTo(
          ".am-hero-title-line",
          { yPercent: 110, rotateX: -8 },
          {
            yPercent: 0,
            rotateX: 0,
            duration: 1.1,
            stagger: 0.13,
          },
          "-=0.25",
        )
        .fromTo(
          ".am-hero-copy, .am-hero-actions",
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.45",
        )
        .fromTo(
          ".am-orbit-art",
          { scale: 0.78, autoAlpha: 0, rotate: -18 },
          {
            scale: 1,
            autoAlpha: 1,
            rotate: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1.15",
        )
        .fromTo(
          ".am-hero-bottom",
          { y: 14, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65 },
          "-=0.45",
        );

      gsap.to(".am-orbit-one", {
        rotation: 360,
        duration: 36,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });

      gsap.to(".am-orbit-two", {
        rotation: -360,
        duration: 48,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });

      gsap.to(".am-moon-core", {
        y: -15,
        x: 7,
        duration: 3.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".am-moon-glow", {
        scale: 1.12,
        opacity: 0.78,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.utils.toArray<HTMLElement>(".am-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 34, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>(".am-project-art")
        .forEach((element) => {
          gsap.fromTo(
            element,
            { scale: 0.94 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        });
    },
    { scope: root },
  );

  return (
    <main ref={root} className="am-home">
      <section className="am-hero" aria-labelledby="am-hero-title">
        <div className="am-hero-grid" aria-hidden="true" />

        <div className="am-hero-content">
          <div className="am-hero-eyebrow am-eyebrow">
            <span className="am-status-dot" />
            INDEPENDENT CREATIVE STUDIO
          </div>

          <h1 id="am-hero-title" className="am-hero-title">
            <span className="am-title-mask">
              <span className="am-hero-title-line">Beyond.</span>
            </span>
            <span className="am-title-mask">
              <span className="am-hero-title-line am-title-accent">
                the ordinary.
              </span>
            </span>
          </h1>

          <div className="am-hero-bottom">
            <p className="am-hero-copy">
              We build meaningful digital experiences where
              <span> thoughtful design</span>, technology and motion
              meet to create something unforgettable.
            </p>

            <div className="am-hero-actions">
              <Link href="/work" className="am-button am-button-primary">
                Explore our work
                <ArrowUpRight size={17} />
              </Link>
              <Link href="/contact" className="am-text-link">
                Start a project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="am-orbit-art"
          aria-label="Animated orbital moon artwork"
        >
          <div className="am-orbit-halo am-moon-glow" />
          <div className="am-orbit-ring am-orbit-one">
            <span className="am-orbit-point am-point-one" />
          </div>
          <div className="am-orbit-ring am-orbit-two">
            <span className="am-orbit-point am-point-two" />
          </div>
          <div className="am-orbit-ring am-orbit-three" />

          <div className="am-moon-core">
            <div className="am-moon-surface">
              <span className="am-moon-crater crater-one" />
              <span className="am-moon-crater crater-two" />
              <span className="am-moon-crater crater-three" />
              <span className="am-moon-crater crater-four" />
              <span className="am-moon-crater crater-five" />
            </div>
          </div>

          <div className="am-orbit-label am-orbit-label-top">
            <span>OBJECT 001</span>
            <span>23° 18&apos; N</span>
          </div>

          <div className="am-orbit-label am-orbit-label-bottom">
            <span>CREATIVITY IN MOTION</span>
            <Asterisk size={15} />
          </div>

          <span className="am-star am-star-one">✳</span>
          <span className="am-star am-star-two">✦</span>
          <span className="am-star am-star-three">✳</span>
        </div>

        <div className="am-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </div>

        <div className="am-hero-index">
          <span>01 / 05</span>
          <span>DESIGNING WHAT&apos;S NEXT</span>
        </div>
      </section>

      <section className="am-intro am-section">
        <div className="am-section-top am-reveal">
          <span className="am-eyebrow">01 — THE STUDIO</span>
          <span className="am-muted-label">Ideas into experiences</span>
        </div>

        <div className="am-intro-grid">
          <h2 className="am-statement am-reveal">
            Not just digital.
            <br />
            <span>Deliberately different.</span>
          </h2>

          <div className="am-intro-aside am-reveal">
            <span className="am-aside-symbol">
              <Asterisk size={25} />
            </span>
            <p>
              The internet doesn&apos;t need more noise. It needs more
              things worth noticing. We partner with forward-thinking
              people to make digital work that means something.
            </p>
            <Link href="/about" className="am-text-link">
              Get to know us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="am-principles am-reveal">
          <div>
            <span>01</span>
            <p>Purpose before pixels.</p>
          </div>
          <div>
            <span>02</span>
            <p>Motion with meaning.</p>
          </div>
          <div>
            <span>03</span>
            <p>Details that matter.</p>
          </div>
        </div>
      </section>

      <section className="am-services am-section">
        <div className="am-section-top am-reveal">
          <span className="am-eyebrow">02 — WHAT WE DO</span>
          <Link href="/services" className="am-text-link">
            All services <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="am-services-heading am-reveal">
          <h2 className="am-section-heading">
            Built with intent.
            <br />
            <span>Made to matter.</span>
          </h2>
          <p>
            Strategy, creativity and technology working together to move
            your brand forward.
          </p>
        </div>

        <div className="am-service-list">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                href="/services"
                className="am-service-row am-reveal"
                key={service.number}
              >
                <span className="am-service-number">{service.number}</span>
                <span className="am-service-icon">
                  <Icon size={22} strokeWidth={1.4} />
                </span>
                <span className="am-service-info">
                  <span className="am-service-title">{service.title}</span>
                  <span className="am-service-description">
                    {service.description}
                  </span>
                </span>
                <span className="am-service-arrow">
                  <ArrowUpRight size={21} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="am-work am-section">
        <div className="am-section-top am-reveal">
          <span className="am-eyebrow">03 — SELECTED WORK</span>
          <span className="am-muted-label">A selection of our thinking</span>
        </div>

        <div className="am-work-heading am-reveal">
          <h2 className="am-section-heading">
            Made to be
            <br />
            <span>remembered.</span>
          </h2>
          <p>
            Every project starts with a question. The answer should never
            look like everyone else&apos;s.
          </p>
        </div>

        <div className="am-project-grid">
          {projects.map((project) => (
            <Link
              href="/work"
              className="am-project am-reveal"
              key={project.number}
            >
              <div className={`am-project-art ${project.className}`}>
                <div className="am-project-art-inner">
                  {project.number === "01" && (
                    <>
                      <div className="am-lumina-orb" />
                      <div className="am-lumina-ring" />
                      <span className="am-art-caption">
                        LIGHT / FORM / SPACE
                      </span>
                    </>
                  )}

                  {project.number === "02" && (
                    <>
                      <div className="am-mono-frame">
                        <span>MONO</span>
                        <span>GRAPH</span>
                        <div className="am-mono-line" />
                      </div>
                      <span className="am-art-caption">
                        LESS, BUT BETTER
                      </span>
                    </>
                  )}

                  {project.number === "03" && (
                    <>
                      <div className="am-field-shape am-field-shape-one" />
                      <div className="am-field-shape am-field-shape-two" />
                      <div className="am-field-shape am-field-shape-three" />
                      <span className="am-art-caption">
                        A STUDY IN BALANCE
                      </span>
                    </>
                  )}
                </div>
                <span className="am-project-index">{project.number}</span>
                <span className="am-project-open">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              <div className="am-project-meta">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <span className="am-project-letter">{project.label}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="am-work-footer am-reveal">
          <Link href="/work" className="am-button am-button-outline">
            Discover all projects <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="am-studio am-section">
        <div className="am-studio-art am-reveal">
          <div className="am-studio-grid" />
          <div className="am-studio-symbol">
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="am-studio-coordinate">AM / 001</span>
          <span className="am-studio-note">A DIFFERENT POINT OF VIEW</span>
        </div>

        <div className="am-studio-content am-reveal">
          <span className="am-eyebrow">04 — OUR APPROACH</span>
          <h2 className="am-section-heading">
            Curiosity is
            <br />
            <span>our compass.</span>
          </h2>
          <p>
            We look closer, ask better questions and challenge the expected.
            That&apos;s how we turn ambitious ideas into thoughtful digital
            experiences.
          </p>
          <Link href="/about" className="am-button am-button-primary">
            Inside the studio <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="am-contact am-section">
        <div className="am-contact-orb" aria-hidden="true" />
        <div className="am-contact-content am-reveal">
          <span className="am-eyebrow">
            <span className="am-status-dot" />
            05 — YOUR NEXT CHAPTER
          </span>
          <h2>
            Have a good
            <br />
            <span>feeling?</span>
          </h2>
          <p>
            Bring us the big idea, the tricky problem or the thing you
            haven&apos;t quite figured out yet.
          </p>
          <Link href="/contact" className="am-button am-button-primary">
            Let&apos;s talk about it <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="am-contact-footer">
          <span>GOOD THINGS START SOMEWHERE.</span>
          <Zap size={16} />
          <span>AZUREMOON®</span>
        </div>
      </section>

      <style jsx>{`
        .am-home {
          --am-accent: var(--primary, #4f8cff);
          --am-cyan: var(--cyan, #70e1f5);
          --am-text: var(--foreground, #f5f7fc);
          --am-muted: var(--muted, #94a3b8);
          --am-line: var(--border, #273247);
          --am-panel: var(--background-secondary, #0d1220);
          --am-surface: var(--surface, #111827);
          position: relative;
          overflow: clip;
          color: var(--am-text);
          background: var(--background, #080b14);
          isolation: isolate;
        }

        .am-home *,
        .am-home *::before,
        .am-home *::after {
          box-sizing: border-box;
        }

        .am-home a {
          color: inherit;
          text-decoration: none;
        }

        .am-section,
        .am-hero {
          position: relative;
          padding-inline: clamp(22px, 7.2vw, 112px);
        }

        .am-hero {
          min-height: min(850px, max(700px, calc(100svh - 72px)));
          display: flex;
          align-items: center;
          isolation: isolate;
          padding-top: 80px;
          padding-bottom: 110px;
        }

        .am-hero-grid,
        .am-studio-grid {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background-image:
            linear-gradient(var(--am-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--am-line) 1px, transparent 1px);
          background-size: 84px 84px;
          opacity: 0.18;
          mask-image: linear-gradient(
            90deg,
            transparent,
            black 40%,
            black 80%,
            transparent
          );
        }

        .am-hero-content {
          position: relative;
          z-index: 3;
          width: min(790px, 68%);
        }

        .am-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--am-muted);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.19em;
          text-transform: uppercase;
        }

        .am-status-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--am-cyan);
          box-shadow: 0 0 15px color-mix(in srgb, var(--am-cyan) 45%, transparent);
        }

        .am-hero-title {
          margin: 28px 0 30px;
          font-size: clamp(64px, 9.1vw, 132px);
          font-weight: 500;
          letter-spacing: -0.09em;
          line-height: 0.94;
        }

        .am-title-mask {
          display: block;
          overflow: hidden;
          padding: 0.03em 0.1em 0.1em 0;
        }

        .am-hero-title-line {
          display: block;
          transform-origin: left center;
        }

        .am-title-accent {
          color: var(--am-accent);
        }

        .am-section-heading span,
        .am-statement span,
        .am-contact-content h2 span {
          color: var(--am-muted);
        }

        .am-hero-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          gap: 28px;
        }

        .am-hero-copy {
          max-width: 345px;
          margin: 0;
          color: var(--am-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .am-hero-copy span {
          color: var(--am-text);
        }

        .am-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px;
        }

        .am-button {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 0 20px;
          border: 1px solid transparent;
          border-radius: 3px;
          font-size: 12px;
          font-weight: 600;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .am-button:hover {
          transform: translateY(-3px);
        }

        .am-button-primary {
          color: #fff !important;
          background: linear-gradient(
            110deg,
            var(--am-accent),
            var(--am-cyan)
          );
          border-color: transparent;
        }

        .am-button-primary:hover {
          color: #fff !important;
          background: linear-gradient(
            110deg,
            var(--primary-hover, #3978f5),
            var(--am-accent)
          );
        }

        .am-button-outline {
          border-color: var(--am-line);
          background: transparent;
        }

        .am-button-outline:hover {
          border-color: var(--am-accent);
          background: color-mix(in srgb, var(--am-accent) 8%, transparent);
        }

        .am-text-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .am-text-link:hover {
          color: var(--am-cyan);
        }

        .am-orbit-art {
          position: absolute;
          z-index: 1;
          width: min(48vw, 650px);
          aspect-ratio: 1;
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
        }

        .am-orbit-halo {
          position: absolute;
          inset: 18%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--am-accent) 20%, transparent),
            color-mix(in srgb, var(--am-cyan) 8%, transparent) 42%,
            transparent 72%
          );
          filter: blur(24px);
        }

        .am-orbit-ring {
          position: absolute;
          inset: 8%;
          border: 1px solid color-mix(in srgb, var(--am-accent) 22%, transparent);
          border-radius: 50%;
        }

        .am-orbit-one {
          transform: rotate(-28deg) scaleY(0.49);
        }

        .am-orbit-two {
          inset: 1%;
          transform: rotate(45deg) scaleY(0.67);
          border-color: color-mix(in srgb, var(--am-cyan) 25%, transparent);
        }

        .am-orbit-three {
          inset: 16%;
          transform: rotate(-36deg) scaleY(0.9);
          border-style: dashed;
          border-color: color-mix(in srgb, var(--am-accent) 18%, transparent);
        }

        .am-orbit-point {
          position: absolute;
          top: 50%;
          left: 0;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--am-cyan);
          box-shadow: 0 0 24px color-mix(in srgb, var(--am-cyan) 65%, transparent);
        }

        .am-point-two {
          top: 16%;
          left: 77%;
          width: 6px;
          height: 6px;
          background: var(--am-accent);
          box-shadow: 0 0 20px color-mix(in srgb, var(--am-accent) 60%, transparent);
        }

        .am-moon-core {
          position: absolute;
          inset: 23%;
          overflow: hidden;
          border-radius: 50%;
          box-shadow:
            inset -28px -22px 55px #030712a0,
            inset 10px 8px 30px color-mix(in srgb, var(--am-text) 14%, transparent),
            0 0 85px color-mix(in srgb, var(--am-accent) 12%, transparent);
        }

        .am-moon-surface {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 50%;
          background:
            radial-gradient(ellipse at 29% 26%, #e2e7f1 0%, #9caed1 13%, transparent 37%),
            radial-gradient(ellipse at 68% 68%, #64779b 0%, transparent 37%),
            radial-gradient(ellipse at 32% 73%, #a7b8d9 0%, transparent 24%),
            radial-gradient(circle at 36% 36%, #c7d4ed, #7186ac 44%, #293651 76%, #111a2c 100%);
          box-shadow: inset -35px -15px 42px #070b17a8;
        }

        .am-moon-surface::after {
          position: absolute;
          inset: 0;
          content: "";
          background: repeating-radial-gradient(
            ellipse at 48% 48%,
            transparent 0 10px,
            #dce6ff05 11px 12px
          );
          mix-blend-mode: screen;
        }

        .am-moon-crater {
          position: absolute;
          display: block;
          border: 1px solid #f1f5ff2a;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            #18243d3d,
            #10192a20 65%,
            #e4edff18
          );
          box-shadow: inset 2px 3px 7px #0b14275c;
        }

        .crater-one { width: 23%; aspect-ratio: 1; top: 23%; left: 24%; }
        .crater-two { width: 15%; aspect-ratio: 1; top: 54%; left: 57%; }
        .crater-three { width: 11%; aspect-ratio: 1; top: 36%; left: 67%; }
        .crater-four { width: 18%; aspect-ratio: 1; top: 65%; left: 27%; }
        .crater-five { width: 7%; aspect-ratio: 1; top: 17%; left: 52%; }

        .am-orbit-label {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--am-muted);
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .am-orbit-label-top { top: 14%; right: 5%; }
        .am-orbit-label-bottom { bottom: 13%; left: 2%; }

        .am-orbit-label-bottom svg,
        .am-contact-footer svg {
          color: var(--am-cyan);
        }

        .am-star {
          position: absolute;
          color: var(--am-cyan);
          opacity: 0.8;
        }

        .am-star-one { top: 18%; left: 19%; font-size: 19px; }
        .am-star-two { top: 38%; right: 9%; font-size: 18px; color: var(--am-accent); }
        .am-star-three { bottom: 21%; right: 23%; font-size: 12px; }

        .am-hero-scroll,
        .am-hero-index {
          position: absolute;
          bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--am-muted);
          font-size: 9px;
          letter-spacing: 0.15em;
        }

        .am-hero-scroll { left: clamp(22px, 7.2vw, 112px); }
        .am-hero-index { right: clamp(22px, 7.2vw, 112px); }

        .am-hero-index span + span {
          padding-left: 12px;
          border-left: 1px solid var(--am-line);
        }

        .am-section {
          padding-top: clamp(85px, 11vw, 155px);
          padding-bottom: clamp(85px, 11vw, 155px);
          border-top: 1px solid var(--am-line);
        }

        .am-section-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: clamp(42px, 7vw, 92px);
        }

        .am-muted-label {
          color: var(--am-muted);
          font-size: 11px;
        }

        .am-intro-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 8%;
          align-items: end;
        }

        .am-statement,
        .am-section-heading {
          margin: 0;
          font-size: clamp(42px, 6.1vw, 82px);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -0.075em;
        }

        .am-intro-aside {
          max-width: 320px;
          justify-self: end;
        }

        .am-aside-symbol {
          display: inline-flex;
          margin-bottom: 14px;
          color: var(--am-cyan);
        }

        .am-intro-aside p,
        .am-services-heading > p,
        .am-work-heading > p,
        .am-studio-content > p,
        .am-contact-content > p {
          color: var(--am-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .am-intro-aside .am-text-link {
          margin-top: 12px;
        }

        .am-principles {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: clamp(55px, 8vw, 105px);
          padding-top: 23px;
          border-top: 1px solid var(--am-line);
        }

        .am-principles > div {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .am-principles span,
        .am-service-number {
          color: var(--am-muted);
          font-size: 10px;
        }

        .am-principles p {
          font-size: 12px;
        }

        .am-services-heading,
        .am-work-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 65px;
        }

        .am-services-heading > p,
        .am-work-heading > p {
          max-width: 280px;
          margin: 0 0 5px;
        }

        .am-service-list {
          border-top: 1px solid var(--am-line);
        }

        .am-service-row {
          display: grid;
          grid-template-columns: 50px 58px minmax(0, 1fr) 30px;
          align-items: center;
          gap: 22px;
          padding: 29px 0;
          border-bottom: 1px solid var(--am-line);
          transition: padding 0.3s ease;
        }

        .am-service-row:hover {
          padding-right: 12px;
          padding-left: 12px;
        }

        .am-service-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          border: 1px solid var(--am-line);
          border-radius: 50%;
          color: var(--am-cyan);
          transition:
            background 0.25s ease,
            color 0.25s ease;
        }

        .am-service-row:hover .am-service-icon {
          background: var(--am-cyan);
          color: var(--background, #080b14);
        }

        .am-service-info {
          display: grid;
          gap: 9px;
        }

        .am-service-title {
          font-size: clamp(18px, 2.3vw, 28px);
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .am-service-description {
          max-width: 470px;
          color: var(--am-muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .am-service-arrow {
          transition: transform 0.25s ease;
        }

        .am-service-row:hover .am-service-arrow {
          transform: translate(3px, -3px);
        }

        .am-work {
          background: var(--am-panel);
        }

        .am-project-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 48px 25px;
        }

        .am-project:last-child {
          grid-column: 1 / -1;
        }

        .am-project-art {
          position: relative;
          min-height: 290px;
          aspect-ratio: 1.22;
          overflow: hidden;
          border: 1px solid var(--am-line);
          transform-origin: center;
        }

        .am-project:last-child .am-project-art {
          aspect-ratio: 2.3;
        }

        .am-project-art-inner {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .project-lumina {
          background: radial-gradient(
            ellipse at 50% 45%,
            color-mix(in srgb, var(--am-accent) 32%, var(--am-panel)),
            var(--background, #080b14) 72%
          );
        }

        .am-lumina-orb {
          width: 36%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(
            circle at 32% 25%,
            #f1f5ff,
            #b7c9f5 22%,
            #6d83bb 51%,
            #222f52 76%
          );
          box-shadow:
            0 0 80px color-mix(in srgb, var(--am-accent) 28%, transparent),
            inset -22px -16px 25px #121d3d;
        }

        .am-lumina-ring {
          position: absolute;
          width: 72%;
          height: 32%;
          border: 1px solid color-mix(in srgb, var(--am-cyan) 60%, transparent);
          border-radius: 50%;
          transform: rotate(-28deg);
        }

        .am-art-caption {
          position: absolute;
          bottom: 22px;
          left: 22px;
          color: var(--am-muted);
          font-size: 8px;
          letter-spacing: 0.16em;
        }

        .project-monograph {
          background: var(--am-surface);
          color: var(--am-text);
          border-color: var(--am-line);
        }

        .am-mono-frame {
          display: grid;
          gap: 0;
          font-family: Georgia, serif;
          font-size: clamp(38px, 6vw, 78px);
          font-weight: 400;
          line-height: 0.88;
          letter-spacing: -0.08em;
        }

        .am-mono-frame span:last-of-type {
          padding-left: 0.45em;
          font-style: italic;
        }

        .am-mono-line {
          width: 85%;
          height: 1px;
          margin-top: 15px;
          background: var(--am-accent);
        }

        .project-monograph .am-art-caption {
          color: var(--am-muted);
        }

        .project-field {
          background: radial-gradient(
            ellipse at 50% 45%,
            color-mix(in srgb, var(--am-accent) 18%, var(--am-panel)),
            var(--am-panel) 72%
          );
        }

        .am-field-shape {
          position: absolute;
          width: 28%;
          aspect-ratio: 0.68;
          border: 1px solid color-mix(in srgb, var(--am-cyan) 60%, transparent);
          border-radius: 48% 48% 4px 4px;
        }

        .am-field-shape-one {
          transform: translateX(-45%) rotate(-23deg);
          background: linear-gradient(145deg, var(--am-cyan), var(--am-accent));
        }

        .am-field-shape-two {
          transform: translateX(0) rotate(0);
          background: linear-gradient(
            160deg,
            var(--am-accent),
            var(--background, #080b14)
          );
        }

        .am-field-shape-three {
          transform: translateX(45%) rotate(23deg);
          background: linear-gradient(
            145deg,
            var(--am-cyan),
            var(--am-panel)
          );
        }

        .am-project-index,
        .am-project-open {
          position: absolute;
          top: 17px;
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          border: 1px solid #ffffff36;
          border-radius: 50%;
          color: #fff;
          font-size: 9px;
        }

        .am-project-index { left: 17px; }

        .am-project-open {
          right: 17px;
          transition:
            background 0.25s ease,
            color 0.25s ease;
        }

        .am-project:hover .am-project-open {
          background: var(--am-accent);
          border-color: var(--am-accent);
          color: #fff;
        }

        .am-project-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 19px;
        }

        .am-project-meta h3 {
          margin: 0 0 7px;
          font-size: 19px;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .am-project-meta p {
          margin: 0;
          color: var(--am-muted);
          font-size: 11px;
        }

        .am-project-letter {
          color: var(--am-muted);
          font-size: 12px;
        }

        .am-work-footer {
          display: flex;
          justify-content: center;
          margin-top: 65px;
        }

        .am-studio {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
          align-items: center;
          gap: clamp(45px, 9vw, 125px);
        }

        .am-studio-art {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 320px;
          aspect-ratio: 1;
          overflow: hidden;
          border: 1px solid var(--am-line);
          background: radial-gradient(
            ellipse at center,
            color-mix(in srgb, var(--am-accent) 12%, transparent),
            transparent 65%
          );
        }

        .am-studio-grid {
          opacity: 0.25;
          mask-image: none;
          background-size: 42px 42px;
        }

        .am-studio-symbol {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, 62px);
          grid-template-rows: repeat(2, 62px);
          gap: 8px;
          transform: rotate(-12deg);
        }

        .am-studio-symbol span {
          border: 1px solid color-mix(in srgb, var(--am-accent) 65%, transparent);
          background: linear-gradient(
            135deg,
            color-mix(in srgb, var(--am-accent) 12%, transparent),
            color-mix(in srgb, var(--am-cyan) 6%, transparent)
          );
          box-shadow: inset 0 0 25px color-mix(in srgb, var(--am-accent) 6%, transparent);
        }

        .am-studio-symbol span:nth-child(2),
        .am-studio-symbol span:nth-child(3) {
          border-color: color-mix(in srgb, var(--am-cyan) 55%, transparent);
          border-radius: 50%;
        }

        .am-studio-symbol span:nth-child(4) {
          transform: rotate(45deg) scale(0.7);
        }

        .am-studio-coordinate,
        .am-studio-note {
          position: absolute;
          color: var(--am-muted);
          font-size: 8px;
          letter-spacing: 0.16em;
        }

        .am-studio-coordinate { top: 20px; left: 20px; }
        .am-studio-note { right: 20px; bottom: 20px; }

        .am-studio-content .am-section-heading {
          margin: 25px 0;
        }

        .am-studio-content > p {
          max-width: 365px;
          margin-bottom: 28px;
        }

        .am-contact {
          min-height: 540px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          background: var(--am-panel);
        }

        .am-contact-orb {
          position: absolute;
          width: min(750px, 95vw);
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--am-accent) 12%, transparent),
            color-mix(in srgb, var(--am-cyan) 4%, transparent) 44%,
            transparent 70%
          );
          pointer-events: none;
        }

        .am-contact-content {
          position: relative;
          z-index: 1;
          width: min(680px, 100%);
          padding: 30px 0 80px;
        }

        .am-contact-content > .am-eyebrow {
          justify-content: center;
        }

        .am-contact-content h2 {
          margin: 27px 0 22px;
          font-size: clamp(58px, 9vw, 112px);
          font-weight: 500;
          line-height: 0.96;
          letter-spacing: -0.09em;
        }

        .am-contact-content > p {
          max-width: 380px;
          margin: 0 auto 27px;
        }

        .am-contact-footer {
          position: absolute;
          right: clamp(22px, 7.2vw, 112px);
          bottom: 25px;
          left: clamp(22px, 7.2vw, 112px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid var(--am-line);
          color: var(--am-muted);
          font-size: 8px;
          letter-spacing: 0.13em;
        }

        .am-home a:focus-visible {
          outline: 2px solid var(--am-cyan);
          outline-offset: 5px;
        }

        @media (min-width: 1500px) {
          .am-hero {
            min-height: 900px;
          }
        }

        @media (max-width: 900px) {
          .am-hero {
            min-height: 760px;
            align-items: flex-start;
            padding-top: 105px;
          }

          .am-hero-content {
            width: 100%;
          }

          .am-hero-title {
            font-size: clamp(62px, 11vw, 100px);
          }

          .am-orbit-art {
            top: auto;
            right: -1%;
            bottom: 0;
            width: min(67vw, 480px);
            opacity: 0.72;
            transform: none;
          }

          .am-hero-bottom {
            max-width: 510px;
          }

          .am-hero-copy {
            max-width: 320px;
          }

          .am-intro-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .am-intro-aside {
            justify-self: start;
            max-width: 440px;
          }

          .am-studio {
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .am-section,
          .am-hero {
            padding-inline: 22px;
          }

          .am-hero {
            min-height: max(690px, calc(100svh - 60px));
            padding-top: 86px;
            padding-bottom: 105px;
          }

          .am-hero-title {
            margin-top: 25px;
            font-size: clamp(48px, 11.7vw, 70px);
            letter-spacing: -0.085em;
          }

          .am-hero-bottom {
            align-items: flex-start;
            gap: 22px;
          }

          .am-hero-copy {
            max-width: 310px;
            font-size: 12px;
          }

          .am-hero-actions {
            gap: 16px;
          }

          .am-orbit-art {
            right: -2%;
            bottom: 8px;
            width: min(86vw, 390px);
            opacity: 0.65;
          }

          .am-orbit-label {
            font-size: 7px;
          }

          .am-hero-scroll,
          .am-hero-index {
            bottom: 20px;
            font-size: 7px;
          }

          .am-hero-scroll { left: 22px; }
          .am-hero-index { right: 22px; }

          .am-hero-index span + span {
            display: none;
          }

          .am-section {
            padding-top: 82px;
            padding-bottom: 82px;
          }

          .am-section-top {
            margin-bottom: 45px;
          }

          .am-muted-label {
            font-size: 9px;
            text-align: right;
          }

          .am-statement,
          .am-section-heading {
            font-size: clamp(38px, 9.4vw, 56px);
          }

          .am-principles {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .am-principles > div {
            padding: 15px 0;
            border-bottom: 1px solid var(--am-line);
          }

          .am-principles p {
            margin: 0;
          }

          .am-services-heading,
          .am-work-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 42px;
          }

          .am-services-heading > p,
          .am-work-heading > p {
            max-width: 340px;
          }

          .am-service-row {
            grid-template-columns: 22px 38px minmax(0, 1fr) 18px;
            gap: 9px;
            padding: 23px 0;
          }

          .am-service-icon {
            width: 36px;
            height: 36px;
          }

          .am-service-icon svg {
            width: 18px;
          }

          .am-service-title {
            font-size: 16px;
          }

          .am-service-description {
            font-size: 11px;
          }

          .am-project-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .am-project:last-child {
            grid-column: auto;
          }

          .am-project-art {
            min-height: 255px;
          }

          .am-project:last-child .am-project-art {
            aspect-ratio: 1.22;
          }

          .am-studio {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .am-studio-art {
            min-height: 280px;
          }

          .am-studio-content .am-section-heading {
            margin: 20px 0;
          }

          .am-contact {
            min-height: 510px;
          }

          .am-contact-content h2 {
            font-size: clamp(54px, 12.5vw, 78px);
          }

          .am-contact-footer {
            right: 22px;
            left: 22px;
            font-size: 7px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .am-home *,
          .am-home *::before,
          .am-home *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}
