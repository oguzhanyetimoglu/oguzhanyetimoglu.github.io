export const profile = {
  name: "Oguzhan Yetimoglu",
  title: "Software Engineer · M.Sc. Informatics @ TUM",
  subtitle: "I build software end to end, from UI to model to deployment.",
  bio: "Hey! I'm Oguzhan, a software engineer based in Munich. I just finished my M.Sc. in Informatics at the Technical University of Munich (TUM), and during my studies I worked as a working student at Siemens on a cloud-based security analytics platform. Most of what I do is full-stack, and over time I've leaned more into AI and machine learning.\n\nMy thesis applied large language models to detect anomalies in network traffic. On the side I like building things end to end on my own, like a mobile quiz app with an LLM-driven question pipeline and a generative AI prototype I built as the sole engineer.\n\nOutside of work I'm into running and working out, and I spend a lot of time in grand strategy and survival games. History is a real interest of mine too, which is probably why the strategy games stuck.",
  location: "Munich, Germany",
  email: "jobs@oguzhanyetimoglu.com",
  links: {
    github: "https://github.com/oguzhanyetimoglu",
    linkedin: "https://www.linkedin.com/in/oguzhan-yetimoglu/",
    scholar: "https://scholar.google.com/citations?user=UIJ8VVwAAAAJ&hl=en",
    instagram: "https://instagram.com/oguzhanyetimoglu",
    cv: "/OguzhanYetimoglu_resume.pdf",
  },
};

