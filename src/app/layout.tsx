import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/sidebar-provider';
import { Sidebar } from '@/components/sidebar';
// import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'University of Alabama AI Club',
  description: 'Explore the future of Artificial Intelligence with the University of Alabama AI Club',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex justify-center min-h-screen min-w-screen bg-background">
            <Sidebar />
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
