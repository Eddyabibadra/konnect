import React from 'react';
import { useTranslation } from '../components/LanguageProvider.tsx';

export const Support: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto animate-fade-in bg-alabaster dark:bg-obsidian transition-colors duration-500">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-black tracking-tighter mb-8 uppercase text-obsidian dark:text-white leading-none">{t.support.title}</h1>
        <p className="text-xl text-obsidian/50 dark:text-white/50 leading-relaxed font-light italic">
          {t.support.desc}
        </p>
      </div>

      <div className="grid gap-8">
        <a 
          href="tel:+96176472530"
          className="p-8 bg-neutral-100 dark:bg-white/5 border border-obsidian/5 dark:border-white/10 rounded-[2.5rem] flex items-center gap-8 hover:border-cyan-500/30 transition-all group"
        >
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 text-3xl group-hover:scale-110 transition-transform">☏</div>
          <div>
            <h3 className="text-xl font-black mb-1 uppercase tracking-tighter text-obsidian dark:text-white">Eddy Abi Badra</h3>
            <p className="text-obsidian/40 dark:text-white/40 text-sm font-medium italic">+961 76 472 530. {t.support.wait}</p>
          </div>
        </a>

        <a 
          href="tel:+96103349248"
          className="p-8 bg-neutral-100 dark:bg-white/5 border border-obsidian/5 dark:border-white/10 rounded-[2.5rem] flex items-center gap-8 hover:border-cyan-500/30 transition-all group"
        >
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 text-3xl group-hover:scale-110 transition-transform">☏</div>
          <div>
            <h3 className="text-xl font-black mb-1 uppercase tracking-tighter text-obsidian dark:text-white">Kamal Abi Badra</h3>
            <p className="text-obsidian/40 dark:text-white/40 text-sm font-medium italic">+961 03 349 248. {t.support.wait}</p>
          </div>
        </a>

        <div className="p-8 bg-neutral-100 dark:bg-white/5 border border-obsidian/5 dark:border-white/10 rounded-[2.5rem] flex items-center gap-8 hover:border-cyan-500/30 transition-all">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 text-3xl">✉</div>
          <div>
            <h3 className="text-xl font-black mb-1 uppercase tracking-tighter text-obsidian dark:text-white">{t.support.emailTitle}</h3>
            <p className="text-obsidian/40 dark:text-white/40 text-sm font-medium italic">konnect.fiber.lb@outlook.com. {t.support.emailDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};