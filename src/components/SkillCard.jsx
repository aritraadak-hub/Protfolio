import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  FileCode,
  Atom,
  Palette,
  Server,
  Database,
  GitBranch,
  Layout,
  Sparkles,
  Brain,
  Cpu,
  Eye,
  Layers,
  Globe
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

/* ── Inline SVG badges for tech without lucide icons ── */
function TypeScriptIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="currentColor" opacity="0" />
      <text x="2" y="17" fontSize="13" fontWeight="900" fontFamily="monospace" fill="currentColor">TS</text>
    </svg>
  );
}

function PrismaIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      {/* Prisma-style triangle prism shape */}
      <path d="M3.5 20.5L10 3l10.5 13.5H3.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3.5 20.5L10 3v11.5L3.5 20.5z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

const iconMap = {
  Code2,
  Terminal,
  FileCode,
  Atom,
  Palette,
  Server,
  Database,
  GitBranch,
  Github: GithubIcon,
  Layout,
  Sparkles,
  Brain,
  Cpu,
  Eye,
  Globe,
  TypeScript: TypeScriptIcon,
  Prisma: PrismaIcon
};

export default function SkillCard({ skill, index, isDarkMode = false }) {
  const IconComponent = iconMap[skill.icon] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`group relative p-5 rounded-2xl transition-[border-color,background-color,box-shadow] duration-200 ${
        isDarkMode
          ? 'bg-[#0F1A33] border border-[#1F2937] hover:bg-[#1A2442] hover:border-[#8B5CF6]/50 shadow-lg'
          : 'bg-[#FFFFFF] border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:border-[#8B5CF6]/50 shadow-[0_4px_12px_rgba(15,23,42,0.04)] hover:shadow-md'
      }`}
    >
      {/* Background subtle radial on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      <div className="flex items-center gap-4 relative z-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-inner shrink-0"
          style={{
            backgroundColor: `${skill.color}15`,
            border: `1px solid ${skill.color}35`,
            color: skill.color
          }}
        >
          <IconComponent className="w-6 h-6" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className={`font-bold text-sm sm:text-base truncate transition-colors ${
              isDarkMode ? 'text-[#FFFFFF] group-hover:text-[#8B5CF6]' : 'text-[#0F172A] group-hover:text-[#8B5CF6]'
            }`}>
              {skill.name}
            </h3>
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shrink-0 ${
              isDarkMode ? 'bg-[#1A2442] text-[#CBD5E1]' : 'bg-[#F1F5F9] text-[#475569]'
            }`}>
              {skill.category}
            </span>
          </div>

          <p className={`text-xs mt-1 truncate font-normal ${
            isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
          }`}>
            {skill.description || skill.level}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
