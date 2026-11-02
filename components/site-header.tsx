"use client";

import { nav, site } from "@/data/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="glass-bar sticky top-0 z-50 border-b border-line">
      <div className="shell flex h-16 items-center justify-between gap-3">
        <a
          href="#top"
          className="group flex min-w-0 items-baseline gap-2 rounded-sm"
          aria-label={`${site.name}，回到顶部`}
        >
          <span className="truncate text-[15px] font-semibold tracking-tight">
            {site.name}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-muted transition-colors duration-200 group-hover:text-accent sm:inline">
            {site.nameEn}
          </span>
        </a>

        <div className="flex shrink-0 items-center">
          <nav aria-label="主导航" className="hidden sm:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="link-underline inline-block rounded-sm px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <span
            aria-hidden="true"
            className="mx-2 hidden h-4 w-px bg-line sm:block"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
