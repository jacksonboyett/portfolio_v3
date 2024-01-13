import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['300'] });

export const metadata: Metadata = {
  title: 'Jackson Boyett | Web Developer',
  description: 'Web developer and engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
