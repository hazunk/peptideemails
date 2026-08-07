"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Shield, Globe, Fingerprint } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "Sendlane Exclusivity",
    description:
      "Ensures high-risk deliverability mainstream platforms won't allow.",
    number: "01",
  },
  {
    icon: Globe,
    title: "Isolated Sub-domains",
    description:
      "Protects your primary domain. Your main site stays safe while revenue grows.",
    number: "02",
  },
  {
    icon: Fingerprint,
    title: "Technical DNA",
    description:
      "Full SPF, DKIM, and DMARC authentication managed completely DFY.",
    number: "03",
  },
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="relative py-20 md:py-28 px-6 overflow-hidden bg-purple-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-900/20 to-transparent" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-purple-900/5 blur-[120px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="inline-block mb-6">
            <div className="rhomboid bg-white/70 border border-purple-900/15 px-4 py-1.5">
              <span className="rhomboid-inner flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-purple-900" />
                <span className="text-xs font-semibold text-purple-900 tracking-wide uppercase">
                  Technical Foundation
                </span>
              </span>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4 max-w-3xl">
            Built on{" "}
            <span className="text-purple-900">High-Risk Architecture.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-14">
            Every technical layer is purpose-built for the unique compliance and deliverability challenges of the peptide industry.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.12}>
              <motion.div
                className="relative bg-white border border-gray-200 rounded-none p-8 h-full group cursor-default overflow-hidden shadow-sm"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#4B0082]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="absolute top-6 right-6 font-heading text-6xl font-extrabold text-purple-900/[0.05] leading-none">
                  {card.number}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-none bg-purple-50 border border-purple-900/15 flex items-center justify-center mb-6 group-hover:bg-purple-900/10 transition-colors">
                    <card.icon className="w-7 h-7 text-purple-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
