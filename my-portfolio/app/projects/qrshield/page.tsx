"use client";

import Link from "next/image"; // If you add project screenshots later
import NextLink from "next/link";
import {
  ArrowLeft,
  Github,
  ShieldCheck,
  Lock,
  Globe,
  Server,
} from "lucide-react";

export default function QRShieldPage() {
  const techStack = [
    { tool: "Backend", tech: "Node.js / Express" },
    { tool: "Security", tech: "Token-based Redirection" },
    { tool: "Deployment", tech: "Vercel" },
    { tool: "Logic", tech: "URL Sanitization API" },
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-300 pt-24 pb-32 px-6 selection:bg-emerald-500 selection:text-black">
      <div className="max-w-[1000px] mx-auto">
        {/* Back Button */}
        <NextLink
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </NextLink>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <ShieldCheck className="text-emerald-400" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              QRShield++
            </h1>
          </div>
          <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-3xl">
            A secure QR code generation system designed to mitigate phishing
            attacks by validating and sanitizing URLs through a secure
            intermediary endpoint.
          </p>
        </div>

        <hr className="border-white/5 mb-16" />

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                The Problem
              </h2>
              <p className="leading-relaxed">
                Standard QR codes are often exploited for phishing. Because
                users cannot easily inspect the destination URL before scanning,
                attackers use them to lead victims to malicious sites.
                QRShield++ solves this by acting as a security gateway between
                the scan and the final destination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Lock
                    className="text-emerald-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Token-Based Redirection:</strong> QR codes point to
                    a secure intermediary endpoint rather than the original URL,
                    ensuring the destination is validated first.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Server
                    className="text-emerald-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Secure Backend APIs:</strong> Custom-built APIs
                    manage QR generation, token lifecycles, and sanitization
                    logic.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Globe
                    className="text-emerald-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Modular Architecture:</strong> Built for scalability
                    and deployed on Vercel for high availability.
                  </span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="p-6 bg-neutral-900/30 border border-white/10 rounded-3xl backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6">
                Tech Stack
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  {techStack.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 last:border-0"
                    >
                      <td className="py-3 text-neutral-500">{item.tool}</td>
                      <td className="py-3 text-white text-right font-medium">
                        {item.tech}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href="https://github.com/koushalkarthik15/QR-Code-Security"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-all active:scale-95"
            >
              <Github size={20} />
              Source Code
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <blockquote className="mt-20 p-8 border-l-2 border-emerald-500/30 bg-emerald-500/5 rounded-r-3xl italic text-neutral-400">
          The goal of QRShield++ was to move beyond simple QR generation and
          create a system that prioritizes user safety in an era of increasing
          digital deception.
        </blockquote>
      </div>
    </div>
  );
}
