import Link from "next/link";
import { ArrowLeft, Code2, Layers, Database, Wrench, Brain, Cpu, Globe } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-blue-400 mb-4" size={32} />,
      skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Backend & Architecture",
      icon: <Layers className="text-emerald-400 mb-4" size={32} />,
      skills: [
        "FastAPI",
        "Express.js",
        "SQLModel",
        "REST API Design",
        "Repository Pattern",
        "Dependency Injection",
      ],
    },
    {
      title: "Computer Science",
      icon: <Cpu className="text-amber-400 mb-4" size={32} />,
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "Distributed Systems",
        "System Architecture",
      ],
    },
    {
      title: "Frontend Development",
      icon: <Globe className="text-cyan-400 mb-4" size={32} />,
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
    },
    {
      title: "Databases & Storage",
      icon: <Database className="text-purple-400 mb-4" size={32} />,
      skills: ["PostgreSQL", "SQLite", "MongoDB"],
    },
    {
      title: "DevOps & Cloud",
      icon: <Wrench className="text-orange-400 mb-4" size={32} />,
      skills: [
        "Docker",
        "Git & GitHub",
        "GitHub Actions",
        "Linux",
        "Railway",
        "Vercel",
      ],
    },
    {
      title: "AI & Intelligence",
      icon: <Brain className="text-pink-400 mb-4" size={32} />,
      skills: [
        "Gemini API",
        "LangChain",
        "Scikit-learn (Random Forest)",
        "Prompt Engineering",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
            Skill Taxonomy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Technical Arsenal
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
            A comprehensive overview of languages, frameworks, architectures, and tools I use to build scalable, secure, and production-grade systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-neutral-900/40 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-neutral-900/70 hover:border-white/20 transition-all group"
            >
              {category.icon}
              <h3 className="text-xl font-bold text-white mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3.5 py-1.5 text-xs font-mono font-medium text-neutral-300 bg-white/5 border border-white/5 rounded-xl group-hover:border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Languages & Competitive Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-neutral-900/30 border border-white/10 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Multilingual Communication
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Fluent in bridging technical architecture and collaborative team workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["English (Fluent)", "Telugu (Native)", "Hindi (Fluent)"].map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 text-sm text-neutral-300 bg-white/5 rounded-full border border-white/10"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 bg-neutral-900/30 border border-white/10 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Competitive Problem Solving
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Continuous practice in algorithm design, space-time optimization, and data structures.
              </p>
            </div>
            <a
              href="https://leetcode.com/u/blacktongue343"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 font-semibold text-sm transition-all"
            >
              View LeetCode Profile (blacktongue343) ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

