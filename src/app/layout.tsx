import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bimbel Alfa',
  description: 'Mulai dari 90RB sudah bisa les di bimbel Alfa!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'font-display antialiased bg-dirtywhite'}>
        <main className="min-h-screen container max-w-lg mx-auto flex justify-center items-start relative shadow-2xl/30">
          {children}
        </main>
      </body>
    </html>
  );
}
