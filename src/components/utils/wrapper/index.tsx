import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInScrollProps {
  children: ReactNode;
  delay?: number;
}

export function FadeInScroll({ children, delay = 0 }: FadeInScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8,
        delay: delay, 
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}