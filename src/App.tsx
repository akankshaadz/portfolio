import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import AcademicProjects from './sections/AcademicProjects';
import FreelanceWork from './sections/FreelanceWork';
import CompetitiveProgramming from './sections/CompetitiveProgramming';
import Hackathons from './sections/Hackathons';
import Achievements from './sections/Achievements';
import Teamwork from './sections/Teamwork';
import Extracurriculars from './sections/Extracurriculars';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const sections = document.querySelectorAll('section[id]');
        
        let currentSection = 'home';
        let minDistance = Infinity;
        
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const distance = Math.abs(sectionTop - 100); // Adjust the offset
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section.id;
          }
        });
        
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Reset scrolling status after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col bg-dark text-light overflow-x-hidden">
        <Header activeSection={activeSection} onNavClick={scrollToSection} />
        
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Projects />
          <AcademicProjects />
          <FreelanceWork />
          <CompetitiveProgramming />
          <Hackathons />
          <Achievements />
          <Teamwork />
          <Extracurriculars />
        </motion.main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;