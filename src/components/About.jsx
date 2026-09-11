import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Users,
  Zap,
  CheckCircle2,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import profileAbout from '../assets/Profile-about.jpg';

const features = [
  {
    title: "Problem Solver",
    description: "Love tackling challenging problems and architecting scalable AI & software solutions.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
    borderColor: "border-amber-500/30"
  },
  {
    title: "Team Player",
    description: "Enjoy collaborating, participating in hackathons, and building together.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Quick Learner",
    description: "Always exploring cutting-edge AI research, new frameworks, and modern tooling.",
    icon: Zap,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-500",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Detail Oriented",
    description: "Focus on writing clean, modular, maintainable code with high performance.",
    icon: CheckCircle2,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    borderColor: "border-emerald-500/30"
  }
];

export default function About({ isDarkMode = false }) {
  return (
    <section
      id="about"
      className={`py-28 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-[#0D1428]' : 'bg-[#FFFFFF]'
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Floating Badges (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/30 via-indigo-600/25 to-blue-600/30 rounded-[38px] blur-2xl opacity-40 animate-pulse-glow" />

            {/* Main Rounded Card */}
            <div className={`relative rounded-[34px] overflow-hidden p-2.5 transition-all duration-300 ${
              isDarkMode
                ? 'bg-[#0F1A33] border border-[#1F2937] shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
                : 'bg-[#FFFFFF] border border-[#E2E8F0] shadow-xl'
            }`}>
              <div className="rounded-[28px] overflow-hidden aspect-[4/5] bg-slate-950 relative group">
                <img
                  src={profileAbout}
                  alt="Aritra Adak"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="500"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating "Open to Opportunities" Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className={`absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl backdrop-blur-xl shadow-xl flex items-center justify-between transition-colors ${
                    isDarkMode
                      ? 'bg-[#0F1A33]/90 border border-[#1F2937]'
                      : 'bg-[#FFFFFF]/95 border border-[#E2E8F0] shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]"></span>
                    </span>
                    <span className={`text-xs font-bold tracking-wide ${
                      isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
                    }`}>
                      Open to Opportunities
                    </span>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                    isDarkMode
                      ? 'text-[#C4B5FD] bg-[#8B5CF6]/15 border-[#8B5CF6]/30'
                      : 'text-[#7C3AED] bg-[#8B5CF6]/10 border-[#8B5CF6]/25'
                  }`}>
                    2029 Grad
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Degree Indicator mini card */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -top-5 -right-4 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-purple-900/95 to-indigo-900/95 backdrop-blur-xl border border-white/20 text-white shadow-2xl"
            >
              <div className="p-2.5 rounded-xl bg-white/15 text-purple-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-purple-200 font-medium leading-none mb-1">Pursuing B.Tech</p>
                <p className="text-xs font-extrabold text-white">AI &amp; Machine Learning</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Bio & Feature Cards (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small Label */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit ${
              isDarkMode 
                ? 'bg-[#8B5CF6]/12 border border-[#8B5CF6] text-[#C4B5FD]' 
                : 'bg-[#8B5CF6]/8 border border-[#8B5CF6] text-[#7C3AED]'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
              About Me
            </div>

            {/* Heading */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
              isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
            }`}>
              Building the future with <span className="text-gradient">AI &amp; Code.</span>
            </h2>

            {/* Description */}
            <p className={`mt-5 text-base sm:text-lg leading-relaxed ${
              isDarkMode ? 'text-[#CBD5E1]' : 'text-[#475569]'
            }`}>
              I’m a B.Tech student in Artificial Intelligence &amp; Machine Learning. I enjoy solving real-world problems and building impactful solutions through Machine Learning, Web Development and Data Science.
            </p>

            <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}>
              Whether developing intelligent computer vision models, building modern high-performance web applications, or designing predictive data engines, I thrive at the intersection of mathematical foundations and practical engineering.
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.06, duration: 0.35 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={`p-5 rounded-2xl transition-[border-color,background-color,box-shadow] duration-200 flex items-start gap-4 ${
                      isDarkMode
                        ? 'bg-[#0F1A33] border border-[#1F2937] hover:bg-[#1A2442] hover:border-[#8B5CF6]/40 shadow-lg'
                        : 'bg-[#FFFFFF] border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:border-[#8B5CF6]/50 shadow-md hover:shadow-lg'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${item.bgColor} ${item.textColor} ${item.borderColor} border shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-sm sm:text-base font-bold ${
                        isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`mt-1 text-xs sm:text-sm leading-relaxed ${
                        isDarkMode ? 'text-[#CBD5E1]' : 'text-[#475569]'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
