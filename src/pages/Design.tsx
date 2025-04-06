import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface DesignWork {
  id: number;
  title: string;
  description: string;
  image: string;
  category: '1v1.lol' | 'roblox' | 'other';
  tools: string[];
}

const designWorks: DesignWork[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: 'Graphic Design',
  description: 'Design work',
  image: `/design/graphic-${i + 1}.png`,
  category: 'other',
  tools: ['Photoshop', 'Blender'],
}));

// Override specific categories for known items
designWorks[0].category = '1v1.lol'; // graphic-1
designWorks[5].category = '1v1.lol'; // graphic-6
designWorks[6].category = '1v1.lol'; // graphic-7
designWorks[2].category = 'roblox';  // graphic-3
designWorks[3].category = 'roblox';  // graphic-4
designWorks[4].category = 'roblox';  // graphic-5
designWorks[7].category = 'roblox';  // graphic-8
designWorks[8].category = 'roblox';  // graphic-9
designWorks[10].category = 'roblox'; // graphic-11
designWorks[11].category = 'roblox'; // graphic-12
designWorks[12].category = 'roblox'; // graphic-13
designWorks[13].category = 'roblox'; // graphic-14
designWorks[14].category = 'roblox'; // graphic-15

const Design = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | '1v1.lol' | 'roblox'  | 'other'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredWorks = designWorks.filter(
    (work) => selectedCategory === 'all' || work.category === selectedCategory
  );

  return (
    <>
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
            <p className="text-code-comment">// Design Portfolio</p>
            <p className="text-code-string mt-2">
              A showcase of my design work over the years
            </p>
          </div>
        </div>

        <div className="terminal-window mb-8">
          <div className="code-block">
            <p className="text-code-comment">// Filter by Category</p>
            <div className="flex flex-wrap gap-4 mt-4">
              {(['all', '1v1.lol', 'roblox', 'other'] as const).map((category) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="terminal-window overflow-hidden"
            >
              <div 
                className="relative aspect-video bg-code-bg cursor-pointer"
                onClick={() => setSelectedImage(work.image)}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-contain bg-code-bg"
                />
              </div>
              <div className="p-4">
                <div className="code-block">
                  <p className="text-code-comment">// {work.title}</p>
                  <p className="text-code-string mt-2">{work.description}</p>
                  <div className="mt-4">
                    <p className="text-code-comment">// Tools Used</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {work.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-terminal-accent/10 rounded text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 terminal-window"
        >
          <div className="code-block">
            <p className="text-code-comment">// Design Skills</p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Post Effects',
                '3D Posing',
                'Prototyping',
                'Typography'
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
          >
            <motion.img
              src={selectedImage}
              alt="Full size preview"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Design; 