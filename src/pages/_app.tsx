import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '@/components/SidebarComp';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-black text-white">
        <Sidebar />
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 min-h-screen ml-64">
        <div className="max-w-4xl mx-auto p-8">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
