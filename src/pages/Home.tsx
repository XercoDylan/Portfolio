import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TerminalAnimation = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    '> echo "Welcome"',
    '> cd portfolio',
    '> ls projects',
    '> ./start'
  ];

  useEffect(() => {
    let currentChar = 0;
    const line = lines[currentLine];

    const typingInterval = setInterval(() => {
      if (currentChar <= line.length) {
        setText(line.slice(0, currentChar));
        currentChar++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % lines.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  return (
    <div className="terminal-window mt-8 p-4 w-full max-w-md">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-terminal-error" />
        <div className="w-3 h-3 rounded-full bg-terminal-warning" />
        <div className="w-3 h-3 rounded-full bg-terminal-accent" />
      </div>
      <div className="code-block h-16 flex items-center overflow-hidden bg-code-bg p-4">
        <motion.p
          key={currentLine}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-terminal-accent"
          style={{ textShadow: '0 0 8px rgba(0, 255, 255, 0.3)' }}
        >
          {text}
          <span className="typing-cursor ml-1">▋</span>
        </motion.p>
      </div>
    </div>
  );
};

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Hello, I'm Xerco";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="terminal-window max-w-2xl w-full min-h-[150px]">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-terminal-error" />
          <div className="w-3 h-3 rounded-full bg-terminal-warning" />
          <div className="w-3 h-3 rounded-full bg-terminal-accent" />
        </div>
        <div className="code-block h-full">
          <p className="text-code-comment">// Welcome to my portfolio</p>
          <div className="h-[80px] flex items-center">
            <p>
              <span className="text-code-keyword">const</span>{' '}
              <span className="text-code-variable">greeting</span> ={' '}
              <span className="text-code-string">"{text}"</span>
              {showCursor && <span className="typing-cursor" />}
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-8 text-center"
      >
        <p className="text-terminal-text/80 text-lg">
          Computer Enthusiast, Developer, and Student
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {['Lua', 'Swift', 'Javascript', 'Python'].map((tech) => (
          <div
            key={tech}
            className="terminal-window text-center p-4 hover-glow cursor-pointer"
          >
            <span className="text-code-comment">//</span> {tech}
          </div>
        ))}
      </motion.div>

      <TerminalAnimation />
    </motion.div>
  );
};

export default Home; 