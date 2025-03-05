import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Untitled Design Studio',
  description: 'Web Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto max-w-[1440px] antialiased`}
      >
        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
