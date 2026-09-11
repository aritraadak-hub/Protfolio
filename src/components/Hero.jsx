import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Send,
  Mail,
  Code2,
  Trophy,
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import profileMain from '../assets/profile-main.jpg';

const stats = [
  { label: "Projects", value: "3+", icon: Code2, color: "text-violet-400" },
  { label: "Hackathons", value: "2+", icon: Trophy, color: "text-purple-400" },
  { label: "Certifications", value: "5+", icon: Award, color: "text-yellow-400" }
];

const socials = [
  { name: "GitHub", href: "https://github.com/aritraadak-hub", icon: GithubIcon, isExternal: true },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aritra-adak-941408395/", icon: LinkedinIcon, isExternal: true },
  { name: "Email", href: "https://mail.google.com/mail/u/0/?fs=1&to=aritra1adak@gmail.com&su=Portfolio+Contact&tf=cm", icon: Mail, isExternal: false }
];

export default function Hero({ isDarkMode = true }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 lg:py-24 overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#050816] text-[#FFFFFF]'
          : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >
      {/* Background Dot Grid & Particle Structure */}
      <div className={`absolute inset-0 bg-grid-pattern pointer-events-none ${isDarkMode ? 'opacity-60' : 'opacity-40'}`} />

      {/* Futuristic Purple & Blue Radial Glows */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full blur-[120px] pointer-events-none animate-pulse-glow ${
        isDarkMode
          ? 'bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-transparent'
          : 'bg-gradient-to-tr from-purple-400/10 via-indigo-400/10 to-transparent'
      }`} />
      <div className={`absolute top-20 right-10 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none ${
        isDarkMode ? 'bg-purple-700/15' : 'bg-purple-300/15'
      }`} />
      <div className={`absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none ${
        isDarkMode ? 'bg-blue-600/15' : 'bg-blue-300/15'
      }`} />

      {/* Orbit Rings (Desktop) */}
      <div className={`absolute top-1/2 right-[15%] -translate-y-1/2 w-[540px] h-[540px] border rounded-full animate-spin-slow pointer-events-none hidden xl:block ${
        isDarkMode ? 'border-purple-500/10' : 'border-purple-400/15'
      }`} />
      <div className={`absolute top-1/2 right-[15%] -translate-y-1/2 w-[420px] h-[420px] border border-dashed rounded-full pointer-events-none hidden xl:block ${
        isDarkMode ? 'border-indigo-500/15' : 'border-indigo-400/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Small Badge with Green Pulsing Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md transition-colors ${
                isDarkMode
                  ? 'bg-[#8B5CF6]/12 border border-[#8B5CF6] text-[#C4B5FD]'
                  : 'bg-[#8B5CF6]/8 border border-[#8B5CF6] text-[#6D28D9]'
              }`}
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              </span>
              <span className="font-bold tracking-wide">AI/ML Enthusiast</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-1">
              <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors ${
                isDarkMode ? 'text-[#CBD5E1]' : 'text-[#475569]'
              }`}>
                Hi, I’m
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
                <span className="text-gradient">
                  Aritra Adak
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <h2 className={`mt-5 text-xl sm:text-2xl lg:text-3xl font-bold leading-snug tracking-tight transition-colors ${
              isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
            }`}>
              I build intelligent solutions <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]">
                that make an impact.
              </span>
            </h2>

            {/* Description */}
            <p className={`mt-5 text-base sm:text-lg max-w-xl leading-relaxed font-normal transition-colors ${
              isDarkMode ? 'text-[#CBD5E1]' : 'text-[#475569]'
            }`}>
              A passionate B.Tech AI &amp; ML student who loves turning ideas into real-world applications using code and creativity.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#3B82F6] hover:from-[#9333EA] hover:to-[#2563EB] text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(139,92,246,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm sm:text-base border hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-md shadow-lg ${
                  isDarkMode
                    ? 'bg-transparent hover:bg-[#1A2442] text-[#FFFFFF] border-[#334155]'
                    : 'bg-[#FFFFFF] hover:bg-[#F1F5F9] text-[#0F172A] border-[#CBD5E1]'
                }`}
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-[#8B5CF6]" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center gap-3 relative z-20">
              {socials.map((s) => {
                const Icon = s.icon;
                const isEmail = s.name === "Email";
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    {...(s.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={isEmail ? "Email Aritra" : s.name}
                    onClick={isEmail ? () => {
                      window.location.href = s.href;
                    } : undefined}
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 active:scale-95 cursor-pointer pointer-events-auto relative z-20 ${
                      isDarkMode
                        ? 'bg-[#0F1A33] border-[#1F2937] hover:border-[#8B5CF6] text-[#CBD5E1] hover:text-[#FFFFFF] hover:bg-[#1A2442] shadow-md shadow-black/30'
                        : 'bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#8B5CF6] text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] shadow-sm'
                    }`}
                  >
                    <Icon className="w-5 h-5 pointer-events-none" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait + Overlapping Stats Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end"
          >
            {/* Unified relative wrapper — image + card share this coordinate space */}
            <div className="relative flex items-end justify-center w-full max-w-[480px] min-h-[520px] lg:min-h-[600px]">

              {/* Layer 1: Scattered Purple Light Source (Upper-Right) */}
              <div className={`absolute -top-6 -right-6 w-[360px] h-[360px] rounded-full pointer-events-none z-0 animate-scatter-purple ${
                isDarkMode ? 'hero-scatter-purple-dark' : 'hero-scatter-purple-light'
              }`} />

              {/* Layer 2: Scattered Blue Light Source (Center-Left) */}
              <div className={`absolute top-[28%] -left-12 w-[390px] h-[390px] rounded-full pointer-events-none z-0 animate-scatter-blue ${
                isDarkMode ? 'hero-scatter-blue-dark' : 'hero-scatter-blue-light'
              }`} />

              {/* Layer 3: Soft Indigo Ambient Light Behind Head & Shoulders (Stretched Ellipse) */}
              <div className={`absolute top-[26%] left-1/2 -translate-x-1/2 w-[540px] h-[290px] rounded-[100%] pointer-events-none z-0 ${
                isDarkMode ? 'hero-scatter-indigo-dark' : 'hero-scatter-indigo-light'
              }`} />

              {/* Layer 4: Cyan Accent Light (Far-Right / Lower-Right, very low opacity) */}
              <div className={`absolute bottom-28 -right-8 w-[220px] h-[220px] rounded-full pointer-events-none z-0 ${
                isDarkMode ? 'hero-scatter-cyan-dark' : 'hero-scatter-cyan-light'
              }`} />

              {/* Layer 5: Subtle Blurred Light Streak (Diffused illumination) */}
              <div className={`absolute top-[22%] left-1/2 -translate-x-1/2 -rotate-[18deg] w-[480px] h-[140px] rounded-full pointer-events-none z-0 ${
                isDarkMode ? 'hero-scatter-streak-dark' : 'hero-scatter-streak-light'
              }`} />

              {/* Layer 6: Controlled Tiny Scattered Light Particles (6 subtle points) */}
              <div className="absolute top-16 left-12 w-1 h-1 rounded-full bg-[#3B82F6] opacity-50 shadow-[0_0_8px_#3B82F6] pointer-events-none z-0 animate-pulse" />
              <div className="absolute top-12 right-16 w-1.5 h-1.5 rounded-full bg-[#A855F7] opacity-60 shadow-[0_0_10px_#A855F7] pointer-events-none z-0" />
              <div className="absolute top-1/2 -left-2 w-1 h-1 rounded-full bg-[#8B5CF6] opacity-40 shadow-[0_0_8px_#8B5CF6] pointer-events-none z-0" />
              <div className="absolute top-[44%] right-4 w-1 h-1 rounded-full bg-[#22D3EE] opacity-50 shadow-[0_0_8px_#22D3EE] pointer-events-none z-0 animate-pulse" />
              <div className="absolute bottom-36 right-8 w-1 h-1 rounded-full bg-[#3B82F6] opacity-40 shadow-[0_0_8px_#3B82F6] pointer-events-none z-0" />
              <div className="absolute bottom-44 left-6 w-1 h-1 rounded-full bg-[#8B5CF6] opacity-40 shadow-[0_0_8px_#8B5CF6] pointer-events-none z-0" />

              {/* Profile portrait with subtle ambient shadow & smooth bottom blend */}
              <img
                src={profileMain}
                alt="Aritra Adak"
                width="500"
                height="600"
                fetchPriority="high"
                className={`relative z-10 w-full max-w-[500px] h-auto object-contain object-bottom transition-transform duration-300 hover:scale-[1.01] [mask-image:linear-gradient(to_bottom,black_0%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_90%,transparent_100%)] ${
                  isDarkMode
                    ? 'drop-shadow-[0_25px_45px_rgba(0,0,0,0.28)] drop-shadow-[0_0_25px_rgba(99,102,241,0.08)]'
                    : 'drop-shadow-[0_20px_35px_rgba(15,23,42,0.15)] drop-shadow-[0_0_20px_rgba(99,102,241,0.06)]'
                }`}
              />

              {/* Floating glassmorphism stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={`
                  absolute z-20
                  bottom-6 lg:bottom-8
                  left-1/2 -translate-x-1/2
                  w-[92%] lg:w-full lg:max-w-[430px]
                  rounded-[16px]
                  border
                  overflow-hidden
                  transition-[transform,border-color,box-shadow] duration-200
                  hover:-translate-y-1
                  ${isDarkMode ? 'hero-scatter-stats-dark' : 'hero-scatter-stats-light'}
                `}
              >
                <div className={`relative grid grid-cols-3 divide-x ${
                  isDarkMode ? 'divide-[rgba(139,92,246,0.15)]' : 'divide-slate-200/80'
                }`}>
                  {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="flex flex-col items-center justify-center px-3 py-4 sm:px-4 sm:py-5 gap-1 group/stat">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center mb-1 transition-all duration-300 group-hover/stat:scale-110 ${
                          isDarkMode
                            ? 'bg-[rgba(139,92,246,0.10)] shadow-[0_0_8px_rgba(139,92,246,0.20)]'
                            : 'bg-purple-50/80 shadow-[0_0_6px_rgba(99,102,241,0.15)]'
                        }`}>
                          <Icon className={`w-5 h-5 ${stat.color}`} />
                        </div>
                        <span className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                          isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
                        }`}>{stat.value}</span>
                        <span className={`text-[11px] sm:text-xs font-medium text-center leading-tight ${
                          isDarkMode ? 'text-[#CBD5E1]' : 'text-[#64748B]'
                        }`}>{stat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
