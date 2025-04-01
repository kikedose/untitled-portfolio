import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  year: number;
  country: string;
  image: string;
};

export default function ProjectCard({
  title,
  year,
  country,
  image,
}: ProjectCardProps) {
  return (
    <div className="overflow-clip transition-all duration-200 hover:opacity-75 lg:h-[28rem] lg:w-[24rem]">
      <Image
        src={image}
        alt={title}
        width={384}
        height={384}
        priority
        className="object-cover"
        quality={85}
      />

      <div className="pt-1 pl-2">
        <h2 className="text-xl">{title}</h2>

        <h3 className="text-primary-foreground w-max bg-foreground px-2 font-[family-name:var(--font-geist-mono)] text-sm">
          {country}, {year}
        </h3>
      </div>
    </div>
  );
}
