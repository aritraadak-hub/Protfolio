import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import {
  GraduationCap, BookOpen, School, Shield, Wifi, Cloud,
  Trophy, Zap, Code2, ChevronLeft, ChevronRight, ExternalLink,
} from 'lucide-react';

// ── Icon map ─────────────────────────────────────────────────
const ICONS = {
  btech: GraduationCap,
  suraksha: Shield,
  hplife: Wifi,
  googlecloud: Cloud,
  tejas: Trophy,
  decode: Zap,
  'higher-secondary': BookOpen,
  schooling: School,
};

// ── Heading / Title Accent Colors (per milestone) ────────────
const TITLE_COLORS = {
  btech: {
    dark: 'text-[#60A5FA]',
    light: 'text-[#2563EB]',
  },
  tejas: {
    dark: 'text-[#FBBF24]',
    light: 'text-[#D97706]',
  },
  decode: {
    dark: 'text-[#F472B6]',
    light: 'text-[#DB2777]',
  },
  googlecloud: {
    dark: 'text-[#34D399]',
    light: 'text-[#059669]',
  },
  hplife: {
    dark: 'text-[#22D3EE]',
    light: 'text-[#0891B2]',
  },
  suraksha: {
    dark: 'text-[#A78BFA]',
    light: 'text-[#7C3AED]',
  },
  'higher-secondary': {
    dark: 'text-[#FB923C]',
    light: 'text-[#EA580C]',
  },
  schooling: {
    dark: 'text-[#2DD4BF]',
    light: 'text-[#0F766E]',
  },
};

// ── LinkedIn View Links (for the 4 specified cards) ───────────
const VIEW_LINKS = {
  tejas: {
    url: 'https://www.linkedin.com/posts/aritra-adak-941408395_participation-certificate-activity-7501527538536636416-2VOy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGEO-0EBstg0JpDEW9AyITH4fvR4VCoXXQQ',
    dark: 'text-[#FBBF24] hover:text-[#FDE68A] hover:drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]',
    light: 'text-[#D97706] hover:text-[#B45309]',
  },
  decode: {
    url: 'https://www.linkedin.com/posts/aritra-adak-941408395_certificate-activity-7502920000593182720-Acvx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGEO-0EBstg0JpDEW9AyITH4fvR4VCoXXQQ',
    dark: 'text-[#F472B6] hover:text-[#FBCFE8] hover:drop-shadow-[0_0_6px_rgba(244,114,182,0.6)]',
    light: 'text-[#DB2777] hover:text-[#BE185D]',
  },
  googlecloud: {
    url: 'https://www.linkedin.com/posts/aritra-adak-941408395_innovation-googlecloud-ai-activity-7430910434918014976-QbKM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGEO-0EBstg0JpDEW9AyITH4fvR4VCoXXQQ',
    dark: 'text-[#34D399] hover:text-[#6EE7B7] hover:drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]',
    light: 'text-[#059669] hover:text-[#047857]',
  },
  hplife: {
    url: 'https://www.linkedin.com/posts/aritra-adak-941408395_ai-learning-networking-activity-7425496827174535169-SqYU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGEO-0EBstg0JpDEW9AyITH4fvR4VCoXXQQ',
    dark: 'text-[#22D3EE] hover:text-[#67E8F9] hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]',
    light: 'text-[#0891B2] hover:text-[#0e7490]',
  },
};

