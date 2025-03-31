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
    <div className="overflow-clip rounded-lg bg-zinc-950 transition-all duration-200 hover:outline-2 hover:outline-zinc-50 md:h-[31rem] md:w-[24rem]">
      <Image
        src={image}
        alt={title}
        width={384}
        height={384}
        priority
        className="object-cover"
        quality={85}
      />

      <div className="p-4">
        <h2 className="text-2xl">{title}</h2>

        <h3 className="w-max bg-zinc-50 px-2 font-[family-name:var(--font-geist-mono)] text-zinc-950">
          {country}, {year}
        </h3>
      </div>
    </div>
  );
}
