import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      quote: "I used to freeze whenever I had to speak English in team standups. After 8 weeks with Rajiv, I lead our international client calls with zero anxiety.",
      author: "Priya Sharma",
      role: "Lead Software Engineer",
      outcome: "Promoted to Global Delivery Lead",
      rating: 5,
    },
    {
      quote: "Rajiv helped me jump from Band 6.0 to 8.5 in IELTS Speaking in just 6 weeks. His pronunciation and pause drills completely transformed my speech.",
      author: "Carlos Morales",
      role: "Postgraduate Student (Oxford)",
      outcome: "Secured University Admission",
      rating: 5,
    },
    {
      quote: "The best English mentor I have ever worked with. He doesn't waste time on grammar rules—he gets you talking naturally and corrects you kindly in real-time.",
      author: "Kenji Tanaka",
      role: "Operations Manager",
      outcome: "Secured New Role at Multinational",
      rating: 5,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
          <span>STUDENT TRANSFORMATIONS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight leading-tight">
          Real Stories. <span className="text-gold-gradient italic font-editorial">Real Fluency.</span>
        </h2>
      </div>

      {/* 3 Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {reviews.map((rev, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-[#D4AF37]/50 flex flex-col justify-between transition-all space-y-6"
          >
            <div className="space-y-4">
              {/* Stars & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-neutral-600" />
              </div>

              {/* Quote text */}
              <p className="text-sm font-sans-body text-neutral-200 leading-relaxed italic">
                "{rev.quote}"
              </p>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-base font-serif-title font-bold text-white">
                {rev.author}
              </h4>
              <p className="text-xs font-mono text-neutral-400">
                {rev.role}
              </p>
              <span className="inline-block mt-1 text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20 font-bold uppercase">
                {rev.outcome}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
