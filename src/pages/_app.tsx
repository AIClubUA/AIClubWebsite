import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Sidebar from "@/components/SidebarComp";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 min-h-screen transition-all duration-300 sm:ml-64 overflow-y-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
