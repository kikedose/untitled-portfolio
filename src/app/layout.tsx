import Footer from '~/components/footer';
import Navigation from '~/components/navigation';
import { Toaster } from '~/components/ui/sonner';
import '~/styles/globals.css';

import { type Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Untitled Design Studio',
  description: 'Web Portfolio',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`mx-auto max-w-[94rem] antialiased`}>
        <Navigation />
        <main className='w-full'>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
