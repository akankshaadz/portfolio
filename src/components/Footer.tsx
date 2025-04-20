import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/akankshaadz', 
      label: 'GitHub' 
    },
    { 
      icon: <Linkedin size={20} />, 
      href: 'https://www.linkedin.com/in/22akanksha07/', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Twitter size={20} />, 
      href: 'https://x.com/KumariAkan19548', 
      label: 'Twitter' 
    },
    { 
      icon: <Mail size={20} />, 
      href: 'mailto:aakankshaakkumarii@gmail.com', 
      label: 'Email' 
    },
  ];

  return (
    <footer className="bg-dark-400 border-t border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-light mb-2">Akanksha</h2>
            <p className="text-light-300 max-w-md">
              Computer Science Engineer.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center md:text-right">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-300 hover:bg-dark-200 rounded-full text-light-300 hover:text-accent-500 transition-all duration-300"
                  aria-label={link.label}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-dark-300 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-light-300 text-sm">
            © {currentYear} Akanksha. All rights reserved.
          </p>
          
          <div className="mt-4 sm:mt-0 text-sm text-light-300 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> and React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;