// File: src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // ← THIS LINE IS CRITICAL
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import { Toaster } from 'sonner'; // Add this import

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
        <Toaster 
          position="top-right"
          expand={false}
          richColors
          closeButton
          toastOptions={{
            classNames: {
              toast: 'border border-gray-200 shadow-lg',
              title: 'font-semibold',
              description: 'text-gray-600',
              actionButton: 'bg-[#D4AF37] text-[#0A2540] font-bold',
              cancelButton: 'bg-gray-100 text-gray-700',
              error: 'border-red-200 bg-red-50',
              success: 'border-green-200 bg-green-50',
              warning: 'border-yellow-200 bg-yellow-50',
              info: 'border-blue-200 bg-blue-50',
              loading: 'border-gray-200 bg-white',
            }
          }}
        />
      </body>
    </html>
  );
}

