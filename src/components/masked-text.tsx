'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import '~/styles/custom-styles.css';

export default function MaskedText({
  foregroundText,
  backgroundText,
}: {
  foregroundText: string;
  backgroundText: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

  const maskSize = isTextHovered ? 250 : 25;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate the mouse position relative to the container
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setMaskPosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="border-foreground grid min-h-[calc(100vh-14rem)] place-items-center overflow-hidden rounded-md border-2 border-solid"
    >
      <div className="foreground flex h-full w-full items-center justify-center p-8 text-center text-4xl [grid-area:1/1]">
        <p className="mx-auto max-w-4xl text-6xl">{foregroundText}</p>
      </div>

      <motion.div
        className="mask flex h-full w-full items-center justify-center overflow-hidden rounded-md p-8 text-center text-4xl [grid-area:1/1]"
        animate={{
          // Center the mask on the cursor by subtracting half its size
          maskPosition: `${maskPosition.x - maskSize / 2}px ${maskPosition.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      >
        <p
          className="mx-auto max-w-4xl font-medium"
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
        >
          {backgroundText}
        </p>
      </motion.div>
    </div>
  );
}
