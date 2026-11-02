import { contact, site } from "@/data/data";
import { Section } from "@/components/section";
import { ArrowUpRight } from "@/components/icons";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

export function Contact() {
  const emailLabel = contact.emailLabel || site.email;

  return (
    <Section id="contact" index="04" label="Contact" title={contact.title} layout="split">
      <Reveal>
        <p className="max-w-[34rem] text-[15px] leading-[1.8] text-muted">
          {contact.description}
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mt-8 md:mt-10">
        <a
          href={`mailto:${site.email}`}
          className="group inline-flex max-w-full items-baseline gap-3 text-[clamp(1.4rem,4.6vw,2.5rem)] font-medium tracking-[-0.025em]"
        >
          <span className="link-underline break-all">{emailLabel}</span>
          <ArrowUpRight className="h-[0.7em] w-[0.7em] shrink-0 -translate-y-[0.15em] text-accent transition-transform duration-300 group-hover:-translate-y-[0.35em] group-hover:translate-x-[0.15em]" />
        </a>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 border-t border-line pt-8 md:mt-16">
        <p className="eyebrow text-muted">Elsewhere</p>
        <StaggerGroup
          as="ul"
          className="mt-5 grid grid-cols-2 gap-x-6 sm:grid-cols-4 md:gap-x-8"
        >
          {contact.socials.map((social) => (
            <StaggerItem as="li" key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 border-b border-line py-3 transition-colors duration-200 hover:text-accent"
              >
                <span className="flex items-center gap-1.5 text-sm">
                  {social.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </span>
                {social.hint ? (
                  <span className="text-[11px] leading-relaxed text-muted">
                    {social.hint}
                  </span>
                ) : null}
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>
    </Section>
  );
}
