import React from 'react';

export const RatingSection: React.FC = () => {
  const metrics = [
    { value: "4.9", unit: "/5", label: "User Experience", detail: "Highest in regional survey" },
    { value: "100", unit: "%", label: "Reliability Core", detail: "Zero-fault infrastructure" },
    { value: "<1", unit: "ms", label: "Local Latency", detail: "Optical bypass routing" }
  ];

  return (
    <section className="py-32 bg-alabaster dark:bg-obsidian border-t border-obsidian/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Network Validation</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-obsidian dark:text-white uppercase leading-none">The Gold Standard.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {metrics.map((m, i) => (
            <div 
              key={i} 
              className="group p-10 bg-neutral-50 dark:bg-white/[0.02] border border-obsidian/5 dark:border-white/5 rounded-[2.5rem] flex flex-col items-center text-center hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 shadow-sm"
            >
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-black text-obsidian dark:text-white tracking-tighter leading-none">
                  {m.value}<span className="text-cyan-500 text-4xl md:text-5xl ml-1">{m.unit}</span>
                </span>
              </div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-obsidian dark:text-white font-black mb-2">
                {m.label}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-obsidian/30 dark:text-white/20 font-bold italic">
                {m.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "The transition to Konnect Fiber was seamless. Gigabit speed in Chekka has completely changed how I work.",
              author: "Elite Node #428",
              location: "Chekka Residential"
            },
            {
              quote: "Unlimited Nights is the differentiator. I can sync massive datasets at 3 AM with zero latency issues.",
              author: "Business Client #012",
              location: "North Enterprise Hub"
            }
          ].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="p-10 bg-white dark:bg-white/[0.03] border border-obsidian/5 dark:border-white/10 rounded-[2.5rem] hover:border-cyan-500/30 transition-all group shadow-sm"
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-500">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg md:text-xl text-obsidian/70 dark:text-white/70 font-light italic leading-relaxed mb-10">
                "{testimonial.quote}"
              </p>
              <div className="flex justify-between items-center border-t border-obsidian/5 dark:border-white/5 pt-8">
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-obsidian dark:text-white">{testimonial.author}</span>
                  <span className="text-[10px] uppercase tracking-widest text-obsidian/30 dark:text-white/30 font-bold mt-1">{testimonial.location}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};