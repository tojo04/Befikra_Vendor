"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/50 backdrop-blur-xl border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Befikra
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Product", "Solutions", "Customers", "Pricing"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/demo"
              className="group relative px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <div className="absolute inset-0 rounded-full ring-2 ring-white/10 group-hover:ring-white/20" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
        >
            <div className="px-4 py-4 space-y-4 flex flex-col">
              {["Product", "Solutions", "Customers", "Pricing"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
               <hr className="border-gray-100" />
                <Link
                href="#"
                className="text-base font-medium text-slate-900 hover:text-blue-600 transition-colors"
                >
                Sign in
                </Link>
                <Link
                href="#"
                className="text-base font-medium text-blue-600"
                >
                Get Started
                </Link>
            </div>
        </motion.div>
      )}
    </motion.header>
  );
}
