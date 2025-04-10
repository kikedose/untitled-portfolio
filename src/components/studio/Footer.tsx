import { Instagram, Mail, PhoneOutgoing } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-primary w-full rounded-md border-2 p-4 my-8">
      <ul className="inline-flex flex-row gap-4">
        <li>
          <a href="https://www.instagram.com/untitled.ds_/" target="_blank">
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

      <div className="pt-2 font-[family-name:var(--font-geist-mono)]">
        Copyright © 2025 Untitled Design Studio_
      </div>
    </footer>
  );
}
