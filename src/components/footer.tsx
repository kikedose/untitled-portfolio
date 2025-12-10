export default function Footer() {
  return (
    <footer className="border-primary my-8 w-full rounded-md border-2 p-4 md:px-8">
      <ul className="inline-flex flex-row gap-4">
        <li>
          <a
            className="cursor-pointer hover:underline hover:decoration-dotted"
            href="https://www.instagram.com/untitled.ds_/"
            target="_blank"
          >
            [instagram]
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline hover:decoration-dotted"
            href="mailto:edominguez.se@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            [mail]
          </a>
        </li>

        <li>
          <a
            className="cursor-pointer hover:underline hover:decoration-dotted"
            href="https://wa.me/+5493512023227"
            target="_blank"
            rel="noopener noreferrer"
          >
            [mobile]
          </a>
        </li>
      </ul>

      <div className="font-family-name:var(--font-geist-mono) pt-2">
        © Untitled Design Studio_ 2025
      </div>
    </footer>
  );
}
