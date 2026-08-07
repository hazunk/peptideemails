"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StatBlock({
  value,
  label,
  suffix = "",
}: {
  value: string;
  label: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-heading text-5xl md:text-7xl font-extrabold text-gray-900 leading-none mb-2">
        {value}
        {suffix && <span className="text-purple-900">{suffix}</span>}
      </div>
      <p className="text-sm md:text-base text-gray-500 uppercase tracking-widest font-medium">
        {label}
      </p>
    </motion.div>
  );
}
