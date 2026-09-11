import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { skills } from '../data/skills';
import SkillCard from './SkillCard';
import SectionTitle from './SectionTitle';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export default function Skills({ isDarkMode = false }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'AI / ML', 'Languages', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = skills.filter(skill => {
    if (selectedCategory === 'All') return true;
    return skill.category === selectedCategory;
  });

  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 10);

  return (
    <section
      id="skills"
      className={`py-24 transition-colors duration-300 relative ${
        isDarkMode ? 'bg-[#0D1428]' : 'bg-[#F8FAFC]'
      }`}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="My Skills"
          title="Technologies I work with"
          subtitle="A comprehensive toolkit spanning Artificial Intelligence, Machine Learning pipelines, Full-Stack engineering, and modern developer tools."
          isDark={isDarkMode}
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(true);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-200 active:scale-95 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white shadow-md shadow-[#8B5CF6]/25 scale-105'
                  : isDarkMode
                  ? 'bg-[#0F1A33] text-[#CBD5E1] hover:text-[#FFFFFF] border border-[#1F2937] hover:bg-[#1A2442]'
                  : 'bg-[#FFFFFF] text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                isDarkMode={isDarkMode}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        {filteredSkills.length > 10 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-[border-color,background-color,transform] duration-200 active:scale-95 shadow-md cursor-pointer ${
                isDarkMode
                  ? 'bg-[#0F1A33] border border-[#8B5CF6]/40 text-[#C4B5FD] hover:bg-[#1A2442] hover:border-[#8B5CF6]'
                  : 'bg-[#FFFFFF] border border-[#8B5CF6]/30 text-[#7C3AED] hover:bg-[#F1F5F9] hover:border-[#8B5CF6]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              {showAll ? 'Show Less' : `View All (${filteredSkills.length} Technologies)`}
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
