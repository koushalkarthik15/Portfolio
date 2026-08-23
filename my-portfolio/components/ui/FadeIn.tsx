"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "down",
  className = "",
}: FadeInProps) {
  // Define starting position based on direction
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  };

  const initialPos = directions[direction] || { x: 0, y: 0 };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: initialPos.y,
        x: initialPos.x,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ willChange: "opacity, transform" }}
      className={className}
      transition={{
        duration: 0.65,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Clean easeOutExpo curve
      }}
    >
      {children}
    </motion.div>
  );
}

