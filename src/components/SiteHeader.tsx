
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href: string) =>
    `relative py-2 text-sm transition-colors duration-300 ${
      isActive(href)
        ? "font-semibold text-foreground"
        : "text-muted hover:text-foreground"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 text-foreground backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <Link
          href="/"
          aria-label="AzureMoon homepage"
          className="flex shrink-0 items-center gap-2.5"
          onClick={closeMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg text-white">
            ☾
          </span>

          <span className="text-xl font-bold tracking-[-0.07em]">
            AzureMoon<span className="text-primary">®</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={linkClass(item.href)}
            >
              {item.label}

              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:bg-surface-hover"
          >
            {theme === "dark" ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface-hover md:hidden"
          >
            {menuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-4 py-5 md:hidden"
        >
          <div className="container-shell flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 text-base transition-colors ${
                  isActive(item.href)
                    ? "bg-surface font-semibold text-foreground"
                    : "text-muted hover:bg-surface-hover hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-between rounded-xl bg-primary px-4 py-3 font-semibold text-white"
            >
              Let&apos;s talk
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
