import { Toaster } from '~/components/ui/sonner';

export default function StudioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      {children}
      <Toaster />
    </main>
  );
}
