import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';
import { getDictionary } from '~/lib/l10n';

export default async function Navigation({ locale }: { locale: 'en' | 'es' }) {
  const d = await getDictionary('studio', locale);

  return (
    <>
      {/* Set the md:px-N <body>'s max-w-N */}
      <nav className="fixed inset-x-0 top-0 z-50 md:px-8">
        {/* MOBILE NAVIGATION */}
        <div className="bg-background/20 flex w-full justify-between p-4 backdrop-blur-md md:hidden">
          <Link
            href={`/${locale}`}
          >
            <span className="text-background bg-foreground px-2 font-[family-name:var(--font-geist-mono)] text-sm font-medium dark:font-semibold">
              unttld_
            </span>
          </Link>

          <span>
            <Dialog>
              <DialogTrigger className="outline-none">[menu]</DialogTrigger>
              <DialogContent className="border-foreground dark:bg-background/40 bg-background/50 border-2 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="font-[family-name:var(--font-geist-mono)] text-sm font-semibold">
                    Untitled Design Studio_
                  </DialogTitle>
                </DialogHeader>

                {/* Accesibility-only, keep hidden */}
                <DialogDescription className="hidden">
                  Mobile Navigation Menu
                </DialogDescription>

                <ul className="text-center font-[family-name:var(--font-geist-mono)]">
                  <li className="py-2">
                    <Link href={`/${locale}`}>
                      {d.navigation.home} {'->'}
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href={`/${locale}/web-labs`}>
                      {d.navigation.web} {'->'}
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href={`/${locale}/info`}>
                      {d.navigation.info} {'->'}
                    </Link>
                  </li>
                  <li>
                    <span>
                      <ThemeSwitch />
                      &nbsp;
                      <LanguageSwitch />
                    </span>
                  </li>
                </ul>
              </DialogContent>
            </Dialog>
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        {/* Set the max-w to the <body>'s max-w-N minus the px-M */}
        <div className="bg-background/20 border-foreground mx-auto mt-4 hidden h-16 w-full max-w-[calc(94rem-64px)] items-center gap-4 rounded-md border-2 px-8 backdrop-blur-sm md:flex">
          <span className="text-background bg-foreground px-2 font-[family-name:var(--font-geist-mono)] text-sm font-medium dark:font-semibold">
            Untitled Design Studio_
          </span>
          <Link
            href={`/${locale}`}
            className="text-primary hover:border-primary active:bg-primary/50 rounded-md border-2 border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm capitalize transition-all duration-200 hover:border-2"
          >
            {d.navigation.home}
          </Link>

          <Link
            href={`/${locale}/web-labs`}
            className="text-primary hover:border-primary active:bg-primary/50 rounded-md border-2 border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm capitalize transition-all duration-200 hover:border-2"
          >
            {d.navigation.web}
          </Link>

          <Link
            href={`/${locale}/info`}
            className="text-primary hover:border-primary active:bg-primary/50 rounded-md border-2 border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm capitalize transition-all duration-200 hover:border-2"
          >
            {d.navigation.info}
          </Link>

          <span className="ml-auto">
            <ThemeSwitch />
            &nbsp;
            <LanguageSwitch />
          </span>
        </div>
      </nav>
    </>
  );
}