// ── Color tokens with sharp core & compact glow ───────────────
const COLOR = {
  blue: {
    border: 'border-[#3B82F6]',
    glow: 'shadow-[0_0_4px_rgba(59,130,246,0.90),0_0_9px_rgba(59,130,246,0.55),0_0_16px_rgba(59,130,246,0.25)]',
    bg: 'bg-[#070B1C]',
    text: 'text-[#60A5FA]',
    textLight: 'text-blue-600',
    dot: 'bg-[#3B82F6] border border-white/80 shadow-[0_0_4px_#3B82F6,0_0_8px_#3B82F6]',
    badge: 'border-blue-500/50 bg-blue-500/20 text-blue-300 shadow-[0_0_6px_rgba(59,130,246,0.25)]',
    badgeLight: 'border-blue-300 bg-blue-50 text-blue-700',
    card: 'border-blue-500/40 hover:border-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.18)] hover:shadow-[0_0_14px_rgba(59,130,246,0.30)]',
    bottom: 'text-[#60A5FA]',
    bottomLight: 'text-blue-600',
  },
  violet: {
    border: 'border-[#8B5CF6]',
    glow: 'shadow-[0_0_4px_rgba(139,92,246,0.85),0_0_9px_rgba(139,92,246,0.55),0_0_16px_rgba(139,92,246,0.25)]',
    bg: 'bg-[#070B1C]',
    text: 'text-[#A78BFA]',
    textLight: 'text-purple-600',
    dot: 'bg-[#8B5CF6] border border-white/80 shadow-[0_0_4px_#8B5CF6,0_0_8px_#8B5CF6]',
    badge: 'border-violet-500/50 bg-violet-500/20 text-violet-300 shadow-[0_0_6px_rgba(139,92,246,0.25)]',
    badgeLight: 'border-purple-300 bg-purple-50 text-purple-700',
    card: 'border-violet-500/40 hover:border-violet-500/80 shadow-[0_0_8px_rgba(139,92,246,0.18)] hover:shadow-[0_0_14px_rgba(139,92,246,0.30)]',
    bottom: 'text-[#A78BFA]',
    bottomLight: 'text-purple-600',
  },
  sky: {
    border: 'border-[#38BDF8]',
    glow: 'shadow-[0_0_4px_rgba(56,189,248,0.85),0_0_9px_rgba(56,189,248,0.50),0_0_16px_rgba(56,189,248,0.20)]',
    bg: 'bg-[#070B1C]',
    text: 'text-[#7DD3FC]',
    textLight: 'text-sky-600',
    dot: 'bg-[#38BDF8] border border-white/80 shadow-[0_0_4px_#38BDF8,0_0_8px_#38BDF8]',
    badge: 'border-sky-500/50 bg-sky-500/20 text-sky-300 shadow-[0_0_6px_rgba(56,189,248,0.25)]',
    badgeLight: 'border-sky-300 bg-sky-50 text-sky-700',
    card: 'border-sky-500/40 hover:border-sky-500/80 shadow-[0_0_8px_rgba(56,189,248,0.18)] hover:shadow-[0_0_14px_rgba(56,189,248,0.30)]',
    bottom: 'text-[#7DD3FC]',
    bottomLight: 'text-sky-600',
  },
  emerald: {
    border: 'border-[#34D399]',
    glow: 'shadow-[0_0_4px_rgba(52,211,153,0.85),0_0_9px_rgba(52,211,153,0.50),0_0_16px_rgba(52,211,153,0.20)]',
    bg: 'bg-[#070B1C]',
    text: 'text-[#6EE7B7]',
    textLight: 'text-emerald-600',
    dot: 'bg-[#34D399] border border-white/80 shadow-[0_0_4px_#34D399,0_0_8px_#34D399]',
    badge: 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300 shadow-[0_0_6px_rgba(52,211,153,0.25)]',
    badgeLight: 'border-emerald-300 bg-emerald-50 text-emerald-700',
    card: 'border-emerald-500/40 hover:border-emerald-500/80 shadow-[0_0_8px_rgba(52,211,153,0.18)] hover:shadow-[0_0_14px_rgba(52,211,153,0.30)]',
    bottom: 'text-[#6EE7B7]',
    bottomLight: 'text-emerald-600',
  },
  orange: {
    border: 'border-[#FB923C]',
    glow: 'shadow-[0_0_4px_rgba(251,146,60,0.85),0_0_9px_rgba(251,146,60,0.50),0_0_16px_rgba(251,146,60,0.20)]',
    bg: 'bg-[#070B1C]',
    text: 'text-[#FDBA74]',
    textLight: 'text-orange-600',
    dot: 'bg-[#FB923C] border border-white/80 shadow-[0_0_4px_#FB923C,0_0_8px_#FB923C]',
    badge: 'border-orange-500/50 bg-orange-500/20 text-orange-300 shadow-[0_0_6px_rgba(251,146,60,0.25)]',
    badgeLight: 'border-orange-300 bg-orange-50 text-orange-700',
    card: 'border-orange-500/40 hover:border-orange-500/80 shadow-[0_0_8px_rgba(251,146,60,0.18)] hover:shadow-[0_0_14px_rgba(251,146,60,0.30)]',
    bottom: 'text-[#FDBA74]',
    bottomLight: 'text-orange-600',
  },
  rose: {
    border: 'border-[#FB7185]',
    glow: 'shadow-[0_0_4px_rgba(251,113,133,0.85),0_0_9px_rgba(251,113,133,0.50),0_0_16px_rgba(251,113,133,0.20)]',
    bg: 'bg-[#070B1C]',
    text: 'text-[#FDA4AF]',
    textLight: 'text-rose-600',
    dot: 'bg-[#FB7185] border border-white/80 shadow-[0_0_4px_#FB7185,0_0_8px_#FB7185]',
    badge: 'border-rose-500/50 bg-rose-500/20 text-rose-300 shadow-[0_0_6px_rgba(251,113,133,0.25)]',
    badgeLight: 'border-rose-300 bg-rose-50 text-rose-700',
    card: 'border-rose-500/40 hover:border-rose-500/80 shadow-[0_0_8px_rgba(251,113,133,0.18)] hover:shadow-[0_0_14px_rgba(251,113,133,0.30)]',
    bottom: 'text-[#FDA4AF]',
    bottomLight: 'text-rose-600',
  },
  cyan: {
    border: 'border-[#22D3EE]',
    glow: 'shadow-[0_0_4px_rgba(34,211,238,0.85),0_0_9px_rgba(34,211,238,0.50),0_0_16px_rgba(34,211,238,0.20)]',
    bg: 'bg-[#070B1C]',
    text: 'text-[#67E8F9]',
    textLight: 'text-cyan-600',
    dot: 'bg-[#22D3EE] border border-white/80 shadow-[0_0_4px_#22D3EE,0_0_8px_#22D3EE]',
    badge: 'border-cyan-500/50 bg-cyan-500/20 text-cyan-300 shadow-[0_0_6px_rgba(34,211,238,0.25)]',
    badgeLight: 'border-cyan-300 bg-cyan-50 text-cyan-700',
    card: 'border-cyan-500/40 hover:border-cyan-500/80 shadow-[0_0_8px_rgba(34,211,238,0.18)] hover:shadow-[0_0_14px_rgba(34,211,238,0.30)]',
    bottom: 'text-[#67E8F9]',
    bottomLight: 'text-cyan-600',
  },
  amber: {
    border: 'border-[#FBBF24]',
    glow: 'shadow-[0_0_4px_rgba(251,191,36,0.85),0_0_9px_rgba(251,191,36,0.50),0_0_16px_rgba(251,191,36,0.20)]',
    bg: 'bg-[#070B1C]',
    text: 'text-[#FDE68A]',
    textLight: 'text-amber-600',
    dot: 'bg-[#FBBF24] border border-white/80 shadow-[0_0_4px_#FBBF24,0_0_8px_#FBBF24]',
    badge: 'border-amber-500/50 bg-amber-500/20 text-amber-300 shadow-[0_0_6px_rgba(251,191,36,0.25)]',
    badgeLight: 'border-amber-300 bg-amber-50 text-amber-700',
    card: 'border-amber-500/40 hover:border-amber-500/80 shadow-[0_0_8px_rgba(251,191,36,0.18)] hover:shadow-[0_0_14px_rgba(251,191,36,0.30)]',
    bottom: 'text-[#FDE68A]',
    bottomLight: 'text-amber-600',
  },
};

