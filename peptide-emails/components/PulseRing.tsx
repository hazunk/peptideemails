"use client";

import { motion } from "framer-motion";

export default function PulseRing({
  className = "",
  color = "#4B0082",
  size = 300,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            borderColor: color,
            width: size,
            height: size,
            top: -size / 2,
            left: -size / 2,
          }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: [0, 0.15, 0], scale: [0.3, 1, 1.2] }}
          transition={{
            duration: 4,
            delay: i * 1.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
