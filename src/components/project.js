import Image from 'next/image';
import Link from 'next/link';
import Carousel from './carousel';

export default function Project(props) {
  const { title, year, country, description, images, links } = props;

  return (
    <section className="flex h-auto w-full flex-col-reverse flex-nowrap rounded-lg border border-gray-50 md:h-120 md:flex-row">
      <div className="p-8 md:w-[50ch]">
        <h2 className="font-[family-name:var(--font-geist-mono)] text-2xl">
          {title}
        </h2>
        <h3 className="w-max bg-zinc-50 px-2 font-[family-name:var(--font-geist-mono)] text-zinc-950">{`${country}, ${year}`}</h3>
        <p className="pt-8">{description}</p>
        <ul className="pt-8">
          {links.map((link) => (
            <li key={link.url} className="pt-2">
              <Link
                href={link.url}
                className="font-[family-name:var(--font-geist-mono)] text-sm font-light hover:underline hover:decoration-dotted"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-clip rounded-r-md md:ml-auto z-1">
        <Carousel images={images} />
      </div>
    </section>
  );
}
