import { Instagram, Mail, PhoneOutgoing } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full p-8">
      <div className="rounded-md border border-zinc-50 p-4">
        <ul className="inline-flex flex-row gap-4">
          <li>
            <a href="https://www.instagram.com/untitled.dg/" target="_blank">
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="mailto:edominguez.se@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/+5493512023227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneOutgoing />
            </a>
          </li>
        </ul>

        <div className="pt-4 font-[family-name:var(--font-geist-mono)]">
          Copyright © 2025 Untitled Design Graphique_
        </div>
      </div>
    </footer>
  );
}
