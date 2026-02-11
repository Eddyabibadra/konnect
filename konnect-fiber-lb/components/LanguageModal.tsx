import React, { useState, useEffect } from 'react';
import { useTranslation, Language } from './LanguageProvider.tsx';

export const LanguageModal: React.FC = () => {
  const { setLanguage } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasChosen = localStorage.getItem('language_chosen');
    if (!hasChosen) {
      setIsVisible(true);
    }
  }, []);

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language_chosen', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-obsidian/80 backdrop-blur-xl animate-fade-in px-6">
      <div className="bg-white dark:bg-neutral-900 w-full max-w-md p-10 rounded-[3rem] border border-white/10 shadow-2xl text-center transform scale-100 animate-in zoom-in-95 duration-500">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-obsidian text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center text-3xl font-black shadow-xl ring-4 ring-cyan-500/20">
            K
          </div>
        </div>
        
        <h2 className="text-3xl font-black tracking-tighter mb-4 uppercase text-obsidian dark:text-white">
          Welcome to Konnect
        </h2>
        <p className="text-obsidian/50 dark:text-white/40 mb-10 italic font-light">
          Choose your interface language to begin.
          <br/>
          <span className="text-[10px] mt-2 block opacity-60">اختر لغة الواجهة للبدء</span>
        </p>

        <div className="flex flex-col gap-4">
          <button 
            onClick={() => selectLanguage('en')}
            className="group relative w-full py-5 bg-obsidian text-white dark:bg-white dark:text-black font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden transition-all hover:shadow-cyan-500/20 shadow-lg"
          >
            <span className="relative z-10">Continue in English</span>
          </button>
          
          <button 
            onClick={() => selectLanguage('ar')}
            className="group relative w-full py-5 border border-obsidian/10 dark:border-white/10 text-obsidian dark:text-white font-black uppercase tracking-[0.2em] text-sm rounded-full transition-all hover:bg-obsidian/5 dark:hover:bg-white/5"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            المتابعة بالعربية
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-obsidian/5 dark:border-white/5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-obsidian/30 dark:text-white/20 font-black">
            Konnect Fiber lb | Lebanon
          </p>
        </div>
      </div>
    </div>
  );
};