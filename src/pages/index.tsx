// components/Sidebar.tsx
import Sidebar from "@/components/SidebarComp";
import { useState } from "react";

// pages/_app.tsx
import type { AppProps } from "next/app";

export function MyApp({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="ml-64 w-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

// pages/index.tsx (Home Page)
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      style={{
        backgroundImage: "url(/back.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white bg-opacity-75 p-8 rounded-lg">
        <h1 className="text-4xl font-bold">
          Welcome to the University of Alabama AI Club
        </h1>
        <p className="mt-4">
          Join us to explore the future of Artificial Intelligence! Our club is
          dedicated to fostering a community of AI enthusiasts, providing
          opportunities for learning, collaboration, and innovation. Whether you
          are a beginner or an expert, we have something for everyone.
          Participate in workshops, hackathons, and guest lectures to enhance
          your skills and network with like-minded individuals. Let&apos;s shape
          the future of AI together!
        </p>
      </main>
    </div>
  );
}
