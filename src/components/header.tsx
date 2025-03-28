import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const goToEventsSection = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('events');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTarget: 'events' } });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Club Name */}
          <a href="/" className="flex items-center space-x-3">
            <img src="/web-app-manifest-192x192.png" alt="Club Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-gray-800">AI Club</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>

            <button onClick={goToEventsSection} className="hover:text-blue-600 transition cursor-pointer">
              Events
            </button>

            <Link to="/projects" className="hover:text-blue-600 transition">
              Projects
            </Link>
            <Link to="/team" className="hover:text-blue-600 transition">
              Team
            </Link>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/80 backdrop-blur-md shadow-md w-full text-gray-700 font-medium"
          >
            <div className="flex flex-col items-center space-y-3 px-4 py-4">
              <Link to="/about" className="hover:text-blue-600 transition">
                About
              </Link>

              <button onClick={goToEventsSection} className="hover:text-blue-600 transition">
                Events
              </button>

              <a href="#projects" className="hover:text-blue-600">
                Projects
              </a>
              <Link to="/team" className="hover:text-blue-600 transition">
                Team
              </Link>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
