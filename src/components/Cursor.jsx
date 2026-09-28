import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cursor({ cursorLabel, cursorHovered }) {
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable follower ring on desktop fine-pointer devices (not mobile / touch)
    const isTouch = 'ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
    if (isTouch || (window.matchMedia && !window.matchMedia('(pointer: fine)').matches)) {
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // High performance 120/144Hz GPU-accelerated RAF lerp loop
    const animate = () => {
      // Smooth interpolation factor (0.24 provides snappy response with elegant fluid glide)
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.24;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.24;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={ringRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform select-none"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
      }}
    >
      {/* Smooth Ambient Luxury Gold Follower Ring */}
      <motion.div
        animate={{
          width: cursorHovered ? 64 : 32,
          height: cursorHovered ? 64 : 32,
          borderColor: cursorHovered ? 'rgba(212, 175, 55, 0.85)' : 'rgba(212, 175, 55, 0.35)',
          backgroundColor: cursorHovered ? 'rgba(212, 175, 55, 0.12)' : 'rgba(212, 175, 55, 0.02)',
          boxShadow: cursorHovered
            ? '0 0 25px rgba(212, 175, 55, 0.35)'
            : '0 0 10px rgba(212, 175, 55, 0.1)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="rounded-full border backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
      >
        <AnimatePresence>
          {cursorLabel && cursorHovered && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
              className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold text-center px-1 leading-none select-none pointer-events-none"
            >
              {cursorLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

