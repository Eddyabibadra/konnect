import React, { useState, useEffect, createContext, useContext } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { NetworkAssistant } from './components/NetworkAssistant.tsx';
import { LanguageProvider } from './components/LanguageProvider.tsx';
import { LanguageModal } from './components/LanguageModal.tsx';

import { Home } from './pages/Home.tsx';
import { Tech } from './pages/Tech.tsx';
import { Support } from './pages/Support.tsx';
import { Coverage } from './pages/Coverage.tsx';
import { Residential } from './pages/Residential.tsx';
import { Business } from './pages/Business.tsx';
import { Privacy } from './pages/Privacy.tsx';
import { Contact } from './pages/Contact.tsx';
import { Security } from './pages/Security.tsx';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error("useNavigation must be used within a NavigationProvider");
  return context;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleHashChange = () => setCurrentPath(window.location.hash || '#/');
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    // Apply theme class to document element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [theme]);

  const navigate = (path: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      window.location.hash = path;
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 300);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const renderPageContent = () => {
    const path = currentPath.replace('#', '') || '/';
    const cleanPath = path === '/' ? '/' : path.replace(/\/$/, "");
    
    switch (cleanPath) {
      case '/tech': return <Tech />;
      case '/support': return <Support />;
      case '/coverage': return <Coverage />;
      case '/residential': return <Residential />;
      case '/business': return <Business />;
      case '/privacy': return <Privacy />;
      case '/contact': return <Contact />;
      case '/security': return <Security />;
      default: return <Home />;
    }
  };

  return (
    <LanguageProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <NavigationContext.Provider value={{ currentPath, navigate }}>
          <div className="min-h-screen transition-colors duration-500 bg-alabaster dark:bg-obsidian selection:bg-cyan-500/30 text-obsidian dark:text-white flex flex-col">
            <Navbar scrolled={scrolled} />
            
            <main className={`flex-grow transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {renderPageContent()}
            </main>

            <Footer />
            <NetworkAssistant />
            <LanguageModal />
          </div>
        </NavigationContext.Provider>
      </ThemeContext.Provider>
    </LanguageProvider>
  );
};

export default App;