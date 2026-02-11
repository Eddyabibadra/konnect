import React from 'react';
import { useTranslation } from '../components/LanguageProvider.tsx';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 px-6 max-w-xl mx-auto animate-fade-in text-center bg-alabaster dark:bg-obsidian transition-colors duration-500">
      <div className="w-16 h-16 bg-obsidian text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 shadow-xl">K</div>
      <h1 className="text-6xl font-black tracking-tighter mb-4 uppercase text-obsidian dark:text-white leading-none">{t.support.directHub}</h1>
      <p className="text-obsidian/50 dark:text-white/40 mb-12 italic font-light">{t.support.directDesc}</p>
      
      <div className="space-y-4">
        <a 
          href="tel:+96176472530" 
          className="flex items-center gap-6 p-8 bg-neutral-100 dark:bg-white/5 border border-obsidian/5 dark:border-white/10 rounded-[2.5rem] text-left hover:border-cyan-500/50 hover:bg-white dark:hover:bg-white/10 transition-all group shadow-sm hover:shadow-xl"
        >
          <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform text-2xl">☏</div>
          <div>
            <div className="font-black text-xl uppercase tracking-tighter text-obsidian dark:text-white">Eddy Abi Badra</div>
            <div className="text-xs text-obsidian/40 dark:text-white/40 italic font-medium">+961 76 472 530</div>
          </div>
        </a>

        <a 
          href="tel:+96103349248" 
          className="flex items-center gap-6 p-8 bg-neutral-100 dark:bg-white/5 border border-obsidian/5 dark:border-white/10 rounded-[2.5rem] text-left hover:border-cyan-500/50 hover:bg-white dark:hover:bg-white/10 transition-all group shadow-sm hover:shadow-xl"
        >
          <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform text-2xl">☏</div>
          <div>
            <div className="font-black text-xl uppercase tracking-tighter text-obsidian dark:text-white">Kamal Abi Badra</div>
            <div className="text-xs text-obsidian/40 dark:text-white/40 italic font-medium">+961 03 349 248</div>
          </div>
        </a>

        <a 
          href="mailto:konnect.fiber.lb@outlook.com" 
          className="flex items-center gap-6 p-8 bg-neutral-100 dark:bg-white/5 border border-obsidian/5 dark:border-white/10 rounded-[2.5rem] text-left hover:border-cyan-500/50 hover:bg-white dark:hover:bg-white/10 transition-all group shadow-sm hover:shadow-xl"
        >
          <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform text-2xl">✉</div>
          <div>
            <div className="font-black text-xl uppercase tracking-tighter text-obsidian dark:text-white">{t.support.emailTitle}</div>
            <div className="text-xs text-obsidian/40 dark:text-white/40 italic font-medium">konnect.fiber.lb@outlook.com</div>
          </div>
        </a>

        <div className="mt-12 pt-12 border-t border-obsidian/5 dark:border-white/5">
           <p className="text-[10px] uppercase tracking-[0.3em] text-obsidian/20 dark:text-white/20 font-black">{t.support.status}</p>
           <p className="text-xs text-obsidian/40 dark:text-white/40 mt-2 font-bold italic">{t.support.priority}</p>
        </div>
      </div>
    </div>
  );
};