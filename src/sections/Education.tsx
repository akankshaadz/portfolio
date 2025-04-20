import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../components/SectionContainer';
import { School, BookOpen, GraduationCap } from 'lucide-react';

interface EducationCardProps {
  level: string;
  institute: string;
  year: string;
  percentage: string;
  icon: React.ReactNode;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({
  level,
  institute,
  year,
  percentage,
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
          <h3 className="text-lg font-semibold mb-2">{level}</h3>
          <p className="text-light-300 mb-1">{institute}</p>
          <p className="text-light-300 mb-1">Year: {year}</p>
          <p className="text-light-300 italic">Score: {percentage}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  const educationList = [
    {
      level: "Bachelor of Technology in Computer Science",
      institute: "Lovely Professional University, Punjab",
      year: "2022 - 2026",
      percentage: "Current CGPA: 7.2",
      icon: <GraduationCap size={24} />
    },
    {
      level: "Intermediate (Class 12)",
      institute: "Sri Vishwasanthi EM School, Andra Pradesh",
      year: "2021 - 2022",
      percentage: "74%",
      icon: <BookOpen size={24} />
    },
    {
      level: "Matriculation (Class 10)",
      institute: "Sri Vishwasanthi EM School, Andra Pradesh",
      year: "2019 - 2020",
      percentage: "86%",
      icon: <School size={24} />
    }
  ];

  return (
    <SectionContainer id="education" title="Education">
      <p className="text-light-300 mb-10 max-w-3xl">
        Here's a brief overview of my academic qualifications across different stages of my education.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationList.map((edu, index) => (
          <EducationCard
            key={index}
            level={edu.level}
            institute={edu.institute}
            year={edu.year}
            percentage={edu.percentage}
            icon={edu.icon}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Education;
