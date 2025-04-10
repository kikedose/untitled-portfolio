import { type Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="flex flex-col pt-16 md:flex-row md:flex-wrap">
      <div className="md:w-1/2">
        <h2 className="font-[family-name:var(--font-geist-mono)] text-2xl">
          {project.title}
        </h2>
        <h3 className="bg-foreground text-background w-max px-2 font-[family-name:var(--font-geist-mono)]">
          {project.country}, {project.year}
        </h3>

        <p className="pt-8 md:max-w-[50ch]">{project.description}</p>

        <ul className="pt-8 font-[family-name:var(--font-geist-mono)]">
          {project.links.map((link) => (
            <Link href={link.url} key={link.url} target="_blank">
              <li className="font-[family-name:var(--font-geist-mono)] text-sm hover:underline hover:decoration-dotted">
                {link.text} {'->'}
              </li>
            </Link>
          ))}
        </ul>

        {/* Divider */}
        <div className="border-foreground my-16 w-full border-b-2 text-xl md:text-2xl" />
      </div>

      <div className="md:w-1/2 md:px-4">
        {project.images.map((image, index) => (
          <Image
            className="py-4"
            src={image.url}
            alt={image.alt}
            key={image.url}
            width={720}
            height={900}
            quality={100}
            priority={!index}
          />
        ))}
      </div>
    </div>
  );
}
