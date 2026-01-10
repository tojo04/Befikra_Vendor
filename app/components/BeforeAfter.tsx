"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, Sparkles } from "lucide-react";

const comparison = {
  without: [
    { text: "Missed leads from slow replies", detail: "Hours wasted, customers gone" },
    { text: "Manual invoicing & tracking", detail: "Spreadsheet chaos" },
    { text: "Leads lost to competitors", detail: "While you were sleeping" },
    { text: "Chaos across WhatsApp & Email", detail: "Juggling 5+ platforms" }
  ],
  with: [
    { text: "Instant AI responses 24/7", detail: "Never miss another lead" },
    { text: "Auto-generated invoices", detail: "Send quotes in seconds" },
    { text: "Higher conversion rates", detail: "Close deals faster" },
    { text: "One dashboard for everything", detail: "All channels unified" }
  ]
};

export function BeforeAfter() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#3C79D2' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.25)' }}
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">AI-Powered Transformation</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
          >
            Why AI Changes the Game
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90"
          >
            Stop wasting hours on manual tasks. Let Befikra handle the grunt work.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without Befikra */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-10 h-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(254,226,226,1) 0%, rgba(254,202,202,1) 100%)',
                boxShadow: '0 10px 40px -10px rgba(239,68,68,0.3)'
              }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: '0 0 30px rgba(239,68,68,0.4)' }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-extrabold" style={{ color: '#B91C1C' }}>
                    Without Befikra
                  </h3>
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <XCircle className="w-10 h-10" style={{ color: '#DC2626' }} />
                  </motion.div>
                </div>
                
                <ul className="space-y-5">
                  {comparison.without.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="relative pl-8 group/item"
                    >
                      <div className="absolute left-0 top-1">
                        <XCircle className="w-5 h-5" style={{ color: '#DC2626' }} />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1" style={{ color: '#1F2937' }}>
                          {item.text}
                        </div>
                        <div className="text-sm font-medium" style={{ color: '#6B7280' }}>
                          {item.detail}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* With Befikra */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="group relative"
          >
            {/* Recommended Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-3 -right-3 z-20 px-5 py-2 rounded-full font-bold text-sm text-white shadow-lg"
              style={{ backgroundColor: '#10B981' }}
            >
              ✨ RECOMMENDED
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-10 h-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(209,250,229,1) 0%, rgba(167,243,208,1) 100%)',
                boxShadow: '0 10px 40px -10px rgba(16,185,129,0.4)'
              }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: '0 0 40px rgba(16,185,129,0.6)' }}
              ></div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
                }}
              ></motion.div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-extrabold" style={{ color: '#065F46' }}>
                    With Befikra
                  </h3>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <CheckCircle className="w-10 h-10" style={{ color: '#10B981' }} />
                  </motion.div>
                </div>
                
                <ul className="space-y-5">
                  {comparison.with.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="relative pl-8 group/item"
                    >
                      <motion.div 
                        className="absolute left-0 top-1"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
                      </motion.div>
                      <div>
                        <div className="font-extrabold text-lg mb-1" style={{ color: '#064E3B' }}>
                          {item.text}
                        </div>
                        <div className="text-sm font-semibold" style={{ color: '#047857' }}>
                          {item.detail}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg font-semibold text-white/90"
          >
            Join 500+ vendors already saving <span className="font-bold text-white">20+ hours per week</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
