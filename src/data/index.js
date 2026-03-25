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
    title: "Software Engineer (Working Student)",
    company: "Siemens",
    location: "Munich, Germany",
    period: "06/2024 – 09/2025",
    items: [
      "Modernized a cloud-based security analytics platform using Java, Docker, Azure, and Apache NiFi, improving stability and dataflow reliability across ingestion and monitoring workloads.",
      "Built an LLM-powered network intrusion detection module (Python, embeddings, anomaly detection) that strengthened detection quality in distributed data pipelines.",
      "Optimized containerized microservices to reduce resource consumption and improve runtime efficiency in Azure-based environments.",
      "Improved microservice build consistency by restructuring Dockerfile stages and ensuring reproducible container environments across Azure deployments.",
    ],
  },
  {
    title: "Graduate Research Assistant",
    company: "Ludwig Maximilian University (LMU)",
    location: "Munich, Germany",
    period: "10/2023 – 06/2024",
    items: [
      "Processed large-scale brain MRI neuroimaging datasets using ML and statistical modeling to classify disease presence and subtype patterns.",
      "Parallelized preprocessing and processing pipelines on HPC clusters, significantly accelerating feature extraction and model execution workloads.",
      "Improved research workflow reliability by automating ETL steps, standardizing feature extraction, and optimizing job scheduling.",
    ],
  },
  {
    title: "Software Engineer (Working Student)",
    company: "Aimyca GmbH",
    location: "Munich, Germany",
    period: "03/2022 – 03/2023",
    items: [
      "Delivered full-stack features using Python, Node.js, React, Vue, TypeScript, and REST APIs in an agile SaaS environment.",
      "Built user-centric interfaces with clean component architectures and optimized interaction flows.",
      "Developed Docker-based CI/CD pipelines on GCP to stabilize deployments and improve system reliability.",
      "Enhanced conversational AI features through LLM fine-tuning, improved prompt structures, and refined extraction logic.",
      "Collaborated directly with founders on architecture, technical design, and product-level prioritization.",
    ],
  },
  {
    title: "Graduate Research Assistant / Software Engineer",
    company: "NETLAB, Boğaziçi University",
    location: "Istanbul, Turkey",
    period: "02/2020 – 12/2021",
    items: [
      "Implemented simulation algorithms and C++/Python testbeds for TÜBİTAK-funded molecular communication research, improving experiment reproducibility.",
      "Built embedded integrations with Raspberry Pi and Arduino, stabilizing hardware-based data acquisition pipelines.",
    ],
  },
  {
    title: "NLP / ML Intern",
    company: "Idea Technology",
    location: "Istanbul, Turkey",
    period: "06/2019 – 07/2019",
    items: [
      "Developed NLP and ML components using Python, Pandas, and statistical modeling, building classification prototypes and exploratory pipelines to support model evaluation.",
    ],
  },
  {
    title: "Cybersecurity ML Intern",
    company: "CTech Information Technologies",
    location: "Istanbul, Turkey",
    period: "01/2019 – 02/2019",
    items: [
      "Implemented deep learning-based attack classification models and improved preprocessing pipelines for cybersecurity datasets.",
    ],
  },
  {
    title: "Database Engineering Intern",
    company: "VeriPark",
    location: "Istanbul, Turkey",
    period: "07/2018 – 09/2018",
    items: [
      "Developed and optimized SQL modules for CRM-oriented backend systems, improving data consistency and internal tooling workflows.",
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
