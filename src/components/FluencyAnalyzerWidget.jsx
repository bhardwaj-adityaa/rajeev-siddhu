import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, RefreshCw, Mic } from 'lucide-react';

export default function FluencyAnalyzerWidget({ setCursorLabel, setCursorHovered }) {
  const sampleSentences = [
    "Our quarterly performance demonstrates unprecedented expansion across emerging European markets.",
    "I propose a restructured timeline that aligns our capital expenditure with immediate strategic ROI.",
    "With all due respect to the board, hesitation today relinquishes our first-mover advantage permanently.",
  ];

  const [selectedSentence, setSelectedSentence] = useState(sampleSentences[0]);
  const [customText, setCustomText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const runDiagnostic = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      const textToEval = customText || selectedSentence;
      const wordCount = textToEval.trim().split(/\s+/).length;
      
      setAnalysisResult({
        overallScore: 96,
        cadenceScore: 94,
        gravitasScore: 98,
        articulationIndex: 'Optimal',
        pauseMarkers: Math.min(Math.floor(wordCount / 4), 3),
        suggestedEmphasis: textToEval.split(' ').filter(w => w.length > 7).slice(0, 3),
        feedback: "Excellent rhythmic balance. To increase boardroom weight, lengthen the silent pause preceding key technical nouns by 0.4 seconds.",
      });
    }, 1500);
  };

  const handleMouseEnter = (label) => {
    setCursorHovered(true);
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorLabel('');
  };

  return (
    <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
      
      {/* Top Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-1.5">
          <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
          <span>REAL-TIME EXECUTIVE CADENCE DIAGNOSTIC</span>
        </div>
        <h3 className="text-xl sm:text-3xl font-serif-title font-bold text-white">
          Test Your Rhetoric Gravitas
        </h3>
        <p className="text-xs sm:text-sm font-sans-body text-neutral-400 mt-1.5 sm:mt-2">
          Select or input an executive boardroom phrase to analyze your articulation index, vocal weight distribution, and strategic pause cadence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        
        {/* Left Input Column */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          
          {/* Preset Prompts */}
          <div>
            <label className="block text-[10px] sm:text-xs font-mono text-neutral-400 uppercase mb-2">
              SELECT EXECUTIVE SAMPLE PHRASE
            </label>
            <div className="space-y-2">
              {sampleSentences.map((sentence, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedSentence(sentence);
                    setCustomText('');
                    setAnalysisResult(null);
                  }}
                  className={`w-full p-2.5 sm:p-3 rounded-xl text-xs font-sans-body text-left transition-all border ${
                    selectedSentence === sentence && !customText
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white font-medium'
                      : 'bg-black/40 border-white/10 text-neutral-400 hover:border-white/30'
                  }`}
                >
                  "{sentence}"
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input */}
          <div>
            <label className="block text-[10px] sm:text-xs font-mono text-neutral-400 uppercase mb-2">
              OR TYPE YOUR CUSTOM SPEECH SEGMENT
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Next quarter, we will pivot our core architecture to capture enterprise demand..."
              value={customText}
              onChange={(e) => {
                setCustomText(e.target.value);
                setAnalysisResult(null);
              }}
              className="gold-input w-full p-3 sm:p-4 text-xs sm:text-sm font-sans-body rounded-xl resize-none"
            />
          </div>

          {/* Diagnostic Action Button */}
          <button
            onClick={runDiagnostic}
            disabled={isAnalyzing}
            onMouseEnter={() => handleMouseEnter('ANALYZE')}
            onMouseLeave={handleMouseLeave}
            className="w-full py-3.5 sm:py-4 bg-[#D4AF37] hover:bg-[#e6ca65] text-black font-mono font-bold text-xs tracking-widest uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>PROCESSING CADENCE ACOUSTICS...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>RUN RHETORIC DIAGNOSTIC</span>
              </>
            )}
          </button>
        </div>

        {/* Right Output Column */}
        <div className="lg:col-span-5 bg-black/60 border border-white/10 p-4 sm:p-6 rounded-2xl flex flex-col justify-between">
          {!analysisResult ? (
            <div className="text-center py-8 sm:py-12 space-y-3 sm:space-y-4 my-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                <Mic className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <p className="text-[11px] sm:text-xs font-mono text-neutral-400 max-w-xs mx-auto">
                Select a phrase and press "Run Rhetoric Diagnostic" to generate your real-time vocal weight and cadence analysis.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Top Score */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase">EXECUTIVE RHETORIC INDEX</span>
                  <div className="text-2xl sm:text-3xl font-serif-title font-bold text-white flex items-center gap-2">
                    <span>96 / 100</span>
                    <span className="text-[10px] sm:text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">OPTIMAL</span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/15 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] font-serif-title font-bold text-base sm:text-lg">
                  A+
                </div>
              </div>

              {/* Metric Breakdown */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-[11px] sm:text-xs font-mono">
                  <span className="text-neutral-400">Rhythmic Cadence:</span>
                  <span className="text-white font-bold">{analysisResult.cadenceScore}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#D4AF37]" style={{ width: `${analysisResult.cadenceScore}%` }} />
                </div>

                <div className="flex justify-between text-[11px] sm:text-xs font-mono pt-1">
                  <span className="text-neutral-400">Resonant Gravitas:</span>
                  <span className="text-white font-bold">{analysisResult.gravitasScore}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#D4AF37]" style={{ width: `${analysisResult.gravitasScore}%` }} />
                </div>
              </div>

              {/* Suggested Emphasis Words */}
              <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl space-y-1">
                <span className="text-[9px] sm:text-[10px] font-mono text-[#D4AF37] uppercase font-bold">KEYWORD EMPHASIS ANCHORS</span>
                <div className="flex flex-wrap gap-1">
                  {analysisResult.suggestedEmphasis.map((w, i) => (
                    <span key={i} className="text-xs font-serif-title text-white bg-black/60 px-2 py-0.5 rounded border border-white/10">
                      "{w.replace(/[^a-zA-Z]/g, "")}"
                    </span>
                  ))}
                </div>
              </div>

              {/* Critique */}
              <div className="text-xs font-sans-body text-neutral-300 leading-relaxed border-t border-white/10 pt-3">
                <span className="text-[#D4AF37] font-mono font-bold block mb-1">COACHING CRITIQUE:</span>
                "{analysisResult.feedback}"
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
