import { motion } from 'framer-motion';

const About = () => {
  const funFacts = [
    'Love developing video games',
    'I am originally from Cameroon',
    'I love playing soccer',
    'Always trying to learn new things',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <div className="terminal-window mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-terminal-error" />
          <div className="w-3 h-3 rounded-full bg-terminal-warning" />
          <div className="w-3 h-3 rounded-full bg-terminal-accent" />
        </div>
        <div className="code-block">
          <p className="text-code-comment">// About Me</p>
          <p className="text-code-keyword">const</p>{' '}
          <span className="text-code-variable">bio</span> ={' '}
          <span className="text-code-string">
            "I am currently a high school student at Eleanor Roosevelt High School, graduating in May 2025. After i graduate i am going to attend massachusetts institute of technology to study computer science. My goal is to become a software engineer and create a startup."
          </span>
          <p className="text-code-keyword">;</p>
        </div>
      </div>

      <div className="terminal-window mb-8">
        <div className="code-block">
          <p className="text-code-comment">// Fun Facts</p>
          <p className="text-code-keyword">const</p>{' '}
          <span className="text-code-variable">funFacts</span> = [
          {funFacts.map((fact, index) => (
            <div key={index} className="ml-4">
              <span className="text-code-string">"{fact}"</span>
              {index < funFacts.length - 1 && <span className="text-code-keyword">,</span>}
            </div>
          ))}
          ];
        </div>
      </div>

      <div className="terminal-window">
        <div className="code-block">
          <p className="text-code-comment">// Skills</p>
          <p className="text-code-keyword">const</p>{' '}
          <span className="text-code-variable">skills</span> = {'{'}
          <div className="ml-4">
            <p>
              <span className="text-code-string">game development</span>:{' '}
              <span className="text-code-string">['Roblox studio', 'Adobe Photoshop', 'Blender']</span>,
            </p>
            <p>
              <span className="text-code-string">ios app development</span>:{' '}
              <span className="text-code-string">['Swift', 'SwiftUi', 'Firebase']</span>,
            </p>
            <p>
              <span className="text-code-string">Video Editing</span>:{' '}
              <span className="text-code-string">['Adobe Premiere Pro', 'Adobe After Effects']</span>
            </p>
          </div>
          {'}'};
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex justify-center space-x-4"
      >
        <a
          href="https://github.com/XercoTchouankeu"
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-window px-6 py-2 hover-glow"
        >
          <span className="text-code-comment">//</span> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/xerco-tchouankeu-356b832aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-window px-6 py-2 hover-glow"
        >
          <span className="text-code-comment">//</span> LinkedIn
        </a>
      </motion.div>
    </motion.div>
  );
};

export default About; 