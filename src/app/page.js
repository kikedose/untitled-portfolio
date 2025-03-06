// import Image from "next/image";

import Link from 'next/link';

export default function Home() {
  return (
    <main className="radial-bg flex w-full flex-col gap-8 bg-zinc-950 md:px-8 md:pt-24 pb-8 font-[family-name:var(--font-geist-sans)]">
      <section className="px-8 flex h-auto w-full flex-row rounded-md">
        <div className="md:w-lg py-16">
          <h1 className="w-min text-6xl md:text-8xl font-bold">
            Designs that breathe.
          </h1>

          <p className="max-w-[50ch] pt-8 font-medium">
            We&apos;re dedicated to crafting distinctive visual identities that
            speak to the essence of each brand.
          </p>
        </div>
      </section>

      <section className="h-auto rounded-lg bg-white">
        <div className="w-full p-8">
          <ul className="">
            <li className="py-4">
              <Link
                href="/work"
                className="transition-padding text-4xl font-bold text-zinc-950 duration-200 hover:pl-8"
              >
                Check out our work {'->'}
              </Link>
            </li>

            <li className="py-4">
              <a
                href="mailto:edominguez.se@gmail.com"
                rel="noopener noreferrer"
                className="transition-padding text-4xl font-bold text-zinc-950 duration-200 hover:pl-8"
              >
                Tell us about your project! {'->'}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
