import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-screen"
    >
      <div className="terminal-window h-[800px] min-h-[400px] resize overflow-hidden" style={{ resize: 'both' }}>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-terminal-error" />
          <div className="w-3 h-3 rounded-full bg-terminal-warning" />
          <div className="w-3 h-3 rounded-full bg-terminal-accent" />
        </div>
        <div className="code-block h-[calc(100%-2rem)]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-terminal-accent"></div>
            </div>
          ) : (
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0"
              className="w-full h-full border-0"
              style={{ backgroundColor: 'transparent' }}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Resume; 