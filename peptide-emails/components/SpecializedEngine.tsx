"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Accordion from "./Accordion";
import { Atom, BookOpen, Eye, Crosshair } from "lucide-react";

export default function SpecializedEngine() {
  return (
    <section id="process" className="relative bg-white py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-900/20 to-transparent" />

      <motion.div
        className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-purple-50/60 blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="inline-block mb-6">
            <div className="rhomboid bg-purple-50 border border-purple-900/15 px-4 py-1.5">
              <span className="rhomboid-inner flex items-center gap-2">
                <Crosshair className="w-3.5 h-3.5 text-purple-900" />
                <span className="text-xs font-semibold text-purple-900 tracking-wide uppercase">
                  Singular Focus
                </span>
              </span>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
            We Do One Thing:{" "}
            <span className="text-purple-900">Peptide Revenue Systems.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-12">
            We don&apos;t do general e-commerce. We only do Peptides.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="border-t border-gray-200">
            <Accordion title="The Scientific Bridge">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mt-1">
                  <Atom className="w-5 h-5 text-purple-900" strokeWidth={1.5} />
                </div>
                <p>
                  We translate molecular mechanisms into visual stories using
                  high-end 3D renders that make the breakthrough feel tangible.
                </p>
              </div>
            </Accordion>

            <Accordion title='The "Science-to-English" Flow'>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mt-1">
                  <BookOpen className="w-5 h-5 text-purple-900" strokeWidth={1.5} />
                </div>
                <p>
                  We move all mechanism-of-action education to an independent
                  research wiki. Your emails stay completely compliant while your
                  audience stays engaged.
                </p>
              </div>
            </Accordion>

            <Accordion title="Visual Trust">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mt-1">
                  <Eye className="w-5 h-5 text-purple-900" strokeWidth={1.5} />
                </div>
                <p>
                  When the science looks this expensive, the decision to buy becomes
                  a formality. We don&apos;t &ldquo;sell&rdquo;; we provide the data
                  that makes the acquisition inevitable.
                </p>
              </div>
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
