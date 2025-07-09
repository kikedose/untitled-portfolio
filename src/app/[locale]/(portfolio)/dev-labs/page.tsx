import { CircleArrowDown } from 'lucide-react';
import { getDictionary } from '~/lib/l10n';
import '~/styles/styles.css';

export default async function DevelopmentLabs({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const d = await getDictionary('studio', locale);

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <section className="halftone mt-8 flex h-[85vh] w-full flex-col items-center justify-center gap-8 px-2 md:mt-0 md:h-[calc(100vh-14rem)] md:justify-start lg:flex-row-reverse lg:justify-center">
        <h1 className="max-w-[10ch] text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-8xl/28 md:font-semibold">
          <span className="bg-background box-decoration-clone px-4">
            <span className="text-rose-700">{'<'}</span>
            {d.dev.title._01}
            <span className="text-rose-700">{' />'}</span>
            {d.dev.title._02}
            <span className="animate-caret-blink text-teal-700">_</span>
          </span>
        </h1>

        <div className="flex max-w-xs flex-col justify-center gap-4 py-8 md:py-0 lg:w-1/3">
          <p className="text-center font-[family-name:var(--font-geist-mono)] text-lg md:text-right md:text-2xl">
            <span className="bg-background p-1">{d.dev.subtitle._01}</span>
            <span className="bg-teal-700 p-1">{d.dev.subtitle._02}</span>
            <span className="bg-background p-1">{d.dev.subtitle._03}</span>
            <span className="bg-teal-700 p-1">{d.dev.subtitle._04}</span>
          </p>

          <span className="bg-background p-2 text-center md:w-max md:self-end">
            <a
              href="#featured-work"
              className="inline-block text-sm uppercase hover:underline hover:decoration-dotted"
            >
              {d.dev.subtitle._05}
              <CircleArrowDown className="ml-2 inline" />
            </a>
          </span>
        </div>
      </section>

      {/* Divider */}
      <div className="border-foreground my-8 w-full border-b-2 md:my-16" />

      <section className="flex w-full flex-col flex-wrap md:flex-row">
        <div className="md:w-1/2 md:px-8 xl:w-1/3">
          <h2 className="mx-auto max-w-[12ch] text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-5xl/14 md:font-semibold">
            <span className="text-teal-700">(2)</span> / what we do
          </h2>
          {/* Divider */}
          <div className="border-foreground my-8 hidden w-full border-b-2 md:my-16 md:block" />

          <div className="font-[family-name:var(--font-geist-mono)]">
            <p>
              We connect brands and users through pragmatic experiences, both in{' '}
              <span className="bg-teal-700">digital and analogue</span> media.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 xl:w-2/3">
          <div className="grid h-full w-full place-items-center rounded-md border border-gray-700">
            YEET
          </div>
        </div>
      </section>
    </div>
  );
}
