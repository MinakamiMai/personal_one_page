import { footer, site } from "@/data/data";
import { ArrowDown } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11.5px] leading-relaxed text-muted">
          {footer.copyright} · {footer.note}
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 self-start text-[11.5px] text-muted transition-colors duration-200 hover:text-accent sm:self-auto"
        >
          返回顶部
          <ArrowDown className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>
      <span className="sr-only">{site.location}</span>
    </footer>
  );
}
