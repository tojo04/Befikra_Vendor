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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why AI Changes the Game</h2>
          <p className="text-lg text-slate-600">Stop wasting hours on manual tasks. Let Befikra handle the grunt work.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Without Befikra */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-3xl p-8 border border-red-100"
          >
            <h3 className="text-2xl font-bold text-red-700 mb-8 text-center">Without Befikra</h3>
            <ul className="space-y-6">
              {comparison.without.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With Befikra */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-3xl p-8 border border-green-100 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-2 bg-green-500 text-white text-xs font-bold rounded-bl-xl">
               RECOMMENDED
             </div>
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">With Befikra</h3>
            <ul className="space-y-6">
              {comparison.with.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-900 font-bold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
