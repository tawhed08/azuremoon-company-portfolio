
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--surface)",
        color: "var(--foreground)",
      }}
    >
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--cyan))",
        }}
      />

      <span className="relative">
        {isDark ? (
          <Sun
            size={19}
            strokeWidth={1.8}
            className="transition-transform duration-500 group-hover:rotate-45"
          />
        ) : (
          <Moon
            size={19}
            strokeWidth={1.8}
            className="transition-transform duration-500 group-hover:-rotate-12"
          />
        )}
      </span>
    </button>
  );
}
