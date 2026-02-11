import React from 'react';
import { useTranslation } from './LanguageProvider.tsx';

export const HardwareShowcase: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hardware" className="py-32 bg-white dark:bg-[#080808] text-obsidian dark:text-white transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-cyan-400/5 dark:bg-black/5 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-all duration-1000"></div>
            <div className="relative bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-1 shadow-2xl overflow-hidden aspect-square flex items-center justify-center border border-black/5 dark:border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-white dark:from-black dark:to-neutral-800"></div>
              <div className="relative z-10 w-3/4 h-3/4 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl dark:shadow-[20px_20px_60px_#000000,-20px_-20px_60px_#1e1e1e] flex flex-col items-center justify-center border border-black/5 dark:border-white/5">
                <div className="w-16 h-16 border-2 border-cyan-400/50 rounded-full flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-3xl font-black text-obsidian dark:text-white/90 tracking-tighter text-center px-4 uppercase leading-none">
                  <span className="text-cyan-500">K</span>onnect Fiber lb Hub
                </span>
                <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold">{t.hardware.v4Title}</span>
              </div>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/5 dark:from-white/10 to-transparent transform -skew-y-12"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 md:order-2">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
            {t.hardware.title}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light mb-10 leading-relaxed">
            {t.hardware.desc}
          </p>
          <ul className="space-y-4">
            {t.hardware.specs.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};