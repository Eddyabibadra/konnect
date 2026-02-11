import React from 'react';
import { useNavigation } from '../App.tsx';
import { useTranslation } from './LanguageProvider.tsx';

const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 70C20 42.3858 42.3858 20 70 20L80 15" stroke="url(#footer-logo-grad)" strokeWidth="8" strokeLinecap="round" />
    <path d="M30 75C30 52.9086 47.9086 35 70 35L85 32" stroke="url(#footer-logo-grad)" strokeWidth="6" strokeLinecap="round" className="opacity-80" />
    <circle cx="50" cy="40" r="4" fill="#06b6d4" />
    <defs>
      <linearGradient id="footer-logo-grad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06b6d4" />
        <stop offset="1" stopColor="#ffffff" />
      </linearGradient>
    </defs>
  </svg>
);

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-xs">
          <div className="flex items-center gap-3 mb-8">
            <Logo className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase text-white">
                <span className="text-cyan-500">K</span>onnect Fiber lb
              </span>
              <span className="text-[6px] uppercase tracking-[0.4em] text-white/30">{t.footer.motto}</span>
            </div>
          </div>
          <p className="text-white/40 text-xs leading-relaxed font-light">
            {t.footer.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
          <div className="flex flex-col gap-5">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-white/30">{t.footer.network}</span>
            <a href="#/residential" onClick={(e) => handleNav(e, '/residential')} className="text-xs text-white/60 hover:text-cyan-400 transition-colors">{t.footer.residential}</a>
            <a href="#/business" onClick={(e) => handleNav(e, '/business')} className="text-xs text-white/60 hover:text-cyan-400 transition-colors">{t.footer.business}</a>
            <a href="#/coverage" onClick={(e) => handleNav(e, '/coverage')} className="text-xs text-white/60 hover:text-cyan-400 transition-colors">{t.footer.coverage}</a>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-white/30">{t.footer.company}</span>
            <a href="#/tech" onClick={(e) => handleNav(e, '/tech')} className="text-xs text-white/60 hover:text-cyan-400 transition-colors">{t.footer.tech}</a>
            <a href="#/privacy" onClick={(e) => handleNav(e, '/privacy')} className="text-xs text-white/60 hover:text-cyan-400 transition-colors">{t.footer.privacy}</a>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-white/30">{t.footer.presence}</span>
            <a href="https://instagram.com/konnect.fiber.lb" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 hover:text-cyan-400 transition-colors">Instagram</a>
            <span className="text-xs text-white/40">{t.footer.hq}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">
        <span>© 2026 <span className="text-cyan-500">K</span>onnect Fiber lb. {t.footer.excellence}</span>
        <div className="flex gap-10">
          <span>{t.footer.regional}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 text-center border-t border-white/5 pt-10 pb-4">
        <span className="text-[7px] md:text-[8px] uppercase tracking-[1em] text-white/40 font-black opacity-60 hover:opacity-100 transition-all duration-700 cursor-default select-none">
          Created and powered by Eddy Abi Badra
        </span>
      </div>
    </footer>
  );
};