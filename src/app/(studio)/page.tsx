// import Link from 'next/link';
import ProjectCard from '~/components/studio/ProjectCard';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 bg-zinc-950 font-[family-name:var(--font-geist-sans)]">
      <section className="w-full">
        <h1 className="w-min text-6xl font-bold md:text-8xl">
          Designs that breathe.
        </h1>
      </section>

      <section className="flex w-full flex-wrap justify-end gap-4">
        {/* <div className="overflow-clip rounded-lg bg-zinc-950 p-8 text-5xl md:h-[31rem] md:w-[24rem]">
          <h2>
            We&apos;re dedicated to crafting{' '}
            <span className="text-rose-700">distinctive visual identities</span>{' '}
            that speak to{' '}
            <span className="text-orange-300">the essence of each brand</span>.
          </h2>
        </div> */}

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

        <div className="w-sm overflow-clip rounded-lg p-8 text-xl text-zinc-50">
          {[
            'visual identity',
            'editorial design',
            'creative consultancy',
            'naming',
            'web design',
          ].map((service) => (
            <span
              key={service}
              className="m-1 inline-block rounded-md border border-zinc-50 bg-zinc-950 p-2"
            >
              {service}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
