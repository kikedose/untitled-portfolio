'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '~/lib/i18n';

const navLinks = (locale: Locale) =>
  [
    { href: `/${locale}/`, label: 'home' },
    { href: `/${locale}/work`, label: 'work' },
    { href: `/${locale}/contact`, label: 'contact' },
  ] as const;

export default function DesktopNavigationLinks({
  locale,
  labels,
}: {
  locale: Locale;
  labels: {
    home: string;
    work: string;
    contact: string;
  };
}) {
  const pathname = usePathname();

  const generateLinks = () => {
    Object.keys(labels).map((label) => ({ href: `/${locale}/${label}` }));
  };

  return (
    <>
      <span className="text-background bg-foreground px-2 font-[family-name:var(--font-geist-mono)] text-sm font-medium dark:font-semibold">
        Untitled Design_
      </span>

      {navLinks(locale).map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-primary hover:border-primary active:bg-primary/50 font-family-name:var(--font-geist-mono) rounded-md border-2 border-transparent px-3 py-2 text-sm capitalize transition-all duration-200 hover:border-2"
        >
          <span
            className={`before:content-["["] after:content-["]"] ${
              pathname.includes(link.label)
                ? 'before:text-rose-700 after:text-rose-700'
                : 'before:opacity-0 after:opacity-0'
            }`}
          >
            {labels[link.label]}
          </span>
        </Link>
      ))}
    </>
  );
}
