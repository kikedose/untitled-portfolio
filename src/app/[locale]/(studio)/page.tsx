import ProjectCard from '~/components/studio/ProjectCard';
import { CircleArrowDown } from 'lucide-react';
import { retrieveAllProjects } from '~/lib/queries';

export default async function HomePage() {
  const projects = await retrieveAllProjects();

  return (
    <div className="flex flex-col justify-center gap-8 font-[family-name:var(--font-geist-sans)] md:justify-start">
      {/* <section className="grid h-[calc(100dvh-4rem)] w-full items-start"> */}
      <section className="grid w-full items-start">
        <div className="bg-foreground text-background w-full rounded-lg py-16 md:pl-8">
          <h1 className="mx-auto max-w-[12ch] text-center text-5xl/10 font-medium tracking-tighter md:mx-0 md:text-left md:text-8xl/22 md:font-semibold">
            Designs that breathe.
          </h1>
          <p className="max-w-sm px-4 pt-8 text-center text-sm [word-spacing:-1px] md:px-0 md:text-left md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="border-primary max-w-sm rounded-md border-2 p-4 font-[family-name:var(--font-geist-mono)]">
          <h2 className="text-center text-xl md:text-left md:text-2xl">
            We&apos;re dedicated to crafting{' '}
            <span className="text-rose-700">
              distinctive visual identities{' '}
            </span>
            that speak to{' '}
            <span className="text-orange-300">the essence of each brand. </span>
            <a href="#projects" className="underline decoration-dotted">
              Check out our work
              <CircleArrowDown className="ml-2 inline" />
            </a>
          </h2>
        </div>
      </section>

      <section
        className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-3"
        id="projects"
      >
        {projects?.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            title={project.title}
            year={project.year}
            country={project.country}
            thumbnail={project.thumbnail}
          />
        ))}

        {/* <div className="w-sm overflow-clip rounded-lg p-8 text-xl text-zinc-500">
          {[
            'visual identity',
            'editorial design',
            'creative consultancy',
            'naming',
            'web design',
          ].map((service) => (
            <span
              key={service}
              className="m-1 inline-block rounded-md border border-zinc-500 p-2 text-sm"
            >
              #{service.replaceAll(' ', '_')}
            </span>
          ))}
        </div> */}
      </section>
    </div>
  );
}
