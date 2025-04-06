import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface DesignWork {
  id: number;
  title: string;
  description: string;
  image: string;
  category: '1v1.lol' | 'roblox' | 'other';
  tools: string[];
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const DesignCard = ({ work, onClick }: { work: DesignWork; onClick: () => void }) => {
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
      <div 
        className="relative aspect-video bg-code-bg cursor-pointer"
        onClick={onClick}
      >
        <img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-contain bg-code-bg"
          loading="lazy"
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
  );
};

const Design = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | '1v1.lol' | 'roblox' | 'other'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [designs, setDesigns] = useState<DesignWork[]>([]);

  useEffect(() => {
    // Create the initial designs array
    const initialDesigns: DesignWork[] = Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      title: 'Graphic Design',
      description: 'Design work',
      image: `/design/graphic-${i + 1}.png`,
      category: 'other',
      tools: ['Photoshop', 'Blender'],
    }));

    // Set specific categories for known items
    initialDesigns[0].category = '1v1.lol';
    initialDesigns[1].category = 'other';
    initialDesigns[2].category = 'roblox';
    initialDesigns[3].category = 'roblox';
    initialDesigns[4].category = 'roblox';
    initialDesigns[5].category = '1v1.lol';
    initialDesigns[6].category = '1v1.lol';
    initialDesigns[7].category = 'roblox';  
    initialDesigns[8].category = 'roblox';
    initialDesigns[9].category = 'other';
    initialDesigns[10].category = 'roblox';
    initialDesigns[11].category = 'roblox';
    initialDesigns[12].category = 'roblox';
    initialDesigns[13].category = 'roblox';
    initialDesigns[14].category = 'roblox';
    initialDesigns[15].category = 'roblox';
    initialDesigns[16].category = 'roblox';
    initialDesigns[17].category = 'roblox';
    initialDesigns[18].category = 'roblox';
    initialDesigns[19].category = 'roblox';
    initialDesigns[20].category = 'roblox';
    initialDesigns[21].category = 'roblox';
    initialDesigns[22].category = 'roblox';
    initialDesigns[23].category = 'roblox';
    initialDesigns[24].category = 'roblox';
    initialDesigns[25].category = 'roblox';
    initialDesigns[26].category = 'other';
    initialDesigns[27].category = 'other';
    initialDesigns[28].category = 'roblox';
    initialDesigns[29].category = 'roblox';
    initialDesigns[30].category = 'roblox';
    initialDesigns[31].category = 'roblox';
    initialDesigns[32].category = '1v1.lol';
    initialDesigns[33].category = 'roblox';
    initialDesigns[34].category = 'roblox';
    initialDesigns[35].category = 'roblox';
    initialDesigns[36].category = 'roblox';
    initialDesigns[37].category = 'roblox';
    initialDesigns[38].category = 'roblox';
    initialDesigns[39].category = 'roblox';
    // Shuffle the designs array
    setDesigns(shuffleArray(initialDesigns));
  }, []);

  const filteredDesigns = designs.filter(
    (design) => selectedCategory === 'all' || design.category === selectedCategory
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
          {filteredDesigns.map((design) => (
            <DesignCard
              key={design.id}
              work={design}
              onClick={() => setSelectedImage(design.image)}
            />
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