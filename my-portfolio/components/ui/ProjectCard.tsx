import React from "react";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react"; // Assuming you install lucide-react for icons

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailUrl: string; // Route to your dedicated case study page
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
    <div className="group relative flex flex-col justify-between p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] transition-all duration-300">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
        <Link
          href={detailUrl}
          className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
        >
          Read Case Study →
        </Link>
        <div className="flex-1" />
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Live Project"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  );
}
