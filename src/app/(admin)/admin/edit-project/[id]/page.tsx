import { notFound } from 'next/navigation';
import type { Project } from '~/lib/types/admin/project';
import EditProjectForm from '~/components/admin/EditProjectForm';

async function getData(): Promise<Project[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '728ed52f',
          title: 'Caos Mobiliario',
          country: 'Argentina',
          year: '2019',
          description: 'Lorem ipsum dolor sit amet.',
          hidden: false,
        },
        {
          id: '489e1d42',
          title: 'Sempreco',
          country: 'Argentina',
          year: '2018',
          description: 'Lorem ipsum dolor sit amet.',
          hidden: false,
        },
        {
          id: '591agd7f',
          title: 'Torre de Marfil',
          country: 'España',
          year: '2022',
          description: 'Lorem ipsum dolor sit amet.',
          hidden: true,
        },
      ]);
    }, 1000);
  });
}

export default async function EditProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getData();
  const currentProject = data.find((project) => project.id === id);
  console.log(currentProject);

  if (!currentProject) {
    notFound();
  }

  return (
    <>
      <EditProjectForm currentProject={currentProject} />
    </>
  );
}
