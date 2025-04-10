import { type Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { retrieveProjectById } from '~/lib/queries';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = await retrieveProjectById(id);

  return {
    title: `${project?.title} | Untitled Design Studio_`,
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await retrieveProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="border border-red-500 md:pt-8">
      <div className="md:w-[50ch]">
        <h2 className="font-[family-name:var(--font-geist-mono)] text-2xl">
          {project.title}
        </h2>
        <h3 className="bg-foreground text-background w-max px-2 font-[family-name:var(--font-geist-mono)]">
          {project.country}, {project.year}
        </h3>

        <p className="pt-8 text-justify text-sm">{project.description}</p>

        <ul className="pt-8 font-[family-name:var(--font-geist-mono)]">
          {project.links.map((link) => (
            <Link
              className="font-[family-name:var(--font-geist-mono)] hover:underline hover:decoration-dotted"
              href={link.url}
              key={link.url}
              target="_blank"
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