// ── Layout constants ──────────────────────────────────────────
const N   = 8;    // total milestones
const CW  = 310;  // card width (px)
const GAP = 24;   // gap between columns (px) - reduced from 56 for compact spacing
const PAD = 28;   // horizontal padding each side (px) - reduced from 48
const TRACK_H = 200; // node-track container height (px)

// Total inner scrollable width: 28*2 + 8*310 + 7*24 = 2704 px
const INNER_W = PAD * 2 + N * CW + (N - 1) * GAP;

// Center-X for milestone i (matches the flex column layout exactly)
const nX = (i) => PAD + i * (CW + GAP) + Math.floor(CW / 2);

// Gently staggered Y-positions on the SVG curve (px from top of TRACK_H)
// Range kept within [72, 116] so date labels and dots fit inside TRACK_H=200
const NY = [95, 76, 114, 80, 110, 72, 100, 78];

// Padding-top per column so that the node circle is centred at NY[i].
// Column layout from paddingTop: [dateLabel≈36px] [mb 4px] [nodeCircle 68px → centre +34] = PT + 74
// ∴ PT = NY[i] − 74  (clamped to ≥2)
const nodePT = (i) => Math.max(2, NY[i] - 74);

// Build the continuous smooth bezier path through all 8 node positions
function buildPath() {
  let d = `M 20 ${NY[0]}`;

  // Entry cap → node 0
  const cx0 = (20 + nX(0)) / 2;
  d += ` C ${cx0} ${NY[0]}, ${cx0} ${NY[0]}, ${nX(0)} ${NY[0]}`;

  // Node 0 → 1 → … → 7
  for (let i = 1; i < N; i++) {
    const cpX = (nX(i - 1) + nX(i)) / 2;
    d += ` C ${cpX} ${NY[i - 1]}, ${cpX} ${NY[i]}, ${nX(i)} ${NY[i]}`;
  }

  // Node 7 → exit cap
  const exitX = INNER_W - 20;
  const cxLast = (nX(N - 1) + exitX) / 2;
  d += ` C ${cxLast} ${NY[N - 1]}, ${cxLast} ${NY[N - 1]}, ${exitX} ${NY[N - 1]}`;

  return d;
}

