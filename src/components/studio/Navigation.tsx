import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="z-50 hidden min-w-screen bg-zinc-950/50 backdrop-blur-md md:fixed md:block">
      <div className="flex h-16 items-center justify-between pl-6">
        <div className="flex items-baseline gap-4">
          <Link
            href="/"
            className="rounded-md border border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm text-zinc-50 transition-all duration-200 hover:border hover:border-zinc-50 active:bg-zinc-50/50"
          >
            UNTITLED DESIGN STUDIO_
          </Link>

          <Link
            href="/web-labs"
            className="rounded-md border border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm text-zinc-50 transition-all duration-200 hover:border hover:border-zinc-50 active:bg-zinc-50/50"
          >
            WEB LABS
          </Link>

          <Link
            href="/contact"
            className="rounded-md border border-transparent px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm text-zinc-50 transition-all duration-200 hover:border hover:border-zinc-50 active:bg-zinc-50/50"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
