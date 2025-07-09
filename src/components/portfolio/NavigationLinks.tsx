'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = (locale: 'en' | 'es') =>
  [
    { href: `/${locale}/design-studio`, label: 'design' },
    { href: `/${locale}/dev-labs`, label: 'dev' },
    { href: `/${locale}/info`, label: 'info' },
  ] as const;

export default function DesktopNavigationLinks({
  locale,
  labels,
}: {
  locale: 'en' | 'es';
  labels: {
    home: 'Home';
    design: 'Design Studio';
    dev: 'Development Labs';
    info: 'Info';
  };
}) {
  const pathname = usePathname();

  return (
    <>
      <Link href={`/${locale}`}>
        <span className="text-background bg-foreground px-2 font-[family-name:var(--font-geist-mono)] text-sm font-medium hover:opacity-75 dark:font-semibold">
          Untitled Systems_
        </span>
      </Link>

      {navLinks(locale).map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-primary hover:border-primary active:bg-primary/50 rounded-md border-2 border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm capitalize transition-all duration-200 hover:border-2"
        >
          <span
            className={`before:content-["["] after:content-["]"] ${
              pathname.includes(link.label)
                ? 'before:text-rose-500 after:text-rose-500'
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
