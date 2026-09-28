import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Send, Quote, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import RajivPortrait from '../components/RajivPortrait';

export default function MasterPage({ onOpenBooking: _onOpenBooking, setCursorLabel, setCursorHovered }) {
  const testimonials = [
    {
      quote: "Rajiv Singh Sidhu didn't just refine my pronunciation—he reshaped how I command the boardroom during global M&A negotiations.",
      author: "MAXIMILIAN VON BERG",
      role: "Managing Director, Swiss Private Equity Consortium",
      location: "ZÜRICH",
    },
    {
      quote: "Delivering my keynote address at the World Economic Forum in English was intimidating until I trained under Rajiv’s acoustic cadence protocol.",
      author: "DR. ELENA ROSTOVA",
      role: "Chief Executive Officer, Global Biotech Innovations",
      location: "LONDON",
    },
    {
      quote: "In international diplomacy, a single miscalculated intonation can derail months of treaty negotiation. Rajiv is without equal.",
      author: "AMBASSADOR HENRIK LINDQVIST",
      role: "Senior Envoy to Northern European Security Council",
      location: "STOCKHOLM",
    },
    {
      quote: "Rajiv’s guidance turned my technical complexity into crisp, magnetic investor rhetoric. We secured $140M in Series C following his coaching.",
      author: "TAKASHI SATO",
      role: "Co-Founder & CEO, Neural Systems Corp",
      location: "SINGAPORE",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);

      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#FFF', '#F5D77F'],
        });
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  const handleMouseEnter = (label) => {
    setCursorHovered(true);
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorLabel('');
  };

  const credentials = [
    { year: '2010 - PRESENT', title: 'Principal Language Master', institution: 'Rajiv Singh Sidhu Rhetoric Atelier' },
    { year: '2012 - 2016', title: 'Senior Fellow in Applied Phonetics', institution: 'University of Oxford' },
    { year: '2015', title: 'Guest Lecturer in Executive Rhetoric', institution: 'Harvard Kennedy School of Government' },
    { year: '2018 - PRESENT', title: 'Private Speech Coach', institution: 'Davos Economic Forum Speakers' },
  ];

  return (
    <div className="relative min-h-screen pt-16 sm:pt-28 pb-16 sm:pb-24 overflow-x-hidden">
      
      {/* EDITORIAL MAGAZINE LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>03 // ABOUT THE MASTER & ATELIER</span>
            </div>

            <h1 className="text-3xl sm:text-6xl md:text-7xl font-serif-title font-bold text-white tracking-tight leading-tight">
              Rajiv Singh Sidhu. <br />
              <span className="text-gold-gradient italic font-editorial">The Art of Command.</span>
            </h1>

            <div className="space-y-4 text-sm sm:text-lg font-sans-body text-neutral-200 leading-relaxed font-medium">
              <p>
                With over fifteen years of elite practice spanning Oxford, Mayfair, Zürich, and Singapore, Rajiv Singh Sidhu has served as the private rhetoric master to heads of state, Fortune 500 CEOs, global venture partners, and international diplomats.
              </p>
              <p>
                He believes that true English fluency is not merely grammatical correctness—it is an instrument of authority. His proprietary framework combines acoustic resonance, speech cadence, and strategic pause mechanics to ensure that when his fellows speak, room dynamics shift instantly in their favor.
              </p>
            </div>

            {/* Credentials Matrix */}
            <div className="pt-4 border-t border-white/15 space-y-3">
              <h4 className="text-[10px] sm:text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                ACADEMIC & PROFESSIONAL CREDENTIALS
              </h4>
              <div className="space-y-2">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono border-b border-white/10 pb-2">
                    <span className="text-white font-bold">{cred.title}</span>
                    <span className="text-neutral-300">{cred.institution} ({cred.year})</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center p-2 min-h-[360px] sm:min-h-[500px]"
          >
            <RajivPortrait className="w-full h-[360px] sm:h-[560px] shadow-[0_0_80px_rgba(212,175,55,0.2)]" />
          </motion.div>

        </div>
      </section>

      {/* CINEMATIC MOVIE CREDIT TESTIMONIALS */}
      <section className="py-16 sm:py-28 border-y border-white/15 bg-black/85 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-10">
          
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
            <Quote className="w-4 h-4 text-[#D4AF37]" />
            <span>FELLOW ENDORSEMENTS & DISPATCHES</span>
          </div>

          {/* Animated Quote */}
          <div className="min-h-[200px] sm:min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-6 max-w-4xl"
              >
                <p className="text-xl sm:text-3xl md:text-4xl font-editorial italic text-white leading-relaxed text-gold-gradient">
                  "{testimonials[currentTestimonialIndex].quote}"
                </p>

                <div className="space-y-1 pt-2 sm:pt-4">
                  <h4 className="text-sm sm:text-base font-mono tracking-widest text-white uppercase font-bold">
                    {testimonials[currentTestimonialIndex].author}
                  </h4>
                  <p className="text-xs sm:text-sm font-sans-body text-neutral-300 font-medium">
                    {testimonials[currentTestimonialIndex].role} •{' '}
                    <span className="text-[#D4AF37] font-mono font-bold">{testimonials[currentTestimonialIndex].location}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonialIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentTestimonialIndex === i ? 'w-8 sm:w-10 bg-[#D4AF37]' : 'w-2.5 sm:w-3 bg-white/30'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-10 sm:space-y-14">
          
          <div className="text-center space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
              PRIVATE ENQUIRY & ATELIER ADMISSION
            </span>
            <h2 className="text-3xl sm:text-6xl font-serif-title font-bold text-white">
              Initiate Direct <span className="text-gold-gradient italic font-editorial">Dialogue.</span>
            </h2>
            <p className="text-xs sm:text-base font-sans-body text-neutral-300 max-w-xl mx-auto font-medium">
              No middle sales managers. Messages sent here are reviewed directly by Rajiv Singh Sidhu’s private office.
            </p>
          </div>

          {!formSubmitted ? (
            <motion.form
              onSubmit={handleContactSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-2">
                  <label className="block text-[10px] sm:text-xs font-mono text-neutral-300 uppercase tracking-widest font-bold">
                    YOUR FULL NAME *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Jean-Luc Moreau"
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    className="gold-input w-full py-3 sm:py-4 text-base sm:text-xl font-sans-body"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] sm:text-xs font-mono text-neutral-300 uppercase tracking-widest font-bold">
                    CORPORATE / EXECUTIVE EMAIL *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="moreau@paribas.com"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    className="gold-input w-full py-3 sm:py-4 text-base sm:text-xl font-sans-body"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] sm:text-xs font-mono text-neutral-300 uppercase tracking-widest font-bold">
                  EXECUTIVE TITLE / COMPANY ROLE
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chief Operating Officer, Global Logistics"
                  value={contactData.role}
                  onChange={(e) => setContactData({ ...contactData, role: e.target.value })}
                  className="gold-input w-full py-3 sm:py-4 text-base sm:text-xl font-sans-body"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] sm:text-xs font-mono text-neutral-300 uppercase tracking-widest font-bold">
                  PERSONAL STATEMENT OR SPECIFIC RHETORIC GOALS *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Detail your upcoming keynotes, accent refinement goals, or board meeting dates..."
                  value={contactData.message}
                  onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                  className="gold-input w-full py-3 sm:py-4 text-base sm:text-xl font-sans-body resize-none"
                />
              </div>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  <span>NON-DISCLOSURE AGREEMENT PROTECTED</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => handleMouseEnter('TRANSMIT')}
                  onMouseLeave={handleMouseLeave}
                  className="btn-liquid w-full sm:w-auto px-10 py-4 sm:py-5 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:text-black font-mono text-xs sm:text-sm tracking-widest uppercase font-bold shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>TRANSMIT DISPATCH</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-8 sm:p-16 rounded-3xl bg-[#0B0B0B] border-2 border-[#D4AF37] space-y-6 shadow-[0_0_60px_rgba(212,175,55,0.3)]"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <div className="space-y-2 sm:space-y-3">
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">DISPATCH TRANSMITTED</span>
                <h3 className="text-2xl sm:text-5xl font-serif-title font-bold text-white">
                  Message Dispatched to Rajiv Singh Sidhu
                </h3>
                <p className="text-sm sm:text-xl font-sans-body text-neutral-200 max-w-lg mx-auto font-medium">
                  Thank you, <span className="text-[#D4AF37] font-bold">{contactData.name}</span>. Rajiv's private office has received your dispatch and will reply within four business hours.
                </p>
              </div>

              <button
                onClick={() => setFormSubmitted(false)}
                className="px-8 py-3.5 bg-[#D4AF37] text-black font-mono text-xs tracking-widest uppercase font-bold rounded-full shadow-lg"
              >
                SUBMIT ANOTHER DISPATCH
              </button>
            </motion.div>
          )}

        </div>
      </section>

    </div>
  );
}
