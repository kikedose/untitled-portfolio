'use client';

import * as motion from 'motion/react-client';
import { useScroll } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[9999] h-1 origin-left bg-white"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
