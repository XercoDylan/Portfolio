import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto"
    >
      <div className="terminal-window mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-terminal-error" />
            <div className="w-3 h-3 rounded-full bg-terminal-warning" />
            <div className="w-3 h-3 rounded-full bg-terminal-accent" />
          </div>
          <a
            href="/resume.pdf"
            download
            className="hover-glow"
          >
            <span className="text-code-comment">// </span>
            Download PDF
          </a>
        </div>
        <div className="code-block">
          <p className="text-code-comment">// Resume</p>
          <p className="text-code-string mt-2">
            View and download my resume
          </p>
        </div>
      </div>

      <div className="terminal-window h-[800px] resize overflow-hidden" style={{ resize: 'both' }}>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-terminal-error" />
          <div className="w-3 h-3 rounded-full bg-terminal-warning" />
          <div className="w-3 h-3 rounded-full bg-terminal-accent" />
        </div>
        <div className="code-block h-[calc(100%-2rem)]">
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH"
            className="w-full h-full border-0"
            style={{ backgroundColor: 'transparent' }}
            title="Resume"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Resume; 