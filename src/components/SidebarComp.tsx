import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-black to-crimson text-white fixed top-0 left-0 p-4 flex flex-col items-center">
        <div className="flex items-center text-2xl font-bold mb-6">
          <span className="text-4xl">UA</span>
          <Image 
            src="/a-icon.png"  
            alt="AI" 
            width={60} 
            height={60} 
            style={{ marginLeft: '-5px' }} // Move the image 5 pixels to the left
          />
          <span className="text-crimson text-6xl">I </span>
          <span className="ml-2 text-4xl"> Club</span>
        </div>
      <nav className="flex flex-col space-y-4 w-full text-center mt-8">
        <Link href="/" className="text-3xl text-white hover:text-crimson transition duration-300">Home</Link>
        <Link href="/events" className="text-3xl text-white hover:text-crimson transition duration-300">Events</Link>
        <Link href="/about" className="text-3xl text-white hover:text-crimson transition duration-300">About</Link>
        <Link href="/projects" className="text-3xl text-white hover:text-crimson transition duration-300">Projects</Link>
        <Link href="/resources" className="text-3xl text-white hover:text-crimson transition duration-300">Resources</Link>
      </nav>
    </div>
  );
}