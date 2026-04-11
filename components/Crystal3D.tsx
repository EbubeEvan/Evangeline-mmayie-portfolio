'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';

export const Crystal3D = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 perspective-1000">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        {/* Crystal Faces */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <motion.div
            key={deg}
            className="absolute inset-0"
            style={{
              transform: `rotateY(${deg}deg) translateZ(100px)`,
              background: `linear-gradient(135deg, rgba(139, 92, 246, ${0.1 + i * 0.05}) 0%, rgba(6, 182, 212, ${0.1 + i * 0.05}) 100%)`,
              border: '1px solid rgba(139, 92, 246, 0.3)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Inner Core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-xl"
          />
        </div>
      </motion.div>
    </div>
  );
};
