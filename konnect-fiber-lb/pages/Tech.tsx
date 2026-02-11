import React from 'react';

export const Tech: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in bg-alabaster dark:bg-obsidian transition-colors duration-500">
      <div className="mb-20">
        <span className="text-cyan-500 text-xs font-black tracking-[0.3em] uppercase mb-4 block">Engineered for Velocity</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-obsidian dark:text-white uppercase leading-none">Optical Architecture.</h1>
        <p className="text-xl text-obsidian/50 dark:text-white/50 max-w-3xl leading-relaxed font-light italic">
          Our network is built on a foundation of pure light. We've bypassed the legacy copper grid to deliver speeds up to 1Gbps directly to your doorstep.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-32">
        <div className="p-12 bg-neutral-100 dark:bg-white/5 rounded-[2.5rem] border border-obsidian/5 dark:border-white/10 hover:border-cyan-500/30 transition-all flex flex-col">
          <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-obsidian dark:text-white">Ultra-Low Latency</h3>
          <p className="text-obsidian/40 dark:text-white/40 mb-10 leading-relaxed font-medium italic flex-grow">
            Reduced signal hops mean gaming, trading, and real-time collaboration happen at the physical limit of speed. Average internal ping: <span className="text-cyan-600 dark:text-white font-mono font-black">1.2ms</span>.
          </p>
          <div className="h-32 bg-white dark:bg-black/40 rounded-2xl relative overflow-hidden flex items-end p-4 border border-obsidian/5 dark:border-white/5">
             <div className="flex items-end gap-1 w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="bg-cyan-500/40 w-full" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                ))}
             </div>
          </div>
        </div>
        <div className="p-12 bg-neutral-100 dark:bg-white/5 rounded-[2.5rem] border border-obsidian/5 dark:border-white/10 hover:border-cyan-500/30 transition-all">
          <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-obsidian dark:text-white">Gigabit Hub</h3>
          <p className="text-obsidian/40 dark:text-white/40 mb-10 leading-relaxed font-medium italic">
            Elite-tier performance for both uploads and downloads. With <span className="text-cyan-600 dark:text-white font-black">Unlimited Nights</span>, your bandwidth remains unrestricted when you need it most.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-black/40 p-8 rounded-2xl text-center border border-obsidian/5 dark:border-white/5 shadow-sm">
              <div className="text-cyan-500 font-mono text-4xl font-black mb-2">1.0</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-obsidian/30 dark:text-white/30 font-black">Gbps Down</div>
            </div>
            <div className="bg-white dark:bg-black/40 p-8 rounded-2xl text-center border border-obsidian/5 dark:border-white/5 shadow-sm">
              <div className="text-cyan-500 font-mono text-4xl font-black mb-2">1.0</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-obsidian/30 dark:text-white/30 font-black">Gbps Up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};