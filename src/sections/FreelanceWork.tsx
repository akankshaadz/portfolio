import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../components/SectionContainer';
import { User, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
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
      className="bg-dark-300/50 border border-dark-400 rounded-lg p-6 relative"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
    >
      <div className="absolute -top-4 left-6 bg-accent-600 p-2 rounded-full">
        <Quote size={20} />
      </div>
      <p className="text-light-300 italic mb-4 pt-2">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-dark-400 rounded-full flex items-center justify-center mr-3">
          <User size={18} className="text-light" />
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-light-300">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectItemProps {
  title: string;
  description: string;
  client: string;
  skills: string[];
  imageUrl?: string;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  client,
  skills,
  imageUrl,
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
      className="flex flex-col md:flex-row gap-6 glass-card p-6"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
    >
      {imageUrl && (
        <div className="w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
      )}
      
      <div className={`${imageUrl ? 'md:w-2/3' : 'w-full'}`}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-accent-500 mb-3">Client: {client}</p>
        <p className="text-light-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="text-xs bg-dark-400 text-light-300 px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FreelanceWork: React.FC = () => {
  const projects = [
    {
      title: "Restaurants website",
      description: "Completely revamped the user interface and checkout flow for an established online retailer, resulting in a 35% increase in conversion rate.",
      client: "Brew and Bites Cafe",
      skills: ["UI/UX Design", "React", "Shopify Integration", "Payment Gateway"],
      // imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rIcpAYAqgW_y_BSQUZTcyyx42h3HRj3hmnLaHkKvMFkLNUN0Bq_4-HaOnYgYaY65Hn0&usqp=CAU"
    },
    {
      title: "Custom Inventory Management System",
      description: "Developed a specialized inventory management system for a small manufacturing business to track materials, production status, and finished goods.",
      client: "CraftWorks Industries",
      skills: ["Full-stack Development", "Database Design", "Process Automation"],
      // imageUrl: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    // {
    //   title: "IoT Home Monitoring Application",
    //   description: "Created a mobile application that interfaces with custom IoT devices to monitor home energy usage, security, and environmental conditions.",
    //   client: "SmartHome Solutions",
    //   skills: ["Mobile Development", "IoT Integration", "Real-time Data", "Embedded Systems"],
    //   imageUrl: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // }
  ];

  const testimonials = [
    {
      quote: "Akanksha delivered our project on time and exceeded our expectations. Her design skills combined with technical knowledge gave us exactly what we needed.",
      author: "Verson",
      role: "UI Designer",
      company: "Brew and Bites"
    },
    {
      quote: "Working with Akanksha was a pleasure. She understood our unique requirements and delivered a system that has transformed our operations.",
      author: "Alok Shah",
      role: "UI Designer",
      company: "Verson"
    }
  ];

  return (
    <SectionContainer id="freelance" title="Freelance Work">
      <p className="text-light-300 mb-10 max-w-3xl">
        As an alternative to traditional internships, I've worked on several freelance projects
        that have allowed me to develop real-world skills while delivering value to clients.
      </p>
      
      <div className="space-y-8 mb-16">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            client={project.client}
            skills={project.skills}
            imageUrl={project.imageUrl}
            index={index}
          />
        ))}
      </div>
      
      <h3 className="text-xl font-semibold mb-6">Client Testimonials</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            company={testimonial.company}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FreelanceWork;