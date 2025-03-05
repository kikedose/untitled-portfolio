import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed z-50 min-w-screen backdrop-blur-md bg-zinc-950/50">
      <div className="pl-6 flex items-center justify-between h-16">
        <div className="flex items-baseline gap-4">
          <Link
            href="/"
            className="px-3 py-2 rounded-md text-sm font-[family-name:var(--font-geist-mono)] text-white border border-transparent hover:border-white"
          >
            UNTITLED DESIGN GRAPHIQUE_
          </Link>

          <Link
            href="/work"
            className="px-3 py-2 rounded-md text-sm font-[family-name:var(--font-geist-mono)] text-white border border-transparent hover:border-white"
          >
            OUR WORK
          </Link>
        </div>
      </div>
    </nav>
  );
}
