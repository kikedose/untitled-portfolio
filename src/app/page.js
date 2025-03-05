// import Image from "next/image";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 bg-zinc-950 px-8 pt-24 pb-8">
        <section className="h-auto">
          <div className="w-lg pb-16">
            <h1 className="text-8xl font-bold">Designs that breathe.</h1>
          </div>
        </section>

        <section className="h-auto rounded-lg bg-white">
          <div className="w-full p-8">
            <p className="w-[50ch] font-bold text-zinc-950">
              We&apos;re dedicated to crafting distinctive visual identities that
              speak to the essence of each brand. We specialize in designing
              logos, typography, and other essential elements that help
              businesses stand out in a crowded market.
            </p>

            <ul className='pt-16'>
              <li className="py-4">
                <Link
                  href="/work"
                  className="text-4xl font-bold text-zinc-950 hover:pl-8 transition-padding duration-200"
                >
                  Check out our work {'->'}
                </Link>
              </li>

              <li className="py-4">
                <a
                  href="mailto:edominguez.se@gmail.com"
                  rel="noopener noreferrer"
                  className="text-4xl font-bold text-zinc-950 hover:pl-8 transition-padding duration-200"
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
