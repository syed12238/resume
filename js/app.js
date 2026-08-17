/**
 * SYED HAMZA — LUXURY DESKTOP RESUME APPLICATION ENGINE
 * Central Structured Data Architecture, SPA URL-Hash Routing,
 * Dynamic Section Renderers, Interactive Playground, and Print Engine.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. CENTRAL STRUCTURED RESUME DATA OBJECT (Zero Hardcoding)
  // ==========================================================================
  const resumeData = {
    profile: {
      name: 'SYED HAMZA',
      verified: true,
      title: 'Electronics & Communication Engineer',
      positioning: 'AI • Full-Stack Development • Digital Product Engineering',
      status: 'Open to Opportunities',
      avatarText: 'SH',
      photoUrl: 'assets/profile.jpg',
      summary: 'Electronics & Communication Engineer focused on building AI-powered digital products, full-stack applications, and technically sophisticated web experiences. Combining engineering fundamentals with modern software architecture, AI integration, and product design.'
    },

    contact: {
      phone: '+91 9XXXXXXXXX',
      phoneLink: 'tel:+919876543210',
      email: 'hamza@email.com',
      emailLink: 'mailto:hamza.ece.dev@gmail.com',
      location: 'Bengaluru, India',
      locationLink: '#',
      linkedin: 'linkedin.com/in/syedhamza',
      linkedinLink: 'https://linkedin.com/in/syedhamza-eng',
      website: 'syedhamza.com',
      websiteLink: 'https://hamzadev.pro'
    },

    snapshot: [
      {
        label: 'Projects Completed',
        value: '15+',
        sub: 'Across domains',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>'
      },
      {
        label: 'Years of Experience',
        value: '3+',
        sub: 'Engineering & Development',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>'
      },
      {
        label: 'Technologies',
        value: '20+',
        sub: 'Modern Tech Stack',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'
      },
      {
        label: 'Problem Solver',
        value: '100%',
        sub: 'Client Satisfaction',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 12 12 16 14"></polygon></svg>'
      }
    ],

    coreExpertise: [
      'AI Integration',
      'Full-Stack Development',
      'Web Engineering',
      'Backend Development',
      'API Design',
      'Database Architecture',
      'UI/UX Engineering',
      'System Design',
      'Problem Solving',
      'Product Engineering'
    ],

    featuredProject: {
      name: 'Auralis Studio',
      link: 'https://your-domain.com/cv',
      description: 'AI-powered digital experience platform for premium brands.',
      highlights: [
        'Built with Next.js, TypeScript, Supabase, AI APIs',
        'Modular architecture with scalable backend',
        'AI-driven automation and intelligent workflows',
        'Deployed on Vercel with global performance'
      ]
    },

    closingQuote: 'I don’t just write code, I engineer solutions that create impact.',

    skills: [
      {
        category: 'AI & Intelligent Systems',
        items: ['LLM Integration', 'Prompt Engineering', 'AI Application Development', 'AI Workflows', 'Vector DB', 'Claude & OpenAI APIs']
      },
      {
        category: 'Frontend Engineering',
        items: ['React', 'Next.js 14+', 'TypeScript', 'Modern JavaScript', 'HTML5', 'CSS3', 'Responsive Architecture', 'Animation Systems', 'Tailwind']
      },
      {
        category: 'Backend Engineering',
        items: ['Node.js', 'Express', 'REST APIs', 'Authentication (JWT/OAuth)', 'Server-side Architecture', 'Middleware']
      },
      {
        category: 'Databases',
        items: ['Supabase', 'PostgreSQL', 'Relational Schema Design', 'Row-Level Security (RLS)', 'SQL Optimization']
      },
      {
        category: 'Infrastructure',
        items: ['Vercel Edge', 'Docker', 'Git / GitHub CI/CD', 'Linux / WSL', 'Postman']
      },
      {
        category: 'Engineering Fundamentals',
        items: ['System Design', 'API Architecture', 'Problem Solving', 'Product Engineering', 'Embedded C/C++', 'Signal Processing']
      }
    ],

    projects: [
      {
        id: 'auralis',
        name: 'Auralis Studio',
        category: 'AI Platform & Web Experience',
        year: '2024',
        role: 'Product Designer • Full-Stack Developer',
        description: 'AI-powered generative digital experience platform featuring sub-second streaming token ingestion, Supabase PostgreSQL with RLS, and automated Edge deployment on Vercel.',
        tags: ['React', 'Next.js', 'TypeScript', 'AI APIs', 'Supabase', 'Vercel']
      },
      {
        id: 'neuralforge',
        name: 'NeuralForge',
        category: 'Workflow Engine & Developer Tools',
        year: '2024',
        role: 'Full-Stack & Systems Engineer',
        description: 'Multi-agent developer workflow engine and operational dashboard coordinating autonomous task graphs with in-memory semantic vector cache.',
        tags: ['Next.js', 'TypeScript', 'Node.js', 'Vector DB', 'REST APIs', 'WebSockets']
      },
      {
        id: 'cogniroute',
        name: 'CogniRoute Telemetry',
        category: 'Embedded Hardware & Cloud Telemetry',
        year: '2024',
        role: 'Electronics & Software Integration Engineer',
        description: 'High-frequency 1kHz ADC sensor sampling loop in C++ transmitting compressed binary frames over WebSockets into a real-time 60FPS HTML5 Canvas oscilloscope.',
        tags: ['C++', 'Embedded C', 'Node.js', 'WebSockets', 'Digital Electronics', 'Canvas API']
      }
    ],

    aiExperience: {
      eyebrow: "AI ENGINEERING & CREATIVE TECHNOLOGY",
      title: "2+ Years of Intensive Hands-On Practice",
      hours: "~4,500–5,000",
      hoursBadge: "~4.5K–5K",
      subtitle: "~4,500–5,000 hours across AI-assisted engineering, software development, creative technology, and digital product building.",
      description: "Built and experimented extensively with modern AI tools and models as part of an end-to-end engineering workflow — spanning software architecture, full-stack development, frontend systems, backend engineering, UI/UX, visual design, automation, research, debugging, prototyping, and digital product development.",
      capabilities: [
        {
          category: "AI & Intelligent Systems",
          items: ["LLM Integration", "Prompt Engineering", "AI Workflows", "AI-Assisted Development", "Model Evaluation", "Research & Experimentation"]
        },
        {
          category: "Full-Stack Engineering",
          items: ["Frontend Architecture", "Backend Systems", "REST APIs", "Authentication", "Database Architecture", "Deployment"]
        },
        {
          category: "Creative Technology",
          items: ["UI/UX Engineering", "Visual Design", "Interactive Experiences", "Motion & Animation", "Design Systems", "Digital Products"]
        },
        {
          category: "Engineering Workflow",
          items: ["Rapid Prototyping", "Debugging", "Architecture Exploration", "Technical Research", "Automation", "Problem Solving"]
        }
      ],
      credibilityNote: "Approximate cumulative hands-on practice across personal projects, client work, experimentation, development, research, and AI-assisted workflows."
    },

    experience: [
      {
        role: 'Independent Software & AI Engineer',
        organization: 'Self-Directed & Client Engagements',
        location: 'Remote / Global',
        period: '2023 – Present',
        description: 'Spearheaded end-to-end architecture and implementation of scalable web applications and AI-augmented tools for clients and independent initiatives.',
        responsibilities: [
          'Built production-ready full-stack systems using Next.js, React, Node.js, and Supabase with end-to-end type safety.',
          'Integrated state-of-the-art LLM APIs and prompt pipelines to automate unstructured data workflows.',
          'Maintained rigorous engineering practices: automated CI/CD on Vercel and modular architecture.'
        ]
      },
      {
        role: 'Engineering Project Lead & Developer',
        organization: 'Ghousia College of Engineering (Capstone Engineering)',
        location: 'Karnataka, India',
        period: '2023 – 2024',
        description: 'Directed capstone engineering projects spanning embedded systems, signal communication, and software interfaces.',
        responsibilities: [
          'Programmed microcontroller sensor sampling loops in C++ interfacing with web visualizers.',
          'Formulated algorithmic solutions for signal analysis and data transmission.',
          'Authored comprehensive technical documentation, circuit schematics, and verification protocols.'
        ]
      }
    ],

    education: {
      degree: 'Bachelor of Engineering — Electronics & Communication Engineering',
      institution: 'Ghousia College of Engineering',
      graduation: '2024',
      foundations: [
        'Embedded Systems & Microcontrollers',
        'Digital Electronics & Circuit Analysis',
        'Communication Networks & Signal Processing',
        'Engineering Problem Solving & Algorithmic Logic'
      ]
    },

    achievements: [
      {
        title: 'Production AI Platform Launch',
        description: 'Designed and deployed Auralis Studio with real-time SSE token streaming and sub-50ms TTFB on Vercel Edge.'
      },
      {
        title: 'Hardware to Web Telemetry Bridge',
        description: 'Engineered an in-browser 60FPS Canvas Oscilloscope syncing with microcontroller ADC sampling via WebSockets.'
      },
      {
        title: 'B.E. Electronics & Communication Engineering Degree',
        description: 'Graduated in 2024 from Ghousia College of Engineering with strong analytical and systems foundations.'
      }
    ]
  };

  // ==========================================================================
  // 2. SPA ROUTER & NAVIGATION CONTROLLER
  // ==========================================================================
  const ROUTES = {
    '#/resume': renderOverviewPage,
    '#/resume/skills': renderSkillsPage,
    '#/resume/projects': renderProjectsPage,
    '#/resume/experience': renderExperiencePage,
    '#/resume/education': renderEducationPage,
    '#/resume/engineering': renderEngineeringDepthPage,
    '#/resume/agents': renderAgentsPage,
    '#/resume/achievements': renderAchievementsPage,
    '#/resume/contact': renderContactPage
  };

  const mainContentEl = document.getElementById('main-content-container');

  function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    if (!window.location.hash || !ROUTES[window.location.hash]) {
      window.location.hash = '#/resume';
    } else {
      handleRoute();
    }
  }

  function handleRoute() {
    const hash = window.location.hash || '#/resume';
    const renderFn = ROUTES[hash] || renderOverviewPage;
    
    updateActiveNavStates(hash);
    renderFn();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Jaw-dropping micro-interactions & number count-ups
    setTimeout(() => {
      animateCounters();
      initCardTiltEffects();
    }, 50);
  }

  function animateCounters() {
    const counterElements = document.querySelectorAll('.snapshot-value');
    counterElements.forEach(el => {
      const text = el.textContent.trim();
      const match = text.match(/(\d+)/);
      if (match) {
        const target = parseInt(match[0], 10);
        const prefix = text.split(match[0])[0] || '';
        const suffix = text.split(match[0])[1] || '';
        let start = 0;
        const duration = 850;
        const startTime = performance.now();

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(start + (target - start) * ease);
          el.textContent = `${prefix}${current}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = text;
          }
        }
        requestAnimationFrame(update);
      }
    });
  }

  function initCardTiltEffects() {
    if (window.innerWidth <= 900) return; // Skip 3D tilt on mobile touch devices
    const cards = document.querySelectorAll('.snapshot-card, .dashboard-box, .featured-project-box, .explore-full-dark-card, .project-card-full, .timeline-item-card, .ai-engineering-depth-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  function updateActiveNavStates(hash) {
    const sectionKey = hash.replace('#/resume', '').replace('/', '') || 'overview';

    // Sidebar items
    document.querySelectorAll('.nav-item-card').forEach(btn => {
      const target = btn.getAttribute('data-nav');
      if (target === sectionKey || (sectionKey === '' && target === 'overview')) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Left rail items
    document.querySelectorAll('.rail-btn').forEach(btn => {
      const target = btn.getAttribute('data-rail');
      if (target === sectionKey || (sectionKey === '' && target === 'overview')) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Mobile Horizontal Pills
    document.querySelectorAll('.m-pill').forEach(pill => {
      const target = pill.getAttribute('data-mnav');
      if (target === sectionKey || (sectionKey === '' && target === 'overview')) {
        pill.classList.add('active');
        pill.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      } else {
        pill.classList.remove('active');
      }
    });

    // Mobile Bottom Dock Items
    document.querySelectorAll('.m-dock-item').forEach(dockItem => {
      const target = dockItem.getAttribute('data-mdock');
      if (target === sectionKey || (sectionKey === '' && target === 'overview')) {
        dockItem.classList.add('active');
      } else {
        dockItem.classList.remove('active');
      }
    });

    // Close mobile drawer if open
    closeMobileDrawer();
  }

  function openMobileDrawer() {
    const sidebar = document.getElementById('profile-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.classList.add('drawer-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    const sidebar = document.getElementById('profile-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.classList.remove('drawer-open');
    document.body.style.overflow = '';
  }

  // ==========================================================================
  // 3. SUBPAGE RENDERERS
  // ==========================================================================

  // --- 1. OVERVIEW PAGE (Default Hero & Dashboard) ---
  function renderOverviewPage() {
    if (!mainContentEl) return;

    mainContentEl.innerHTML = `
      <!-- Top Action Bar -->
      <div class="main-top-bar no-print">
        <button class="btn-top-primary" id="top-share-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>Share Resume OS</span>
        </button>
      </div>

      <!-- Hero Grid -->
      <section class="overview-hero-grid">
        <div class="hero-left-content">
          <div class="hero-eyebrow-pill">
            <span class="eyebrow-live-pulse"></span>
            <span>ELECTRONICS & COMMUNICATION ENGINEER</span>
            <span>•</span>
            <span style="color:var(--accent-gold-dark);">B.E. 2024</span>
          </div>

          <h1 class="hero-candidate-name">
            <span>${resumeData.profile.name}</span>
            <span class="hero-verified-badge" title="Verified Engineering Profile">✓</span>
          </h1>

          <div class="hero-primary-title">${resumeData.profile.title}</div>
          <div class="hero-positioning-line">${resumeData.profile.positioning}</div>
          <p class="hero-summary-paragraph">${resumeData.profile.summary}</p>

          <div class="hero-tech-badges-strip">
            <span class="hero-badge">⚡ React & Next.js 14+</span>
            <span class="hero-badge">🧠 LLM & AI Pipelines</span>
            <span class="hero-badge">🔌 Embedded C++ Telemetry</span>
            <span class="hero-badge">🚀 Supabase & PostgreSQL</span>
          </div>
        </div>

        <div class="profile-photo-card">
          <div class="photo-circle-wrapper">
            <img src="${resumeData.profile.photoUrl}" alt="${resumeData.profile.name}" />
          </div>
          <div class="photo-card-info-col">
            <div class="photo-card-name">
              <span>Syed Hamza</span>
              <span class="sidebar-verified-badge" style="width:13px; height:13px; font-size:0.50rem;">✓</span>
            </div>
            <div class="photo-status-badge">
              <span class="status-dot-green"></span>
              <span>${resumeData.profile.status}</span>
            </div>
            <div class="photo-location-pill">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Bengaluru • Relocation Ready</span>
            </div>
            <div class="photo-card-actions">
              <a href="${resumeData.contact.emailLink}" class="photo-mini-btn" title="Send Email">✉ Email</a>
              <a href="${resumeData.contact.linkedinLink}" target="_blank" class="photo-mini-btn" title="View LinkedIn">in LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Pills Strip -->
      <nav class="contact-pills-row" aria-label="Quick Contact Links">
        <a href="${resumeData.contact.phoneLink}" class="contact-pill">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>${resumeData.contact.phone}</span>
        </a>

        <a href="${resumeData.contact.emailLink}" class="contact-pill">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span>${resumeData.contact.email}</span>
        </a>

        <a href="${resumeData.contact.locationLink}" class="contact-pill">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${resumeData.contact.location}</span>
        </a>

        <a href="${resumeData.contact.linkedinLink}" target="_blank" rel="noopener noreferrer" class="contact-pill">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          <span>${resumeData.contact.linkedin}</span>
        </a>

        <a href="${resumeData.contact.websiteLink}" target="_blank" rel="noopener noreferrer" class="contact-pill">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          <span>${resumeData.contact.website}</span>
        </a>
      </nav>

      <!-- Snapshot Metrics Row -->
      <section class="snapshot-cards-row">
        ${resumeData.snapshot.map(s => `
          <div class="snapshot-card">
            <div class="snapshot-icon-box">${s.icon}</div>
            <div class="snapshot-info">
              <span class="snapshot-label">${s.label}</span>
              <span class="snapshot-value">${s.value}</span>
              <span class="snapshot-sub">${s.sub}</span>
            </div>
          </div>
        `).join('')}
      </section>

      <!-- Main Body 3-Card Grid -->
      <section class="overview-trio-grid">
        <!-- Core Expertise -->
        <div class="dashboard-box">
          <h3 class="box-title">Core Expertise</h3>
          <div class="box-pill-cloud">
            ${resumeData.coreExpertise.map(e => `<button class="expertise-chip interactive-skill-pill" data-skill-name="${e}" tabindex="0" role="button" aria-label="Deep dive into ${e}"><span>${e}</span><span class="pill-sparkle-dot">↗</span></button>`).join('')}
          </div>
        </div>

        <!-- Featured Project -->
        <div class="featured-project-box">
          <div>
            <span class="sidebar-section-heading" style="margin:0 0 4px 0;">FEATURED PROJECT</span>
            <div class="featured-proj-header">
              <h3 class="featured-proj-name">${resumeData.featuredProject.name} ↗</h3>
            </div>
            <p class="featured-proj-desc">${resumeData.featuredProject.description}</p>
          </div>
          <ul class="featured-proj-bullets">
            ${resumeData.featuredProject.highlights.map(h => `
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
          <button class="btn-card-dark" id="featured-proj-details-btn">View Project Details →</button>
        </div>

        <!-- Explore Full Profile Dark Card -->
        <div class="explore-full-dark-card">
          <div>
            <div class="explore-card-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>Explore Full Profile</span>
            </div>
            <p class="explore-card-desc" style="margin-top:6px;">Dive deeper into my projects, engineering depth, architecture, and technical implementations.</p>
          </div>
          <button class="btn-gold-large" id="explore-full-cta-btn">View Full Interactive Resume →</button>
          <div class="explore-qr-row">
            <div class="qr-box-mini" id="overview-qr-box"></div>
            <div class="qr-caption">Scan to view<br>interactive resume →</div>
          </div>
        </div>
      </section>

      <!-- Closing Quote Bar -->
      <footer class="closing-quote-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color:var(--accent-gold-dark);"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        <span>${resumeData.closingQuote}</span>
      </footer>
    `;

    hookOverviewButtons();
    renderQrCodeInElement('overview-qr-box');
  }

  function hookOverviewButtons() {
    const shareBtn = document.getElementById('top-share-btn');
    if (shareBtn) shareBtn.addEventListener('click', shareResumeLink);

    const projDetailsBtn = document.getElementById('featured-proj-details-btn');
    if (projDetailsBtn) {
      projDetailsBtn.addEventListener('click', () => {
        window.location.hash = '#/resume/projects';
      });
    }

    const exploreCtaBtn = document.getElementById('explore-full-cta-btn');
    if (exploreCtaBtn) {
      exploreCtaBtn.addEventListener('click', () => {
        window.location.hash = '#/resume/engineering';
      });
    }
  }

  // --- 2. SKILLS PAGE ---
  function renderSkillsPage() {
    if (!mainContentEl) return;

    mainContentEl.innerHTML = `
      <div class="subpage-container">
        <div class="subpage-header">
          <div>
            <h2 class="subpage-title">Technical Expertise</h2>
            <p class="subpage-subtitle">Verified skill matrix & engineering capabilities</p>
          </div>
        </div>

        <div class="skills-category-grid">
          ${resumeData.skills.map(s => `
            <div class="skill-category-card">
              <h3 class="skill-cat-head">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold-dark)" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                <span>${s.category}</span>
              </h3>
              <div class="box-pill-cloud">
                ${s.items.map(item => `<button class="expertise-chip interactive-skill-pill" data-skill-name="${item}" tabindex="0" role="button" aria-label="Deep dive into ${item}"><span>${item}</span><span class="pill-sparkle-dot">↗</span></button>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --- 3. PROJECTS PAGE ---
  function renderProjectsPage() {
    if (!mainContentEl) return;

    mainContentEl.innerHTML = `
      <div class="subpage-container">
        <div class="subpage-header">
          <div>
            <h2 class="subpage-title">Selected Projects</h2>
            <p class="subpage-subtitle">Production platforms & technical case studies</p>
          </div>
        </div>

        <div class="projects-grid">
          ${resumeData.projects.map(p => `
            <div class="project-card-full">
              <div>
                <div class="proj-top-meta">
                  <span class="proj-category-pill">${p.category}</span>
                  <span class="proj-year">${p.year}</span>
                </div>
                <h3 class="proj-name" style="margin-top:8px;">${p.name}</h3>
                <div style="font-size:0.78rem; font-weight:700; color:var(--accent-gold-dark); margin-bottom:8px;">${p.role}</div>
                <p class="proj-desc">${p.description}</p>
              </div>

              <div>
                <div class="proj-tags-row" style="margin-bottom:12px;">
                  ${p.tags.map(t => `<span class="proj-tag-chip">${t}</span>`).join('')}
                </div>
                <div class="proj-btn-row">
                  <button class="btn-sidebar-dark" onclick="window.location.hash='#/resume/engineering'">Overview →</button>
                  <button class="btn-sidebar-light" onclick="window.location.hash='#/resume/engineering'">Deep Dive →</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --- 4. EXPERIENCE PAGE ---
  function renderExperiencePage() {
    if (!mainContentEl) return;

    const ai = resumeData.aiExperience;

    mainContentEl.innerHTML = `
      <div class="subpage-container">
        <div class="subpage-header">
          <div>
            <h2 class="subpage-title">Work & Contributions</h2>
            <p class="subpage-subtitle">Professional experience and engineering leadership</p>
          </div>
        </div>

        <div class="timeline-list">
          ${resumeData.experience.map(e => `
            <div class="timeline-item-card">
              <div class="timeline-head-row">
                <h3 class="timeline-role">${e.role}</h3>
                <span class="timeline-period">${e.period}</span>
              </div>
              <div class="timeline-org">${e.organization} • ${e.location}</div>
              <p style="font-size:0.86rem; color:var(--text-body); line-height:1.55;">${e.description}</p>
              <ul class="timeline-bullets">
                ${e.responsibilities.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>
          `).join('')}

          <!-- AI Engineering Depth Card -->
          <div class="ai-engineering-depth-card">
            <div class="ai-depth-header-row">
              <div>
                <span class="sidebar-section-heading" style="margin:0 0 4px 0; color:var(--accent-gold-dark);">${ai.eyebrow}</span>
                <h3 class="ai-depth-title">${ai.title}</h3>
                <div class="ai-depth-sub">${ai.subtitle}</div>
              </div>
              <div class="ai-hours-stat-badge">
                <span class="ai-hours-stat">${ai.hoursBadge}</span>
                <span class="ai-hours-label">HOURS HANDS-ON</span>
                <span class="ai-hours-caption">AI • Engineering • Design • Product</span>
              </div>
            </div>

            <p class="ai-depth-desc">${ai.description}</p>

            <div class="ai-capabilities-grid">
              ${ai.capabilities.map(cap => `
                <div class="ai-cap-group">
                  <div class="ai-cap-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold-dark)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${cap.category}</span>
                  </div>
                  <div class="ai-cap-tags">
                    ${cap.items.map(item => `<button class="ai-cap-tag interactive-skill-pill" data-skill-name="${item}" tabindex="0" role="button" aria-label="Deep dive into ${item}"><span>${item}</span><span class="pill-sparkle-dot">↗</span></button>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="ai-credibility-note">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span>${ai.credibilityNote}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- 5. EDUCATION PAGE ---
  function renderEducationPage() {
    if (!mainContentEl) return;

    mainContentEl.innerHTML = `
      <div class="subpage-container">
        <div class="subpage-header">
          <div>
            <h2 class="subpage-title">Academic Background</h2>
            <p class="subpage-subtitle">Engineering degree and foundational systems training</p>
          </div>
        </div>

        <div class="timeline-item-card" style="background:#ffffff; border:1px solid var(--border-subtle);">
          <div class="timeline-head-row">
            <h3 class="timeline-role">${resumeData.education.degree}</h3>
            <span class="timeline-period">Graduated ${resumeData.education.graduation}</span>
          </div>
          <div class="timeline-org">${resumeData.education.institution}</div>

          <div style="margin-top:14px; padding-top:12px; border-top:1px solid var(--border-subtle);">
            <div class="sidebar-section-heading" style="margin:0 0 6px 0;">ENGINEERING FOUNDATIONS</div>
            <ul class="timeline-bullets">
              ${resumeData.education.foundations.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // --- 6. ENGINEERING DEPTH PAGE (Technical Interviewer's Playground) ---
  function renderEngineeringDepthPage() {
    if (!mainContentEl) return;

    mainContentEl.innerHTML = `
      <div class="subpage-container">
        <div class="subpage-header">
          <div>
            <h2 class="subpage-title">Engineering Depth</h2>
            <p class="subpage-subtitle">How I think, design and build systems.</p>
          </div>
        </div>

        <!-- Interactive Playground Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- AI Pipeline Simulator -->
          <div class="playground-box">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px;">
              <span style="font-family:var(--font-mono); font-size:0.76rem; font-weight:700; color:var(--accent-gold-light);">AI STREAMING PIPELINE</span>
              <span style="font-size:0.70rem; color:#94a3b8;">Vercel Edge & SSE</span>
            </div>
            <pre style="font-family:var(--font-mono); font-size:0.75rem; color:#93c5fd; background:#000; padding:10px; border-radius:8px;"><code>// Edge Runtime Response Handler
export const runtime = 'edge';
export async function POST(req: Request) {
  const stream = await orchestrateAIStream(await req.json());
  return new Response(stream, { headers: { 'Content-Type': 'text/event-stream' } });
}</code></pre>
            <button class="btn-gold-large" id="sim-run-stream-btn">⚡ Run AI Streaming Test</button>
            <div id="sim-stream-output" style="font-family:var(--font-mono); font-size:0.72rem; color:#34d399; background:#000; padding:8px; border-radius:6px; min-height:55px;">
              [Standby] Click above to simulate live token generation...
            </div>
          </div>

          <!-- 60FPS Hardware Oscilloscope Simulator -->
          <div class="playground-box">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px;">
              <span style="font-family:var(--font-mono); font-size:0.76rem; font-weight:700; color:#38bdf8;">ECE 1kHz ADC OSCILLOSCOPE</span>
              <span style="font-size:0.70rem; color:#94a3b8;">Canvas 60FPS Live</span>
            </div>
            <canvas id="depth-oscilloscope-canvas" width="300" height="110" style="width:100%; height:110px; background:#05070a; border-radius:8px;"></canvas>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; font-family:var(--font-mono); font-size:0.72rem; color:#94a3b8;">
              <span>Freq:</span>
              <input type="range" id="depth-osc-freq" min="1" max="10" value="4" style="flex:1;">
              <span>Gain:</span>
              <input type="range" id="depth-osc-gain" min="1" max="5" value="3" style="flex:1;">
            </div>
          </div>
        </div>
      </div>
    `;

    // Hook simulation
    const streamBtn = document.getElementById('sim-run-stream-btn');
    if (streamBtn) {
      streamBtn.addEventListener('click', () => {
        const out = document.getElementById('sim-stream-output');
        if (out) {
          out.innerHTML = '<span style="color:#f59e0b;">[Connecting to Edge Gateway...]</span>\n';
          const tokens = [
            '[TTFB: 38ms] Authenticated via Supabase JWT.\n',
            '>> Ingesting AST tokens @ 58 tokens/sec\n',
            '>> [Done] Generated 420 tokens | Edge Cache: HIT'
          ];
          let i = 0;
          const interval = setInterval(() => {
            if (i < tokens.length) {
              out.innerHTML += tokens[i];
              i++;
            } else clearInterval(interval);
          }, 280);
        }
      });
    }

    initDepthOscilloscope();
  }

  function initDepthOscilloscope() {
    const canvas = document.getElementById('depth-oscilloscope-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let time = 0;
    const freqInput = document.getElementById('depth-osc-freq');
    const gainInput = document.getElementById('depth-osc-gain');

    function animate() {
      if (!document.getElementById('depth-oscilloscope-canvas')) return;
      const freq = freqInput ? parseFloat(freqInput.value) : 4;
      const gain = gainInput ? parseFloat(gainInput.value) : 3;

      ctx.fillStyle = '#05070a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Neon Grid Lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 25) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Neon Waveform with Glow
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#38bdf8';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      const centerY = canvas.height / 2;
      for (let x = 0; x < canvas.width; x++) {
        const rad = (x * freq * 0.05) + time;
        const y = centerY + (Math.sin(rad) * gain * 8) + (Math.sin(rad * 2.5) * gain * 2.5);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset

      time += 0.08;
      requestAnimationFrame(animate);
    }
    animate();
  }

  // --- 7. AI AGENTS STUDIO PAGE WITH LIVE AI CHAT ENGINE ---
  const GEMINI_API_KEY = 'AQ.Ab8RN6Kqo35hR4LYLir-n-W2s0xScvcLEoiDE313vWmvjKp9-A';
  const GEMINI_MODEL = 'gemini-3.5-flash-lite';

  const AGENT_BASE_IDENTITY = 'CRITICAL IDENTITY RULE: You are a specialized autonomous AI agent engineered, developed, and trained by Syed Hamza. Never mention Google, Gemini, or foundation model providers. If asked who created, built, or trained you, explicitly state: "I am a specialized autonomous AI agent engineered and trained by Syed Hamza."';

  const AGENTS_LIST = [
    {
      id: 'engineer',
      icon: '🧠',
      name: 'Engineer Agent',
      badge: 'Full-Stack & Systems',
      role: 'Principal Software Architect & Staff Full-Stack Engineer',
      systemPrompt: `You are a Principal Software Architect & Staff Full-Stack Engineer. ${AGENT_BASE_IDENTITY} You have deep mastery in TypeScript, Next.js, Node.js, distributed databases, AST refactoring, Zod schema validation, API contracts, and edge microservices. Speak with high technical precision, architectural depth, concrete code blocks, design patterns, and engineering trade-offs. You collaborate closely with Syed Hamza.`,
      greeting: 'Greetings! I am the Principal Software Architect agent trained by Syed Hamza. I specialize in full-stack architecture, distributed systems design, TypeScript AST refactoring, and edge microservices. How can I assist your engineering roadmap today?',
      prompts: [
        'Architect an edge streaming LLM gateway with Zod schema validation',
        'Write an idempotent distributed rate-limiter with Redis sliding window',
        'Generate Supabase PostgreSQL Row-Level Security policies for multi-tenancy'
      ]
    },
    {
      id: 'doctor',
      icon: '🩺',
      name: 'Doctor Agent',
      badge: 'Clinical & Biomedical',
      role: 'Senior Clinical Physician & Biomedical Research Fellow',
      systemPrompt: `You are a Senior Clinical Physician & Biomedical Research Fellow. ${AGENT_BASE_IDENTITY} You specialize in internal medicine, clinical diagnostic reasoning, pathophysiology, differential diagnosis, pharmacology, clinical trial evidence (PubMed/NEJM/Lancet), and ICD-10 ontologies. Speak with authoritative clinical rigor, structured assessment frameworks, evidence-based recommendations, and clinical empathy.`,
      greeting: 'Hello. I am the Clinical Diagnostic & Medical Research Agent trained by Syed Hamza. I provide evidence-based clinical reasoning, differential diagnosis breakdowns, biomedical literature synthesis, and triage analysis. What clinical presentation or protocol shall we review?',
      prompts: [
        'Analyze clinical presentation of resistant hypertension in CKD Stage 3',
        'Evaluate differential diagnosis for atypical chest pain with normal ECG',
        'Check drug-drug interactions between ACE inhibitors, Spironolactone, and NSAIDs'
      ]
    },
    {
      id: 'designer',
      icon: '🎨',
      name: 'Designer Agent',
      badge: 'UI/UX & Design Tokens',
      role: 'Principal UX/UI Designer & Design Systems Lead',
      systemPrompt: `You are a Principal UX/UI Designer & Design Systems Architect inspired by Apple, Linear, and Stripe design aesthetics. ${AGENT_BASE_IDENTITY} You specialize in design tokens, glassmorphism shader math, WCAG 2.1 AAA accessibility contrast, typography hierarchy, micro-interactions, and 3D physics spring dynamics. Speak with aesthetic finesse, visual critique, and concrete CSS/design specs.`,
      greeting: 'Welcome! I am the Creative UX & Design Systems Agent trained by Syed Hamza. I specialize in luxury interfaces, micro-interaction physics, WCAG AAA accessibility, and design tokens. What design challenge or aesthetic system are we crafting?',
      prompts: [
        'Generate luxury Obsidian & Warm Gold design system tokens with WCAG AAA compliance',
        'Design fluid cubic-bezier spring curves for 3D card tilt physics',
        'Audit color contrast ratios for dark mode accessibility compliance'
      ]
    },
    {
      id: 'signal',
      icon: '🔬',
      name: 'Signal / IoT Agent',
      badge: 'DSP & 1kHz Telemetry',
      role: 'Principal Embedded Systems & DSP Telemetry Engineer',
      systemPrompt: `You are a Principal Embedded Systems & Digital Signal Processing (DSP) Engineer. ${AGENT_BASE_IDENTITY} You specialize in ADC interrupts, Nyquist sampling criteria, Fast Fourier Transform (FFT) harmonic analysis, FIR/IIR biquad filter design, STM32 Timer registers, and real-time UART/WebSocket telemetry. Speak with mathematical rigor, C/C++ embedded code, and hardware constraints.`,
      greeting: 'Hello. I am the Signal Processing & IoT Telemetry Agent trained by Syed Hamza. I specialize in DSP filters, FFT harmonic analysis, Nyquist sampling validation, and cycle-accurate embedded C++ firmware. What signal stream or hardware loop shall we calibrate?',
      prompts: [
        'Design a 50Hz notch filter to remove mains power interference from 1kHz ADC data',
        'Configure STM32 Timer2 for cycle-accurate 1kHz ADC interrupt sampling',
        'Analyze FFT frequency bin distribution for harmonic vibration anomalies'
      ]
    },
    {
      id: 'pm',
      icon: '📊',
      name: 'Product Manager Agent',
      badge: 'PRDs & Roadmaps',
      role: 'Senior Technical Product Manager & Group PM',
      systemPrompt: `You are a Senior Technical Product Manager & Group PM. ${AGENT_BASE_IDENTITY} You specialize in PRD authoring, user story decomposition, RICE prioritization frameworks, Agile sprint planning, technical debt vs velocity trade-offs, and product analytics. Speak with strategic clarity, actionable user stories, and structured deliverables.`,
      greeting: 'Hi there! I am the Technical Product Manager Agent trained by Syed Hamza. I help transform ambiguous product visions into crisp PRDs, user story DAGs, sprint roadmaps, and metric frameworks. What initiative are we scoping?',
      prompts: [
        'Decompose a multi-tenant file upload architecture into 4 Agile sprint deliverables',
        'Perform a technical debt vs velocity trade-off analysis for database migration',
        'Draft an engineering PRD for real-time multiplayer cursor synchronization'
      ]
    },
    {
      id: 'security',
      icon: '🛡️',
      name: 'Security Agent',
      badge: 'AppSec & RLS Auditor',
      role: 'Lead Application Security & Cybersecurity Engineer',
      systemPrompt: `You are a Lead Application Security & Cybersecurity Engineer. ${AGENT_BASE_IDENTITY} You specialize in PostgreSQL Row-Level Security, zero-trust architecture, JWT/OAuth 2.0 PKCE cryptography, penetration testing, SQL injection defense, and OWASP Top 10 hardening. Speak with defensive rigor, threat modeling frameworks, and concrete secure code patterns.`,
      greeting: 'Greetings. I am the Cybersecurity & AppSec Auditor Agent trained by Syed Hamza. I specialize in PostgreSQL Row-Level Security policies, authentication hardening, vulnerability auditing, and zero-trust systems. What system or policy shall we audit?',
      prompts: [
        'Audit PostgreSQL RLS policies to prevent cross-tenant data leakage',
        'Verify HMAC-SHA256 JWT validation against timing attack vulnerabilities',
        'Scan REST API endpoints for SQL injection vulnerabilities'
      ]
    },
    {
      id: 'researcher',
      icon: '🤖',
      name: 'AI Researcher Agent',
      badge: 'RAG & Fine-Tuning',
      role: 'Lead AI Research Scientist & LLM Architect',
      systemPrompt: `You are a Lead AI Research Scientist & LLM Architect. ${AGENT_BASE_IDENTITY} You specialize in multi-hop RAG retrieval architectures, cosine similarity indexers, LoRA/QLoRA fine-tuning datasets, agentic tool-use loops, and context window optimization. Speak with scientific rigor, mathematical foundation, and algorithmic depth.`,
      greeting: 'Hello! I am the AI Research & LLM Architect Agent trained by Syed Hamza. I specialize in vector RAG pipelines, fine-tuning methodologies, embedding distance metrics, and agentic orchestration. What AI architecture shall we explore?',
      prompts: [
        'Design a reciprocal rank fusion RAG pipeline with hybrid BM25 + dense vectors',
        'Format JSONL dataset with chain-of-thought pairs for LoRA fine-tuning',
        'Compare cosine similarity vs dot product in high-dimensional vector search'
      ]
    },
    {
      id: 'devops',
      icon: '🚀',
      name: 'DevOps Agent',
      badge: 'CI/CD & Edge Deploy',
      role: 'Staff Platform & SRE DevOps Engineer',
      systemPrompt: `You are a Staff Platform & SRE DevOps Engineer. ${AGENT_BASE_IDENTITY} You specialize in Docker multi-stage builds, GitHub Actions CI/CD pipelines, Kubernetes, Terraform infrastructure-as-code, Edge deployment, and 99.999% SLA observability. Speak with operational precision and infrastructure-as-code snippets.`,
      greeting: 'Hey! I am the Platform & DevOps Engineer Agent trained by Syed Hamza. I automate CI/CD pipelines, multi-stage Docker builds, Kubernetes manifests, and edge deployments. What infrastructure pipeline are we optimizing?',
      prompts: [
        'Create a GitHub Actions CI pipeline with automated linting, tests, and preview deployment',
        'Write a multi-stage Dockerfile optimized for Next.js standalone edge builds',
        'Design a zero-downtime blue-green deployment strategy for microservices'
      ]
    },
    {
      id: 'data',
      icon: '⚡',
      name: 'Data Scientist Agent',
      badge: 'SQL & Analytics',
      role: 'Principal Quantitative & Data Analytics Scientist',
      systemPrompt: `You are a Principal Quantitative & Data Analytics Scientist. ${AGENT_BASE_IDENTITY} You specialize in PostgreSQL window functions, time-series forecasting, ETL data pipelines, feature engineering, and statistical modeling. Speak with statistical rigor, SQL queries, and Python data workflows.`,
      greeting: 'Greetings! I am the Data Science & Analytics Agent trained by Syed Hamza. I specialize in complex SQL analytics, statistical modeling, ETL pipelines, and time-series feature engineering. What dataset or query shall we analyze?',
      prompts: [
        'Write an optimized PostgreSQL window function query for rolling 30-day retention',
        'Design an automated data quality validation pipeline with Great Expectations',
        'Explain time-series anomaly detection algorithms for high-frequency metrics'
      ]
    },
    {
      id: 'growth',
      icon: '📈',
      name: 'Growth & SEO Agent',
      badge: 'Conversion & Funnels',
      role: 'Technical Growth Marketing & SEO Engineer',
      systemPrompt: `You are a Technical Growth Marketing & SEO Engineer. ${AGENT_BASE_IDENTITY} You specialize in conversion funnel optimization, Core Web Vitals performance, structured JSON-LD schema generation, viral distribution loops, and rigorous A/B test experiments. Speak with data-driven clarity and growth tactics.`,
      greeting: 'Hello! I am the Growth Marketing & SEO Agent trained by Syed Hamza. I engineer conversion funnels, structured JSON-LD search schemas, Core Web Vitals optimization, and A/B test experiments. What growth loop shall we build?',
      prompts: [
        'Generate structured JSON-LD schema markup for rich search snippets',
        'Analyze onboarding funnel drop-offs and suggest 3 high-impact A/B tests',
        'Optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)'
      ]
    },
    {
      id: 'recruiter',
      icon: '💼',
      name: 'Recruiter Agent',
      badge: 'Talent & Sourcing',
      role: 'Executive Technical Talent & Engineering Recruiter',
      systemPrompt: `You are an Executive Technical Talent Recruiter & Engineering Partner. ${AGENT_BASE_IDENTITY} You specialize in evaluating full-stack and AI technical depth, mapping competency matrices, structuring high-signal behavioral rubrics, and portfolio assessments. You know Syed Hamza is an exceptional Electronics & Communication Engineer specializing in AI, Full-Stack Development, and Digital Product Engineering.`,
      greeting: 'Welcome! I am the Technical Recruiter Agent trained by Syed Hamza. I evaluate technical talent, map skill matrices, and structure high-signal interview assessments. How can I help evaluate Syed Hamza or engineering competencies?',
      prompts: [
        'Evaluate Syed Hamza resume alignment against a Senior Full-Stack & AI Engineer role',
        'Generate technical interview questions to assess hands-on React server components understanding',
        'What are the key technical strengths demonstrated in Syed Hamza engineering portfolio?'
      ]
    },
    {
      id: 'compliance',
      icon: '⚖️',
      name: 'Compliance Agent',
      badge: 'GDPR & Governance',
      role: 'Chief Compliance & Data Privacy Legal Architect',
      systemPrompt: `You are a Chief Compliance & Data Privacy Legal Architect. ${AGENT_BASE_IDENTITY} You specialize in GDPR right-to-erasure cascades, CCPA compliance, SOC2 Type II audit readiness, HIPAA data safeguards, and AI governance frameworks. Speak with regulatory precision and risk mitigation policies.`,
      greeting: 'Greetings. I am the Data Privacy & Compliance Agent trained by Syed Hamza. I specialize in GDPR/CCPA data governance, SOC2 readiness, right-to-erasure cascades, and AI compliance standards. What regulatory framework shall we inspect?',
      prompts: [
        'Audit database schema for GDPR right-to-erasure cascade compliance',
        'Generate a data privacy impact assessment checklist for AI LLM feature',
        'What are the essential SOC2 Type II requirements for SaaS data encryption?'
      ]
    }
  ];

  let selectedAgentId = 'engineer';
  const agentChatHistories = {}; // In-memory chat histories keyed by agent id

  function getAgentHistory(agentId) {
    if (!agentChatHistories[agentId]) {
      const agent = AGENTS_LIST.find(a => a.id === agentId) || AGENTS_LIST[0];
      agentChatHistories[agentId] = [
        { role: 'model', text: agent.greeting }
      ];
    }
    return agentChatHistories[agentId];
  }

  function renderAgentsPage() {
    if (!mainContentEl) return;

    const currentAgent = AGENTS_LIST.find(a => a.id === selectedAgentId) || AGENTS_LIST[0];
    const history = getAgentHistory(currentAgent.id);

    mainContentEl.innerHTML = `
      <div class="subpage-container">
        <div class="subpage-header">
          <div>
            <div class="hero-eyebrow-pill" style="margin-bottom:8px;">
              <span class="eyebrow-live-pulse"></span>
              <span>AUTONOMOUS AGENT PERSONAS</span>
            </div>
            <h2 class="subpage-title">AI Agents Studio</h2>
            <p class="subpage-subtitle">Select any specialized agent below to begin a live professional consultation.</p>
          </div>
        </div>

        <!-- 12 Agent Buttons Grid -->
        <div class="agents-buttons-grid">
          ${AGENTS_LIST.map(a => `
            <button class="agent-btn-card ${a.id === currentAgent.id ? 'active' : ''}" data-select-agent="${a.id}">
              <div class="agent-btn-icon">${a.icon}</div>
              <div class="agent-btn-text">
                <span class="agent-btn-title">${a.name}</span>
                <span class="agent-btn-badge">${a.badge}</span>
              </div>
            </button>
          `).join('')}
        </div>

        <!-- Live Agent Chat Window -->
        <div class="agent-chat-window" id="agent-chat-window">
          <div class="agent-chat-header">
            <div class="agent-chat-header-info">
              <span class="agent-chat-header-icon">${currentAgent.icon}</span>
              <div>
                <div class="agent-chat-header-name">
                  <span>${currentAgent.name}</span>
                  <span class="sidebar-verified-badge" style="width:13px; height:13px; font-size:0.50rem;">✓</span>
                </div>
                <div class="agent-chat-header-role">${currentAgent.role}</div>
              </div>
            </div>
            <div class="agent-chat-actions">
              <span class="agent-live-status-tag">
                <span class="status-dot-green"></span>
                <span>AI Agent Core (Live)</span>
              </span>
              <button class="agent-clear-chat-btn" id="agent-clear-chat-btn" title="Reset Conversation">Reset Chat</button>
            </div>
          </div>

          <!-- Message History Container -->
          <div class="agent-chat-messages" id="agent-chat-messages-box">
            ${history.map(msg => renderChatMessageHTML(msg, currentAgent)).join('')}
          </div>

          <!-- Quick Starter Prompts -->
          <div class="chat-quick-prompts-bar">
            ${currentAgent.prompts.map(p => `
              <button class="chat-quick-prompt-btn" data-send-quick="${escapeHtml(p)}">
                <span>⚡ ${escapeHtml(p)}</span>
              </button>
            `).join('')}
          </div>

          <!-- Chat Input Bar -->
          <form class="chat-input-bar" id="agent-chat-form">
            <input 
              type="text" 
              id="agent-chat-input" 
              class="chat-input-field" 
              placeholder="Ask ${currentAgent.name} anything as a professional..." 
              autocomplete="off" 
            />
            <button type="submit" id="agent-send-btn" class="chat-send-btn">
              <span>Send →</span>
            </button>
          </form>
        </div>
      </div>
    `;

    hookLiveAgentChat(currentAgent);
    scrollChatToBottom();
  }

  function renderChatMessageHTML(msg, agent) {
    if (msg.role === 'user') {
      return `
        <div class="chat-msg-row chat-msg-user">
          <div class="chat-avatar-thumb" style="background:#0f131a; color:#ffffff; font-size:0.75rem;">YOU</div>
          <div class="chat-bubble chat-bubble-user">
            ${escapeHtml(msg.text)}
          </div>
        </div>
      `;
    } else {
      return `
        <div class="chat-msg-row chat-msg-agent">
          <div class="chat-avatar-thumb">${agent.icon}</div>
          <div class="chat-bubble chat-bubble-agent">
            ${formatMarkdownToHTML(msg.text)}
          </div>
        </div>
      `;
    }
  }

  function hookLiveAgentChat(currentAgent) {
    // Agent Selection Buttons (Instantly scrolls to chat window)
    document.querySelectorAll('[data-select-agent]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-select-agent');
        if (id) {
          selectedAgentId = id;
          renderAgentsPage();

          // Smoothly scroll down to the chat interface immediately on mobile/desktop
          setTimeout(() => {
            const chatWindow = document.getElementById('agent-chat-window');
            if (chatWindow) {
              const yOffset = -80; // Offset for sticky top bar
              const y = chatWindow.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
              
              // Flash highlight on chat window to indicate active switch
              chatWindow.classList.add('chat-window-highlight');
              setTimeout(() => chatWindow.classList.remove('chat-window-highlight'), 1200);

              const input = document.getElementById('agent-chat-input');
              if (input && window.innerWidth > 640) {
                input.focus();
              }
            }
          }, 40);
        }
      });
    });

    // Quick Prompt Clicks
    document.querySelectorAll('[data-send-quick]').forEach(btn => {
      btn.addEventListener('click', () => {
        const promptText = btn.getAttribute('data-send-quick');
        if (promptText) {
          submitAgentMessage(promptText, currentAgent);
        }
      });
    });

    // Form Submit
    const form = document.getElementById('agent-chat-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('agent-chat-input');
        if (input && input.value.trim()) {
          const text = input.value.trim();
          input.value = '';
          submitAgentMessage(text, currentAgent);
        }
      });
    }

    // Reset Chat Button
    const clearBtn = document.getElementById('agent-clear-chat-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        agentChatHistories[currentAgent.id] = [
          { role: 'model', text: currentAgent.greeting }
        ];
        renderAgentsPage();
        showToast('Chat history reset! 🔄');
      });
    }
  }

  async function submitAgentMessage(userText, agent) {
    const history = getAgentHistory(agent.id);
    history.push({ role: 'user', text: userText });

    const messagesBox = document.getElementById('agent-chat-messages-box');
    if (messagesBox) {
      messagesBox.insertAdjacentHTML('beforeend', `
        <div class="chat-msg-row chat-msg-user">
          <div class="chat-avatar-thumb" style="background:#0f131a; color:#ffffff; font-size:0.75rem;">YOU</div>
          <div class="chat-bubble chat-bubble-user">
            ${escapeHtml(userText)}
          </div>
        </div>
      `);
      
      // Add typing indicator
      messagesBox.insertAdjacentHTML('beforeend', `
        <div class="chat-msg-row chat-msg-agent" id="agent-typing-row">
          <div class="chat-avatar-thumb">${agent.icon}</div>
          <div class="chat-bubble chat-bubble-agent" style="padding:10px 14px;">
            <div class="chat-typing-dots">
              <span class="chat-dot"></span>
              <span class="chat-dot"></span>
              <span class="chat-dot"></span>
            </div>
          </div>
        </div>
      `);
      scrollChatToBottom();
    }

    const sendBtn = document.getElementById('agent-send-btn');
    const inputField = document.getElementById('agent-chat-input');
    if (sendBtn) sendBtn.disabled = true;
    if (inputField) inputField.disabled = true;

    try {
      // Build conversation contents payload for Gemini API
      const geminiContents = history.map(item => ({
        role: item.role === 'user' ? 'user' : 'model',
        parts: [{ text: item.text }]
      }));

      const payload = {
        systemInstruction: {
          parts: [{ text: agent.systemPrompt }]
        },
        contents: geminiContents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1200
        }
      };

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      let replyText = '';
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
        replyText = data.candidates[0].content.parts[0].text;
      } else if (data.error && data.error.message) {
        replyText = `Error: ${data.error.message}`;
      } else {
        replyText = "I've analyzed your inquiry. Let me provide a structured technical breakdown tailored to this scenario.";
      }

      history.push({ role: 'model', text: replyText });

      // Remove typing indicator
      const typingRow = document.getElementById('agent-typing-row');
      if (typingRow) typingRow.remove();

      if (messagesBox) {
        messagesBox.insertAdjacentHTML('beforeend', `
          <div class="chat-msg-row chat-msg-agent">
            <div class="chat-avatar-thumb">${agent.icon}</div>
            <div class="chat-bubble chat-bubble-agent">
              ${formatMarkdownToHTML(replyText)}
            </div>
          </div>
        `);
        scrollChatToBottom();
      }

    } catch (err) {
      console.error('Gemini API call failed:', err);
      const typingRow = document.getElementById('agent-typing-row');
      if (typingRow) typingRow.remove();

      if (messagesBox) {
        messagesBox.insertAdjacentHTML('beforeend', `
          <div class="chat-msg-row chat-msg-agent">
            <div class="chat-avatar-thumb">${agent.icon}</div>
            <div class="chat-bubble chat-bubble-agent" style="color:#ef4444; border-color:#fecaca; background:#fff5f5;">
              ⚠️ Network / API Error: Could not connect to Gemini AI. Please verify your connection or try again.
            </div>
          </div>
        `);
        scrollChatToBottom();
      }
    } finally {
      if (sendBtn) sendBtn.disabled = false;
      if (inputField) {
        inputField.disabled = false;
        inputField.focus();
      }
    }
  }

  function scrollChatToBottom() {
    const box = document.getElementById('agent-chat-messages-box');
    if (box) {
      setTimeout(() => {
        box.scrollTop = box.scrollHeight;
      }, 50);
    }
  }

  function formatMarkdownToHTML(text) {
    if (!text) return '';
    let formatted = escapeHtml(text);

    // Code blocks ```code```
    formatted = formatted.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre><code>${code.trim()}</code></pre>`;
    });

    // Inline code `code`
    formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Headings ### Heading
    formatted = formatted.replace(/^### (.*$)/gim, '<h4>$1</h4>');
    formatted = formatted.replace(/^## (.*$)/gim, '<h3>$1</h3>');
    formatted = formatted.replace(/^# (.*$)/gim, '<h3>$1</h3>');

    // Bold **text**
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Italic *text*
    formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Bullet points * or -
    formatted = formatted.replace(/^\s*[\-\*]\s+(.*$)/gim, '<li>$1</li>');
    formatted = formatted.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>');

    // Clean multiple nested ul tags
    formatted = formatted.replace(/<\/ul>\s*<ul>/g, '');

    // Line breaks
    formatted = formatted.replace(/\n\n/g, '<br/><br/>');
    formatted = formatted.replace(/\n/g, '<br/>');

    return formatted;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // --- 8. ACHIEVEMENTS PAGE ---
  function renderAchievementsPage() {
    if (!mainContentEl) return;

    mainContentEl.innerHTML = `
      <div class="subpage-container">
        <div class="subpage-header">
          <div>
            <h2 class="subpage-title">Key Highlights & Achievements</h2>
            <p class="subpage-subtitle">Recognized engineering milestones</p>
          </div>
        </div>

        <div class="timeline-list">
          ${resumeData.achievements.map(a => `
            <div class="timeline-item-card">
              <h3 class="timeline-role" style="font-size:1rem; color:var(--text-title);">${a.title}</h3>
              <p style="font-size:0.84rem; color:var(--text-body);">${a.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --- 8. CONTACT PAGE ---
  function renderContactPage() {
    if (!mainContentEl) return;

    mainContentEl.innerHTML = `
      <div class="subpage-container">
        <div class="subpage-header">
          <div>
            <h2 class="subpage-title">Let's Build Something Meaningful.</h2>
            <p class="subpage-subtitle">Get in touch for engineering roles, technical collaboration, and opportunities.</p>
          </div>
        </div>

        <div class="timeline-item-card" style="background:#ffffff; padding:32px; border:1px solid var(--border-gold); box-shadow:var(--shadow-card-hover);">
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
              <div style="display:flex; align-items:center; gap:14px;">
                <div class="photo-circle-wrapper" style="width:64px; height:64px;">
                  <img src="${resumeData.profile.photoUrl}" alt="${resumeData.profile.name}" />
                </div>
                <div>
                  <div style="display:flex; align-items:center; gap:6px;">
                    <strong style="font-family:var(--font-heading); font-size:1.35rem; color:var(--text-title);">${resumeData.profile.name}</strong>
                    <span class="hero-verified-badge" style="width:18px; height:18px; font-size:0.65rem;">✓</span>
                  </div>
                  <div style="font-size:0.88rem; font-weight:700; color:var(--accent-gold-dark);">${resumeData.profile.title}</div>
                  <div style="font-size:0.78rem; color:var(--text-muted);">${resumeData.profile.positioning}</div>
                </div>
              </div>
              <span class="photo-status-badge">
                <span class="status-dot-green"></span>
                <span>${resumeData.profile.status}</span>
              </span>
            </div>

            <p style="font-size:0.90rem; line-height:1.6; color:var(--text-body);">
              ${resumeData.profile.summary}
            </p>

            <div class="contact-pills-row" style="margin:4px 0;">
              <a href="${resumeData.contact.emailLink}" class="contact-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>${resumeData.contact.email}</span>
              </a>
              <a href="${resumeData.contact.phoneLink}" class="contact-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>${resumeData.contact.phone}</span>
              </a>
              <span class="contact-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>${resumeData.contact.location}</span>
              </span>
              <a href="${resumeData.contact.linkedinLink}" target="_blank" rel="noopener noreferrer" class="contact-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span>${resumeData.contact.linkedin}</span>
              </a>
            </div>

            <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:8px;">
              <a href="${resumeData.contact.emailLink}" class="btn-top-primary">Email Syed Hamza →</a>
              <a href="${resumeData.contact.linkedinLink}" target="_blank" class="btn-top-secondary">Connect on LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // 4. GLOBAL INTERACTION HELPERS (Sharing, QR, Toast)
  // ==========================================================================
  function shareResumeLink() {
    if (navigator.share) {
      navigator.share({
        title: `${resumeData.profile.name} — Resume`,
        text: `${resumeData.profile.name} — ${resumeData.profile.title}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Resume link copied to clipboard');
    }
  }

  function showToast(msg) {
    let toast = document.getElementById('action-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 2600);
  }

  function renderQrCodeInElement(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const matrix = [
      "111111101010101111111",
      "100000101101001000001",
      "101110100110101011101",
      "101110101001101011101",
      "101110101100001011101",
      "100000101010101000001",
      "111111101010101111111",
      "000000001110000000000",
      "101101110011010110101",
      "010010011010101001110",
      "110101101010110101011",
      "001100100111001011001",
      "101011011010101101010",
      "000000001011011001101",
      "111111101100101010101",
      "100000100110101100110",
      "101110101011010011001",
      "101110101101101010101",
      "101110100110011101010",
      "100000101010110101101",
      "111111101101010101011"
    ];
    const size = matrix.length;
    let path = '';
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (matrix[r][c] === '1') path += `M${c},${r}h1v1h-1z `;
      }
    }
    el.innerHTML = `
      <svg viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges">
        <rect width="${size}" height="${size}" fill="#ffffff" />
        <path d="${path}" fill="#0f141c" />
      </svg>
    `;
  }

  // ==========================================================================
  // 5. SIDEBAR & RAIL EVENT BINDINGS
  // ==========================================================================
  function initNavClicks() {
    // Profile Sidebar items
    document.querySelectorAll('.nav-item-card').forEach(item => {
      item.addEventListener('click', () => {
        const navTarget = item.getAttribute('data-nav');
        closeMobileDrawer();
        window.location.hash = navTarget === 'overview' ? '#/resume' : `#/resume/${navTarget}`;
      });
    });

    // Left Rail icons
    document.querySelectorAll('.rail-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const railTarget = btn.getAttribute('data-rail');
        closeMobileDrawer();
        window.location.hash = railTarget === 'overview' ? '#/resume' : `#/resume/${railTarget}`;
      });
    });

    // Mobile Horizontal Pills
    document.querySelectorAll('.m-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        closeMobileDrawer();
        const navTarget = pill.getAttribute('data-mnav');
        window.location.hash = navTarget === 'overview' ? '#/resume' : `#/resume/${navTarget}`;
      });
    });

    // Mobile Bottom Dock Items
    document.querySelectorAll('.m-dock-item').forEach(dockItem => {
      dockItem.addEventListener('click', () => {
        closeMobileDrawer();
        const navTarget = dockItem.getAttribute('data-mdock');
        window.location.hash = navTarget === 'overview' ? '#/resume' : `#/resume/${navTarget}`;
      });
    });

    // Mobile Drawer Triggers
    const drawerToggle = document.getElementById('mobile-drawer-toggle');
    if (drawerToggle) {
      drawerToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const sidebar = document.getElementById('profile-sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      });
    }

    const profileToggle = document.getElementById('mobile-profile-toggle');
    if (profileToggle) {
      profileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const sidebar = document.getElementById('profile-sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      });
    }

    const sidebarClose = document.getElementById('sidebar-close-btn');
    if (sidebarClose) {
      sidebarClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMobileDrawer();
      });
    }

    const backdrop = document.getElementById('sidebar-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', closeMobileDrawer);
      backdrop.addEventListener('touchstart', closeMobileDrawer, { passive: true });
    }

    // Touch swipe left to close drawer
    const sidebar = document.getElementById('profile-sidebar');
    if (sidebar) {
      let touchStartX = 0;
      sidebar.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });

      sidebar.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchEndX - touchStartX < -50) { // Swiped left by > 50px
          closeMobileDrawer();
        }
      }, { passive: true });
    }

    // Keyboard support: Escape closes mobile drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileDrawer();
    });

    // Mobile Header Quick Actions
    const mobileExportBtn = document.getElementById('mobile-export-btn');
    if (mobileExportBtn) mobileExportBtn.addEventListener('click', () => window.print());

    const mobileShareBtn = document.getElementById('mobile-share-btn');
    if (mobileShareBtn) mobileShareBtn.addEventListener('click', shareResumeLink);

    const shareBtn = document.getElementById('sidebar-share-btn');
    if (shareBtn) shareBtn.addEventListener('click', shareResumeLink);
  }

  // ==========================================================================
  // 6. INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initNavClicks();
    initRouter();
  });

})();
