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
  resume: '#',
  education: 'B.Tech AI & ML · Sri Shakthi Institute of Engineering and Technology',
};

export const ABOUT_MISSION = "To build intelligent systems that assist humans through Artificial Intelligence, Autonomous Agents, Robotics, and Modern Software Engineering while creating scalable products that deliver meaningful real-world impact.";
export const ABOUT_VISION = "To become an AI Engineer capable of building next-generation autonomous systems that combine Large Language Models, Multi-Agent AI, Robotics, Computer Vision, Optimization, and Cloud Technologies into products that shape the future.";

export const PHILOSOPHY = [
  { title: 'Think Before Building', desc: 'Every great product starts with understanding the real problem.', icon: '🤔' },
  { title: 'Build With Purpose', desc: 'Technology should solve meaningful challenges.', icon: '🎯' },
  { title: 'Keep Learning', desc: 'The AI field evolves rapidly. Continuous learning is essential.', icon: '📚' },
  { title: 'Engineering Over Coding', desc: "I don't simply write code. I design intelligent systems.", icon: '⚙️' },
  { title: 'Scalability Matters', desc: 'Every architecture should be designed for future growth.', icon: '📈' },
];

export const JOURNEY = [
  { step: 'Learning Programming', color: 'var(--cyan)' },
  { step: 'Learning Python', color: 'var(--purple)' },
  { step: 'Understanding Algorithms', color: 'var(--emerald)' },
  { step: 'Building Backend APIs', color: 'var(--amber)' },
  { step: 'Machine Learning', color: 'var(--pink)' },
  { step: 'Computer Vision', color: 'var(--teal)' },
  { step: 'Optimization', color: 'var(--cyan)' },
  { step: 'Agentic AI', color: 'var(--purple)' },
  { step: 'Multi-Agent Systems', color: 'var(--emerald)' },
  { step: 'Robotics', color: 'var(--amber)' },
  { step: 'Building Complete AI Products', color: 'var(--pink)' },
  { step: 'Future Research', color: 'var(--teal)' },
];

export const VALUES = ['Curiosity', 'Innovation', 'Discipline', 'Consistency', 'Problem Solving', 'Teamwork', 'Leadership', 'Continuous Learning'];

export const INTERESTS = [
  'Artificial Intelligence', 'Generative AI', 'Large Language Models', 'Agentic AI', 'Multi-Agent Systems',
  'Backend Engineering', 'Robotics', 'Computer Vision', 'Optimization', 'System Design', 'Cloud AI', 'MLOps', 'AI Automation'
];

export const FUN_FACTS = [
  'I enjoy solving algorithmic problems.',
  'I enjoy designing scalable architectures.',
  'I love learning emerging AI technologies.',
  'I enjoy robotics and autonomous systems.',
  'I enjoy experimenting with LLMs.',
];

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
    id: 'devgenesis',
    title: 'DevGenesis AI',
    tagline: 'Autonomous AI Development Framework',
    description: 'A powerful agentic framework designed to automate end-to-end software development workflows. Features multi-agent collaboration, dynamic context management, and built-in code execution environments.',
    tech: ['Python', 'LLMs', 'Agentic AI', 'FastAPI', 'Docker'],
    color: 'var(--cyan)',
    domain: 'agentic',
    icon: '🧠',
    links: { github: '#' },
    architecture: ['User Request', 'Planner Agent', 'Coder Agents', 'Reviewer', 'Execution'],
    status: 'Live',
    year: '2024',
    impact: 'Automated Development Pipeline',
  },
  {
    id: 'robot',
    title: 'Human Following Robot',
    tagline: 'Autonomous robotics vision system',
    description: 'Built a physical robot capable of identifying and tracking specific human targets in real-time. Integrated depth sensing and computer vision algorithms on an embedded edge device.',
    tech: ['Python', 'ROS2', 'OpenCV', 'C++', 'Edge AI'],
    color: 'var(--amber)',
    domain: 'robotics',
    icon: '⚙️',
    links: { demo: '#' },
    architecture: ['Camera Feed', 'YOLO Detection', 'Depth Mapping', 'Motor Control'],
    status: 'Hardware',
    year: '2023',
    impact: 'Real-world autonomous tracking',
    badge: 'Hardware',
  },
  {
    id: 'timetable',
    title: 'AI Timetable Generator',
    tagline: 'Constraint-solving intelligence for institutional scheduling',
    description:
      'An intelligent scheduling system using advanced AI algorithms and Google OR-Tools to optimize resource allocation and resolve complex time constraints autonomously. Academic research culminating in a manuscript submitted to HBRP Publication.',
    tech: ['Python', 'OR-Tools', 'Optimization', 'React', 'FastAPI'],
    color: 'var(--emerald)',
    domain: 'ai',
    icon: '📅',
    links: { paper: '#' },
    architecture: ['Constraint Parser', 'Conflict Detector', 'AI Optimizer', 'Schedule Renderer'],
    status: 'Research',
    year: '2024',
    impact: 'Submitted to HBRP Publication',
  },
  {
    id: 'attendance',
    title: 'AI Attendance System',
    tagline: 'Facial recognition based smart attendance',
    description: 'A highly scalable attendance tracking system utilizing deep learning facial recognition models. Processes real-time video streams to identify students and syncs data to a cloud PostgreSQL database.',
    tech: ['Python', 'OpenCV', 'Deep Learning', 'PostgreSQL', 'FastAPI'],
    color: 'var(--purple)',
    domain: 'cv',
    icon: '👁',
    links: { github: '#' },
    architecture: ['Video Stream', 'Face Detection', 'Embeddings', 'DB Sync'],
    status: 'Production',
    year: '2023',
    impact: 'Automated 500+ student tracking',
  },
  {
    id: 'meeting',
    title: 'AI Meeting Assistant',
    tagline: 'Real-time transcription and action extraction',
    description: 'An AI-powered tool that joins virtual meetings, transcribes audio in real-time, and generates structured meeting minutes and actionable tasks using Retrieval-Augmented Generation (RAG).',
    tech: ['Next.js', 'LLMs', 'Whisper AI', 'RAG', 'TypeScript'],
    color: 'var(--pink)',
    domain: 'llm',
    icon: '🎙',
    links: { demo: '#' },
    architecture: ['Audio Stream', 'STT Engine', 'LLM Summarization', 'Export'],
    status: 'Live',
    year: '2024',
    impact: 'Productivity automation',
  },
  {
    id: 'hackathon',
    title: 'AI Hackathon Platform',
    tagline: 'High-performance hackathon management',
    description:
      'High-performance competitive platform for rapid algorithmic assessment. Architected the backend to handle real-time code execution, scoring, and leaderboards using Docker sandboxing.',
    tech: ['Python', 'Django', 'Redis', 'Docker', 'PostgreSQL'],
    color: 'var(--teal)',
    domain: 'backend',
    icon: '⚡',
    links: { demo: 'https://rushhour.theaiavalon.in' },
    architecture: ['Django Backend', 'Redis Queue', 'Docker Sandbox', 'WebSocket Scoring'],
    status: 'Live',
    year: '2024',
    impact: 'Multi-org hackathon platform',
  }
];

