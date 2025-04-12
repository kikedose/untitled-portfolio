import { type Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '~/components/studio/ThemeProvider';
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'Untitled Design Studio_',
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

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {/* Radix <Dialog /> messes with the <body>'s padding in small viepowrts */}
          {/* Apply styles to wrapper instead of <body> */}
          <div
            id="#wrapper"
            className="mx-auto max-w-[94rem] px-4 antialiased md:px-8"
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
