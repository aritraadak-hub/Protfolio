import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  Download,
  Menu,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import profileLogo from '../assets/Profile-logo.jpg';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let cachedOffsets = [];

    const calculateOffsets = () => {
      cachedOffsets = navItems.map((item) => {
        const id = item.name.toLowerCase();
        const el = document.getElementById(id);
        return el ? { id, top: el.offsetTop, height: el.offsetHeight } : null;
      }).filter(Boolean);
    };

    calculateOffsets();
    window.addEventListener('resize', calculateOffsets, { passive: true });

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY;
          const shouldScroll = sy > 30;
          setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));

          const scrollPosition = sy + 220;
          for (let i = cachedOffsets.length - 1; i >= 0; i--) {
            const sec = cachedOffsets[i];
            if (scrollPosition >= sec.top) {
              setActiveSection((prev) => (prev !== sec.id ? sec.id : prev));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateOffsets);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    const resumeContent = `ARITRA ADAK - RESUME\nB.Tech in Artificial Intelligence & Machine Learning\nEmail: aritraadak11@gmail.com\nLocation: Haldia, West Bengal, India\nGitHub: https://github.com/aritra-adak\n\nSKILLS:\nPython, React, Node.js, TensorFlow, OpenCV, C++, MySQL, Tailwind CSS\n\nEXPERIENCE:\n- Web Developer Intern at CodSoft (2024)\n- Smart India Hackathon Finalist (SIH 2024)\n- GDG AI/ML Bootcamp (2023)\n\nPROJECTS:\n1. Smart Agriculture Copilot (React, Tailwind CSS, Node.js, Weather & Crop API)\n2. AI Rural Health Assistant (Python, NLP, LLM, Flask)\n3. Crop Disease Detection (CNN, TensorFlow, OpenCV)`;
    
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Aritra_Adak_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? 'bg-[#080B1A]/85 backdrop-blur-xl border-b border-[#1F2937] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
              : 'bg-[#FFFFFF]/85 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_4px_25px_rgba(15,23,42,0.06)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Clean Logo Image (no shadow/glow) + Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-200 shrink-0">
                <img
                  src={profileLogo}
                  alt="Aritra Adak Logo"
                  width="44"
                  height="44"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className={`font-extrabold text-base sm:text-lg tracking-tight transition-colors duration-200 ${
                  isDarkMode ? 'text-[#FFFFFF] group-hover:text-[#8B5CF6]' : 'text-[#0F172A] group-hover:text-[#8B5CF6]'
                }`}>
                  Aritra Adak
                </span>
                <span className="text-[10px] font-semibold text-[#8B5CF6] -mt-1 tracking-widest uppercase">
                  AI &amp; ML Engineer
                </span>
              </div>
            </a>

            {/* Center: Navigation Pills (Desktop) */}
            <nav className={`hidden md:flex items-center gap-1 p-1 rounded-full backdrop-blur-md transition-colors ${
              isDarkMode
                ? 'bg-[#080B1A]/80 border border-[#1F2937] shadow-inner'
                : 'bg-[#F8FAFC]/90 border border-[#E2E8F0] shadow-inner'
            }`}>
              {navItems.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-white font-bold'
                        : isDarkMode
                        ? 'text-[#CBD5E1] hover:text-[#FFFFFF] hover:bg-[#1A2442]'
                        : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] shadow-[0_2px_12px_rgba(139,92,246,0.4)] -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Right: Theme Toggle & CV Download */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Light and Dark Mode"
                className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#0F1A33] hover:bg-[#1A2442] text-[#FBBF24] border border-[#1F2937]'
                    : 'bg-[#FFFFFF] hover:bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="group relative inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#A855F7] to-[#3B82F6] hover:from-[#9333EA] hover:to-[#2563EB] text-white shadow-[0_4px_16px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_22px_rgba(139,92,246,0.55)] hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Mobile Actions: Hamburger & Theme Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`p-2 rounded-xl transition-all ${
                  isDarkMode ? 'text-[#FBBF24] bg-[#0F1A33] border border-[#1F2937]' : 'text-[#475569] bg-[#FFFFFF] border border-[#E2E8F0]'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open Navigation Menu"
                className={`p-2 rounded-xl transition-colors ${
                  isDarkMode ? 'text-[#FFFFFF] bg-[#0F1A33] border border-[#1F2937]' : 'text-[#0F172A] bg-[#FFFFFF] border border-[#E2E8F0]'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed top-[68px] left-0 right-0 z-40 p-5 shadow-2xl border-b sm:hidden ${
              isDarkMode
                ? 'bg-[#080B1A]/95 backdrop-blur-2xl border-[#1F2937]'
                : 'bg-[#FFFFFF]/95 backdrop-blur-2xl border-[#E2E8F0]'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white shadow-md'
                        : isDarkMode
                        ? 'text-[#CBD5E1] hover:bg-[#1A2442]'
                        : 'text-[#475569] hover:bg-[#F1F5F9]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive ? <Sparkles className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 opacity-40" />}
                  </a>
                );
              })}

              <div className={`pt-3 mt-2 border-t flex flex-col gap-2 ${
                isDarkMode ? 'border-[#1E293B]' : 'border-[#E5E7EB]'
              }`}>
                <button
                  onClick={handleDownloadCV}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#8B5CF6]/30 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
