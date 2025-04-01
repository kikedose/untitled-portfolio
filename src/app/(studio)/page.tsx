// import Link from 'next/link';
// import '~/styles/pulse-gradient.css';
import ProjectCard from '~/components/studio/ProjectCard';
import { CircleArrowDown } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 font-[family-name:var(--font-geist-sans)]">
      <section className="grid h-[calc(100dvh-4rem)] w-full items-center">
        <span className="pb-8">
          <h1 className="w-min pb-8 text-6xl font-bold md:text-8xl">
            Designs that breathe.
          </h1>

          <div className="max-w-sm rounded-md border-2 border-primary p-4 font-[family-name:var(--font-geist-mono)] text-xl md:text-2xl">
            <h2>
              We&apos;re dedicated to crafting{' '}
              <span className="text-rose-700">
                distinctive visual identities{' '}
              </span>
              that speak to{' '}
              <span className="text-orange-300">
                the essence of each brand.{' '}
              </span>
              <a href="#projects" className="underline decoration-dotted">
                Check out our work
                <CircleArrowDown className="ml-2 inline" />
              </a>
            </h2>
          </div>
        </span>
      </section>

      <section
        className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-3"
        id="projects"
      >
        <ProjectCard
          title="Caos Mobiliario"
          year={2019}
          country="Argentina"
          image="https://hol0sh4bse.ufs.sh/f/t5f2s1J1pIMURWZ2xRv4RBWnZ0gTpC5SDMPyONmEIbkJQ8hL"
        />

        <ProjectCard
          title="Dark Matter"
          year={2022}
          country="Spain"
          image="https://hol0sh4bse.ufs.sh/f/t5f2s1J1pIMUCG1SvA3Kd5yarPLGAJ9Y6oDkjgQ8uvUic47S"
        />

        <ProjectCard
          title="Torre de Marfil"
          year={2023}
          country="Argentina"
          image="https://hol0sh4bse.ufs.sh/f/t5f2s1J1pIMUk468NXovisd4eyHTu7QobMqlNrJwaWLRzIS2"
        />

        <ProjectCard
          title="Caos Mobiliario"
          year={2019}
          country="Argentina"
          image="https://hol0sh4bse.ufs.sh/f/t5f2s1J1pIMURWZ2xRv4RBWnZ0gTpC5SDMPyONmEIbkJQ8hL"
        />

        <ProjectCard
          title="Dark Matter"
          year={2022}
          country="Spain"
          image="https://hol0sh4bse.ufs.sh/f/t5f2s1J1pIMUCG1SvA3Kd5yarPLGAJ9Y6oDkjgQ8uvUic47S"
        />

        <ProjectCard
          title="Torre de Marfil"
          year={2023}
          country="Argentina"
          image="https://hol0sh4bse.ufs.sh/f/t5f2s1J1pIMUk468NXovisd4eyHTu7QobMqlNrJwaWLRzIS2"
        />

        <ProjectCard
          title="Caos Mobiliario"
          year={2019}
          country="Argentina"
          image="https://hol0sh4bse.ufs.sh/f/t5f2s1J1pIMURWZ2xRv4RBWnZ0gTpC5SDMPyONmEIbkJQ8hL"
        />

        <ProjectCard
          title="Dark Matter"
          year={2022}
          country="Spain"
          image="https://hol0sh4bse.ufs.sh/f/t5f2s1J1pIMUCG1SvA3Kd5yarPLGAJ9Y6oDkjgQ8uvUic47S"
        />

        {/* {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            year={project.year}
            country={project.country}
            image={project.images[0]}
          />
        ))} */}

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
