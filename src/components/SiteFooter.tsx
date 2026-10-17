
import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Have a project in mind?
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl md:text-6xl">
              Let&apos;s make
              <br />
              something <span className="text-gradient">remarkable.</span>
            </h2>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-1"
            >
              Start a conversation <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <Link
              href="/"
              className="text-2xl font-bold tracking-[-0.07em]"
            >
              AzureMoon<span className="text-primary">®</span>
            </Link>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              Back to top <MoveUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>
          © 2026 AzureMoon Studio. All rights reserved. 
          </p>
          <p>Designed with intention. Built with motion.</p>
        </div>
      </div>
    </footer>
  );
}
