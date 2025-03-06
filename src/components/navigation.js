import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="z-50 hidden min-w-screen bg-zinc-950/50 backdrop-blur-md md:fixed md:block">
      <div className="flex h-16 items-center justify-between pl-6">
        <div className="flex items-baseline gap-4">
          <Link
            href="/"
            className="rounded-md border border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm text-white hover:border-white"
          >
            UNTITLED DESIGN GRAPHIQUE_
          </Link>

          <Link
            href="/work"
            className="rounded-md border border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm text-white hover:border-white"
          >
            OUR WORK
          </Link>
        </div>
      </div>
    </nav>
  );
}
