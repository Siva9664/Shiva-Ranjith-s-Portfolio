export const BRAND = {
  name: 'NeuralOS',
  tagline: 'An Intelligent Operating System',
  version: 'v2.4.1',
};

export const PERSONAL = {
  name: 'Siva Ranjith',
  fullName: 'Sivaranjith S',
  initials: 'SR',
  roles: [
    'AI Engineer',
    'Agentic AI Developer',
    'Backend Systems Engineer',
    'Computer Vision Engineer',
    'Full-Stack AI Developer',
    'Robotics Engineer',
  ],
  mission:
    'Design intelligent software systems capable of solving real-world problems through Artificial Intelligence, Autonomous Agents, Robotics, Computer Vision, Optimization, and Modern Backend Engineering.',
  bio: [
    'B.Tech AI & ML student at Sri Shakthi Institute of Engineering and Technology. My engineering journey began with the rigorous logic of competitive programming — mastering algorithmic problem-solving that I now apply to architecting production-grade AI systems.',
    'Currently honing enterprise development skills at GrowAITech, contributing to the GAT ERP project using React and Firebase. From publishing academic research on dynamic scheduling to building multi-agent orchestration systems — I build software that thinks.',
  ],
  currentRole: 'Intern · GrowAITech',
  currentProject: 'GAT ERP — React & Firebase',
  email: 'sivaranjiths@gmail.com',
  github: 'https://github.com/Siva9664',
  linkedin: 'https://www.linkedin.com/in/siva-ranjith-8aa535307/',
  leetcode: 'https://leetcode.com/u/ShivranjithS/',
  education: 'B.Tech AI & ML · Sri Shakthi Institute of Engineering and Technology',
};

export const ENGINEERING_DOMAINS = [
  { id: 'ai', label: 'Artificial Intelligence', icon: '🧠', color: 'var(--cyan)', desc: 'Neural architectures, deep learning pipelines, model fine-tuning' },
  { id: 'agentic', label: 'Agentic AI', icon: '🤖', color: 'var(--purple)', desc: 'Multi-agent orchestration, tool-calling LLMs, autonomous pipelines' },
  { id: 'cv', label: 'Computer Vision', icon: '👁', color: 'var(--emerald)', desc: 'Object detection, image segmentation, real-time video processing' },
  { id: 'robotics', label: 'Robotics', icon: '⚙️', color: 'var(--amber)', desc: 'Perception-action loops, ROS, autonomous navigation systems' },
  { id: 'backend', label: 'Backend Engineering', icon: '⚡', color: 'var(--pink)', desc: 'FastAPI, distributed systems, Redis, Docker, PostgreSQL' },
  { id: 'llm', label: 'LLM & RAG', icon: '✦', color: 'var(--teal)', desc: 'Retrieval-Augmented Generation, prompt engineering, vector search' },
];

export const PROJECTS = [
  {
    id: 'timetable',
    title: 'AI Timetable Scheduler',
    tagline: 'Constraint-solving intelligence for institutional scheduling',
    description:
      'An intelligent scheduling system using advanced AI algorithms to optimize resource allocation and resolve complex time constraints autonomously. Academic research culminating in a manuscript submitted to HBRP Publication.',
    tech: ['Python', 'AI Algorithms', 'Optimization', 'Linear Programming', 'Research'],
    color: 'var(--cyan)',
    domain: 'ai',
    icon: '🧠',
    links: { paper: '#' },
    architecture: ['Constraint Parser', 'Conflict Detector', 'AI Optimizer', 'Schedule Renderer'],
    status: 'Research',
    year: '2024',
    impact: 'Submitted to HBRP Publication',
  },
  {
    id: 'captions',
    title: 'Captions.io',
    tagline: 'Real-time AI caption generation platform',
    description:
      'A stylish and highly responsive caption generator web application built on React and Node.js. Premium UI/UX focus — seamlessly processes user inputs to deliver creative, dynamic media captions in real-time using AI.',
    tech: ['React', 'Node.js', 'AI', 'REST API', 'UI/UX'],
    color: 'var(--purple)',
    domain: 'llm',
    icon: '✨',
    links: { github: '#', demo: '#' },
    architecture: ['React Frontend', 'Node.js API', 'AI Processing', 'CDN Delivery'],
    status: 'Live',
    year: '2024',
    impact: 'Real-time caption generation',
  },
  {
    id: 'rushhour',
    title: 'Python Rushhour',
    tagline: 'High-performance competitive programming platform',
    description:
      'High-performance competitive programming platform for rapid algorithmic assessment. Architected the backend to handle real-time code execution and scoring. Collaborated with multiple organizations for a seamless developer experience.',
    tech: ['Python', 'FastAPI', 'Redis', 'Docker', 'WebSockets'],
    color: 'var(--emerald)',
    domain: 'backend',
    icon: '⚡',
    links: { demo: 'https://rushhour.theaiavalon.in' },
    architecture: ['FastAPI Backend', 'Redis Queue', 'Docker Sandbox', 'WebSocket Scoring'],
    status: 'Live',
    year: '2024',
    impact: 'Multi-org hackathon platform',
    badge: 'Backend Lead',
  },
  {
    id: 'erp',
    title: 'GAT ERP System',
    tagline: 'Enterprise resource planning for GrowAITech',
    description:
      'Enterprise-grade ERP system built with React and Firebase at GrowAITech. Handles complex organizational workflows, employee management, and real-time data synchronization across departments.',
    tech: ['React', 'Firebase', 'TypeScript', 'Real-time DB', 'Enterprise'],
    color: 'var(--amber)',
    domain: 'backend',
    icon: '🏢',
    links: {},
    architecture: ['React Dashboard', 'Firebase Realtime', 'Auth Layer', 'Analytics Engine'],
    status: 'Production',
    year: '2025',
    impact: 'Enterprise-grade ERP',
    badge: 'Internship',
  },
];

