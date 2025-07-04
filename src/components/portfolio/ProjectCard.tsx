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
          className="rounded-lg transition-opacity duration-400 group-hover:opacity-50"
          src={thumbnail}
          alt={title}
          width={384}
          height={384}
          placeholder="blur"
          blurDataURL={blur}
          priority={true}
          quality={80}
        />

        <div className="pt-1">
          <h2 className="relative inline-block text-xl transition-colors duration-400 group-hover:text-orange-600">
            <span className="absolute -left-3 opacity-0 transition-opacity duration-400 group-hover:opacity-100 before:content-['(']"></span>
            {title}
            <span className="absolute -right-3 opacity-0 transition-opacity duration-400 group-hover:opacity-100 after:content-[')']"></span>
          </h2>

          <h3 className="text-primary-foreground bg-foreground w-max px-2 font-[family-name:var(--font-geist-mono)] text-sm">
            {country}, {year}
          </h3>
        </div>
      </Link>
    </div>
  );
}
