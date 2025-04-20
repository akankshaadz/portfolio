import React from 'react';
import { motion } from 'framer-motion';
import { Award, AlignCenterVertical as Certificate, Medal } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  type: 'award' | 'certification' | 'badge';
  date: string;
  url?: string;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  type,
  date,
  url,
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

  const getIcon = () => {
    switch (type) {
      case 'award':
        return <Award className="text-yellow-500" />;
      case 'certification':
        return <Certificate className="text-blue-500" />;
      case 'badge':
        return <Medal className="text-green-500" />;
      default:
        return <Award className="text-yellow-500" />;
    }
  };

  return (
    <motion.div
      className="glass-card p-6"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start">
        <div className="p-3 bg-dark-400 rounded-lg mr-4">
          {getIcon()}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-light-300 mb-3">{date}</p>
          <p className="text-light-300 mb-3">{description}</p>
          
          {url && (
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-500 hover:text-accent-400 transition-colors"
            >
              View Certificate →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;