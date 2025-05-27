import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Calendar, Brush, Info, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/map', name: 'Mapa', icon: <MapPin size={18} /> },
    { path: '/workshops', name: 'Talleres', icon: <Brush size={18} /> },
    { path: '/schedule', name: 'Horarios', icon: <Calendar size={18} /> },
    { path: '/information', name: 'Información', icon: <Info size={18} /> },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-purple-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center text-white font-bold text-xl"
            >
              <span className="bg-orange-500 px-2 py-1 rounded mr-2">Ciudad</span>
              <span className="bg-blue-500 px-2 py-1 rounded">Viva</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-purple-700 text-white'
                    : 'text-white hover:bg-purple-800'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}
            <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-800 transition-colors">
              <Globe size={18} className="mr-2" />
              ES / EN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-purple-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-purple-700 text-white'
                    : 'text-white hover:bg-purple-800'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}
            <button className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-800">
              <Globe size={18} className="mr-2" />
              ES / EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;