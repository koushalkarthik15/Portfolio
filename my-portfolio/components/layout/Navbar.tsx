// components/layout/Navbar.tsx
import Link from "next/link";
import { Github, Mail, Linkedin, Code } from "lucide-react";

export default function Navbar() {
  // Replace this placeholder with your actual Google Drive resume link:
  const RESUME_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/1CEPCEqoD5v_VG1HoEZ7yZ0vun3j6Pg3n/view?usp=sharing";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-350 mx-auto px-6 h-16 flex items-center justify-between">
        {/* LEFT: Logo / Brand */}
        <div className="shrink-0">
          <Link
            href="/"
            className="text-white font-bold text-lg md:text-xl tracking-widest uppercase hover:text-neutral-300 transition-colors"
          >
            Koushal Karthik
          </Link>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden md:flex items-center justify-center flex-1 px-8 space-x-8 text-sm font-medium text-neutral-400">
          <Link
            href="/#projects"
            className="hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link href="/#about" className="hover:text-white transition-colors">
            About Me
          </Link>
          <Link href="/skills" className="hover:text-white transition-colors">
            Skills
          </Link>

          <div className="h-4 w-px bg-neutral-800 mx-2" />

          {/* Resume link pointing to Google Drive */}
          <a
            href={RESUME_GOOGLE_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-semibold border border-white/15 transition-all"
            title="Open Resume on Google Drive"
          >
            Resume ↗
          </a>
        </div>

        {/* RIGHT: Social & Profile Utilities */}
        <div className="flex items-center justify-end space-x-5">
          <a
            href="https://leetcode.com/u/blacktongue343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-1"
            title="LeetCode Profile (blacktongue343)"
            aria-label="LeetCode"
          >
            <Code size={19} />
          </a>
          <a
            href="https://linkedin.com/in/koushalkarthikrao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-blue-400 transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
          <a
            href="https://github.com/koushalkarthik15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
          <a
            href="mailto:koushalkarthik5@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Karthik,"
            className="text-neutral-400 hover:text-emerald-400 transition-colors"
            title="Send Email"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
        </div>
      </div>
    </nav>
  );
}

