import React from 'react';
import { useTranslation } from '../components/LanguageProvider.tsx';

export const Business: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in text-center">
      <h1 className="text-6xl font-black tracking-tighter mb-8 text-obsidian dark:text-white uppercase">{t.business.title}</h1>
      <p className="text-xl text-obsidian/50 dark:text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
        {t.business.desc}
      </p>
      <div className="bg-neutral-100 dark:bg-white/5 border border-obsidian/10 dark:border-white/10 p-12 rounded-[3rem] inline-block text-left max-w-xl w-full shadow-xl transition-colors duration-500">
        <h3 className="text-2xl font-black mb-4 uppercase text-obsidian dark:text-white">{t.business.quoteTitle}</h3>
        <p className="text-sm text-obsidian/40 dark:text-white/40 mb-8 italic font-medium">{t.business.quoteDesc}</p>
        <form className="space-y-4">
           <input type="text" placeholder={t.business.companyName} className="w-full bg-white dark:bg-black/40 border border-obsidian/10 dark:border-white/10 rounded-xl p-4 text-sm focus:border-cyan-500 outline-none text-obsidian dark:text-white" />
           <input type="email" placeholder={t.business.email} className="w-full bg-white dark:bg-black/40 border border-obsidian/10 dark:border-white/10 rounded-xl p-4 text-sm focus:border-cyan-500 outline-none text-obsidian dark:text-white" />
           <button className="w-full bg-obsidian text-white dark:bg-white dark:text-black font-black py-4 rounded-full text-xs uppercase tracking-widest hover:bg-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white transition-all">{t.business.cta}</button>
        </form>
      </div>
    </div>
  );
};