/* ==========================================================================
   SKILL DEEP DIVE MODAL CONTROLLER & INTERACTION ENGINE
   Reusable interactive technical deep-dive modal controller
   Author: Syed Hamza Resume OS
   ========================================================================== */

(function(window) {
  'use strict';

  // Map display strings to skill data keys
  const NAME_TO_ID_MAP = {
    'llm integration': 'llm-integration',
    'prompt engineering': 'prompt-engineering',
    'ai application development': 'ai-application-development',
    'ai workflows': 'ai-workflows',
    'vector db': 'vector-db',
    'claude & openai apis': 'claude-openai-apis',
    'react': 'react',
    'next.js 14+': 'next-js-14',
    'next.js': 'next-js-14',
    'typescript': 'typescript',
    'modern javascript': 'modern-javascript',
    'javascript': 'modern-javascript',
    'html5': 'html5',
    'css3': 'css3',
    'responsive architecture': 'responsive-architecture',
    'animation systems': 'animation-systems',
    'tailwind': 'tailwind',
    'node.js': 'node-js',
    'express': 'express',
    'rest apis': 'rest-apis',
    'authentication (jwt/oauth)': 'authentication-jwt-oauth',
    'server-side architecture': 'server-side-architecture',
    'middleware': 'middleware',
    'supabase': 'supabase',
    'postgresql': 'postgresql',
    'relational schema design': 'relational-schema-design',
    'row-level security (rls)': 'row-level-security-rls',
    'rls': 'row-level-security-rls',
    'sql optimization': 'sql-optimization',
    'vercel edge': 'vercel-edge',
    'docker': 'docker',
    'git / github ci/cd': 'git-github-ci-cd',
    'linux / wsl': 'linux-wsl',
    'postman': 'postman',
    'system design': 'system-design',
    'api architecture': 'api-architecture',
    'problem solving': 'problem-solving',
    'product engineering': 'product-engineering',
    'embedded c/c++': 'embedded-c-c',
    'signal processing': 'signal-processing'
  };

  let modalBackdropEl = null;
  let modalContainerEl = null;
  let lastFocusedElement = null;
  let activeFlowInterval = null;

  function normalizeSkillKey(input) {
    if (!input) return null;
    const clean = input.toLowerCase().trim();
    return NAME_TO_ID_MAP[clean] || clean.replace(/[^a-z0-9]+/g, '-');
  }

  function getSkillData(identifier) {
    if (!window.SKILLS_DATA) return null;
    const key = normalizeSkillKey(identifier);
    return window.SKILLS_DATA[key] || null;
  }

  function ensureModalInDOM() {
    if (modalBackdropEl) return;

    modalBackdropEl = document.createElement('div');
    modalBackdropEl.id = 'skill-deep-dive-modal';
    modalBackdropEl.className = 'skill-modal-backdrop no-print';
    modalBackdropEl.setAttribute('role', 'dialog');
    modalBackdropEl.setAttribute('aria-modal', 'true');
    modalBackdropEl.setAttribute('aria-hidden', 'true');

    modalBackdropEl.innerHTML = `
      <div class="skill-modal-container" id="skill-modal-container">
        <!-- Dynamic content injected here -->
      </div>
    `;

    document.body.appendChild(modalBackdropEl);

    // Close on backdrop click
    modalBackdropEl.addEventListener('click', (e) => {
      if (e.target === modalBackdropEl) {
        closeSkillModal();
      }
    });

    // Keyboard support: Escape closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdropEl.classList.contains('active')) {
        closeSkillModal();
      }
    });
  }

  function openSkillModal(skillIdentifier) {
    const data = getSkillData(skillIdentifier);
    if (!data) {
      console.warn(`Skill deep-dive data not found for: ${skillIdentifier}`);
      return;
    }

    ensureModalInDOM();
    lastFocusedElement = document.activeElement;

    modalContainerEl = document.getElementById('skill-modal-container');
    if (!modalContainerEl) return;

    // Render modal HTML
    modalContainerEl.innerHTML = `
      <!-- Modal Header -->
      <header class="skill-modal-header">
        <div class="skill-modal-header-left">
          <div class="skill-modal-badges-row">
            <span class="skill-category-badge">${data.category}</span>
            <span class="skill-depth-badge">${data.depthLevel}</span>
          </div>
          <h2 class="skill-modal-title">
            <span>${data.name}</span>
          </h2>
          <p class="skill-modal-summary">${data.shortDescription}</p>
        </div>
        <button class="skill-modal-close-btn" id="modal-close-btn" title="Close Deep Dive (Esc)" aria-label="Close Deep Dive">&times;</button>
      </header>

      <!-- Modal Body -->
      <div class="skill-modal-body" id="skill-modal-body">
        
        <!-- 01. What Is It? (Progressive Disclosure) -->
        <section class="deep-dive-section">
          <div class="section-num-tag">01 — CONCEPT & MENTAL MODEL</div>
          <h3 class="section-title">What Is It & Why It Exists</h3>
          <div class="disclosure-grid">
            <div class="disclosure-card">
              <span class="disclosure-level-label">🟢 Simple Explanation</span>
              <p class="disclosure-text">${data.whatIsIt.simple}</p>
            </div>
            <div class="disclosure-card">
              <span class="disclosure-level-label">⚡ Technical Definition</span>
              <p class="disclosure-text">${data.whatIsIt.technical}</p>
            </div>
            <div class="disclosure-card">
              <span class="disclosure-level-label">🧠 Engineering Perspective</span>
              <p class="disclosure-text">${data.whatIsIt.engineeringPerspective}</p>
            </div>
          </div>
        </section>

        <!-- 02. How It Works (Interactive Flow Simulation) -->
        <section class="deep-dive-section">
          <div class="section-num-tag">02 — EXECUTION ARCHITECTURE</div>
          <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:8px;">
            <h3 class="section-title">How It Works</h3>
            <span style="font-size:0.78rem; color:var(--text-muted);">Step-by-step lifecycle execution</span>
          </div>

          <div class="flow-simulator-box">
            <div class="flow-sim-header">
              <div class="flow-sim-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold-light)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                <span>${data.howItWorks.title}</span>
              </div>
              <button class="btn-flow-play" id="btn-play-flow">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <span>Play Flow Simulator</span>
              </button>
            </div>

            <!-- Nodes Track -->
            <div class="flow-nodes-track" id="flow-nodes-track">
              ${data.howItWorks.nodes.map((node, i) => `
                <div class="flow-node-item ${i === 0 ? 'active' : ''}" data-node-index="${i}">
                  <span class="flow-node-step">0${i + 1}</span>
                  <span class="flow-node-name">${node}</span>
                </div>
                ${i < data.howItWorks.nodes.length - 1 ? '<span class="flow-arrow-sep">→</span>' : ''}
              `).join('')}
            </div>

            <!-- Detailed Steps Grid -->
            <div class="flow-steps-accordion">
              ${data.howItWorks.steps.map(s => `
                <div class="flow-step-card">
                  <strong>STEP ${s.step} — ${s.title}</strong>
                  <span>${s.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- 03. Interactive Code Sandbox -->
        <section class="deep-dive-section">
          <div class="section-num-tag">03 — IMPLEMENTATION ARTIFACT</div>
          <h3 class="section-title">Production Code Pattern</h3>
          
          <div class="code-sandbox-box">
            <div class="code-sandbox-header">
              <div class="code-window-dots">
                <span class="code-dot dot-red"></span>
                <span class="code-dot dot-yellow"></span>
                <span class="code-dot dot-green"></span>
              </div>
              <span class="code-lang-label">${data.codeExample.lang.toUpperCase()}</span>
            </div>
            <pre class="code-snippet-pre"><code>${escapeHtml(data.codeExample.code)}</code></pre>
            <div class="code-interactive-runner">
              <button class="btn-code-run" id="btn-run-code">
                <span>▶ Run Example Simulation</span>
              </button>
              <div class="code-sandbox-output" id="code-output-box">
                ${data.codeExample.demoOutput}
              </div>
            </div>
          </div>
        </section>

        <!-- 04. Problem Solved (Before vs After) -->
        <section class="deep-dive-section">
          <div class="section-num-tag">04 — ENGINEERING VALUE</div>
          <h3 class="section-title">What Problem Does It Solve?</h3>
          
          <div class="problem-comparison-grid">
            <div class="comparison-card before">
              <div class="comparison-card-head">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                <span>Without ${data.name}</span>
              </div>
              <ul class="comparison-list">
                ${data.problemSolved.without.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>

            <div class="comparison-card after">
              <div class="comparison-card-head">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                <span>With ${data.name}</span>
              </div>
              <ul class="comparison-list">
                ${data.problemSolved.with.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </section>

        <!-- 05. Where I Used It (Real Project Mapping) -->
        <section class="deep-dive-section">
          <div class="section-num-tag">05 — PRODUCTION APPLICATION</div>
          <div class="project-usage-box">
            <div class="proj-usage-header">
              <div class="proj-usage-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold-dark)" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                <span>Applied in ${data.whereIUsedIt.project}</span>
              </div>
              <span class="skill-category-badge">${data.whereIUsedIt.role}</span>
            </div>
            <p class="proj-usage-text">${data.whereIUsedIt.details}</p>
          </div>
        </section>

        <!-- 06. Decisions & Trade-offs -->
        <section class="deep-dive-section">
          <div class="section-num-tag">06 — PRAGMATIC EVALUATION</div>
          <h3 class="section-title">Engineering Decisions & Trade-offs</h3>

          <div style="background:var(--surface-elevated); border:1px solid var(--border-subtle); border-radius:14px; padding:16px; margin-bottom:12px;">
            <strong style="font-size:0.84rem; font-family:var(--font-heading); color:var(--text-title); display:block; margin-bottom:8px;">How I Think About It in Practice:</strong>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:6px; font-size:0.80rem; color:var(--text-body);">
              ${data.engineeringDecisions.map(d => `<li style="padding-left:14px; position:relative;"><span style="position:absolute; left:0; color:var(--accent-gold-dark);">▪</span>${d}</li>`).join('')}
            </ul>
          </div>

          <div class="tradeoffs-grid">
            <div class="tradeoff-column">
              <div class="tradeoff-heading">
                <span style="color:#16a34a;">✓</span>
                <span>Core Strengths</span>
              </div>
              <ul class="tradeoff-list">
                ${data.strengths.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>

            <div class="tradeoff-column">
              <div class="tradeoff-heading">
                <span style="color:#d97706;">⚠</span>
                <span>Architectural Trade-offs</span>
              </div>
              <ul class="tradeoff-list">
                ${data.tradeoffs.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
          </div>
        </section>

        <!-- 07. Ecosystem & Related Skills -->
        <section class="deep-dive-section">
          <div class="section-num-tag">07 — ECOSYSTEM & GRAPH</div>
          <h3 class="section-title">Related Technologies & Skills</h3>
          
          <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:10px;">
            ${data.ecosystem.map(e => `<span class="expertise-chip" style="font-size:0.72rem;">${e}</span>`).join('')}
          </div>

          <div class="related-skills-box">
            <span style="font-size:0.76rem; font-weight:700; color:var(--text-muted);">Explore Related Deep Dives:</span>
            ${data.relatedSkills.map(relId => {
              const relSkill = window.SKILLS_DATA[relId];
              const label = relSkill ? relSkill.name : relId;
              return `<button class="related-skill-chip" data-open-skill="${relId}">${label} ↗</button>`;
            }).join('')}
          </div>
        </section>

        <!-- 08. Interview Mode (Interactive Q&A) -->
        <section class="deep-dive-section">
          <div class="section-num-tag">08 — TECHNICAL READINESS</div>
          
          <div class="interview-mode-box">
            <div class="interview-header">
              <div style="display:flex; align-items:center; gap:8px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold-light)" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <strong style="font-family:var(--font-heading); font-size:1.05rem;">Interview Mode</strong>
              </div>
              <span class="interview-badge">Senior / Staff Level Q&A</span>
            </div>

            <p style="font-size:0.80rem; color:#94a3b8; line-height:1.45;">
              Common technical interview questions with verified architectural answers demonstrating practical depth.
            </p>

            <div class="interview-questions-list">
              ${data.interviewQuestions.map((item, idx) => `
                <div class="interview-q-item ${idx === 0 ? 'open' : ''}">
                  <button class="interview-q-trigger" type="button">
                    <span>Q: ${item.q}</span>
                    <span class="q-toggle-icon">${idx === 0 ? '▲' : '▼'}</span>
                  </button>
                  <div class="interview-q-answer">
                    <p>${item.a}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

      </div>

      <!-- Modal Footer -->
      <footer class="skill-modal-footer">
        <button class="btn-top-secondary" id="modal-view-projects-btn">
          <span>View Related Projects →</span>
        </button>
        <button class="btn-top-primary" id="modal-close-footer-btn">
          <span>Close Deep Dive ×</span>
        </button>
      </footer>
    `;

    // Show modal
    modalBackdropEl.classList.add('active');
    modalBackdropEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook internal event listeners
    hookModalEventListeners(data);

    // Scroll modal body to top
    const bodyEl = document.getElementById('skill-modal-body');
    if (bodyEl) bodyEl.scrollTop = 0;

    // Focus close button
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function hookModalEventListeners(data) {
    // 1. Close buttons
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeSkillModal);

    const closeFooterBtn = document.getElementById('modal-close-footer-btn');
    if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeSkillModal);

    const viewProjectsBtn = document.getElementById('modal-view-projects-btn');
    if (viewProjectsBtn) {
      viewProjectsBtn.addEventListener('click', () => {
        closeSkillModal();
        window.location.hash = '#/resume/projects';
      });
    }

    // 2. Play Flow Simulator
    const playBtn = document.getElementById('btn-play-flow');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        runFlowSimulation(data.howItWorks.nodes.length);
      });
    }

    // 3. Run Code Simulation
    const runCodeBtn = document.getElementById('btn-run-code');
    const codeOutputBox = document.getElementById('code-output-box');
    if (runCodeBtn && codeOutputBox) {
      runCodeBtn.addEventListener('click', () => {
        codeOutputBox.innerHTML = '<span style="color:#f59e0b;">[Executing sandbox...]</span>';
        setTimeout(() => {
          codeOutputBox.innerHTML = `<span style="color:#22c55e;">✔ OK:</span> ${data.codeExample.demoOutput}`;
        }, 320);
      });
    }

    // 4. Interview Accordion Triggers
    const qItems = document.querySelectorAll('.interview-q-item');
    qItems.forEach(item => {
      const trigger = item.querySelector('.interview-q-trigger');
      const icon = item.querySelector('.q-toggle-icon');
      if (trigger) {
        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          // Close others
          qItems.forEach(other => {
            other.classList.remove('open');
            const otherIcon = other.querySelector('.q-toggle-icon');
            if (otherIcon) otherIcon.textContent = '▼';
          });
          if (!isOpen) {
            item.classList.add('open');
            if (icon) icon.textContent = '▲';
          }
        });
      }
    });

    // 5. Related Skills Navigation Links
    const relBtns = document.querySelectorAll('[data-open-skill]');
    relBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const skillKey = btn.getAttribute('data-open-skill');
        openSkillModal(skillKey);
      });
    });
  }

  function runFlowSimulation(nodeCount) {
    if (activeFlowInterval) clearInterval(activeFlowInterval);
    const nodes = document.querySelectorAll('.flow-node-item');
    nodes.forEach(n => n.classList.remove('active'));

    let currentIndex = 0;
    if (nodes[0]) nodes[0].classList.add('active');

    activeFlowInterval = setInterval(() => {
      nodes.forEach(n => n.classList.remove('active'));
      currentIndex = (currentIndex + 1) % nodeCount;
      if (nodes[currentIndex]) {
        nodes[currentIndex].classList.add('active');
        nodes[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      }
    }, 700);

    // Stop after 2 full cycles
    setTimeout(() => {
      if (activeFlowInterval) clearInterval(activeFlowInterval);
    }, nodeCount * 1400);
  }

  function closeSkillModal() {
    if (!modalBackdropEl) return;
    if (activeFlowInterval) clearInterval(activeFlowInterval);
    modalBackdropEl.classList.remove('active');
    modalBackdropEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Global Click Delegator for Skill Chips
  function initSkillClickListeners() {
    document.addEventListener('click', (e) => {
      const skillPill = e.target.closest('.interactive-skill-pill') || e.target.closest('[data-skill-name]');
      if (skillPill) {
        const skillName = skillPill.getAttribute('data-skill-name') || skillPill.textContent.replace('↗', '').trim();
        openSkillModal(skillName);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const skillPill = e.target.closest('.interactive-skill-pill') || e.target.closest('[data-skill-name]');
        if (skillPill && document.activeElement === skillPill) {
          e.preventDefault();
          const skillName = skillPill.getAttribute('data-skill-name') || skillPill.textContent.replace('↗', '').trim();
          openSkillModal(skillName);
        }
      }
    });
  }

  // Expose API to global window object
  window.SkillDeepDive = {
    open: openSkillModal,
    close: closeSkillModal,
    init: initSkillClickListeners
  };

  document.addEventListener('DOMContentLoaded', () => {
    initSkillClickListeners();
  });

})(window);
