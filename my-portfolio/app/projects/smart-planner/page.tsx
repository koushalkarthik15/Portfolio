import Link from "next/link";
import {
  ArrowLeft,
  Github,
  LayoutTemplate,
  BrainCircuit,
  Timer,
} from "lucide-react";

export default function SmartPlannerCaseStudy() {
  return (
    <article className="min-h-screen bg-black pt-24 pb-32">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Back Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Next.js", "TypeScript", "Node.js", "Express", "Gemini API"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800/50"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Smart Planner System
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
            A full-stack conversational application that translates natural
            language input into optimized, constraint-based activity timelines.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/koushalkarthik15"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
            >
              <Github size={18} className="mr-2" />
              View Backend Code
            </a>
          </div>
        </header>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl">
            <BrainCircuit className="text-blue-400 mb-4" size={28} />
            <h3 className="text-white font-semibold mb-2">Conversational AI</h3>
            <p className="text-sm text-neutral-400">
              Integrated Google Gemini API to parse natural language constraints
              and user intent.
            </p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl">
            <Timer className="text-blue-400 mb-4" size={28} />
            <h3 className="text-white font-semibold mb-2">
              Deterministic Engine
            </h3>
            <p className="text-sm text-neutral-400">
              Implemented a weighted scoring system based on time, budget, mood,
              and distance.
            </p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl">
            <LayoutTemplate className="text-blue-400 mb-4" size={28} />
            <h3 className="text-white font-semibold mb-2">
              Dynamic Timeline UI
            </h3>
            <p className="text-sm text-neutral-400">
              Built an interactive Next.js schedule builder to visualize cost
              and travel estimates.
            </p>
          </div>
        </div>

        {/* Deep Dive Content */}
        <section className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-4">
            The Architecture
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Relying solely on Large Language Models for planning often results
            in hallucinations regarding travel times, logical ordering, and
            budget constraints. To solve this, I designed a hybrid architecture.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-6">
            The frontend captures user intent through a natural language
            interface. This input is processed by the{" "}
            <strong>Google Gemini API</strong> strictly for Named Entity
            Recognition (NER) and intent classification. The extracted data is
            then passed to a custom <strong>Node.js/Express</strong> backend.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-4">
            The Deterministic Planning Engine
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Instead of asking the AI to build the final schedule, the backend
            utilizes a deterministic scoring algorithm. It evaluates potential
            activities against a matrix of hard and soft constraints:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-8 marker:text-blue-500">
            <li>
              <strong>Hard Constraints:</strong> Total available time, maximum
              budget, and geographical boundaries.
            </li>
            <li>
              <strong>Soft Constraints:</strong> User mood, preferred pacing,
              and logical sequencing (e.g., placing dinner before a movie).
            </li>
          </ul>

          <p className="text-neutral-300 leading-relaxed mb-6">
            The result is passed back to the{" "}
            <strong>Next.js (TypeScript)</strong> frontend, where it renders an
            interactive timeline. Users can regenerate specific nodes, refine
            their budget, or manually adjust the schedule, triggering real-time
            recalculations of distance and cost.
          </p>
        </section>
      </div>
    </article>
  );
}
