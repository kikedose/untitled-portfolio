export default function Info() {
  return (
    <div>
      Info!
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
