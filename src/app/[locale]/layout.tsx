// 1. Next libraries
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';

// 2. Internationalization and Localization
import { type Locale, hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '~/i18n/routing';

// 3. Theme and styles
import { ThemeProvider } from '~/components/studio/ThemeProvider';
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'Untitled Design Studio',
  description: 'Web Portfolio',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`mx-auto max-w-[94rem] antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
