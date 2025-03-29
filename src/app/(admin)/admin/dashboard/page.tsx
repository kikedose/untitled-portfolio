import type { Project } from './columns';
import { columns } from './columns';
import { DataTable } from './data-table';

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
          id: '489e1d42',
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
