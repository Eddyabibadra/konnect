import React, { useState } from 'react';
import { useNavigation, useTheme } from '../App.tsx';
import { useTranslation } from './LanguageProvider.tsx';

interface NavbarProps {
  scrolled: boolean;
}

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-20" />
    <path d="M20 70C20 42.3858 42.3858 20 70 20L80 15" stroke="url(#logo-grad)" strokeWidth="8" strokeLinecap="round" />
    <path d="M30 75C30 52.9086 47.9086 35 70 35L85 32" stroke="url(#logo-grad)" strokeWidth="6" strokeLinecap="round" className="opacity-80" />
    <path d="M40 80C40 63.4315 53.4315 50 70 50L90 49" stroke="url(#logo-grad)" strokeWidth="4" strokeLinecap="round" className="opacity-60" />
    <circle cx="50" cy="40" r="4" fill="#06b6d4" />
    <defs>
      <linearGradient id="logo-grad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06b6d4" />
        <stop offset="1" stopColor="#94a3b8" />
      </linearGradient>
    </defs>
  </svg>
);

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button 
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-cyan-500/50 transition-all text-obsidian dark:text-white"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  );
};

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  return (
    <button 
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-cyan-500/50 transition-all text-[10px] font-black uppercase tracking-widest text-obsidian dark:text-white"
    >
      {language === 'en' ? 'AR' : 'EN'}
    </button>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const { currentPath, navigate } = useNavigation();
  const { t, isRTL } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const navLinks = [
    { label: t.nav.tech, path: '/tech' },
    { label: t.nav.support, path: '/support' },
    { label: t.nav.coverage, path: '/coverage' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 border-b ${
        scrolled || isMobileMenuOpen 
          ? 'bg-alabaster/90 dark:bg-black/90 backdrop-blur-xl border-obsidian/5 dark:border-white/10 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#/" className="flex items-center gap-3 group relative z-[110]" onClick={(e) => handleLinkClick(e, '/')}>
            <Logo className="w-10 h-10 group-hover:rotate-12 transition-transform duration-500" />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter uppercase text-obsidian dark:text-white group-hover:text-cyan-400 transition-colors">
                <span className="text-cyan-500">K</span>onnect Fiber lb
              </span>
            </div>
          </a>
          
          <div className={`hidden md:flex items-center gap-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => (
              <a 
                key={link.path}
                href={`#${link.path}`} 
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-cyan-500 after:transition-all hover:after:w-full ${
                  currentPath === `#${link.path}` ? 'text-cyan-400 after:w-full' : 'text-obsidian/50 dark:text-white/50 hover:text-obsidian dark:hover:text-white after:w-0'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            
            <a 
              href="#/contact" 
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="hidden sm:block px-8 py-2.5 bg-obsidian text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 dark:hover:bg-cyan-400 hover:scale-105 transition-all"
            >
              {t.nav.register}
            </a>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            >
              <span className={`w-6 h-0.5 bg-obsidian dark:bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-obsidian dark:bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-obsidian dark:bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[90] bg-alabaster dark:bg-black transition-all duration-500 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full justify-center px-12 gap-8">
          <div className="absolute top-8 right-8 flex gap-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          {navLinks.map((link, i) => (
            <a 
              key={link.path}
              href={`#${link.path}`}
              onClick={(e) => handleLinkClick(e, link.path)}
              className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              } ${currentPath === `#${link.path}` ? 'text-cyan-400' : 'text-obsidian dark:text-white'}`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
            className={`mt-4 py-6 bg-obsidian text-white dark:bg-white dark:text-black text-center font-black uppercase tracking-[0.3em] rounded-2xl transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {t.nav.register}
          </a>
        </div>
      </div>
    </>
  );
};