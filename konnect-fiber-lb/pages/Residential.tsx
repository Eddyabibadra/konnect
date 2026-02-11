import React from 'react';
import { useTranslation } from '../components/LanguageProvider.tsx';

export const Residential: React.FC = () => {
  const { t } = useTranslation();

  const planData = [
    { name: t.residential.plans.starter, speed: t.residential.plans.speed300, price: "$40" },
    { name: t.residential.plans.pro, speed: t.residential.plans.speed600, price: "$60" },
    { name: t.residential.plans.elite, speed: t.residential.plans.speed1000, price: "$85" }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in bg-alabaster dark:bg-obsidian transition-colors duration-500">
      <div className="mb-20">
        <h1 className="text-6xl font-black tracking-tighter mb-8 uppercase text-obsidian dark:text-white leading-none">{t.residential.title}</h1>
        <p className="text-xl text-obsidian/50 dark:text-white/50 max-w-3xl leading-relaxed font-light italic">
          {t.residential.desc.split('Konnect Fiber lb').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i !== arr.length - 1 && <span className="text-obsidian dark:text-white font-black">Konnect Fiber lb</span>}
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {planData.map((plan, i) => (
          <div key={i} className={`p-10 rounded-[2.5rem] border transition-all ${
            i === 2 
              ? 'border-cyan-500 bg-cyan-500/5 shadow-[0_0_50px_rgba(6,182,212,0.1)]' 
              : 'border-obsidian/5 dark:border-white/10 bg-neutral-100 dark:bg-white/5'
          } flex flex-col group hover:scale-[1.02]`}>
            <span className={`text-[10px] uppercase tracking-widest font-black mb-2 ${i === 2 ? 'text-cyan-500' : 'text-obsidian/30 dark:text-white/30'}`}>{plan.name}</span>
            <div className="text-4xl font-black mb-6 text-obsidian dark:text-white tracking-tighter uppercase leading-none">{plan.speed}</div>
            <div className="text-2xl font-light text-obsidian/60 dark:text-white/60 mb-8 tracking-tighter italic">{plan.price}<span className="text-sm">/mo</span></div>
            <ul className="space-y-3 mb-12 flex-1">
               <li className="text-sm text-obsidian/50 dark:text-white/50 font-medium italic">✓ {t.residential.features.hardware}</li>
               <li className="text-sm text-obsidian/50 dark:text-white/50 font-medium italic">✓ {t.residential.features.noCaps}</li>
               <li className="text-sm text-cyan-600 dark:text-cyan-400 font-black uppercase tracking-widest text-[10px]">✓ {t.residential.features.nights}</li>
               <li className="text-sm text-obsidian/50 dark:text-white/50 font-medium italic">✓ {t.residential.features.core}</li>
            </ul>
            <button className={`w-full py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all ${
              i === 2 
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                : 'bg-obsidian text-white dark:bg-white dark:text-black hover:bg-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white'
            }`}>{t.residential.plans.select}</button>
          </div>
        ))}
      </div>
    </div>
  );
};