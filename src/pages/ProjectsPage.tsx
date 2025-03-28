import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useScrollToTop } from '../hooks/scrollTop';
import { projects } from '../data/projectsData';

const ProjectsPage = () => {
  useScrollToTop();

  const fullTitle = 'Our Projects';
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white text-gray-800 px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#990000] min-h-[3rem]">
          {typedTitle}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Discover what we've been building — from applied AI in healthcare to our own club infrastructure.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title.trim()}
            className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#990000] mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-[#990000]/10 text-[#990000] px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
