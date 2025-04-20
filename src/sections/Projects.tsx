import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../components/SectionContainer';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product listings, shopping cart, and payment integration.",
      repoUrl: "https://github.com/bsirish/ecommerce-platform",
      demoUrl: "https://ecommerce-platform.example.com",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      personal: true
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates and team workflow features.",
      repoUrl: "https://github.com/bsirish/task-management",
      demoUrl: "https://task-management.example.com",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      imageUrl: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      personal: false
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with forecast data, location search, and visual weather representations.",
      repoUrl: "https://github.com/bsirish/weather-dashboard",
      demoUrl: "https://weather-dashboard.example.com",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      personal: true
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing skills, projects, and achievements with modern design principles.",
      repoUrl: "https://github.com/bsirish/portfolio",
      demoUrl: "https://bsirish.com",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      personal: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <SectionContainer id="projects" title="Projects">
      <p className="text-light-300 mb-10 max-w-3xl">
        Here are some of my notable projects. Each one represents my growth as a developer
        and showcases different skills and technologies I've worked with.
      </p>
      
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            repoUrl={project.repoUrl}
            demoUrl={project.demoUrl}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            personal={project.personal}
            index={index}
          />
        ))}
      </motion.div>
      
      <div className="mt-10 text-center">
        <a 
          href="https://github.com/bsirish"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-accent-500 hover:text-accent-400 font-medium"
        >
          View more projects on GitHub →
        </a>
      </div>
    </SectionContainer>
  );
};

export default Projects;