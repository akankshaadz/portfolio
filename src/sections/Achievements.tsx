import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../components/SectionContainer';
import AchievementCard from '../components/AchievementCard';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      description: "Comprehensive certification validating expertise in designing distributed systems on AWS.",
      type: "certification",
      date: "August 2023",
      url: "https://www.credly.com/badges/example"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      description: "Professional certification for designing and building data processing systems on Google Cloud.",
      type: "certification",
      date: "March 2023",
      url: "https://www.credential.net/example"
    },
    {
      title: "TensorFlow Developer Certificate",
      description: "Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems.",
      type: "certification",
      date: "November 2022",
      url: "https://www.tensorflow.org/certificate"
    }
  ];

  const awards = [
    {
      title: "Dean's Merit List",
      description: "Recognized for academic excellence by being placed on the Dean's Merit List for four consecutive semesters.",
      type: "award",
      date: "2021-2023"
    },
    {
      title: "Best Student Project Award",
      description: "Awarded for outstanding innovation and execution in the annual ECE department project showcase.",
      type: "award",
      date: "May 2022"
    },
    {
      title: "National Talent Scholarship",
      description: "Selected among top 1% of applicants for academic achievement and leadership potential.",
      type: "award",
      date: "2020-2024"
    }
  ];

  const badges = [
    {
      title: "5-Star HackerRank Problem Solver",
      description: "Achieved 5-star rating in Problem Solving, Data Structures, and Algorithms on HackerRank.",
      type: "badge",
      date: "2022-Present"
    },
    {
      title: "Microsoft Student Ambassador",
      description: "Selected to represent Microsoft technologies and foster tech communities on campus.",
      type: "badge",
      date: "2022-2023"
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
    <SectionContainer id="achievements" title="Achievements">
      <p className="text-light-300 mb-10 max-w-3xl">
        Here are some of my notable achievements, certifications, and recognitions
        that showcase my commitment to continuous learning and excellence.
      </p>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Certifications</h3>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certifications.map((cert, index) => (
            <AchievementCard
              key={index}
              title={cert.title}
              description={cert.description}
              type={cert.type as 'award' | 'certification' | 'badge'}
              date={cert.date}
              url={cert.url}
              index={index}
            />
          ))}
        </motion.div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Awards & Recognition</h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {awards.map((award, index) => (
            <AchievementCard
              key={index}
              title={award.title}
              description={award.description}
              type={award.type as 'award' | 'certification' | 'badge'}
              date={award.date}
              index={index}
            />
          ))}
        </motion.div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-6">Badges & Memberships</h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {badges.map((badge, index) => (
            <AchievementCard
              key={index}
              title={badge.title}
              description={badge.description}
              type={badge.type as 'award' | 'certification' | 'badge'}
              date={badge.date}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Achievements;