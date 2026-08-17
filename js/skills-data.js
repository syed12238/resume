/* ==========================================================================
   SKILLS DEEP DIVE TECHNICAL DATA REPOSITORY (ALL 37 SKILLS)
   Exhaustive structured data across all 6 engineering domains
   Author: Syed Hamza Resume OS
   ========================================================================== */

(function(window) {
  'use strict';

  const SKILLS_DATA = {
    // ------------------------------------------------------------------------
    // 1. AI & INTELLIGENT SYSTEMS (Skills 1-6)
    // ------------------------------------------------------------------------
    'llm-integration': {
      id: 'llm-integration',
      name: 'LLM Integration',
      category: 'AI & Intelligent Systems',
      depthLevel: 'Applied / Production',
      shortDescription: 'Architecting deterministic pipelines, token streaming, structured JSON schemas, and function calling with modern Large Language Models.',
      whatIsIt: {
        simple: 'Connecting applications to intelligent AI models so software can analyze, transform, and generate natural language and structured outputs.',
        technical: 'Integrating foundational model APIs (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet) via Server-Sent Events (SSE) streaming, strict JSON schema validation, context window budgeting, and automated retry backoff.',
        engineeringPerspective: 'Treating LLMs as probabilistic compute units: isolating non-deterministic model outputs with strict schema validators, managing context token economies, and implementing idempotency.'
      },
      howItWorks: {
        title: 'LLM Request & Streaming Lifecycle',
        nodes: ['User Input', 'Prompt Pipeline', 'API Gateway', 'Inference', 'SSE Stream', 'Client AST'],
        steps: [
          { step: '01', title: 'Input Sanitization', text: 'Sanitizes raw user inputs and applies prompt guardrails.' },
          { step: '02', title: 'System Context Injection', text: 'Combines dynamic domain context, schema constraints, and few-shot examples.' },
          { step: '03', title: 'Gateway Dispatch', text: 'Dispatches authenticated HTTP POST to model endpoint with token budget limits.' },
          { step: '04', title: 'Token Inference', text: 'Model autoregressively predicts next-token probabilities with temperature sampling.' },
          { step: '05', title: 'SSE Stream Ingestion', text: 'Client consumes Server-Sent Events chunk-by-chunk for sub-50ms perceived TTFB.' },
          { step: '06', title: 'Validation & Render', text: 'Validates complete JSON payload against Zod schema and commits to UI state.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Edge-optimized LLM Stream Handler in Next.js
export async function POST(req: Request) {
  const { prompt } = await req.json();
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${process.env.OPENAI_API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
      temperature: 0.2
    })
  });

  return new Response(response.body, {
    headers: { 'Content-Type': 'text/event-stream' }
  });
}`,
        demoOutput: '>> Ingested 142 tokens | TTFB: 42ms | Stream completed successfully.'
      },
      problemSolved: {
        without: ['Static rule engines requiring manual regex and parser maintenance', 'Rigid interfaces unable to understand unstructured natural language', 'Slow batch processing causing user wait fatigue'],
        with: ['Fluid natural language comprehension and intelligent task synthesis', 'Sub-second real-time token streaming with instant feedback', 'Deterministic JSON extraction via Zod schema enforcement']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & NeuralForge',
        role: 'AI Systems Architect',
        details: 'Implemented real-time streaming LLM generation pipeline in Auralis Studio with Zod schema validation, streaming AST token rendering, and client-side retry handling on Vercel Edge.'
      },
      engineeringDecisions: [
        'Context Window Budgeting: Trim conversational history using sliding semantic windows to prevent token exhaustion.',
        'Deterministic Extraction: Always set temperature to 0.0-0.2 for structured data extraction and tool routing.',
        'Fallback Routing: Implement multi-provider failover when primary model provider experiences rate limits.'
      ],
      strengths: ['Handles complex unstructured data', 'Flexible natural language reasoning', 'Real-time interactive streaming'],
      tradeoffs: ['Inherent non-determinism requires schema guarding', 'Token costs scale with context size', 'Latency depends on provider infrastructure'],
      ecosystem: ['OpenAI API', 'Anthropic Claude', 'Vercel AI SDK', 'LangChain', 'Zod', 'Ollama'],
      interviewQuestions: [
        {
          q: 'How do you guarantee structured JSON output from non-deterministic LLMs?',
          a: 'By combining system prompts with native JSON Schema/Grammar enforcement (e.g. OpenAI Response Format or Anthropic tool use), followed by strict post-generation runtime validation using Zod schemas with automated repair loops.'
        },
        {
          q: 'What is the architectural difference between SSE streaming and WebSockets for LLMs?',
          a: 'SSE (Server-Sent Events) is a unidirectional HTTP/1.1 or HTTP/2 protocol perfectly suited for LLM token streaming since data only flows from server to client. It works seamlessly through CDNs, edge proxies, and standard HTTP firewalls without WebSocket connection state overhead.'
        }
      ],
      relatedSkills: ['prompt-engineering', 'ai-application-development', 'claude-openai-apis', 'next-js-14']
    },

    'prompt-engineering': {
      id: 'prompt-engineering',
      name: 'Prompt Engineering',
      category: 'AI & Intelligent Systems',
      depthLevel: 'Core Practice',
      shortDescription: 'Systematic prompt design: instruction hierarchies, chain-of-thought, few-shot conditioning, and constrained schema induction.',
      whatIsIt: {
        simple: 'Structuring exact instructions, rules, and examples to guide AI models to generate precise and reliable responses.',
        technical: 'The science of optimizing token distributions through structured context boundaries, role definitions, negative constraints, and few-shot calibration.',
        engineeringPerspective: 'Treating prompts as software specification code: version-controlled, modularized, unit-tested, and evaluated against standardized regression benchmarks.'
      },
      howItWorks: {
        title: 'Prompt Compilation Pipeline',
        nodes: ['System Role', 'Few-Shot Data', 'Task Intent', 'Constraint Guard', 'Inference', 'Output Validation'],
        steps: [
          { step: '01', title: 'System Role Anchor', text: 'Defines persona, authority limits, and tone bounds.' },
          { step: '02', title: 'Context & Grounding', text: 'Injects dynamic data and eliminates hallucination vectors.' },
          { step: '03', title: 'Few-Shot Calibration', text: 'Provides 2-3 input/output exemplar pairs for format adherence.' },
          { step: '04', title: 'Negative Constraints', text: 'Specifies what NOT to do (e.g., "Never emit markdown backticks").' },
          { step: '05', title: 'Execution & Evaluation', text: 'Evaluates model output against deterministic unit assertions.' }
        ]
      },
      codeExample: {
        lang: 'markdown',
        code: `### SYSTEM SPECIFICATION
You are a Staff Software Architect.
Task: Extract API contracts from natural language specs.

### CONSTRAINTS
- Output ONLY valid RFC 8259 JSON.
- Never wrap with markdown backticks or explanations.

### FEW-SHOT EXEMPLAR
Input: "User wants to query active projects by owner ID"
Output: {"method":"GET","path":"/api/projects","query":{"owner_id":"string","status":"active"}}`,
        demoOutput: '>> Model adhered 100% to schema without markdown backtick wrappers.'
      },
      problemSolved: {
        without: ['Vague instructions causing hallucinations and markdown formatting errors', 'Unpredictable output structures that break client-side parsers', 'Wasted token costs on verbose explanatory prose'],
        with: ['Deterministic, machine-readable JSON outputs', 'Zero conversational fluff saving 40%+ token bandwidth', 'Reliable few-shot guided reasoning paths']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & NeuralForge',
        role: 'Prompt Engineer',
        details: 'Designed modular prompt pipelines with strict schema boundaries in Auralis Studio to convert creative design briefs into structured UI component trees.'
      },
      engineeringDecisions: [
        'Separation of Concerns: Separate the meta-system prompt from dynamic user input using clear XML delimiters.',
        'Negative Prompting: Explicitly state negative constraints at the end of the prompt where attention weights are strongest.',
        'Few-Shot Over Fine-Tuning: Leverage 2-3 high-quality few-shot examples first before committing to expensive model fine-tuning.'
      ],
      strengths: ['Rapid iteration speed', 'No costly retraining needed', 'High precision when properly constrained'],
      tradeoffs: ['Consumes context token budget', 'Different model families react differently to prompt syntax', 'Subject to prompt injection without input sanitation'],
      ecosystem: ['XML Delimiters', 'Few-Shot Prompting', 'Chain-of-Thought', 'DSPy', 'Anthropic Prompt Console'],
      interviewQuestions: [
        {
          q: 'Why use XML tags in prompts (especially for Claude)?',
          a: 'XML tags (like <context>, <rules>, <input>) provide clear structural boundaries that LLMs are trained to respect, preventing the model from confusing system instructions with untrusted user input.'
        }
      ],
      relatedSkills: ['llm-integration', 'ai-workflows', 'claude-openai-apis']
    },

    'ai-application-development': {
      id: 'ai-application-development',
      name: 'AI Application Development',
      category: 'AI & Intelligent Systems',
      depthLevel: 'Applied / Production',
      shortDescription: 'Building end-to-end full-stack software where AI is an active orchestration engine rather than just a standalone chatbot.',
      whatIsIt: {
        simple: 'Creating complete software products where intelligent AI agents automate tasks, process data, and dynamically drive user interfaces.',
        technical: 'Architecting multi-tier distributed systems integrating reactive frontend frameworks, edge computing, streaming APIs, database persistence, and AI reasoning engines.',
        engineeringPerspective: 'Engineering full-stack systems around AI primitives: handling latency gracefully with optimistic UI and streaming, managing state consistency across non-deterministic outputs, and designing robust fallback paths.'
      },
      howItWorks: {
        title: 'End-to-End AI Application Flow',
        nodes: ['UI Interaction', 'Edge Handler', 'AI Reasoning', 'Tool Execution', 'DB Persistence', 'Optimistic UI'],
        steps: [
          { step: '01', title: 'User Trigger', text: 'Client triggers an asynchronous task graph via React action.' },
          { step: '02', title: 'Edge Orchestration', text: 'Next.js Edge route validates session JWT and hydrates context from PostgreSQL.' },
          { step: '03', title: 'Model Invocation', text: 'LLM analyzes context and determines whether tool calls are required.' },
          { step: '04', title: 'Tool Execution', text: 'Server executes database queries or API webhooks requested by the model.' },
          { step: '05', title: 'State Commit & Streaming', text: 'Persists results to Supabase and streams dynamic components to client UI.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Dynamic AI Agent Tool Executor
async function handleUserTask(userId: string, task: string) {
  const context = await db.userHistory.findMany({ where: { userId } });
  const plan = await ai.generatePlan({ task, context });

  for (const step of plan.steps) {
    if (step.tool === 'database_query') {
      step.result = await db.query(step.params);
    }
  }

  return ai.synthesizeOutcome(plan);
}`,
        demoOutput: '>> Executed 3 autonomous tool steps | Persisted state in 180ms.'
      },
      problemSolved: {
        without: ['Siloed chatbots separated from core database and business logic', 'Static forms requiring tedious manual data entry and configuration', 'Brittle software incapable of handling dynamic user intent'],
        with: ['AI acting directly on live business data and user workflows', 'Dynamic, conversational, and generative interfaces', 'Automated multi-step task execution']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & NeuralForge',
        role: 'Full-Stack AI Engineer',
        details: 'Architected Auralis Studio as an end-to-end platform enabling creators to generate digital experiences powered by Next.js, Supabase, and real-time LLM orchestration.'
      },
      engineeringDecisions: [
        'Optimistic UI: Render skeleton states and streaming tokens immediately to mask LLM time-to-first-token.',
        'Server-Side Model Keys: Never expose API keys to client browsers; route all requests through authenticated edge handlers.',
        'State Hydration: Persist full execution logs in PostgreSQL for auditability and replay debugging.'
      ],
      strengths: ['High user automation value', 'Unlocks generative user experiences', 'Extensible tool ecosystem'],
      tradeoffs: ['Complex state synchronization', 'Requires latency mitigation strategies', 'Higher operational cost per query'],
      ecosystem: ['Next.js 14', 'React Server Actions', 'Supabase', 'Vercel Edge', 'OpenAI / Anthropic APIs'],
      interviewQuestions: [
        {
          q: 'How do you handle latency in AI-powered web applications?',
          a: 'By combining Server-Sent Events (SSE) streaming for instant perceived response, optimistic UI updates on the client, asynchronous background task queues for heavy workflows, and caching identical prompt results in a semantic vector cache.'
        }
      ],
      relatedSkills: ['llm-integration', 'react', 'next-js-14', 'supabase']
    },

    'ai-workflows': {
      id: 'ai-workflows',
      name: 'AI Workflows',
      category: 'AI & Intelligent Systems',
      depthLevel: 'Production / Architecture',
      shortDescription: 'Multi-stage autonomous pipelines, deterministic state machines, tool routing, and human-in-the-loop validation.',
      whatIsIt: {
        simple: 'Automating multi-step business processes by chaining AI decisions, data lookups, and human approvals into a reliable sequence.',
        technical: 'Directed Acyclic Graph (DAG) orchestration of heterogeneous AI models and deterministic computation with checkpointed state and retry policies.',
        engineeringPerspective: 'Replacing massive single-prompt calls with decomposed, modular state machines where each node has a single responsibility and deterministic validation.'
      },
      howItWorks: {
        title: 'Multi-Step AI Workflow State Machine',
        nodes: ['Trigger', 'Decomposition', 'Worker Agents', 'Tool Calling', 'Critic / Evaluator', 'Final Assembly'],
        steps: [
          { step: '01', title: 'Workflow Trigger', text: 'Ingests complex multi-faceted goal from user or webhook.' },
          { step: '02', title: 'Decomposition Node', text: 'Breaks goal into discrete sub-tasks with dependency graph.' },
          { step: '03', title: 'Parallel Execution', text: 'Dispatches independent sub-tasks to specialized worker prompts.' },
          { step: '04', title: 'Evaluation / Critic', text: 'Automated judge verifies compliance against quality gates.' },
          { step: '05', title: 'Assembly & Commit', text: 'Combines verified components into atomic output artifact.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Deterministic Workflow State Machine Step
async function executeWorkflowStep(state: WorkflowState): Promise<WorkflowState> {
  const result = await plannerAgent.evaluate(state);
  if (!result.isValid) {
    return { ...state, retryCount: state.retryCount + 1, status: 'RETRY' };
  }
  return { ...state, data: result.data, status: 'COMPLETED' };
}`,
        demoOutput: '>> Workflow transitioned: DECOMPOSE -> WORKER_2 -> EVALUATE -> SUCCESS.'
      },
      problemSolved: {
        without: ['Single monolithic prompts failing on complex multi-step reasoning', 'Zero visibility into intermediate steps when failures occur', 'No ability to resume interrupted workflows'],
        with: ['Decomposed, robust task graphs with isolated failure domains', 'Checkpointed state allowing resume and retry on failure', 'Human-in-the-loop review at critical quality checkpoints']
      },
      whereIUsedIt: {
        project: 'NeuralForge Task Engine',
        role: 'Workflow Systems Lead',
        details: 'Built an autonomous workflow DAG coordinator in NeuralForge executing multi-step developer tasks with automated validation loops.'
      },
      engineeringDecisions: [
        'Idempotency Keys: Assign deterministic UUIDs to workflow runs to prevent duplicate downstream side-effects.',
        'Exponential Backoff: Implement jittered retry loops for API rate limits.',
        'State Checkpointing: Save workflow snapshots to PostgreSQL after each completed step.'
      ],
      strengths: ['High reliability for complex tasks', 'Inspectable intermediate states', 'Fault-tolerant'],
      tradeoffs: ['Increased orchestration complexity', 'Higher end-to-end latency than single shot', 'State storage overhead'],
      ecosystem: ['LangGraph', 'Temporal', 'Node.js Event Emitter', 'PostgreSQL State Stores'],
      interviewQuestions: [
        {
          q: 'Why are multi-step workflows superior to giant single-shot prompts for complex tasks?',
          a: 'Single prompts suffer from attention degradation and cascading reasoning errors. Decomposing into workflows isolates context, allows specialized prompts per step, enables deterministic tool verification between steps, and allows retrying only the failing node.'
        }
      ],
      relatedSkills: ['ai-application-development', 'llm-integration', 'problem-solving']
    },

    'vector-db': {
      id: 'vector-db',
      name: 'Vector DB',
      category: 'AI & Intelligent Systems',
      depthLevel: 'Working Knowledge',
      shortDescription: 'High-dimensional embeddings, cosine similarity search, pgvector indexing, and Retrieval-Augmented Generation (RAG).',
      whatIsIt: {
        simple: 'A database specialized in storing numbers that represent the meaning of text, allowing search based on concepts rather than exact keywords.',
        technical: 'Storing and indexing high-dimensional floating-point embedding vectors (e.g. 1536D) for sub-millisecond Approximate Nearest Neighbor (ANN) search using HNSW or IVFFlat indexes in pgvector.',
        engineeringPerspective: 'Grounding LLMs in authoritative proprietary data through semantic retrieval, overcoming context length limits while eliminating hallucinations.'
      },
      howItWorks: {
        title: 'Vector Search & RAG Retrieval Flow',
        nodes: ['Raw Document', 'Text Chunker', 'Embedding Model', 'Vector Store', 'Cosine Similarity', 'Augmented Prompt'],
        steps: [
          { step: '01', title: 'Chunking', text: 'Splits raw text into 512-token chunks with 50-token semantic overlap.' },
          { step: '02', title: 'Vectorization', text: 'Generates 1536-dimensional embedding vectors using text-embedding-3-small.' },
          { step: '03', title: 'Index Storage', text: 'Inserts vectors into Supabase pgvector table with HNSW indexing.' },
          { step: '04', title: 'Query Embedding', text: 'Converts user query into embedding vector in real time.' },
          { step: '05', title: 'Similarity Search', text: 'Performs cosine distance search (<=> operator) to retrieve Top-K chunks.' },
          { step: '06', title: 'Prompt Augmentation', text: 'Injects retrieved chunks as authoritative context into the LLM prompt.' }
        ]
      },
      codeExample: {
        lang: 'sql',
        code: `-- Supabase pgvector Similarity Query
SELECT id, content, 1 - (embedding <=> query_embedding) AS similarity
FROM documents
WHERE 1 - (embedding <=> query_embedding) > 0.78
ORDER BY similarity DESC
LIMIT 5;`,
        demoOutput: '>> Retrieved Top 3 chunks | Cosine Similarity: 0.924 | Search Time: 4.8ms'
      },
      problemSolved: {
        without: ['Keyword search failing when exact terms do not match', 'LLMs hallucinating facts outside their training cutoff', 'Inability to search massive document sets within context limits'],
        with: ['Semantic concept matching across synonyms and multilingual text', 'Accurate RAG grounding with verifiable source citations', 'Sub-10ms search over millions of document embeddings']
      },
      whereIUsedIt: {
        project: 'NeuralForge Semantic Cache',
        role: 'Database & Systems Engineer',
        details: 'Implemented Supabase pgvector similarity search to match user prompts against previously computed task graphs, reducing duplicate API calls by 35%.'
      },
      engineeringDecisions: [
        'HNSW vs IVFFlat: Use HNSW indexes for lower search latency and higher recall at the cost of slightly higher memory usage.',
        'Chunk Overlap: Maintain 10-15% token overlap between chunks to preserve sentence boundaries and semantic continuity.',
        'Hybrid Search: Combine full-text BM25 search with vector similarity using Reciprocal Rank Fusion (RRF) for optimal precision.'
      ],
      strengths: ['Semantic understanding', 'Enables RAG architecture', 'Scalable search across unstructured data'],
      tradeoffs: ['Requires embedding generation latency', 'Index building requires significant RAM', 'Chunking strategy directly impacts search quality'],
      ecosystem: ['pgvector', 'Supabase Vector', 'Pinecone', 'OpenAI Embeddings', 'LangChain'],
      interviewQuestions: [
        {
          q: 'What is the difference between Cosine Similarity, Dot Product, and Euclidean Distance?',
          a: 'Cosine similarity measures the angle between vectors (scale-invariant), Euclidean distance measures straight-line distance (sensitive to magnitude), and Dot Product measures both angle and magnitude. When vectors are normalized to unit length (magnitude = 1), Dot Product and Cosine Similarity are mathematically identical.'
        }
      ],
      relatedSkills: ['supabase', 'postgresql', 'llm-integration']
    },

    'claude-openai-apis': {
      id: 'claude-openai-apis',
      name: 'Claude & OpenAI APIs',
      category: 'AI & Intelligent Systems',
      depthLevel: 'Applied / Production',
      shortDescription: 'Production API lifecycle, authentication, model selection, token streaming, rate limit handling, and structured tool calling.',
      whatIsIt: {
        simple: 'Standardized interfaces to send data to leading AI models (Claude & GPT-4o) and receive streamed text or structured data back.',
        technical: 'Consuming REST/SSE endpoints with Bearer token authentication, message array payloads, temperature calibration, max_tokens bounds, and tool calling definitions.',
        engineeringPerspective: 'Managing third-party provider dependencies with defensive error handling, exponential backoff retries, and cost/latency model routing.'
      },
      howItWorks: {
        title: 'API Request & Stream Cycle',
        nodes: ['Client Request', 'Auth Verification', 'Payload Serialization', 'Provider Gateway', 'Stream Ingestion', 'UI Update'],
        steps: [
          { step: '01', title: 'Authentication', text: 'Secure server-side API key injection with environment variable rotation.' },
          { step: '02', title: 'Payload Formatting', text: 'Maps internal message state into provider-specific schemas.' },
          { step: '03', title: 'Edge Dispatch', text: 'Dispatches fetch request with AbortController for user cancellation support.' },
          { step: '04', title: 'Chunk Decoding', text: 'Decodes incoming Uint8Array buffer chunks via TextDecoderStream.' },
          { step: '05', title: 'Client Emission', text: 'Emits parsed delta text directly to React state.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Anthropic Claude 3.5 Sonnet Streaming Integration
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const stream = await anthropic.messages.stream({
  model: 'claude-3-5-sonnet-20241022',
  max_tokens: 1024,
  messages: [{ role: 'user', content: 'Design an ergonomic API contract' }]
});

for await (const chunk of stream) {
  process.stdout.write(chunk.delta?.text || '');
}`,
        demoOutput: '>> Streamed response at 68 tokens/second via Claude 3.5 Sonnet.'
      },
      problemSolved: {
        without: ['Managing complex local GPU hardware clusters', 'Months of training and fine-tuning infrastructure', 'Single-vendor lock-in vulnerabilities'],
        with: ['Instant access to state-of-the-art frontier intelligence', 'Sub-second model selection (GPT-4o mini for fast tasks, Claude 3.5 Sonnet for code)', 'Simple pay-per-token operational model']
      },
      whereIUsedIt: {
        project: 'Auralis Studio',
        role: 'Full-Stack Engineer',
        details: 'Implemented multi-provider API router in Auralis Studio supporting both Claude 3.5 Sonnet and OpenAI GPT-4o with automatic fallback on rate limit breaches.'
      },
      engineeringDecisions: [
        'Model Routing: Route low-complexity classification tasks to lightweight models and reserve flagship models for complex code synthesis.',
        'AbortController: Always attach user cancellation signals to fetch requests to stop billing tokens when users navigate away.',
        'Strict Timeouts: Set 15-second connect timeouts to prevent edge workers from hanging on provider outages.'
      ],
      strengths: ['Frontier intelligence capabilities', 'Continuous vendor improvements', 'Standardized JSON message formats'],
      tradeoffs: ['Third-party service dependency', 'Token consumption operational cost', 'Subject to vendor rate limits and outages'],
      ecosystem: ['Anthropic SDK', 'OpenAI SDK', 'Vercel AI SDK', 'Fetch API', 'SSE'],
      interviewQuestions: [
        {
          q: 'How do you handle API rate limits (HTTP 429) gracefully?',
          a: 'By implementing exponential backoff with random jitter, respecting the Retry-After response header, caching repeated query results, and maintaining a fallback provider routing path.'
        }
      ],
      relatedSkills: ['llm-integration', 'prompt-engineering', 'ai-application-development']
    },

    // ------------------------------------------------------------------------
    // 2. FRONTEND ENGINEERING (Skills 7-15)
    // ------------------------------------------------------------------------
    'react': {
      id: 'react',
      name: 'React',
      category: 'Frontend Engineering',
      depthLevel: 'Applied / Production',
      shortDescription: 'Component architecture, state management hooks, virtual DOM reconciliation, declarative rendering model, and lifecycle control.',
      whatIsIt: {
        simple: 'A popular JavaScript tool for building user interfaces by composing small, reusable building blocks called components.',
        technical: 'A declarative, component-driven UI library leveraging an in-memory Virtual DOM representation, fiber reconciliation engine, and unidirectional data flow.',
        engineeringPerspective: 'A pure function model where UI is a direct projection of application state: UI = f(State). Managing component boundaries, rendering lifecycles, and memoization.'
      },
      howItWorks: {
        title: 'React Rendering & Reconciliation Flow',
        nodes: ['User Interaction', 'State Setter', 'Render Phase', 'Fiber Tree Diff', 'Commit Phase', 'DOM Paint'],
        steps: [
          { step: '01', title: 'Trigger', text: 'User interaction invokes a state updater (e.g. setCount).' },
          { step: '02', title: 'Schedule Work', text: 'React schedules a render pass for the component and its subtree.' },
          { step: '03', title: 'Render Phase', text: 'Component executes, producing a new Virtual DOM / Fiber element tree.' },
          { step: '04', title: 'Reconciliation', text: 'React diffs the new Fiber tree against current tree to compute minimum changes.' },
          { step: '05', title: 'Commit Phase', text: 'Applies computed mutations synchronously to the real browser DOM.' },
          { step: '06', title: 'Browser Paint', text: 'Browser recalculates layout and paints updated pixels to screen.' }
        ]
      },
      codeExample: {
        lang: 'jsx',
        code: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button 
      className="btn-counter" 
      onClick={() => setCount(prev => prev + 1)}
    >
      Count: {count}
    </button>
  );
}`,
        demoOutput: '>> State updated to count = 1 | Fiber diff computed 1 node change | DOM committed.'
      },
      problemSolved: {
        without: ['Imperative DOM manipulation (document.getElementById, manual class toggling)', 'Spaghetti state synchronization bugs across multiple UI elements', 'Heavy full-page refreshes causing poor user experience'],
        with: ['Declarative UI updates driven purely by state transitions', 'Reusable, self-contained, and testable component modularity', 'Optimized reconciliation minimizing expensive real DOM writes']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & Resume OS',
        role: 'Lead Frontend Developer',
        details: 'Engineered modular component architecture for Auralis Studio with custom hooks, synchronized state stores, and sub-second rendering performance.'
      },
      engineeringDecisions: [
        'State Colocation: Keep state as close as possible to where it is used to prevent cascading re-renders across parent trees.',
        'Memoization Discipline: Use useMemo and useCallback judiciously when passing callbacks to heavy child components.',
        'Predictable Unidirectional Data Flow: Pass props down and emit events up to ensure clear debugging trails.'
      ],
      strengths: ['Massive global ecosystem', 'Declarative predictable programming model', 'Exceptional component reusability'],
      tradeoffs: ['Requires discipline to prevent unnecessary re-renders', 'Client bundle footprint', 'Ecosystem fragmentation across state management libraries'],
      ecosystem: ['Next.js', 'Vite', 'React Router', 'Zustand', 'React Query', 'Testing Library'],
      interviewQuestions: [
        {
          q: 'What actually happens when setState is called in React?',
          a: 'React enqueues a state update and schedules work with the scheduler. During the render phase, React calls the component function to generate a new virtual element tree, diffs it against the current fiber tree (reconciliation), and in the commit phase synchronously applies minimal necessary mutations to the real DOM.'
        },
        {
          q: 'Why are keys important in React lists?',
          a: 'Keys provide stable identity across render passes. Without keys (or using array indices on dynamic lists), React cannot distinguish which items were inserted, moved, or deleted, leading to inefficient full-list rebuilds and state preservation bugs in child components.'
        }
      ],
      relatedSkills: ['next-js-14', 'typescript', 'modern-javascript', 'animation-systems']
    },

    'next-js-14': {
      id: 'next-js-14',
      name: 'Next.js 14+',
      category: 'Frontend Engineering',
      depthLevel: 'Applied / Production',
      shortDescription: 'App Router, React Server Components (RSC), Edge Runtime, Server Actions, streaming SSR, and automated routing.',
      whatIsIt: {
        simple: 'A full-stack React framework that makes websites ultra-fast by rendering pages on the server and optimizing loading performance.',
        technical: 'Production React framework featuring App Router, React Server Components (zero client JS for static trees), hybrid SSR/SSG/ISR rendering, and integrated Edge route handlers.',
        engineeringPerspective: 'Decoupling client and server execution boundaries: keeping database access and heavy dependencies server-side while hydrating only interactive leaves on the client.'
      },
      howItWorks: {
        title: 'Next.js App Router & RSC Lifecycle',
        nodes: ['Browser URL', 'Edge Routing', 'Server Component', 'DB Fetch', 'RSC Payload Stream', 'Client Hydration'],
        steps: [
          { step: '01', title: 'Request Dispatch', text: 'Browser navigates to route; Next.js edge router matches filesystem path.' },
          { step: '02', title: 'Server Execution', text: 'React Server Components execute securely on server, fetching database directly.' },
          { step: '03', title: 'RSC Stream', text: 'Streams serialized RSC payload and initial HTML before client JS loads.' },
          { step: '04', title: 'Selective Hydration', text: 'Client downloads minimal JavaScript bundle only for "use client" components.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Next.js Server Component with Direct Database Access
import db from '@/lib/db';
import ProjectCard from '@/components/ProjectCard'; // Client Component

export default async function ProjectsPage() {
  const projects = await db.projects.findMany(); // Runs on server only!

  return (
    <div className="grid">
      {projects.map(p => <ProjectCard key={p.id} data={p} />)}
    </div>
  );
}`,
        demoOutput: '>> Executed on server | 0KB database library shipped to client | HTML streamed.'
      },
      problemSolved: {
        without: ['Bloated client JavaScript bundles slowing down initial page loads', 'Waterfall API calls on client mount causing loading spinners', 'Complex separate backend and frontend deployment setups'],
        with: ['Zero-bundle-size React Server Components', 'Instant initial page paint with server-rendered HTML', 'Unified full-stack repository with integrated serverless API routes']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & NeuralForge',
        role: 'Full-Stack Architect',
        details: 'Architected Auralis Studio on Next.js 14 App Router, utilizing Server Components for database lookups and Server Actions for mutation pipelines on Vercel.'
      },
      engineeringDecisions: [
        'Default to Server Components: Keep all components as Server Components unless browser APIs (useState, useEffect, event listeners) are strictly needed.',
        'Route Segment Caching: Configure explicit revalidation tags (revalidateTag) for instant cache invalidation on data writes.',
        'Edge Handlers: Deploy lightweight streaming endpoints to Edge Runtime for global sub-50ms TTFB.'
      ],
      strengths: ['Superior SEO & performance', 'Zero-client-bundle server components', 'Built-in image & font optimization'],
      tradeoffs: ['Steeper mental model around RSC boundaries', 'Server runtime cost', 'Build-time complexity'],
      ecosystem: ['Vercel', 'React 18/19', 'Turbopack', 'Tailwind', 'next/image', 'Server Actions'],
      interviewQuestions: [
        {
          q: 'What is the fundamental difference between React Server Components (RSC) and traditional SSR?',
          a: 'Traditional SSR renders components to HTML on the server, but still ships the full JavaScript bundle to hydrate the entire tree on the client. RSC executes components exclusively on the server and ships a compact virtual representation — their JavaScript dependencies are never downloaded by the browser.'
        }
      ],
      relatedSkills: ['react', 'typescript', 'vercel-edge', 'supabase']
    },

    'typescript': {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Frontend Engineering',
      depthLevel: 'Applied / Production',
      shortDescription: 'Static type checking, generic constraints, discriminated unions, interface contracts, and build-time bug prevention.',
      whatIsIt: {
        simple: 'JavaScript with superpowers — it checks your code for mistakes while you type so bugs are caught before users ever see them.',
        technical: 'A statically typed superset of JavaScript that compiles to clean JS, providing structural typing, type inference, advanced generics, and compile-time safety.',
        engineeringPerspective: 'Self-documenting architectural contracts: catching 90%+ of runtime TypeError bugs during build and enabling confident large-scale refactoring.'
      },
      howItWorks: {
        title: 'TypeScript Compilation & Type Checking',
        nodes: ['TS Source Code', 'Lexer / Parser', 'Type Checker', 'AST Verification', 'Transpiler', 'Clean JS Output'],
        steps: [
          { step: '01', title: 'Source Parsing', text: 'Parses code into an Abstract Syntax Tree (AST) with type annotations.' },
          { step: '02', title: 'Type Inference', text: 'Infers implicit types based on variable assignments and return values.' },
          { step: '03', title: 'Contract Checking', text: 'Validates function calls and object shapes against declared interfaces.' },
          { step: '04', title: 'Zero-Runtime Output', text: 'Strips all types completely and emits standard ECMAScript JavaScript.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Discriminated Union Pattern
type ApiResponse<T> = 
  | { status: 'success'; data: T; timestamp: number }
  | { status: 'error'; message: string; code: number };

function handleResult(res: ApiResponse<User>) {
  if (res.status === 'success') {
    console.log(res.data.name); // TS knows 'data' exists!
  } else {
    console.error(res.message);  // TS knows 'message' exists!
  }
}`,
        demoOutput: '>> Type checked 0 errors | Emitted clean zero-cost JavaScript.'
      },
      problemSolved: {
        without: ['"Uncaught TypeError: Cannot read property of undefined" crashes in production', 'Silent refactoring breaks that go unnoticed until runtime', 'Unclear API contract shapes between frontend and backend'],
        with: ['Zero runtime type errors caught during compile time', 'IntelliSense autocompletion accelerating development velocity', 'End-to-end type sharing from database schema to UI components']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & NeuralForge',
        role: 'Full-Stack Engineer',
        details: 'Implemented strict TypeScript contracts throughout full-stack codebases with shared database models, Zod validation, and zero "any" types in production.'
      },
      engineeringDecisions: [
        'Discriminated Unions: Use tagged unions with status properties instead of optional properties for state representations.',
        'Strict Mode: Always enable "strict": true in tsconfig.json to prevent implicit any and unsafe null assertions.',
        'Zod Integration: Bridge runtime API data with TypeScript types using z.infer<typeof Schema>.'
      ],
      strengths: ['Eliminates entire classes of runtime bugs', 'Superior developer tooling & refactoring', 'Living code documentation'],
      tradeoffs: ['Requires build compilation step', 'Learning curve for advanced generics', 'Type gymnastics can occasionally reduce readability'],
      ecosystem: ['tsc', 'Zod', 'ts-node', 'DefinitelyTyped', 'ESLint', 'Prettier'],
      interviewQuestions: [
        {
          q: 'What is structural typing in TypeScript vs nominal typing in languages like Java?',
          a: 'TypeScript uses structural typing ("duck typing"): two types are compatible if they share the same structure (same property names and compatible types), regardless of explicit inheritance declarations. In nominal typing (Java/C#), compatibility requires explicit declaration.'
        }
      ],
      relatedSkills: ['react', 'next-js-14', 'modern-javascript', 'node-js']
    },

    'modern-javascript': {
      id: 'modern-javascript',
      name: 'Modern JavaScript',
      category: 'Frontend Engineering',
      depthLevel: 'Core Mastery',
      shortDescription: 'ES6+ specifications, V8 event loop, microtask queue, closures, async/await promises, and modular execution.',
      whatIsIt: {
        simple: 'The universal programming language of the modern web that makes websites dynamic, interactive, and responsive.',
        technical: 'ECMAScript specification with asynchronous non-blocking I/O event loop, Promise microtask scheduling, prototype-based inheritance, and lexical closures.',
        engineeringPerspective: 'Mastering execution context, lexical scope, memory lifecycles, and event-driven architectures across both browser and server environments.'
      },
      howItWorks: {
        title: 'V8 Event Loop & Execution Architecture',
        nodes: ['Call Stack', 'Web APIs', 'Microtask Queue (Promises)', 'Macrotask Queue (Timers)', 'Event Loop', 'Render Pipeline'],
        steps: [
          { step: '01', title: 'Synchronous Stack', text: 'Executes synchronous code frames line by line on single thread.' },
          { step: '02', title: 'Async Hand-off', text: 'Dispatches I/O and timers to browser Web APIs / Node libuv threads.' },
          { step: '03', title: 'Microtask Flush', text: 'Drains all Promise.then and async/await continuations before next tick.' },
          { step: '04', title: 'Macrotask & Paint', text: 'Executes next task (setTimeout, click event) and paints UI updates.' }
        ]
      },
      codeExample: {
        lang: 'javascript',
        code: `// Async Pipeline with Promise Concurrency
async function fetchUserDashboard(userId) {
  // Concurrent execution via Promise.all
  const [profile, metrics, projects] = await Promise.all([
    fetchProfile(userId),
    fetchMetrics(userId),
    fetchProjects(userId)
  ]);

  return { profile, metrics, projects, loadedAt: Date.now() };
}`,
        demoOutput: '>> Executed 3 async tasks concurrently in 48ms (vs 144ms sequential).'
      },
      problemSolved: {
        without: ['Callback hell nesting making code unreadable and fragile', 'Synchronous blocking code freezing the browser UI', 'Global scope pollution causing cross-script variable collisions'],
        with: ['Clean async/await control flow with robust try/catch blocks', 'Non-blocking concurrent execution maintaining 60FPS UI', 'Encapsulated ES Modules with tree-shaking support']
      },
      whereIUsedIt: {
        project: 'Resume OS & Interactive Visualizers',
        role: 'Core Developer',
        details: 'Architected high-performance SPA routing, 60FPS Canvas math rendering, and async data pipelines in vanilla modern JavaScript with zero heavy runtime dependencies.'
      },
      engineeringDecisions: [
        'Concurrent Fetches: Always group independent async operations with Promise.all rather than sequential awaits.',
        'Closure Memory Management: Nullify external references inside long-lived event listener closures to prevent memory leaks.',
        'Immutable Patterns: Prefer structuredClone, spread operators, and Array methods (map, filter, reduce) over in-place mutations.'
      ],
      strengths: ['Runs universally across all platforms', 'Huge global developer community', 'Non-blocking I/O efficiency'],
      tradeoffs: ['Single-threaded CPU bound limits', 'Dynamic typing pitfalls without TypeScript', 'Legacy browser quirks'],
      ecosystem: ['ES2024', 'V8 Engine', 'Babel', 'Node.js', 'Vite', 'Webpack'],
      interviewQuestions: [
        {
          q: 'Explain the difference between the Microtask Queue and Macrotask Queue.',
          a: 'Microtasks (Promises, queueMicrotask, MutationObserver) have higher priority. After every synchronous call stack execution, the event loop completely exhausts the entire microtask queue before picking a single task from the macrotask queue (setTimeout, setInterval, I/O events).'
        }
      ],
      relatedSkills: ['typescript', 'react', 'node-js', 'html5']
    },

    'html5': {
      id: 'html5',
      name: 'HTML5',
      category: 'Frontend Engineering',
      depthLevel: 'Core Mastery',
      shortDescription: 'Semantic document structure, DOM tree parsing, ARIA accessibility landmarks, Canvas API, and Web Standards.',
      whatIsIt: {
        simple: 'The structural skeleton of the web, providing meaningful tags for content, images, links, and forms.',
        technical: 'The core markup specification defining semantic element trees (<main>, <article>, <aside>), DOM APIs, HTML5 Canvas, and accessibility interfaces.',
        engineeringPerspective: 'Building accessible, SEO-optimized, and resilient foundational structures where semantics convey document meaning to browsers, screen readers, and search engines.'
      },
      howItWorks: {
        title: 'Browser HTML Parsing & DOM Tree Construction',
        nodes: ['Raw Byte Stream', 'Character Tokenizer', 'Node Hierarchy', 'DOM Tree', 'Render Tree', 'Accessibility Tree'],
        steps: [
          { step: '01', title: 'Byte Tokenization', text: 'Converts HTTP byte stream into HTML tokens according to standard.' },
          { step: '02', title: 'DOM Tree Construction', text: 'Builds parent-child node hierarchy in browser memory.' },
          { step: '03', title: 'A11y Tree Computation', text: 'Computes Accessibility Object Model (AOM) for assistive technology.' },
          { step: '04', title: 'Render Tree Attachment', text: 'Combines DOM and CSSOM to compute visual render tree.' }
        ]
      },
      codeExample: {
        lang: 'html',
        code: `<!-- Accessible Semantic Structure -->
<article class="resume-card" aria-labelledby="proj-title">
  <header>
    <h3 id="proj-title">Auralis Studio</h3>
    <time datetime="2024">2024</time>
  </header>
  <p>AI-powered generative web experience platform.</p>
  <button type="button" aria-expanded="false">Explore →</button>
</article>`,
        demoOutput: '>> Valid HTML5 tree | 100% Lighthouse SEO & Accessibility Score.'
      },
      problemSolved: {
        without: ['"Div-soup" with zero semantic meaning confusing screen readers', 'Terrible SEO indexing from missing landmark tags and metadata', 'Inaccessible forms failing keyboard navigation'],
        with: ['Rich semantic landmarks (<header>, <nav>, <main>, <article>, <aside>)', 'Flawless keyboard and screen reader accessibility (WCAG 2.1 AA)', 'Native multimedia, canvas graphics, and local storage APIs']
      },
      whereIUsedIt: {
        project: 'Executive Resume OS & Web Platforms',
        role: 'Frontend Architect',
        details: 'Structured clean semantic HTML5 markup across the desktop resume application, achieving perfect screen reader navigation and precise A4 print stylesheet formatting.'
      },
      engineeringDecisions: [
        'Semantic Tags Over Divs: Always use native semantic elements (<button>, <nav>, <main>) rather than adding click handlers to generic divs.',
        'Accessible Labels: Include aria-label or aria-labelledby for icon-only interactive buttons.',
        'Heading Hierarchy: Maintain strict h1 -> h2 -> h3 hierarchy without skipping levels.'
      ],
      strengths: ['Universal native browser support', 'Crucial for SEO and Web Accessibility', 'Resilient error-handling parser'],
      tradeoffs: ['Pure structure requires CSS for layout', 'HTML-only validation is limited', 'Legacy quirks in older specs'],
      ecosystem: ['Semantic HTML', 'Canvas API', 'ARIA Guidelines', 'Web Components', 'SVG'],
      interviewQuestions: [
        {
          q: 'Why should you always use a <button> element instead of a <div onClick=...>?',
          a: 'A native <button> automatically provides keyboard accessibility (Enter and Space triggers), focus management (tab index), role="button" announcement for screen readers, and disabled state handling without requiring manual custom event handlers.'
        }
      ],
      relatedSkills: ['css3', 'responsive-architecture', 'modern-javascript']
    },

    'css3': {
      id: 'css3',
      name: 'CSS3',
      category: 'Frontend Engineering',
      depthLevel: 'Core Mastery',
      shortDescription: 'Cascade algorithms, CSS custom properties, Flexbox/Grid layouts, box model physics, and hardware-accelerated animations.',
      whatIsIt: {
        simple: 'The styling language that transforms raw HTML into beautiful, polished, and responsive visual interfaces.',
        technical: 'Declarative stylesheet language governing visual rendering: cascade resolution, CSS Custom Properties (variables), multi-dimensional Grid/Flexbox layouts, and GPU compositing.',
        engineeringPerspective: 'Engineering maintainable design systems with scalable tokens, robust layout constraints, sub-pixel rendering precision, and performant hardware-accelerated transforms.'
      },
      howItWorks: {
        title: 'CSS Rendering Pipeline & Compositing',
        nodes: ['CSS Parsing', 'CSSOM Tree', 'Cascade & Specificity', 'Box Layout Flow', 'Paint Operations', 'GPU Composite'],
        steps: [
          { step: '01', title: 'Parsing & Tokens', text: 'Parses rules and resolves design token custom properties.' },
          { step: '02', title: 'Cascade Resolution', text: 'Calculates computed styles based on specificity hierarchy.' },
          { step: '03', title: 'Layout / Reflow', text: 'Calculates exact geometric coordinates and bounding boxes.' },
          { step: '04', title: 'Paint & Raster', text: 'Fills pixels with background, colors, borders, and shadows.' },
          { step: '05', title: 'GPU Compositing', text: 'Translates layers via GPU without triggering CPU reflow.' }
        ]
      },
      codeExample: {
        lang: 'css',
        code: `/* GPU-Accelerated 3D Card Physics */
.resume-card {
  background: var(--surface-card);
  border: 1px solid var(--border-subtle);
  border-radius: 18px;
  transform: translateZ(0); /* Promotes to GPU compositor layer */
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.3s ease;
  will-change: transform;
}

.resume-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 36px -10px rgba(0,0,0,0.12);
}`,
        demoOutput: '>> Executed on GPU compositor thread | 60FPS fluid transition | 0ms reflow.'
      },
      problemSolved: {
        without: ['Rigid table layouts breaking on different screen sizes', 'Inconsistent colors and spacing scattered across hundreds of lines', 'Janky JavaScript-driven animations causing CPU stutters'],
        with: ['Modular design systems governed by CSS Custom Properties', 'Fluid multi-axis Flexbox and CSS Grid layout algorithms', 'Silky 60FPS animations offloaded directly to the GPU']
      },
      whereIUsedIt: {
        project: 'Apple/Linear/Stripe Resume OS Theme',
        role: 'Lead UI/UX Engineer',
        details: 'Crafted the entire bespoke design system for the Syed Hamza Resume OS using pure vanilla CSS3, custom property design tokens, and smooth spring micro-animations.'
      },
      engineeringDecisions: [
        'Hardware Acceleration: Animate only transform and opacity properties to bypass layout recalculation and paint phases.',
        'Design Token System: Define all colors, typography, radii, and shadows in :root variables for instant global theming.',
        'Mobile-First Queries: Write baseline styles for mobile viewport and scale upward with min-width media queries.'
      ],
      strengths: ['Zero JavaScript overhead', 'GPU hardware accelerated performance', 'Rich modern features (Grid, Subgrid, Variables, Container Queries)'],
      tradeoffs: ['Global namespace requires disciplined naming (BEM/modules)', 'Cascade specificity bugs if uncontrolled', 'Complex cross-browser quirks'],
      ecosystem: ['CSS Grid', 'Flexbox', 'Custom Properties', 'PostCSS', 'BEM', 'Sass'],
      interviewQuestions: [
        {
          q: 'Why should animations target "transform" and "opacity" instead of "top", "left", or "height"?',
          a: 'Modifying "top", "left", or "height" triggers the browser layout (reflow) and paint phases, forcing the CPU to recalculate geometry on every frame. Modifying "transform" and "opacity" bypasses layout and paint entirely, allowing the GPU compositor to render smoothly at 60/120 FPS.'
        }
      ],
      relatedSkills: ['responsive-architecture', 'animation-systems', 'tailwind', 'html5']
    },

    'responsive-architecture': {
      id: 'responsive-architecture',
      name: 'Responsive Architecture',
      category: 'Frontend Engineering',
      depthLevel: 'Core Mastery',
      shortDescription: 'Mobile-first design, fluid viewport scaling, container queries, adaptive layouts, and touch optimization.',
      whatIsIt: {
        simple: 'Designing websites so they look and work perfectly on every device — from small mobile phones to massive 4K monitors.',
        technical: 'Architecting adaptive layout grids using fluid typography (clamp()), CSS Grid/Flexbox breakpoints, container queries, and touch-target ergonomical sizing.',
        engineeringPerspective: 'Ensuring seamless functional parity across viewports: preserving information hierarchy, optimizing touch interaction zones, and eliminating layout shift.'
      },
      howItWorks: {
        title: 'Adaptive Viewport Scaling Flow',
        nodes: ['Mobile Viewport (<=900px)', 'Layout Collapse', 'Touch Drawer & Dock', 'Tablet Adaptation', 'Desktop 3-Column', 'Fluid 4K Bounds'],
        steps: [
          { step: '01', title: 'Mobile Baseline', text: 'Applies single-column stacked layout with thumb-reachable navigation.' },
          { step: '02', title: 'Fluid Typography', text: 'Scales font sizes dynamically using clamp(1.8rem, 4vw, 2.75rem).' },
          { step: '03', title: 'Breakpoint Switch', text: 'Expands into 3-column app shell (Rail, Sidebar, Main) on screens > 900px.' },
          { step: '04', title: 'Max-Width Constraint', text: 'Caps maximum layout container at 1440px to prevent visual distortion on ultra-wide displays.' }
        ]
      },
      codeExample: {
        lang: 'css',
        code: `/* Fluid Typography & Responsive Container */
.hero-candidate-name {
  font-size: clamp(1.85rem, 3.5vw + 1rem, 2.75rem);
}

@media screen and (max-width: 900px) {
  .app-shell {
    grid-template-columns: 1fr; /* Single column */
  }
  .left-rail {
    display: none; /* Replaced by bottom dock */
  }
}`,
        demoOutput: '>> Viewport tested from 320px (iPhone) to 2560px (4K) | 0% layout shift.'
      },
      problemSolved: {
        without: ['Desktop sites overflowing horizontally on mobile screens', 'Tiny unclickable buttons frustrating mobile users', 'Separate mobile m.site subdomains requiring duplicate codebases'],
        with: ['A single unified codebase serving all screen sizes seamlessly', '44px+ ergonomic touch target zones for effortless mobile interaction', 'Adaptive UI components (e.g. desktop sidebar becomes slide-over drawer)']
      },
      whereIUsedIt: {
        project: 'Desktop & Mobile Resume OS',
        role: 'Lead Frontend Engineer',
        details: 'Architected the responsive layout transformation of Syed Hamza Resume OS, switching between a 3-column desktop app shell and a native-feeling mobile app with sticky header, drawer, and bottom dock.'
      },
      engineeringDecisions: [
        'Touch Target Sizing: Guarantee all interactive buttons have at least 44x44px clickable area on touch devices.',
        'Clamp for Typography: Use CSS clamp() for headlines to eliminate jagged font size jumps across window resizing.',
        'Touch-Action Optimization: Use -webkit-overflow-scrolling: touch for smooth momentum scrolling on iOS.'
      ],
      strengths: ['Universal device compatibility', 'Zero layout shift (CLS)', 'Optimal touch & mouse ergonomics'],
      tradeoffs: ['Requires testing across multiple device form factors', 'Complex CSS breakpoint logic', 'Asset loading budgeting'],
      ecosystem: ['CSS Media Queries', 'Container Queries', 'clamp() / min() / max()', 'Touch Events'],
      interviewQuestions: [
        {
          q: 'What is the difference between Media Queries and Container Queries?',
          a: 'Media queries evaluate the global browser viewport dimensions. Container queries evaluate the dimensions of an individual parent container, allowing a component (like a card) to adapt its layout based on where it is placed regardless of screen width.'
        }
      ],
      relatedSkills: ['css3', 'html5', 'animation-systems']
    },

    'animation-systems': {
      id: 'animation-systems',
      name: 'Animation Systems',
      category: 'Frontend Engineering',
      depthLevel: 'Applied / Production',
      shortDescription: 'requestAnimationFrame, physics-based spring curves, 60FPS canvas loops, and purposeful UI micro-interactions.',
      whatIsIt: {
        simple: 'Bringing web pages to life with smooth, purposeful motion that guides user attention and provides instant tactile feedback.',
        technical: 'Orchestrating GPU-accelerated CSS transitions, cubic-bezier spring curves, and high-frequency requestAnimationFrame render loops for HTML5 Canvas.',
        engineeringPerspective: 'Designing motion as communication rather than decoration: respecting user focus, preventing jank with compositor-only properties, and honoring prefers-reduced-motion.'
      },
      howItWorks: {
        title: '60FPS Animation & Physics Render Loop',
        nodes: ['Event Trigger', 'Spring Calculation', 'RAF Timestamp', 'Compositor Batch', 'Screen V-Sync (16.6ms)', 'Frame Commit'],
        steps: [
          { step: '01', title: 'Trigger & Delta', text: 'Calculates physics delta based on user mouse or scroll coordinates.' },
          { step: '02', title: 'RAF Scheduling', text: 'Requests browser animation frame aligned with hardware V-Sync rate.' },
          { step: '03', title: 'Interpolation', text: 'Computes easeOutCubic or spring velocity curve values.' },
          { step: '04', title: 'Hardware Frame', text: 'Commits pixel buffer to screen at rock-solid 60 or 120 FPS.' }
        ]
      },
      codeExample: {
        lang: 'javascript',
        code: `// High-Performance 60FPS Number Counter Engine
function countUp(element, target, duration = 800) {
  const start = performance.now();
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    element.textContent = Math.floor(target * ease) + '+';
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}`,
        demoOutput: '>> Rendered 48 frames in 800ms | 0 dropped frames | 60.0 FPS.'
      },
      problemSolved: {
        without: ['Static, lifeless interfaces feeling unresponsive and slow', 'Janky setInterval animations causing dropped frames and high battery drain', 'Disorienting instant UI state jumps that confuse users'],
        with: ['Fluid, physics-based micro-interactions that confirm user actions', 'Battery-efficient requestAnimationFrame loops synchronized to monitor refresh', 'Smooth spatial transitions maintaining visual context']
      },
      whereIUsedIt: {
        project: 'CogniRoute Oscilloscope & Resume OS Physics',
        role: 'Animation Engineer',
        details: 'Engineered the 60FPS real-time canvas oscilloscope with neon glow shaders and custom 3D card tilt physics across Syed Hamza Resume OS.'
      },
      engineeringDecisions: [
        'GPU Compositing: Animate only transform and opacity to prevent triggering expensive layout reflows.',
        'Accessibility: Always respect @media (prefers-reduced-motion: reduce) by disabling non-essential motion.',
        'Batching: Avoid reading DOM properties (offsetWidth) during animation loops to prevent layout thrashing.'
      ],
      strengths: ['Dramatically enhances user engagement & feel', 'Communicates state changes intuitively', 'Runs smoothly on modern GPUs'],
      tradeoffs: ['Excessive animation can distract users', 'Risk of layout thrashing if poorly implemented', 'Requires device capability testing'],
      ecosystem: ['requestAnimationFrame', 'CSS Transitions / Keyframes', 'Canvas 2D API', 'Framer Motion', 'GSAP'],
      interviewQuestions: [
        {
          q: 'What is layout thrashing and how do you prevent it during animations?',
          a: 'Layout thrashing occurs when JavaScript repeatedly writes to the DOM and then reads a layout property (like offsetHeight or getBoundingClientRect) in the same frame, forcing the browser to perform synchronous recalculations. It is prevented by batching all reads first, followed by all writes.'
        }
      ],
      relatedSkills: ['css3', 'modern-javascript', 'responsive-architecture']
    },

    'tailwind': {
      id: 'tailwind',
      name: 'Tailwind',
      category: 'Frontend Engineering',
      depthLevel: 'Working Knowledge',
      shortDescription: 'Utility-first CSS, compile-time purge, responsive variants, design token scales, and rapid UI prototyping.',
      whatIsIt: {
        simple: 'A styling framework that lets developers style websites directly in their HTML using small, reusable utility classes.',
        technical: 'A utility-first CSS framework with JIT (Just-In-Time) compiler generating minimal atomic CSS classes based on project source usage.',
        engineeringPerspective: 'Eliminating context switching between HTML and CSS files while constraining styling to strict design token scales.'
      },
      howItWorks: {
        title: 'Tailwind JIT Compilation Pipeline',
        nodes: ['JSX / HTML Source', 'Class Scanner', 'Design Tokens', 'JIT Engine', 'Minimal CSS Output', 'Browser Cache'],
        steps: [
          { step: '01', title: 'File Scanning', text: 'Scans source files for utility class names (e.g. flex, p-4, bg-slate-900).' },
          { step: '02', title: 'Token Resolution', text: 'Resolves values against tailwind.config.js theme configuration.' },
          { step: '03', title: 'On-Demand Generation', text: 'Generates only the exact CSS rules detected in the codebase.' },
          { step: '04', title: 'Purged Minification', text: 'Outputs a tiny production stylesheet (often < 15KB compressed).' }
        ]
      },
      codeExample: {
        lang: 'html',
        code: `<!-- Tailwind Utility Composition -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
  <span class="font-bold text-slate-900 dark:text-white">Auralis Studio</span>
  <span class="px-3 py-1 text-xs font-mono text-amber-600 bg-amber-50 rounded-full">2024</span>
</div>`,
        demoOutput: '>> JIT generated 12 atomic CSS classes in 8ms | Bundle size: 8.4KB.'
      },
      problemSolved: {
        without: ['Massive bloated CSS files that grow indefinitely over time', 'Inventing hundreds of arbitrary class names for simple padding and margins', 'Fear of deleting CSS rules because they might break other pages'],
        with: ['Constant-size CSS bundle that stops growing as application scales', 'Standardized spacing, color, and typography scales', 'Confidence that deleting a component deletes all its styling']
      },
      whereIUsedIt: {
        project: 'Modern Full-Stack Prototypes',
        role: 'Frontend Developer',
        details: 'Utilized Tailwind CSS in Next.js applications for rapid component prototyping and responsive design token integration.'
      },
      engineeringDecisions: [
        'Component Abstraction: When utility classes repeat across multiple elements, extract them into reusable React components rather than using @apply.',
        'Theme Centralization: Define all custom brand colors in tailwind.config.js to prevent rogue hex codes.',
        'Arbitrary Values: Avoid excessive arbitrary values (e.g. w-[347px]); stick to the defined design scale.'
      ],
      strengths: ['Extremely fast development velocity', 'Tiny production CSS bundle size', 'Enforces design system constraints'],
      tradeoffs: ['Cluttered JSX markup with long class strings', 'Requires learning Tailwind-specific naming', 'Difficult for complex pseudo-element tricks without plugins'],
      ecosystem: ['Tailwind CSS v3/v4', 'PostCSS', 'Prettier Tailwind Plugin', 'clsx / tailwind-merge'],
      interviewQuestions: [
        {
          q: 'How does Tailwind Just-In-Time (JIT) mode differ from traditional CSS frameworks like Bootstrap?',
          a: 'Traditional frameworks ship a massive pre-compiled stylesheet containing thousands of unused classes. Tailwind JIT scans your template files on-the-fly and generates only the exact CSS classes you actually used, resulting in tiny production stylesheets (often under 10KB).'
        }
      ],
      relatedSkills: ['css3', 'react', 'next-js-14']
    },

    // ------------------------------------------------------------------------
    // 3. BACKEND ENGINEERING (Skills 16-21)
    // ------------------------------------------------------------------------
    'node-js': {
      id: 'node-js',
      name: 'Node.js',
      category: 'Backend Engineering',
      depthLevel: 'Applied / Production',
      shortDescription: 'Asynchronous event-driven JavaScript runtime powered by V8 engine and libuv for high-concurrency microservices.',
      whatIsIt: {
        simple: 'A tool that lets developers run JavaScript on servers to build fast backends, APIs, and real-time tools.',
        technical: 'A C++ runtime environment combining Google Chrome V8 engine with libuv cross-platform asynchronous I/O threadpool and event loop.',
        engineeringPerspective: 'Leveraging single-threaded event-driven non-blocking I/O to handle thousands of concurrent client connections with minimal memory overhead.'
      },
      howItWorks: {
        title: 'Node.js Event-Driven Architecture',
        nodes: ['HTTP Request', 'Event Demultiplexer', 'Libuv Threadpool', 'Async OS Kernel I/O', 'Event Queue', 'JS Callback'],
        steps: [
          { step: '01', title: 'Request Receipt', text: 'Main thread receives incoming TCP connection and parses HTTP headers.' },
          { step: '02', title: 'Non-Blocking Delegation', text: 'Delegates file system reads or network calls to libuv threadpool.' },
          { step: '03', title: 'Continuous Loop', text: 'Main thread immediately accepts subsequent requests without waiting.' },
          { step: '04', title: 'Callback Resolution', text: 'When I/O finishes, libuv pushes callback to event queue to emit response.' }
        ]
      },
      codeExample: {
        lang: 'javascript',
        code: `// High-Concurrency Node.js HTTP Server
import http from 'http';

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/telemetry' && req.method === 'POST') {
    let body = '';
    for await (const chunk of req) body += chunk;
    const payload = JSON.parse(body);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'PROCESSED', sensorId: payload.id }));
  }
});

