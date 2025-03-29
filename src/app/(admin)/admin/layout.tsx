export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <nav>Admin Navigation</nav>
      <main>{children}</main>
      <footer>Admin Footer</footer>
    </div>
  );
}
