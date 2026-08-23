"use client";

import React, { useState } from "react";
import Avatar from "@/components/ui/Avatar";
import NativeOrb from "@/components/3d/NativeOrb";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";
import { Mail, Send, Award, Trophy, GraduationCap, MapPin, Code, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomeClient() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    body: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ email: "", subject: "", body: "" });
        setTimeout(() => setStatus("idle"), 3500);
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  };

  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden relative selection:bg-white selection:text-black">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] w-full flex items-center pt-24 pb-16 overflow-hidden">
        <NativeOrb />
        <div className="relative z-10 w-full max-w-350 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
          <div className="max-w-3xl flex flex-col items-start pointer-events-none">
            <FadeIn delay={0.1} direction="down">
              <div className="mb-6 pointer-events-auto">
                <Avatar src="/my-photo.jpg" alt="D Koushal Karthik Rao" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-400 mb-4 pointer-events-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Software Engineering Roles
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl pointer-events-auto">
                D Koushal Karthik Rao
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 font-light mb-8 max-w-xl leading-relaxed pointer-events-auto">
                Backend & Full‑Stack Software Engineer specializing in Python, FastAPI, Next.js, and scalable distributed systems.
              </p>
              <div className="pointer-events-auto flex flex-wrap gap-4">
                <a href="#projects" className="px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all active:scale-95 shadow-md">
                  Featured Projects
                </a>
                <a href="#about" className="px-7 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/40 transition-all active:scale-95">
                  About & Background
                </a>
                <Link href="/skills" className="px-6 py-3 bg-neutral-900/80 border border-white/10 text-neutral-300 rounded-full hover:text-white hover:border-white/25 transition-all">
                  Technical Arsenal →
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="hidden lg:block h-full min-h-[420px] pointer-events-none" />
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 max-w-350 mx-auto relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">Featured Work</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Engineering Highlights</h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md">
            Modular microservices, clean architecture, ML pipelines, and robust security.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="QRShield++"
            description="Secure QR platform with FastAPI, SQLModel, and token‑based redirection."
            tags={["Next.js", "FastAPI", "PostgreSQL", "SQLModel", "Docker"]}
            githubUrl="https://github.com/koushalkarthik15/QR-Code-security"
            detailUrl="/projects/qrshield"
          />
          <ProjectCard
            title="Mini‑SOC"
            description="Security Operations Center with ML classification and geo‑IP lookup."
            tags={["Python", "Scikit-learn", "SQLite", "GeoLite2", "Threat ML"]}
            githubUrl="https://github.com/koushalkarthik15/SecurityOperationCenter"
            detailUrl="/projects/mini-soc"
          />
          <ProjectCard
            title="CrisisPilot"
            description="Humanitarian crisis management backend with Slack integration."
            tags={["Python", "FastAPI", "SQLite", "Slack API", "Clean Arch"]}
            githubUrl="https://github.com/koushalkarthik15/CrisisPilot-Slack"
            detailUrl="/projects/crisispilot"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 relative z-20 bg-neutral-950/70 border-t border-white/5">
        <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">Background & Principles</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">The Journey</h2>
            <div className="space-y-6 text-neutral-300 text-lg font-light leading-relaxed">
              <p>I study Computer Science at AVN Institute, focusing on clean architecture and scalable systems.</p>
              <p>My work spans anti‑phishing, threat monitoring, and async event platforms.</p>
              <p>Active in hackathons and competitive programming.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://leetcode.com/u/blacktongue343" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors text-sm font-medium">
                <Code size={16} />
                LeetCode Profile
                <ArrowUpRight size={14} />
              </a>
              <Link href="/skills" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
                Explore Skills →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 bg-neutral-900/60 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3"><GraduationCap size={16} /> Academic</div>
              <div className="text-3xl font-bold text-white mb-1">8.51 / 10.0</div>
              <p className="text-xs text-neutral-400">B.Tech Computer Science • AVN Institute</p>
            </div>
            <div className="p-6 bg-neutral-900/60 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3"><Award size={16} /> Hackathon</div>
              <div className="text-2xl font-bold text-white mb-1">Top 10 Finalist</div>
              <p className="text-xs text-neutral-400">AMD Ryzen Slingshot National Hackathon</p>
            </div>
            <div className="p-6 bg-neutral-900/60 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3"><Trophy size={16} /> Mind Marathon</div>
              <div className="text-2xl font-bold text-white mb-1">1st Place</div>
              <p className="text-xs text-neutral-400">AI & Data Science Competition</p>
            </div>
            <div className="p-6 bg-neutral-900/60 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest mb-3"><MapPin size={16} /> Location</div>
              <div className="text-2xl font-bold text-white mb-1">Hyderabad, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <FadeIn direction="right">
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">Get in Touch</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Let&apos;s Connect.</h2>
                <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-md mb-8">
                  Exploring opportunities – feel free to drop a line.
                </p>
                <div className="space-y-4 text-neutral-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-emerald-400"><Mail size={20} /></div>
                    <a href="mailto:koushalkarthik5@gmail.com" className="font-mono text-sm hover:text-white">koushalkarthik5@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-amber-400"><Code size={20} /></div>
                    <a href="https://leetcode.com/u/blacktongue343" target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:text-white">leetcode.com/u/blacktongue343</a>
                  </div>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.15}>
              <div className="p-8 bg-neutral-900/60 border border-white/10 rounded-3xl">
                <form onSubmit={handleSend} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Your Email</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-neutral-600" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Subject</label>
                    <input required type="text" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-neutral-600" placeholder="Subject" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Message</label>
                    <textarea required rows={5} value={formData.body} onChange={e => setFormData({ ...formData, body: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-neutral-600" placeholder="Your message..." />
                  </div>
                  <button disabled={status === "sending"} type="submit" className={`flex items-center justify-center gap-3 w-full py-4.5 font-bold rounded-2xl transition-all ${status === "success" ? "bg-emerald-500 text-white" : "bg-white text-black hover:bg-neutral-200"}`}>
                    <Send size={18} className={status === "sending" ? "animate-pulse" : ""} />
                    {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-neutral-500 text-xs font-mono uppercase tracking-widest">
        © 2026 D Koushal Karthik Rao • Built with Next.js, TypeScript & Tailwind CSS
      </footer>
    </div>
  );
}
