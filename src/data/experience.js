// Month order map for reverse chronological sorting (Aug > Mar > Feb > Jan)
const MONTH_MAP = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12
};

const rawExperiences = [
  {
    id: "btech",
    label: "B.Tech in AI & ML",
    badge: "2025 – Current",
    period: "2025 – Current",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    organization: "Haldia Institute of Technology",
    description: "Currently pursuing B.Tech in AI & ML while exploring machine learning, web development, algorithms, and real-world applications.",
    bottomLabel: "Learning & Growing",
    color: "blue",
    dateHeader: "2025 – Current"
  },
  {
    id: "tejas",
    label: "Hackathon",
    badge: "AUG 2026",
    period: "Aug 2026",
    title: "Tejas India Hackathon 2026",
    description: "Competed in the Tejas India Hackathon, building innovative tech solutions under time constraints, collaborating with teams, and presenting to industry mentors.",
    bottomLabel: "Innovation & Teamwork",
    color: "orange",
    dateHeader: "AUG 2026",
    tieBreaker: 1 // Appears before DECODE for Aug 2026
  },
  {
    id: "decode",
    label: "Hackathon",
    badge: "AUG 2026",
    period: "Aug 2026",
    title: "DECODE — SIH 2026",
    description: "Participated in DECODE, a Smart India Hackathon 2026 qualifier round, tackling real-world national-level problem statements with creative engineering solutions.",
    bottomLabel: "Problem Solving",
    color: "rose",
    dateHeader: "AUG 2026",
    tieBreaker: 2
  },
  {
    id: "googlecloud",
    label: "Certification",
    badge: "MAR 2026",
    period: "Mar 2026",
    title: "Innovating with Google Cloud AI",
    description: "Completed Google Cloud AI Fundamentals certification, covering cloud-based AI/ML services, model deployment, and AI-powered application development on GCP.",
    bottomLabel: "Cloud AI",
    color: "emerald",
    dateHeader: "MAR 2026"
  },
  {
    id: "hplife",
    label: "Certification",
    badge: "FEB 2026",
    period: "Feb 2026",
    title: "Professional Networking for Career Growth",
    description: "Earned HP LIFE certification in Networking Fundamentals & Professional Networking for Career Growth, strengthening understanding of networking concepts, protocols, and IT infrastructure essentials.",
    bottomLabel: "Networking & IT",
    color: "sky",
    dateHeader: "FEB 2026"
  },
  {
    id: "suraksha",
    label: "Certification",
    badge: "JAN 2026",
    period: "Jan 2026",
    title: "Suraksha.AI — Eklavya Program",
    description: "Completed Suraksha.AI's Eklavya AI certification program, gaining hands-on exposure to AI safety, ethical AI, and practical machine learning applications.",
    bottomLabel: "AI Safety & Ethics",
    color: "violet",
    dateHeader: "JAN 2026"
  },
  {
    id: "higher-secondary",
    label: "Higher Secondary",
    badge: "2022 – 2024",
    period: "2022 – 2024",
    title: "Higher Secondary Education",
    description: "Built strong fundamentals in science, mathematics, analytical thinking, and problem solving.",
    bottomLabel: "Stronger Foundation",
    color: "cyan",
    dateHeader: "2022 – 2024"
  },
  {
    id: "schooling",
    label: "Schooling",
    badge: "2012 – 2022",
    period: "2012 – 2022",
    title: "Schooling",
    description: "Built the foundation of curiosity, discipline, learning, and problem-solving during my school years.",
    bottomLabel: "Where It All Began",
    color: "amber",
    dateHeader: "2012 – 2022"
  }
];

// Explicit sorting function enforcing:
// 1. B.Tech always FIRST
// 2. Reverse chronological order: YEAR descending, then MONTH descending
// 3. For duplicate month/year (Aug 2026): Tejas first, then DECODE
// 4. Pre-college education sorted descending (Higher Secondary 2022–2024 before Schooling 2012–2022)
export const sortExperiences = (list) => {
  return [...list].sort((a, b) => {
    // Rule 1: B.Tech is always first
    if (a.id === 'btech') return -1;
    if (b.id === 'btech') return 1;

    // Rule 4: Schooling is always last, Higher Secondary just before Schooling
    if (a.id === 'schooling') return 1;
    if (b.id === 'schooling') return -1;
    if (a.id === 'higher-secondary' && b.id !== 'schooling') return 1;
    if (b.id === 'higher-secondary' && a.id !== 'schooling') return -1;

    // Helper to extract year and month
    const parse = (item) => {
      const p = (item.period || '').toLowerCase();
      let month = 0;
      for (const [m, v] of Object.entries(MONTH_MAP)) {
        if (p.includes(m)) {
          month = v;
          break;
        }
      }
      const yMatch = p.match(/\b(20\d\d)\b/);
      const year = yMatch ? parseInt(yMatch[1], 10) : 0;
      return { year, month };
    };

    const dateA = parse(a);
    const dateB = parse(b);

    // Rule 2: YEAR descending
    if (dateB.year !== dateA.year) {
      return dateB.year - dateA.year;
    }

    // Rule 2: MONTH descending
    if (dateB.month !== dateA.month) {
      return dateB.month - dateA.month;
    }

    // Rule 3: Tie-breaker for same month & year (Aug 2026)
    return (a.tieBreaker || 0) - (b.tieBreaker || 0);
  });
};

export const experiences = sortExperiences(rawExperiences);
