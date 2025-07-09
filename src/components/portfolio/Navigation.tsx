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
import DesktopNavigationLinks from './NavigationLinks';
import { getDictionary } from '~/lib/l10n';

export default async function Navigation({ locale }: { locale: 'en' | 'es' }) {
  const d = await getDictionary('studio', locale);

  return (
    <>
      {/* Set the md:px-N <body>'s max-w-N */}
      <nav className="fixed inset-x-0 top-0 z-50 md:px-8">
        {/* MOBILE NAVIGATION */}
        <div className="bg-background/20 flex w-full justify-between p-4 backdrop-blur-md md:hidden">
          <Link href={`/${locale}`}>
            <span className="text-background bg-foreground px-2 font-[family-name:var(--font-geist-mono)] text-sm font-medium dark:font-semibold">
              unttld_
            </span>
          </Link>

          <span>
            <span className="px-4">
              <ThemeSwitch />
              &nbsp;
              <LanguageSwitch />
            </span>

            <Dialog>
              <DialogTrigger className="outline-none">[menu]</DialogTrigger>
              <DialogContent className="border-foreground dark:bg-background/40 bg-background/65 border-2 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="font-[family-name:var(--font-geist-mono)] text-sm font-semibold">
                    Untitled Systems_
                  </DialogTitle>
                </DialogHeader>

                {/* Accesibility-only, keep hidden */}
                <DialogDescription className="hidden">
                  Mobile Navigation Menu
                </DialogDescription>

                <ul className="text-center font-[family-name:var(--font-geist-mono)]">
                  <li className="py-2">
                    <Link href={`/${locale}/design-studio`}>
                      {d.navigation.design} {'->'}
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href={`/${locale}/dev-labs`}>
                      {d.navigation.dev} {'->'}
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href={`/${locale}/info`}>
                      {d.navigation.info} {'->'}
                    </Link>
                  </li>
                </ul>
              </DialogContent>
            </Dialog>
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        {/* Set the max-w to the <body>'s max-w-N minus the px-M */}
        <div className="bg-background/20 border-foreground mx-auto mt-4 hidden h-16 w-full max-w-[calc(94rem-64px)] items-center gap-4 rounded-md border-2 px-8 backdrop-blur-sm md:flex">
          <DesktopNavigationLinks locale={locale} labels={d.navigation} />

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
