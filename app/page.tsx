import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  // 页面级补充，站点级元信息在 app/layout.tsx
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      {/* 键盘用户跳过导航：仅聚焦时滑出，位移用 transform */}
      <a
        href="#main"
        className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-transform duration-200 focus:translate-y-0"
      >
        跳到主要内容
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
