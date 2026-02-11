import React, { useState } from 'react';
import { useTranslation } from './LanguageProvider.tsx';

export const EngagementSection: React.FC = () => {
  const { t, language } = useTranslation();
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'success' | 'expansion'>('idle');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;
    setStatus('checking');
    
    setTimeout(() => {
      const lowerAddress = address.toLowerCase();
      if (lowerAddress.includes('chekka') || lowerAddress.includes('شكا')) {
        setStatus('success');
      } else {
        setStatus('expansion');
      }
    }, 1500);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-alabaster dark:bg-obsidian border-t border-obsidian/5 dark:border-white/5 transition-colors duration-500">
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.3)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase text-obsidian dark:text-white leading-none">
          {language === 'en' ? (
            <>Is your neighborhood <br/><span className="text-cyan-500">K</span>onnected?</>
          ) : (
            <>هل منطقتك <br/><span className="text-cyan-500">متصلة</span>؟</>
          )}
        </h2>
        <p className="text-obsidian/50 dark:text-white/50 text-lg mb-12 max-w-xl mx-auto italic font-light">
          {t.engagement.desc}
        </p>

        <form onSubmit={handleCheck} className="relative max-w-2xl mx-auto group">
          <input 
            type="text" 
            placeholder={t.engagement.placeholder}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            disabled={status === 'checking'}
            className={`w-full bg-white dark:bg-white/5 border rounded-full py-6 px-8 text-lg focus:outline-none focus:ring-2 transition-all placeholder:text-obsidian/20 dark:placeholder:text-white/20 text-obsidian dark:text-white ${
              status === 'success' ? 'border-cyan-500/50 focus:ring-cyan-500/30' : 
              status === 'expansion' ? 'border-amber-500/50 focus:ring-amber-500/30' :
              'border-obsidian/10 dark:border-white/10 focus:ring-cyan-500/50'
            } ${language === 'ar' ? 'text-right' : ''}`}
          />
          <button 
            type="submit"
            disabled={status === 'checking' || !address}
            className={`absolute ${language === 'ar' ? 'left-2' : 'right-2'} top-2 bottom-2 px-8 bg-obsidian text-white dark:bg-white dark:text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-cyan-500 dark:hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105`}
          >
            {status === 'checking' ? t.engagement.checking : t.engagement.cta}
          </button>
        </form>

        <div className="h-16 mt-6 flex justify-center">
          {status === 'success' && (
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-cyan-600 dark:text-cyan-400">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="font-bold text-xs uppercase tracking-widest">{t.engagement.activeNode}</span>
              </div>
            </div>
          )}
          
          {status === 'expansion' && (
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-700 dark:text-amber-400">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                <span className="font-bold text-xs uppercase tracking-widest">{t.engagement.expansion}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};