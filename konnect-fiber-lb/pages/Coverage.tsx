import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { EngagementSection } from '../components/EngagementSection.tsx';

export const Coverage: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  const CHEKKA_COORDS: [number, number] = [34.3236, 35.7289];

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: CHEKKA_COORDS,
        zoom: 13,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false // Disable scroll zoom by default to favor page scrolling
      });

      // Using Voyager with high saturation (enhanced via CSS filters in index.html)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
      }).addTo(mapRef.current);

      // Active Grid (Cyan) - This is our main service area up to 1Gbps
      L.circle(CHEKKA_COORDS, {
        color: '#06b6d4',
        fillColor: '#06b6d4',
        fillOpacity: 0.35,
        radius: 2000,
        weight: 2,
        dashArray: '8, 12'
      }).addTo(mapRef.current);

      // Secondary Network (Purple) - Active surrounding regions
      L.circle(CHEKKA_COORDS, {
        color: '#a855f7',
        fillColor: '#a855f7',
        fillOpacity: 0.25,
        radius: 3500,
        weight: 1
      }).addTo(mapRef.current);

      // Expansion Zone (Amber/Vibrant Gold)
      L.circle(CHEKKA_COORDS, {
        color: '#f59e0b',
        fillColor: '#f59e0b',
        fillOpacity: 0.15,
        radius: 5500,
        weight: 1,
        dashArray: '12, 15'
      }).addTo(mapRef.current);

      const icon = L.divIcon({
        className: 'custom-div-icon',
        html: `
          <div class="relative flex items-center justify-center">
            <div class="absolute w-12 h-12 bg-cyan-500 rounded-full animate-ping opacity-20"></div>
            <div class="absolute w-8 h-8 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
            <div class="w-4 h-4 bg-white rounded-full border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,1)]"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });
      
      L.marker(CHEKKA_COORDS, { icon }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="pt-32 animate-fade-in bg-alabaster dark:bg-obsidian min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-cyan-500 text-xs font-black tracking-[0.3em] uppercase mb-4 block">Regional Backbone</span>
            <h1 className="text-6xl font-black tracking-tighter mb-8 uppercase text-obsidian dark:text-white leading-none">The Grid Map.</h1>
            <p className="text-xl text-obsidian/50 dark:text-white/50 leading-relaxed font-light italic">
              Our network is a spectrum of performance. Explore the active nodes and expansion territories across the North, engineered for absolute reliability.
            </p>
          </div>
          <div className="flex gap-8 border-l border-obsidian/10 dark:border-white/10 pl-10 h-24 items-center">
            <div className="flex flex-col">
              <div className="text-5xl font-black text-obsidian dark:text-white tracking-tighter">99.9%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-obsidian/30 dark:text-white/30 font-black">Uptime</div>
            </div>
            <div className="w-px h-12 bg-obsidian/10 dark:bg-white/10 mx-4"></div>
            <div className="flex flex-col">
              <div className="text-5xl font-black text-obsidian dark:text-white tracking-tighter">0.8ms</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-obsidian/30 dark:text-white/30 font-black">Ping</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative group max-w-7xl mx-auto px-6 mb-20">
        <div 
          ref={mapContainerRef} 
          className="h-[650px] w-full border border-obsidian/10 dark:border-white/10 rounded-[3rem] overflow-hidden transition-all duration-1000 contrast-[1.1] dark:contrast-[1.2] shadow-2xl"
        />
        <div className="absolute inset-0 pointer-events-none leaflet-vignette rounded-[3rem] mx-6"></div>
        
        {/* Map UI Legend Overlay */}
        <div className="absolute top-8 right-14 z-[400] bg-white/95 dark:bg-black/95 backdrop-blur-md border border-obsidian/10 dark:border-white/10 p-10 rounded-[2.5rem] max-w-sm shadow-2xl hidden lg:block">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-3 text-obsidian dark:text-white">
            <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse"></span>
            Network Infrastructure
          </h3>
          
          <div className="space-y-6">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)] border border-white/20"></div>
                <div>
                  <div className="text-[11px] font-black uppercase text-obsidian dark:text-white">Active Grid</div>
                  <div className="text-[9px] text-obsidian/50 dark:text-white/50 uppercase tracking-widest font-bold">1Gbps Hub</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.6)] border border-white/20"></div>
                <div>
                  <div className="text-[11px] font-black uppercase text-obsidian dark:text-white">Standard Grid</div>
                  <div className="text-[9px] text-obsidian/50 dark:text-white/50 uppercase tracking-widest font-bold">Residential Distribution</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)] border border-white/20"></div>
                <div>
                  <div className="text-[11px] font-black uppercase text-obsidian dark:text-white">Expansion Protocol</div>
                  <div className="text-[9px] text-obsidian/50 dark:text-white/50 uppercase tracking-widest font-bold">Planned Node</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-obsidian/5 dark:border-white/5">
              <div className="flex justify-between items-center">
                <div className="text-[10px] uppercase tracking-widest text-obsidian/40 dark:text-white/40 font-bold">Node: Chekka Hub</div>
                <div className="px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-[10px] font-black uppercase border border-cyan-500/20">OPERATIONAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EngagementSection />
    </div>
  );
};