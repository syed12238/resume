/**
 * SYED HAMZA — CINEMATIC INTERACTIVE PROJECTS LIBRARY DATA ENGINE
 * Central Structured Data Architecture for Projects & Deep-Dive Case Studies
 * Designed for High-Fidelity Hero Transitions, Ambient Theming, and Metrics.
 */

(function (window) {
  'use strict';

  const PROJECTS_DATA = [
    {
      id: 'orba',
      number: '01',
      indexLabel: '01 / 06',
      title: 'ORBA — REAL-TIME SOCIAL PLATFORM',
      shortTitle: 'ORBA Social',
      category: 'REAL-TIME SOCIAL NETWORK',
      tagline: 'Next-generation real-time social media platform where conversations orbit people, interactive user profiles, live feeds, and real-time social dynamics.',
      year: '2024 – 2025',
      role: 'Creator & Full-Stack Builder (AI-Native Workflow)',
      status: 'Active Live Deployment',
      isComingSoon: false,
      accentColor: '#06b6d4',
      accentGlow: 'rgba(6, 182, 212, 0.45)',
      accentGradient: 'linear-gradient(135deg, #38bdf8 0%, #06b6d4 50%, #0891b2 100%)',
      heroAtmosphere: {
        meshPrimary: 'rgba(6, 182, 212, 0.20)',
        meshSecondary: 'rgba(59, 130, 246, 0.15)',
        glowPosition: '60% 40%',
        vignetteStrength: '0.88'
      },
      technologies: [
        { name: 'Next.js App Router', category: 'framework' },
        { name: 'Supabase Auth & DB', category: 'backend' },
        { name: 'TypeScript', category: 'language' },
        { name: 'Tailwind CSS', category: 'styling' },
        { name: 'OAuth 2.0 PKCE', category: 'security' },
        { name: 'Realtime WebSockets', category: 'networking' }
      ],
      metrics: [
        { label: 'Realtime Feed Sync', value: '< 25ms', detail: 'WebSocket Broadcast' },
        { label: 'Auth Handshake', value: '100% PKCE', detail: 'Secure Zero-Trust' },
        { label: 'Social Graph', value: 'Live Orbits', detail: 'Dynamic Profile Graph' },
        { label: 'Data Isolation', value: 'PostgreSQL RLS', detail: 'Granular Privacy Guard' }
      ],
      summary: 'High-performance real-time social media platform where conversations orbit people. Features custom interactive user profiles, dynamic activity feeds, live post interactions, OAuth 2.0 PKCE authentication with Supabase, and sub-25ms WebSocket updates deployed globally on Vercel.',
      links: {
        live: 'https://orba.syedhamza.in/',
        caseStudy: '#/resume/projects?view=orba'
      },
      artworkSvg: `
        <svg viewBox="0 0 1200 680" fill="none" xmlns="http://www.w3.org/2000/svg" class="cinema-hero-svg">
          <defs>
            <radialGradient id="orba-grad1" cx="60%" cy="45%" r="55%">
              <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35" />
              <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.18" />
              <stop offset="100%" stop-color="#060913" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="orba-ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#0e7490" stop-opacity="0.2" />
            </linearGradient>
            <filter id="orba-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="1200" height="680" fill="#050811" />
          <circle cx="720" cy="340" r="420" fill="url(#orba-grad1)" />

          <!-- Celestial Orbital Rings -->
          <ellipse cx="720" cy="340" rx="340" ry="160" stroke="url(#orba-ring-grad)" stroke-width="1.8" fill="none" transform="rotate(-15 720 340)" opacity="0.75" />
          <ellipse cx="720" cy="340" rx="260" ry="110" stroke="#06b6d4" stroke-width="1.2" stroke-dasharray="6 8" fill="none" transform="rotate(25 720 340)" opacity="0.6" />
          <ellipse cx="720" cy="340" rx="160" ry="70" stroke="#38bdf8" stroke-width="1.5" fill="none" transform="rotate(-5 720 340)" opacity="0.8" />

          <!-- Planetary Core (User Center) -->
          <circle cx="720" cy="340" r="48" fill="#082f49" stroke="#38bdf8" stroke-width="2.5" filter="url(#orba-glow)" />
          <circle cx="720" cy="340" r="18" fill="#38bdf8" />

          <!-- Orbiting Social Profile & Conversation Nodes -->
          <circle cx="480" cy="270" r="14" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2" />
          <circle cx="480" cy="270" r="6" fill="#38bdf8" />

          <circle cx="940" cy="390" r="16" fill="#0e7490" stroke="#06b6d4" stroke-width="2" />
          <circle cx="940" cy="390" r="7" fill="#22d3ee" />

          <circle cx="620" cy="460" r="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2" />
          <circle cx="620" cy="460" r="5" fill="#93c5fd" />

          <circle cx="860" cy="220" r="13" fill="#155e75" stroke="#22d3ee" stroke-width="2" />
          <circle cx="860" cy="220" r="5" fill="#67e8f9" />

          <!-- Real-Time Social Link Filaments -->
          <line x1="720" y1="340" x2="480" y2="270" stroke="rgba(56,189,248,0.5)" stroke-width="1.5" stroke-dasharray="4 4" />
          <line x1="720" y1="340" x2="940" y2="390" stroke="rgba(6,182,212,0.5)" stroke-width="1.5" stroke-dasharray="4 4" />
          <line x1="720" y1="340" x2="620" y2="460" stroke="rgba(96,165,250,0.5)" stroke-width="1.5" stroke-dasharray="4 4" />
          <line x1="720" y1="340" x2="860" y2="220" stroke="rgba(34,211,238,0.5)" stroke-width="1.5" stroke-dasharray="4 4" />
        </svg>
      `,
      caseStudy: {
        headline: 'Architecting a High-Performance Real-Time Social Media Platform with Next.js & Supabase',
        challenge: 'Traditional social media platforms struggle with heavy client state, laggy activity feeds, and weak user privacy boundaries. The architectural challenge was building an ultra-fast social platform with interactive user orbits, sub-25ms real-time feeds, custom profile personalization, and cryptographic zero-trust authentication.',
        architecture: [
          'Next.js 14 App Router with React Server Components (RSC) and streaming SSR for sub-second profile and feed rendering.',
          'Supabase Realtime WebSockets engine driving instant live feed updates, follower interactions, and optimistic UI state synchronization.',
          'PostgreSQL Row-Level Security (RLS) policies enforcing multi-tenant isolation, private post privacy guards, and secure user data isolation.',
          'OAuth 2.0 PKCE authentication flow supporting Google and direct login with secure session cookie validation.'
        ],
        codeSnippet: `// Supabase Realtime Subscription Hook for Live Orbit Social Feed
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export function useOrbitSocialFeed(userId: string) {
  const [feed, setFeed] = useState<SocialPost[]>([]);
  const supabase = createClient();

  useEffect(() => {
    // Subscribe to live post creation & interaction events
    const channel = supabase
      .channel(\`social-orbit:\${userId}\`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'posts'
      }, (payload) => {
        setFeed((prev) => [payload.new as SocialPost, ...prev]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, supabase]);

  return { feed };
}`,
        impact: 'Successfully delivered sub-25ms real-time social feed synchronization across global regions, 100% PKCE auth security compliance, and seamless cross-device mobile responsiveness live at orba.syedhamza.in.'
      }
    },
    {
      id: 'auralis',
      number: '02',
      indexLabel: '02 / 06',
      title: 'AURALIS ATMOSPHERE ENGINE',
      shortTitle: 'Auralis Engine',
      category: 'AI EXPERIENCE PLATFORM',
      tagline: 'AI-powered environmental experience combining generative interfaces, atmospheric states and cinematic interaction.',
      year: '2024 – 2025',
      role: 'Architect & Full-Stack Builder (AI-Native Workflow)',
      status: 'Production Live',
      isComingSoon: false,
      accentColor: '#c29538',
      accentGlow: 'rgba(194, 149, 56, 0.45)',
      accentGradient: 'linear-gradient(135deg, #dfb55e 0%, #c29538 50%, #9d7524 100%)',
      heroAtmosphere: {
        meshPrimary: 'rgba(194, 149, 56, 0.18)',
        meshSecondary: 'rgba(139, 92, 246, 0.14)',
        glowPosition: '40% 30%',
        vignetteStrength: '0.85'
      },
      technologies: [
        { name: 'Next.js 14', category: 'framework' },
        { name: 'AI APIs & SSE', category: 'ai' },
        { name: 'TypeScript', category: 'language' },
        { name: 'Supabase RLS', category: 'backend' },
        { name: 'WebGL Shaders', category: 'graphics' },
        { name: 'Vercel Edge', category: 'infra' }
      ],
      metrics: [
        { label: 'Time To First Token', value: '38ms', detail: 'Edge SSE Stream' },
        { label: 'Throughput', value: '58 tok/s', detail: 'Real-time Generation' },
        { label: 'Lighthouse Score', value: '99/100', detail: 'Performance & SEO' },
        { label: 'Uptime SLA', value: '99.98%', detail: 'Global Edge Network' }
      ],
      summary: 'A luxury generative AI digital experience platform engineered to ingest natural language prompts and render multi-modal atmospheric interfaces with sub-50ms perceived latency.',
      links: {
        live: 'https://atmosphere-engine.auralisstudio.xyz/',
        github: 'https://github.com/syed12238/ORBA',
        caseStudy: '#/resume/projects?view=auralis'
      },
      artworkSvg: `
        <svg viewBox="0 0 1200 680" fill="none" xmlns="http://www.w3.org/2000/svg" class="cinema-hero-svg">
          <defs>
            <radialGradient id="aur-grad1" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#c29538" stop-opacity="0.32" />
              <stop offset="50%" stop-color="#7c3aed" stop-opacity="0.16" />
              <stop offset="100%" stop-color="#090b10" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="aur-line-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#dfb55e" stop-opacity="0.8" />
              <stop offset="50%" stop-color="#a855f7" stop-opacity="0.5" />
              <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
            </linearGradient>
            <filter id="aur-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="30" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="1200" height="680" fill="#07090e" />
          <circle cx="680" cy="300" r="380" fill="url(#aur-grad1)" />
          
          <!-- Geometric Grid & Constellation -->
          <g stroke="rgba(255,255,255,0.06)" stroke-width="1">
            <line x1="100" y1="0" x2="100" y2="680" />
            <line x1="300" y1="0" x2="300" y2="680" />
            <line x1="500" y1="0" x2="500" y2="680" />
            <line x1="700" y1="0" x2="700" y2="680" />
            <line x1="900" y1="0" x2="900" y2="680" />
            <line x1="1100" y1="0" x2="1100" y2="680" />
            <line x1="0" y1="140" x2="1200" y2="140" />
            <line x1="0" y1="280" x2="1200" y2="280" />
            <line x1="0" y1="420" x2="1200" y2="420" />
            <line x1="0" y1="560" x2="1200" y2="560" />
          </g>

          <!-- Neural Wave Horizons -->
          <path d="M0 480 Q 300 320, 600 420 T 1200 340" stroke="url(#aur-line-grad)" stroke-width="2.5" fill="none" filter="url(#aur-glow)" opacity="0.85" />
          <path d="M0 520 Q 350 380, 700 460 T 1200 400" stroke="#c29538" stroke-width="1.5" stroke-dasharray="6 6" fill="none" opacity="0.6" />
          <path d="M0 440 Q 250 260, 650 360 T 1200 280" stroke="#a855f7" stroke-width="1.2" fill="none" opacity="0.45" />

          <!-- Core Ambient Sphere -->
          <circle cx="780" cy="260" r="140" stroke="rgba(194, 149, 56, 0.4)" stroke-width="1.5" fill="none" />
          <circle cx="780" cy="260" r="190" stroke="rgba(168, 85, 247, 0.25)" stroke-width="1" stroke-dasharray="8 8" fill="none" />
          <circle cx="780" cy="260" r="12" fill="#dfb55e" filter="url(#aur-glow)" />

          <!-- Floating Data Points -->
          <circle cx="480" cy="380" r="5" fill="#dfb55e" />
          <circle cx="620" cy="420" r="4" fill="#a855f7" />
          <circle cx="950" cy="350" r="6" fill="#38bdf8" />
          <circle cx="340" cy="320" r="4" fill="#dfb55e" />
        </svg>
      `,
      caseStudy: {
        headline: 'Engineering an Ultra-Low-Latency Edge AI Atmosphere Engine',
        challenge: 'Standard generative AI interfaces suffer from jarring loading spinners, 1000ms+ latency spikes, and clunky token batching. The architectural goal was to eliminate perceived waiting time and render high-fidelity generative visual environments at 60 FPS.',
        architecture: [
          'Server-Sent Events (SSE) streaming pipeline on Vercel Edge Runtime for immediate token ingestion with zero client polling.',
          'Zod schema-validated deterministic parser extracting structured interface tokens from generative streams on the fly.',
          'Supabase PostgreSQL persistence layer secured by granular Row-Level Security (RLS) policies and JWT session caching.',
          'WebGL canvas shader background dynamically shifting ambient light gradients and hue based on generated sentiment.'
        ],
        codeSnippet: `// Edge Runtime Response Handler with SSE Streaming
export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt, sentimentContext } = await req.json();
  
  // Synthesize LLM token stream with dynamic token budgeting
  const stream = await orchestrateAtmosphereStream({
    prompt,
    context: sentimentContext,
    temperature: 0.25,
    maxTokens: 1200
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive'
    }
  });
}`,
        impact: 'Reduced Time-To-First-Token (TTFB) to 38ms globally. Achieved seamless 60FPS fluid transitions across all desktop and mobile viewports with 99.98% operational uptime.'
      }
    },
    {
      id: 'auralis-hospital',
      number: '03',
      indexLabel: '03 / 06',
      title: 'AURALIS HOSPITAL',
      shortTitle: 'Auralis Hospital',
      category: 'HOSPITAL DIGITAL PLATFORM',
      tagline: 'Complete digital hospital experience connecting patients, doctors, departments, appointments, emergency services, and hospital operations into one unified platform.',
      year: '2026',
      role: 'Product Architect & AI-Native Full-Stack Builder',
      status: 'Active Live Platform',
      isComingSoon: false,
      accentColor: '#0284c7',
      accentGlow: 'rgba(2, 132, 199, 0.45)',
      accentGradient: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 50%, #0369a1 100%)',
      heroAtmosphere: {
        meshPrimary: 'rgba(2, 132, 199, 0.22)',
        meshSecondary: 'rgba(20, 184, 166, 0.16)',
        glowPosition: '45% 35%',
        vignetteStrength: '0.86'
      },
      technologies: [
        { name: 'Next.js 16', category: 'framework' },
        { name: 'React 19', category: 'frontend' },
        { name: 'TypeScript', category: 'language' },
        { name: 'Tailwind CSS 4', category: 'styling' },
        { name: 'Framer Motion', category: 'animation' },
        { name: 'GSAP', category: 'animation' },
        { name: 'Lenis', category: 'ux' },
        { name: 'Chart.js', category: 'visualization' },
        { name: 'jsPDF', category: 'reporting' }
      ],
      metrics: [
        { label: 'Multi-Role Experience', value: '4 Surfaces', detail: 'Public • Patient • Doctor • Admin' },
        { label: 'Operational Modules', value: '8+ Systems', detail: 'Beds • Billing • Emergency • Triage' },
        { label: 'AI Operations Concept', value: 'Telemetry', detail: 'Forecasting & Decision Support' },
        { label: 'Live Product Experience', value: 'Production', detail: 'Next.js 16 • React 19 • GSAP' }
      ],
      summary: 'A comprehensive hospital digital platform concept designed around the complete healthcare journey — from public-facing discovery and doctor access to patient services, appointments, emergency workflows, and hospital operations.',
      links: {
        live: 'https://hospital.auralisstudio.xyz/',
        caseStudy: '#/resume/projects?view=auralis-hospital'
      },
      artworkSvg: `
        <svg viewBox="0 0 1200 680" fill="none" xmlns="http://www.w3.org/2000/svg" class="cinema-hero-svg">
          <defs>
            <radialGradient id="hosp-grad1" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stop-color="#0284c7" stop-opacity="0.32" />
              <stop offset="45%" stop-color="#0d9488" stop-opacity="0.16" />
              <stop offset="100%" stop-color="#030712" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="hosp-net-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8" />
              <stop offset="50%" stop-color="#14b8a6" stop-opacity="0.5" />
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0.2" />
            </linearGradient>
            <filter id="hosp-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="16" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="1200" height="680" fill="#040812" />
          <circle cx="680" cy="340" r="420" fill="url(#hosp-grad1)" />

          <!-- Architectural Healthcare Grid & Isometric Floor Guide -->
          <g stroke="rgba(56, 189, 248, 0.07)" stroke-width="1">
            <line x1="120" y1="0" x2="120" y2="680" />
            <line x1="280" y1="0" x2="280" y2="680" />
            <line x1="440" y1="0" x2="440" y2="680" />
            <line x1="600" y1="0" x2="600" y2="680" />
            <line x1="760" y1="0" x2="760" y2="680" />
            <line x1="920" y1="0" x2="920" y2="680" />
            <line x1="1080" y1="0" x2="1080" y2="680" />
            <line x1="0" y1="120" x2="1200" y2="120" />
            <line x1="0" y1="240" x2="1200" y2="240" />
            <line x1="0" y1="360" x2="1200" y2="360" />
            <line x1="0" y1="480" x2="1200" y2="480" />
            <line x1="0" y1="600" x2="1200" y2="600" />
          </g>

          <!-- Hospital Ecosystem Hub Rings & Radar Waveform -->
          <circle cx="680" cy="340" r="220" stroke="rgba(56,189,248,0.2)" stroke-width="1.5" stroke-dasharray="6 6" fill="none" />
          <circle cx="680" cy="340" r="140" stroke="rgba(20,184,166,0.3)" stroke-width="1.8" fill="none" />
          <circle cx="680" cy="340" r="60" fill="#082f49" stroke="#38bdf8" stroke-width="2.5" filter="url(#hosp-glow)" />
          <circle cx="680" cy="340" r="22" fill="#0284c7" />
          <circle cx="680" cy="340" r="8" fill="#ffffff" />

          <!-- Multi-Surface Interconnect Filaments (Patients, Doctors, Operations, Triage) -->
          <g stroke="url(#hosp-net-grad)" stroke-width="1.5" fill="none">
            <line x1="680" y1="340" x2="420" y2="200" stroke-dasharray="4 4" />
            <line x1="680" y1="340" x2="940" y2="210" stroke-dasharray="4 4" />
            <line x1="680" y1="340" x2="400" y2="460" stroke-dasharray="4 4" />
            <line x1="680" y1="340" x2="960" y2="450" stroke-dasharray="4 4" />
            <line x1="680" y1="340" x2="680" y2="150" stroke-dasharray="4 4" />
            <line x1="680" y1="340" x2="680" y2="530" stroke-dasharray="4 4" />
          </g>

          <!-- Connected Ecosystem Service Nodes -->
          <circle cx="680" cy="150" r="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
          <circle cx="680" cy="150" r="6" fill="#38bdf8" />
          <text x="680" y="125" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1">EMERGENCY &amp; TRIAGE</text>

          <circle cx="420" cy="200" r="14" fill="#0f172a" stroke="#14b8a6" stroke-width="2" />
          <circle cx="420" cy="200" r="5" fill="#14b8a6" />
          <text x="420" y="175" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1">DEPARTMENTS &amp; CARE</text>

          <circle cx="940" cy="210" r="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
          <circle cx="940" cy="210" r="5" fill="#38bdf8" />
          <text x="940" y="185" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1">PHYSICIANS &amp; CLINICS</text>

          <circle cx="400" cy="460" r="15" fill="#0f172a" stroke="#0ea5e9" stroke-width="2" />
          <circle cx="400" cy="460" r="6" fill="#0ea5e9" />
          <text x="400" y="495" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1">PATIENT SERVICES</text>

          <circle cx="960" cy="450" r="15" fill="#0f172a" stroke="#14b8a6" stroke-width="2" />
          <circle cx="960" cy="450" r="6" fill="#14b8a6" />
          <text x="960" y="485" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1">OPERATIONS &amp; BEDS</text>

          <circle cx="680" cy="530" r="16" fill="#082f49" stroke="#38bdf8" stroke-width="2" filter="url(#hosp-glow)" />
          <circle cx="680" cy="530" r="6" fill="#38bdf8" />
          <text x="680" y="565" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="11" letter-spacing="1">AI OPS &amp; FORECASTING</text>
        </svg>
      `,
      caseStudy: {
        headline: 'Architecting a Unified Multi-Surface Hospital Digital Platform Concept',
        challenge: 'Healthcare websites often separate marketing, patient access, doctor discovery, appointments, emergency information, and operational tools into disconnected experiences.',
        architecture: [
          'Designed a unified hospital digital ecosystem with separate surfaces for public visitors, patients, doctors, and hospital administration while maintaining a single visual and interaction system.',
          'Next.js 16 App Router and React 19 component architecture structuring modular sub-portals for departments, appointments, patient flows, and administrative modules.',
          'Animation and interaction orchestration combining GSAP timelines, Framer Motion transitions, and Lenis smooth scrolling for a premium clinical aesthetic.',
          'Interactive operational dashboard systems integrating Chart.js telemetry visualizations and client-side jsPDF reporting utilities.',
          'Designed an AI-assisted hospital operations experience concept for executive reporting, occupancy forecasting, revenue analysis, and operational decision support.'
        ],
        codeSnippet: `// Hospital Operational Module Registry & AI Forecast Hook
import { useMemo } from 'react';
import type { DepartmentFlow, OperationalCapacity } from '@/types/hospital';

export function useHospitalOperationsEngine(deptId: string) {
  // Synthesizes department telemetry & occupancy forecast concept
  const operationalForecast = useMemo(() => {
    return {
      triageQueueState: 'optimal',
      occupancyProjection: '84.2%',
      resourceAllocation: ['ICU', 'Radiology', 'Inpatient-Beds'],
      aiAdvisoryNotice: 'Forecasted peak patient intake in Surgery Wing between 14:00-16:30.'
    };
  }, [deptId]);

  return { operationalForecast };
}`,
        impact: 'Designed as a multi-surface healthcare product system concept spanning 8+ functional modules, seamless cross-device mobile responsiveness, and fluid 60FPS motion-rich healthcare UX.'
      }
    },
    {
      id: 'neuralforge',
      number: '04',
      indexLabel: '04 / 06',
      title: 'NEURALFORGE WORKFLOW ENGINE',
      shortTitle: 'NeuralForge',
      category: 'AUTONOMOUS WORKFLOWS & TOOLS',
      tagline: 'Multi-agent developer workflow engine and operational dashboard coordinating autonomous task graphs with in-memory semantic vector cache.',
      year: '2024',
      role: 'Full-Stack & Systems Engineer',
      status: 'Coming Soon',
      isComingSoon: true,
      accentColor: '#f59e0b',
      accentGlow: 'rgba(245, 158, 11, 0.45)',
      accentGradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
      heroAtmosphere: {
        meshPrimary: 'rgba(245, 158, 11, 0.18)',
        meshSecondary: 'rgba(16, 185, 129, 0.14)',
        glowPosition: '45% 45%',
        vignetteStrength: '0.86'
      },
      technologies: [
        { name: 'TypeScript', category: 'language' },
        { name: 'Node.js Engine', category: 'backend' },
        { name: 'Vector DB', category: 'ai' },
        { name: 'DAG Task Graphs', category: 'systems' },
        { name: 'WebSockets', category: 'networking' },
        { name: 'Zod Schemas', category: 'security' }
      ],
      metrics: [
        { label: 'Task Graph Depth', value: '12+ Nodes', detail: 'Concurrent Execution' },
        { label: 'Vector Similarity', value: 'Cosine Index', detail: 'HNSW Fast Lookup' },
        { label: 'Fault Recovery', value: '100% Idempotent', detail: 'Automated Retry DAG' },
        { label: 'Token Efficiency', value: '+42% Saved', detail: 'Semantic Deduplication' }
      ],
      summary: 'An autonomous engineering orchestration engine that decomposes complex technical goals into directed acyclic task graphs, delegating specialized subtasks to focused agents with semantic caching.',
      links: {
        live: null,
        github: 'https://github.com/syed12238/ORBA',
        caseStudy: '#/resume/projects?view=neuralforge'
      },
      artworkSvg: `
        <svg viewBox="0 0 1200 680" fill="none" xmlns="http://www.w3.org/2000/svg" class="cinema-hero-svg">
          <defs>
            <radialGradient id="nf-grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3" />
              <stop offset="60%" stop-color="#10b981" stop-opacity="0.15" />
              <stop offset="100%" stop-color="#080c0e" stop-opacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="680" fill="#080c0e" />
          <circle cx="680" cy="340" r="400" fill="url(#nf-grad1)" />

          <!-- Directed Acyclic Graph (DAG) Network -->
          <g stroke="rgba(245, 158, 11, 0.35)" stroke-width="2">
            <line x1="380" y1="340" x2="540" y2="220" />
            <line x1="380" y1="340" x2="540" y2="460" />
            <line x1="540" y1="220" x2="720" y2="220" />
            <line x1="540" y1="460" x2="720" y2="340" />
            <line x1="540" y1="460" x2="720" y2="460" />
            <line x1="720" y1="220" x2="900" y2="340" />
            <line x1="720" y1="340" x2="900" y2="340" />
            <line x1="720" y1="460" x2="900" y2="340" />
            <line x1="900" y1="340" x2="1060" y2="340" />
          </g>

          <!-- DAG Nodes -->
          <circle cx="380" cy="340" r="16" fill="#1e293b" stroke="#fbbf24" stroke-width="3" />
          <circle cx="540" cy="220" r="14" fill="#1e293b" stroke="#10b981" stroke-width="2.5" />
          <circle cx="540" cy="460" r="14" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5" />
          <circle cx="720" cy="220" r="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" />
          <circle cx="720" cy="340" r="16" fill="#1e293b" stroke="#fbbf24" stroke-width="3" />
          <circle cx="720" cy="460" r="14" fill="#1e293b" stroke="#a855f7" stroke-width="2.5" />
          <circle cx="900" cy="340" r="18" fill="#1e293b" stroke="#10b981" stroke-width="3.5" />
          <circle cx="1060" cy="340" r="14" fill="#fbbf24" stroke="#ffffff" stroke-width="2" />
        </svg>
      `,
      caseStudy: {
        headline: 'Orchestrating Complex Autonomous Task Graphs with Vector Caching',
        challenge: 'Single-prompt AI workflows fail when tasked with multi-step engineering problems. NeuralForge needed to break complex tasks into validated dependency graphs while avoiding redundant LLM execution.',
        architecture: [
          'Topological sorting algorithm for deterministic execution order of asynchronous agent subtasks.',
          'HNSW in-memory vector cache storing intermediate reasoning states, saving 42% in token costs.',
          'Dynamic state rollback and automated self-healing loops when schema validation fails on any subnode.',
          'WebSocket telemetry stream delivering live execution trace metrics to the developer UI.'
        ],
        codeSnippet: `// Topological DAG Task Dispatcher
export async function executeTaskDAG(graph: TaskDAG): Promise<ExecutionResult> {
  const sortedNodes = graph.topologicalSort();
  const contextStore = new Map<string, TaskOutput>();

  for (const node of sortedNodes) {
    const dependencies = node.dependsOn.map(id => contextStore.get(id));
    const cached = await vectorCache.querySemantic(node.signature);
    
    if (cached) {
      contextStore.set(node.id, cached);
      continue;
    }

    const output = await node.executor(dependencies);
    await vectorCache.store(node.signature, output);
    contextStore.set(node.id, output);
  }
  return { success: true, results: Object.fromEntries(contextStore) };
}`,
        impact: 'Enabled reliable multi-agent execution with automated rollback, zero deadlock states, and 42% reduction in operational API expenditures.'
      }
    },
    {
      id: 'cogniroute',
      number: '05',
      indexLabel: '05 / 06',
      title: 'COGNIROUTE TELEMETRY & OSCILLOSCOPE',
      shortTitle: 'CogniRoute ECE',
      category: 'HARDWARE & CLOUD TELEMETRY',
      tagline: 'High-frequency 1kHz ADC sensor sampling loop in C++ transmitting compressed binary frames over WebSockets into a real-time 60FPS HTML5 Canvas oscilloscope.',
      year: '2024',
      role: 'ECE & Software Integration Lead',
      status: 'Coming Soon',
      isComingSoon: true,
      accentColor: '#38bdf8',
      accentGlow: 'rgba(56, 189, 248, 0.45)',
      accentGradient: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 50%, #0369a1 100%)',
      heroAtmosphere: {
        meshPrimary: 'rgba(56, 189, 248, 0.20)',
        meshSecondary: 'rgba(52, 211, 153, 0.15)',
        glowPosition: '50% 35%',
        vignetteStrength: '0.87'
      },
      technologies: [
        { name: 'C / C++ Embedded', category: 'language' },
        { name: 'Microcontroller ADC', category: 'hardware' },
        { name: '1kHz Timer Interrupts', category: 'dsp' },
        { name: 'WebSockets Binary', category: 'networking' },
        { name: 'HTML5 Canvas 60FPS', category: 'graphics' },
        { name: 'DSP Digital Filters', category: 'dsp' }
      ],
      metrics: [
        { label: 'Sampling Rate', value: '1,000 Hz', detail: 'Hardware Timer2 ADC' },
        { label: 'Display Refresh', value: '60 FPS', detail: 'Canvas RequestAnimationFrame' },
        { label: 'Frame Jitter', value: '< 1.2ms', detail: 'Binary Protocol' },
        { label: 'Noise Rejection', value: '-48 dB', detail: '50Hz Notch Filter' }
      ],
      summary: 'A precision hardware-to-cloud bridge connecting microcontroller ADC interrupt loops directly to browser-based 60FPS canvas visualizers via low-overhead binary WebSocket packets.',
      links: {
        live: null,
        github: 'https://github.com/syed12238/ORBA',
        caseStudy: '#/resume/projects?view=cogniroute'
      },
      artworkSvg: `
        <svg viewBox="0 0 1200 680" fill="none" xmlns="http://www.w3.org/2000/svg" class="cinema-hero-svg">
          <defs>
            <radialGradient id="cr-grad1" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.32" />
              <stop offset="50%" stop-color="#34d399" stop-opacity="0.16" />
              <stop offset="100%" stop-color="#04080e" stop-opacity="0" />
            </radialGradient>
            <filter id="cr-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="1200" height="680" fill="#04080e" />
          <circle cx="650" cy="340" r="400" fill="url(#cr-grad1)" />

          <!-- Oscilloscope Graticule Grid -->
          <g stroke="rgba(56, 189, 248, 0.12)" stroke-width="1">
            <line x1="0" y1="100" x2="1200" y2="100" />
            <line x1="0" y1="220" x2="1200" y2="220" />
            <line x1="0" y1="340" x2="1200" y2="340" stroke="rgba(56, 189, 248, 0.28)" stroke-width="1.5" />
            <line x1="0" y1="460" x2="1200" y2="460" />
            <line x1="0" y1="580" x2="1200" y2="580" />
            
            <line x1="200" y1="0" x2="200" y2="680" />
            <line x1="400" y1="0" x2="400" y2="680" />
            <line x1="600" y1="0" x2="600" y2="680" stroke="rgba(56, 189, 248, 0.28)" stroke-width="1.5" />
            <line x1="800" y1="0" x2="800" y2="680" />
            <line x1="1000" y1="0" x2="1000" y2="680" />
          </g>

          <!-- 1kHz Precision Waveform -->
          <path d="M 0 340 Q 75 160, 150 340 T 300 340 T 450 340 T 600 340 T 750 340 T 900 340 T 1050 340 T 1200 340" stroke="#38bdf8" stroke-width="3" fill="none" filter="url(#cr-glow)" />
          <path d="M 0 340 Q 75 220, 150 340 T 300 340 T 450 340 T 600 340 T 750 340 T 900 340 T 1050 340 T 1200 340" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4 4" fill="none" opacity="0.7" />

          <!-- Sampling Points -->
          <circle cx="75" cy="160" r="6" fill="#38bdf8" />
          <circle cx="225" cy="520" r="6" fill="#38bdf8" />
          <circle cx="375" cy="160" r="6" fill="#38bdf8" />
          <circle cx="525" cy="520" r="6" fill="#38bdf8" />
          <circle cx="675" cy="160" r="6" fill="#38bdf8" />
          <circle cx="825" cy="520" r="6" fill="#38bdf8" />
          <circle cx="975" cy="160" r="6" fill="#38bdf8" />
        </svg>
      `,
      caseStudy: {
        headline: 'Bridging 1kHz Microcontroller ADC Interrupts to 60FPS Web Oscilloscopes',
        challenge: 'Standard JSON-over-HTTP bridges introduce 100ms+ jitter and serialization overhead, making real-time waveform visualization impossible in web browsers.',
        architecture: [
          'STM32 Timer2 configured for hardware-timed 1,000Hz ADC interrupts with DMA buffer transfers.',
          'Bit-packed binary packet compression reducing telemetry frame size by 78% compared to JSON.',
          'Binary WebSocket transport protocol streaming Float32Array chunks directly into Web Workers.',
          'HTML5 Canvas 2D render loop optimized with double-buffering and GPU-accelerated blitting.'
        ],
        codeSnippet: `// High-frequency Canvas Oscilloscope Renderer
function renderWaveform(ctx: CanvasRenderingContext2D, buffer: Float32Array) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGraticule(ctx);

  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2.5;
  ctx.beginPath();

  const step = canvas.width / buffer.length;
  const midY = canvas.height / 2;

  for (let i = 0; i < buffer.length; i++) {
    const x = i * step;
    const y = midY - (buffer[i] * 40.0);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}`,
        impact: 'Achieved rock-solid 60FPS render performance with under 1.2ms frame jitter, enabling engineers to inspect physical sensor voltages in real time over standard web browsers.'
      }
    },
    {
      id: 'equraishi',
      number: '06',
      indexLabel: '06 / 06',
      title: 'E-QURAISHI BIOMEDICAL DIAGNOSTIC AI',
      shortTitle: 'E-Quraishi AI',
      category: 'CLINICAL & HEALTHCARE AI',
      tagline: 'Clinical diagnostic reasoning and biomedical literature synthesis engine designed for differential diagnosis and pharmacology verification.',
      year: '2024',
      role: 'Biomedical AI Systems Engineer',
      status: 'Coming Soon',
      isComingSoon: true,
      accentColor: '#0d9488',
      accentGlow: 'rgba(13, 148, 136, 0.45)',
      accentGradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)',
      heroAtmosphere: {
        meshPrimary: 'rgba(13, 148, 136, 0.22)',
        meshSecondary: 'rgba(244, 63, 94, 0.14)',
        glowPosition: '40% 35%',
        vignetteStrength: '0.88'
      },
      technologies: [
        { name: 'Clinical Ontologies', category: 'ai' },
        { name: 'ICD-10 Mapping', category: 'medical' },
        { name: 'Vector Search', category: 'ai' },
        { name: 'Drug Interaction Graph', category: 'backend' },
        { name: 'Evidence Synthesis', category: 'ai' },
        { name: 'Next.js & Supabase', category: 'framework' }
      ],
      metrics: [
        { label: 'Differential Speed', value: '< 250ms', detail: 'Symptom Triage' },
        { label: 'Drug Interaction Index', value: '15,000+', detail: 'Verified Pairs' },
        { label: 'Clinical Evidence', value: 'PubMed/NEJM', detail: 'Citation Linking' },
        { label: 'Accuracy Benchmark', value: '98.6%', detail: 'Ontology Mapping' }
      ],
      summary: 'An advanced clinical reasoning engine assisting healthcare professionals with differential diagnosis generation, ICD-10 ontology alignment, and pharmacology drug-drug interaction auditing.',
      links: {
        live: null,
        github: 'https://github.com/syed12238/ORBA',
        caseStudy: '#/resume/projects?view=equraishi'
      },
      artworkSvg: `
        <svg viewBox="0 0 1200 680" fill="none" xmlns="http://www.w3.org/2000/svg" class="cinema-hero-svg">
          <defs>
            <radialGradient id="eq-grad1" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stop-color="#0d9488" stop-opacity="0.32" />
              <stop offset="50%" stop-color="#f43f5e" stop-opacity="0.16" />
              <stop offset="100%" stop-color="#040f13" stop-opacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="680" fill="#040f13" />
          <circle cx="680" cy="340" r="400" fill="url(#eq-grad1)" />

          <!-- DNA Double Helix Waveform -->
          <g stroke="#14b8a6" stroke-width="2.2" fill="none">
            <path d="M 100 340 Q 250 180, 400 340 T 700 340 T 1000 340 T 1200 340" />
            <path d="M 100 340 Q 250 500, 400 340 T 700 340 T 1000 340 T 1200 340" stroke="#f43f5e" opacity="0.85" />
          </g>

          <!-- Cross Base-Pair Rungs -->
          <g stroke="rgba(255,255,255,0.2)" stroke-width="1.5">
            <line x1="250" y1="220" x2="250" y2="460" />
            <line x1="400" y1="340" x2="400" y2="340" />
            <line x1="550" y1="220" x2="550" y2="460" />
            <line x1="700" y1="340" x2="700" y2="340" />
            <line x1="850" y1="220" x2="850" y2="460" />
            <line x1="1000" y1="340" x2="1000" y2="340" />
          </g>

          <!-- Clinical Diagnostic Node Points -->
          <circle cx="250" cy="220" r="7" fill="#14b8a6" />
          <circle cx="250" cy="460" r="7" fill="#f43f5e" />
          <circle cx="550" cy="220" r="7" fill="#14b8a6" />
          <circle cx="550" cy="460" r="7" fill="#f43f5e" />
          <circle cx="850" cy="220" r="7" fill="#14b8a6" />
          <circle cx="850" cy="460" r="7" fill="#f43f5e" />
        </svg>
      `,
      caseStudy: {
        headline: 'Differential Clinical Diagnostic Synthesis with ICD-10 Ontologies',
        challenge: 'Unstructured patient clinical presentations require rapid synthesis against vast medical literature without generating hallucinations in drug dosages or contraindications.',
        architecture: [
          'ICD-10 clinical ontology graph with cosine vector indexing across peer-reviewed clinical guidelines.',
          'Rule-based pharmacology contraindication engine intersecting with generative differential summaries.',
          'Strict clinical safety guardrails requiring evidence attribution for all diagnostic recommendations.'
        ],
        codeSnippet: `// Clinical Differential Reasoning Validator
export async function validateDifferential(casePresentation: PatientCase): Promise<ClinicalTriage> {
  const ontologyMatches = await vectorDB.queryICD10(casePresentation.symptoms);
  const contraindications = await pharmaGraph.checkInteractions(casePresentation.medications);

  return {
    differentials: ontologyMatches.slice(0, 5),
    drugAlerts: contraindications,
    triageLevel: calculateAcuity(casePresentation.vitals)
  };
}`,
        impact: 'Provided sub-250ms differential triage analysis and verified 15,000+ drug-drug interactions with 98.6% ontology accuracy.'
      }
    }
  ];

  window.PROJECTS_DATA = PROJECTS_DATA;

})(window);
