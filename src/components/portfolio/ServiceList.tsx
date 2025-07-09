export default function ServiceList() {
  return (
    <div className="py-4 md:w-sm md:text-right">
      {[
        'visual identity',
        'creative consultancy',
        'naming',
        'ui/ux',
        'web design',
        'web app develpment',
      ].map((service) => (
        <span
          key={service}
          className="border-primary text-primary m-1 inline-block rounded-md border p-2 text-sm"
        >
          #{service.replaceAll(' ', '_')}
        </span>
      ))}
    </div>
  );
}
