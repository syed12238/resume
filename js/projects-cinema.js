/**
 * SYED HAMZA — FULL-SCREEN CINEMATIC INTERACTIVE PROJECT LIBRARY ENGINE
 * Handles full-screen takeover, synchronized transitions, mouse wheel shelf scrolling,
 * keyboard controls (← / → / Esc / Enter), touch swipe gestures, and deep-dive case studies.
 */

(function (window) {
  'use strict';

  let currentProjectIndex = 0;
  let isTransitioning = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let keydownHandler = null;
  let lastResumeRoute = '#/resume';

  /**
   * Sets the previous resume route to return to when clicking "← Back to Resume".
   */
  function setLastResumeRoute(route) {
    if (route && route !== '#/resume/projects') {
      lastResumeRoute = route;
    }
  }

  function getLastResumeRoute() {
    return lastResumeRoute || '#/resume';
  }

  /**
   * Shows a sleek toast notification inside cinema mode.
   */
  function showCinemaToast(message) {
    const toast = document.getElementById('cinema-toast');
    const toastText = document.getElementById('cinema-toast-text');
    if (!toast) return;
    if (toastText) toastText.textContent = message || 'Coming Soon — Live platform demo is currently in active development.';
    toast.classList.add('is-visible');
    
    if (toast._timer) clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  }

  /**
   * Initializes the Full-Screen Cinematic Projects Theater.
   */
  function initCinematicProjects(mountElement) {
    if (!mountElement || !window.PROJECTS_DATA || window.PROJECTS_DATA.length === 0) return;

    // Clean up previous event listeners if any
    if (keydownHandler) {
      window.removeEventListener('keydown', keydownHandler);
      keydownHandler = null;
    }

    // 1. Activate Full-Screen Viewport Mode
    document.body.classList.add('cinema-fullscreen-active');
    document.body.style.overflow = 'hidden';

    const data = window.PROJECTS_DATA;
    const initialProject = data[currentProjectIndex] || data[0];
    const isInitialSoon = initialProject.isComingSoon || !initialProject.links.live;

    // 2. Build Full-Screen Theater UI
    mountElement.innerHTML = `
      <div class="cinema-theater-container" id="cinema-theater" style="--project-accent:${initialProject.accentColor}; --project-accent-glow:${initialProject.accentGlow}; --project-accent-grad:${initialProject.accentGradient};">
        
        <!-- 1. Dynamic Hero Backdrop Layer -->
        <div class="cinema-backdrop-layer">
          <div class="cinema-backdrop-canvas" id="cinema-backdrop-canvas">
            ${initialProject.artworkSvg}
          </div>
          <div class="cinema-ambient-spotlight" id="cinema-spotlight"></div>
          <div class="cinema-vignette-overlay"></div>
          <div class="cinema-grain-overlay"></div>
        </div>

        <!-- 2. Top Navigation Bar with Small "← Back to Resume" -->
        <header class="cinema-top-bar">
          <div class="cinema-top-left-group">
            <button class="btn-back-to-resume" id="cinema-back-to-resume-btn" aria-label="Return to Resume">
              <svg class="back-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
              <span>Back to Resume</span>
            </button>

            <div class="cinema-section-eyebrow">
              <span class="cinema-eyebrow-dot"></span>
              <span>SELECTED WORK</span>
            </div>
          </div>

          <div class="cinema-top-right-group">
            <span class="cinema-keyboard-hint">← / → to browse · Esc to exit</span>
            <div class="cinema-counter-badge" id="cinema-counter-badge">
              <span class="current">${initialProject.number}</span> / <span class="total">${String(data.length).padStart(2, '0')}</span>
            </div>
          </div>
        </header>

        <!-- 3. Center Hero Project Stage (Dominant Selected Project) -->
        <section class="cinema-hero-stage" aria-label="Featured Project Details">
          <div class="cinema-hero-content" id="cinema-hero-content">
            <div class="cinema-project-number-row">
              <span class="cinema-huge-num" id="cinema-hero-num">${initialProject.number}</span>
              <span class="cinema-project-category" id="cinema-hero-category">${initialProject.category}</span>
            </div>

            <h1 class="cinema-project-title" id="cinema-hero-title">${initialProject.title}</h1>
            <p class="cinema-project-tagline" id="cinema-hero-tagline">${initialProject.tagline}</p>

            <div class="cinema-tech-cloud" id="cinema-hero-tech">
              ${initialProject.technologies.map(t => `<span class="cinema-tech-chip">${t.name}</span>`).join('')}
            </div>

            <div class="cinema-action-row">
              <button class="btn-cinema-primary" id="cinema-view-case-study-btn" data-project-id="${initialProject.id}">
                <span>VIEW CASE STUDY</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>

              <a href="${isInitialSoon ? 'javascript:void(0)' : initialProject.links.live}" 
                 ${isInitialSoon ? '' : 'target="_blank" rel="noopener noreferrer"'} 
                 class="btn-cinema-secondary" 
                 id="cinema-live-demo-btn" 
                 data-coming-soon="${isInitialSoon ? 'true' : 'false'}">
                <span>OPEN</span>
                ${isInitialSoon ? '<span class="cinema-soon-tag">SOON</span>' : ''}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>

            <div class="cinema-metrics-strip" id="cinema-hero-metrics">
              ${initialProject.metrics.map(m => `
                <div class="cinema-metric-item">
                  <span class="cinema-metric-val">${m.value}</span>
                  <span class="cinema-metric-lbl">${m.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- 4. Bottom Horizontal Project Shelf -->
        <footer class="cinema-shelf-section">
          <div class="cinema-shelf-header">
            <div class="cinema-shelf-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span>PROJECT ARCHIVE (← / → TO BROWSE)</span>
            </div>
            
            <div class="cinema-shelf-arrows">
              <button class="cinema-shelf-arrow-btn" id="cinema-prev-btn" title="Previous Project (Left Arrow)" aria-label="Previous Project">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button class="cinema-shelf-arrow-btn" id="cinema-next-btn" title="Next Project (Right Arrow)" aria-label="Next Project">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>

          <div class="cinema-shelf-track" id="cinema-shelf-track" role="tablist" aria-label="Projects Collection Shelf">
            ${data.map((proj, idx) => `
              <div 
                class="cinema-shelf-card ${idx === currentProjectIndex ? 'is-active' : ''}" 
                data-project-index="${idx}" 
                role="tab" 
                tabindex="0"
                aria-selected="${idx === currentProjectIndex ? 'true' : 'false'}"
                aria-label="Project ${proj.number}: ${proj.title}"
                style="--card-accent:${proj.accentColor}; --card-glow:${proj.accentGlow};">
                <div class="cinema-shelf-card-top">
                  <span class="cinema-card-num">${proj.number}</span>
                  <span class="cinema-card-cat-badge">${proj.technologies[0] ? proj.technologies[0].name : ''}</span>
                </div>
                <div class="cinema-shelf-card-bottom">
                  <h3 class="cinema-card-title">${proj.shortTitle || proj.title}</h3>
                  <div class="cinema-card-role">${proj.category}</div>
                </div>
                <div class="cinema-card-active-indicator"></div>
              </div>
            `).join('')}
          </div>
        </footer>

        <!-- 5. Deep-Dive Case Study Modal Drawer -->
        <div class="cinema-case-study-backdrop" id="cinema-case-study-modal-backdrop" aria-hidden="true" role="dialog">
          <div class="cinema-case-study-modal" id="cinema-case-study-modal-content">
            <!-- Dynamically populated by openCaseStudyModal -->
          </div>
        </div>

        <!-- 6. Cinema Toast Notification -->
        <div class="cinema-toast" id="cinema-toast" aria-live="polite">
          <span class="cinema-toast-icon">⚡</span>
          <span class="cinema-toast-text" id="cinema-toast-text">Coming Soon — Live platform demo is currently in active development.</span>
        </div>

      </div>
    `;

    // Hook all interaction listeners
    bindCinemaEventListeners();
  }

  /**
   * Binds interaction event listeners: keyboard, wheel, touch, clicks, back navigation.
   */
  function bindCinemaEventListeners() {
    const theater = document.getElementById('cinema-theater');
    const track = document.getElementById('cinema-shelf-track');
    const prevBtn = document.getElementById('cinema-prev-btn');
    const nextBtn = document.getElementById('cinema-next-btn');
    const backBtn = document.getElementById('cinema-back-to-resume-btn');
    const caseStudyBtn = document.getElementById('cinema-view-case-study-btn');
    const modalBackdrop = document.getElementById('cinema-case-study-modal-backdrop');
    const liveBtn = document.getElementById('cinema-live-demo-btn');

    // 1. "← Back to Resume" Button Click
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        exitToResume();
      });
    }

    // 2. Shelf Cards Click & Wheel
    if (track) {
      track.addEventListener('click', (e) => {
        const card = e.target.closest('.cinema-shelf-card');
        if (card) {
          const index = parseInt(card.getAttribute('data-project-index'), 10);
          if (!isNaN(index) && index !== currentProjectIndex) {
            selectProject(index);
          }
        }
      });

      track.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          track.scrollLeft += e.deltaY * 1.5;
        }
      }, { passive: false });
    }

    // 3. Previous / Next Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        navigateProjects(-1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        navigateProjects(1);
      });
    }

    // 4. Case Study Button Click
    if (caseStudyBtn) {
      caseStudyBtn.addEventListener('click', () => {
        const proj = window.PROJECTS_DATA[currentProjectIndex];
        if (proj) openCaseStudyModal(proj);
      });
    }

    // 5. Open / Live Demo Button Click
    if (liveBtn) {
      liveBtn.addEventListener('click', (e) => {
        const isSoon = liveBtn.getAttribute('data-coming-soon') === 'true';
        if (isSoon) {
          e.preventDefault();
          showCinemaToast('✨ Coming Soon — Live platform demo is currently in active development.');
        }
      });
    }

    // 6. Modal Backdrop Click (to close)
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
          closeCaseStudyModal();
        }
      });
    }

    // 7. Global Keyboard Controller
    keydownHandler = (e) => {
      const modalOpen = modalBackdrop && modalBackdrop.classList.contains('is-open');
      if (modalOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeCaseStudyModal();
        }
        return;
      }

      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateProjects(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateProjects(1);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        exitToResume();
      } else if (e.key === 'Enter') {
        const proj = window.PROJECTS_DATA[currentProjectIndex];
        if (proj) {
          e.preventDefault();
          openCaseStudyModal(proj);
        }
      }
    };

    window.addEventListener('keydown', keydownHandler);

    // 8. Touch Swipe Detection
    if (theater) {
      theater.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      theater.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        handleSwipeGesture(touchStartX, touchStartY, touchEndX, touchEndY);
      }, { passive: true });
    }
  }

  /**
   * Smoothly exits full-screen cinema mode and restores previous resume section.
   */
  function exitToResume() {
    const theater = document.getElementById('cinema-theater');
    if (theater) {
      theater.classList.add('is-exiting');
      setTimeout(() => {
        cleanupCinematicProjects();
        const target = getLastResumeRoute();
        window.location.hash = target || '#/resume';
      }, 350);
    } else {
      cleanupCinematicProjects();
      window.location.hash = getLastResumeRoute();
    }
  }

  /**
   * Evaluates swipe gestures to switch projects.
   */
  function handleSwipeGesture(startX, startY, endX, endY) {
    const diffX = endX - startX;
    const diffY = endY - startY;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        navigateProjects(1); // Swipe left -> Next
      } else {
        navigateProjects(-1); // Swipe right -> Prev
      }
    }
  }

  /**
   * Moves project index by delta (-1 or +1).
   */
  function navigateProjects(direction) {
    const data = window.PROJECTS_DATA;
    if (!data || data.length === 0) return;

    let nextIndex = currentProjectIndex + direction;
    if (nextIndex < 0) nextIndex = data.length - 1;
    if (nextIndex >= data.length) nextIndex = 0;

    selectProject(nextIndex);
  }

  /**
   * Synchronized project selection transition.
   */
  function selectProject(index) {
    const data = window.PROJECTS_DATA;
    if (!data || !data[index] || (index === currentProjectIndex && isTransitioning)) return;

    isTransitioning = true;
    currentProjectIndex = index;
    const proj = data[index];

    const theater = document.getElementById('cinema-theater');
    const heroContent = document.getElementById('cinema-hero-content');
    const backdropCanvas = document.getElementById('cinema-backdrop-canvas');
    const counterBadge = document.getElementById('cinema-counter-badge');
    const track = document.getElementById('cinema-shelf-track');

    // 1. Update Root Theater Accent Variables
    if (theater) {
      theater.style.setProperty('--project-accent', proj.accentColor);
      theater.style.setProperty('--project-accent-glow', proj.accentGlow);
      theater.style.setProperty('--project-accent-grad', proj.accentGradient);
    }

    // 2. Animate Hero Content Out
    if (heroContent) {
      heroContent.classList.add('is-transitioning');
    }

    // 3. Update Shelf Cards Active State
    if (track) {
      const cards = track.querySelectorAll('.cinema-shelf-card');
      cards.forEach((card, idx) => {
        if (idx === index) {
          card.classList.add('is-active');
          card.setAttribute('aria-selected', 'true');
          card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
          card.classList.remove('is-active');
          card.setAttribute('aria-selected', 'false');
        }
      });
    }

    // 4. Update Top Counter
    if (counterBadge) {
      counterBadge.innerHTML = `<span class="current">${proj.number}</span> / <span class="total">${String(data.length).padStart(2, '0')}</span>`;
    }

    // 5. Replace Hero Visual & Typography after micro-delay
    setTimeout(() => {
      if (backdropCanvas) {
        backdropCanvas.innerHTML = proj.artworkSvg;
      }

      const numEl = document.getElementById('cinema-hero-num');
      const catEl = document.getElementById('cinema-hero-category');
      const titleEl = document.getElementById('cinema-hero-title');
      const tagEl = document.getElementById('cinema-hero-tagline');
      const techEl = document.getElementById('cinema-hero-tech');
      const metricsEl = document.getElementById('cinema-hero-metrics');
      const liveBtn = document.getElementById('cinema-live-demo-btn');

      if (numEl) numEl.textContent = proj.number;
      if (catEl) catEl.textContent = proj.category;
      if (titleEl) titleEl.textContent = proj.title;
      if (tagEl) tagEl.textContent = proj.tagline;

      if (techEl) {
        techEl.innerHTML = proj.technologies.map(t => `<span class="cinema-tech-chip">${t.name}</span>`).join('');
      }

      if (metricsEl) {
        metricsEl.innerHTML = proj.metrics.map(m => `
          <div class="cinema-metric-item">
            <span class="cinema-metric-val">${m.value}</span>
            <span class="cinema-metric-lbl">${m.label}</span>
          </div>
        `).join('');
      }

      if (liveBtn) {
        const isSoon = proj.isComingSoon || !proj.links.live;
        liveBtn.setAttribute('data-coming-soon', isSoon ? 'true' : 'false');
        if (isSoon) {
          liveBtn.href = 'javascript:void(0)';
          liveBtn.removeAttribute('target');
          liveBtn.removeAttribute('rel');
          liveBtn.innerHTML = `
            <span>OPEN</span>
            <span class="cinema-soon-tag">SOON</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          `;
        } else {
          liveBtn.href = proj.links.live;
          liveBtn.target = '_blank';
          liveBtn.rel = 'noopener noreferrer';
          liveBtn.innerHTML = `
            <span>OPEN</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          `;
        }
        liveBtn.style.display = 'inline-flex';
      }

      if (heroContent) {
        heroContent.classList.remove('is-transitioning');
      }

      setTimeout(() => {
        isTransitioning = false;
      }, 300);

    }, 220);
  }

  /**
   * Opens the Case Study Modal for a selected project.
   */
  function openCaseStudyModal(proj) {
    const modalBackdrop = document.getElementById('cinema-case-study-modal-backdrop');
    const modalContent = document.getElementById('cinema-case-study-modal-content');
    if (!modalBackdrop || !modalContent || !proj) return;

    const isSoon = proj.isComingSoon || !proj.links.live;

    modalContent.style.setProperty('--modal-accent', proj.accentColor);
    modalContent.innerHTML = `
      <div class="cinema-modal-header">
        <div class="cinema-modal-title-group">
          <span class="cinema-modal-eyebrow">CASE STUDY // ${proj.number}</span>
          <h2 class="cinema-modal-title">${proj.title}</h2>
        </div>
        <button class="cinema-modal-close-btn" id="cinema-modal-close-btn" aria-label="Close Case Study">&times;</button>
      </div>

      <div class="cinema-modal-body">
        <div class="cinema-modal-section">
          <h3 class="cinema-modal-section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <span>Overview & Technical Headline</span>
          </h3>
          <p class="cinema-modal-text" style="font-weight:600; color:#ffffff;">${proj.caseStudy.headline}</p>
          <p class="cinema-modal-text">${proj.summary}</p>
        </div>

        <div class="cinema-modal-section">
          <h3 class="cinema-modal-section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>The Architectural Challenge</span>
          </h3>
          <p class="cinema-modal-text">${proj.caseStudy.challenge}</p>
        </div>

        <div class="cinema-modal-section">
          <h3 class="cinema-modal-section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            <span>System Architecture & Engineering Decisions</span>
          </h3>
          <ul class="cinema-modal-bullets">
            ${proj.caseStudy.architecture.map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>

        ${proj.caseStudy.codeSnippet ? `
          <div class="cinema-modal-section">
            <h3 class="cinema-modal-section-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <span>Production Code Implementation</span>
            </h3>
            <pre class="cinema-code-preview"><code>${escapeHtml(proj.caseStudy.codeSnippet)}</code></pre>
          </div>
        ` : ''}

        <div class="cinema-modal-section">
          <h3 class="cinema-modal-section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>Impact & Engineering Verification</span>
          </h3>
          <p class="cinema-modal-text">${proj.caseStudy.impact}</p>
        </div>
      </div>

      <div class="cinema-modal-footer">
        <div style="display:flex; gap:10px;">
          ${!isSoon ? `
            <a href="${proj.links.live}" target="_blank" rel="noopener noreferrer" class="btn-cinema-primary" style="padding:10px 18px; font-size:0.80rem;">Open Live Platform ↗</a>
          ` : `
            <button class="btn-cinema-primary" id="cinema-modal-coming-soon-btn" style="padding:10px 18px; font-size:0.80rem;">
              <span>Open Live Platform (Coming Soon)</span>
            </button>
          `}
        </div>
        <button class="btn-cinema-secondary" id="cinema-modal-footer-close-btn" style="padding:10px 18px; font-size:0.80rem;">Close</button>
      </div>
    `;

    modalBackdrop.classList.add('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('cinema-modal-close-btn');
    const footerCloseBtn = document.getElementById('cinema-modal-footer-close-btn');
    const modalSoonBtn = document.getElementById('cinema-modal-coming-soon-btn');

    if (closeBtn) closeBtn.addEventListener('click', closeCaseStudyModal);
    if (footerCloseBtn) footerCloseBtn.addEventListener('click', closeCaseStudyModal);
    if (modalSoonBtn) {
      modalSoonBtn.addEventListener('click', () => {
        showCinemaToast('✨ Coming Soon — Live platform demo is currently in active development.');
      });
    }
  }

  /**
   * Closes the Case Study Modal.
   */
  function closeCaseStudyModal() {
    const modalBackdrop = document.getElementById('cinema-case-study-modal-backdrop');
    if (modalBackdrop) {
      modalBackdrop.classList.remove('is-open');
      modalBackdrop.setAttribute('aria-hidden', 'true');
    }
    if (document.body.classList.contains('cinema-fullscreen-active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Escapes HTML entities for pre code blocks.
   */
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Cleans up full-screen state and global listeners.
   */
  function cleanupCinematicProjects() {
    document.body.classList.remove('cinema-fullscreen-active');
    document.body.style.overflow = '';
    if (keydownHandler) {
      window.removeEventListener('keydown', keydownHandler);
      keydownHandler = null;
    }
    closeCaseStudyModal();
  }

  // Export to window
  window.CinematicProjects = {
    init: initCinematicProjects,
    selectProject: selectProject,
    openCaseStudyModal: openCaseStudyModal,
    closeCaseStudyModal: closeCaseStudyModal,
    exitToResume: exitToResume,
    setLastResumeRoute: setLastResumeRoute,
    getLastResumeRoute: getLastResumeRoute,
    cleanup: cleanupCinematicProjects
  };

})(window);
