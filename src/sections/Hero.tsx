import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter, Mail, ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const profileImgUrl = "https://media.licdn.com/dms/image/v2/D4E03AQGq2ftVrhA5GQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669746185994?e=1750896000&v=beta&t=pvf6JvJeSnQbv3oYpZztdOeLWnzMq-n_ODdbDAvjLvg";
  
  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/akankshaadz', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/22akanksha07/', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: 'https://x.com/KumariAkan19548', label: 'Twitter' },
    { icon: <Mail size={18} />, href: 'mailto:aakankshaakkumarii@gmail.com', label: 'Email' },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary-800/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-800/20 rounded-full blur-3xl -z-10"></div>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                Akanksha
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-6 text-light-200">
              <span className="text-light font-medium">Computer Science Engineer</span>
              <br />
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 2000,
                  'UI/UX Designer', 2000,
                  'Problem Solver', 2000,
                  'Creative Thinker', 2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-accent-500"
              />
            </h2>
            
            <p className="text-light-300 mb-8 max-w-md leading-relaxed">
              Passionate about creating intuitive and engaging user experiences. 
              Specialize in transforming ideas into beautifully crafted products.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="button-primary">
                <Download size={18} />
                Download Resume
              </button>
              <button className="button-outline" onClick={scrollToProjects}>
                View Projects
              </button>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-300 hover:bg-dark-200 rounded-full text-light-300 hover:text-accent-500 transition-all duration-300"
                  aria-label={link.label}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 relative z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1 animate-pulse-slow">
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                    <img 
                      src={profileImgUrl}
                      alt="Akanksha" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-dark-400 rounded-full border border-dark-300 z-0"></div>
              <div className="absolute bottom-0 left-0 -ml-8 -mb-2 w-16 h-16 bg-dark-400 rounded-full border border-dark-300 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <span className="text-light-300 text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} className="text-accent-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
