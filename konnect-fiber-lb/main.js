
import { GoogleGenAI } from "@google/genai";

/**
 * Konnect Fiber lb | Core Application Script
 * Architecture: Vanilla SPA with Hash Routing
 */

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const state = {
    currentPath: window.location.hash || '#/',
    scrolled: false,
    isMobileMenuOpen: false,
    assistantOpen: false,
    assistantLoading: false,
    assistantAnswer: '',
    mapInstance: null
};

// --- TEMPLATES ---

const templates = {
    navbar: () => {
        const path = window.location.hash || '#/';
        return `
        <nav id="navbar" class="fixed top-0 left-0 right-0 z-[100] transition-all duration-700 border-b border-transparent py-6">
            <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#/" class="flex items-center gap-3 group relative z-[110]">
                    <svg viewBox="0 0 100 100" class="w-10 h-10 group-hover:rotate-12 transition-transform duration-500" fill="none">
                        <circle cx="50" cy="50" r="48" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" class="opacity-20" />
                        <path d="M20 70C20 42.3858 42.3858 20 70 20L80 15" stroke="url(#nav-grad)" stroke-width="8" stroke-linecap="round" />
                        <defs><linearGradient id="nav-grad"><stop stop-color="#06b6d4" /><stop offset="1" stop-color="#94a3b8" /></linearGradient></defs>
                    </svg>
                    <span class="text-xl font-black tracking-tighter uppercase text-white group-hover:text-cyan-400 transition-colors">Konnect Fiber lb</span>
                </a>
                
                <div class="hidden md:flex items-center gap-10">
                    <a href="#/tech" class="text-[10px] font-bold uppercase tracking-[0.2em] ${path === '#/tech' ? 'text-cyan-400' : 'text-white/50 hover:text-white'} transition-all">Technology</a>
                    <a href="#/hardware" class="text-[10px] font-bold uppercase tracking-[0.2em] ${path === '#/hardware' ? 'text-cyan-400' : 'text-white/50 hover:text-white'} transition-all">Hardware</a>
                    <a href="#/support" class="text-[10px] font-bold uppercase tracking-[0.2em] ${path === '#/support' ? 'text-cyan-400' : 'text-white/50 hover:text-white'} transition-all">Support</a>
                    <a href="#/coverage" class="text-[10px] font-bold uppercase tracking-[0.2em] ${path === '#/coverage' ? 'text-cyan-400' : 'text-white/50 hover:text-white'} transition-all">Coverage</a>
                </div>

                <div class="flex items-center gap-4">
                    <a href="#/contact" class="hidden sm:block px-8 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 hover:scale-105 transition-all">Register</a>
                    <button id="menu-toggle" class="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5">
                        <span class="w-6 h-0.5 bg-white transition-all"></span>
                        <span class="w-6 h-0.5 bg-white transition-all"></span>
                        <span class="w-6 h-0.5 bg-white transition-all"></span>
                    </button>
                </div>
            </div>
        </nav>
        <div id="mobile-menu" class="fixed inset-0 z-[90] bg-black opacity-0 pointer-events-none transition-all duration-500 flex flex-col justify-center px-12 gap-8">
            <a href="#/tech" class="text-4xl font-black uppercase text-white">Technology</a>
            <a href="#/hardware" class="text-4xl font-black uppercase text-white">Hardware</a>
            <a href="#/support" class="text-4xl font-black uppercase text-white">Support</a>
            <a href="#/coverage" class="text-4xl font-black uppercase text-white">Coverage</a>
            <button id="ai-trigger" class="text-2xl font-bold uppercase tracking-widest text-cyan-400 text-left">Ask AI Assistant</button>
        </div>
    `;},

    hero: () => `
        <section class="relative h-[100svh] flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
            <div class="absolute inset-0 z-0 bg-grid opacity-20"></div>
            <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
                    <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                    <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">1Gbps Hub</span>
                </div>
                <h1 class="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
                    Connectivity, <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-neutral-700">Perfected.</span>
                </h1>
                <p class="text-lg md:text-xl text-white/50 font-light mb-12 max-w-2xl mx-auto">
                    Konnect Fiber lb: Engineered for high-stakes performance. Experience Unlimited Nights.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="#/contact" class="px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-cyan-400 transition-all">Register</a>
                    <a href="#/tech" class="px-10 py-5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white/5 transition-all">Explore Tech</a>
                </div>
            </div>
        </section>
    `,

    tech: () => `
        <section class="pt-40 pb-20 px-6 max-w-7xl mx-auto fade-in">
            <span class="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Precision Layer</span>
            <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase">Optical Architecture.</h1>
            <div class="grid md:grid-cols-2 gap-12 mt-20">
                <div class="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-cyan-500/30 transition-all">
                    <h3 class="text-2xl font-bold mb-4">Gigabit Hub</h3>
                    <p class="text-white/50 leading-relaxed italic">Elite uploads that mirror downloads. Zero bottleneck infrastructure designed for the creator economy.</p>
                </div>
                <div class="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-cyan-500/30 transition-all">
                    <h3 class="text-2xl font-bold mb-4">Edge Optimization</h3>
                    <p class="text-white/50 leading-relaxed italic">Localized peering in Chekka ensures your data takes the shortest path across the global grid.</p>
                </div>
            </div>
        </section>
    `,

    coverage: () => `
        <section class="pt-40 bg-black min-h-screen">
            <div class="max-w-7xl mx-auto px-6 mb-12">
                <h1 class="text-6xl font-black tracking-tighter uppercase">The Grid Map.</h1>
                <p class="text-white/40 mt-4 max-w-xl">Live network availability visualization. Currently optimized for the Chekka node.</p>
            </div>
            <div class="relative h-[600px] border-y border-white/10">
                <div id="map-container" class="h-full w-full"></div>
                <div class="absolute inset-0 pointer-events-none leaflet-vignette"></div>
                <div class="absolute bottom-10 right-10 z-[1000] bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl max-w-xs">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Status: Operational</span>
                    </div>
                    <p class="text-[11px] text-white/60 leading-relaxed">Network core at 100% capacity in North Lebanon governorate.</p>
                </div>
            </div>
        </section>
    `,

    support: () => `
        <section class="pt-40 pb-20 px-6 max-w-3xl mx-auto text-center fade-in">
            <h1 class="text-6xl font-black tracking-tighter uppercase mb-8">Direct Access.</h1>
            <p class="text-xl text-white/40 font-light mb-16 italic">Elite support for an elite network.</p>
            <div class="grid gap-6">
                <div class="p-8 bg-white/5 border border-white/10 rounded-3xl text-left flex items-center gap-6">
                    <div class="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400">☏</div>
                    <div><h4 class="font-bold">Eddy & Kamal Abi Badra</h4><p class="text-xs text-white/40">+961 76 472 530 | +961 03 349 248</p></div>
                </div>
                <div class="p-8 bg-white/5 border border-white/10 rounded-3xl text-left flex items-center gap-6">
                    <div class="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400">✉</div>
                    <div><h4 class="font-bold">Customer Support</h4><p class="text-xs text-white/40">konnect.fiber.lb@outlook.com</p></div>
                </div>
            </div>
        </section>
    `,

    footer: () => `
        <footer class="py-24 px-6 border-t border-white/5 bg-black">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
                <div>
                    <span class="text-xl font-black uppercase">Konnect Fiber lb</span>
                    <p class="text-white/40 text-[10px] mt-4 uppercase tracking-widest">Excellence in Connectivity.</p>
                </div>
                <div class="flex gap-20">
                    <div class="flex flex-col gap-4">
                        <span class="text-[10px] uppercase tracking-widest text-white/30 font-bold">Network</span>
                        <a href="#/residential" class="text-xs text-white/60 hover:text-cyan-400 transition-colors">Residential</a>
                        <a href="#/business" class="text-xs text-white/60 hover:text-cyan-400 transition-colors">Business</a>
                    </div>
                    <div class="flex flex-col gap-4">
                        <span class="text-[10px] uppercase tracking-widest text-white/30 font-bold">Privacy</span>
                        <a href="#/tech" class="text-xs text-white/60 hover:text-cyan-400 transition-colors">Tech Stack</a>
                        <a href="#/privacy" class="text-xs text-white/60 hover:text-cyan-400 transition-colors">Legal Core</a>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto mt-24 text-center border-t border-white/5 pt-12 pb-4">
                <span class="text-[7px] md:text-[8px] uppercase tracking-[1em] text-white/40 font-black opacity-60 hover:opacity-100 transition-all duration-1000 cursor-default select-none">
                    Created and powered by Eddy Abi Badra
                </span>
            </div>
        </footer>
    `,

    assistant: () => `
        <div id="ai-assistant-ui" class="fixed bottom-8 right-8 z-[150]">
            <button id="ai-toggle" class="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-cyan-400 transition-all group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="group-hover:scale-110 transition-transform"><path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" /></svg>
            </button>
            <div id="ai-window" class="hidden absolute bottom-20 right-0 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 w-[320px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-10">
                <div class="flex justify-between items-center mb-8">
                    <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">Network Intelligence</span>
                    <button id="ai-close" class="text-white/20 hover:text-white transition-colors">✕</button>
                </div>
                <div id="ai-content" class="mb-8 min-h-[100px] text-sm text-white/60 italic leading-relaxed text-center">
                    Awaiting network query...
                </div>
                <div class="relative">
                    <input id="ai-input" type="text" placeholder="Optimize..." class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm outline-none focus:border-cyan-500 transition-all">
                </div>
            </div>
        </div>
    `
};

