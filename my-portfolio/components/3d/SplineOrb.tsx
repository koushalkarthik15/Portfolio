"use client";

import { useEffect } from "react";

export default function SplineOrb() {
  useEffect(() => {
    import("@splinetool/viewer");
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen scale-110">
      {/* @ts-expect-error spline viewer web component */}
      <spline-viewer url="https://prod.spline.design/3xjayOBEbAWbOHOH/scene.splinecode"></spline-viewer>
    </div>
  );
}
