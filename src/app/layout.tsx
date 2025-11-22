import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: "Wuraola's Portfolio",
  description: 'Portfolio for Wuraola Ogunmola, a cloud and DevOps professional.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
      </body>
    </html>
  );
}
