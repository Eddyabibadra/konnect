import React from 'react';
import { useTranslation } from '../components/LanguageProvider.tsx';

export const Security: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{t.security.badge}</span>
          <h1 className="text-6xl font-black tracking-tighter mb-8">{t.security.title}</h1>
          <p className="text-xl text-obsidian/50 dark:text-white/50 leading-relaxed mb-12 italic font-light">
            {t.security.desc}
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-neutral-100 dark:bg-white/5 rounded-2xl border border-obsidian/5 dark:border-white/5">
                <div className="text-obsidian dark:text-white font-bold mb-2">{t.security.wpa3}</div>
                <p className="text-xs text-obsidian/40 dark:text-white/40 italic">{t.security.wpa3Desc}</p>
             </div>
             <div className="p-6 bg-neutral-100 dark:bg-white/5 rounded-2xl border border-obsidian/5 dark:border-white/5">
                <div className="text-obsidian dark:text-white font-bold mb-2">{t.security.edge}</div>
                <p className="text-xs text-obsidian/40 dark:text-white/40 italic">{t.security.edgeDesc}</p>
             </div>
          </div>
        </div>
        <div className="p-1 border border-obsidian/10 dark:border-white/10 rounded-[3rem] overflow-hidden">
           <img src="https://picsum.photos/seed/security_tech/800/1000" className="w-full rounded-[2.8rem] opacity-60 grayscale" alt="Security Technology" />
        </div>
      </div>
    </div>
  );
};