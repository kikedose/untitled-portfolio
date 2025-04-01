import Footer from '~/components/studio/Footer';
import Navigation from '~/components/studio/Navigation';
import ScrollProgress from '~/components/studio/ScrollProgress';

export default function StudioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="w-full px-8 md:pt-16">{children}</main>
      <Footer />
    </>
  );
}
