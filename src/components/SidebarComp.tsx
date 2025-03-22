import { X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="sm:hidden p-2 text-white bg-crimson fixed top-4 left-4 z-[999] rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Component */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-black to-crimson text-white flex flex-col items-center px-6 pt-8 pb-12 transition-transform duration-300 ease-in-out
      ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0 z-40 shadow-lg`}
      >
        {/* Logo & Title */}
        <div className="flex items-center justify-center space-x-2 mb-12 mt-20 sm:mt-4">
          <span className="text-2xl sm:text-3xl font-semibold tracking-wide">
            UA
          </span>
          <Image
            src="/a-icon.png"
            alt="AI"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-crimson text-3xl sm:text-4xl font-bold">I</span>
          <span className="text-2xl sm:text-3xl font-semibold tracking-wide">
            Club
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 w-full">
          {[
            { href: "/", label: "Home" },
            { href: "/events", label: "Events" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/resources", label: "Resources" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-lg sm:text-xl font-medium text-white hover:text-crimson transition duration-200 tracking-wide text-center"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
