"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ArrowRight, Award } from "lucide-react";

export default function Footer() {
  return (
    <section id="cta" className="relative overflow-hidden">
      {/* Deep purple CTA section */}
      <div className="relative py-20 md:py-28 px-6 bg-purple-900">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple-400/10 blur-[150px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-block mb-8">
              <div className="rhomboid bg-white/10 border border-white/20 px-5 py-2">
                <span className="rhomboid-inner flex items-center gap-2">
                  <Award className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white tracking-wide uppercase">
                    By Invitation Only
                  </span>
                </span>
              </div>
            </div>

            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              We only work with the Elite.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
              We only partner with labs that provide verified, 3rd-party HPLC
              reports. Purity is the baseline for trust. If you have the data, we
              have the system to scale it to the moon.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a href="#cta" className="group inline-block mb-10">
              <div className="rhomboid bg-white hover:bg-gray-100 transition-all duration-200 px-10 py-4 shadow-lg shadow-black/20">
                <span className="rhomboid-inner flex items-center justify-center gap-2 text-base font-semibold text-purple-900">
                  Request a Discovery Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-sm md:text-base text-white/80 mb-2">
              Don&apos;t just grow.{" "}
              <strong className="text-white">Become an Institution.</strong>
            </p>
            <p className="text-sm text-white/60">
              Scale to Multi-6 and 7-Figure Months with PeptideEmails.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-[#2d004f] border-t border-white/10 py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="font-heading text-sm font-bold text-white/60">
            Peptide<span className="text-purple-300/80">Emails</span>.com
          </a>
          <p className="text-xs text-white/40 tracking-wide text-center md:text-right">
            All systems compliant with 21 CFR 201.128 guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
