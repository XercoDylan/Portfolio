import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import OptimizedImage from '../components/OptimizedImage';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demoLink?: string;
  gameLink?: string;
  category: 'web' | 'game' | 'app';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'The Floor is Lava',
    description: 'Floor is lava game where the player has to avoid lava by climbing high up',
    image: '/projects/lava.png',
    tech: ['Roblox Studio'],
    github: '',
    demoLink: 'https://www.roblox.com/games/12492690437/The-Floor-Is-Lava',
    gameLink: 'https://www.roblox.com/games/12492690437/The-Floor-Is-Lava',
    category: 'game'
  },
  {
    id: 2,
    title: 'Rage Ball',
    description: 'Rage Ball is a fast-paced arena game where players deflect a homing ball with swords to eliminate each other and be the last one standing.',
    image: '/projects/rageball.png',
    tech: ['Roblox Studio'],
    github: '',
    gameLink: 'https://www.roblox.com/games/15111490249/Rage-Ball',
    category: 'game'
  },
  {
    id: 3,
    title: 'Sword Royale',
    description: 'Battle royale styled game where players fight to be the last one standing',
    image: '/design/graphic-38.png',
    tech: ['Roblox Studio'],
    github: '',
    gameLink: 'https://www.roblox.com/games/14157726560/Sword-Royale',
    category: 'game'
  },
  {
    id: 4,
    title: 'Trade Protect RX',
    description: 'Trade Protect RX is An app that streamlines the ordering and delivery of personal protective equipment through TradeProtectRx, LLC.',
    image: '/projects/trade.png',
    tech: ['Xcode', 'Swift', 'SwiftUI', 'Firebase'],
    github: '',
    demoLink: 'https://apps.apple.com/us/app/trade-protect-rx/id6639664911',
    category: 'app'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'My portfolio website built with React, Next.js, and Tailwind CSS.',
    image: '/projects/portfolio.png',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    github: '',
    demoLink: 'xerco.org',
    category: 'web'
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '100px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="terminal-window overflow-hidden"
    >
      <div className="relative aspect-video bg-code-bg">
        {inView && (
          <OptimizedImage
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
      <div className="p-4">
        <div className="code-block">
          <p className="text-code-comment">// {project.title}</p>
          <p className="text-code-string mt-2">{project.description}</p>
          <div className="mt-4">
            <p className="text-code-comment">// Tech Stack</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-terminal-accent/10 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            {project.category !== 'game' && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-glow"
              >
                <span className="text-code-comment">// </span>
                View Code
              </a>
            )}
            {project.category === 'game' ? (
              project.gameLink && (
                <a
                  href={project.gameLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-glow"
                >
                  <span className="text-code-comment">// </span>
                  Play Game
                </a>
              )
            ) : (
              project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-glow"
                >
                  <span className="text-code-comment">// </span>
                  Live Demo
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'game' | 'app'>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto"
    >
      <div className="terminal-window mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-terminal-error" />
          <div className="w-3 h-3 rounded-full bg-terminal-warning" />
          <div className="w-3 h-3 rounded-full bg-terminal-accent" />
        </div>
        <div className="code-block">
          <p className="text-code-comment">// Project Portfolio</p>
          <p className="text-code-string mt-2">
            A collection of my web applications, games, and software projects
          </p>
        </div>
      </div>

      <div className="terminal-window mb-8">
        <div className="code-block">
          <p className="text-code-comment">// Filter by Category</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {(['all', 'web', 'game', 'app'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded ${
                  selectedCategory === category
                    ? 'bg-terminal-accent text-terminal-bg'
                    : 'hover-glow'
                }`}
              >
                <span className="text-code-comment">//</span>{' '}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="terminal-window p-8 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-terminal-accent"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 terminal-window"
      >
        <div className="code-block">
          <p className="text-code-comment">// Development Skills</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Full Stack Development',
              'Game Development',
              'Mobile Development',
              'UI/UX Design',
            ].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-terminal-accent/10 rounded text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects; 