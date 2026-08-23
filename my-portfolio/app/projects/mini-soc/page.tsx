"use client";

import NextLink from "next/link";
import {
  ArrowLeft,
  Github,
  ShieldAlert,
  BrainCircuit,
  Activity,
  MapPin,
  Users,
} from "lucide-react";


export default function MiniSOCPage() {
  const techStack = [
    { tool: "Core Language", tech: "Python" },
    { tool: "Machine Learning", tech: "Scikit-learn (Random Forest)" },
    { tool: "Geolocation", tech: "MaxMind GeoLite2" },
    { tool: "Persistence", tech: "SQLite" },
    { tool: "Threat Scoring", tech: "Dynamic Weighted Scoring" },
    { tool: "Team Role", tech: "Team Lead (4 Engineers)" },
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-300 pt-24 pb-32 px-6 selection:bg-purple-500 selection:text-white">
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
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
              <ShieldAlert className="text-purple-400" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Mini-SOC (Security Operations Center)
            </h1>
          </div>
          <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-3xl">
            A modular, automated Security Operations Center built to ingest security logs, predict threat severity via Random Forest machine learning, and geolocate malicious activity in real time.
          </p>
        </div>

        <hr className="border-white/10 mb-16" />

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                The Security Ingestion Challenge
              </h2>
              <p className="leading-relaxed text-neutral-300">
                Security teams frequently drown under thousands of daily log alerts without intelligent prioritization. Mini-SOC was built to automate log ingestion, classify attack signatures dynamically, and assign contextual risk scores so analysts can triage critical incidents immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Key Technical Architecture
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <BrainCircuit
                    className="text-purple-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-white">Random Forest ML Threat Classification:</strong> Trained and deployed a Random Forest classification model to analyze security event vectors and predict attack probability with high precision and low false-positive rates.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin
                    className="text-purple-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-white">MaxMind GeoLite2 Geolocation:</strong> Enriched raw IP addresses with geographic origin data to detect anomalous login locations and flag geographically distributed brute-force patterns.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Activity
                    className="text-purple-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-white">Dynamic Risk Scoring Engine:</strong> Computes compound severity metrics based on event frequency, payload entropy, geolocation anomaly, and historical IP reputation.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Users
                    className="text-purple-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-white">Team Leadership & Engineering Governance:</strong> Led a team of 4 engineers, coordinating feature roadmaps, database schema design, testing strategies, and integration milestones.
                  </span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="p-6 bg-neutral-900/40 border border-white/10 rounded-3xl backdrop-blur-sm">
              <h3 className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-widest mb-6">
                System Specifications
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
              href="https://github.com/koushalkarthik15/SecurityOperationCenter"
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
        <blockquote className="mt-20 p-8 border-l-2 border-purple-500/40 bg-purple-500/5 rounded-r-3xl italic text-neutral-300">
          &ldquo;By combining machine learning classification with real-time geospatial enrichment, Mini-SOC transforms raw telemetry into actionable defense intelligence.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
