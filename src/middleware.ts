import { type NextRequest, NextResponse } from 'next/server';
import { parseAcceptLanguage, findBestLocaleMatch } from './lib/utils';
import { supportedLocales, defaultLocale } from './lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check if there is any supported locale in the pathname
  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Using undefined signals Next.js to continue without rewrite/redirect
  if (pathnameHasLocale) return undefined;

  // 2. If no locale is present, detect the best locale and redirect
  // Get the Accept-Language header
  const acceptLanguageHeader = request.headers.get('accept-language');

  // Parse the header to get preferred languages
  const preferredLanguages = parseAcceptLanguage(acceptLanguageHeader);

  // Find the best match among supported locales
  const matchedLocale = findBestLocaleMatch(
    preferredLanguages,
    supportedLocales,
    defaultLocale
  );

  // Construct the new URL with the detected locale
  // It's safer to clone the URL object before modifying it
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${matchedLocale}${pathname}`;

  // Redirect to the new URL (e.g., /projects/[id] -> /en/projects/[id] or /es/projects/[id])
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