export const SKILL_GALAXIES = [
  {
    id: 'programming',
    name: 'Programming',
    color: 'var(--cyan)',
    radius: 4,
    speed: 0.2,
    skills: [
      { name: 'Python', desc: 'Core language for AI models, backend systems, and data pipelines.' },
      { name: 'C', desc: 'Low-level memory management, robotics, and embedded systems.' },
      { name: 'JavaScript', desc: 'Dynamic frontend interactions and Node.js scripting.' },
      { name: 'TypeScript', desc: 'Type-safe enterprise applications and scalable frontends.' },
      { name: 'SQL', desc: 'Complex relational data querying and database management.' },
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    color: 'var(--purple)',
    radius: 6,
    speed: 0.15,
    skills: [
      { name: 'FastAPI', desc: 'High-performance async Python APIs.' },
      { name: 'Django', desc: 'Robust full-stack Python web frameworks.' },
      { name: 'REST APIs', desc: 'Standardized communication protocols.' },
      { name: 'JWT & Auth', desc: 'Secure token-based user authentication.' },
      { name: 'Middleware', desc: 'Request processing and security layers.' },
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend',
    color: 'var(--pink)',
    radius: 8,
    speed: 0.1,
    skills: [
      { name: 'React', desc: 'Component-based UI development.' },
      { name: 'Next.js', desc: 'Server-side rendering and static generation.' },
      { name: 'Tailwind CSS', desc: 'Utility-first rapid styling.' },
      { name: 'Framer Motion', desc: 'Complex UI animations and transitions.' },
      { name: 'Three.js', desc: '3D WebGL graphics and interactive scenes.' },
    ]
  },
  {
    id: 'database',
    name: 'Databases',
    color: 'var(--amber)',
    radius: 10,
    speed: 0.08,
    skills: [
      { name: 'PostgreSQL', desc: 'Advanced open-source relational database.' },
      { name: 'MariaDB', desc: 'High-performance MySQL drop-in replacement.' },
      { name: 'Firebase', desc: 'Real-time NoSQL database and auth suite.' },
      { name: 'Redis', desc: 'In-memory caching and message brokering.' },
    ]
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    color: 'var(--emerald)',
    radius: 12,
    speed: 0.06,
    skills: [
      { name: 'Machine Learning', desc: 'Predictive modeling and statistical algorithms.' },
      { name: 'Deep Learning', desc: 'Neural networks, CNNs, and RNNs using PyTorch/TensorFlow.' },
      { name: 'LLMs', desc: 'Large Language Models (GPT, Llama, Claude).' },
      { name: 'RAG', desc: 'Retrieval-Augmented Generation for intelligent context.' },
      { name: 'Agentic AI', desc: 'Autonomous AI agents capable of tool use and reasoning.' },
      { name: 'Multi-Agent', desc: 'Swarm intelligence and orchestrated agent communication.' },
    ]
  },
  {
    id: 'cv_robotics',
    name: 'CV & Robotics',
    color: 'var(--teal)',
    radius: 14,
    speed: 0.05,
    skills: [
      { name: 'OpenCV', desc: 'Real-time computer vision and image processing.' },
      { name: 'Face Recognition', desc: 'Biometric identification and tracking.' },
      { name: 'ROS2', desc: 'Robot Operating System architecture and nodes.' },
      { name: 'Sensor Fusion', desc: 'Combining LiDAR, IMU, and camera data.' },
      { name: 'Path Planning', desc: 'Autonomous navigation and obstacle avoidance.' },
    ]
  },
  {
    id: 'devops_dsa',
    name: 'DevOps & Algorithms',
    color: 'var(--cyan)',
    radius: 16,
    speed: 0.04,
    skills: [
      { name: 'Docker', desc: 'Containerization for consistent deployment.' },
      { name: 'CI/CD', desc: 'Continuous integration and automated pipelines.' },
      { name: 'OR-Tools', desc: 'Google Operations Research and Constraint Programming.' },
      { name: 'Dynamic Prog.', desc: 'Algorithmic optimization through sub-problems.' },
      { name: 'Graphs & Trees', desc: 'Complex data structures for routing and AI.' },
    ]
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

export const RAG_FLOW = [
  { id: 'query', label: 'User Query', icon: '👤', color: 'var(--cyan)' },
  { id: 'embed', label: 'Embedding', icon: '🔢', color: 'var(--purple)' },
  { id: 'search', label: 'Vector Search', icon: '🔍', color: 'var(--emerald)' },
  { id: 'retrieve', label: 'Knowledge Retrieval', icon: '📚', color: 'var(--amber)' },
  { id: 'inject', label: 'Context Injection', icon: '💉', color: 'var(--pink)' },
  { id: 'llm', label: 'LLM Processing', icon: '🧠', color: 'var(--teal)' },
  { id: 'response', label: 'Final Response', icon: '✨', color: 'var(--cyan)' },
];

export const AGENT_FLOW = [
  { id: 'req', label: 'User Request', icon: '👤', color: 'var(--cyan)' },
  { id: 'plan', label: 'Planner Agent', icon: '📋', color: 'var(--purple)' },
  { id: 'research', label: 'Research Agent', icon: '🔬', color: 'var(--emerald)' },
  { id: 'memory', label: 'Memory Agent', icon: '🧠', color: 'var(--amber)' },
  { id: 'reason', label: 'Reasoning Agent', icon: '⚙️', color: 'var(--pink)' },
  { id: 'dev', label: 'Developer Agent', icon: '💻', color: 'var(--teal)' },
  { id: 'review', label: 'Reviewer Agent', icon: '👁️', color: 'var(--cyan)' },
  { id: 'qa', label: 'QA Agent', icon: '✅', color: 'var(--purple)' },
  { id: 'deploy', label: 'Deployment Agent', icon: '🚀', color: 'var(--emerald)' },
  { id: 'res', label: 'Response', icon: '✨', color: 'var(--amber)' },
];

export const BACKEND_FLOW = [
  { id: 'client', label: 'Client', icon: '📱', color: 'var(--cyan)' },
  { id: 'api', label: 'API Gateway', icon: '🚪', color: 'var(--purple)' },
  { id: 'auth', label: 'Authentication', icon: '🔐', color: 'var(--emerald)' },
  { id: 'middleware', label: 'Middleware', icon: '🛡️', color: 'var(--amber)' },
  { id: 'fastapi', label: 'FastAPI / Django', icon: '⚡', color: 'var(--pink)' },
  { id: 'logic', label: 'Business Logic', icon: '⚙️', color: 'var(--teal)' },
  { id: 'db', label: 'Database', icon: '🗄️', color: 'var(--cyan)' },
  { id: 'cache', label: 'Caching (Redis)', icon: '💨', color: 'var(--purple)' },
  { id: 'log', label: 'Logging', icon: '📝', color: 'var(--emerald)' },
];

export const PROMPT_STRATEGIES = [
  { name: 'Zero Shot', desc: 'Direct task instruction without examples.' },
  { name: 'Few Shot', desc: 'Providing context through input-output examples.' },
  { name: 'Chain of Thought', desc: 'Forcing step-by-step reasoning before answering.' },
  { name: 'Structured Prompting', desc: 'Enforcing strict JSON/XML output formats.' },
  { name: 'System Prompt', desc: 'Defining core persona, rules, and boundaries.' },
  { name: 'Reflection', desc: 'Asking the LLM to critique and improve its own answer.' },
];
