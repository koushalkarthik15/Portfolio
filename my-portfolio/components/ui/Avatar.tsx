"use client";

import { useState } from "react";
import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function Avatar({
  src = "/my-photo.jpg",
  alt = "D Koushal Karthik Rao",
  className = "",
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`w-24 h-24 md:w-28 md:h-28 bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-900 rounded-full overflow-hidden border-2 border-white/20 relative flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.2)] pointer-events-auto transition-transform hover:scale-105 duration-300 ${className}`}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          width={112}
          height={112}
          priority
          unoptimized // Prevents Next.js optimization server crash on 0-byte or local raw files
          onError={() => setHasError(true)}
          className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-950/60 to-purple-950/60 text-white font-bold text-2xl font-mono select-none">
          <span>KR</span>
          <span className="text-[10px] text-blue-300 font-sans tracking-widest uppercase mt-0.5">
            Dev
          </span>
        </div>
      )}
    </div>
  );
}
