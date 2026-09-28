import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Mic, ArrowRight } from 'lucide-react';

export default function AboutSection({ onBookClass, setCursorLabel, setCursorHovered }) {
  const handleMouseEnter = (label) => {
    if (setCursorHovered) setCursorHovered(true);
    if (setCursorLabel) setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    if (setCursorHovered) setCursorHovered(false);
    if (setCursorLabel) setCursorLabel('');
  };

  const pillars = [
    {
      icon: <Mic className="w-5 h-5 text-[#D4AF37]" />,
      title: "Pronunciation & Clarity",
      desc: "Master natural sounds, syllable stress, and speech rhythm so people understand you effortlessly without repeating yourself.",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#D4AF37]" />,
      title: "Thinking in English",
      desc: "Break the habit of translating from your native language in your head. Learn to respond spontaneously with natural flow.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      title: "Confidence in Any Situation",
      desc: "Overcome fear and speaking hesitation in workplace meetings, presentations, job interviews, or everyday social chats.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MEET YOUR ENGLISH SPEECH MENTOR</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight leading-tight">
          Speak English With <span className="text-gold-gradient italic font-editorial">Natural Confidence.</span>
        </h2>

        <p className="text-sm sm:text-base font-sans-body text-neutral-300 leading-relaxed font-medium">
          Hi, I'm <strong className="text-white font-semibold">Rajiv Singh Sidhu</strong>. For over 15 years, I have helped students, professionals, and job-seekers eliminate hesitation and speak fluent, clear English. My lessons are practical, friendly, and focused 100% on real speaking practice.
        </p>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {pillars.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 space-y-3 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-serif-title font-bold text-white group-hover:text-[#D4AF37] transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm font-sans-body text-neutral-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-[#090D1A]/80 border border-[#D4AF37]/30 text-center">
        <div>
          <span className="text-2xl sm:text-4xl font-serif-title font-bold text-[#F3E5AB]">15+</span>
          <p className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold mt-1">
            Years Teaching
          </p>
        </div>
        <div>
          <span className="text-2xl sm:text-4xl font-serif-title font-bold text-[#F3E5AB]">1,500+</span>
          <p className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold mt-1">
            Students Mentored
          </p>
        </div>
        <div>
          <span className="text-2xl sm:text-4xl font-serif-title font-bold text-[#F3E5AB]">98%</span>
          <p className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold mt-1">
            Fluency Pass Rate
          </p>
        </div>
        <div>
          <span className="text-2xl sm:text-4xl font-serif-title font-bold text-[#F3E5AB]">1-on-1</span>
          <p className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold mt-1">
            Custom Lessons
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-10">
        <button
          onClick={onBookClass}
          onMouseEnter={() => handleMouseEnter('TRIAL')}
          onMouseLeave={handleMouseLeave}
          className="btn-liquid px-8 py-3.5 sm:py-4 rounded-full border-2 border-[#D4AF37] text-white font-mono text-xs sm:text-sm tracking-widest font-bold uppercase shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all inline-flex items-center gap-2"
        >
          <span>BOOK A FREE TRIAL SESSION</span>
          <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
        </button>
      </div>

    </div>
  );
}
