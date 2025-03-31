export default function Footer() {
  return (
    <footer className="w-full p-8">
      <div className="rounded-md border border-zinc-50 p-4">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/untitled.dg/"
              target="_blank"
              className="hover:underline hover:decoration-dotted"
            >
              instagram {'->'}
            </a>
          </li>
          <li>
            <a
              href="mailto:edominguez.se@gmail.com"
              rel="noopener noreferrer"
              className="hover:underline hover:decoration-dotted"
            >
              email {'->'}
            </a>
          </li>
          <li>+54 9 351 202-3227</li>
          <li className="font-[family-name:var(--font-geist-mono)]">
            Copyright © 2025 Untitled Design Graphique_
          </li>
        </ul>
      </div>
    </footer>
  );
}
