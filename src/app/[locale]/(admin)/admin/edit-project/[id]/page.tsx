import { notFound } from 'next/navigation';
import { type Project } from '~/lib/types/admin/project';
import { mockData } from '~/lib/mockData';
import EditProjectForm from '~/components/admin/EditProjectForm';

async function getData(): Promise<Project[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData as Project[]);
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

  if (!currentProject) {
    notFound();
  }

  return (
    <>
      <EditProjectForm currentProject={currentProject} />
    </>
  );
}
