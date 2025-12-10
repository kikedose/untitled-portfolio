import Footer from '~/components/footer';
import Navigation from '~/components/navigation';
import ScrollProgress from '~/components/scroll-progress';

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
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}
