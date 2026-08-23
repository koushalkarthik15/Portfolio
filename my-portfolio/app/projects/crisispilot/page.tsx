"use client";

import NextLink from "next/link";
import {
  ArrowLeft,
  Github,
  LifeBuoy,
  MessageSquare,
  CloudSun,
  Layers,
  Zap,
} from "lucide-react";


export default function CrisisPilotPage() {
  const techStack = [
    { tool: "Framework", tech: "FastAPI (Asynchronous)" },
    { tool: "Communication", tech: "Slack API / Webhooks" },
    { tool: "Architecture", tech: "Feature-First & Repository Pattern" },
    { tool: "Intelligence", tech: "Weather & Mapping APIs" },
    { tool: "Database", tech: "SQLite Persistence" },
    { tool: "Core Principles", tech: "Dependency Injection" },
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-300 pt-24 pb-32 px-6 selection:bg-sky-500 selection:text-black">
      <div className="max-w-[1000px] mx-auto">
        {/* Back Button */}
        <NextLink
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Back to Featured Projects
        </NextLink>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
              <LifeBuoy className="text-sky-400" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              CrisisPilot
            </h1>
          </div>
          <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-3xl">
            A modular backend platform for humanitarian disaster response and crisis incident orchestration, connecting field reports directly to dispatch teams via automated Slack workflows and environmental intelligence.
          </p>
        </div>

        <hr className="border-white/10 mb-16" />

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                The Crisis Coordination Bottleneck
              </h2>
              <p className="leading-relaxed text-neutral-300">
                During natural disasters and emergency relief operations, critical data gets delayed across fragmented communication channels. CrisisPilot unifies incident reporting into an automated, asynchronous backend that dispatches coordinated alerts, geo-coordinates, and weather conditions directly into responder channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Key Technical Architecture
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MessageSquare
                    className="text-sky-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-white">Asynchronous Slack Workflows:</strong> Integrated bidirectional Slack webhooks and event listeners, allowing operators to trigger emergency escalations and update incident states straight from chat channels.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CloudSun
                    className="text-sky-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-white">Weather & Mapping Intelligence:</strong> Automated integration with meteorological services and geographic mapping APIs to enrich incident tickets with real-time route weather risks and flood advisories.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Layers
                    className="text-sky-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-white">Feature-First Architecture & Repository Pattern:</strong> Structured the codebase into domain-isolated modules with explicit repository interfaces, decoupling business logic from underlying database layers.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Zap
                    className="text-sky-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-white">Dependency Injection (DI):</strong> Leveraged FastAPI&apos;s dependency injection system for modular service instantiation, mock testing, and high test coverage.
                  </span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="p-6 bg-neutral-900/40 border border-white/10 rounded-3xl backdrop-blur-sm">
              <h3 className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-widest mb-6">
                Technical Specifications
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  {techStack.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 last:border-0"
                    >
                      <td className="py-3 text-neutral-400">{item.tool}</td>
                      <td className="py-3 text-white text-right font-medium">
                        {item.tech}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href="https://github.com/koushalkarthik15/CrisisPilot-Slack"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-all active:scale-95 shadow-md"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <blockquote className="mt-20 p-8 border-l-2 border-sky-500/40 bg-sky-500/5 rounded-r-3xl italic text-neutral-300">
          &ldquo;Engineering software for crisis response demands absolute architectural clarity—ensuring every incident is captured, enriched, and routed without latency.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
