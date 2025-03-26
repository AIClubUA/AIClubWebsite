import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left: Logo & Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/web-app-manifest-192x192.png"
              alt="AI Club Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-semibold text-[#990000]">
              University of Alabama AI Club
            </span>
          </div>

          {/* Middle: Links */}
          <div className="flex flex-col space-y-2 sm:items-start items-center">
            <h4 className="font-medium text-gray-800">Quick Links</h4>
            <Link to="/about" className="hover:text-[#990000] transition">
              About
            </Link>
            <Link to="/events" className="hover:text-[#990000] transition">
              All Events
            </Link>
            <Link to="/projects" className="hover:text-[#990000] transition">
              Projects
            </Link>
            <Link to="/team" className="hover:text-[#990000] transition">
              Team
            </Link>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col space-y-2 sm:items-start items-center">
            <h4 className="font-medium text-gray-800">Contact</h4>
            <a
              href="mailto:crbarbaccia@crimson.ua.edu"
              className="hover:text-[#990000] transition"
            >
              sdhanegan@crimson.ua.edu
            </a>
            <a
              href="mailto:fjgutierez@ua.edu"
              className="hover:text-[#990000] transition"
            >
              fjgutierez@ua.edu
            </a>
            <p>University of Alabama, Tuscaloosa, AL</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} AI Club · University of Alabama. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
