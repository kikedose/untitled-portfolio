import ProjectCard from '~/components/portfolio/ProjectCard';
import { CircleArrowDown, Instagram, Mail, PhoneOutgoing } from 'lucide-react';
import { retrieveAllProjects } from '~/lib/queries';
import { getDictionary } from '~/lib/l10n';
import '~/styles/styles.css';

export default async function DesignStudio({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const d = await getDictionary('studio', locale);

  const projects = await retrieveAllProjects();

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <section className="halftone mt-8 flex h-[85vh] w-full flex-col items-center justify-center gap-8 px-2 md:mt-0 md:h-[calc(100vh-14rem)] md:justify-start lg:flex-row-reverse lg:justify-center">
        <h1 className="max-w-[10ch] text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-8xl/28 md:font-semibold">
          <span className="bg-background box-decoration-clone px-4">
            {d.design.title._01}
            <br />
            <span className="font-thin tracking-widest text-slate-600">
              {d.design.title._02}
            </span>
            <span className="animate-caret-blink text-orange-600">.</span>
          </span>
        </h1>

        <div className="flex max-w-xs flex-col justify-center gap-4 py-8 md:py-0 lg:w-1/3">
          <p className="text-center font-[family-name:var(--font-geist-mono)] text-lg md:text-right md:text-2xl">
            <span className="bg-background p-1">{d.design.subtitle._01} </span>
            <span className="bg-orange-600 p-1">{d.design.subtitle._02}</span>
          </p>

          <span className="bg-background p-2 text-center md:w-max md:self-end">
            <a
              href="#featured-work"
              className="inline-block text-sm uppercase hover:underline hover:decoration-dotted"
            >
              {d.design.subtitle._03}
              <CircleArrowDown className="ml-2 inline" />
            </a>
          </span>
        </div>
      </section>

      {/* Divider */}
      <div
        className="border-foreground my-8 w-full scroll-mt-16 border-b-2 md:my-16"
        id="featured-work"
      />

      <section className="flex w-full flex-col flex-wrap md:flex-row">
        <div className="md:w-1/2 md:px-8 xl:w-1/3">
          <h2 className="mx-auto max-w-[12ch] text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-5xl/14 md:font-semibold">
            <span className="text-orange-600">(01)</span> / featured work
          </h2>
          {/* Divider */}
          <div className="border-foreground my-8 hidden w-full border-b-2 md:my-16 md:block" />

          <p className="py-8 text-center font-[family-name:var(--font-geist-mono)] md:py-0 md:text-left">
            We&apos;re dedicated to crafting{' '}
            <span className="bg-orange-600">distinctive visual identities</span>{' '}
            that speak to{' '}
            <em className="underline">the essence of each brand</em>.
          </p>
        </div>

        <div className="grid place-content-end gap-8 md:w-1/2 xl:w-2/3 xl:grid-cols-2">
          {projects?.map((project) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              title={project.title}
              year={project.year}
              country={project.country}
              thumbnail={project.thumbnail}
              blur={project.blur}
            />
          ))}

          {projects?.map((project) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              title={project.title}
              year={project.year}
              country={project.country}
              thumbnail={project.thumbnail}
              blur={project.blur}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-foreground my-8 w-full border-b-2 md:my-16" />

      <section className="flex w-full flex-col flex-wrap md:flex-row">
        <div className="md:w-1/2 md:px-8 xl:w-1/3">
          <h2 className="mx-auto max-w-[12ch] text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-5xl/14 md:font-semibold">
            <span className="text-orange-600">(2)</span> / what we do
          </h2>
          {/* Divider */}
          <div className="border-foreground my-8 hidden w-full border-b-2 md:my-16 md:block" />

          <div className="font-[family-name:var(--font-geist-mono)]">
            <p>
              We connect brands and users through pragmatic experiences, both in{' '}
              <span className="bg-orange-600">digital and analogue</span> media.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 xl:w-2/3">
          {d.design.services.map((item, index) => (
            <div
              key={item.label}
              className="border-b-foreground dark:border-b-muted border-b-solid flex flex-row flex-nowrap border-b py-8 last:border-b-0"
            >
              <div className="h-full pr-16 pl-4 text-xl font-medium text-orange-600/75">
                {`_0${index + 1}`}
              </div>

              <div className="max-w-xl">
                <h3 className="w-full pb-4 text-xl font-medium">
                  {item.label}
                </h3>
                <p className="text-muted-foreground w-full font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-foreground my-8 w-full border-b-2 md:my-16" />

      <section className="flex w-full flex-col flex-wrap md:flex-row">
        <div className="halftone px-8 md:w-1/2">
          <h1 className="py-16 text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-8xl/28 md:font-semibold">
            <span className="bg-background box-decoration-clone px-4">
              {d.design.hi}
            </span>
          </h1>
        </div>

        <div className="grid place-items-center md:w-1/2">
          <span>
            <p className="text-lg font-semibold">{d.design.tell}</p>
            <p className="text-lg">{d.design.collab}</p>

            <div className="border-foreground mt-4 w-min rounded-md border-2 px-2 pt-2">
              <ul className="inline-flex flex-row gap-4">
                <li>
                  <a
                    href="https://www.instagram.com/untitled.ds_/"
                    target="_blank"
                  >
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:edominguez.se@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/+5493512023227"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneOutgoing />
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
}
