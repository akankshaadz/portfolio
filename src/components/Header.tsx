import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';

interface NavLink {
  id: string;
  label: string;
}

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'academic', label: 'Academic' },
  { id: 'freelance', label: 'Freelance' },
  { id: 'competitive', label: 'Competitive' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'achievements', label: 'Achievements' },
];

const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
          setIsMobileMenuOpen(false);
        }
      };
      
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);
  
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleNavClick = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Dark mode is the default, so no actual functionality needed
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-300/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 font-mono font-bold text-xl text-accent-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-light">AK   </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="button-outline text-sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download size={16} />
              Resume
            </button>
            
            <button 
              className="p-2 rounded-full bg-dark-400 hover:bg-dark-300 transition-colors"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              className="p-2 rounded-full bg-dark-400 hover:bg-dark-300 transition-colors"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              className="menu-button p-2 rounded-md text-light-300 hover:bg-dark-400 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div 
        className={`mobile-menu md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-4 bg-dark-300/90 backdrop-blur-lg border-t border-dark-400 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`py-3 px-4 rounded-md ${
                  activeSection === link.id 
                    ? 'bg-accent-500/10 text-accent-500' 
                    : 'text-light-300 hover:bg-dark-400'
                } transition-colors`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
            <button
              className="mt-2 py-3 px-4 text-accent-500 border border-accent-500 rounded-md flex items-center justify-center gap-2"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download size={16} />
              Download Resume
            </button>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;