const JOURNEY_PATH = buildPath();

export default function Experience({ isDarkMode = true }) {
  const scrollRef  = useRef(null);
  const progressBarRef = useRef(null);
  const rafRef = useRef(null);
  const canLeftRef = useRef(false);
  const canRightRef = useRef(true);

  // Drag state
  const [isDragging, setIsDragging]   = useState(false);
  const [dragStart,  setDragStart]    = useState(0);
  const [dragScroll, setDragScroll]   = useState(0);

  // Scroll-indicator state (only changes when boundaries flip)
  const [canLeft,  setCanLeft]   = useState(false);
  const [canRight, setCanRight]  = useState(true);

  // ── Update scroll state with RAF and direct DOM update ─────
  const syncScrollState = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = scrollRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      const newCanLeft = el.scrollLeft > 4;
      const newCanRight = el.scrollLeft < max - 4;

      if (newCanLeft !== canLeftRef.current) {
        canLeftRef.current = newCanLeft;
        setCanLeft(newCanLeft);
      }
      if (newCanRight !== canRightRef.current) {
        canRightRef.current = newCanRight;
        setCanRight(newCanRight);
      }

      if (progressBarRef.current && max > 0) {
        const pct = Math.min(100, Math.max(0, Math.round((el.scrollLeft / max) * 100)));
        progressBarRef.current.style.width = `${pct}%`;
      }
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    syncScrollState();
    el.addEventListener('scroll', syncScrollState, { passive: true });
    return () => {
      el.removeEventListener('scroll', syncScrollState);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [syncScrollState]);

  // ── Wheel → horizontal scroll with boundary pass-through ───
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e) => {
      // Only take over vertical wheel; leave truly-horizontal trackpad alone
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      const max = el.scrollWidth - el.clientWidth;
      const atLeft = el.scrollLeft <= 0;
      const atRight = el.scrollLeft >= max - 1;

      // Allow natural page vertical scroll when reaching boundaries
      if ((atLeft && e.deltaY < 0) || (atRight && e.deltaY > 0)) {
        return;
      }

      e.preventDefault();
      el.scrollLeft += e.deltaY * 0.75;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // ── Drag-to-scroll ───────────────────────────────────────
  const onMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragScroll(scrollRef.current?.scrollLeft ?? 0);
    e.preventDefault();
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging || !scrollRef.current) return;
    scrollRef.current.scrollLeft = dragScroll - (e.clientX - dragStart);
  }, [isDragging, dragStart, dragScroll]);

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',  onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup',  onMouseUp);
    };
  }, [isDragging, onMouseMove, onMouseUp]);

  // ── Navigation buttons ───────────────────────────────────
  const nav = (dir) =>
    scrollRef.current?.scrollBy({ left: dir * 334, behavior: 'smooth' });

  // ────────────────────────────────────────────────────────
  return (
    <section
      id="experience"
      className={`pt-12 sm:pt-16 pb-20 sm:pb-28 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-[#050816]' : 'bg-[#F8FAFC]'
      }`}
    >
      {/* Background glows - subtle ambient to prevent fog/haze */}
      <div className={`absolute top-1/4 left-10 w-[380px] h-[380px] rounded-full blur-[110px] pointer-events-none ${
        isDarkMode ? 'bg-blue-700/6' : 'bg-blue-500/4'
      }`} />
      <div className={`absolute top-1/3 left-1/4 w-[360px] h-[360px] rounded-full blur-[120px] pointer-events-none ${
        isDarkMode ? 'bg-violet-600/6' : 'bg-violet-500/4'
      }`} />
      <div className={`absolute top-1/3 right-1/4 w-[340px] h-[340px] rounded-full blur-[110px] pointer-events-none ${
        isDarkMode ? 'bg-cyan-500/5' : 'bg-cyan-500/3'
      }`} />
      <div className={`absolute top-1/4 right-10 w-[320px] h-[320px] rounded-full blur-[120px] pointer-events-none ${
        isDarkMode ? 'bg-amber-500/5' : 'bg-amber-500/3'
      }`} />

      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── SECTION HEADER ─────────────────────────────────── */}
        <div className="text-center mb-8 sm:mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 transition-colors ${
            isDarkMode
              ? 'bg-[#8B5CF6]/10 border border-[#8B5CF6] text-[#C4B5FD] shadow-[0_0_7px_rgba(139,92,246,0.20)]'
              : 'bg-[#8B5CF6]/8 border border-[#7C3AED] text-[#7C3AED] shadow-[0_0_6px_rgba(124,58,237,0.12)]'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_4px_#8B5CF6] animate-pulse"></span>
            JOURNEY
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className={`transition-colors ${isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'}`}>My Journey </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
              So Far
            </span>
          </h2>

          <p className={`mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed transition-colors ${
            isDarkMode ? 'text-[#94A3B8]' : 'text-[#475569]'
          }`}>
            Milestones, projects, and experiences that have shaped my path.
            <br className="hidden sm:inline" />
            {' '}Grateful for the past, excited for what&apos;s next.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* DESKTOP / TABLET — Horizontal Scroll (sm and up)           */}
        {/* ════════════════════════════════════════════════════════════ */}
        <div className="hidden sm:block mt-4 sm:mt-6">

          {/* Navigation controls */}
          <div className="flex items-center justify-end mb-4 px-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => nav(-1)}
                aria-label="Scroll timeline left"
                disabled={!canLeft}
                className={`p-2 rounded-full border transition-all duration-200 focus:outline-none ${
                  canLeft
                    ? isDarkMode
                      ? 'border-[#8B5CF6]/55 bg-[#0F1A33] text-[#CBD5E1] hover:bg-[#1A2442] hover:border-[#8B5CF6] hover:text-[#FFFFFF] shadow-[0_0_7px_rgba(139,92,246,0.18)] hover:shadow-[0_0_8px_rgba(139,92,246,0.35)] cursor-pointer'
                      : 'border-[#7C3AED]/40 bg-[#FFFFFF] text-[#475569] hover:bg-[#F1F5F9] hover:border-[#7C3AED] hover:text-[#0F172A] shadow-[0_0_6px_rgba(124,58,237,0.10)] hover:shadow-[0_0_8px_rgba(124,58,237,0.25)] cursor-pointer'
                    : isDarkMode
                      ? 'border-[#1F2937]/50 bg-transparent text-[#94A3B8]/30 cursor-not-allowed'
                      : 'border-[#E2E8F0]/50 bg-slate-100/50 text-[#64748B]/30 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => nav(1)}
                aria-label="Scroll timeline right"
                disabled={!canRight}
                className={`p-2 rounded-full border transition-all duration-200 focus:outline-none ${
                  canRight
                    ? isDarkMode
                      ? 'border-[#8B5CF6]/55 bg-[#0F1A33] text-[#CBD5E1] hover:bg-[#1A2442] hover:border-[#8B5CF6] hover:text-[#FFFFFF] shadow-[0_0_7px_rgba(139,92,246,0.18)] hover:shadow-[0_0_8px_rgba(139,92,246,0.35)] cursor-pointer'
                      : 'border-[#7C3AED]/40 bg-[#FFFFFF] text-[#475569] hover:bg-[#F1F5F9] hover:border-[#7C3AED] hover:text-[#0F172A] shadow-[0_0_6px_rgba(124,58,237,0.10)] hover:shadow-[0_0_8px_rgba(124,58,237,0.25)] cursor-pointer'
                    : isDarkMode
                      ? 'border-[#1F2937]/50 bg-transparent text-[#94A3B8]/30 cursor-not-allowed'
                      : 'border-[#E2E8F0]/50 bg-slate-100/50 text-[#64748B]/30 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="journey-hscroll overflow-x-auto overflow-y-hidden rounded-xl scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollSnapType: 'x proximity',
            }}
            onMouseDown={onMouseDown}
          >
            {/* ── Inner fixed-width track ─────────────────────── */}
            <div
              className="relative pb-6 select-none"
              style={{ width: `${INNER_W}px` }}
            >
              {/* ── NODE TRACK ───────────────────────────────────── */}
              <div className="relative" style={{ height: `${TRACK_H}px` }}>

                {/* SVG: glowing curved journey line */}
                <svg
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{ width: `${INNER_W}px`, height: `${TRACK_H}px` }}
                  viewBox={`0 0 ${INNER_W} ${TRACK_H}`}
                  fill="none"
                >
                  <defs>
                    {/* Section 12 timeline gradients */}
                    <linearGradient id="hJourneyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      {isDarkMode ? (
                        <>
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="25%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#22D3EE" />
                          <stop offset="75%" stopColor="#34D399" />
                          <stop offset="100%" stopColor="#FBBF24" />
                        </>
                      ) : (
                        <>
                          <stop offset="0%" stopColor="#7C3AED" />
                          <stop offset="25%" stopColor="#2563EB" />
                          <stop offset="50%" stopColor="#0891B2" />
                          <stop offset="75%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#D97706" />
                        </>
                      )}
                    </linearGradient>

                    {/* Compact soft glow filter */}
                    <filter id="hNeonGlow" x="-10%" y="-100%" width="120%" height="300%">
                      <feGaussianBlur stdDeviation={isDarkMode ? "3" : "1.5"} result="blur" />
                    </filter>
                  </defs>

                  {/* Layer 2: Soft outer glow behind the line */}
                  <path
                    d={JOURNEY_PATH}
                    stroke="url(#hJourneyGrad)"
                    strokeWidth={isDarkMode ? "6" : "4"}
                    strokeLinecap="round"
                    opacity={isDarkMode ? "0.45" : "0.18"}
                    filter="url(#hNeonGlow)"
                  />

                  {/* Layer 1: Sharp crisp animated core path */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.0, ease: 'easeInOut' }}
                    d={JOURNEY_PATH}
                    stroke="url(#hJourneyGrad)"
                    strokeWidth={isDarkMode ? "2.5" : "3"}
                    strokeLinecap="round"
                    style={{
                      filter: isDarkMode
                        ? 'drop-shadow(0 0 3px rgba(139, 92, 246, 0.7)) drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
                        : 'drop-shadow(0 0 2px rgba(124, 58, 237, 0.3))'
                    }}
                  />

                  {/* Left entry arrow */}
                  <path
                    d={`M 5 ${NY[0] - 7} L 20 ${NY[0]} L 5 ${NY[0] + 7}`}
                    stroke={isDarkMode ? "#8B5CF6" : "#7C3AED"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      filter: isDarkMode ? 'drop-shadow(0 0 3px #8B5CF6)' : 'none'
                    }}
                  />

                  {/* Right exit arrow */}
                  <path
                    d={`M ${INNER_W - 20} ${NY[N - 1] - 7} L ${INNER_W - 5} ${NY[N - 1]} L ${INNER_W - 20} ${NY[N - 1] + 7}`}
                    stroke={isDarkMode ? "#FBBF24" : "#D97706"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      filter: isDarkMode ? 'drop-shadow(0 0 3px #FBBF24)' : 'none'
                    }}
                  />
                </svg>

                {/* Flex row of node columns — centres must match nX(i) */}
                <div
                  className="absolute inset-0 flex"
                  style={{
                    paddingLeft:  `${PAD}px`,
                    paddingRight: `${PAD}px`,
                    gap: `${GAP}px`,
                  }}
                >
                  {experiences.map((exp, i) => {
                    const c    = COLOR[exp.color] || COLOR.blue;
                    const Icon = ICONS[exp.id]    || Code2;

                    return (
                      <div
                        key={exp.id}
                        className="flex flex-col items-center flex-shrink-0"
                        style={{ width: `${CW}px`, paddingTop: `${nodePT(i)}px` }}
                      >
                        {/* Date label */}
                        <span className={`block text-[11px] font-extrabold tracking-widest uppercase text-center leading-tight mb-1 transition-colors ${
                          isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
                        }`}>
                          {exp.dateHeader}
                        </span>

                        {/* Glowing circular node */}
                        <motion.div
                          initial={{ scale: 0.7, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: 0.08 + i * 0.07 }}
                          whileHover={{ scale: 1.1 }}
                          className="relative z-10 cursor-pointer"
                        >
                          <div
                            className={`w-[68px] h-[68px] rounded-full border-2 flex items-center justify-center transition-[border-color,background-color,box-shadow] duration-200 ${c.border} ${
                              isDarkMode
                                ? `${c.bg} ${c.glow}`
                                : 'bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
                            }`}
                          >
                            <Icon className={`w-[26px] h-[26px] ${isDarkMode ? c.text : c.textLight || c.text}`} />
                          </div>

                          {/* Active ping – B.Tech only */}
                          {exp.id === 'btech' && (
                            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-70" />
                              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500" />
                            </span>
                          )}
                        </motion.div>

                        {/* Small glowing dot - solid colored center with compact glow */}
                        <div className="mt-2.5">
                          <span className={`block w-2.5 h-2.5 rounded-full ${c.dot}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>{/* /NODE TRACK */}

              {/* ── CARD ROW ────────────────────────────────────── */}
              <div
                className="flex mt-5"
                style={{
                  paddingLeft:  `${PAD}px`,
                  paddingRight: `${PAD}px`,
                  gap: `${GAP}px`,
                }}
              >
                {experiences.map((exp, i) => {
                  const c    = COLOR[exp.color] || COLOR.blue;
                  const Icon = ICONS[exp.id]    || Code2;
                  const titleColor = TITLE_COLORS[exp.id] || { dark: 'text-[#FFFFFF]', light: 'text-[#0F172A]' };
                  const viewLink = VIEW_LINKS[exp.id];

                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.12 + i * 0.07 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className={`flex-shrink-0 backdrop-blur-xl border rounded-2xl p-5 flex flex-col justify-between min-h-[240px] transition-[border-color,background-color,box-shadow] duration-200 ${
                        isDarkMode
                          ? exp.id === 'btech'
                            ? 'bg-[#0F1A33] border-[#8B5CF6]/75 shadow-[0_0_8px_rgba(139,92,246,0.30),0_0_18px_rgba(59,130,246,0.12)]'
                            : 'bg-[#0F1A33] border-[#1F2937] hover:border-[#8B5CF6]/55 hover:shadow-[0_0_8px_rgba(139,92,246,0.20)] shadow-lg'
                          : exp.id === 'btech'
                            ? 'bg-[#FFFFFF] border-[#7C3AED]/70 shadow-[0_0_8px_rgba(124,58,237,0.18)]'
                            : 'bg-[#FFFFFF] border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.10)] hover:border-[#7C3AED]/50'
                      }`}
                      style={{ width: `${CW}px`, scrollSnapAlign: 'start' }}
                    >
                      <div className="flex-1 flex flex-col">
                        {/* Top row: label + badge */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isDarkMode ? c.text : c.textLight || c.text}`} />
                            <span className={`text-[10px] font-bold tracking-wide uppercase truncate ${
                              isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
                            }`}>
                              {exp.label}
                            </span>
                          </div>
                          <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold border ${
                            isDarkMode ? c.badge : c.badgeLight || c.badge
                          }`}>
                            {exp.badge}
                          </span>
                        </div>

                        {/* Title with per-milestone accent color */}
                        <h3 className={`text-[13px] font-extrabold leading-snug tracking-tight ${
                          isDarkMode ? titleColor.dark : titleColor.light
                        }`}>
                          {exp.title}
                        </h3>

                        {/* Organisation (B.Tech) */}
                        {exp.organization && (
                          <p className="text-[10px] font-bold mt-1.5 text-[#3B82F6]">
                            {exp.organization}
                          </p>
                        )}

                        {/* Description */}
                        <p className={`mt-2.5 text-[11px] leading-relaxed flex-1 ${
                          isDarkMode ? 'text-[#CBD5E1]' : 'text-[#475569]'
                        }`}>
                          {exp.description}
                        </p>

                        {/* Featured projects pills */}
                        {exp.featuredProjects && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {exp.featuredProjects.map((proj) => (
                              <span
                                key={proj}
                                className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md border ${
                                  isDarkMode
                                    ? 'bg-[#8B5CF6]/15 border-[#8B5CF6]/30 text-[#C4B5FD]'
                                    : 'bg-[#8B5CF6]/10 border-[#8B5CF6]/20 text-[#6D28D9]'
                                }`}
                              >
                                {proj}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Bottom footer row: Left category text, Right View link */}
                      <div className={`mt-4 pt-3 border-t flex items-center justify-between gap-2 ${isDarkMode ? 'border-[#1E293B]' : 'border-[#E5E7EB]'}`}>
                        <span className={`text-[10px] font-bold truncate ${isDarkMode ? c.bottom : c.bottomLight || c.bottom}`}>
                          {exp.bottomLabel}
                        </span>
                        {viewLink && (
                          <a
                            href={viewLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`inline-flex items-center gap-1 text-[11px] font-semibold transition-all duration-200 flex-shrink-0 group/view ${
                              isDarkMode ? viewLink.dark : viewLink.light
                            }`}
                            aria-label={`View certificate or post for ${exp.title}`}
                          >
                            <span>View</span>
                            <ExternalLink className="w-3 h-3 transition-transform duration-200 group-hover/view:translate-x-0.5 group-hover/view:-translate-y-0.5" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>{/* /inner track */}
          </div>{/* /scroll container */}

          {/* Progress bar */}
          <div className={`mt-4 mx-1 h-[3px] rounded-full overflow-hidden ${
            isDarkMode ? 'bg-[#1F2937]' : 'bg-[#E2E8F0]'
          }`}>
            <div
              ref={progressBarRef}
              className={`h-full rounded-full transition-[width] duration-75 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] via-[#22D3EE] via-[#34D399] to-[#FBBF24] shadow-[0_0_6px_rgba(139,92,246,0.6)]'
                  : 'bg-gradient-to-r from-[#7C3AED] via-[#2563EB] via-[#0891B2] via-[#059669] to-[#D97706]'
              }`}
              style={{ width: '0%' }}
            />
          </div>
          {/* Progress endpoints */}
          <div className="mt-1.5 flex justify-between px-1">
            <span className={`text-[9px] font-medium ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>B.Tech – Current</span>
            <span className={`text-[9px] font-medium ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>Schooling – 2012</span>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* MOBILE — Vertical timeline (sm:hidden)                      */}
        {/* ════════════════════════════════════════════════════════════ */}
        <div className="sm:hidden relative mt-6 sm:mt-8 pl-6 space-y-5">
          {/* Vertical multicolour track */}
          <div
            className="absolute left-[18px] top-4 bottom-4 w-[2.5px] rounded-full"
            style={{
              background: isDarkMode
                ? 'linear-gradient(to bottom, #8B5CF6, #3B82F6, #22D3EE, #34D399, #FBBF24)'
                : 'linear-gradient(to bottom, #7C3AED, #2563EB, #0891B2, #059669, #D97706)',
              boxShadow: isDarkMode
                ? '0 0 6px rgba(139,92,246,0.5), 0 0 12px rgba(59,130,246,0.25)'
                : '0 0 4px rgba(124,58,237,0.2)'
            }}
          />

          {experiences.map((exp, i) => {
            const c    = COLOR[exp.color] || COLOR.blue;
            const Icon = ICONS[exp.id]    || Code2;
            const titleColor = TITLE_COLORS[exp.id] || { dark: 'text-[#FFFFFF]', light: 'text-[#0F172A]' };
            const viewLink = VIEW_LINKS[exp.id];

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="relative pl-7"
              >
                {/* Node */}
                <div className="absolute -left-[5px] top-3 z-10">
                  <div
                    className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-[border-color,background-color,box-shadow] duration-200 ${c.border} ${
                      isDarkMode
                        ? `${c.bg} ${c.glow}`
                        : 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isDarkMode ? c.text : c.textLight || c.text}`} />
                  </div>
                  {exp.id === 'btech' && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-70" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
                    </span>
                  )}
                </div>

                {/* Card */}
                <div
                  className={`backdrop-blur-xl border rounded-2xl p-4 transition-[border-color,background-color,box-shadow] duration-200 ${
                    isDarkMode
                      ? exp.id === 'btech'
                        ? 'bg-[#0F1A33] border-[#8B5CF6]/75 shadow-[0_0_8px_rgba(139,92,246,0.30)]'
                        : 'bg-[#0F1A33] border-[#1F2937]'
                      : exp.id === 'btech'
                        ? 'bg-[#FFFFFF] border-[#7C3AED]/70 shadow-[0_0_8px_rgba(124,58,237,0.15)]'
                        : 'bg-[#FFFFFF] border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <Icon className={`w-3.5 h-3.5 ${isDarkMode ? c.text : c.textLight || c.text}`} />
                      <span className={`text-[10px] font-bold tracking-wide uppercase ${
                        isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
                      }`}>
                        {exp.label}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${
                      isDarkMode ? c.badge : c.badgeLight || c.badge
                    }`}>
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className={`text-sm font-bold leading-snug ${
                    isDarkMode ? titleColor.dark : titleColor.light
                  }`}>{exp.title}</h3>

                  {exp.organization && (
                    <p className="text-[10px] font-bold mt-1 text-[#3B82F6]">{exp.organization}</p>
                  )}

                  <p className={`mt-2 text-[11px] leading-relaxed ${
                    isDarkMode ? 'text-[#CBD5E1]' : 'text-[#475569]'
                  }`}>{exp.description}</p>

                  {exp.featuredProjects && (
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {exp.featuredProjects.map((proj) => (
                        <span
                          key={proj}
                          className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md border ${
                            isDarkMode
                              ? 'bg-[#8B5CF6]/15 border-[#8B5CF6]/30 text-[#C4B5FD]'
                              : 'bg-[#8B5CF6]/10 border-[#8B5CF6]/20 text-[#6D28D9]'
                          }`}
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom footer row: Left category text, Right View link */}
                  <div className={`mt-3 pt-2.5 border-t flex items-center justify-between gap-2 ${isDarkMode ? 'border-[#1E293B]' : 'border-[#E5E7EB]'}`}>
                    <span className={`text-[10px] font-bold truncate ${isDarkMode ? c.bottom : c.bottomLight || c.bottom}`}>{exp.bottomLabel}</span>
                    {viewLink && (
                      <a
                        href={viewLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-[11px] font-semibold transition-all duration-200 flex-shrink-0 group/view ${
                          isDarkMode ? viewLink.dark : viewLink.light
                        }`}
                        aria-label={`View certificate or post for ${exp.title}`}
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3 transition-transform duration-200 group-hover/view:translate-x-0.5 group-hover/view:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bottom decorative wave */}
      <svg
        className={`absolute bottom-0 left-0 w-full h-14 pointer-events-none z-0 transition-opacity ${
          isDarkMode ? 'opacity-15' : 'opacity-8'
        }`}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M 0 50 Q 360 20 720 50 T 1440 50" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 10" />
        <path d="M 0 65 Q 360 35 720 65 T 1440 65" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 8" />
      </svg>
    </section>
  );
}