server.listen(8085);`,
        demoOutput: '>> Server listening on :8085 | Handled 5,200 req/sec at < 12ms latency.'
      },
      problemSolved: {
        without: ['Multi-threaded servers spawning 1 thread per request causing memory exhaustion under traffic spikes', 'Context switching overhead slowing down I/O intensive applications', 'Having to write backend in Java/PHP and frontend in JS'],
        with: ['Lightweight single-threaded concurrency handling 10,000+ simultaneous connections', 'Unified language and shared types across entire full-stack codebase', 'Massive NPM ecosystem of production-ready packages']
      },
      whereIUsedIt: {
        project: 'CogniRoute Telemetry Bridge & Backend APIs',
        role: 'Backend Engineer',
        details: 'Engineered Node.js WebSocket telemetry gateway receiving binary ADC frames from microcontrollers and broadcasting to real-time client visualizers.'
      },
      engineeringDecisions: [
        'Avoid Blocking the Event Loop: Never execute heavy synchronous loops (crypto, regex) on the main thread; offload to worker threads.',
        'Stream Large Payloads: Use Node.js Streams (pipe) instead of buffering entire files in memory.',
        'Clustering: Leverage Node cluster module or PM2 to spawn worker processes across all available CPU cores.'
      ],
      strengths: ['Extremely fast I/O throughput', 'Shared JavaScript language across stack', 'Vast NPM package ecosystem'],
      tradeoffs: ['CPU-intensive tasks can block event loop', 'Callback/promise error handling discipline required', 'Single thread crash vulnerability without process manager'],
      ecosystem: ['V8 Engine', 'libuv', 'NPM', 'Express', 'Fastify', 'WS (WebSockets)'],
      interviewQuestions: [
        {
          q: 'Why is Node.js considered single-threaded when it can handle thousands of concurrent requests?',
          a: 'The JavaScript execution call stack is single-threaded, but underlying I/O operations (file system, DNS, network sockets) are offloaded to libuv and operating system kernel threads (epoll/kqueue). The main thread remains free to handle incoming connections without waiting for I/O to complete.'
        }
      ],
      relatedSkills: ['express', 'rest-apis', 'middleware', 'typescript']
    },

    'express': {
      id: 'express',
      name: 'Express',
      category: 'Backend Engineering',
      depthLevel: 'Applied / Production',
      shortDescription: 'Minimalist web framework for Node.js: HTTP routing, middleware pipeline execution, request parsing, and REST controllers.',
      whatIsIt: {
        simple: 'A fast, flexible tool for Node.js that helps developers organize backend routes, verify users, and respond to API requests.',
        technical: 'An unopinionated, minimalist HTTP server framework providing a robust routing table, middleware pipeline chain, and request/response abstraction.',
        engineeringPerspective: 'Composing deterministic middleware pipelines (Auth -> Validation -> Controller -> Error Handler) for robust REST services.'
      },
      howItWorks: {
        title: 'Express Middleware Chain Execution',
        nodes: ['HTTP Request', 'CORS / Helmet', 'Auth JWT Verify', 'Body Parser', 'Controller Logic', 'JSON Response'],
        steps: [
          { step: '01', title: 'Request Entry', text: 'Incoming request hits first middleware in app.use() sequence.' },
          { step: '02', title: 'Security Headers', text: 'Helmet & CORS middlewares attach security headers and origin checks.' },
          { step: '03', title: 'Authentication', text: 'JWT middleware validates Bearer token and attaches user to req.user.' },
          { step: '04', title: 'Controller Execution', text: 'Route handler executes database query and sends res.status(200).json().' }
        ]
      },
      codeExample: {
        lang: 'javascript',
        code: `import express from 'express';
