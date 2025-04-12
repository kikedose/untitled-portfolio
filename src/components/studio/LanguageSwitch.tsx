'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const triggerLocaleSwitch = () => {
    const { locale = 'en' } = params as { locale?: string };
    const nextLocale = locale === 'en' ? 'es' : 'en';
    const href = pathname.replace(locale, nextLocale);

    router.replace(href);
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
