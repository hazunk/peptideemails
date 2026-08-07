"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Marquee from "./Marquee";
import StatBlock from "./StatBlock";

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(75,0,130,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(75,0,130,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-purple-900/5 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-purple-400/5 blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center mb-8"
        >
          <span className="text-xs font-medium text-purple-900 tracking-[0.2em] uppercase">
            For Peptide Research Labs & Compounding Pharmacies
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-6"
        >
          70% of consumers don&apos;t trust a brand to tell the truth.{" "}
          <span className="text-purple-900">
            In peptides, they&apos;re usually right.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Most labs are one &ldquo;miracle claim&rdquo; away from an FDA Warning
          Letter and a total merchant freeze. We build the institutional-grade
          email systems that scale your revenue through data, not hype.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <a href="#cta" className="group inline-block">
            <div className="rhomboid bg-purple-900 hover:bg-purple-800 transition-all duration-200 px-8 py-4 shadow-lg shadow-purple-900/20">
              <span className="rhomboid-inner flex items-center justify-center gap-2 text-base font-semibold text-white">
                Audit My Compliance
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
          <a href="#cta" className="group inline-block">
            <div className="rhomboid border-2 border-purple-900/20 hover:border-purple-900/40 hover:bg-purple-900/5 transition-all duration-200 px-8 py-4">
              <span className="rhomboid-inner flex items-center justify-center gap-2 text-base font-semibold text-purple-900">
                <Mail className="w-4 h-4" />
                View Example Email
              </span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 border-t border-purple-900/10 bg-white/60 backdrop-blur-sm"
      >
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBlock value="21" suffix="+" label="CFR Compliant" />
          <StatBlock value="$0" label="FDA Violations" />
          <StatBlock value="90" suffix="-Day" label="Revenue Sequences" />
          <StatBlock value="100" suffix="%" label="DFY Operations" />
        </div>
      </motion.div>

      {/* Marquee rows */}
      <div className="relative z-10 border-t border-purple-900/10 overflow-hidden bg-white/40">
        <Marquee direction="left" speed={35} />
        <Marquee direction="right" speed={40} />
      </div>
    </section>
  );
}
