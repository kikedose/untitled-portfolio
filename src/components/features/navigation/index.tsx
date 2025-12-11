import type { Locale } from '~/lib/i18n';
import LanguageSwitch from './language-switch';
import ThemeSwitch from './theme-switch';
import DesktopNavigationLinks from './nav-links';
import { getDictionary } from '~/lib/l10n';

export default async function Navigation({ locale }: { locale: Locale }) {
  const d = await getDictionary(locale);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      {/* DESKTOP NAVIGATION */}
      <div className="bg-background/20 border-foreground mx-auto flex h-16 w-full items-center gap-4 rounded-md border-2 px-8 backdrop-blur-sm">
        <DesktopNavigationLinks locale={locale} labels={d.navigation} />
        <span className="ml-auto">
          <ThemeSwitch />
          &nbsp;
          <LanguageSwitch />
        </span>
      </div>
    </nav>
  );
}
