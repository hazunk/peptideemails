"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Accordion from "./Accordion";
import { AlertTriangle, FileWarning, ShieldAlert } from "lucide-react";

export default function HardTruth() {
  return (
    <section id="compliance" className="relative bg-white py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />

      {/* Subtle red glow */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-red-100/40 blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="inline-block mb-6">
            <div className="rhomboid bg-red-50 border border-red-200 px-4 py-1.5">
              <span className="rhomboid-inner flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
                <span className="text-xs font-semibold text-red-600 tracking-wide uppercase">
                  Compliance Risk
                </span>
              </span>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
            The &ldquo;Research Use Only&rdquo; disclaimer{" "}
            <span className="text-red-500">is not a legal shield.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mb-12">
            Most peptide brands are running email strategies that put them directly in the FDA&apos;s crosshairs. Here&apos;s why.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="border-t border-gray-200">
            <Accordion title='The "Objective Intent" Trap'>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mt-1">
                  <AlertTriangle className="w-5 h-5 text-red-500" strokeWidth={1.5} />
                </div>
                <p>
                  If you&apos;re selling weight loss, muscle growth, or injury repair
                  in your emails, you are an easy target. The FDA doesn&apos;t care
                  about your footer disclaimer; they care about your{" "}
                  <strong className="text-gray-900">Objective Intent</strong>.
                </p>
              </div>
            </Accordion>

            <Accordion title="The Cost of Disease Claims">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mt-1">
                  <FileWarning className="w-5 h-5 text-red-500" strokeWidth={1.5} />
                </div>
                <p>
                  When you use &ldquo;Disease Claims,&rdquo; you aren&apos;t just
                  marketing — you&apos;re reclassifying your chemical as an
                  unapproved new drug. The consequence? Frozen merchant accounts,
                  seized inventory, and a permanent spot on the{" "}
                  <strong className="text-gray-900">FDA&apos;s Red List</strong>.
                </p>
              </div>
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
