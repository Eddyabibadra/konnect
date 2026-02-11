import React from 'react';
import { useNavigation } from '../App.tsx';
import { useTranslation } from './LanguageProvider.tsx';

export const Hero: React.FC = () => {
  const { navigate } = useNavigation();
  const { t, language } = useTranslation();

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-alabaster dark:bg-obsidian pt-20 md:pt-32">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-20 bg-[length:32px_32px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_60%)]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-30 animate-pulse-line"
              style={{
                top: `${15 + i * 12}%`,
                left: '-100%',
                width: '300%',
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full mb-10">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-obsidian/60 dark:text-white/60">{t.hero.badge}</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] uppercase text-obsidian dark:text-white">
          {language === 'en' ? (
            <><span className="text-cyan-500">K</span>onnectivity</>
          ) : (
            <>{t.hero.slogan}</>
          )} 
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-obsidian via-cyan-400 to-neutral-400 dark:from-white dark:via-cyan-400 dark:to-neutral-700">
            {t.hero.sloganAccent}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-obsidian/50 dark:text-white/50 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => navigate('/contact')}
            className="group relative px-10 py-5 bg-obsidian text-white dark:bg-white dark:text-black font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-xl"
          >
            <span className="relative z-10">{t.hero.ctaPrimary}</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
          </button>
          <button 
            onClick={() => navigate('/tech')}
            className="px-10 py-5 border border-obsidian/10 dark:border-white/10 text-obsidian dark:text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-obsidian/5 dark:hover:bg-white/5 hover:border-obsidian/30 dark:hover:border-white/30 backdrop-blur-sm transition-all"
          >
            {t.hero.ctaSecondary}
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-obsidian dark:from-white to-transparent"></div>
      </div>
    </section>
  );
};