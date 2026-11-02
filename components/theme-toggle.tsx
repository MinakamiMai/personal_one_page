"use client";

import { cx } from "@/lib/cx";
import { useTheme } from "@/components/theme-provider";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M18.4 5.6l-1.1 1.1M6.7 17.3l-1.1 1.1" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.5 14.3A8.5 8.5 0 1 1 9.7 3.5a6.8 6.8 0 0 0 10.8 10.8Z" />
    </svg>
  );
}

/**
 * 深浅色切换。
 * 用 aria-pressed 表达状态，图标仅做视觉，文字说明交给 aria-label。
 */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "切换到浅色模式" : "切换到深色模式"}
      title={isDark ? "切换到浅色模式" : "切换到深色模式"}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      <span className="relative block h-[18px] w-[18px]">
        <SunIcon
          className={cx(
            "absolute inset-0 h-[18px] w-[18px] transition-all duration-300",
            isDark ? "scale-50 opacity-0" : "scale-100 opacity-100",
          )}
        />
        <MoonIcon
          className={cx(
            "absolute inset-0 h-[18px] w-[18px] transition-all duration-300",
            isDark ? "scale-100 opacity-100" : "scale-50 opacity-0",
          )}
        />
      </span>
    </button>
  );
}
