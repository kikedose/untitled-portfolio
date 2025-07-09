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
    <div className="lg:h-[28rem] lg:w-[24rem]">
      <Link href={`/en/projects/${id}`} className="group">
        <Image
          className="rounded-lg transition-all duration-400 group-hover:opacity-50 hover:rounded-4xl"
          src={thumbnail}
          alt={title}
          width={384}
          height={384}
          placeholder="blur"
          blurDataURL={blur}
          priority={true}
          quality={80}
        />

        <h2 className="text-primary relative inline-block text-xl transition-colors duration-400 group-hover:text-orange-600">
          <span
            className="absolute left-[-0.5ch] hidden translate-y-[-1rem] opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 md:inline"
            aria-hidden
          >
            {'('}
          </span>
          <span>{title}</span>
          <span
            className="absolute right-[-0.5ch] hidden translate-y-[-1rem] opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 md:inline"
            aria-hidden
          >
            {')'}
          </span>
        </h2>

        <h3 className="text-primary-foreground bg-foreground w-max px-2 font-[family-name:var(--font-geist-mono)] text-sm transition-all duration-400 group-hover:bg-orange-200 group-hover:opacity-75">
          {country}, {year}
        </h3>
      </Link>
    </div>
  );
}
