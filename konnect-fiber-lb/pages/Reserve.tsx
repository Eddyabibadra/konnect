import React from 'react';

export const Reserve: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-xl mx-auto animate-fade-in text-center">
      <div className="w-16 h-16 bg-obsidian text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 shadow-xl">
        <span className="text-cyan-500">K</span>
      </div>
      <h1 className="text-6xl font-black tracking-tighter mb-4 uppercase text-obsidian dark:text-white">Reserve Your Node.</h1>
      <p className="text-obsidian/50 dark:text-white/40 mb-12 italic">Select your project and join the <span className="text-cyan-500">K</span>onnect Fiber network.</p>
      
      <div className="space-y-4">
        <div className="p-8 bg-neutral-100 dark:bg-white/5 border border-obsidian/10 dark:border-white/10 rounded-2xl text-left hover:border-cyan-500/50 cursor-pointer transition-all shadow-sm">
          <div className="font-black text-xl uppercase text-obsidian dark:text-white">Residential Elite</div>
          <div className="text-sm text-obsidian/40 dark:text-white/40 italic font-medium"><span className="text-cyan-500">K</span>onnect Fiber for home.</div>
        </div>
        <div className="p-8 bg-neutral-100 dark:bg-white/5 border border-obsidian/10 dark:border-white/10 rounded-2xl text-left hover:border-cyan-500/50 cursor-pointer transition-all shadow-sm">
          <div className="font-black text-xl uppercase text-obsidian dark:text-white">Business Enterprise</div>
          <div className="text-sm text-obsidian/40 dark:text-white/40 italic font-medium">Dedicated circuits & SLAs.</div>
        </div>
        <button className="w-full bg-obsidian text-white dark:bg-white dark:text-black font-black py-5 rounded-full mt-8 uppercase tracking-[0.2em] text-xs hover:bg-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white transition-all">Begin Onboarding</button>
      </div>
    </div>
  );
};