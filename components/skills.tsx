import { skillGroups } from "@/data/data";
import { Section } from "@/components/section";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Capabilities"
      title="技能不是清单，是能交付什么"
      intro="按「从设计到上线」的顺序排列，越靠前越是我每天在用的东西。"
      layout="stack"
    >
      <StaggerGroup as="dl" className="border-t border-line">
        {skillGroups.map((group, index) => (
          <StaggerItem
            as="div"
            key={group.title}
            className="grid gap-4 border-b border-line py-7 md:grid-cols-12 md:items-baseline md:gap-8 md:py-9"
          >
            <dt className="md:col-span-3">
              <span className="flex items-baseline gap-3">
                <span className="eyebrow text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-medium tracking-[-0.01em]">
                  {group.title}
                </span>
              </span>
              {group.note ? (
                <span className="mt-1.5 block pl-[1.9rem] text-[11.5px] leading-relaxed text-muted">
                  {group.note}
                </span>
              ) : null}
            </dt>

            <dd className="md:col-span-9">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block cursor-default rounded-full border border-line px-3 py-1.5 text-[13px] leading-none text-ink transition-colors duration-200 hover:border-accent hover:text-accent">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