const app = express();

app.use(express.json());

// Protected Route with Inline Middleware
app.get('/api/profile', authenticateToken, async (req, res, next) => {
  try {
    const user = await db.getUserById(req.user.id);
    res.json({ status: 'OK', user });
  } catch (err) {
    next(err); // Passes to global error handler
  }
});`,
        demoOutput: '>> Executed middleware chain in 3.2ms | Dispatched 200 OK JSON payload.'
      },
      problemSolved: {
        without: ['Writing hundreds of lines of boilerplate code to parse raw HTTP query strings and headers', 'Duplicating authentication checks in every single route handler', 'Inconsistent error response structures across endpoints'],
        with: ['Modular middleware functions reusable across all routes', 'Intuitive declarative URL parameter routing (/users/:id)', 'Centralized error handling middleware catching all exceptions']
      },
      whereIUsedIt: {
        project: 'Backend Microservices & Telemetry APIs',
        role: 'Backend Developer',
        details: 'Constructed modular Express.js REST API servers with JWT authentication, request body validation, and error interceptors.'
      },
      engineeringDecisions: [
        'Global Error Middleware: Always define a 4-argument error handler (err, req, res, next) at the end of the middleware stack.',
        'Asynchronous Error Wrapping: Use express-async-errors or try/catch wrappers to prevent unhandled promise rejections from crashing the process.',
        'Helmet Security: Always mount helmet() to strip X-Powered-By headers and configure strict CSP.'
      ],
      strengths: ['Minimal and unopinionated', 'Industry standard with massive community', 'Highly extensible middleware pattern'],
      tradeoffs: ['Lacks built-in opinionated architecture (requires custom structure)', 'Callback-based history (mitigated by async/await)', 'Slightly slower than newer barebones frameworks (Fastify)'],
      ecosystem: ['Express 4/5', 'Helmet', 'CORS', 'Morgan', 'jsonwebtoken', 'Zod'],
      interviewQuestions: [
        {
          q: 'What is the purpose of the "next" function in Express middleware?',
          a: '"next()" passes control to the next matching middleware function in the stack. If next() is not called and a response is not sent, the client request will hang indefinitely. Passing an argument to next(err) instructs Express to skip all remaining normal middlewares and jump directly to the global error-handling middleware.'
        }
      ],
      relatedSkills: ['node-js', 'rest-apis', 'middleware', 'authentication-jwt-oauth']
    },

    'rest-apis': {
      id: 'rest-apis',
      name: 'REST APIs',
      category: 'Backend Engineering',
      depthLevel: 'Applied / Production',
      shortDescription: 'Stateless architectural constraints, standard HTTP verbs (GET, POST, PUT, DELETE), status codes, and JSON contract design.',
      whatIsIt: {
        simple: 'A standardized set of rules that allows different software systems (like a mobile app and a database) to talk to each other over the internet.',
        technical: 'Representational State Transfer (REST) architectural style emphasizing stateless communication, uniform resource URIs, standard HTTP verbs, and content negotiation.',
        engineeringPerspective: 'Designing intuitive, predictable, and idempotent API contracts that decouple client interfaces from backend implementation details.'
      },
      howItWorks: {
        title: 'REST API Request-Response Transaction',
        nodes: ['Client (HTTP Verb)', 'URL Endpoint', 'Routing Layer', 'Business Logic', 'DB Transaction', 'HTTP Status Code'],
        steps: [
          { step: '01', title: 'HTTP Request', text: 'Client issues GET /api/v1/projects?status=active with JSON accept header.' },
          { step: '02', title: 'Resource Resolution', text: 'Router identifies "projects" resource and parses filtering parameters.' },
          { step: '03', title: 'CRUD Operation', text: 'Controller queries database table and maps records to JSON representation.' },
          { step: '04', title: 'Status Code & Envelope', text: 'Returns 200 OK with standardized JSON payload and cache-control headers.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// RESTful Resource Controller Contract
// GET /api/projects/:id -> 200 OK | 404 Not Found
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const project = await db.findProject(params.id);
  if (!project) {
    return Response.json({ error: 'Project not found' }, { status: 404 });
  }
  return Response.json({ data: project }, { status: 200 });
}`,
        demoOutput: '>> HTTP/1.1 200 OK | Content-Type: application/json | ETag: "a8f3b" | 18ms'
      },
      problemSolved: {
        without: ['Custom arbitrary protocol formats that confuse developers', 'Stateful server sessions that make horizontal scaling difficult', 'Inconsistent error messages requiring custom client parsing'],
        with: ['Universal predictability using standard HTTP verbs and status codes', 'Stateless requests enabling instant horizontal server scaling behind load balancers', 'Standard JSON serialization compatible across any language']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & NeuralForge APIs',
        role: 'API Architect',
        details: 'Designed and documented RESTful API endpoints for Auralis Studio handling project generation, telemetry retrieval, and user profile management.'
      },
      engineeringDecisions: [
        'Idempotency: Ensure GET, PUT, and DELETE operations are strictly idempotent (repeated identical calls produce same end state).',
        'Proper Status Codes: Use 201 Created for POSTs, 204 No Content for DELETEs, 400 for Bad Input, 401 for Unauthenticated, 403 for Forbidden.',
        'Pagination: Always enforce cursor or limit/offset pagination on list endpoints to prevent accidental full-table dumps.'
      ],
      strengths: ['Universal interoperability', 'Standardized caching semantics (HTTP ETag, Cache-Control)', 'Self-describing resource URIs'],
      tradeoffs: ['Risk of over-fetching or under-fetching data', 'Multiple roundtrips needed for related nested resources', 'Statelessness requires sending auth tokens on every request'],
      ecosystem: ['OpenAPI / Swagger', 'Postman', 'HTTP/1.1 & HTTP/2', 'JSON Schema', 'Fetch API'],
      interviewQuestions: [
        {
          q: 'What makes an HTTP method "idempotent" and which REST verbs are idempotent?',
          a: 'An HTTP method is idempotent if executing it multiple times with the same parameters produces the exact same server state as executing it once. GET, PUT, DELETE, HEAD, and OPTIONS are idempotent. POST and PATCH are not idempotent.'
        }
      ],
      relatedSkills: ['node-js', 'express', 'api-architecture', 'postman']
    },

    'authentication-jwt-oauth': {
      id: 'authentication-jwt-oauth',
      name: 'Authentication (JWT/OAuth)',
      category: 'Backend Engineering',
      depthLevel: 'Applied / Production',
      shortDescription: 'Cryptographic token signing, JWT claims, stateless session verification, OAuth 2.0 authorization delegation, and Refresh Token rotation.',
      whatIsIt: {
        simple: 'Securely verifying who a user is (Authentication) and what they are allowed to do (Authorization) across web applications.',
        technical: 'Stateless authentication via digitally signed JSON Web Tokens (HMAC-SHA256 or RS256) combined with OAuth 2.0 authorization flows (Authorization Code Flow with PKCE).',
        engineeringPerspective: 'Balancing security and performance: storing access tokens in secure httpOnly cookies, rotating refresh tokens, and verifying signatures at edge without database roundtrips.'
      },
      howItWorks: {
        title: 'JWT Authentication & Validation Lifecycle',
        nodes: ['User Credentials', 'Auth Server', 'Signed JWT Issued', 'Client Storage', 'Bearer Header', 'Signature Verify (Edge)'],
        steps: [
          { step: '01', title: 'Login & Validate', text: 'User submits credentials; server verifies password hash via Argon2/bcrypt.' },
          { step: '02', title: 'Token Signing', text: 'Server signs JWT containing userId and exp claim using private secret.' },
          { step: '03', title: 'Secure Transport', text: 'Issues short-lived Access Token (15 min) and httpOnly Refresh Token cookie.' },
          { step: '04', title: 'Stateless Verification', text: 'Edge handler cryptographically verifies signature in < 1ms without DB lookup.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Stateless Edge JWT Signature Verifier
import { jwtVerify } from 'jose';

export async function verifyAuthToken(req: Request) {
  const authHeader = req.headers.get('Authorization');
  const token = authHeader?.replace('Bearer ', '');
  if (!token) throw new Error('Missing authentication token');

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload; // Decoded claims: { sub: 'usr_123', role: 'admin' }
}`,
        demoOutput: '>> Verified HMAC-SHA256 signature in 0.8ms | Subject: user_8829 | Valid.'
      },
      problemSolved: {
        without: ['Stateful database session lookups on every single HTTP request slowing down APIs', 'Vulnerabilities to Cross-Site Scripting (XSS) from storing tokens in localStorage', 'Monolithic authentication that cannot support third-party logins (Google, GitHub)'],
        with: ['Stateless, sub-millisecond cryptographic token verification at edge', 'Secure httpOnly SameSite cookies immune to JavaScript XSS theft', 'Standard OAuth 2.0 federation supporting social logins and delegated permissions']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & Supabase Auth',
        role: 'Security & Backend Engineer',
        details: 'Implemented secure Supabase JWT authentication in Auralis Studio with automated refresh token rotation and row-level database authorization.'
      },
      engineeringDecisions: [
        'httpOnly Cookies: Store refresh tokens in httpOnly, Secure, SameSite=Lax cookies to completely block client-side script theft.',
        'Short Access Token Lifespan: Set JWT expiration to 15 minutes to minimize exposure window if a token is compromised.',
        'OAuth vs Auth: Never treat OAuth 2.0 as authentication on its own; use OpenID Connect (OIDC) layer on top of OAuth for identity.'
      ],
      strengths: ['Stateless verification scales infinitely', 'Decoupled auth server from resource servers', 'Standardized cross-domain federation'],
      tradeoffs: ['JWT revocation requires blacklist or short expirations', 'Token payload size transmitted on every request', 'Cryptographic secret key management critical'],
      ecosystem: ['Supabase Auth', 'jose / jsonwebtoken', 'OAuth 2.0 / PKCE', 'NextAuth / Auth.js', 'Argon2'],
      interviewQuestions: [
        {
          q: 'What is the architectural difference between Authentication (AuthN) and Authorization (AuthZ)?',
          a: 'Authentication is the process of verifying who you are (e.g. logging in with email and password to prove identity). Authorization is the process of verifying what you have permission to access (e.g. checking if user_123 has permission to edit project_456).'
        }
      ],
      relatedSkills: ['supabase', 'row-level-security-rls', 'middleware', 'node-js']
    },

    'server-side-architecture': {
      id: 'server-side-architecture',
      name: 'Server-side Architecture',
      category: 'Backend Engineering',
      depthLevel: 'Production / Architecture',
      shortDescription: 'Layered architecture (Controllers, Services, Repositories), dependency injection, error boundaries, and scalable API services.',
      whatIsIt: {
        simple: 'Organizing backend code into clean, specialized layers so the system is easy to maintain, test, and scale over time.',
        technical: 'Architecting multi-tier server applications enforcing separation of concerns across Routing, Request Validation, Business Domain Services, and Data Access Repositories.',
        engineeringPerspective: 'Isolating business logic from delivery mechanisms (HTTP/CLI) and storage layers (SQL/NoSQL) to enable unit testing and architectural agility.'
      },
      howItWorks: {
        title: 'Layered Server Architecture Flow',
        nodes: ['HTTP Request', 'Route Controller', 'Validation Layer', 'Domain Service', 'Repository Layer', 'Database'],
        steps: [
          { step: '01', title: 'Controller Entry', text: 'Controller receives HTTP request and handles protocol-specific concerns.' },
          { step: '02', title: 'Schema Validation', text: 'Validates input payload against Zod DTO (Data Transfer Object) rules.' },
          { step: '03', title: 'Domain Service', text: 'Service executes core business rules (e.g. quota checks, billing logic).' },
          { step: '04', title: 'Data Repository', text: 'Repository abstracts SQL queries and handles database persistence.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Layered Domain Service Pattern
class ProjectService {
  constructor(private repo: ProjectRepository) {}

  async createProject(userId: string, data: CreateProjectDTO) {
    const quota = await this.repo.getUserQuota(userId);
    if (quota.used >= quota.limit) throw new QuotaExceededError();

    const project = await this.repo.save({ ...data, ownerId: userId });
    return project;
  }
}`,
        demoOutput: '>> Executed Service logic | Isolated from HTTP req/res | Unit test passed.'
      },
      problemSolved: {
        without: ['Massive 1,000-line route handler files mixing SQL queries with HTTP response logic', 'Impossible to unit test business logic without spinning up a live HTTP server and database', 'Tight coupling making database migrations risky and painful'],
        with: ['Cleanly separated layers with distinct single responsibilities', 'Fast in-memory unit tests using mocked repository interfaces', 'Ability to switch database engines without changing business logic']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & NeuralForge Backend',
        role: 'Systems Architect',
        details: 'Structured backend services using controller-service-repository patterns to keep AI synthesis logic completely decoupled from database access layers.'
      },
      engineeringDecisions: [
        'Single Responsibility: Route controllers should only validate input and return HTTP responses — zero database queries in controllers.',
        'Domain Exceptions: Throw domain-specific errors in services and let global middleware map them to HTTP status codes.',
        'Interface Segregation: Depend on repository abstractions rather than raw database client singletons.'
      ],
      strengths: ['High maintainability and readability', 'Effortless unit testing with mocked interfaces', 'Modular and scalable code organization'],
      tradeoffs: ['Initial architectural boilerplate', 'More files and directories to navigate', 'Can be over-engineered for trivial CRUD apps'],
      ecosystem: ['Clean Architecture', 'Repository Pattern', 'Dependency Injection', 'Zod', 'Prisma / Drizzle'],
      interviewQuestions: [
        {
          q: 'Why should database queries not be written directly inside route controller functions?',
          a: 'Writing database queries inside controllers tightly couples business logic to the HTTP transport layer. It makes unit testing impossible without a live database, duplicates query logic across multiple routes, and makes refactoring database schemas significantly more error-prone.'
        }
      ],
      relatedSkills: ['middleware', 'rest-apis', 'node-js', 'system-design']
    },

    'middleware': {
      id: 'middleware',
      name: 'Middleware',
      category: 'Backend Engineering',
      depthLevel: 'Applied / Production',
      shortDescription: 'Chain-of-responsibility pattern, request interception, authentication gates, rate limiting, and centralized error handling.',
      whatIsIt: {
        simple: 'A series of checkpoints that every request passes through before reaching the main page (like a security guard checking your badge).',
        technical: 'Functions in the request-response cycle that have access to the request object, response object, and next middleware function in the execution stack.',
        engineeringPerspective: 'Cross-cutting concerns abstraction: centralizing logging, auth verification, CORS, and rate limiting into composable pipeline filters.'
      },
      howItWorks: {
        title: 'Middleware Pipeline Execution Stack',
        nodes: ['Request', 'Logger MW', 'Rate Limit MW', 'Auth MW', 'Validation MW', 'Handler'],
        steps: [
          { step: '01', title: 'Logger', text: 'Logs timestamp, IP address, and HTTP method.' },
          { step: '02', title: 'Rate Limiter', text: 'Checks Redis token bucket; rejects with 429 if threshold exceeded.' },
          { step: '03', title: 'Auth Verifier', text: 'Decodes JWT; attaches authenticated user object to request.' },
          { step: '04', title: 'Input Validator', text: 'Validates request body against schema; returns 400 on error.' },
          { step: '05', title: 'Route Handler', text: 'Executes primary controller logic and returns response.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Composable Next.js Edge Rate-Limiter Middleware
export async function middleware(req: NextRequest) {
  const ip = req.ip || '127.0.0.1';
  const { success, limit, remaining } = await rateLimiter.limit(ip);

  if (!success) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  const response = NextResponse.next();
  response.headers.set('X-RateLimit-Remaining', remaining.toString());
  return response;
}`,
        demoOutput: '>> Rate limit check passed (48/60 remaining) | Passed to next handler in 1.1ms.'
      },
      problemSolved: {
        without: ['Copy-pasting authentication and logging code into every single API endpoint', 'Missing rate limiting allowing malicious bots to spam expensive endpoints', 'Unhandled errors causing servers to crash silently'],
        with: ['Reusable cross-cutting filters executed automatically on every request', 'Automated edge rate limiting protecting downstream database infrastructure', 'Centralized error interceptor ensuring consistent 500 error envelopes']
      },
      whereIUsedIt: {
        project: 'Auralis Studio Edge Middleware',
        role: 'Full-Stack Developer',
        details: 'Implemented Next.js edge middleware in Auralis Studio to protect authenticated routes, verify Supabase session tokens, and attach security headers.'
      },
      engineeringDecisions: [
        'Fail-Fast Pipeline: Place lightweight security checks (rate limiting, IP blocking) at the very start of the middleware chain before expensive DB calls.',
        'Stateless Edge Execution: Keep middleware logic lightweight and stateless so it runs globally at edge nodes.',
        'Never Mutate Global State: Attach request-scoped data strictly to the req object rather than shared module variables.'
      ],
      strengths: ['Centralizes cross-cutting concerns', 'Composable and reusable', 'Enforces strict security boundaries'],
      tradeoffs: ['Middleware order is critical (bugs if sequence is wrong)', 'Excessive middleware adds latency to every request', 'Can obscure request execution flow if overused'],
      ecosystem: ['Next.js Middleware', 'Express Middleware', 'Helmet', 'express-rate-limit', 'CORS'],
      interviewQuestions: [
        {
          q: 'How does Next.js Edge Middleware differ from traditional Express middleware?',
          a: 'Express middleware runs on a centralized Node.js server. Next.js Edge Middleware runs globally on lightweight V8 Edge isolates deployed across CDN edge locations before the request even reaches the origin server, providing sub-10ms response times for redirects and auth checks.'
        }
      ],
      relatedSkills: ['express', 'authentication-jwt-oauth', 'server-side-architecture', 'vercel-edge']
    },

    // ------------------------------------------------------------------------
    // 4. DATABASES (Skills 22-26)
    // ------------------------------------------------------------------------
    'supabase': {
      id: 'supabase',
      name: 'Supabase',
      category: 'Databases',
      depthLevel: 'Applied / Production',
      shortDescription: 'Open-source Firebase alternative: managed PostgreSQL, Row-Level Security, instant REST/GraphQL APIs, and Realtime WebSockets.',
      whatIsIt: {
        simple: 'A complete backend database platform that gives you a powerful database, user login system, file storage, and real-time updates instantly.',
        technical: 'An integrated backend-as-a-service built on native PostgreSQL, PostgREST automatic API generation, GoTrue auth, and real-time CDC (Change Data Capture) via WebSockets.',
        engineeringPerspective: 'Eliminating boilerplate backend CRUD APIs: pushing authorization directly into database RLS policies and querying PostgreSQL safely from client or edge.'
      },
      howItWorks: {
        title: 'Supabase Integrated Architecture',
        nodes: ['Client Query', 'Supabase Edge Gateway', 'GoTrue Auth (JWT)', 'PostgREST Engine', 'PostgreSQL (RLS Filter)', 'Realtime CDC'],
        steps: [
          { step: '01', title: 'Client Dispatch', text: 'Client invokes supabase.from("projects").select() with user session JWT.' },
          { step: '02', title: 'PostgREST Translation', text: 'Translates HTTP query into optimized parameterized SQL query.' },
          { step: '03', title: 'RLS Evaluation', text: 'PostgreSQL evaluates Row-Level Security policy against auth.uid().' },
          { step: '04', title: 'Data & Realtime Broadcast', text: 'Returns filtered JSON rows and broadcasts changes to WebSocket subscribers.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Direct Client-Side Query with RLS Enforcement
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function getUserProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('id, name, created_at')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data; // Only returns rows owned by current authenticated user!
}`,
        demoOutput: '>> Executed query via PostgREST | RLS enforced | Returned 4 rows in 14ms.'
      },
      problemSolved: {
        without: ['Writing thousands of lines of boilerplate CRUD endpoints in Node/Express', 'Managing and patching complex database server infrastructure manually', 'Building complex custom WebSocket servers for live collaborative state'],
        with: ['Instant auto-generated REST APIs for every database table', 'Rock-solid security enforced at the SQL layer with Row-Level Security', 'Built-in real-time subscriptions and file storage buckets']
      },
      whereIUsedIt: {
        project: 'Auralis Studio Platform',
        role: 'Database & Backend Lead',
        details: 'Architected Auralis Studio database on Supabase PostgreSQL with automated RLS policies, custom SQL triggers, and real-time state synchronization.'
      },
      engineeringDecisions: [
        'Always Enable RLS: Never leave a Supabase table without ALTER TABLE ... ENABLE ROW LEVEL SECURITY.',
        'Use Generated Database Types: Use the Supabase CLI to generate TypeScript types from the live database schema (supabase gen types typescript).',
        'Database Functions for Complex Transactions: Use PostgreSQL Stored Procedures (RPC) for atomic multi-table updates.'
      ],
      strengths: ['True PostgreSQL underneath (no vendor lock-in)', 'Instant auto-generated APIs', 'Powerful Row-Level Security model'],
      tradeoffs: ['Complex RLS queries can impact performance if unindexed', 'Connection pooling limits under heavy concurrency', 'Client-side querying requires careful schema design'],
      ecosystem: ['PostgreSQL', 'PostgREST', 'GoTrue Auth', 'pgvector', 'Supabase CLI'],
      interviewQuestions: [
        {
          q: 'Why is Supabase considered superior to proprietary NoSQL platforms like Firebase for relational data?',
          a: 'Supabase is built on native, open-source PostgreSQL. It gives you true relational integrity (foreign keys, joins, ACID transactions, complex SQL queries) and vector search capabilities without vendor lock-in, while Firebase uses document-based NoSQL which requires extensive data denormalization and lacks native relational constraints.'
        }
      ],
      relatedSkills: ['postgresql', 'row-level-security-rls', 'relational-schema-design', 'sql-optimization']
    },

    'postgresql': {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'Databases',
      depthLevel: 'Applied / Production',
      shortDescription: 'ACID-compliant relational database management system, advanced indexing (B-Tree, GIN, HNSW), JSONB, and complex query plans.',
      whatIsIt: {
        simple: 'A battle-tested database that stores structured business data reliably, guarantees consistency, and never loses information.',
        technical: 'An open-source object-relational database management system (ORDBMS) featuring full ACID compliance, Multi-Version Concurrency Control (MVCC), JSONB querying, and extensible indexing.',
        engineeringPerspective: 'The definitive enterprise data storage engine: designing normalized relational models, tuning query execution plans via EXPLAIN ANALYZE, and maintaining transactional integrity.'
      },
      howItWorks: {
        title: 'PostgreSQL Query Execution Lifecycle',
        nodes: ['SQL Query String', 'Parser & Rewriter', 'Query Optimizer', 'Execution Plan', 'Buffer Pool / Disk', 'Result Set'],
        steps: [
          { step: '01', title: 'Parse & Semantic Check', text: 'Parses SQL syntax and verifies column references against database catalog.' },
          { step: '02', title: 'Query Optimization', text: 'Cost-based optimizer evaluates index scans vs sequential scans.' },
          { step: '03', title: 'Execution Engine', text: 'Executes chosen plan (Nested Loop, Hash Join, Index Scan).' },
          { step: '04', title: 'Buffer Pool Fetch', text: 'Retrieves pages from shared memory buffer pool or disk storage.' }
        ]
      },
      codeExample: {
        lang: 'sql',
        code: `-- Optimized PostgreSQL Query with Index Scan
EXPLAIN ANALYZE
SELECT p.id, p.name, u.email
FROM projects p
JOIN users u ON p.owner_id = u.id
WHERE p.status = 'active' AND p.created_at > NOW() - INTERVAL '30 days';`,
        demoOutput: '>> Index Scan using idx_projects_status | Execution Time: 0.482 ms'
      },
      problemSolved: {
        without: ['Data corruption and inconsistent records from lack of transactional ACID guarantees', 'Slow queries choking the system as table sizes grow into millions of rows', 'Rigid databases incapable of storing both structured tables and flexible JSON'],
        with: ['Absolute mathematical ACID transaction consistency', 'Sub-millisecond query execution on millions of records using B-Tree and GIN indexes', 'Hybrid relational and JSONB document storage in a single unified database']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & NeuralForge Systems',
        role: 'Database Engineer',
        details: 'Designed relational schemas, foreign key cascades, JSONB metadata columns, and B-Tree indexes for Auralis Studio on PostgreSQL 16.'
      },
      engineeringDecisions: [
        'Foreign Keys with Cascades: Always enforce referential integrity with ON DELETE CASCADE to prevent orphaned records.',
        'Index Foreign Keys: PostgreSQL does not automatically index foreign key columns — always create B-Tree indexes on join columns.',
        'JSONB for Dynamic Metadata: Use JSONB columns for flexible AI generation metadata, indexed with GIN indexes.'
      ],
      strengths: ['Rock-solid ACID compliance', 'Extremely powerful indexing engines', 'Active open-source community with rich extensions (pgvector, PostGIS)'],
      tradeoffs: ['Requires database tuning and connection pooling configuration', 'Horizontal scaling for writes is complex', 'VACUUM maintenance overhead for heavy updates'],
      ecosystem: ['pgvector', 'PgBouncer', 'DBeaver', 'Prisma', 'Drizzle ORM', 'Supabase'],
      interviewQuestions: [
        {
          q: 'What is Multi-Version Concurrency Control (MVCC) in PostgreSQL?',
          a: 'MVCC allows multiple transactions to read and write simultaneously without locking the entire table. When a row is updated or deleted, PostgreSQL creates a new version of the row with transaction visibility identifiers (xmin/xmax). Readers never block writers, and writers never block readers.'
        }
      ],
      relatedSkills: ['supabase', 'sql-optimization', 'relational-schema-design', 'row-level-security-rls']
    },

    'relational-schema-design': {
      id: 'relational-schema-design',
      name: 'Relational Schema Design',
      category: 'Databases',
      depthLevel: 'Production / Architecture',
      shortDescription: 'Entity-Relationship modeling, 3rd Normal Form (3NF), primary/foreign key constraints, and data integrity guarantees.',
      whatIsIt: {
        simple: 'Planning the blueprint for how different types of information (like users, orders, and products) connect together cleanly in a database.',
        technical: 'Designing normalized relational data architectures (1NF to 3NF/BCNF) to eliminate data redundancy, prevent update anomalies, and enforce relational integrity constraints.',
        engineeringPerspective: 'Creating scalable, self-describing domain data models that accurately reflect business invariants while maintaining optimal query join paths.'
      },
      howItWorks: {
        title: 'Relational Normalization & Entity Mapping',
        nodes: ['Domain Entities', '1NF (Atomic Data)', '2NF (No Partial Dep)', '3NF (No Transitive Dep)', 'Constraint Integrity', 'Optimized Schema'],
        steps: [
          { step: '01', title: 'Entity Identification', text: 'Identifies core business entities (Users, Projects, Artifacts).' },
          { step: '02', title: 'Atomic Normalization (1NF)', text: 'Ensures all column values are atomic with unique row primary keys.' },
          { step: '03', title: 'Dependency Pruning (2NF/3NF)', text: 'Eliminates partial and transitive dependencies into dedicated tables.' },
          { step: '04', title: 'Integrity Constraints', text: 'Enforces NOT NULL, UNIQUE, CHECK constraints, and Foreign Keys.' }
        ]
      },
      codeExample: {
        lang: 'sql',
        code: `-- 3NF Normalized Schema Blueprint
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  status TEXT CHECK (status IN ('draft', 'active', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);`,
        demoOutput: '>> Enforced 3NF normalization | Foreign key cascade verified | 0 redundancy.'
      },
      problemSolved: {
        without: ['Duplicate data scattered across tables causing data inconsistency when updated', 'Accidental deletion of parent records leaving orphaned child data in the database', 'Unstructured tables that become impossible to query efficiently as features expand'],
        with: ['Single source of truth for every business entity', 'Automatic referential integrity enforcement preventing orphaned records', 'Predictable and performant SQL join queries across relationships']
      },
      whereIUsedIt: {
        project: 'Auralis Studio Data Architecture',
        role: 'Data Architect',
        details: 'Designed the multi-tenant relational schema for Auralis Studio, modeling user workspaces, collaborative project assets, AI generation histories, and billing tiers.'
      },
      engineeringDecisions: [
        'UUID Primary Keys: Use UUIDv4 or UUIDv7 for primary keys to allow safe client-side ID generation and seamless multi-database migrations.',
        'Explicit CHECK Constraints: Enforce domain status enums at the database level using CHECK constraints.',
        'Pragmatic Denormalization: Keep OLTP transactional data strictly in 3NF; only denormalize computed summary columns when heavy query aggregation requires it.'
      ],
      strengths: ['Guarantees mathematical data consistency', 'Prevents update and delete anomalies', 'Standardized and easy for any engineer to understand'],
      tradeoffs: ['Requires multiple JOIN operations for complex views', 'Schema migrations require planned deployment strategies', 'Strict constraints require upfront domain planning'],
      ecosystem: ['PostgreSQL', 'ER Diagrams', 'Prisma Schema', 'Drizzle ORM', 'dbdiagram.io'],
      interviewQuestions: [
        {
          q: 'Explain Third Normal Form (3NF) and why it matters.',
          a: 'A table is in 3NF if it is in 2NF and has no transitive dependencies (every non-key attribute must depend directly on the primary key, the whole primary key, and nothing but the primary key). This eliminates data redundancy, ensuring that updating a field in one place updates it everywhere consistently.'
        }
      ],
      relatedSkills: ['postgresql', 'supabase', 'sql-optimization']
    },

    'row-level-security-rls': {
      id: 'row-level-security-rls',
      name: 'Row-Level Security (RLS)',
      category: 'Databases',
      depthLevel: 'Applied / Production',
      shortDescription: 'PostgreSQL security policies, user context binding (auth.uid()), multi-tenant data isolation, and database-layer authorization.',
      whatIsIt: {
        simple: 'Security rules built directly into the database so users can only ever see and edit their own private records.',
        technical: 'A PostgreSQL security feature that evaluates boolean policy expressions on every SELECT, INSERT, UPDATE, and DELETE query before returning data.',
        engineeringPerspective: 'Defense in depth: shifting authorization logic from brittle application code directly into the database engine, making data leakage mathematically impossible.'
      },
      howItWorks: {
        title: 'PostgreSQL Row-Level Security Execution',
        nodes: ['Client Query', 'Auth Token (JWT)', 'Session Context (auth.uid())', 'RLS Policy Filter', 'Row Visibility Check', 'Authorized Rows Only'],
        steps: [
          { step: '01', title: 'Query Receipt', text: 'Client issues query SELECT * FROM projects with user JWT.' },
          { step: '02', title: 'Context Hydration', text: 'PostgreSQL sets auth.uid() session context from the verified JWT.' },
          { step: '03', title: 'Policy Injection', text: 'Database engine injects WHERE (owner_id = auth.uid()) into SQL query plan.' },
          { step: '04', title: 'Atomic Filtering', text: 'Only rows satisfying the policy are read from disk and returned to client.' }
        ]
      },
      codeExample: {
        lang: 'sql',
        code: `-- PostgreSQL Multi-Tenant Row-Level Security Policy
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 1. Users can only read their own projects
CREATE POLICY "Users can view own projects"
ON projects FOR SELECT
USING (auth.uid() = owner_id);

-- 2. Users can only update projects they own
CREATE POLICY "Users can update own projects"
ON projects FOR UPDATE
USING (auth.uid() = owner_id);`,
        demoOutput: '>> RLS policy evaluated | User A queried table | 0 rows from User B exposed.'
      },
      problemSolved: {
        without: ['Developers forgetting to add "WHERE user_id = current_user" in backend code causing catastrophic data leaks', 'Broken authorization vulnerabilities where User A can edit User B\'s data by guessing IDs', 'Having to duplicate security checks across every single backend API route'],
        with: ['Impossible to leak other users\' data even if client-side code makes a mistake', 'Centralized, audit-proof authorization rules defined in a single SQL policy file', 'Direct client-to-database queries enabled safely in serverless environments']
      },
      whereIUsedIt: {
        project: 'Auralis Studio Multi-Tenant Security',
        role: 'Security Engineer',
        details: 'Architected comprehensive RLS policies across all tables in Auralis Studio, completely isolating tenant data, workspace assets, and billing records.'
      },
      engineeringDecisions: [
        'Index Foreign Keys in RLS: Always create B-Tree indexes on the column checked by RLS (e.g. owner_id) to prevent slow sequential table scans.',
        'Use Separate Policies for Operations: Create distinct policies for SELECT, INSERT, UPDATE, and DELETE rather than a generic ALL policy for granular control.',
        'Security Definer Functions: Use SECURITY DEFINER functions judiciously when subqueries need to bypass RLS to check team membership.'
      ],
      strengths: ['Bulletproof database-level security', 'Eliminates authorization bugs in application code', 'Enables safe direct client querying with Supabase'],
      tradeoffs: ['Unindexed RLS policies can cause severe query slowdowns', 'Complex team-based permission queries require careful tuning', 'Difficult to debug if policies become overly nested'],
      ecosystem: ['PostgreSQL RLS', 'Supabase Auth', 'PostgREST', 'auth.uid()', 'SQL Policies'],
      interviewQuestions: [
        {
          q: 'What happens if a developer forgets to add a WHERE clause to an API endpoint when RLS is enabled?',
          a: 'The query will still only return rows that satisfy the active RLS policy for the authenticated user context. PostgreSQL automatically and transparently rewrites the query internally to inject the policy filter, making it impossible for the user to see records belonging to other tenants.'
        }
      ],
      relatedSkills: ['supabase', 'postgresql', 'authentication-jwt-oauth']
    },

    'sql-optimization': {
      id: 'sql-optimization',
      name: 'SQL Optimization',
      category: 'Databases',
      depthLevel: 'Applied / Production',
      shortDescription: 'EXPLAIN ANALYZE query plans, B-Tree & composite indexing, avoiding N+1 bottlenecks, and connection pooling.',
      whatIsIt: {
        simple: 'Making database queries run in milliseconds instead of seconds, even when searching through millions of records.',
        technical: 'Analyzing query execution plans with EXPLAIN (ANALYZE, BUFFERS), eliminating sequential table scans with targeted B-Tree/GIN indexes, and optimizing join algorithms.',
        engineeringPerspective: 'Understanding the database engine as a physical I/O machine: minimizing disk reads, utilizing buffer cache hits, and structuring queries to utilize index scans.'
      },
      howItWorks: {
        title: 'Query Optimization & Index Scanning Flow',
        nodes: ['Slow Query', 'EXPLAIN ANALYZE', 'Identify Seq Scan', 'Create B-Tree Index', 'Index Condition Scan', 'Sub-Millisecond Result'],
        steps: [
          { step: '01', title: 'Query Inspection', text: 'Runs EXPLAIN ANALYZE to identify high-cost sequential scans and disk reads.' },
          { step: '02', title: 'Index Design', text: 'Designs composite B-Tree index matching WHERE and ORDER BY column sequence.' },
          { step: '03', title: 'Plan Re-Evaluation', text: 'Optimizer switches from O(N) full table scan to O(log N) Index Scan.' },
          { step: '04', title: 'Performance Verification', text: 'Execution time drops from 450ms to 1.2ms with 99% buffer cache hit ratio.' }
        ]
      },
      codeExample: {
        lang: 'sql',
        code: `-- Creating Targeted Composite Index for High-Traffic Query
-- Query: SELECT * FROM telemetry WHERE device_id = ? ORDER BY recorded_at DESC;
CREATE INDEX idx_telemetry_device_time 
ON telemetry (device_id, recorded_at DESC);

-- Verification:
EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM telemetry 
WHERE device_id = 'dev_102' 
ORDER BY recorded_at DESC 
LIMIT 20;`,
        demoOutput: '>> Plan: Index Scan | Cost: 0.28..8.30 | Execution Time: 0.34ms (was 380ms).'
      },
      problemSolved: {
        without: ['Database CPU spiking to 100% under high traffic causing website outages', 'Slow 2-second page loads from unindexed queries scanning millions of rows', 'N+1 query cascades in ORMs overwhelming database connection pools'],
        with: ['Predictable sub-millisecond query response times regardless of data volume', 'Efficient buffer pool memory utilization reducing expensive disk I/O', 'Optimized batch queries eliminating N+1 ORM bottlenecks']
      },
      whereIUsedIt: {
        project: 'CogniRoute & Auralis Database Tuning',
        role: 'Database Engineer',
        details: 'Optimized high-frequency telemetry query plans in CogniRoute, adding composite timestamp indexes and reducing query latency by 92%.'
      },
      engineeringDecisions: [
        'Index Column Order: In composite indexes (A, B), place the equality column first and range/sort column second.',
        'Avoid SELECT *: Always select explicit column lists to reduce network payload size and enable index-only scans.',
        'Paginate with Keyset/Cursor: Avoid high OFFSET pagination (LIMIT 20 OFFSET 50000) in favor of cursor pagination (WHERE id > last_seen_id).'
      ],
      strengths: ['Instant 10x-100x performance improvements', 'Reduces server infrastructure costs', 'Prevents database crashes during traffic spikes'],
      tradeoffs: ['Indexes consume additional disk space', 'Every index slightly slows down INSERT and UPDATE write speeds', 'Over-indexing can confuse the query planner'],
      ecosystem: ['EXPLAIN ANALYZE', 'pg_stat_statements', 'B-Tree', 'GIN', 'PgBouncer', 'DBeaver'],
      interviewQuestions: [
        {
          q: 'What is the N+1 query problem and how do you resolve it in modern applications?',
          a: 'The N+1 query problem occurs when an application executes 1 initial query to fetch N parent records, and then executes N separate individual queries to fetch child data for each parent (e.g. 100 projects causing 101 queries). It is resolved by using SQL JOINs, subquery aggregations, or ORM eager loading (e.g. Prisma include or DataLoader batching).'
        }
      ],
      relatedSkills: ['postgresql', 'supabase', 'relational-schema-design']
    },

    // ------------------------------------------------------------------------
    // 5. INFRASTRUCTURE & TOOLS (Skills 27-31)
    // ------------------------------------------------------------------------
    'vercel-edge': {
      id: 'vercel-edge',
      name: 'Vercel Edge',
      category: 'Infrastructure',
      depthLevel: 'Applied / Production',
      shortDescription: 'Global CDN edge network, lightweight V8 runtime, serverless function routing, and sub-50ms TTFB worldwide.',
      whatIsIt: {
        simple: 'A cloud platform that deploys your website code to hundreds of data centers worldwide so it loads instantly anywhere on earth.',
        technical: 'Globally distributed serverless computing platform leveraging V8 isolates, anycast routing, edge middleware, and automated Git CI/CD deployments.',
        engineeringPerspective: 'Deploying compute closer to users: executing authentication, geolocation redirects, and LLM streaming at edge nodes with sub-50ms Time-To-First-Byte.'
      },
      howItWorks: {
        title: 'Vercel Global Edge Routing & Execution',
        nodes: ['User Request', 'Anycast DNS', 'Nearest Edge Node', 'V8 Isolate Execution', 'Origin Cache Hit', 'Instant Stream'],
        steps: [
          { step: '01', title: 'Anycast Routing', text: 'Routes user request to geographically closest edge data center.' },
          { step: '02', title: 'Edge Middleware', text: 'Executes lightweight V8 isolate in < 5ms for auth and routing checks.' },
          { step: '03', title: 'Edge Caching', text: 'Serves pre-rendered static HTML or ISR cache directly from CDN memory.' },
          { step: '04', title: 'Streaming Proxy', text: 'Proxies LLM streaming tokens with persistent HTTP/2 connection.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Vercel Edge Runtime Configuration
export const runtime = 'edge'; // Deploys to global V8 Edge nodes

export async function GET(req: Request) {
  const country = req.headers.get('x-vercel-ip-country') || 'US';
  return Response.json({
    message: 'Served from edge data center',
    region: process.env.VERCEL_REGION,
    userCountry: country
  });
}`,
        demoOutput: '>> Executed in region iad1 (V8 Isolate) | Boot time: 0ms | TTFB: 28ms.'
      },
      problemSolved: {
        without: ['Centralized servers in one country causing 300ms+ network latency for users on other continents', 'Cold starts on heavy serverless functions causing 2-second delays', 'Complex multi-region server deployment and load balancing management'],
        with: ['Global distribution across 300+ edge locations automatically', 'Zero cold-start latency using instant V8 isolates', 'Seamless continuous deployment triggered on every Git push']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & Resume OS Deployment',
        role: 'DevOps & Deployment Engineer',
        details: 'Configured automated Vercel CI/CD pipelines, custom preview deployments, edge middleware, and streaming API endpoints for Auralis Studio.'
      },
      engineeringDecisions: [
        'Edge vs Node Runtime: Use Edge runtime for lightweight streaming and redirects; use Node runtime when native C++ modules or heavy libraries are required.',
        'Stale-While-Revalidate: Configure s-maxage and stale-while-revalidate headers for high-traffic public API endpoints.',
        'Environment Variable Separation: Maintain strict isolation between Production, Preview, and Development secrets.'
      ],
      strengths: ['Instant zero-configuration global deployment', 'Sub-50ms TTFB worldwide', 'Preview environments for every Git pull request'],
      tradeoffs: ['Edge runtime does not support all Node.js native APIs (e.g. fs, net)', 'V8 isolate execution timeout limits (30s on hobby/pro)', 'Vendor lock-in if heavily utilizing proprietary Vercel APIs'],
      ecosystem: ['Vercel CLI', 'Next.js', 'V8 Isolates', 'Edge Middleware', 'GitHub Actions'],
      interviewQuestions: [
        {
          q: 'Why do V8 Edge Isolates have zero cold-start time compared to traditional Docker-based serverless functions (like AWS Lambda)?',
          a: 'Traditional serverless functions must spin up a micro-virtual machine or Docker container, initialize an OS kernel, and load the entire Node.js runtime (taking 500ms-2s). V8 Isolates run inside a single pre-warmed multi-tenant process, creating thousands of lightweight, memory-isolated execution contexts in under 5 milliseconds.'
        }
      ],
      relatedSkills: ['next-js-14', 'git-github-ci-cd', 'middleware']
    },

    'docker': {
      id: 'docker',
      name: 'Docker',
      category: 'Infrastructure',
      depthLevel: 'Working Knowledge',
      shortDescription: 'OS-level containerization, multi-stage Dockerfiles, image layer caching, container networking, and reproducible environments.',
      whatIsIt: {
        simple: 'Packaging your application and all its dependencies into an isolated "container" so it runs identically on any computer or server.',
        technical: 'Operating-system-level virtualization platform utilizing Linux kernel namespaces and cgroups to package applications into lightweight, isolated containers.',
        engineeringPerspective: 'Eliminating the "it works on my machine" problem: creating immutable, reproducible build artifacts with optimized multi-stage image layers.'
      },
      howItWorks: {
        title: 'Docker Image Build & Container Lifecycle',
        nodes: ['Dockerfile Specs', 'Layer Build Cache', 'Immutable Image', 'Docker Engine', 'Kernel Namespaces', 'Running Container'],
        steps: [
          { step: '01', title: 'Dockerfile Definition', text: 'Defines base OS (alpine), dependencies, build steps, and entrypoint.' },
          { step: '02', title: 'Layer Caching', text: 'Builds cached filesystem layers, only rebuilding modified instructions.' },
          { step: '03', title: 'Image Serialization', text: 'Produces lightweight, immutable container image artifact.' },
          { step: '04', title: 'Container Isolation', text: 'Docker engine spins up isolated process with dedicated network and PID namespace.' }
        ]
      },
      codeExample: {
        lang: 'dockerfile',
        code: `# Production Multi-Stage Dockerfile for Node.js
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
RUN npm ci --only=production
EXPOSE 8085
CMD ["node", "dist/server.js"]`,
        demoOutput: '>> Multi-stage build completed | Image size reduced from 840MB to 78MB.'
      },
      problemSolved: {
        without: ['"It works on my machine but broke in production" configuration mismatches', 'Messy dependency conflicts when multiple projects require different Node/Python versions', 'Lengthy manual server setup procedures prone to human error'],
        with: ['Identical, deterministic execution environments from local dev to production', 'Isolated container processes that cannot conflict with host system dependencies', 'Instant spin-up and teardown in continuous integration pipelines']
      },
      whereIUsedIt: {
        project: 'Local Development & Microservices',
        role: 'DevOps Developer',
        details: 'Containerized local development environments with Docker Compose, spinning up local PostgreSQL, Redis, and Node backend services with zero host pollution.'
      },
      engineeringDecisions: [
        'Multi-Stage Builds: Use multi-stage builds to discard heavy devDependencies and compilers from final production images.',
        'Alpine Base Images: Choose lightweight alpine or distroless images to reduce vulnerability attack surface and image size.',
        'Layer Optimization: Copy package.json and run npm install BEFORE copying source code to maximize Docker build layer caching.'
      ],
      strengths: ['Total environment reproducibility', 'Lightweight compared to heavy virtual machines', 'Massive ecosystem of pre-built images on Docker Hub'],
      tradeoffs: ['Slight virtualization overhead on Windows/Mac via Hyper-V/WSL', 'Container networking and volume permissions can be tricky', 'Requires image security scanning for vulnerabilities'],
      ecosystem: ['Docker CLI', 'Docker Compose', 'Dockerfile', 'Docker Hub', 'Kubernetes'],
      interviewQuestions: [
        {
          q: 'What is the architectural difference between a Docker container and a Virtual Machine (VM)?',
          a: 'A Virtual Machine bundles a full guest operating system, virtual hardware drivers, and kernel on top of a hypervisor (heavy, gigabytes in size). A Docker container shares the host operating system kernel directly and isolates processes using Linux namespaces and cgroups (lightweight, megabytes in size, instant boot).'
        }
      ],
      relatedSkills: ['linux-wsl', 'git-github-ci-cd', 'node-js']
    },

    'git-github-ci-cd': {
      id: 'git-github-ci-cd',
      name: 'Git / GitHub CI/CD',
      category: 'Infrastructure',
      depthLevel: 'Core Mastery',
      shortDescription: 'Distributed version control, atomic commits, branch workflows, automated GitHub Actions pipelines, testing, and continuous deployment.',
      whatIsIt: {
        simple: 'A tool to track every change to your code, collaborate with teams without conflicts, and automate testing and deployments.',
        technical: 'A distributed version control system utilizing a content-addressable directed acyclic graph (DAG) of SHA-1/SHA-256 tree snapshots, paired with automated CI/CD runners.',
        engineeringPerspective: 'Treating version control as an audit trail of engineering intent: writing atomic commits, maintaining clean git history, and enforcing automated quality gates before production release.'
      },
      howItWorks: {
        title: 'Git Version Control & CI/CD Pipeline Flow',
        nodes: ['Working Tree', 'Staging Area', 'Atomic Commit', 'Push to GitHub', 'CI Test Runner', 'Automated Deploy'],
        steps: [
          { step: '01', title: 'Stage & Commit', text: 'Stages specific file diffs and creates immutable snapshot commit.' },
          { step: '02', title: 'Push & Pull Request', text: 'Pushes branch to GitHub and opens Pull Request for review.' },
          { step: '03', title: 'Automated CI Pipeline', text: 'GitHub Actions spins up clean runner: executes linter, TypeScript check, unit tests.' },
          { step: '04', title: 'Production Deployment', text: 'On PR merge to main, automatically triggers production build and deploy.' }
        ]
      },
      codeExample: {
        lang: 'yaml',
        code: `# GitHub Actions Automated CI Quality Gate (.github/workflows/ci.yml)
name: Production CI Pipeline
on: [push, pull_request]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test`,
        demoOutput: '>> CI Pipeline: Lint (Pass) | TypeCheck (Pass) | Tests 34/34 (Pass) | 42s.'
      },
      problemSolved: {
        without: ['Accidentally overwriting code when collaborating with team members', 'Deploying broken code with syntax or type errors directly to production', 'No way to rollback to a working version when bugs are discovered'],
        with: ['Complete historical record of every line of code with blame and commit messages', 'Automated quality gates blocking broken code from ever being merged', 'Instant one-click rollback to any previous working commit hash']
      },
      whereIUsedIt: {
        project: 'All Production Repositories',
        role: 'Lead Developer',
        details: 'Managed git workflows across all projects with conventional commit messages, feature branches, and automated GitHub Actions CI pipelines.'
      },
      engineeringDecisions: [
        'Atomic Commits: Each commit should represent a single logical change with a descriptive imperative commit message (e.g. "feat: add streaming LLM parser").',
        'Branch Protection: Require pull request reviews and passing CI checks before merging into the main branch.',
        '.gitignore Discipline: Never commit build artifacts (dist, .next), node_modules, or sensitive .env secrets.'
      ],
      strengths: ['Industry standard version control', 'Distributed architecture (full history offline)', 'Powerful automation via GitHub Actions'],
      tradeoffs: ['Merge conflicts can be complex if branches diverge heavily', 'Rebase vs Merge workflows require team alignment', 'Accidental large file commits bloat repository size'],
      ecosystem: ['Git CLI', 'GitHub', 'GitHub Actions', 'Git LFS', 'Conventional Commits'],
      interviewQuestions: [
        {
          q: 'What is the difference between "git merge" and "git rebase"?',
          a: '"git merge" creates a new merge commit combining two divergent branch histories, preserving the exact chronological sequence of when commits happened. "git rebase" re-applies your feature commits on top of the target branch tip, creating a clean, linear commit history without extra merge commits.'
        }
      ],
      relatedSkills: ['linux-wsl', 'vercel-edge', 'docker']
    },

    'linux-wsl': {
      id: 'linux-wsl',
      name: 'Linux / WSL',
      category: 'Infrastructure',
      depthLevel: 'Working Knowledge',
      shortDescription: 'POSIX shell scripting, bash automation, filesystem navigation, process management, and Windows Subsystem for Linux 2.',
      whatIsIt: {
        simple: 'The standard operating system powering web servers worldwide, plus the ability to run real Linux inside Windows for development.',
        technical: 'UNIX-like operating system environment providing POSIX-compliant shell scripting, package management (APT), systemd process supervision, and WSL 2 virtualization.',
        engineeringPerspective: 'Mastering the native developer terminal: automating workflows with bash scripts, managing server processes via SSH, and understanding filesystem permissions.'
      },
      howItWorks: {
        title: 'WSL 2 & Linux Architecture',
        nodes: ['Windows OS', 'Hyper-V Hypervisor', 'Real Linux Kernel', 'Ubuntu Shell', 'POSIX System Calls', 'Hardware Access'],
        steps: [
          { step: '01', title: 'Virtualization Layer', text: 'WSL 2 runs a real lightweight Linux kernel inside a lightweight utility VM.' },
          { step: '02', title: 'Syscall Translation', text: 'Native Linux system calls execute directly against Linux kernel at near-native speed.' },
          { step: '03', title: 'Cross-OS Bridge', text: 'Seamlessly accesses Windows filesystem (/mnt/c) and network ports from Linux terminal.' },
          { step: '04', title: 'Server Tooling', text: 'Runs Docker, Node.js, and C++ compilers in identical environment to production servers.' }
        ]
      },
      codeExample: {
        lang: 'bash',
        code: `#!/bin/bash
# Automated Build & Health Check Script
set -e

echo ">> Checking system resources..."
df -h / | awk 'NR==2 {print "Disk Space: " $4 " available"}'
free -m | awk 'NR==2 {print "Memory: " $7 "MB available"}'

echo ">> Compiling project..."
npm run build

echo ">> Verification complete."`,
        demoOutput: '>> Disk Space: 48GB available | Memory: 12400MB available | Build Success.'
      },
      problemSolved: {
        without: ['Cross-platform path bugs (Windows backslash \\ vs Linux slash /) breaking server code', 'Inability to run native Linux tools and scripts on Windows development machines', 'Unfamiliarity with server terminal commands during production deployments'],
        with: ['100% Linux binary compatibility on Windows development machines', 'Powerful shell pipeline tools (grep, sed, awk, curl) for fast automation', 'Confidence navigating remote production cloud servers via SSH']
      },
      whereIUsedIt: {
        project: 'Development Environment & Embedded Toolchains',
        role: 'Systems Developer',
        details: 'Configured Ubuntu WSL 2 development environment for compiling embedded C++ binaries, managing Node server processes, and running Docker containers.'
      },
      engineeringDecisions: [
        'Keep Projects in Linux Filesystem: Store source code inside ~/projects in the Linux filesystem rather than /mnt/c for 5x faster file I/O.',
        'Scripting Robustness: Always include "set -e" at the start of bash scripts so execution halts immediately on the first command error.',
        'Permission Hygiene: Maintain strict file permissions (chmod 600 for SSH keys, chmod 755 for scripts).'
      ],
      strengths: ['Runs the global server standard OS', 'Extremely powerful command-line tooling', 'Near-zero overhead Linux development on Windows'],
      tradeoffs: ['Steeper learning curve than graphical user interfaces', 'Cross-filesystem I/O between Windows and WSL can be slower', 'Requires understanding POSIX permissions'],
      ecosystem: ['Ubuntu', 'Bash / Zsh', 'WSL 2', 'SSH', 'systemd', 'grep / awk / sed'],
      interviewQuestions: [
        {
          q: 'What is the purpose of piping commands (|) in Linux shell environments?',
          a: 'Piping connects the standard output (stdout) of one process directly into the standard input (stdin) of the next process, enabling the composition of small, single-purpose UNIX utilities (e.g. cat access.log | grep "404" | wc -l to count error occurrences) without intermediate temporary files.'
        }
      ],
      relatedSkills: ['git-github-ci-cd', 'docker', 'embedded-c-c']
    },

    'postman': {
      id: 'postman',
      name: 'Postman',
      category: 'Infrastructure',
      depthLevel: 'Working Knowledge',
      shortDescription: 'API contract testing, environment variables, collection runners, automated mock servers, and payload inspection.',
      whatIsIt: {
        simple: 'A tool for developers to test and verify backend APIs by sending requests and inspecting responses before connecting them to the frontend.',
        technical: 'An API client and testing platform supporting automated request construction, dynamic environment variable injection, pre-request scripts, and test assertions.',
        engineeringPerspective: 'Verifying API contracts independently of frontend UI: validating status codes, response headers, response schemas, and edge case error handling.'
      },
      howItWorks: {
        title: 'Postman Automated API Verification Flow',
        nodes: ['Request Spec', 'Environment Var Injection', 'Pre-Request Auth Script', 'API Gateway', 'Response Inspection', 'Test Assertions'],
        steps: [
          { step: '01', title: 'Environment Config', text: 'Sets {{base_url}} and {{jwt_token}} dynamic variables.' },
          { step: '02', title: 'Pre-Request Script', text: 'Executes JavaScript to generate fresh timestamp or authentication signature.' },
          { step: '03', title: 'Dispatch & Measure', text: 'Sends request and measures exact round-trip latency and payload size.' },
          { step: '04', title: 'Test Assertions', text: 'Evaluates pm.test() assertions: verifies status 200 and schema validity.' }
        ]
      },
      codeExample: {
        lang: 'javascript',
        code: `// Postman Automated Test Assertion Script
pm.test("Status code is 200 OK", function () {
  pm.response.to.have.status(200);
});

pm.test("Response contains valid project payload", function () {
  const json = pm.response.json();
  pm.expect(json.data).to.have.property("id");
  pm.expect(json.data.status).to.eql("active");
});`,
        demoOutput: '>> Test Suite: 2/2 Assertions Passed | Response Time: 44ms | Size: 1.2KB.'
      },
      problemSolved: {
        without: ['Testing APIs by manually writing temporary frontend buttons and console.log statements', 'Unclear API contract shapes leading to miscommunication between teams', 'Inability to test edge cases (401 Unauthorized, 429 Rate Limit) easily'],
        with: ['Instant testing of any HTTP method, header, or body payload in isolation', 'Automated regression test suites verifying entire API collections in one click', 'Shared team collections serving as executable API documentation']
      },
      whereIUsedIt: {
        project: 'API Development & Verification',
        role: 'API Developer',
        details: 'Constructed Postman test collections verifying REST endpoint contracts, authentication error states, and streaming payload structures.'
      },
      engineeringDecisions: [
        'Environment Scoping: Maintain separate Local, Staging, and Production environment configurations with parameterized base URLs.',
        'Automated Token Refresh: Write pre-request scripts that automatically request a fresh JWT when current token expires.',
        'Collection Organization: Organize endpoints by resource domain folders matching REST architectural hierarchy.'
      ],
      strengths: ['Visual and intuitive request builder', 'Automated test scripting with JavaScript', 'Comprehensive team sharing and documentation features'],
      tradeoffs: ['Desktop app can be resource heavy', 'Complex mocking setups can become outdated if not maintained', 'Alternative lightweight CLI tools (curl/httpie) are faster for one-off checks'],
      ecosystem: ['Postman Collections', 'Newman CLI', 'OpenAPI / Swagger', 'cURL', 'REST APIs'],
      interviewQuestions: [
        {
          q: 'How can Postman test suites be integrated into automated CI/CD pipelines?',
          a: 'By using Newman, the official command-line collection runner for Postman. In a GitHub Actions workflow, you can execute "newman run collection.json -e env.json" to run all API test assertions automatically before allowing deployment to production.'
        }
      ],
      relatedSkills: ['rest-apis', 'api-architecture', 'git-github-ci-cd']
    },

    // ------------------------------------------------------------------------
    // 6. ENGINEERING FUNDAMENTALS (Skills 32-37)
    // ------------------------------------------------------------------------
    'system-design': {
      id: 'system-design',
      name: 'System Design',
      category: 'Engineering Fundamentals',
      depthLevel: 'Production / Architecture',
      shortDescription: 'Scalable architecture, horizontal scaling, caching strategies, load balancing, stateless services, and fault tolerance.',
      whatIsIt: {
        simple: 'The high-level architecture of designing software systems so they stay fast, reliable, and secure when millions of users use them at once.',
        technical: 'Architecting distributed systems balancing CAP theorem trade-offs, horizontal scalability, read/write caching tiers, database sharding, and fault tolerance.',
        engineeringPerspective: 'Making deliberate engineering trade-offs: identifying system bottlenecks, decoupling synchronous dependencies, and designing for failure.'
      },
      howItWorks: {
        title: 'Scalable Distributed System Architecture',
        nodes: ['Global Users', 'CDN / Edge Cache', 'Load Balancer', 'Stateless Compute Pool', 'In-Memory Cache (Redis)', 'Primary/Replica DB'],
        steps: [
          { step: '01', title: 'Edge CDN', text: 'Caches static assets and pre-rendered pages close to users worldwide.' },
          { step: '02', title: 'Load Balancing', text: 'Distributes dynamic HTTP traffic across healthy stateless server instances.' },
          { step: '03', title: 'Cache Layer', text: 'Intercepts read requests with in-memory Redis cache to protect database.' },
          { step: '04', title: 'Database Replication', text: 'Routes writes to Primary DB and scales read queries across Read Replicas.' }
        ]
      },
      codeExample: {
        lang: 'text',
        code: `[Client] 
   ↓ (Anycast DNS)
[Edge CDN / Vercel] ── (Cache HIT: 90%) ──> [Instant 200 OK]
   ↓ (Cache MISS: 10%)
[API Gateway] 
   ↓ (Stateless Route)
[Compute Cluster] ── (Redis Cache) ──> [Fast In-Memory Read]
   ↓ (DB Write / Cache Miss)
[PostgreSQL Primary] ── (WAL Stream) ──> [PostgreSQL Read Replicas]`,
        demoOutput: '>> System scaled to 10,000 req/sec | Database load reduced by 85% via Cache.'
      },
      problemSolved: {
        without: ['Single monolithic server crashing when traffic spikes', 'Slow database reads overwhelming storage disks', 'Single point of failure taking down the entire company when an outage occurs'],
        with: ['Horizontally scalable architecture handling unlimited traffic growth', 'Multi-layer caching protecting downstream databases', 'High availability and automated failover with zero downtime']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & NeuralForge Platforms',
        role: 'Systems Architect',
        details: 'Architected end-to-end multi-tier system for Auralis Studio with Edge routing, serverless execution, and PostgreSQL database with vector search.'
      },
      engineeringDecisions: [
        'Stateless Servers: Never store session state in server memory; store state in distributed caches (Redis) or database to allow instant auto-scaling.',
        'Read vs Write Optimization: Design separate optimized read paths (caching, replicas) and write paths (atomic queues, transactions).',
        'Graceful Degradation: When third-party AI APIs experience downtime, fallback to cached results or queue tasks for background retry.'
      ],
      strengths: ['Handles massive scale reliably', 'High availability and disaster recovery', 'Optimal cost and resource efficiency'],
      tradeoffs: ['Distributed systems introduce network latency and complexity', 'Eventual consistency trade-offs across replicas', 'Higher operational monitoring requirements'],
      ecosystem: ['CAP Theorem', 'Load Balancers', 'Redis', 'PostgreSQL', 'CDN Anycast', 'Microservices'],
      interviewQuestions: [
        {
          q: 'Explain the CAP Theorem and its practical implications for system design.',
          a: 'The CAP theorem states that a distributed data system can simultaneously guarantee at most two out of three properties: Consistency (every read receives the most recent write), Availability (every request receives a non-error response), and Partition Tolerance (system operates despite network message loss). In real distributed networks where network partitions are inevitable, systems must choose between Consistency (CP) or Availability (AP).'
        }
      ],
      relatedSkills: ['api-architecture', 'postgresql', 'vercel-edge', 'node-js']
    },

    'api-architecture': {
      id: 'api-architecture',
      name: 'API Architecture',
      category: 'Engineering Fundamentals',
      depthLevel: 'Production / Architecture',
      shortDescription: 'Contract-first design, API versioning, idempotency, rate limiting, error envelope standards, and backward compatibility.',
      whatIsIt: {
        simple: 'Designing clean, professional, and reliable interfaces so frontend and mobile apps can communicate with servers without confusion.',
        technical: 'Architecting robust API ecosystems adhering to contract-first principles, semantic versioning, strict payload validation, idempotent mutation handlers, and standardized error schemas.',
        engineeringPerspective: 'Treating APIs as public contracts: once published, an API must remain stable, backward-compatible, and self-documenting.'
      },
      howItWorks: {
        title: 'API Request Processing & Contract Validation',
        nodes: ['API Consumer', 'Gateway & Auth', 'Schema Validation', 'Idempotency Check', 'Service Dispatch', 'Standard Response'],
        steps: [
          { step: '01', title: 'Contract Specification', text: 'Defines endpoint schema (URL, query params, request body, responses).' },
          { step: '02', title: 'Gateway Ingestion', text: 'Validates API key/JWT, checks rate limit quota, and verifies Content-Type.' },
          { step: '03', title: 'Idempotency Guard', text: 'Checks Idempotency-Key header in Redis to prevent duplicate operations.' },
          { step: '04', title: 'Uniform Response', text: 'Returns standardized JSON envelope { success, data, error, meta }.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Standardized API Response Envelope
interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: { code: string; message: string; details?: unknown } | null;
  meta: { timestamp: string; requestId: string };
}

export function successResponse<T>(data: T): Response {
  return Response.json({
    success: true,
    data,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() }
  }, { status: 200 });
}`,
        demoOutput: '>> Emitted standard API envelope | Schema validated | Client parsed cleanly.'
      },
      problemSolved: {
        without: ['Inconsistent API response formats where some return { err } and others return { error_message }', 'Breaking existing mobile apps whenever a backend database column is renamed', 'Duplicate charges or resource creation when users double-click submit buttons'],
        with: ['Uniform predictable JSON response envelopes across all endpoints', 'Strict backward compatibility and URL versioning (/api/v1/...)', 'Idempotency keys preventing accidental duplicate transactions']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & Telemetry Gateways',
        role: 'API Architect',
        details: 'Authored complete API contract specifications for Auralis Studio with standardized JSON envelopes, semantic error codes, and strict Zod validation.'
      },
      engineeringDecisions: [
        'Standard Error Envelopes: Always return actionable error objects with machine-readable error codes (e.g. "INSUFFICIENT_QUOTA") rather than vague strings.',
        'Semantic Versioning: Introduce major version bumps (/api/v2/) only when breaking changes cannot be avoided.',
        'Idempotency Keys: Require client-generated UUID idempotency keys for critical mutation endpoints.'
      ],
      strengths: ['Seamless developer experience for API consumers', 'Eliminates frontend-backend integration bugs', 'Easily documented and tested with OpenAPI'],
      tradeoffs: ['Requires disciplined upfront contract planning', 'Standard envelopes add slight payload byte overhead', 'Maintaining legacy API versions requires code maintenance'],
      ecosystem: ['OpenAPI 3.0', 'REST', 'Zod', 'Postman', 'JSON Schema'],
      interviewQuestions: [
        {
          q: 'Why is an Idempotency-Key header critical for financial or resource creation APIs?',
          a: 'If a network timeout occurs after a server processes a payment or resource creation but before the client receives the confirmation, the client will retry the request. An Idempotency-Key allows the server to recognize the retry and return the original successful result without charging the user or creating duplicate resources.'
        }
      ],
      relatedSkills: ['rest-apis', 'system-design', 'server-side-architecture']
    },

    'problem-solving': {
      id: 'problem-solving',
      name: 'Problem Solving',
      category: 'Engineering Fundamentals',
      depthLevel: 'Core Practice',
      shortDescription: 'First-principles reasoning, problem decomposition, algorithmic logic, hypothesis testing, and root cause analysis.',
      whatIsIt: {
        simple: 'The systematic process of breaking down complex, unfamiliar technical challenges into simple, solvable steps.',
        technical: 'Structured analytical methodology utilizing first-principles decomposition, algorithmic complexity analysis (Big-O), binary search debugging, and empirical root-cause isolation.',
        engineeringPerspective: 'Resisting the urge to apply hasty patches: understanding underlying failure mechanics deeply, validating hypotheses with telemetry, and engineering permanent structural solutions.'
      },
      howItWorks: {
        title: 'First-Principles Engineering Problem Solving',
        nodes: ['Ambiguous Problem', 'Deconstruct to Core', 'Form Hypothesis', 'Minimal Reproduction', 'Prototype Fix', 'Measure & Verify'],
        steps: [
          { step: '01', title: 'Problem Definition', text: 'Isolates exact symptom from assumptions and gathers quantitative telemetry.' },
          { step: '02', title: 'Decomposition', text: 'Breaks complex problem into independent, isolated failure domains.' },
          { step: '03', title: 'Minimal Reproduction', text: 'Constructs isolated test script reproducing the failure with minimal dependencies.' },
          { step: '04', title: 'Root Cause Fix', text: 'Implements structural solution targeting root cause rather than symptoms.' },
          { step: '05', title: 'Regression Guard', text: 'Writes automated unit test asserting the bug never reoccurs.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Binary Search Debugging: Isolating Algorithmic Bottleneck
function isolateFailureDomain(steps: Array<() => Promise<boolean>>) {
  // Binary search over execution pipeline
  let low = 0, high = steps.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const passed = await steps[mid]();
    if (passed) low = mid + 1;
    else high = mid - 1;
  }
  return low; // Pinpointed exact failing subsystem in O(log N)
}`,
        demoOutput: '>> Root cause pinpointed: Node 14 state mutation | Fixed in 1 iteration.'
      },
      problemSolved: {
        without: ['Guessing and randomly modifying code hoping the bug goes away', 'Treating superficial symptoms while underlying data corruption continues', 'Wasting hours debugging the wrong layer of the technology stack'],
        with: ['Disciplined, reproducible elimination of variables leading directly to root cause', 'Engineered structural solutions that permanently prevent bug recurrence', 'Clear communication and documentation of why failures occurred and how they were solved']
      },
      whereIUsedIt: {
        project: 'Capstone Engineering & Full-Stack Systems',
        role: 'Lead Problem Solver',
        details: 'Diagnosed and solved complex hardware-to-software race conditions in microcontroller ADC sampling loops, ensuring zero dropped WebSocket packets at 1kHz.'
      },
      engineeringDecisions: [
        'First-Principles Thinking: Question all legacy assumptions and trace problems down to core physical and mathematical invariants.',
        'Binary Search Debugging: Eliminate 50% of the search space with each diagnostic test to isolate bugs in O(log N) steps.',
        'Automated Regression Tests: Never consider a bug fixed until an automated test exists that reliably reproduces it and passes with the fix.'
      ],
      strengths: ['Enables solving completely unfamiliar technical problems', 'Prevents costly architectural dead-ends', 'Drives high software reliability and stability'],
      tradeoffs: ['Requires patience and analytical rigor over instant gratification', 'Requires writing diagnostic instrumentation code'],
      ecosystem: ['First Principles', 'Root Cause Analysis (5 Whys)', 'Big-O Notation', 'Binary Search Debugging'],
      interviewQuestions: [
        {
          q: 'Walk through how you debug a mysterious, intermittent production memory leak.',
          a: 'I start by analyzing heap dump snapshots taken at different times under load using Chrome DevTools or Node heapdump. I compare constructor allocation trees to identify which object types are growing monotonically without being garbage collected, inspect retaining paths to find long-lived references (e.g. unclosed event listeners, caching maps, or global closures), and create a minimal isolated script to reproduce and fix the retention.'
        }
      ],
      relatedSkills: ['system-design', 'product-engineering', 'embedded-c-c']
    },

    'product-engineering': {
      id: 'product-engineering',
      name: 'Product Engineering',
      category: 'Engineering Fundamentals',
      depthLevel: 'Production / Architecture',
      shortDescription: 'Bridging user experience, business objectives, technical feasibility, rapid prototyping, and iterative telemetry.',
      whatIsIt: {
        simple: 'Thinking like both an engineer and a product designer to build software that solves real user problems and feels amazing to use.',
        technical: 'Holistic software development aligning UI/UX design systems, technical architecture, user journey friction reduction, and quantitative product metrics.',
        engineeringPerspective: 'Understanding that code is a means to an end: engineering features that maximize user value, reduce time-to-value, and maintain technical excellence.'
      },
      howItWorks: {
        title: 'Product Engineering Value Delivery Loop',
        nodes: ['User Problem', 'UX Prototype', 'Technical Architecture', 'Production Build', 'Telemetry & Metrics', 'Iterative Polish'],
        steps: [
          { step: '01', title: 'Problem Discovery', text: 'Identifies core user pain points and defines quantifiable success metrics.' },
          { step: '02', title: 'Ergonomic UX Design', text: 'Designs intuitive user interaction flow with minimal friction and clicks.' },
          { step: '03', title: 'Robust Implementation', text: 'Builds modular, performant architecture with sub-second feedback loops.' },
          { step: '04', title: 'Telemetry & Feedback', text: 'Tracks real user interactions and iterates based on empirical data.' }
        ]
      },
      codeExample: {
        lang: 'typescript',
        code: `// Telemetry & Product Metric Instrumentation
export function trackFeatureInteraction(feature: string, metadata: Record<string, unknown>) {
  const event = {
    feature,
    metadata,
    timeToComplete: performance.now(),
    timestamp: new Date().toISOString()
  };
  // Asynchronous non-blocking analytics dispatch
  navigator.sendBeacon('/api/telemetry/event', JSON.stringify(event));
}`,
        demoOutput: '>> Logged user friction drop: Time-to-value reduced from 4.2s to 0.8s.'
      },
      problemSolved: {
        without: ['Building technically complex features that nobody actually wants or understands how to use', 'Clunky, confusing user interfaces with confusing terminology and hidden buttons', 'Engineers siloed from the impact and business reality of their software'],
        with: ['Intuitive, high-polish user experiences that delight users on first click', 'Tight alignment between technical architecture and core product goals', 'Continuous iteration informed by real user telemetry and feedback']
      },
      whereIUsedIt: {
        project: 'Auralis Studio & Executive Resume OS',
        role: 'Product Designer & Engineer',
        details: 'Designed and built Auralis Studio from initial UX wireframes to production deployment, prioritizing user ergonomics, instant generation feedback, and aesthetic excellence.'
      },
      engineeringDecisions: [
        'Time-to-Value: Optimize the critical path so users experience the core "magic" of the product within 10 seconds of landing.',
        'Optimistic Feedback: Always update UI state immediately on user click before waiting for network confirmation.',
        'Empathetic Error Messages: Write clear, friendly error messages that explain how to fix the problem rather than displaying raw technical stack traces.'
      ],
      strengths: ['Delivers high business and user impact', 'Creates visually stunning and intuitive products', 'Bridges the gap between design and engineering'],
      tradeoffs: ['Requires balancing visual polish with technical deadlines', 'Feature scope management discipline required'],
      ecosystem: ['Design Systems', 'User Telemetry', 'A/B Testing', 'Figma', 'Next.js', 'Web Vitals'],
      interviewQuestions: [
        {
          q: 'What does "Product Engineering" mean to you versus traditional software engineering?',
          a: 'Traditional software engineering often focuses strictly on code architecture, algorithms, and ticket completion. Product engineering takes ownership of the entire user journey: understanding the business problem, questioning requirements to simplify UX, measuring real-world user adoption, and balancing technical debt with shipping speed to deliver maximum human impact.'
        }
      ],
      relatedSkills: ['problem-solving', 'responsive-architecture', 'react']
    },

    'embedded-c-c': {
      id: 'embedded-c-c',
      name: 'Embedded C/C++',
      category: 'Engineering Fundamentals',
      depthLevel: 'Applied / Production',
      shortDescription: 'Microcontroller architecture, direct register manipulation, hardware interrupts (ISR), memory layout, and 1kHz ADC sampling.',
      whatIsIt: {
        simple: 'Writing fast, lightweight code that runs directly on electronic chips and hardware microcontrollers to control physical circuits and sensors.',
        technical: 'Low-level bare-metal and RTOS programming in C/C++: direct memory-mapped register manipulation, Interrupt Service Routines (ISRs), ADC DMA transfers, and binary telemetry serialization.',
        engineeringPerspective: 'Operating with zero memory abstraction: managing static stack allocations, eliminating dynamic malloc heap fragmentation, and calculating cycle-accurate timing.'
      },
      howItWorks: {
        title: 'Microcontroller 1kHz ADC Sampling Loop',
        nodes: ['Hardware Timer', 'Interrupt Trigger (ISR)', 'ADC Register Read', 'Binary Serialization', 'UART / SPI Bridge', 'Host Web Telemetry'],
        steps: [
          { step: '01', title: 'Hardware Timer', text: 'Hardware timer fires precision interrupt every 1,000 microseconds (1kHz).' },
          { step: '02', title: 'ISR Execution', text: 'Interrupt Service Routine halts background task to read ADC data register.' },
          { step: '03', title: 'Fixed-Point Filter', text: 'Applies discrete digital low-pass filtering in integer math.' },
          { step: '04', title: 'Binary Framing', text: 'Packs 16-bit sensor data into compressed binary packet and transmits over UART.' }
        ]
      },
      codeExample: {
        lang: 'cpp',
        code: `// 1kHz High-Frequency ADC Interrupt Service Routine in C++
volatile uint16_t adc_buffer[64];
volatile uint8_t buf_head = 0;

void __attribute__((interrupt)) TIMER1_COMPA_vect() {
  // Direct Memory-Mapped Register Read
  uint16_t raw_val = ADC; 
  adc_buffer[buf_head] = raw_val;
  buf_head = (buf_head + 1) & 63; // Circular buffer bitmask
  
  // Trigger UART transmission
  UDR0 = (uint8_t)(raw_val >> 8);   // MSB
}`,
        demoOutput: '>> 1000 Hz ADC loop active | Latency: 1.2 microseconds | 0 jitter.'
      },
      problemSolved: {
        without: ['High-level languages with garbage collection pauses ruining microsecond timing accuracy', 'Bloated memory footprints exceeding tiny 32KB microcontroller limits', 'Inability to interface directly with physical sensors, motors, and hardware registers'],
        with: ['Deterministic, cycle-accurate execution with zero garbage collection jitter', 'Ultra-compact binary footprints running on microcontrollers with minimal RAM', 'Direct physical control over hardware peripherals (ADC, PWM, I2C, SPI, UART)']
      },
      whereIUsedIt: {
        project: 'CogniRoute Telemetry Hardware Bridge',
        role: 'Embedded Hardware Engineer',
        details: 'Programmed C++ sensor sampling loops running at 1kHz on microcontrollers, transmitting packed binary frames over serial to real-time web visualizers.'
      },
      engineeringDecisions: [
        'Zero Dynamic Allocation in ISR: Never call malloc/free inside Interrupt Service Routines to prevent heap fragmentation and nondeterministic execution times.',
        'Volatile Qualifier: Always mark variables shared between ISR and main loop as volatile to prevent compiler optimization bugs.',
        'Bitwise Operations: Use bitwise shifts and masks (& 63) instead of modulo operators (%) for circular buffer pointer wrapping.'
      ],
      strengths: ['Maximum execution speed and efficiency', 'Direct hardware control', 'Deterministic microsecond timing'],
      tradeoffs: ['Manual memory management (risk of memory corruption/pointer bugs)', 'No built-in memory safety like Rust/Go', 'Architecture-specific hardware dependencies'],
      ecosystem: ['GCC for ARM/AVR', 'C++17', 'PlatformIO', 'I2C / SPI / UART', 'FreeRTOS'],
      interviewQuestions: [
        {
          q: 'Why is the "volatile" keyword essential in embedded C/C++ programming?',
          a: 'The "volatile" keyword informs the C/C++ compiler that a variable\'s value can change unexpectedly at any time from outside the current code flow (e.g. by a hardware register or an Interrupt Service Routine). It forces the compiler to read the variable from physical memory every single time rather than caching it in a CPU register.'
        }
      ],
      relatedSkills: ['signal-processing', 'problem-solving', 'linux-wsl']
    },

    'signal-processing': {
      id: 'signal-processing',
      name: 'Signal Processing',
      category: 'Engineering Fundamentals',
      depthLevel: 'Applied / Production',
      shortDescription: 'Nyquist sampling theorem, Fast Fourier Transform (FFT), digital filtering (FIR/IIR), noise reduction, and frequency-domain analysis.',
      whatIsIt: {
        simple: 'The mathematical analysis of waves and sensor data — transforming noisy signals into clean, readable information.',
        technical: 'Digital Signal Processing (DSP) algorithms analyzing continuous and discrete time-series signals: Nyquist-Shannon sampling, Fast Fourier Transform (FFT), and digital filtering.',
        engineeringPerspective: 'Converting physical analog reality into digital mathematics: eliminating high-frequency noise, analyzing harmonic spectral distributions, and extracting clean features.'
      },
      howItWorks: {
        title: 'Time-Domain to Frequency-Domain FFT Transformation',
        nodes: ['Continuous Analog Wave', 'ADC Sampling (Fs >= 2Fmax)', 'Discrete Samples x[n]', 'Fast Fourier Transform', 'Frequency Spectrum X[k]', 'Spectral Analysis'],
        steps: [
          { step: '01', title: 'Analog Ingestion', text: 'Sensors detect physical continuous voltage waveforms with background noise.' },
          { step: '02', title: 'Nyquist Sampling', text: 'Samples signal at rate Fs >= 2 * Fmax to strictly prevent aliasing distortion.' },
          { step: '03', title: 'Discrete Convolution', text: 'Applies digital FIR filter to eliminate high-frequency 50Hz/60Hz mains noise.' },
          { step: '04', title: 'FFT Decomposition', text: 'Computes O(N log N) Fast Fourier Transform to extract constituent sine frequencies.' }
        ]
      },
      codeExample: {
        lang: 'javascript',
        code: `// Discrete Fourier Transform Frequency Bin Calculation
function computeMagnitudeSpectrum(samples, N) {
  const spectrum = new Float32Array(N / 2);
  for (let k = 0; k < N / 2; k++) {
    let real = 0, imag = 0;
    for (let n = 0; n < N; n++) {
      const angle = (2 * Math.PI * k * n) / N;
      real += samples[n] * Math.cos(angle);
      imag -= samples[n] * Math.sin(angle);
    }
    spectrum[k] = Math.sqrt(real * real + imag * imag) / N;
  }
  return spectrum; // Frequency magnitude bins
}`,
        demoOutput: '>> FFT computed for 512 samples in 1.4ms | Peak frequency: 440 Hz (A4 Note).'
      },
      problemSolved: {
        without: ['Noisy raw sensor readings making telemetry data unusable', 'Aliasing artifacts distorting signals when sampled too slowly', 'Inability to identify which specific frequencies are causing mechanical vibrations'],
        with: ['Clean, noise-filtered digital signals ready for analytics and machine learning', 'Guaranteed signal fidelity by adhering to the Nyquist-Shannon sampling theorem', 'Instant visualization of harmonic frequencies via Fast Fourier Transform']
      },
      whereIUsedIt: {
        project: 'CogniRoute Telemetry Visualizer & Capstone',
        role: 'Signal Processing Lead',
        details: 'Designed digital signal processing filters and 60FPS frequency-domain canvas visualizer for CogniRoute 1kHz sensor telemetry.'
      },
      engineeringDecisions: [
        'Anti-Aliasing Filter: Always place an analog low-pass RC filter before the ADC input to eliminate frequencies above Fs/2.',
        'Windowing Functions: Apply a Hanning or Blackman window to sample buffers before running FFT to eliminate spectral leakage at buffer boundaries.',
        'Fixed-Point Math: Implement DSP filtering on embedded microcontrollers using fixed-point integer arithmetic to avoid expensive floating-point CPU cycles.'
      ],
      strengths: ['Essential for audio, telemetry, sensor, and communications engineering', 'Extracts hidden patterns from noisy time-series data', 'Mathematically rigorous foundations'],
      tradeoffs: ['Time-frequency resolution trade-off (Heisenberg-Gabor limit)', 'Requires deep mathematical foundation in Fourier analysis', 'Computational cost scales with sample window size'],
      ecosystem: ['FFT / DFT', 'Nyquist-Shannon Theorem', 'FIR / IIR Filters', 'HTML5 Canvas DSP', 'MATLAB / Python NumPy'],
      interviewQuestions: [
        {
          q: 'What is the Nyquist-Shannon Sampling Theorem and what happens if you violate it?',
          a: 'The Nyquist-Shannon theorem states that to accurately reconstruct a continuous signal without loss of information, the sampling frequency (Fs) must be at least twice the highest frequency component (Fmax) present in the signal (Fs >= 2 * Fmax). If violated, high-frequency signals fold back into the lower frequency spectrum, causing irreversible distortion called "aliasing".'
        }
      ],
      relatedSkills: ['embedded-c-c', 'animation-systems', 'problem-solving']
    }
  };

  // Expose to global window object
  window.SKILLS_DATA = SKILLS_DATA;

})(window);
