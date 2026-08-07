"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Compliance", href: "#compliance" },
  { label: "Process", href: "#process" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-lg font-bold text-gray-900 tracking-tight">
          Peptide<span className="text-purple-900">Emails</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" className="inline-block">
            <div className="rhomboid bg-purple-900 hover:bg-purple-800 transition-colors px-5 py-2">
              <span className="rhomboid-inner text-sm font-semibold text-white">
                Book a Call
              </span>
            </div>
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900 p-2">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-6 pb-6"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setMenuOpen(false)} className="block mt-4">
            <div className="rhomboid bg-purple-900 px-5 py-3 text-center">
              <span className="rhomboid-inner text-sm font-semibold text-white">Book a Call</span>
            </div>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
