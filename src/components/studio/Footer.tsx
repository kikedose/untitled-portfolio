export default function Footer() {
  return (
    <footer className="align-center mb-4 flex w-full flex-col justify-center px-8">
      <div className="w-full rounded-md border-2 px-8 py-4 font-[family-name:var(--font-geist-mono)]">
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
          <li className="pt-8">Copyright © 2025 Untitled Design Graphique_</li>
        </ul>
      </div>
    </footer>
  );
}
