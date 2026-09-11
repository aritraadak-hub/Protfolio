import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import profileLogo from '../assets/Profile-logo.jpg';

export default function Footer({ isDarkMode = true }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t relative z-10 transition-colors duration-300 ${
      isDarkMode
        ? 'bg-[#080B1A] text-[#94A3B8] border-[#1F2937]'
        : 'bg-[#FFFFFF] text-[#475569] border-[#E2E8F0]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#home"
              className="inline-flex items-center gap-3 group"
              aria-label="Go to home"
            >
              <img
                src={profileLogo}
                alt="Aritra Adak Logo"
                width="36"
                height="36"
                loading="lazy"
                decoding="async"
                className="h-9 w-9 object-contain rounded-lg"
              />

              <div>
                <p className={`font-semibold text-sm transition-colors ${
                  isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
                }`}>
                  Aritra Adak
                </p>
                <p className={`text-xs transition-colors ${
                  isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
                }`}>
                  AI &amp; ML Engineer
                </p>
              </div>
            </a>

            <span className={`hidden sm:inline ${isDarkMode ? 'text-[#1F2937]' : 'text-[#E2E8F0]'}`}>|</span>

            <p className={`text-xs sm:text-sm font-medium transition-colors ${
              isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}>
              © 2026 <span className={`font-semibold transition-colors ${
                isDarkMode ? 'text-[#CBD5E1]' : 'text-[#0F172A]'
              }`}>Aritra Adak</span>. All rights reserved.
            </p>
          </div>

          {/* Center / Quick Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-[border-color,background-color,color,box-shadow,transform] duration-200 active:scale-95 cursor-pointer shadow-sm ${
              isDarkMode
                ? 'bg-[#0F1A33] border-[#1F2937] text-[#CBD5E1] hover:text-[#FFFFFF] hover:border-[#8B5CF6]/50 hover:bg-[#1A2442] shadow-md'
                : 'bg-[#FFFFFF] border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#CBD5E1] hover:bg-[#F1F5F9]'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#8B5CF6] group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>

          {/* Right: Made with Heart and Coffee */}
          <div className={`text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors ${
            isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
          }`}>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>and lots of coffee ☕</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
