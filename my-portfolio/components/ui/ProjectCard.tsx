import React from "react";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailUrl: string; // Route to case study page
  accentColor?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  detailUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-8 bg-neutral-900/50 border border-white/10 rounded-3xl hover:border-white/20 hover:bg-neutral-900/80 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]">
      <div>
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-neutral-400 text-sm md:text-base mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono font-medium text-neutral-300 bg-white/5 rounded-lg border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
        <Link
          href={detailUrl}
          className="inline-flex items-center text-sm font-semibold text-white group-hover:text-blue-400 transition-colors gap-1.5"
        >
          Case Study <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <div className="flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
              aria-label="GitHub Repository"
              title="View Repository"
            >
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
              aria-label="Live Project"
              title="View Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

