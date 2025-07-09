// import ServiceList from '~/components/portfolio/ServiceList';
// import { CircleArrowDown, Instagram, Mail, PhoneOutgoing } from 'lucide-react';
// import { retrieveAllProjects } from '~/lib/queries';
import { getDictionary } from '~/lib/l10n';
import '~/styles/styles.css';

export default async function DesignStudio({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const d = await getDictionary('studio', locale);

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <section className="halftone flex w-full flex-col items-center gap-8 px-2 pt-16 pb-8 md:pb-16 lg:flex-row-reverse lg:py-24">
        <h1 className="mx-auto max-w-[12ch] text-center text-5xl/14 font-medium tracking-tighter md:mx-0 md:text-left md:text-8xl/28 md:font-semibold">
          <span className="bg-background box-decoration-clone px-4">
            {d.home.title}
            <span className="text-orange-600">_</span>
          </span>
        </h1>
      </section>

      {/* Divider */}
      <div className="border-foreground my-8 w-full scroll-mt-16 border-b-2 md:my-16" />
    </div>
  );
}
