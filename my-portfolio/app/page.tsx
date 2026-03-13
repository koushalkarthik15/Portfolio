import SplineOrb from "@/components/3d/SplineOrb";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black overflow-hidden relative">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center">
        <SplineOrb />

        {/* Changed to a grid layout to split text (left) and photo (right) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
          {/* LEFT SIDE: Avatar, Typography & Call to Actions */}
          <div className="max-w-3xl flex flex-col items-start">
            {/* Left-Aligned Profile Avatar */}
            <div className="w-24 h-24 md:w-28 md:h-28 bg-neutral-900 rounded-full mb-6 overflow-hidden border-2 border-white/10 relative flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] pointer-events-auto">
              <img
                src="/my-photo.jpg"
                alt="Profile"
                className="w-full h-full object-cover text-transparent opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
              D Koushal Karthik Rao
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 font-light mb-8 max-w-xl drop-shadow-lg">
              Full-Stack Developer bridging complex AI logic and secure systems.
            </p>

            <div className="pointer-events-auto flex gap-4">
              <a
                href="#projects"
                className="px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
              >
                View Work
              </a>
              <a
                href="#about"
                className="px-6 py-2.5 border border-neutral-600 text-white rounded-full hover:border-white transition-colors backdrop-blur-sm"
              >
                About Me
              </a>
            </div>
          </div>
        </div>

        {/* Cinematic fade (Updated to correct Tailwind v4 syntax: bg-linear-to-t) */}
        <div className="absolute bottom-0 w-full h-40 bg-linear-to-t from-black to-transparent z-10 pointer-events-none" />
      </section>
      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-32 px-6 max-w-[1400px] mx-auto relative z-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Smart Planner System"
            description="A conversational planning application enabling users to generate personalized activity plans. Built with a deterministic planning engine and Google Gemini API integration."
            tags={["Next.js", "TypeScript", "Gemini API", "Express.js"]}
            githubUrl="https://github.com/koushalkarthik15"
            detailUrl="/projects/smart-planner"
          />
          <ProjectCard
            title="QRShield++"
            description="A secure QR code generation system mitigating phishing attacks. Validates and sanitizes URLs using a token-based intermediary redirection mechanism."
            tags={["Security", "Node.js", "Vercel", "APIs"]}
            githubUrl="https://github.com/koushalkarthik15/QR-Code-Security"
            detailUrl="/projects/qrshield"
          />
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        className="py-32 px-6 relative z-20 bg-neutral-950/50 border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Narrative */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              The Journey
            </h2>
            <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
              <p>
                I am a Computer Science student at AVN Institute of Engineering
                and Technology with a passion for building systems that are as
                secure as they are intelligent.
              </p>
              <p>
                My approach to development is rooted in solving real-world
                constraints. Whether I'm engineering a deterministic planning
                engine for an AI or building phishing-resistant QR pipelines, I
                focus on creating robust architectures that don't just work, but
                scale.
              </p>
              <p>
                Beyond code, I thrive in competitive environments that challenge
                my technical depth—from mastering complex algorithms to securing
                top honors in AI and Data Science challenges.
              </p>
            </div>
          </div>

          {/* Right Column: Key Highlights / Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* GPA Card */}
            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-2">
                Academic Excellence
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                8.47 / 10
              </div>
              <p className="text-sm text-neutral-500">
                Current CGPA at AVN Institute{" "}
              </p>
            </div>

            {/* Mind Marathon Card */}
            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2">
                Competition
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                1st Place
              </div>
              <p className="text-sm text-neutral-500">
                Mind Marathon AI & DS Quiz{" "}
              </p>
            </div>

            {/* Location Card */}
            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md col-span-1 sm:col-span-2">
              <div className="text-purple-500 font-mono text-xs uppercase tracking-widest mb-2">
                Base of Operations
              </div>
              <div className="text-xl font-bold text-white mb-1">
                Hyderabad, India
              </div>
              <p className="text-sm text-neutral-500 leading-tight">
                Actively building and collaborating in the local tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
