// ============================================================
// PORTFOLIO DATA — All personalised content for Yash Rajput
// ============================================================

export const personalInfo = {
  name: 'Yash Rajput',
  role: 'Full Stack Developer',
  tagline: 'I build scalable and intelligent web applications.',
  bio: `From NCC drills to MERN stack builds — discipline meets development.
I'm a Computer Science Engineering student at IES College of Technology, Bhopal
(CGPA: 7.7), with a strong grip on full-stack development, DSA, and
building real-world products that make an impact.`,
  bioExtra: `What I may lack in years of experience, I make up with determination,
structured thinking, and a relentless drive to learn. I've shipped AI-powered
platforms, full-stack election systems, and developer tools — and I'm just getting started.`,
  email: 'yash.rajput2194@gmail.com',
  phone: '+91 9926391141',
  location: 'Bhopal, Madhya Pradesh',
  github: 'https://github.com/YashHub-Rajput',
  linkedin: 'https://www.linkedin.com/in/yash-rajput21/',
  resumeUrl: '/YashRajput-Resume2026.pdf',
  photo: '/Yash%20Rajput%20photo.jpg',
}

export const skills = [
  {
    category: 'Frontend',
    color: 'blue' as const,
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    color: 'purple' as const,
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'Mongoose', 'Oracle', 'MySQL'],
  },
  {
    category: 'Languages',
    color: 'teal' as const,
    items: ['Java', 'Python', 'C++', 'C'],
  },
  {
    category: 'Tools & Platforms',
    color: 'orange' as const,
    items: ['Git', 'GitHub', 'Figma', 'Canva', 'Vercel', 'Render', 'Postman', 'VS Code'],
  },
  {
    category: 'Core CS',
    color: 'green' as const,
    items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS Fundamentals'],
  },
  {
    category: 'Soft Skills',
    color: 'pink' as const,
    items: ['Leadership', 'Communication', 'Teamwork', 'Critical Thinking', 'Time Management'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'ScamShield',
    tagline: 'AI-powered scam detection platform',
    description:
      'A real-time threat detection platform that analyzes messages, emails, and URLs using a 3-layer system — rule-based detection, live URL threat scanning via VirusTotal API, and LLM analysis via Groq + LLaMA 70B. Generates risk scores and natural-language explanations to protect users from scams.',
    highlights: [
      '3-layer AI + rule-engine detection',
      'Live URL scanning via VirusTotal API',
      'LLM-powered threat explanations (LLaMA 70B)',
      'Risk scoring with Supabase persistence',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Groq + LLaMA 70B', 'VirusTotal API', 'Supabase'],
    accent: '#4f8eff',
    liveUrl: 'https://scamshield-beta.vercel.app',
    githubUrl: 'https://github.com/YashHub-Rajput',
    badge: 'AI / Security',
    featured: true,
  },
  {
    id: 2,
    title: 'Council Connect',
    tagline: 'Student Council Management System',
    description:
      'A one-stop platform for students to engage with college events, elections, and the student council. Designed for leadership, transparency, and student empowerment — with full election lifecycle management from candidate registration to live result dashboards.',
    highlights: [
      'End-to-end election management',
      'TanStack Query for optimistic UI',
      'Role-based access (admin/student)',
      'RESTful API with MongoDB + Mongoose',
    ],
    tech: ['React.js', 'Tailwind CSS', 'TanStack Query', 'Node.js', 'Express.js', 'MongoDB'],
    accent: '#7c5cff',
    liveUrl: 'https://scies.vercel.app',
    githubUrl: 'https://github.com/YashHub-Rajput',
    badge: 'Full Stack',
    featured: false,
  },
  {
    id: 3,
    title: 'TravelBuddy',
    tagline: 'Smart travel companion finder',
    description:
      'A full-stack travel companion platform that matches users based on travel preferences, budget, interests, and trip timelines. Includes real-time chat, trip creation, secure JWT auth with refresh rotation, and expense splitting.',
    highlights: [
      'Intelligent matching based on interests, budget, and dates',
      'Real-time chat powered by Socket.io',
      'JWT auth with refresh token rotation',
      'Trip creation, joining, management, and expense tracking',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    accent: '#2ec7c4',
    liveUrl: 'https://travel-buddy-drab.vercel.app/',
    githubUrl: 'https://github.com/YashHub-Rajput',
    badge: 'Travel Tech',
    featured: false,
  },
]

export const education = [
  {
    degree: 'B.Tech — Computer Science Engineering',
    institution: 'IES College of Technology, Bhopal',
    year: '2022 – 2026',
    score: 'CGPA: 7.7',
  },
  {
    degree: 'Class XII — CBSE',
    institution: "St. Joseph's Co-ed School, Bhopal",
    year: '2022',
    score: '80%',
  },
  {
    degree: 'Class X — CBSE',
    institution: "St. Joseph's Co-ed School, Bhopal",
    year: '2020',
    score: '81%',
  },
]

export const achievements = [
  {
    title: 'NCC Army Wing — C Certificate',
    org: 'National Cadet Corps',
    meta: 'Grade: A',
    description:
      "Highest NCC certification in Army Wing. Instilled discipline, strategic thinking, and leadership — skills that directly shape how I approach engineering challenges.",
    type: 'award',
  },
  {
    title: 'Technology Job Simulation',
    org: 'Deloitte Australia',
    meta: 'Virtual Program',
    description:
      "Completed Deloitte's professional technology simulation covering enterprise software workflows, consulting frameworks, and real-world problem-solving.",
    type: 'experience',
  },
  {
    title: 'Foundation of Cloud, IoT, Edge & ML',
    org: 'NPTEL — IIT',
    meta: 'Certification',
    description:
      'Earned NPTEL certification covering cloud infrastructure, IoT architecture, edge computing, and machine learning fundamentals from IIT faculty.',
    type: 'certification',
  },
  {
    title: 'Java Internship Program',
    org: 'Coding Thinker',
    meta: 'Internship',
    description:
      'Hands-on internship focused on core Java, OOP principles, and building backend logic for real-world application scenarios.',
    type: 'internship',
  },
  {
    title: 'Sports Secretary',
    org: 'IES Student Activity Council (IES-SAC)',
    meta: 'Leadership Role',
    description:
      'Elected as Sports Secretary — organized inter-college sports events, managed student teams, and coordinated logistics for competitions.',
    type: 'leadership',
  },
  {
    title: 'Event Anchor (Emcee)',
    org: 'College Technical & Cultural Events',
    meta: 'Public Speaking',
    description:
      'Hosted multiple college-level events as the official MC — strong stage presence, crowd-handling, and real-time communication skills.',
    type: 'leadership',
  },
]

export const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
]