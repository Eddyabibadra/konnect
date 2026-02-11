import React, { useState, useEffect } from 'react';
import { geminiService } from '../services/geminiService.ts';

const GeminiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
    <path 
      d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" 
      fill="currentColor" 
      className="animate-pulse"
    />
    <path 
      d="M18 4L19 6L21 7L19 8L18 10L17 8L15 7L17 6L18 4Z" 
      fill="currentColor" 
      className="opacity-40 animate-pulse"
      style={{ animationDelay: '0.5s' }}
    />
  </svg>
);

export const NetworkAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-network-assistant', handleOpen);
    return () => window.removeEventListener('open-network-assistant', handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const result = await geminiService.analyzeNetworkQuery(query);
    setAnswer(result?.text || "Error processing query.");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[150]">
      {isOpen ? (
        <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 w-[calc(100vw-3rem)] sm:w-80 shadow-2xl animate-fade-in-up">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <GeminiIcon />
              <span className="text-cyan-500">K</span>onnect Intelligence
            </span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors bg-white/5 rounded-full"
            >
              ✕
            </button>
          </div>
          
          <div className="mb-6 min-h-[80px] flex items-center justify-center text-sm text-white/70">
            {loading ? (
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            ) : (
              <p className="leading-relaxed italic text-center px-2">
                {answer || "How can I optimize your connectivity experience today?"}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <input 
              type="text" 
              placeholder="Type your inquiry..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:border-cyan-500 transition-all placeholder:text-white/20 text-white"
            />
            <button 
              type="submit" 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
            >
              →
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          aria-label="Toggle AI Assistant"
          className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-cyan-400 transition-all group overflow-hidden relative"
        >
          <div className="relative z-10 transition-colors group-hover:text-white">
            <GeminiIcon />
          </div>
          <div className="absolute inset-0 bg-white group-hover:bg-cyan-400 transition-colors"></div>
          {/* Subtle pulse ring */}
          <div className="absolute inset-0 animate-ping bg-white/20 rounded-full"></div>
        </button>
      )}

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
};