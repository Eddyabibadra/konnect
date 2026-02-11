import React from 'react';
import { useTranslation } from '../components/LanguageProvider.tsx';

export const Hardware: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in bg-alabaster dark:bg-obsidian transition-colors duration-500">
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <span className="text-cyan-500 text-xs font-black tracking-[0.3em] uppercase mb-4 block">
            The <span className="text-cyan-500">Konnect</span> Hub V.4
          </span>
          <h1 className="text-6xl font-black tracking-tighter mb-8 uppercase text-obsidian dark:text-white leading-none">{t.hardware.artTitle}</h1>
          <p className="text-lg text-obsidian/60 dark:text-white/60 leading-relaxed mb-12 font-light italic">
            {t.hardware.artDesc}
          </p>
          <div className="space-y-6">
            <div className="flex justify-between border-b border-obsidian/10 dark:border-white/10 pb-4">
              <span className="text-obsidian/40 dark:text-white/40 uppercase tracking-widest text-[10px] font-bold">{t.hardware.processor}</span>
              <span className="font-mono text-sm font-black text-obsidian dark:text-white">Quad-Core 2.4GHz Engine</span>
            </div>
            <div className="flex justify-between border-b border-obsidian/10 dark:border-white/10 pb-4">
              <span className="text-obsidian/40 dark:text-white/40 uppercase tracking-widest text-[10px] font-bold">{t.hardware.standard}</span>
              <span className="font-mono text-sm font-black text-obsidian dark:text-white">Wi-Fi 7 (802.11be) Ready</span>
            </div>
            <div className="flex justify-between border-b border-obsidian/10 dark:border-white/10 pb-4">
              <span className="text-obsidian/40 dark:text-white/40 uppercase tracking-widest text-[10px] font-bold">{t.hardware.ports}</span>
              <span className="font-mono text-sm font-black text-obsidian dark:text-white">4x 2.5G + 1x 10G SFP+</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white dark:bg-neutral-900 rounded-[3rem] border border-obsidian/5 dark:border-white/5 flex items-center justify-center shadow-2xl overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white dark:from-black dark:to-neutral-800 opacity-50"></div>
             <div className="relative z-10 w-1/2 h-1/2 bg-obsidian text-white rounded-[2rem] shadow-2xl flex items-center justify-center transform rotate-12 transition-transform hover:rotate-0 duration-1000 group">
                <div className="text-7xl font-black group-hover:scale-110 transition-transform">
                  <span className="text-cyan-500">K</span>
                </div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};