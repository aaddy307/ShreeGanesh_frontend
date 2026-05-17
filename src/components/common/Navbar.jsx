import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`bg-navy text-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : 'shadow-lg'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-xl hover:scale-105 transition-transform">
              SG
            </div>
            <span className="text-xl font-bold hidden sm:block">Shree Ganesh Enterprises</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium hover:text-accent transition-all duration-200 relative ${
                  isActive(link.path) ? 'text-accent' : 'text-gray-300'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-200 ${isActive(link.path) ? 'w-full' : 'w-0 hover:w-full'}`} />
              </Link>
            ))}
            {user && (
              <Link
                to="/admin/dashboard"
                className="text-sm font-medium text-accent hover:text-orange-400 transition-colors"
              >
                Admin
              </Link>
            )}
          </div>

          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 px-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-200 ${
                  isActive(link.path) ? 'text-accent bg-white/5' : 'text-gray-300'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            {user && (
              <Link
                to="/admin/dashboard"
                className="block py-3 px-2 text-sm font-medium text-accent hover:bg-white/10 rounded-lg transition-all"
              >
                Admin Panel
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;