import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../components/SectionContainer';
import { Award, Users, Clock, Lightbulb } from 'lucide-react';

interface HackathonProps {
  name: string;
  date: string;
  role: string;
  project: string;
  description: string;
  result?: string;
  teamSize: number;
  technologies: string[];
  index: number;
}

const Hackathon: React.FC<HackathonProps> = ({
  name,
  date,
  role,
  project,
  description,
  result,
  teamSize,
  technologies,
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
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="glass-card p-6 relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
    >
      {result && (
        <div className="absolute top-0 right-0 bg-accent-600 text-white px-4 py-1 transform rotate-45 translate-x-8 translate-y-3">
          {result}
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="sm:w-3/4">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className="flex items-center text-light-300 text-sm mb-4">
            <Clock size={16} className="mr-1" />
            <span>{date}</span>
          </div>
          
          <h4 className="font-medium mb-1">Project: {project}</h4>
          <p className="text-light-300 mb-4">{description}</p>
          
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
        </div>
        
        <div className="sm:w-1/4 flex flex-row sm:flex-col gap-4">
          <div className="flex-1 bg-dark-400 p-3 rounded-lg flex flex-col items-center justify-center">
            <Users size={20} className="text-accent-500 mb-1" />
            <p className="text-xs text-light-300">Team Size</p>
            <p className="font-semibold">{teamSize}</p>
          </div>
          
          <div className="flex-1 bg-dark-400 p-3 rounded-lg flex flex-col items-center justify-center">
            <Lightbulb size={20} className="text-accent-500 mb-1" />
            <p className="text-xs text-light-300">My Role</p>
            <p className="font-semibold text-center">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hackathons: React.FC = () => {
  const hackathons = [
    {
      name: "Apna College Hackathon",
      date: "April 2024",
      role: "Full-stack Developer",
      project: "EcoTrack",
      description: "Developed a real-time environmental monitoring system using IoT sensors that alerts authorities about pollution levels and potential violations.",
      result: "Qualified",
      teamSize: 4,
      technologies: ["React", "Node.js", "MongoDB", "IoT", "TensorFlow"]
    },
    {
      name: "Smart India Hackathon",
      date: "September 2024",
      role: "Hardware Integration Lead",
      project: "MedAssist",
      description: "Created a smart pill dispenser for elderly patients with medication reminders, dosage tracking, and caregiver notifications.",
      result: "Qualified",
      teamSize: 6,
      technologies: ["Arduino", "React Native", "Firebase", "3D Printing"]
    },
    // {
    //   name: "VIT Hackathon",
    //   date: "November 2022",
    //   role: "UI/UX Designer & Frontend",
    //   project: "CampusConnect",
    //   description: "Built a platform to facilitate resource sharing and collaboration between students across different colleges and universities.",
    //   teamSize: 3,
    //   technologies: ["Vue.js", "Firebase", "Figma", "TailwindCSS"]
    // }
  ];

  return (
    <SectionContainer id="hackathons" title="Hackathon Experiences">
      <p className="text-light-300 mb-10 max-w-3xl">
        Participating in hackathons has been a significant part of my learning journey, 
        allowing me to apply my skills in intensive, collaborative environments while 
        building innovative solutions to real-world problems.
      </p>
      
      <div className="space-y-6">
        {hackathons.map((hackathon, index) => (
          <Hackathon
            key={index}
            name={hackathon.name}
            date={hackathon.date}
            role={hackathon.role}
            project={hackathon.project}
            description={hackathon.description}
            result={hackathon.result}
            teamSize={hackathon.teamSize}
            technologies={hackathon.technologies}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-12 p-6 glass-card">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Award size={20} className="text-yellow-500 mr-2" />
          What I've Learned From Hackathons
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-400 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Time Management</h4>
            <p className="text-light-300 text-sm">
              Learned to prioritize features and manage development time effectively under tight deadlines.
            </p>
          </div>
          <div className="bg-dark-400 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Team Collaboration</h4>
            <p className="text-light-300 text-sm">
              Developed strong communication skills and learned to leverage team members' strengths.
            </p>
          </div>
          <div className="bg-dark-400 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Rapid Prototyping</h4>
            <p className="text-light-300 text-sm">
              Mastered the art of building functional prototypes quickly to demonstrate core concepts.
            </p>
          </div>
          <div className="bg-dark-400 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Presentation Skills</h4>
            <p className="text-light-300 text-sm">
              Improved ability to pitch ideas and demonstrate technical solutions effectively.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hackathons;