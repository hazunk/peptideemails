"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { TrendingUp } from "lucide-react";

export default function TheShift() {
  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden bg-purple-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-900/20 to-transparent" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-purple-900/5 blur-[120px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-block mb-6">
            <div className="rhomboid bg-white/70 border border-purple-900/15 px-4 py-1.5">
              <span className="rhomboid-inner flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-purple-900" />
                <span className="text-xs font-semibold text-purple-900 tracking-wide uppercase">
                  Market Evolution
                </span>
              </span>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-8">
            The End of the{" "}
            <span className="text-purple-900">&ldquo;Wild West&rdquo;</span>{" "}
            Era.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The peptide market has matured. The brands that will dominate the
            next decade are the ones that look, act, and communicate like{" "}
            <strong className="text-gray-900">Elite Research Institutions</strong>.
            There is a massive gap for labs that provide more than just a vial.
            We build a brand presence designed to inspire confidence in a new
            generation of sophisticated researchers who demand more than a
            spreadsheet and a PayPal link.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
