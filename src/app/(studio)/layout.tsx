import Footer from '~/components/footer';
import Navigation from '~/components/navigation';

export default function StudioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <body className={`mx-auto max-w-[94rem] antialiased`}>
      <Navigation />
      <main className="w-full">{children}</main>
      <Footer />
    </body>
  );
}
