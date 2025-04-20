import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../components/SectionContainer';
import { Lightbulb, Cpu, Radio, Zap } from 'lucide-react';

interface AcademicProjectProps {
  title: string;
  description: string;
  tech: string[];
  learning: string;
  icon: React.ReactNode;
  index: number;
}

const AcademicProject: React.FC<AcademicProjectProps> = ({
  title,
  description,
  tech,
  learning,
  icon,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      ref={ref}
      className="glass-card p-6"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start">
        <div className="p-3 bg-dark-400 rounded-lg mr-4 text-accent-500">
          {icon}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-light-300 mb-3">{description}</p>
          
          <div className="mb-3">
            <h4 className="text-sm font-medium mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {tech.map((item, idx) => (
                <span 
                  key={idx} 
                  className="text-xs bg-dark-400 text-light-300 px-2 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">Key Learning:</h4>
            <p className="text-sm text-light-300 italic">{learning}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AcademicProjects: React.FC = () => {
  const projects = [
    {
      title: "IoT-Based Smart Home System",
      description: "Designed and implemented a smart home automation system using Arduino and Raspberry Pi.",
      tech: ["Arduino", "Raspberry Pi", "Python", "IoT Sensors"],
      learning: "Integration of hardware and software components in IoT applications.",
      icon: <Cpu size={24} />
    },
    {
      title: "Digital Signal Processing Application",
      description: "Developed an application for real-time audio processing and visualization.",
      tech: ["MATLAB", "DSP Algorithms", "C++"],
      learning: "Implementation of complex signal processing algorithms for real-time applications.",
      icon: <Radio size={24} />
    },
    {
      title: "Solar-Powered Battery Management System",
      description: "Created an efficient battery management system for solar power applications.",
      tech: ["Embedded Systems", "PCB Design", "Power Electronics"],
      learning: "Optimization techniques for power management in renewable energy systems.",
      icon: <Zap size={24} />
    },
    {
      title: "Machine Learning for Signal Quality Prediction",
      description: "Applied machine learning algorithms to predict signal quality in wireless communications.",
      tech: ["Python", "TensorFlow", "Signal Processing", "RF Engineering"],
      learning: "Application of ML techniques to solve complex engineering problems in telecommunications.",
      icon: <Lightbulb size={24} />
    }
  ];

  return (
    <SectionContainer id="academic" title="Academic Projects">
      <p className="text-light-300 mb-10 max-w-3xl">
        During my academic journey in Electronics and Communication Engineering, 
        I've worked on various projects that combine hardware and software expertise.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <AcademicProject
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            learning={project.learning}
            icon={project.icon}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default AcademicProjects;