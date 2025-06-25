import Footer from '~/components/portfolio/Footer';
import Navigation from '~/components/portfolio/Navigation';
import ScrollProgress from '~/components/portfolio/ScrollProgress';

export default async function StudioLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: 'en' | 'es'; id?: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ScrollProgress />
      <Navigation locale={locale} />
      <main className="w-full pt-8 md:pt-32">{children}</main>
      <Footer />
    </>
  );
}
