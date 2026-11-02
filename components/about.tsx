import { about } from "@/data/data";
import { Section } from "@/components/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

export function About() {
  return (
    <Section id="about" index="01" label="About" title={about.title} layout="split">
      <Reveal>
        <p className="max-w-[42rem] text-balance text-[clamp(1.125rem,1.9vw,1.5rem)] font-medium leading-[1.55] tracking-[-0.015em]">
          {about.lead}
        </p>
      </Reveal>

      <div className="mt-7 max-w-[38rem] space-y-5 md:mt-8">
        {about.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph.slice(0, 12)} delay={0.05 * (index + 1)} distance={18}>
            <p className="text-[15px] leading-[1.85] text-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <StaggerGroup
        as="dl"
        className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 sm:grid-cols-4 md:mt-14"
      >
        {about.facts.map((fact) => (
          <StaggerItem key={fact.label} as="div">
            <dt className="eyebrow text-muted">{fact.label}</dt>
            <dd className="mt-2.5 text-sm leading-snug text-ink">{fact.value}</dd>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
