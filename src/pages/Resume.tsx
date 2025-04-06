import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto p-4"
    >
      <div className="flex justify-end mb-4">
        <a
          href="/resume.pdf"
          download
          className="px-4 py-2 bg-terminal-accent/10 rounded hover:bg-terminal-accent/20 transition-colors"
        >
          Download PDF
        </a>
      </div>

      <div 
        className="terminal-window min-h-[400px] h-[800px] resize overflow-hidden"
        style={{ resize: 'both' }}
      >
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-terminal-error" />
          <div className="w-3 h-3 rounded-full bg-terminal-warning" />
          <div className="w-3 h-3 rounded-full bg-terminal-accent" />
        </div>
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0"
          className="w-full h-[calc(100%-2rem)] border-0 bg-transparent"
          title="Resume PDF"
        />
      </div>
    </motion.div>
  );
};

export default Resume; 