"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Accordion from "./Accordion";
import { Repeat, Wrench, Rocket } from "lucide-react";

export default function ScalingGoal() {
  return (
    <section id="results" className="relative bg-white py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-900/20 to-transparent" />

      {/* Chart background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 400"
          className="absolute bottom-0 left-0 w-full h-64 md:h-80"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 350 Q200 340 400 280 Q600 200 800 150 Q1000 80 1200 20"
            fill="none"
            stroke="rgba(75,0,130,0.08)"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path
            d="M0 350 Q200 340 400 280 Q600 200 800 150 Q1000 80 1200 20 L1200 400 L0 400 Z"
            fill="rgba(75,0,130,0.02)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="inline-block mb-6">
            <div className="rhomboid bg-purple-50 border border-purple-900/15 px-4 py-1.5">
              <span className="rhomboid-inner flex items-center gap-2">
                <Rocket className="w-3.5 h-3.5 text-purple-900" />
                <span className="text-xs font-semibold text-purple-900 tracking-wide uppercase">
                  Revenue Engine
                </span>
              </span>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
            Turn a &ldquo;Research Chemical&rdquo; into a{" "}
            <span className="text-purple-900">Recurring Revenue Empire.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mb-12">
            We don&apos;t chase one-time purchases. We engineer lifetime value.
          </p>
        </AnimatedSection>

        {/* Big stat highlight */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            <div className="bg-purple-50 border border-purple-900/10 rounded-none p-8 text-center">
              <div className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                $150 <span className="text-purple-900">→</span> $15k<span className="text-purple-900">+</span>
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Order to Lifetime Value</p>
            </div>
            <div className="bg-purple-50 border border-purple-900/10 rounded-none p-8 text-center">
              <div className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                90<span className="text-purple-900">-Day</span>
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Automated Research Sequences</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="border-t border-gray-200">
            <Accordion title="Maximize LTV">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mt-1">
                  <Repeat className="w-5 h-5 text-purple-900" strokeWidth={1.5} />
                </div>
                <p>
                  The real money isn&apos;t in the first vial; it&apos;s in the
                  12-month protocol. We replace &ldquo;churn-and-burn&rdquo; tactics
                  with automated 90-day research sequences that turn a $150 order
                  into a{" "}
                  <strong className="text-gray-900">$15,000+ lifetime researcher</strong>.
                </p>
              </div>
            </Accordion>

            <Accordion title="Total DFY Operations">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mt-1">
                  <Wrench className="w-5 h-5 text-purple-900" strokeWidth={1.5} />
                </div>
                <p>
                  We take the complexity of the science, the risk of the FDA, and
                  the headache of design entirely off your plate. You focus on the
                  purity; we build the engine that prints the ROI.
                </p>
              </div>
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
