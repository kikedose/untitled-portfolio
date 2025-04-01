'use client';

// import clsx from 'clsx';
import { useParams } from 'next/navigation';
// import { Locale } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '~/i18n/navigation';

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const triggerLocaleSwitch = () => {
    const nextLocale = params.locale === 'en' ? 'es' : 'en';

    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <button
      onClick={triggerLocaleSwitch}
      className="hover:underline hover:decoration-dotted"
    >
      [{params.locale}]
    </button>
  );
}
