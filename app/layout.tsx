import { Navbar } from '@components';
import { Quicksand } from '@next/font/google';
import 'styles/globals.css';

const font = Quicksand({
  variable: '--font-primary',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={font.variable}>
      <head />
      <body className='pt-16 bg-gray-900 font-medium'>
        <Navbar />

        <main className='flex flex-col max-w-7xl w-full px-16 py-8'>
          {children}
        </main>
      </body>
    </html>
  );
}
