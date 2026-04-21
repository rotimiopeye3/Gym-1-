import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-sm transform -skew-x-12 flex items-center justify-center">
            <Dumbbell size={18} className="text-black transform skew-x-12" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">
            IronPulse
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" size="sm">
            Join Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-dark flex flex-col items-center justify-center gap-8 md:hidden z-[-1]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display uppercase font-black hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" size="lg" onClick={() => setIsOpen(false)}>
              Join Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