export const skills = [
  { category: "Languages & Frameworks", items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "React", "React Native", "Next.js", "Expo", "Vue", "Nuxt.js", "Node.js", "FastAPI"] },
  { category: "Cloud & DevOps", items: ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "GitHub Actions", "GitLab CI", "CI/CD", "Linux", "Bash"] },
  { category: "Data & ML", items: ["scikit-learn", "SciPy", "Pandas", "NumPy", "NLP", "LLMs", "Embeddings", "Vector DBs", "AI-assisted development"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase (Firestore)"] },
  { category: "Frontend", items: ["Tailwind CSS", "Material UI", "Responsive UI", "Component Architecture"] },
];

export const projects = [
  {
    title: "LoreMaster",
    year: 2026,
    description: "Multi-realm fantasy/sci-fi lore quiz. A solo, end-to-end production app: Android (Expo), Next.js admin panel, static marketing site, and a Firebase backend, all in one TypeScript monorepo.",
    tags: ["TypeScript", "React Native", "Next.js", "Firebase", "Cloud Functions", "Expo"],
    category: "fun",
    highlights: ["Solo from design to deployment: mobile, admin, cloud functions, marketing", "Server-authoritative scoring with idempotent writes", "Async 1v1 duels (StreakDuel + RealmCrown)", "CI/CD on GitHub Actions with Jest + Maestro E2E + EAS", "LiteLLM question pipeline with multi-provider fallback"],
  },
  {
    title: "quiz-forge",
    year: 2026,
    description: "A free-tier RAG pipeline that turns Fandom wiki pages into ~200K validated trivia questions. Cross-family validation, source-grounded substring guarantees, fully resumable. Built to feed the LoreMaster question bank.",
    tags: ["Python", "RAG", "LiteLLM", "ChromaDB", "SQLite", "Pydantic"],
    category: "fun",
    highlights: ["Free-tier only: zero paid models, end to end", "Cross-family validator discipline", "Source-grounded substring guarantee", "Resumable at every stage"],
  },
  {
    title: "Beatify",
    year: 2026,
    description: "A React Native mobile app that turns your Spotify listening history into deep analytics, music personality archetypes, and shareable cards. Includes social features: follow friends, compare taste similarity, and DM with music sharing cards.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "Zustand", "Spotify Web API"],
    category: "fun",
    github: "https://github.com/oguzhanyetimoglu/beatify",
    highlights: ["14 music archetypes scored from listening patterns", "Spotify PKCE OAuth bridged to Supabase auth", "Realtime DMs with shareable music cards", "Localized in 4 languages"],
  },
  {
    title: "Instinct 2 Watchface - Nox Info",
    year: 2026,
    description: "A custom watch face for the Garmin Instinct 2, built from scratch in Monkey C. Features real-time heart rate, weather, GPS-based sunrise/sunset, and a 24-hour day/night timeline bar. Published on the Garmin Connect IQ Store.",
    tags: ["Monkey C", "Garmin Connect IQ SDK", "Toybox API", "Embedded"],
    category: "fun",
    github: "https://github.com/oguzhanyetimoglu/nox-info-watchface",
    store: "https://apps.garmin.com/en-US/apps/1b2667b1-18a4-49db-b133-b6b3b2a1dd58",
    highlights: ["Published on Garmin Connect IQ Store", "Per-second update via onPartialUpdate", "GPS-based dynamic sunrise/sunset"],
  },
  {
    title: "TempoCraft",
    year: 2025,
    description: "A Python CLI tool that connects to your Spotify account, analyzes your top tracks for BPM and genre using a multi-source fallback pipeline, and automatically creates filtered playlists.",
    tags: ["Python", "Spotipy", "OAuth2 / PKCE", "AcousticBrainz"],
    category: "fun",
    github: "https://github.com/oguzhanyetimoglu/tempo-craft",
    highlights: ["3-tier BPM fallback pipeline", "Fuzzy title matching", "No backend required"],
  },
  {
    title: "FinK Analytica",
    year: 2024,
    description: "A containerized web app that lets analysts search and cluster thousands of SEC 10-K filings using TF-IDF, Word2Vec, or BERT embeddings, built as a team project at TU Munich.",
    tags: ["Nuxt.js", "Django", "PostgreSQL", "scikit-learn", "sentence-transformers"],
    category: "school",
    github: "https://github.com/oguzhanyetimoglu/algorithmic-textual-comparison-app",
    highlights: ["3 embedding strategies", "K-Means & Agglomerative clustering", "10K SEC filings dataset"],
  },
  {
    title: "Elysio.ai",
    year: 2023,
    description: "A platform for fashion brands to produce photo-realistic campaign imagery without a shoot, by building AI replicas of models and dressing them in any garment, on demand.",
    tags: ["React", "FastAPI", "AWS", "Replicate", "Diffusion Models"],
    category: "work",
    highlights: ["AI-generated model replicas", "Prompt-driven photo editing", "Lead engineer end-to-end"],
  },
  {
    title: "Nanosim",
    year: 2020,
    description: "A research simulation tool for modeling how nanoparticles move and interact in biological environments, built to study molecular communication at scale using GPU acceleration.",
    tags: ["C++", "CUDA", "Python", "matplotlib"],
    category: "research",
    highlights: ["Hundreds of thousands of particles", "3D visualization", "Academic research tool"],
  },
];

export const experience = [
  {
    title: "Software Engineer (Working Student)",
    company: "Siemens",
    location: "Munich, Germany",
    period: "06/2024 – 09/2025",
    items: [
      "Reworked Apache NiFi internals on a Java microservices security analytics platform, clearing pipeline bottlenecks and fixing inter-service communication issues that were limiting stability.",
      "Built an LLM-based network intrusion detection module in Python as my master's thesis, applied to the platform's ingested traffic data.",
      "Made the NiFi data pipeline configurable via JSON so non-engineering teammates could compose pipelines without touching Java.",
      "Cut Docker image size and build time by restructuring base images, dependency layers, and build scripts for reproducible container builds on Azure (AKS).",
    ],
  },
  {
    title: "Student Research Assistant",
    company: "Ludwig Maximilian University (LMU)",
    location: "Munich, Germany",
    period: "10/2023 – 06/2024",
    items: [
      "Processed large-scale brain MRI neuroimaging datasets using ML and statistical modeling to classify disease presence and subtype patterns.",
      "Parallelized preprocessing and processing pipelines on HPC clusters, significantly accelerating feature extraction and model execution workloads.",
      "Automated ETL steps and SLURM job scheduling to make the research workflow reproducible across reruns.",
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
      "Set up CI/CD with Bitbucket Pipelines and Jira on GCP to stabilize deployments.",
      "Improved conversational AI features through prompt engineering and refined extraction logic against LLM APIs.",
      "Worked closely with the founding team on technical discussions and product decisions in a ~10 person startup.",
    ],
  },
  {
    title: "Graduate Research Assistant / Software Engineer",
    company: "NETLAB, Bogazici University",
    location: "Istanbul, Turkey",
    period: "02/2020 – 12/2021",
    items: [
      "Implemented simulation algorithms and C++/Python testbeds for TUBITAK (The Scientific and Technological Research Council of Turkey)-funded molecular communication research, improving experiment reproducibility.",
      "Built embedded data acquisition on Raspberry Pi and Arduino for sensor- and actuator-based experimental testbeds, wiring the hardware and automating the code.",
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
    degree: "M.Sc. Informatics",
    school: "Technical University of Munich (TUM)",
    location: "Munich, Germany",
    period: "09/2023 – 09/2025",
    items: ["Focus: ML & LLMs · Software Engineering · Cybersecurity", "Thesis: AI-Powered Security: Leveraging Large Language Models for Network Anomaly-based Detection", "Grade: 1.6, 1.0 = best"],
  },
  {
    degree: "M.Sc. Computer Engineering",
    school: "Bogazici University",
    location: "Istanbul, Turkey",
    period: "09/2019 – 09/2022",
    items: ["Research: Molecular Communications & Signal Processing", "Thesis: Source Localization for Molecular Communication via Diffusion", "Published 4 international papers", "Grade: 4.0, 4.0 = best"],
  },
  {
    degree: "B.Sc. Computer Engineering",
    school: "Bogazici University",
    location: "Istanbul, Turkey",
    period: "09/2014 – 07/2019",
    items: ["Algorithms, data structures, software development", "Grade: 2.8, 4.0 = best"],
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
