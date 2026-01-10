"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const comparison = {
  without: [
    "Missed leads from slow replies",
    "Manual invoicing & tracking",
    "Leads lost to competitors",
    "Chaos across WhatsApp & Email"
  ],
  with: [
    "Instant AI responses 24/7",
    "Auto-generated invoices",
    "Higher conversion rates",
    "One dashboard for everything"
  ]
};

export function BeforeAfter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Why AI Changes the Game
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Stop wasting hours on manual tasks. Let Befikra handle the grunt work.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Without Befikra */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.03, x: -5 }}
            className="bg-red-50 rounded-3xl p-8 border border-red-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-100/0 to-red-200/0 hover:from-red-100/50 hover:to-red-200/30 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-red-700 mb-8 text-center">Without Befikra</h3>
              <ul className="space-y-6">
                {comparison.without.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 90, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    </motion.div>
                    <span className="text-slate-700 font-medium text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* With Befikra */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.03, x: 5 }}
            className="bg-green-50 rounded-3xl p-8 border border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
             <motion.div 
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="absolute top-0 right-0 p-2 bg-green-500 text-white text-xs font-bold rounded-bl-xl"
             >
               RECOMMENDED
             </motion.div>
             
             {/* Animated glow effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 to-emerald-200/0 hover:from-green-100/60 hover:to-emerald-200/40 transition-all duration-500"></div>
             
             <div className="relative z-10">
              <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">With Befikra</h3>
              <ul className="space-y-6">
                {comparison.with.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    </motion.div>
                    <span className="text-slate-900 font-bold text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
