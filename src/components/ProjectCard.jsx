import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project, index, isDarkMode = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`group rounded-2xl overflow-hidden transition-[border-color,box-shadow] duration-200 flex flex-col h-full ${
        isDarkMode
          ? 'bg-[#0F1A33] border border-[#1F2937] hover:border-[#8B5CF6]/60 shadow-xl'
          : 'bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#8B5CF6]/70 shadow-[0_4px_16px_rgba(15,23,42,0.06)] hover:shadow-xl'
      }`}
    >
      {/* Image Container with Zoom and Overlay */}
      <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.name}
          width="480"
          height="285"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t opacity-75 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none ${
          isDarkMode ? 'from-[#0F1A33] via-black/25 to-transparent' : 'from-black/60 via-black/20 to-transparent'
        }`} />

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-black/60 backdrop-blur-md border border-[#8B5CF6]/40 text-[#C4B5FD] shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
            {project.category}
          </span>
        </div>

        {/* Quick action buttons floating on image */}
        <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              className="p-1.5 rounded-full bg-[#0F1A33]/80 backdrop-blur-md border border-[#1F2937] text-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-200 hover:scale-110 shadow-md"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live demo`}
              className="p-1.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#3B82F6] backdrop-blur-md text-white hover:opacity-90 transition-all duration-200 hover:scale-110 shadow-md shadow-[#8B5CF6]/30"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-5.5 flex flex-col flex-1">
        <h3 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
          isDarkMode ? 'text-[#FFFFFF] group-hover:text-[#8B5CF6]' : 'text-[#0F172A] group-hover:text-[#8B5CF6]'
        }`}>
          {project.name}
        </h3>

        <p className={`mt-2 text-xs sm:text-sm leading-relaxed flex-1 ${
          isDarkMode ? 'text-[#CBD5E1]' : 'text-[#475569]'
        }`}>
          {project.description}
        </p>

        {/* Technology Chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold transition-colors ${
                isDarkMode
                  ? 'bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C4B5FD]'
                  : 'bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#6D28D9]'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className={`mt-5 pt-4 border-t flex items-center justify-between gap-2.5 ${
          isDarkMode ? 'border-[#1E293B]' : 'border-[#E5E7EB]'
        }`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className={`${project.liveDemo ? 'flex-1' : 'w-full'} inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              isDarkMode
                ? 'bg-[#1A2442] hover:bg-[#1E293B] text-[#FFFFFF] border border-[#1F2937] hover:border-[#8B5CF6]/40'
                : 'bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#E2E8F0]'
            }`}
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live demo`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#A855F7] to-[#3B82F6] hover:from-[#9333EA] hover:to-[#2563EB] text-white shadow-md shadow-[#8B5CF6]/30 transition-all duration-200"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

