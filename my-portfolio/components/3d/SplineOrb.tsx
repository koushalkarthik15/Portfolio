"use client";

import dynamic from "next/dynamic";

// Lazy load the Spline scene with a cinematic dark loading state
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="w-8 h-8 border-t-2 border-white/20 rounded-full animate-spin"></div>
    </div>
  ),
});

export default function SplineOrb() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen scale-110">
      <Spline scene="https://prod.spline.design/3xjayOBEbAWbOHOH/scene.splinecode" />
    </div>
  );
}
