import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload the PDF
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/resume.pdf';
    link.as = 'object';
    document.head.appendChild(link);

    // Add load event listener to iframe
    const handleIframeLoad = () => {
      setIsLoading(false);
    };

    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    return () => {
      document.head.removeChild(link);
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

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

      <div className="terminal-window h-[800px] resize overflow-hidden relative" style={{ resize: 'both' }}>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-terminal-error" />
          <div className="w-3 h-3 rounded-full bg-terminal-warning" />
          <div className="w-3 h-3 rounded-full bg-terminal-accent" />
        </div>
        <div className="code-block h-[calc(100%-2rem)] relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-code-bg z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-terminal-accent"></div>
            </div>
          )}
          <object
            data="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH"
            type="application/pdf"
            className="w-full h-full"
            style={{ backgroundColor: 'transparent' }}
          >
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH"
              className="w-full h-full border-0"
              style={{ backgroundColor: 'transparent' }}
            />
          </object>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume; 