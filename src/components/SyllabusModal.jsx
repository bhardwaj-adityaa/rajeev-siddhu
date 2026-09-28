import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Award, Clock } from 'lucide-react';

export default function SyllabusModal({ isOpen, onClose, courseTitle, syllabusData }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative z-10 w-full max-w-3xl bg-[#0F0F0F] border border-[#D4AF37]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-[0_0_50px_rgba(212,175,55,0.15)] my-3 sm:my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-colors z-20"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-2">
              <FileText className="w-4 h-4" />
              <span>CONFIDENTIAL EXECUTIVE SYLLABUS</span>
            </div>
            <h3 className="text-3xl font-serif-title font-bold text-white tracking-tight">
              {courseTitle}
            </h3>
            <p className="text-sm font-sans-body text-neutral-400 mt-2">
              Full 12-week intensive curriculum outline, module milestones, and vocal resonance metrics.
            </p>
          </div>

          {/* Syllabus Modules */}
          <div className="space-y-4 mb-8">
            {syllabusData?.modules?.map((mod, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#D4AF37] font-semibold">
                    PHASE 0{idx + 1} // {mod.phase}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-neutral-400" />
                    {mod.duration}
                  </span>
                </div>
                <h4 className="text-base font-serif-title font-bold text-white">{mod.title}</h4>
                <p className="text-xs font-sans-body text-neutral-400">{mod.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {mod.takeaways?.map((item, i) => (
                    <span key={i} className="text-[10px] font-mono bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certification details */}
          <div className="p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#D4AF37]" />
              <div>
                <span className="text-xs font-mono text-white font-bold block">OXFORD RHETORIC FELLOWSHIP CREDIT</span>
                <span className="text-[11px] font-sans-body text-neutral-400">Includes 1-on-1 private voice lab analysis & lifetime speech archive</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                alert(`Downloading Confidential Executive Brief for ${courseTitle}...`);
              }}
              className="flex-1 py-3.5 bg-[#D4AF37] hover:bg-[#e6ca65] text-black font-mono font-bold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF DOSSIER</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3.5 bg-black/60 border border-white/20 text-white font-mono text-xs tracking-widest uppercase rounded-xl hover:bg-white/10"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
