'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const triggerLocaleSwitch = () => {
    const nextLocale = params.locale === 'en' ? 'es' : 'en';

    console.log({
      pathname,
      params,
    });
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
