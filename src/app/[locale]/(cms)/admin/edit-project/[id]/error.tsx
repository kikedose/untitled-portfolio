'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Server failed to fetch resources</p>
      <Link href="/admin/dashboard">Return Home</Link>
    </div>
  );
}
