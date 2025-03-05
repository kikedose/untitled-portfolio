import Project from '@/components/project';
import { fetchProjects } from '@/xhr/utils';

export default async function Home() {
  const projects = await fetchProjects();
  console.log(projects);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 bg-zinc-950 px-8 pt-24 pb-8">
        <h1 className="text-8xl font-bold">Our Work</h1>

        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            year={project.year}
            country={project.country}
            description={project.description}
            images={project.images}
            links={project.links}
          />
        ))}
      </main>
    </div>
  );
}
