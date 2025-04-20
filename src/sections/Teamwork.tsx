import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../components/SectionContainer';
import { Users, MessageSquare, GitBranch, PlayCircle } from 'lucide-react';

interface TeamProjectProps {
  title: string;
  description: string;
  role: string;
  team: string;
  learnings: string[];
  icon: React.ReactNode;
  index: number;
}

const TeamProject: React.FC<TeamProjectProps> = ({
  title,
  description,
  role,
  team,
  learnings,
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
        delay: i * 0.15,
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
    >
      <div className="flex items-start">
        <div className="p-3 bg-dark-400 rounded-lg mr-4 text-accent-500">
          {icon}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-light-300 mb-3">{description}</p>
          
          <div className="bg-dark-400 p-3 rounded-lg mb-4">
            <p className="text-sm font-medium">My Role: {role}</p>
            <p className="text-sm text-light-300">Team: {team}</p>
          </div>
          
          <h4 className="text-sm font-medium mb-2">Key Learnings:</h4>
          <ul className="space-y-1">
            {learnings.map((learning, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span className="text-sm text-light-300">{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Teamwork: React.FC = () => {
  const teamProjects = [
    {
      title: "Collaborative Research Paper",
      description: "Worked with a cross-disciplinary team to research and publish a paper on energy-efficient IoT networks.",
      role: "Research Assistant & Technical Writer",
      team: "3 ECE Students, 2 CS Students, 1 Faculty Advisor",
      learnings: [
        "Coordinating research efforts across different expertise areas",
        "Technical writing and academic publication standards",
        "Balancing theoretical research with practical implementations"
      ],
      icon: <Users size={24} />
    },
    {
      title: "Open Source Contribution",
      description: "Actively contributed to an open-source library for embedded systems development, focusing on power management modules.",
      role: "Code Contributor & Documentation",
      team: "Global distributed team of developers",
      learnings: [
        "Working with distributed version control in a large project",
        "Following coding standards and contribution guidelines",
        "Effective communication in asynchronous environments"
      ],
      icon: <GitBranch size={24} />
    },
    {
      title: "Engineering Design Competition",
      description: "Designed and built an autonomous waste sorting robot for the national engineering design competition.",
      role: "Electronics Lead & System Integration",
      team: "5 Engineering students from various disciplines",
      learnings: [
        "Hardware-software integration and troubleshooting",
        "Cross-discipline collaboration (Mechanical, Electronics, Software)",
        "Iterative design process and rapid prototyping"
      ],
      icon: <PlayCircle size={24} />
    },
    {
      title: "Peer Mentorship Program",
      description: "Led a peer mentorship initiative to help junior students with programming fundamentals and project guidance.",
      role: "Lead Mentor & Program Coordinator",
      team: "8 Mentors, 30+ Mentees",
      learnings: [
        "Developing teaching and explanation skills for technical concepts",
        "Managing a team of mentors and coordinating sessions",
        "Adapting teaching methods to different learning styles"
      ],
      icon: <MessageSquare size={24} />
    }
  ];

  return (
    <SectionContainer id="teamwork" title="Teamwork & Collaboration">
      <p className="text-light-300 mb-10 max-w-3xl">
        These experiences highlight my ability to work effectively in teams, 
        collaborate across disciplines, and contribute to shared goals. Each 
        project has taught me valuable lessons about communication, coordination, 
        and leveraging diverse perspectives.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamProjects.map((project, index) => (
          <TeamProject
            key={index}
            title={project.title}
            description={project.description}
            role={project.role}
            team={project.team}
            learnings={project.learnings}
            icon={project.icon}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-12 p-6 glass-card">
        <h3 className="text-xl font-semibold mb-4">My Collaboration Philosophy</h3>
        <p className="text-light-300 mb-6">
          I believe that the best results come from teams that balance individual expertise with collective effort. 
          My approach to teamwork is built on these key principles:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-dark-400 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Clear Communication</h4>
            <p className="text-light-300 text-sm">
              Sharing ideas, challenges, and progress transparently with all team members.
            </p>
          </div>
          <div className="bg-dark-400 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Respect for Expertise</h4>
            <p className="text-light-300 text-sm">
              Valuing each team member's unique skills and perspective.
            </p>
          </div>
          <div className="bg-dark-400 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Adaptability</h4>
            <p className="text-light-300 text-sm">
              Flexibility in adjusting approaches when challenges arise.
            </p>
          </div>
          <div className="bg-dark-400 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Shared Responsibility</h4>
            <p className="text-light-300 text-sm">
              Owning both successes and failures as a team.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Teamwork;