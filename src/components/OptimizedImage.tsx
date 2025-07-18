import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const OptimizedImage = ({ src, alt, className = '', onClick }: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setError(true);
      setIsLoading(false);
    };
    
    img.src = src;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div 
      className={`relative ${className}`}
      onClick={onClick}
    >
      {}
      {isLoading && (
        <div className="absolute inset-0 bg-code-bg animate-pulse" />
      )}
      
      {}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-code-bg">
          <span className="text-terminal-error">Failed to load image</span>
        </div>
      )}
      
      {}
      {imageSrc && (
        <motion.img
          src={imageSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain bg-code-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 