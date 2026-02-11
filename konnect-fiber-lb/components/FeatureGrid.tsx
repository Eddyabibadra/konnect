import React from 'react';
import { useNavigation } from '../App.tsx';
import { useTranslation } from './LanguageProvider.tsx';

export const FeatureGrid: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const blocks = [
    {
      title: <><span className="text-cyan-500">K</span>onnect Fiber</>,
      description: t.features.fiberDesc,
      image_url: "https://picsum.photos/seed/fiber/800/600",
      link: "/tech",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      title: t.features.securityTitle,
      description: t.features.securityDesc,
      image_url: "https://picsum.photos/seed/security/400/600",
      link: "/security",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      title: t.features.supportTitle,
      description: t.features.supportDesc,
      image_url: "https://picsum.photos/seed/support/800/400",
      link: "/support",
      className: "md:col-span-3 md:row-span-1"
    }
  ];

  return (
    <section id="tech" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-black tracking-tighter mb-4 text-obsidian dark:text-white uppercase">{t.features.engineeringTitle}</h2>
        <p className="text-obsidian/50 dark:text-white/50 max-w-xl font-light italic">{t.features.engineeringDesc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blocks.map((block, idx) => (
          <button 
            key={idx} 
            onClick={() => navigate(block.link)}
            className={`group relative overflow-hidden rounded-[2rem] bg-neutral-100 dark:bg-neutral-900 border border-obsidian/5 dark:border-white/5 transition-all hover:border-cyan-400/50 text-left ${block.className}`}
          >
            <div className="absolute inset-0">
              <img 
                src={block.image_url} 
                alt={typeof block.title === 'string' ? block.title : "Feature block"} 
                className="w-full h-full object-cover opacity-20 dark:opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alabaster via-alabaster/40 to-transparent dark:from-obsidian dark:via-obsidian/20 dark:to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-8 z-10">
              <h3 className="text-2xl font-black mb-2 text-obsidian dark:text-white group-hover:text-cyan-500 transition-colors uppercase tracking-tighter">{block.title}</h3>
              <p className="text-obsidian/60 dark:text-white/60 text-sm max-w-md leading-relaxed font-medium italic">{block.description}</p>
              
              <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-obsidian dark:text-white">
                Synchronize 
                <span className="text-cyan-500">→</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};