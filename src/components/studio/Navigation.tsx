import Link from 'next/link';
import LanguageSwitch from '~/components/studio/LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';

export default function Navigation() {
  return (
    <nav className="bg-background/50 z-50 hidden w-full max-w-[94rem] backdrop-blur-md md:fixed md:block">
      <div className="flex h-16 w-full items-center gap-4">
        <Link
          href="/"
          className="text-primary hover:border-primary active:bg-primary/50 rounded-md border-2 border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm transition-all duration-200 hover:border-2"
        >
          UNTITLED DESIGN STUDIO_
        </Link>

        <Link
          href="/web-labs"
          className="text-primary hover:border-primary active:bg-primary/50 rounded-md border-2 border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm transition-all duration-200 hover:border-2"
        >
          WEB LABS
        </Link>

        <Link
          href="/info"
          className="text-primary hover:border-primary active:bg-primary/50 rounded-md border-2 border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm transition-all duration-200 hover:border-2"
        >
          INFO
        </Link>

        <span className="ml-auto">
          <ThemeSwitch />
          &nbsp;
          <LanguageSwitch />
        </span>
      </div>
    </nav>
  );
}
