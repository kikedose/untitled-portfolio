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

export default function Navigation() {
  return (
    <>
      {/* Set the md:px-N <body>'s max-w-N */}
      <nav className="fixed inset-x-0 top-0 z-50 md:px-8">
        {/* MOBILE NAVIGATION */}
        <div className="bg-background/20 flex w-full justify-between p-4 backdrop-blur-md md:hidden">
          <span className="text-background bg-foreground px-2 font-[family-name:var(--font-geist-mono)] text-sm font-medium dark:font-semibold">
            unttld_
          </span>

          <span>
            <Dialog>
              <DialogTrigger className="outline-none">[menu]</DialogTrigger>
              <DialogContent className="border-foreground dark:bg-background/40 bg-background/50 border-2 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="font-[family-name:var(--font-geist-mono)] text-sm font-semibold">
                    Untitled Design Studio_
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="hidden">
                  Mobile Navigation Menu
                </DialogDescription>
                <ul className="text-center font-[family-name:var(--font-geist-mono)]">
                  <li className="py-2">
                    <Link href="/">HOME {'->'}</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/web-labs">WEB LABS {'->'}</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/info">INFO {'->'}</Link>
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
            href="/"
            className="text-primary hover:border-primary active:bg-primary/50 rounded-md border-2 border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm transition-all duration-200 hover:border-2"
          >
            HOME
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
    </>
  );
}
