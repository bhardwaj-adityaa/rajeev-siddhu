import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, Check, ArrowRight } from 'lucide-react';

export default function CoursesSection({ onSelectCourse, setCursorLabel, setCursorHovered }) {
  const handleMouseEnter = (label) => {
    if (setCursorHovered) setCursorHovered(true);
    if (setCursorLabel) setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    if (setCursorHovered) setCursorHovered(false);
    if (setCursorLabel) setCursorLabel('');
  };

  const courses = [
    {
      id: 'spoken',
      icon: <BookOpen className="w-6 h-6 text-[#D4AF37]" />,
      badge: "MOST POPULAR",
      title: "Spoken English & Daily Fluency",
      subtitle: "For students & speakers wanting to speak natural English without hesitation.",
      duration: "4 - 8 Weeks",
      format: "1-on-1 or Small Cohort",
      features: [
        "Eliminate hesitation and fear of speaking",
        "Clear pronunciation and accent refinement",
        "Everyday conversation, idioms & small talk",
        "Real-time correction & personalized voice feedback",
      ],
    },
    {
      id: 'business',
      icon: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
      badge: "FOR PROFESSIONALS",
      title: "Business & Workplace English",
      subtitle: "For professionals who need to speak up in meetings and presentations.",
      duration: "6 Weeks",
      format: "Executive 1-on-1",
      features: [
        "Lead meetings & presentations with authority",
        "Handling client calls and negotiations",
        "Diplomatic & persuasive workplace language",
        "Quick response formulation under pressure",
      ],
    },
    {
      id: 'interview',
      icon: <GraduationCap className="w-6 h-6 text-[#D4AF37]" />,
      badge: "TARGET ORIENTED",
      title: "IELTS & Interview Speaking Prep",
      subtitle: "For university admissions & high-stakes job interview preparation.",
      duration: "4 Weeks Intensive",
      format: "Focused 1-on-1",
      features: [
        "Band 7.5 – 9.0 speaking interview strategies",
        "Mock interviews with instant scored feedback",
        "Handling unexpected or difficult questions",
        "Confidence & posture for video/in-person panels",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
          <span>PRACTICAL TRAINING PROGRAMS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight leading-tight">
          How I Train You to <span className="text-gold-gradient italic font-editorial">Speak Fluently.</span>
        </h2>

        <p className="text-sm sm:text-base font-sans-body text-neutral-300 leading-relaxed font-medium">
          Choose the speaking track that fits your exact goal. Every program includes personalized 1-on-1 speaking time, real-time corrections, and practical homework drills.
        </p>
      </div>

      {/* 3 Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {courses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="rounded-2xl bg-[#0C0C0C] border border-white/15 hover:border-[#D4AF37] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)] relative group"
          >
            <div>
              {/* Top Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/60 transition-colors">
                  {course.icon}
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2.5 py-1 rounded-full font-bold uppercase">
                  {course.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                {course.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans-body text-neutral-400 mb-6 leading-relaxed">
                {course.subtitle}
              </p>

              {/* Quick Details */}
              <div className="flex items-center justify-between py-3 border-y border-white/10 mb-6 text-xs font-mono text-neutral-300">
                <span>Duration: <strong className="text-white">{course.duration}</strong></span>
                <span>Format: <strong className="text-white">{course.format}</strong></span>
              </div>

              {/* Feature Bullets */}
              <ul className="space-y-3 mb-8">
                {course.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans-body text-neutral-300">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Select Button */}
            <button
              onClick={() => onSelectCourse(course.title)}
              onMouseEnter={() => handleMouseEnter('ENROLL')}
              onMouseLeave={handleMouseLeave}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-[#D4AF37] group-hover:text-black shadow-md"
            >
              <span>APPLY FOR THIS TRACK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
