"use client";

import type { ReactNode } from "react";
import { hero, site } from "@/data/data";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ArrowDown, ArrowUpRight } from "@/components/icons";

/** 把标题行里的高亮词替换成亮色 + 细下划线 */
function renderLine(line: string, highlight: string): ReactNode {
  if (!highlight || !line.includes(highlight)) return line;

  const [before, ...rest] = line.split(highlight);
  const after = rest.join(highlight);

  return (
    <>
      {before}
      <span className="relative inline-block text-accent">
        {highlight}
        <span
          aria-hidden="true"
          className="absolute -bottom-[0.08em] left-0 h-[0.055em] w-full bg-accent opacity-40"
        />
      </span>
      {after}
    </>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative">
      {/* 背景：一层几乎看不见的暖色光晕，只在大屏出现，避免移动端无谓绘制 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-[520px] lg:block"
        style={{
          background:
            "radial-gradient(60% 100% at 78% 0%, color-mix(in srgb, var(--accent) 9%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="shell relative pb-16 pt-12 md:pb-24 md:pt-20 lg:pb-28 lg:pt-28">
        <div className="grid items-start gap-12 md:grid-cols-12 md:gap-8">
          {/* 文案列：8/12 */}
          <div className="md:col-span-8">
            <StaggerGroup>
              <StaggerItem>
                <p className="eyebrow flex items-start gap-2.5 text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-[0.42em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {hero.eyebrow}
                </p>
              </StaggerItem>

              <StaggerItem>
                <h1
                  id="hero-heading"
                  className="mt-6 text-balance text-[clamp(2.05rem,9.4vw,5.25rem)] font-semibold leading-[1.06] tracking-[-0.04em] md:mt-8"
                >
                  {hero.titleLines.map((line) => (
                    <span key={line} className="block">
                      {renderLine(line, hero.highlight)}
                    </span>
                  ))}
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-7 max-w-[34rem] text-[15px] leading-[1.8] text-muted md:mt-9 md:text-base">
                  {hero.intro}
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-9 flex flex-wrap items-center gap-3 md:mt-11">
                  <a
                    href={hero.primaryCta.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-transform duration-300 ease-out hover:-translate-y-0.5"
                  >
                    {hero.primaryCta.label}
                    <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </a>
                  <a
                    href={hero.secondaryCta.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
                  >
                    {hero.secondaryCta.label}
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>

          {/* 头像列：4/12，桌面端下沉一点，制造不对称 */}
          <div className="md:col-span-4 md:pt-14 lg:pt-20">
            <Reveal delay={0.15} distance={28} className="relative mx-auto w-full max-w-[300px] md:max-w-none">
              <div className="relative">
                {/* 偏移描边框：纯装饰 */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-card border border-line"
                />
                <div className="relative overflow-hidden rounded-card border border-line bg-surface">
                  <img
                    src={site.avatar}
                    alt={site.avatarAlt}
                    width={800}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-square h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span className="eyebrow text-muted">{hero.status}</span>
                </span>
                <span className="eyebrow text-muted">{site.location}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
