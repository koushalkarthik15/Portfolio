// components/layout/Navbar.tsx
import Link from "next/link";
import { Search, Github, Mail, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* LEFT: Logo / Brand */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-white font-bold text-xl tracking-widest uppercase"
          >
            Koushal
          </Link>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8 space-x-8 text-sm font-medium text-neutral-400">
          {/* Notice the added '/' before the '#' tags so they work from any page */}
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

          <div className="h-4 w-px bg-neutral-700 mx-2" />
          <Link
            href="/karthik_resume.pdf"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Resume
          </Link>
        </div>

        {/* RIGHT: Utilities */}
        <div className="flex items-center justify-end space-x-6">
          {/*<div className="hidden md:flex items-center px-4 py-1.5 border border-neutral-600 rounded-full text-neutral-400 hover:text-white hover:border-white transition-all cursor-pointer">
            <Search size={16} className="mr-2" />
            <span className="text-sm">Search</span>
          </div>*/}
          <a
            href="https://linkedin.com/in/koushalkarthikrao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/koushalkarthik15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:koushalkarthik5@gmail.com?subject=Portfolio%20Contact&body=Hello%20Karthik,"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
