import Link from 'next/link';
import ProjectCard from '~/components/studio/ProjectCard';
import {
  CircleArrowDown,
  CircleArrowRight,
  Instagram,
  Mail,
  PhoneOutgoing,
} from 'lucide-react';
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
    <div className="flex flex-col justify-center font-[family-name:var(--font-geist-sans)] md:justify-start">
      <section className="halftone w-full px-2 pb-8 md:pl-8">
        <h1 className="mx-auto max-w-[12ch] py-16 text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-8xl/28 md:font-semibold">
          <span className="bg-background box-decoration-clone px-4">
            {d.home.title}
          </span>
        </h1>

        <div className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="bg-background border-primary max-w-sm rounded-md border-2 p-4 font-[family-name:var(--font-geist-mono)]">
            <p className="text-center text-lg md:text-left md:text-xl">
              {d.home.cta_01._01}{' '}
              <span className="text-teal-700">{d.home.cta_01._02}</span>
              <br />
              <Link
                href={`${locale}/web-labs`}
                className="inline-block pt-4 underline decoration-dotted"
              >
                {d.home.cta_01._03}
                <CircleArrowRight className="ml-2 inline" />
              </Link>
            </p>
          </div>

          <div className="bg-background border-primary max-w-sm rounded-md border-2 p-4 font-[family-name:var(--font-geist-mono)]">
            <p className="text-center text-lg md:text-left md:text-xl">
              {d.home.cta_02._01}{' '}
              <span className="text-rose-700">{d.home.cta_02._02} </span>
              {d.home.cta_02._03}{' '}
              <span className="text-orange-300">{d.home.cta_02._04} </span>
              <br />
              <span className="pt-4">
                <a
                  href={`${locale}/web-labs`}
                  className="inline-block pt-4 underline decoration-dotted"
                >
                  {d.home.cta_02._05}
                  <CircleArrowDown className="ml-2 inline" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-foreground my-16 w-full border-b-2 text-xl md:text-2xl" />

      <section className="flex w-full justify-center" id="projects">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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

      {/* Divider */}
      <div className="border-foreground my-16 w-full border-b-2 text-xl md:text-2xl" />

      <section className="flex flex-col flex-wrap py-16 md:flex-row">
        <div className="halftone px-8 md:w-2/4">
          <h1 className="py-16 text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-8xl/28 md:font-semibold">
            <span className="bg-background box-decoration-clone px-4">
              {d.home.hi}
            </span>
          </h1>
        </div>

        <div className="grid place-items-center md:w-2/4">
          <span>
            <p className="text-lg font-semibold">{d.home.tell}</p>
            <p className="text-lg">{d.home.collab}</p>

            <div className="border-foreground mt-4 w-min rounded-md border-2 p-2">
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
