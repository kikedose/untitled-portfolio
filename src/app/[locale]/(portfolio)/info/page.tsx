import ContactForm from '~/components/portfolio/ContactForm';
import ServiceList from '~/components/portfolio/ServiceList';
import { getDictionary } from '~/lib/l10n';

export default async function Info({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const d = await getDictionary('studio', locale);

  return (
    <div>
      <div className="pt-8 pb-8 md:pt-0">
        <h2 className="mx-auto max-w-[12ch] text-center text-3xl/12 font-medium tracking-tighter md:mx-0 md:text-left md:text-5xl/14 md:font-semibold">
          {d.info.title}
        </h2>

        <p className="max-w-lg py-8 text-center md:text-left">
          {d.info.description}
        </p>
      </div>

      <div className="border-foreground flex flex-col gap-4 rounded-md border-2 border-solid p-8 md:flex-row">
        <div className="grid place-items-center md:w-1/2">
          <div className="text-4xl md:w-sm md:text-right">
            Let&apos;s talk about your next project!
            <ServiceList />
          </div>
        </div>

        <div className="md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
