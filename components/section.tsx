import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  /** 章节序号，如 "01" */
  index: string;
  /** 小标签，如 "关于" */
  label: string;
  title: string;
  /** stack 布局右侧的一句话引言 */
  intro?: string;
  /**
   * split：左侧 3 栏标签 + 右侧 9 栏内容（适合文字型区块）
   * stack：顶部大标题 + 整幅内容（适合卡片网格）
   */
  layout?: "split" | "stack";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  index,
  label,
  title,
  intro,
  layout = "split",
  className,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cx("border-t border-line", className)}
    >
      <div className="shell py-20 md:py-28 lg:py-32">
        {layout === "split" ? (
          <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-3">
              <Reveal>
                <p className="eyebrow text-muted">
                  {index} — {label}
                </p>
                <h2
                  id={headingId}
                  className="mt-4 text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em]"
                >
                  {title}
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-9">{children}</div>
          </div>
        ) : (
          <>
            <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
              <div>
                <p className="eyebrow text-muted">
                  {index} — {label}
                </p>
                <h2
                  id={headingId}
                  className="mt-4 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]"
                >
                  {title}
                </h2>
              </div>
              {intro ? (
                <p className="max-w-[26rem] text-sm leading-relaxed text-muted md:pb-2 md:text-right">
                  {intro}
                </p>
              ) : null}
            </Reveal>
            <div className="mt-12 md:mt-16">{children}</div>
          </>
        )}
      </div>
    </section>
  );
}
