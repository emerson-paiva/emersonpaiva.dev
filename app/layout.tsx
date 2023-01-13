export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <nav>Navbar</nav>
        {children}
      </body>
    </html>
  );
}
