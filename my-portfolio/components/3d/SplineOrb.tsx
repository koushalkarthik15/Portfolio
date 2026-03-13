"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <div className="text-white/20 animate-pulse">Loading Experience...</div>
      </div>
    ),
  },
);

export default function SplineOrb() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen scale-110">
      <Spline scene="https://prod.spline.design/3xjayOBEbAWbOHOH/scene.splinecode" />
    </div>
  );
}
