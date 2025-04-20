import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  repoUrl?: string;
  demoUrl?: string;
  technologies: string[];
  imageUrl?: string;
  personal?: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  repoUrl,
  demoUrl,
  technologies,
  imageUrl,
  personal = false,
  index,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      className="card h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(126, 34, 206, 0.3)' }}
    >
      {imageUrl && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
          {personal && (
            <div className="absolute top-3 right-3 bg-accent-600 text-xs px-2 py-1 rounded-full">
              Personal Project
            </div>
          )}
        </div>
      )}
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-light">{title}</h3>
        <p className="text-light-300 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="text-xs bg-dark-400 text-light-300 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-3">
            {repoUrl && (
              <a 
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-light-300 hover:text-accent-500 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            
            {demoUrl && (
              <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-light-300 hover:text-accent-500 transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;