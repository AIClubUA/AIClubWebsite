import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '@/components/SidebarComp';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
