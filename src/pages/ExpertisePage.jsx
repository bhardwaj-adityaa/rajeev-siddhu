import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import FluencyAnalyzerWidget from '../components/FluencyAnalyzerWidget';
import SyllabusModal from '../components/SyllabusModal';

export default function ExpertisePage({ onOpenBooking, setCursorLabel, setCursorHovered, onBackgroundShift }) {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [syllabusModalOpen, setSyllabusModalOpen] = useState(false);
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState(null);

  const courses = [
    {
      id: 'spoken-mastery',
      number: '01',
      title: 'Spoken English Mastery',
      tagline: 'Accent refinement, vocal acoustics, and unforced conversational weight.',
      duration: '12 WEEKS INTENSIVE',
      cohortSize: 'MAX 6 FELLOWS PER ATELIER',
      gradientShift: 'shifted-gold',
      description:
        'Designed for high-performing non-native leaders seeking to eliminate hesitation, master natural English idioms, and project an authoritative vocal timbre during high-stakes discussions.',
      highlights: [
        'Voice Timbre & Chest Resonance Coaching',
        'Advanced Idiomatic & Nuanced Vocabulary',
        'Phonetic Accent Harmony & Articulation',
        'Spontaneous Impromptu Speaking Protocols',
      ],
      modules: [
        {
          phase: 'ACOUSTICS',
          title: 'Vocal Resonance & Chest Articulation',
          duration: 'WEEKS 1 - 3',
          description: 'Re-engineering throat speech habits into deep diaphragm resonance.',
          takeaways: ['Diaphragm Control', 'Vowel Extension', 'Resonance Positioning'],
        },
        {
          phase: 'CADENCE',
          title: 'Rhythmic Pause Mechanics & Weight',
          duration: 'WEEKS 4 - 6',
          description: 'Mastering the strategic pause that gives weight to complex ideas.',
          takeaways: ['Pacing Control', 'Intonation Micro-curves', 'Silence Leverage'],
        },
        {
          phase: 'NUANCE',
          title: 'Sophisticated Idiom & Conversational Wit',
          duration: 'WEEKS 7 - 9',
          description: 'Replacing standard language with high-level British/American executive idioms.',
          takeaways: ['Cultural Nuance', 'Diplomatic Metaphors', 'Subtle Wit'],
        },
        {
          phase: 'MASTERY',
          title: 'Spontaneous Impromptu Debates & Media',
          duration: 'WEEKS 10 - 12',
          description: 'Handling adversarial questioning and press interviews under stress.',
          takeaways: ['Pressure Control', 'Question Deflection', 'Final Mastery Recording'],
        },
      ],
    },
    {
      id: 'business-corporate',
      number: '02',
      title: 'Business & Corporate Communication',
      tagline: 'Boardroom rhetoric, high-stakes negotiations, and executive persuasion.',
      duration: '8 WEEKS EXECUTIVE',
      cohortSize: 'PRIVATE 1-ON-1 ONLY',
      gradientShift: 'shifted-bronze',
      description:
        'A surgical rhetoric program for CEOs, Managing Directors, and Founders. Master the art of persuasive pitch delivery, investor Q&A dominance, and diplomatic negotiation language.',
      highlights: [
        'Boardroom Presentation Dominance',
        'High-Stakes Contract Negotiation Tactics',
        'Investor Pitch & Panel Interview Rhetoric',
        'Executive Email & Written Gravitas',
      ],
      modules: [
        {
          phase: 'PERSUASION',
          title: 'The Architecture of Executive Persuasion',
          duration: 'WEEKS 1 - 2',
          description: 'Structuring arguments with Aristotelian rhetoric (Ethos, Pathos, Logos).',
          takeaways: ['Framing Mechanics', 'Ethos Building', 'Data Storytelling'],
        },
        {
          phase: 'NEGOTIATION',
          title: 'Diplomatic Firmness & De-escalation',
          duration: 'WEEKS 3 - 4',
          description: 'Holding firm positions without appearing aggressive or dismissive.',
          takeaways: ['Tactical Empathy', 'Conditional Agreement', 'Leverage Framing'],
        },
        {
          phase: 'PRESENTATION',
          title: 'Keynote & Investor Pitch Mastery',
          duration: 'WEEKS 5 - 6',
          description: 'Commanding stage presence for AGM addresses and international summits.',
          takeaways: ['Slide Synchronicity', 'Voice Projection', 'Stage Geometry'],
        },
        {
          phase: 'Q&A DEFENSE',
          title: 'Adversarial Q&A & Crisis Communication',
          duration: 'WEEKS 7 - 8',
          description: 'Defending tough questions from aggressive journalists and board members.',
          takeaways: ['Bridging Techniques', 'Composure Maintenance', 'Crisis Scripting'],
        },
      ],
    },
    {
      id: 'ielts-toefl',
      number: '03',
      title: 'Advanced Exam Preparation (IELTS/TOEFL)',
      tagline: 'Band 9.0 precision, academic argument structure, and rapid fluency scores.',
      duration: '6 WEEKS EXPRESS',
      cohortSize: 'MAX 4 FELLOWS',
      gradientShift: 'shifted-champagne',
      description:
        'Tailored for candidates aiming for top-tier university chairs (Oxford, Harvard, INSEAD) or global medical/legal licensure requiring absolute Band 8.5–9.0 fluency.',
      highlights: [
        'Band 9 Speaking Interview Protocols',
        'Complex Academic Essay Rhetoric',
        'Listening Traps & Native Speed Decoding',
        'Rapid Time-Pressure Execution Strategies',
      ],
      modules: [
        {
          phase: 'DIAGNOSTIC',
          title: 'Sub-Criteria Forensic Audit',
          duration: 'WEEK 1',
          description: 'Isolating exact loss points in Grammatical Range, Cohesion, and Lexical Resource.',
          takeaways: ['Loss-Point Audit', 'Band 9 Benchmark', 'Target Map'],
        },
        {
          phase: 'SPEAKING P1-P3',
          title: 'Examiner-Level Speaking Dominance',
          duration: 'WEEKS 2 - 3',
          description: 'Delivering fluid, extended responses without filler words or unnatural pauses.',
          takeaways: ['Part 2 Cue Card Mastery', 'Part 3 Abstract Rhetoric', 'Intonation Flow'],
        },
        {
          phase: 'WRITING TASK 2',
          title: 'Band 9 Academic Essay Architecture',
          duration: 'WEEKS 4 - 5',
          description: 'Structuring complex dual-perspective essays with flawless cohesion.',
          takeaways: ['Cohesive Devices', 'Complex Sentences', 'Lexical Precision'],
        },
        {
          phase: 'SIMULATION',
          title: 'Full Time-Pressured Exam Simulations',
          duration: 'WEEK 6',
          description: 'Real-time mock interviews under exact testing room conditions.',
          takeaways: ['Exam Simulations', 'Instant Scoring', 'Final Readiness'],
        },
      ],
    },
  ];

  const handleMouseEnter = (label) => {
    setCursorHovered(true);
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorLabel('');
  };

  const handleCourseHoverOrClick = (index) => {
    setActiveCourseIndex(index);
    if (onBackgroundShift) {
      onBackgroundShift(courses[index].gradientShift);
    }
    setTimeout(() => {
      window.lenisInstance?.resize();
    }, 50);
  };

  return (
    <div className="relative min-h-screen pt-16 sm:pt-28 pb-16 sm:pb-24 overflow-x-hidden">
      
      {/* Top Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 sm:space-y-4"
        >
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>02 // THE THREE PILLARS OF EXECUTIVE RHETORIC</span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-8xl font-serif-title font-bold text-white tracking-tight leading-tight">
            Curricula of <span className="text-gold-gradient italic font-editorial">Excellence.</span>
          </h1>

          <p className="text-sm sm:text-xl font-sans-body text-neutral-200 max-w-4xl leading-relaxed font-medium">
            Rajiv Singh Sidhu’s curricula are bespoke executive masterclasses designed for rapid, permanent vocal transformation, boardroom command, and Band 9.0 academic precision.
          </p>
        </motion.div>
      </section>

      {/* FULL-WIDTH INTERACTIVE EDITORIAL ACCORDION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-28">
        <div className="space-y-4 sm:space-y-8">
          {courses.map((course, index) => {
            const isOpen = activeCourseIndex === index;

            return (
              <div
                key={course.id}
                className={`rounded-2xl sm:rounded-3xl border transition-colors duration-500 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0B0B0B] border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.15)]'
                    : 'bg-black/80 border-white/15 hover:border-white/40'
                }`}
              >
                {/* Accordion Bar Header */}
                <button
                  onClick={() => handleCourseHoverOrClick(index)}
                  onMouseEnter={() => {
                    handleMouseEnter('EXPLORE');
                    handleCourseHoverOrClick(index);
                  }}
                  onMouseLeave={handleMouseLeave}
                  className="w-full p-5 sm:p-10 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className={`text-2xl sm:text-5xl font-serif-title font-bold ${isOpen ? 'text-[#D4AF37]' : 'text-neutral-500'}`}>
                      {course.number}
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-4xl md:text-5xl font-serif-title font-bold text-white group-hover:text-[#D4AF37]">
                        {course.title}
                      </h2>
                      <p className="text-[11px] sm:text-base font-mono text-neutral-300 mt-1 sm:mt-2 tracking-wider uppercase font-semibold">
                        {course.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0">
                    <span className="text-[10px] sm:text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/15 px-3 py-1.5 rounded-full border border-[#D4AF37]/40 font-bold">
                      {course.duration}
                    </span>
                    <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'border-[#D4AF37] rotate-180 text-[#D4AF37] bg-[#D4AF37]/10' : 'border-white/30 text-neutral-300'
                    }`}>
                      <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      onAnimationComplete={() => window.lenisInstance?.resize()}
                      className="px-5 sm:px-10 pb-8 sm:pb-12 pt-2 border-t border-white/10 space-y-6 sm:space-y-10"
                    >
                      {/* Description & Metadata */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start pt-4">
                        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                          <h3 className="text-[10px] sm:text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                            PROGRAM SCOPE & OBJECTIVE
                          </h3>
                          <p className="text-sm sm:text-lg font-sans-body text-neutral-200 leading-relaxed font-medium">
                            {course.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {course.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans-body text-neutral-100 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="lg:col-span-5 bg-black/90 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/15 space-y-4">
                          <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-neutral-400">COHORT LIMIT:</span>
                            <span className="text-white font-bold">{course.cohortSize}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-neutral-400">CERTIFICATION:</span>
                            <span className="text-[#D4AF37] font-bold">OXFORD RHETORIC FELLOW</span>
                          </div>

                          <div className="pt-2 space-y-3">
                            <button
                              onClick={() => {
                                setSelectedCourseForSyllabus(course);
                                setSyllabusModalOpen(true);
                              }}
                              onMouseEnter={() => handleMouseEnter('SYLLABUS')}
                              onMouseLeave={handleMouseLeave}
                              className="w-full py-3 sm:py-4 bg-white/15 hover:bg-white/25 text-white font-mono text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 font-bold"
                            >
                              <FileText className="w-4 h-4 text-[#D4AF37]" />
                              <span>PREVIEW FULL SYLLABUS DOSSIER</span>
                            </button>

                            <button
                              onClick={() => onOpenBooking(course.title)}
                              onMouseEnter={() => handleMouseEnter('RESERVE')}
                              onMouseLeave={handleMouseLeave}
                              className="w-full py-3 sm:py-4 bg-[#D4AF37] hover:bg-[#e6ca65] text-black font-mono font-bold text-xs tracking-widest uppercase rounded-xl transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                            >
                              <Sparkles className="w-4 h-4" />
                              <span>RESERVE PLACE IN THIS TRACK</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Module Roadmap Breakdown */}
                      <div className="pt-6 sm:pt-8 border-t border-white/10 space-y-4 sm:space-y-6">
                        <h4 className="text-[10px] sm:text-xs font-mono text-neutral-300 uppercase tracking-widest font-bold">
                          FOUR-PHASE CURRICULUM ROADMAP
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {course.modules.map((mod, idx) => (
                            <div key={idx} className="p-4 sm:p-6 rounded-2xl bg-black/90 border border-white/15 space-y-3">
                              <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-[#D4AF37] font-bold">
                                <span>PHASE 0{idx + 1}</span>
                                <span>{mod.duration}</span>
                              </div>
                              <h5 className="text-base sm:text-lg font-serif-title font-bold text-white">{mod.title}</h5>
                              <p className="text-xs font-sans-body text-neutral-300 leading-relaxed font-medium">
                                {mod.description}
                              </p>
                              <div className="pt-1 flex flex-wrap gap-1">
                                {mod.takeaways.map((t, i) => (
                                  <span key={i} className="text-[9px] sm:text-[10px] font-mono bg-white/10 text-neutral-200 px-2 py-0.5 rounded font-semibold">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE FLUENCY DIAGNOSTIC SANDBOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FluencyAnalyzerWidget setCursorLabel={setCursorLabel} setCursorHovered={setCursorHovered} />
        </motion.div>
      </section>

      {/* Syllabus Modal */}
      {selectedCourseForSyllabus && (
        <SyllabusModal
          isOpen={syllabusModalOpen}
          onClose={() => setSyllabusModalOpen(false)}
          courseTitle={selectedCourseForSyllabus.title}
          syllabusData={selectedCourseForSyllabus}
        />
      )}
    </div>
  );
}
