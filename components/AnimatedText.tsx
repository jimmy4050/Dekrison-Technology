import React from 'react';
// FIX: Imported Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

// FIX: Explicitly typed with Variants to ensure correct type inference for transition properties.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.2 },
  },
};

// FIX: Explicitly typed with Variants to ensure correct type inference for transition properties.
const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: { type: 'spring', damping: 12, stiffness: 100 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100 },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <motion.p
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap mr-[0.25em]">
          {Array.from(word).map((char, charIndex) => (
            <motion.span key={charIndex} variants={childVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.p>
  );
};

export default AnimatedText;