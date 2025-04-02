import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '~/server/db';

export async function generateMetadata() {
  return null;
}

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log({ id });

  const project = await db.query.projects.findFirst({
    where: (projects, { eq }) => eq(projects.id, id)
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="md:pt-32">
      <div className="p-8 md:w-[50ch]">
        <h2 className="font-[family-name:var(--font-geist-mono)] text-2xl">
          {project?.title}
        </h2>
        <h3 className="w-max bg-zinc-50 px-2 font-[family-name:var(--font-geist-mono)] text-zinc-950">
          Argentina, 2019
        </h3>

        <p className="pt-8">{project?.description}</p>

        <ul className="pt-8 font-[family-name:var(--font-geist-mono)]">
          {project?.links?.map((link) => (
            <Link
              className="font-[family-name:var(--font-geist-mono)] hover:underline hover:decoration-dotted"
              href={link.url}
              key={link.url}
            >
              <li>
                {link.text} {'->'}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
