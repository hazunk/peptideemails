"use client";

import { motion } from "framer-motion";

function HexNode({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={3}
      fill="#4B0082"
      initial={{ opacity: 0.05 }}
      animate={{ opacity: [0.05, 0.2, 0.05] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function BondLine({
  x1,
  y1,
  x2,
  y2,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#4B0082"
      strokeWidth={1}
      initial={{ opacity: 0.03 }}
      animate={{ opacity: [0.03, 0.12, 0.03] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const nodes = [
  { cx: 50, cy: 30 },
  { cx: 120, cy: 60 },
  { cx: 80, cy: 110 },
  { cx: 180, cy: 40 },
  { cx: 160, cy: 120 },
  { cx: 240, cy: 80 },
  { cx: 220, cy: 150 },
  { cx: 300, cy: 50 },
  { cx: 280, cy: 130 },
  { cx: 350, cy: 100 },
];

const bonds = [
  [0, 1], [1, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [5, 8], [6, 8], [8, 9],
];

export default function MolecularGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 400 180"
        className="absolute w-[600px] md:w-[900px] h-auto opacity-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        preserveAspectRatio="xMidYMid slice"
      >
        {bonds.map(([a, b], i) => (
          <BondLine
            key={`bond-${i}`}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            delay={i * 0.3}
          />
        ))}
        {nodes.map((n, i) => (
          <HexNode key={`node-${i}`} cx={n.cx} cy={n.cy} delay={i * 0.25} />
        ))}
      </svg>
    </div>
  );
}
