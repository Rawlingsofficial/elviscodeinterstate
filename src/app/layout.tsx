// File: src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // ← THIS LINE IS CRITICAL
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elvisco De Interstate | Premium Coast-to-Coast Moving Services',
  description: 'Professional, reliable, and affordable moving services across the U.S.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