// --- CORE FUNCTIONS ---

function initMap() {
    const container = document.getElementById('map-container');
    if (!container) return;
    
    // Chekka, Lebanon
    const coords = [34.3236, 35.7289];
    
    if (state.mapInstance) {
        state.mapInstance.remove();
    }

    state.mapInstance = L.map('map-container', {
        center: coords,
        zoom: 13,
        zoomControl: false,
        attributionControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(state.mapInstance);

    L.circle(coords, {
        color: '#06b6d4',
        fillColor: '#06b6d4',
        fillOpacity: 0.1,
        radius: 3000
    }).addTo(state.mapInstance);

    const icon = L.divIcon({
        className: 'custom-icon',
        html: `<div class="w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>`,
        iconSize: [16, 16]
    });

    L.marker(coords, { icon }).addTo(state.mapInstance);
}

function handleRoute() {
    const app = document.getElementById('app');
    const path = window.location.hash || '#/';
    
    // Clear existing map if navigating away from coverage
    if (state.mapInstance) {
        state.mapInstance.remove();
        state.mapInstance = null;
    }

    let pageContent = templates.hero();
    if (path === '#/tech') pageContent = templates.tech();
    else if (path === '#/coverage') pageContent = templates.coverage();
    else if (path === '#/support') pageContent = templates.support();
    else if (path !== '#/') pageContent = `<div class="pt-60 pb-40 text-center"><h1 class="text-4xl font-black uppercase">${path.replace('#/', '')} Section</h1><p class="text-white/30 mt-4">Hardware synchronization in progress.</p></div>`;

    app.innerHTML = `
        ${templates.navbar()}
        <main id="page-main" class="flex-grow page-transition fade-in">${pageContent}</main>
        ${templates.footer()}
        ${templates.assistant()}
    `;

    if (path === '#/coverage') {
        setTimeout(initMap, 100);
    }

    bindEvents();
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function bindEvents() {
    // Menu Toggle
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn) {
        menuBtn.onclick = () => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
            mobileMenu.style.opacity = state.isMobileMenuOpen ? '1' : '0';
            mobileMenu.style.pointerEvents = state.isMobileMenuOpen ? 'auto' : 'none';
        };
    }

    // Scroll Logic
    window.onscroll = () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('bg-black/80', 'backdrop-blur-xl', 'border-white/10', 'py-4');
            nav.classList.remove('py-6', 'border-transparent');
        } else {
            nav.classList.remove('bg-black/80', 'backdrop-blur-xl', 'border-white/10', 'py-4');
            nav.classList.add('py-6', 'border-transparent');
        }
    };

    // AI Logic
    const aiToggle = document.getElementById('ai-toggle');
    const aiWindow = document.getElementById('ai-window');
    const aiClose = document.getElementById('ai-close');
    const aiInput = document.getElementById('ai-input');
    const aiContent = document.getElementById('ai-content');

    if (aiToggle) aiToggle.onclick = () => aiWindow.classList.toggle('hidden');
    if (aiClose) aiClose.onclick = () => aiWindow.classList.add('hidden');

    if (aiInput) {
        aiInput.onkeypress = async (e) => {
            if (e.key === 'Enter' && aiInput.value.trim()) {
                const query = aiInput.value;
                aiInput.value = '';
                aiContent.innerHTML = '<span class="animate-pulse">Analyzing...</span>';
                
                try {
                    const response = await ai.models.generateContent({
                        model: 'gemini-3-flash-preview',
                        contents: query,
                        config: {
                            systemInstruction: "You are the Konnect Fiber AI Hub. Minimalist, expert, elite ISP support. Respond in max 2 sentences in the user's language.",
                        }
                    });
                    aiContent.innerText = response.text || "Network error. Please retry.";
                } catch (err) {
                    aiContent.innerText = "Synchronization failure. Verify your connection.";
                }
            }
        };
    }

    // Close mobile menu on hash change
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(l => l.onclick = () => {
        state.isMobileMenuOpen = false;
        if(mobileMenu) {
            mobileMenu.style.opacity = '0';
            mobileMenu.style.pointerEvents = 'none';
        }
    });
}

// Startup
window.onhashchange = handleRoute;
window.onload = handleRoute;
