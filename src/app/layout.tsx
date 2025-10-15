import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import { Audiowide, PT_Sans } from 'next/font/google';

const audiowide = Audiowide({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-audiowide',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Embera Kreatyve',
  description: 'A clean and minimal static showcase page created with Next.js and Firebase.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${audiowide.variable} ${ptSans.variable}`}>
      <head />
      <body className={cn('font-body antialiased min-h-screen bg-background')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
