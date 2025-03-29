export default async function Project({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;

  return (
    <div className="md:pt-32">
      <div className="p-8 md:w-[50ch]">
        <h2 className="font-[family-name:var(--font-geist-mono)] text-2xl">
          {title}
        </h2>
        <h3 className="w-max bg-zinc-50 px-2 font-[family-name:var(--font-geist-mono)] text-zinc-950">
          Argentina, 2019
        </h3>

        <p className="pt-8">
          Caos, a furniture design and architecture studio, required a robust
          wordmark adaptable to diverse print, digital, and physical
          applications. The design utilizes simplified, geometric forms to
          ensure precise and consistent engraving across a wide range of
          industrial materials, from wood and metal to resins and concrete.
        </p>

        <ul className="pt-8 font-[family-name:var(--font-geist-mono)]">
          <li className="pt-2">@caos.mobiliario {'->'}</li>
        </ul>
      </div>
    </div>
  );
}
