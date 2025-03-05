// import Image from "next/image";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 bg-zinc-950 px-8 pt-24 pb-8">
        <section className="h-auto flex flex-row radial-bg rounded-md">
          <div className="w-lg py-16">
            <h1 className="text-8xl font-bold">
              Designs that{' '}
              <span className="block rounded-md border bg-zinc-50 py-4 mt-4 pl-16 text-zinc-950">
                breathe.
              </span>
            </h1>

            <p className="max-w-[50ch] pt-8 font-medium text-zinc-50">
              We&apos;re dedicated to crafting distinctive visual identities
              that speak to the essence of each brand. We specialize in
              designing logos, typography, and other essential elements that
              help businesses stand out in a crowded market.
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
    </div>
  );
}
