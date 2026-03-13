import Link from "next/link";
import { ArrowLeft, Code2, Layers, Database, Wrench } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-blue-400 mb-4" size={32} />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "HTML/CSS"],
    },
    {
      title: "Frameworks",
      icon: <Layers className="text-emerald-400 mb-4" size={32} />,
      skills: ["Next.js", "React", "Express.js", "Node.js", "FastAPI", "Flask"],
    },
    {
      title: "Databases",
      icon: <Database className="text-purple-400 mb-4" size={32} />,
      skills: ["MongoDB", "SQLite"],
    },
    {
      title: "Tools & Testing",
      icon: <Wrench className="text-orange-400 mb-4" size={32} />,
      skills: ["Git & GitHub", "Selenium", "VS Code", "Vercel"],
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Technical Arsenal
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-light">
            A comprehensive overview of the languages, frameworks, and tools I
            use to build scalable, secure, and intelligent systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-neutral-900/30 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-neutral-900/50 hover:border-white/20 transition-all group"
            >
              {category.icon}
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-sm font-medium text-neutral-300 bg-black/50 border border-white/5 rounded-xl group-hover:border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Languages Section */}
        <div className="mt-16 p-8 bg-neutral-900/20 border border-white/5 rounded-3xl backdrop-blur-sm flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Multilingual Communication
            </h3>
            <p className="text-neutral-400 text-sm">
              Fluent in bridging technical and non-technical conversations.
            </p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            {["English", "Telugu", "Hindi"].map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 text-sm text-neutral-300 bg-white/5 rounded-full border border-white/5"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
