import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="sm:hidden p-4 text-white bg-crimson fixed top-0 left-0 z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <div
        className={`flex flex-col items-center bg-gradient-to-b from-black to-crimson text-white p-6 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
        w-64 sm:w-80 h-full sm:relative fixed top-0 left-0 z-40`}
      >
        {/* Logo & Title */}
        <div className="flex items-center text-2xl sm:text-3xl font-bold mb-6 mt-20 sm:mt-0">
          <span className="text-3xl sm:text-4xl">UA</span>
          <Image
            src="/a-icon.png"
            alt="AI"
            width={60}
            height={60}
            className="ml-[-5px]"
          />
          <span className="text-crimson text-5xl sm:text-6xl">I</span>
          <span className="ml-2 text-3xl sm:text-4xl">Club</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 w-full text-center mt-8">
  <Link href="/" className="text-xl sm:text-2xl md:text-3xl hover:text-crimson transition duration-300">Home</Link>
  <Link href="/events" className="text-xl sm:text-2xl md:text-3xl hover:text-crimson transition duration-300">Events</Link>
  <Link href="/about" className="text-xl sm:text-2xl md:text-3xl hover:text-crimson transition duration-300">About</Link>
  <Link href="/projects" className="text-xl sm:text-2xl md:text-3xl hover:text-crimson transition duration-300">Projects</Link>
  <Link href="/resources" className="text-xl sm:text-2xl md:text-3xl hover:text-crimson transition duration-300">Resources</Link>
</nav>
      </div>
    </>
  );
}