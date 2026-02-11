import React from 'react';
import { useTranslation } from '../components/LanguageProvider.tsx';

export const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-12 text-obsidian dark:text-white">{t.privacy.title}</h1>
      <div className="space-y-12 text-obsidian/60 dark:text-white/60 leading-relaxed font-light italic">
        <section>
          <h2 className="text-obsidian dark:text-white font-bold mb-4 uppercase tracking-tighter">{t.privacy.dataTitle}</h2>
          <p>{t.privacy.dataDesc}</p>
        </section>
        <section>
          <h2 className="text-obsidian dark:text-white font-bold mb-4 uppercase tracking-tighter">{t.privacy.transTitle}</h2>
          <p>{t.privacy.transDesc}</p>
        </section>
      </div>
    </div>
  );
};