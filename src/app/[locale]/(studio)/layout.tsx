import Footer from '~/components/studio/Footer';
import Navigation from '~/components/studio/Navigation';
import ScrollProgress from '~/components/studio/ScrollProgress';

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
