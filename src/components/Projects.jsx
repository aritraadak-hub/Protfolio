import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';
import { ArrowRight, FolderGit2 } from 'lucide-react';

export default function Projects({ isDarkMode = false }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filterTabs = ['All', ...categories];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className={`py-16 sm:py-20 transition-colors duration-300 relative ${
        isDarkMode ? 'bg-[#050816]' : 'bg-[#F8FAFC]'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Featured Projects"
          title="Some things I’ve built"
          subtitle="Real-world Artificial Intelligence, Machine Learning models, and full-stack web platforms engineered to solve practical challenges."
          isDark={isDarkMode}
        />

        {/* Category Filters */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className={`p-1.5 rounded-2xl inline-flex flex-wrap gap-1.5 ${
            isDarkMode ? 'bg-[#0F1A33] border border-[#1F2937]' : 'bg-[#FFFFFF] border border-[#E2E8F0]'
          }`}>
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveFilter(tab);
                  setShowAll(true);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-[background-color,color,box-shadow,transform] duration-200 active:scale-95 cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white shadow-md'
                    : isDarkMode
                    ? 'text-[#CBD5E1] hover:text-[#FFFFFF]'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isDarkMode={isDarkMode}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/aritraadak-hub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-[#A855F7] to-[#3B82F6] hover:from-[#9333EA] hover:to-[#2563EB] text-white shadow-lg shadow-[#8B5CF6]/30 hover:shadow-[#8B5CF6]/50 hover:scale-105 active:scale-95 transition-[transform,box-shadow] duration-200 cursor-pointer"
          >
            <FolderGit2 className="w-4 h-4" />
            View All Projects on GitHub
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
