import ProjectCard from '~/components/portfolio/ProjectCard';
import { CircleArrowDown, Instagram, Mail, PhoneOutgoing } from 'lucide-react';
import { retrieveAllProjects } from '~/lib/queries';
import { getDictionary } from '~/lib/l10n';
import '~/styles/styles.css';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const d = await getDictionary('studio', locale);

  const projects = await retrieveAllProjects();

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <section className="halftone flex w-full flex-col items-center gap-8 px-2 pt-16 pb-8 md:pb-16 lg:flex-row-reverse lg:py-24">
        <h1 className="mx-auto max-w-[12ch] text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-8xl/28 md:font-semibold">
          <span className="bg-background box-decoration-clone px-4">
            {d.home.title}
          </span>
        </h1>

        <div className="flex max-w-xs flex-col justify-center py-8 md:py-0 lg:w-1/3">
          <p className="text-center font-[family-name:var(--font-geist-mono)] text-lg md:text-right md:text-2xl">
            <span className="bg-background p-1">{d.home.cta_01._01} </span>
            <span className="bg-lime-700 p-1">{d.home.cta_01._02}</span>
            <br />
            <br />
          </p>

          <span className="bg-background p-2 text-center md:w-max md:self-end">
            <a
              href="#featured-work"
              className="inline-block text-sm uppercase hover:underline hover:decoration-dotted"
            >
              {d.home.cta_01._03}
              <CircleArrowDown className="ml-2 inline" />
            </a>
          </span>
        </div>
      </section>

      {/* Divider */}
      <div className="border-foreground my-8 w-full scroll-mt-16 border-b-2 md:my-16" />

      <section className="flex w-full flex-col flex-wrap md:flex-row">
        <div className="md:w-1/2 md:px-8 xl:w-1/3">
          <h2 className="mx-auto max-w-[12ch] text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-5xl/14 md:font-semibold">
            Featured work
          </h2>
          {/* Divider */}
          <div className="border-foreground my-8 hidden w-full border-b-2 md:my-16 md:block" />

          <p className="py-8 text-center font-[family-name:var(--font-geist-mono)] md:py-0 md:text-left">
            We&apos;re dedicated to crafting{' '}
            <span className="bg-lime-700">distinctive visual identities</span>{' '}
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
            What we do
          </h2>
          {/* Divider */}
          <div className="border-foreground my-8 hidden w-full border-b-2 md:my-16 md:block" />

          <div className="font-[family-name:var(--font-geist-mono)]">
            <p>
              We connect brands and users through pragmatic experiences, both in{' '}
              <span className="bg-lime-700">digital and analogue</span> media.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 xl:w-2/3">
          <div className="float-right w-sm text-right">
            {[
              'visual identity',
              'creative consultancy',
              'naming',
              'ui/ux',
              'web design',
              'web app develpment',
            ].map((service) => (
              <span
                key={service}
                className="border-primary text-primary m-1 inline-block rounded-md border p-2 text-sm"
              >
                #{service.replaceAll(' ', '_')}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-foreground my-8 w-full border-b-2 md:my-16" />

      <section className="flex w-full flex-col flex-wrap md:flex-row">
        <div className="halftone px-8 md:w-1/2">
          <h1 className="py-16 text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-8xl/28 md:font-semibold">
            <span className="bg-background box-decoration-clone px-4">
              {d.home.hi}
            </span>
          </h1>
        </div>

        <div className="grid place-items-center md:w-1/2">
          <span>
            <p className="text-lg font-semibold">{d.home.tell}</p>
            <p className="text-lg">{d.home.collab}</p>

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
