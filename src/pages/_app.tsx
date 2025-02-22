import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '@/components/SidebarComp';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}