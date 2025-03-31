import type { Project } from '~/lib/types/admin/project';
import { mockData } from '~/lib/mockData';
import { columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Project[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData as Project[]);
    }, 1000);
  });
}

export default async function Dashboard() {
  const data = await getData();

  return (
    <div>
      <div>Yeet</div>
      <DataTable columns={columns} data={data} />
      <div>Yeesh</div>
    </div>
  );
}
