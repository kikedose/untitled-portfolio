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
      <div>
        <h2>{d.info.title}</h2>
        <p>{d.info.description}</p>
      </div>

      <div className="w-sm overflow-clip rounded-lg p-8 text-xl text-zinc-500">
        {[
          'visual identity',
          'editorial design',
          'creative consultancy',
          'naming',
          'web design',
        ].map((service) => (
          <span
            key={service}
            className="m-1 inline-block rounded-md border border-zinc-500 p-2 text-sm"
          >
            #{service.replaceAll(' ', '_')}
          </span>
        ))}
      </div>
    </div>
  );
}
