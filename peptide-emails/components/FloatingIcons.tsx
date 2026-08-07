"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Shield,
  Atom,
  Beaker,
  ChartLine,
  Lock,
  Zap,
  Target,
  BadgeCheck,
} from "lucide-react";

const icons = [
  { Icon: Mail, x: "8%", y: "15%", size: 28, delay: 0, duration: 6 },
  { Icon: Send, x: "85%", y: "20%", size: 24, delay: 1.2, duration: 7 },
  { Icon: Shield, x: "15%", y: "70%", size: 22, delay: 0.8, duration: 5.5 },
  { Icon: Atom, x: "78%", y: "65%", size: 30, delay: 2, duration: 8 },
  { Icon: Beaker, x: "92%", y: "45%", size: 20, delay: 0.5, duration: 6.5 },
  { Icon: ChartLine, x: "5%", y: "45%", size: 26, delay: 1.5, duration: 7.5 },
  { Icon: Lock, x: "70%", y: "85%", size: 18, delay: 3, duration: 6 },
  { Icon: Zap, x: "35%", y: "8%", size: 20, delay: 2.5, duration: 5 },
  { Icon: Target, x: "60%", y: "10%", size: 22, delay: 1.8, duration: 7 },
  { Icon: BadgeCheck, x: "25%", y: "85%", size: 24, delay: 0.3, duration: 6.5 },
];

export default function FloatingIcons({
  className = "",
  tint = "text-royal/[0.07]",
  count = 10,
}: {
  className?: string;
  tint?: string;
  count?: number;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {icons.slice(0, count).map(({ Icon, x, y, size, delay, duration }, i) => (
        <motion.div
          key={i}
          className={`absolute ${tint}`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            y: [0, -15, 15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} strokeWidth={1.2} />
        </motion.div>
      ))}
    </div>
  );
}
