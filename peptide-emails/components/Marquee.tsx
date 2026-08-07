"use client";

import {
  Mail,
  Shield,
  Atom,
  Beaker,
  ChartLine,
  Lock,
  Fingerprint,
  Send,
  Target,
  BadgeCheck,
  Microscope,
  Syringe,
} from "lucide-react";

const items = [
  { icon: Mail, label: "Email Flows" },
  { icon: Shield, label: "FDA Compliance" },
  { icon: Atom, label: "Peptide Science" },
  { icon: Beaker, label: "HPLC Reports" },
  { icon: ChartLine, label: "Revenue Systems" },
  { icon: Lock, label: "Domain Protection" },
  { icon: Fingerprint, label: "DKIM / SPF" },
  { icon: Send, label: "Sendlane" },
  { icon: Target, label: "Retention" },
  { icon: BadgeCheck, label: "Verified Labs" },
  { icon: Microscope, label: "Research Wiki" },
  { icon: Syringe, label: "Compounding" },
];

export default function Marquee({
  direction = "left",
  speed = 30,
}: {
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-4">
      <div
        className="flex gap-6 whitespace-nowrap marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border border-purple-900/10 bg-white/60"
          >
            <item.icon className="w-4 h-4 text-purple-900" strokeWidth={1.5} />
            <span className="text-sm text-gray-500 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
