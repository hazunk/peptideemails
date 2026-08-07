"use client";

import { motion } from "framer-motion";

export default function DataStream({
  className = "",
  direction = "up",
  count = 12,
}: {
  className?: string;
  direction?: "up" | "down";
  count?: number;
}) {
  const particles = Array.from({ length: count }, (_, i) => ({
    x: (i * 8.3 + (i % 3) * 11) % 100,
    delay: (i * 0.7) % 5,
    duration: 3 + (i * 1.3) % 4,
    size: 1 + (i % 3),
    opacity: 0.08 + (i % 5) * 0.03,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-royal"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{
            opacity: 0,
            top: direction === "up" ? "100%" : "-5%",
          }}
          animate={{
            opacity: [0, p.opacity, p.opacity, 0],
            top: direction === "up" ? ["100%", "-5%"] : ["-5%", "100%"],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
