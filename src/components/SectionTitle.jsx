import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  isDark = true,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 transition-colors ${
          isDark
            ? 'bg-[#8B5CF6]/12 border border-[#8B5CF6] text-[#C4B5FD]'
            : 'bg-[#8B5CF6]/8 border border-[#8B5CF6] text-[#7C3AED]'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse"></span>
          {badge}
        </div>
      )}

      {title && (
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
          isDark ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl font-normal leading-relaxed ${
          centered ? 'mx-auto' : ''
        } ${
          isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
