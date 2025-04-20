import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../components/SectionContainer';
import { Code, Trophy, Star, Users } from 'lucide-react';

interface PlatformProps {
  name: string;
  username: string;
  stats: { label: string; value: string }[];
  achievements: string[];
  icon: React.ReactNode;
  url: string;
  index: number;
}

const Platform: React.FC<PlatformProps> = ({
  name,
  username,
  stats,
  achievements,
  icon,
  url,
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
      className="glass-card hover:border-accent-600 transition-colors duration-300"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 border-b border-dark-400">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-dark-400 rounded-lg mr-4 text-accent-500">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-light-300">@{username}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-dark-400 p-3 rounded-lg">
              <p className="text-sm text-light-300 mb-1">{stat.label}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="flex items-center text-sm font-medium mb-3">
          <Trophy size={16} className="text-yellow-500 mr-2" />
          Notable Achievements
        </h4>
        <ul className="space-y-2 mb-4">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start">
              <Star size={16} className="text-accent-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-light-300 text-sm">{achievement}</span>
            </li>
          ))}
        </ul>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-2 border border-accent-600 text-accent-500 rounded-md hover:bg-accent-600/10 transition-colors"
        >
          View Profile
        </a>
      </div>
    </motion.div>
  );
};

const CompetitiveProgramming: React.FC = () => {
  const platforms = [
    {
      name: "LeetCode",
      username: "bsirish",
      stats: [
        { label: "Problems Solved", value: "350+" },
        { label: "Contest Rating", value: "1850" },
        { label: "Global Rank", value: "Top 5%" },
        { label: "Badges Earned", value: "8" }
      ],
      achievements: [
        "Solved all Top 100 Interview Problems",
        "Knight Badge in Weekly Contests",
        "Completed Dynamic Programming Study Plan",
        "Participated in 25+ contests with consistent performance"
      ],
      icon: <Code size={24} />,
      url: "https://leetcode.com/bsirish"
    },
    {
      name: "Codeforces",
      username: "bsirish",
      stats: [
        { label: "Rating", value: "1750" },
        { label: "Max Rating", value: "1823" },
        { label: "Division", value: "Div 2" },
        { label: "Contests", value: "30+" }
      ],
      achievements: [
        "Reached Expert status (blue)",
        "Solved 300+ problems across difficulty ranges",
        "Regular participant in Div 2 contests",
        "Top 100 in Educational Round #110"
      ],
      icon: <Users size={24} />,
      url: "https://codeforces.com/profile/bsirish"
    }
  ];

  return (
    <SectionContainer id="competitive" title="Competitive Programming">
      <p className="text-light-300 mb-10 max-w-3xl">
        I actively participate in competitive programming contests to sharpen my 
        problem-solving skills and algorithmic thinking. These platforms have helped 
        me develop a strong foundation in computer science concepts.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {platforms.map((platform, index) => (
          <Platform
            key={index}
            name={platform.name}
            username={platform.username}
            stats={platform.stats}
            achievements={platform.achievements}
            icon={platform.icon}
            url={platform.url}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-12 p-6 glass-card">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Trophy size={20} className="text-yellow-500 mr-2" />
          My Approach to Problem Solving
        </h3>
        <p className="text-light-300 mb-4">
          I approach competitive programming with a methodical strategy that has consistently helped me improve:
        </p>
        <ol className="space-y-3 text-light-300">
          <li className="flex items-start">
            <span className="bg-accent-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
            <span>Understanding the problem thoroughly before jumping into code</span>
          </li>
          <li className="flex items-start">
            <span className="bg-accent-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
            <span>Breaking down complex problems into smaller, manageable components</span>
          </li>
          <li className="flex items-start">
            <span className="bg-accent-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
            <span>Testing with edge cases to ensure solution robustness</span>
          </li>
          <li className="flex items-start">
            <span className="bg-accent-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
            <span>Optimizing for both time and space complexity</span>
          </li>
          <li className="flex items-start">
            <span className="bg-accent-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">5</span>
            <span>Learning from solutions after contests to expand my knowledge</span>
          </li>
        </ol>
      </div>
    </SectionContainer>
  );
};

export default CompetitiveProgramming;