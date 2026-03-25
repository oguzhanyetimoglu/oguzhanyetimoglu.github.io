export const profile = {
  name: "Oğuzhan Yetimoğlu",
  title: "Software Engineer · M.Sc. CS @ TUM",
  subtitle: "Building systems that are practical, stable, and actually get used.",
  bio: "Hey! I'm Oğuzhan, a software engineer based in Munich. I recently completed my Master's degree at the Technical University of Munich (TUM), where I also worked part-time at Siemens contributing to cybersecurity monitoring tools. Most of my background is in software engineering, especially fullstack development.\n\nDuring my master's, I explored the cybersecurity space more actively — my thesis focused on applying large language models to detect anomalies in network traffic.\n\nOutside of work, I'm into running and working out. Whether it's in code or daily life, I enjoy breaking down complex systems and finding patterns that make them work better.",
  location: "Munich, Germany",
  email: "oguzhanyetimoglu@gmail.com",
  links: {
    github: "https://github.com/oguzhanyetimoglu",
    linkedin: "https://www.linkedin.com/in/oguzhan-yetimoglu/",
    scholar: "https://scholar.google.com/citations?user=UIJ8VVwAAAAJ&hl=en",
    instagram: "https://instagram.com/oguzhanyetimoglu",
    cv: "/OguzhanYetimoglu_resume.pdf",
  },
};

export const skills = [
  { category: "Languages & Frameworks", items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "React", "Next.js", "Vue", "Nuxt.js", "Node.js", "FastAPI", "Django", "Flask"] },
  { category: "Cloud & DevOps", items: ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "GitHub Actions", "GitLab CI", "CI/CD", "Linux", "Bash"] },
  { category: "Data & ML", items: ["PyTorch", "scikit-learn", "Pandas", "NumPy", "NLP", "LLMs", "RAG", "Embeddings", "Vector DBs"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"] },
  { category: "Frontend", items: ["Tailwind CSS", "Material UI", "Responsive UI", "Component Architecture"] },
];

export const projects = [
  {
    title: "FinK Analytica",
    description: "Financial data analysis platform built as an interdisciplinary project for a tech company — enables algorithmic NLP-based comparison of financial documents.",
    tags: ["Vue.js", "TypeScript", "Django", "PostgreSQL", "NLP"],
    category: "school",
    github: "https://github.com/oguzhanyetimoglu/algorithmic-textual-comparison-app",
    highlights: ["Interdisciplinary project course", "NLP integration", "Multi-user RBAC"],
  },
  {
    title: "Elysio.ai",
    description: "AI-powered fashion app that empowers influencers to create and customize digital replicas.",
    tags: ["React.js", "FastAPI", "ML", "Material UI"],
    category: "work",
    highlights: ["MVP delivery", "AI/ML pipeline", "Agile sprints"],
  },
  {
    title: "Nanosim",
    description: "High-performance GPU-accelerated molecular communication simulation library used in multiple research institutions worldwide.",
    tags: ["Python", "CUDA", "HPC", "Research"],
    category: "research",
    highlights: ["CUDA acceleration", "3D simulation", "Published research"],
  },
  {
    title: "TempoCraft",
    description: "Spotify playlist creator that filters and generates playlists based on BPM — perfect for workouts, runs, or any activity where tempo matters.",
    tags: ["Python", "Spotify API", "OAuth 2.0"],
    category: "fun",
    github: "https://github.com/oguzhanyetimoglu/tempo-craft",
    highlights: ["BPM-based filtering", "Auto playlist generation", "Spotify OAuth"],
  },
];

export const experience = [
  {
    title: "Working Student — Software Engineer",
    company: "Siemens",
    location: "Munich, Germany",
    period: "June 2024 – Sep 2025",
    items: [
      "Maintain and enhance security monitoring/analytics software using Java, Docker, Azure Cloud",
      "Develop LLM-based anomaly detection system for security threat identification",
      "Implement DevOps processes including CI/CD pipelines and containerization",
    ],
  },
  {
    title: "Research & Teaching Assistant",
    company: "Ludwig Maximilian University (LMU)",
    location: "Munich, Germany",
    period: "April 2024 – May 2024",
    items: [
      "Research in molecular communications and nano-networks",
      "Assisted in teaching undergraduate CS courses",
      "Collaborated on academic publications",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "Aimyca GmbH",
    location: "Munich, Germany",
    period: "March 2023 – March 2024",
    items: [
      "Developed and maintained web applications using React.js, Node.js, MongoDB",
      "Implemented responsive UIs and optimized application performance",
      "Worked in cross-functional agile teams",
    ],
  },
  {
    title: "Graduate Research Assistant",
    company: "NETLAB, Boğaziçi University",
    location: "Istanbul, Turkey",
    period: "Sep 2020 – Feb 2023",
    items: [
      "Research in molecular communications and testbed development",
      "Published 4 papers in international journals and conferences",
      "Developed simulation tools for nano-scale communications",
    ],
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science",
    school: "Technical University of Munich (TUM)",
    location: "Munich, Germany",
    period: "2023 – Sep 2025",
    items: ["Focus: ML, Software Engineering, Distributed Systems", "Thesis: LLM-based anomaly detection in network traffic"],
  },
  {
    degree: "M.Sc. Computer Engineering",
    school: "Boğaziçi University",
    location: "Istanbul, Turkey",
    period: "2020 – 2023",
    items: ["Research: Molecular Communications & Signal Processing", "Published 4 international papers"],
  },
  {
    degree: "B.Sc. Computer Engineering",
    school: "Boğaziçi University",
    location: "Istanbul, Turkey",
    period: "2015 – 2020",
    items: ["Algorithms, data structures, software development"],
  },
];

export const publications = [
  {
    type: "Journal Article",
    title: "Multiple transmitter localization via single receiver in 3-D molecular communication via diffusion",
    venue: "Digital Signal Processing",
    year: 2022,
    url: null,
  },
  {
    type: "Conference Paper",
    title: "A Microfluidic Platform for Modeling Molecular Communication",
    venue: "BalkanCom 2023",
    year: 2023,
    url: null,
  },
  {
    type: "Conference Paper",
    title: "A Mock Circulatory Network Testbed for Molecular Communications",
    venue: "SIU 2021",
    year: 2021,
    url: null,
  },
  {
    type: "Conference Paper",
    title: "Underwater Testbed for Molecular Communication",
    venue: "SIU 2021",
    year: 2021,
    url: null,
  },
];
