import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  id: string;
  title: string;
  year: string;
  country: string;
  thumbnail: string;
  blur: string;
};

export default function ProjectCard({
  id,
  title,
  year,
  country,
  thumbnail,
  blur,
}: ProjectCardProps) {
  return (
    <div className="overflow-clip lg:h-[28rem] lg:w-[24rem]">
      <Link href={`/en/projects/${id}`}>
        <Image
          className="transition-all duration-400 hover:rounded-lg hover:opacity-75"
          src={thumbnail}
          alt={title}
          width={384}
          height={384}
          placeholder="blur"
          blurDataURL={blur}
          priority={true}
          quality={80}
        />
      </Link>

      <div className="pt-1">
        <h2 className="text-xl">{title}</h2>

        <h3 className="text-primary-foreground bg-foreground w-max px-2 font-[family-name:var(--font-geist-mono)] text-sm">
          {country}, {year}
        </h3>
      </div>
    </div>
  );
}
