import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../components/SectionContainer';
import { Music, BookOpen, Globe, Heart } from 'lucide-react';

interface ActivityProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  period: string;
  details: string[];
  index: number;
}

const Activity: React.FC<ActivityProps> = ({
  title,
  description,
  icon,
  period,
  details,
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
      className="glass-card overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-dark-400 rounded-lg mr-4 text-accent-500">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-light-300 text-sm">{period}</p>
          </div>
        </div>
        
        <p className="text-light-300 mb-4">{description}</p>
        
        <ul className="space-y-1 mb-2">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-accent-500 mr-2">•</span>
              <span className="text-sm text-light-300">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Extracurriculars: React.FC = () => {
  const activities = [
    {
      title: "Music Production Club",
      description: "Co-founded and led the campus electronic music production club, organizing workshops and performances.",
      icon: <Music size={24} />,
      period: "2021 - Present",
      details: [
        "Taught music production basics to 20+ students",
        "Organized 3 campus-wide music events",
        "Released a collaborative EP featuring club members"
      ]
    },
    {
      title: "Technical Content Writer",
      description: "Contribute technical articles to engineering blogs and platforms about electronics and programming.",
      icon: <BookOpen size={24} />,
      period: "2022 - Present",
      details: [
        "Published 15+ articles on Medium and DEV.to",
        "Topics include embedded systems, web development, and IoT",
        "Built a following of 500+ readers"
      ]
    },
    {
      title: "Cultural Exchange Program",
      description: "Participated in a semester-long cultural exchange program with international engineering students.",
      icon: <Globe size={24} />,
      period: "Fall 2022",
      details: [
        "Collaborated with students from 5 different countries",
        "Shared technical knowledge and cultural perspectives",
        "Developed global communication skills"
      ]
    },
    {
      title: "Community Service",
      description: "Volunteer teaching basic programming and electronics to underprivileged students in local schools.",
      icon: <Heart size={24} />,
      period: "2023 - Present",
      details: [
        "Weekly 2-hour sessions with students aged 12-15",
        "Developed custom curriculum using affordable components",
        "Mentored 30+ students in basic coding skills"
      ]
    }
  ];

  const skillsGained = [
    "Leadership and initiative",
    "Creative problem-solving",
    "Public speaking and presentation",
    "Event organization",
    "Community building",
    "Cross-cultural communication",
    "Teaching and mentoring",
    "Time management"
  ];

  return (
    <SectionContainer id="extracurriculars" title="Beyond Academics">
      <p className="text-light-300 mb-10 max-w-3xl">
        My interests and activities extend beyond academics and coding. These extracurricular 
        pursuits have helped me develop a well-rounded perspective and transferable skills 
        that enhance my technical abilities.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {activities.map((activity, index) => (
          <Activity
            key={index}
            title={activity.title}
            description={activity.description}
            icon={activity.icon}
            period={activity.period}
            details={activity.details}
            index={index}
          />
        ))}
      </div>
      
      <div className="p-6 glass-card">
        <h3 className="text-xl font-semibold mb-4">Transferable Skills Gained</h3>
        <p className="text-light-300 mb-6">
          These extracurricular activities have helped me develop valuable skills that complement my technical expertise:
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsGained.map((skill, index) => (
            <div key={index} className="bg-dark-400 p-3 rounded-lg text-center">
              <p className="text-light-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Extracurriculars;