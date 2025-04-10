import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  id: string;
  title: string;
  year: string;
  country: string;
  thumbnail: string;
};

export default function ProjectCard({
  id,
  title,
  year,
  country,
  thumbnail,
}: ProjectCardProps) {
  return (
    <div className="overflow-clip transition-all duration-200 hover:opacity-75 lg:h-[28rem] lg:w-[24rem]">
      <Link href={`/en/projects/${id}`}>
        <Image
          src={thumbnail}
          alt={title}
          width={384}
          height={384}
          priority
          className="object-cover"
        />

        <div className="pt-1">
          <h2 className="text-xl">{title}</h2>

          <h3 className="text-primary-foreground bg-foreground w-max px-2 font-[family-name:var(--font-geist-mono)] text-sm">
            {country}, {year}
          </h3>
        </div>
      </Link>
    </div>
  );
}