export const SKILLS = [
  {
    id: 'languages',
    name: 'Languages',
    color: 'var(--cyan)',
    skills: ['Python', 'TypeScript', 'Java', 'C', 'Bash', 'SQL'],
    icon: '</>',
  },
  {
    id: 'aiml',
    name: 'AI & Machine Learning',
    color: 'var(--purple)',
    skills: ['TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision', 'Transformers'],
    icon: '🧠',
  },
  {
    id: 'agentic',
    name: 'Agentic AI & LLM',
    color: 'var(--teal)',
    skills: ['LangChain', 'LlamaIndex', 'RAG', 'Vector Search', 'Prompt Engineering', 'Multi-Agent'],
    icon: '🤖',
  },
  {
    id: 'web',
    name: 'Web & Backend',
    color: 'var(--emerald)',
    skills: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Firebase', 'REST APIs', 'GraphQL'],
    icon: '🌐',
  },
  {
    id: 'devops',
    name: 'DevOps & Infrastructure',
    color: 'var(--amber)',
    skills: ['Docker', 'Redis', 'PostgreSQL', 'Git', 'CI/CD', 'Nginx', 'Linux'],
    icon: '⚙️',
  },
  {
    id: 'robotics',
    name: 'Robotics & Vision',
    color: 'var(--pink)',
    skills: ['Computer Vision', 'OpenCV', 'ROS', 'Sensor Fusion', 'SLAM', 'Object Detection'],
    icon: '🔭',
  },
];

export const TIMELINE = [
  {
    year: '2022',
    title: 'Genesis',
    description: 'Enrolled in B.Tech AI & ML. First algorithms. First neural networks. First obsession.',
    achievements: ['Sri Shakthi Institute', 'First Python project', 'DSA foundations'],
    color: 'var(--cyan)',
  },
  {
    year: '2023',
    title: 'Deep Learning',
    description: 'Dove headfirst into machine learning, neural architectures, and competitive programming.',
    achievements: ['TensorFlow & PyTorch mastery', 'LeetCode 200+ problems', 'First ML deployment'],
    color: 'var(--purple)',
  },
  {
    year: '2024',
    title: 'Research & Build',
    description: 'Shipped production systems, published AI research, mastered the full engineering stack.',
    achievements: ['AI Timetable Scheduler (research)', 'Python Rushhour backend', 'Docker & Redis expertise'],
    color: 'var(--emerald)',
  },
  {
    year: '2025',
    title: 'Industry Impact',
    description: 'Entered the industry. Built enterprise software at scale. Pushed the boundaries of AI.',
    achievements: ['GrowAITech internship', 'GAT ERP System', 'Agentic AI systems'],
    color: 'var(--amber)',
  },
  {
    year: '2026+',
    title: 'The Future',
    description: 'Building AI systems that reshape how humans and machines work together.',
    achievements: ['Multi-agent orchestration', 'Computer Vision products', 'Open to opportunities'],
    color: 'var(--pink)',
  },
];

export const WORKFLOW = [
  { id: 'client', label: 'Client Requirement', icon: '👤', color: 'var(--cyan)', description: 'Problem definition & requirements engineering' },
  { id: 'analyzer', label: 'AI Analyzer', icon: '🔍', color: 'var(--purple)', description: 'Deep analysis using AI-powered reasoning' },
  { id: 'architect', label: 'System Architect', icon: '🎯', color: 'var(--emerald)', description: 'System design, agent orchestration planning' },
  { id: 'research', label: 'Research Agent', icon: '📚', color: 'var(--amber)', description: 'Domain research & technical specification' },
  { id: 'developer', label: 'Developer Agents', icon: '⚡', color: 'var(--teal)', description: 'Parallel implementation & code generation' },
  { id: 'deploy', label: 'Deployment', icon: '🚀', color: 'var(--pink)', description: 'CI/CD pipeline & production monitoring' },
];

export const RESEARCH = [
  {
    title: 'AI-Powered Dynamic Timetable Scheduling',
    venue: 'HBRP Publication (Submitted)',
    year: '2024',
    abstract:
      'Novel constraint-satisfaction approach using AI optimization algorithms to solve NP-hard institutional scheduling problems with multi-dimensional resource constraints.',
    tags: ['Optimization', 'AI', 'Constraint Programming', 'Operations Research'],
    color: 'var(--cyan)',
    status: 'Under Review',
  },
];

export const ACHIEVEMENTS = [
  { label: 'Projects Shipped', value: '5+', icon: '🚀', color: 'var(--cyan)' },
  { label: 'Research Papers', value: '1', icon: '📄', color: 'var(--purple)' },
  { label: 'LeetCode Problems', value: '200+', icon: '⚡', color: 'var(--emerald)' },
  { label: 'Internship', value: 'GrowAITech', icon: '🏢', color: 'var(--amber)' },
  { label: 'Tech Stack Size', value: '30+', icon: '🛠', color: 'var(--pink)' },
  { label: 'Open Source', value: 'Active', icon: '🌐', color: 'var(--teal)' },
];
