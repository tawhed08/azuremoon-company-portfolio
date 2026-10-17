
"use client";

import { useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type PageMotionProps = {
  children: ReactNode;
};

export default function PageMotion({ children }: PageMotionProps) {
  const pathname = usePathname();
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const page = pageRef.current;

      if (!page) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Keep content visible for visitors who prefer reduced motion.
      if (reduceMotion) {
        gsap.set(page, {
          clearProps: "opacity,visibility,transform",
        });
        return;
      }

      // Route entrance only.
      // Individual pages keep control of their own GSAP timelines.
      gsap.fromTo(
        page,
        {
          autoAlpha: 0,
          y: 12,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          overwrite: "auto",
        },
      );
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    },
  );

  return <div ref={pageRef} className="page-motion-root">{children}</div>;
}
