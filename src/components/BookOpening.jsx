import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';
import RajivPortrait from './RajivPortrait';

export default function BookOpening({ onEnterAtelier, onSelectCourse, setCursorLabel, setCursorHovered }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto trigger book opening animation after short initial pause
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (label) => {
    setCursorHovered(true);
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorLabel('');
  };

  const toggleBook = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-[calc(100vh-10rem)] flex flex-col items-center justify-start sm:justify-center pt-2 sm:pt-6 pb-12 sm:pb-16 px-3 sm:px-4 overflow-hidden select-none">
      
      {/* Background Ambient Glow & Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[850px] h-[350px] sm:h-[850px] bg-gradient-radial from-[#D4AF37]/15 via-blue-950/25 to-transparent rounded-full filter blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Top Controls & Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-20 mb-6 sm:mb-10 flex flex-col sm:flex-row items-center gap-3 text-center max-w-full px-2"
      >
        <div className="flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#D4AF37]/40 bg-black/80 backdrop-blur-md text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase shadow-[0_0_25px_rgba(212,175,55,0.2)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MASTERPIECE EDITION • RAJIV SINGH SIDHU</span>
        </div>

        <button
          onClick={toggleBook}
          onMouseEnter={() => handleMouseEnter(isOpen ? 'CLOSE' : 'OPEN')}
          onMouseLeave={handleMouseLeave}
          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/20 hover:border-[#D4AF37] bg-black/60 text-[10px] sm:text-xs font-mono text-neutral-200 hover:text-[#D4AF37] transition-all flex items-center gap-2 font-semibold"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isOpen ? 'CLOSE EXECUTIVE CHARTER' : 'OPEN EXECUTIVE CHARTER (6.0s)'}</span>
        </button>
      </motion.div>

      {/* 3D BOOK VIEWPORT CONTAINER */}
      <div className="book-stage relative w-full max-w-6xl h-[600px] sm:h-[740px] flex items-center justify-center perspective-[2400px] z-10 overflow-hidden sm:overflow-visible">
        
        {/* THE 3D HARDCOVER BOOK (6.0s MAJESTIC CINEMATIC WEIGHTED GLIDE ANIMATION) */}
        <div className={`book-object relative w-[310px] sm:w-[520px] h-[550px] sm:h-[680px] transition-transform duration-[6000ms] cubic-bezier(0.25,1,0.5,1) ${isOpen ? 'translate-x-0 md:translate-x-[260px]' : 'translate-x-0'}`}>
          
          {/* BACK COVER & BINDING */}
          <div className="absolute inset-0 bg-[#070D1E] rounded-r-2xl border-r-4 border-y-2 border-[#D4AF37]/70 shadow-[0_40px_90px_rgba(0,0,0,0.95)] transform-gpu translate-z-[-24px]" />
          
          {/* BOOK PAGES BLOCK (LEFT & RIGHT INSIDE PAGES) */}
          <div className={`absolute inset-y-2 right-2 left-2 bg-[#FAF7F0] rounded-r-xl border border-neutral-300 shadow-[25px_0_50px_rgba(0,0,0,0.7)] flex flex-col sm:flex-row overflow-hidden transition-all duration-[6000ms] ${isOpen ? 'opacity-100' : 'opacity-90'}`}>
            
            {/* INSIDE LEFT PAGE */}
            <div className={`w-full sm:w-1/2 h-1/2 sm:h-full p-4 sm:p-10 bg-gradient-to-r from-[#F3EEE3] via-[#FAF7F0] to-[#FFFDF9] text-black flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-neutral-300 shadow-inner relative transition-opacity duration-[3000ms] ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              {/* Page Binding Shadow */}
              <div className="hidden sm:block absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />

              {/* Header */}
              <div className="space-y-2 sm:space-y-4">
                <div className="flex items-center justify-between border-b border-black/10 pb-2">
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    PROLOGUE • PAGE I
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif-title font-bold text-xs bg-black">
                    RS
                  </div>
                </div>

                {/* Massive Headline & Subtitle */}
                <h2 className="text-xl sm:text-4xl md:text-5xl font-serif-title font-bold text-neutral-900 leading-tight">
                  Master The <br className="hidden sm:inline" />
                  <span className="text-[#8B6B1B] italic font-editorial">English Language.</span>
                </h2>

                <p className="text-[10px] sm:text-base font-sans-body font-bold text-[#8B6B1B] tracking-wider uppercase leading-snug">
                  ELEVATE YOUR FLUENCY AND COMMAND THE ROOM.
                </p>

                <p className="text-[11px] sm:text-sm font-sans-body text-neutral-700 leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                  A bespoke atelier for C-Suite executives, diplomats, and international leaders. Transform your vocal acoustics with unshakeable authority.
                </p>
              </div>

              {/* Integrated Rajiv Portrait inside Left Dark Blue Space */}
              <div className="my-1 sm:my-2 py-1">
                <RajivPortrait className="h-20 sm:h-40" />
              </div>

              {/* Master Ethos Stamp */}
              <div className="pt-2 border-t border-black/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-serif-title font-bold text-neutral-900 tracking-wider">
                    RAJIV SINGH SIDHU
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase">MAYFAIR • ZÜRICH</span>
                </div>
              </div>
            </div>

            {/* INSIDE RIGHT PAGE */}
            <div className={`w-full sm:w-1/2 h-1/2 sm:h-full p-4 sm:p-10 bg-gradient-to-l from-[#F3EEE3] via-[#FAF7F0] to-[#FFFDF9] text-black flex flex-col justify-between relative transition-opacity duration-[3000ms] ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              {/* Page Binding Shadow */}
              <div className="hidden sm:block absolute top-0 left-0 bottom-0 w-10 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between border-b border-black/10 pb-2 mb-2 sm:mb-4">
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    CURRICULA • PAGE II
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-[#8B6B1B] font-bold">
                    3 PILLARS
                  </span>
                </div>

                <h3 className="text-xs sm:text-base font-mono tracking-widest text-[#8B6B1B] uppercase font-bold mb-2 sm:mb-4">
                  PREMIUM OFFERINGS
                </h3>

                {/* Offerings Stack */}
                <div className="space-y-1.5 sm:space-y-4">
                  
                  {/* Offering 1 */}
                  <button
                    onClick={() => onSelectCourse('spoken')}
                    onMouseEnter={() => handleMouseEnter('SELECT')}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left p-2 sm:p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-lg font-serif-title font-bold text-neutral-900 group-hover:text-[#8B6B1B]">
                        01. Spoken English Mastery
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#8B6B1B] group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>

                  {/* Offering 2 */}
                  <button
                    onClick={() => onSelectCourse('corporate')}
                    onMouseEnter={() => handleMouseEnter('SELECT')}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left p-2 sm:p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-lg font-serif-title font-bold text-neutral-900 group-hover:text-[#8B6B1B]">
                        02. Corporate Business English
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#8B6B1B] group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>

                  {/* Offering 3 */}
                  <button
                    onClick={() => onSelectCourse('exam')}
                    onMouseEnter={() => handleMouseEnter('SELECT')}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left p-2 sm:p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-lg font-serif-title font-bold text-neutral-900 group-hover:text-[#8B6B1B]">
                        03. Advanced Exam Prep (IELTS/TOEFL)
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#8B6B1B] group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Bottom Enter Action Button with Liquid Gold */}
              <div className="pt-2 sm:pt-4 border-t border-black/10">
                <button
                  onClick={onEnterAtelier}
                  onMouseEnter={() => handleMouseEnter('ENTER')}
                  onMouseLeave={handleMouseLeave}
                  className="btn-liquid w-full py-2.5 sm:py-4 bg-[#0A1226] text-[#FAF7F0] font-mono text-[10px] sm:text-sm tracking-[0.2em] uppercase font-bold rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group border border-[#D4AF37]"
                >
                  <span className="relative z-10">ENTER FULL ATELIER</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-black group-hover:translate-x-1 transition-all relative z-10" />
                </button>
              </div>

            </div>
          </div>

          {/* 3D HARDCOVER FRONT COVER (FLIPS OPEN 180°) */}
          <div
            className={`book-cover-wrapper absolute inset-0 transform-gpu transition-transform duration-[6000ms] cubic-bezier(0.25,1,0.5,1) origin-left ease-in-out ${
              isOpen ? 'rotate-y-[-180deg]' : 'rotate-y-0'
            }`}
            style={{
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {/* FRONT OF COVER */}
            <div className="book-cover-front absolute inset-0 bg-gradient-to-br from-[#0E1E45] via-[#09122B] to-[#040816] rounded-r-2xl border-4 border-[#D4AF37] p-6 sm:p-10 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.95)] backface-hidden z-20">
              
              {/* Outer Golden Decorative Frame */}
              <div className="absolute inset-2 sm:inset-3 border-2 border-[#D4AF37]/60 pointer-events-none rounded-lg" />
              <div className="absolute inset-4 sm:inset-5 border border-[#D4AF37]/30 pointer-events-none rounded-lg" />

              {/* Header Crest */}
              <div className="text-center pt-2 sm:pt-4 space-y-2">
                <div className="w-14 h-14 sm:w-20 sm:h-20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto bg-black/60 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <span className="font-serif-title font-bold text-xl sm:text-3xl text-[#D4AF37]">RS</span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block font-semibold">
                  RAJIV SINGH SIDHU
                </span>
              </div>

              {/* Book Title */}
              <div className="text-center space-y-3 sm:space-y-4 px-2">
                <h1 className="text-2xl sm:text-5xl font-serif-title font-bold text-[#F3E5AB] tracking-wider leading-tight shadow-gold-foil">
                  EXECUTIVE CHARTER
                </h1>
                <div className="w-16 sm:w-20 h-0.5 bg-[#D4AF37] mx-auto rounded-full" />
                <p className="text-[10px] sm:text-sm font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-bold">
                  MASTER ENGLISH RHETORIC ATELIER
                </p>
              </div>

              {/* Footer Stamp & Instructions */}
              <div className="text-center pb-2 sm:pb-4 space-y-2 sm:space-y-3">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[10px] sm:text-xs font-mono text-[#D4AF37] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>TAP OR CLICK TO OPEN</span>
                </div>
                <p className="text-[9px] sm:text-xs font-mono text-neutral-400 tracking-widest uppercase">
                  EST. 2010 • MAYFAIR • ZÜRICH
                </p>
              </div>
            </div>

            {/* BACK OF COVER */}
            <div className="book-cover-back absolute inset-0 bg-[#070D1E] rounded-l-2xl border-4 border-[#D4AF37]/40 p-6 rotate-y-180 backface-hidden z-10 flex flex-col justify-center text-center">
              <div className="w-12 h-12 border border-[#D4AF37]/50 rounded-full flex items-center justify-center mx-auto text-[#D4AF37] mb-3 bg-black">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                RAJIV SINGH SIDHU ATELIER
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Down Indicator to Home */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onEnterAtelier}
        className="mt-6 text-center text-xs font-mono text-neutral-400 flex flex-col items-center gap-2 cursor-pointer hover:text-[#D4AF37] transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="tracking-widest uppercase font-semibold">SCROLL DOWN TO EXPLORE 01 HOME</span>
        </div>
        <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </motion.div>
    </div>
  );
}
