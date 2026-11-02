import { projects, type Project } from "@/data/data";
import { Section } from "@/components/section";
import { ArrowUpRight } from "@/components/icons";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

/**
 * 交替列宽：7/5 → 5/7，制造不等宽的节奏，
 * 同时保证每一行加起来正好 12 栏。
 */
const SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
] as const;

function isExternal(href: string) {
  return href.startsWith("http");
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      {...(isExternal(project.href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-[0_1px_2px_rgba(20,17,14,0.04)] transition-transform duration-300 ease-out hover:-translate-y-1.5 focus-visible:-translate-y-1.5"
    >
      <div className="relative overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
        />
        <span className="absolute right-3 top-3 rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-muted">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.01em]">
            {project.title}
          </h3>
          <ArrowUpRight className="mt-0.5 h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>

        {project.role ? (
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {project.role}
          </p>
        ) : null}

        <p className="mt-3 text-[13.5px] leading-[1.75] text-muted">
          {project.summary}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] leading-none text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected Work"
      title="挑几个能说明问题的项目"
      intro="从设计系统到实时协作，再到面向患者的移动端——都是真实上线、有人每天在用的东西。"
      layout="stack"
    >
      <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
        {projects.map((project, index) => (
          <StaggerItem
            key={project.id}
            className={SPANS[index % SPANS.length]}
          >
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
