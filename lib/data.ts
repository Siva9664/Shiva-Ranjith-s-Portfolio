export const PERSONAL = {
  name: 'Sivaranjith S',
  initials: 'S·R',
  title: 'AI Engineer & Full-Stack Developer',
  roles: [
    'AI/ML Engineer',
    'Full-Stack Developer',
    'Research Enthusiast',
    'Competitive Programmer',
    'Arch Linux Power User',
  ],
  bio: [
    'As a B.Tech AI & ML student at Sri Shakthi Institute of Engineering and Technology, my journey began with the rigorous logic of competitive programming. Mastering algorithmic problem-solving taught me how to write highly efficient code — a mindset I apply to architecting full-stack applications and training complex AI models.',
    'I channel my passion for innovation into building scalable, user-centric software. Currently honing enterprise development skills at GrowAITech, contributing to the GAT ERP project using React and Firebase. From publishing academic research on dynamic scheduling to crafting immersive web experiences — I deliver high-performance solutions that solve meaningful problems.',
  ],
  email: 'sivaranjiths@gmail.com',
  github: 'https://github.com/Siva9664',
  linkedin: 'https://www.linkedin.com/in/siva-ranjith-8aa535307/',
  leetcode: 'https://leetcode.com/u/ShivranjithS/',
  currentRole: 'Intern at GrowAITech',
  currentProject: 'GAT ERP — React & Firebase',
};

export const PROJECTS = [
  {
    id: 'timetable',
    title: 'AI Timetable Scheduler',
    tagline: 'Intelligent scheduling through advanced algorithms',
    description:
      'An intelligent scheduling system that utilizes advanced AI algorithms to optimize resource allocation and resolve complex time constraints autonomously. Bridges software engineering and academic research — manuscript submitted to HBRP Publication.',
    tech: ['Python', 'AI Algorithms', 'Optimization', 'Research'],
    color: '#00d4ff',
    icon: '🧠',
    links: { paper: '#' },
    architecture: ['Input Parser', 'Constraint Solver', 'AI Optimizer', 'Output Renderer'],
    status: 'Research',
  },
  {
    id: 'captions',
    title: 'Captions.io',
    tagline: 'Real-time AI caption generation',
    description:
      'A stylish and highly responsive caption generator web application built on a modern React and Node.js stack. Premium UI/UX focus — seamlessly processes user inputs to deliver creative, dynamic media captions in real-time.',
    tech: ['React', 'Node.js', 'AI', 'UI/UX'],
    color: '#a855f7',
    icon: '✨',
    links: { github: '#', demo: '#' },
    architecture: ['React Frontend', 'Node.js API', 'AI Model', 'CDN'],
    status: 'Live',
  },
  {
    id: 'rushhour',
    title: 'Python Rushhour',
    tagline: 'High-performance competitive programming platform',
    description:
      'A high-performance competitive programming platform for rapid algorithmic assessment. Architected the backend to handle real-time code execution and scoring. Collaborated with multiple organizations to deliver a seamless developer experience.',
    tech: ['Python', 'FastAPI', 'Redis', 'Docker'],
    color: '#10b981',
    icon: '⚡',
    links: { demo: 'https://rushhour.theaiavalon.in' },
    architecture: ['FastAPI Backend', 'Redis Queue', 'Code Runner', 'Docker Sandbox'],
    status: 'Live',
    badge: 'Backend Developer',
  },
];

export const SKILLS = [
  {
    id: 'languages',
    name: 'Languages',
    color: '#00d4ff',
    orbitRadius: 0,
    size: 0.8,
    skills: ['Python', 'Java', 'C', 'TypeScript'],
    icon: '</> ',
  },
  {
    id: 'aiml',
    name: 'AI & Machine Learning',
    color: '#a855f7',
    orbitRadius: 3.5,
    size: 0.7,
    skills: ['TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision'],
    icon: '🧠',
  },
  {
    id: 'web',
    name: 'Web Technologies',
    color: '#10b981',
    orbitRadius: 5.5,
    size: 0.65,
    skills: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Firebase', 'REST APIs'],
    icon: '🌐',
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    color: '#f59e0b',
    orbitRadius: 7.5,
    size: 0.6,
    skills: ['Git', 'Docker', 'Redis', 'SQL', 'Arch Linux', 'Bash'],
    icon: '🔧',
  },
];

export const TIMELINE = [
  {
    year: '2022',
    title: 'The Beginning',
    description: 'Started B.Tech in AI & ML. First algorithms. First breakthroughs.',
    achievements: ['Enrolled in SSIET', 'Started competitive programming', 'First Python project'],
    color: '#00d4ff',
  },
  {
    year: '2023',
    title: 'Deep Dive into AI',
    description: 'Dove into machine learning, neural networks, and system design.',
    achievements: ['TensorFlow mastery', 'LeetCode grind begins', 'First ML model deployed'],
    color: '#a855f7',
  },
  {
    year: '2024',
    title: 'Research & Build',
    description: 'Published research, built full-stack systems, embraced DevOps.',
    achievements: ['Timetable Scheduler research', 'Python Rushhour backend', 'Docker + Redis mastery'],
    color: '#10b981',
  },
  {
    year: '2025',
    title: 'Industry Impact',
    description: 'Entered industry. Built enterprise software. Pushed boundaries.',
    achievements: ['GrowAITech internship', 'GAT ERP system', 'React + Firebase expertise'],
    color: '#f59e0b',
  },
  {
    year: '2026',
    title: 'The Future',
    description: 'Seeking challenging roles where AI meets real-world impact.',
    achievements: ['Building AI systems', 'Open to opportunities', 'Always learning'],
    color: '#ec4899',
  },
];

export const WORKFLOW = [
  { id: 'client', label: 'Client Requirement', icon: '👤', color: '#00d4ff', description: 'Problem definition & requirements gathering' },
  { id: 'analyzer', label: 'AI Analyzer', icon: '🔍', color: '#a855f7', description: 'Deep analysis using AI-powered insights' },
  { id: 'ceo', label: 'CEO Agent', icon: '🎯', color: '#10b981', description: 'Strategic planning & task orchestration' },
  { id: 'research', label: 'Research Agent', icon: '📚', color: '#f59e0b', description: 'Domain research & technical specification' },
  { id: 'developer', label: 'Developer Agents', icon: '⚡', color: '#ec4899', description: 'Parallel development & implementation' },
  { id: 'deploy', label: 'Deployment', icon: '🚀', color: '#00d4ff', description: 'CI/CD pipeline & production release' },
];
