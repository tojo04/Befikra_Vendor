"use client";

import { motion } from "framer-motion";
import { Bot, Map, Database, ArrowRight } from "lucide-react";

const products = [
  {
    title: "Befikra Copilot",
    description: "Your AI booking assistant. Automates replies, qualifies leads, and schedules follow-ups.",
    icon: Bot,
    button: "Explore Copilot",
    color: "bg-blue-600",
    hover: "hover:bg-blue-700"
  },
  {
    title: "Befikra Itinerary",
    description: "Create stunning itineraries in 60 seconds. AI-based recommendations & dynamic pricing.",
    icon: Map,
    button: "Start Building",
    color: "bg-purple-600",
    hover: "hover:bg-purple-700"
  },
  {
    title: "Befikra CRM",
    description: "Manage customers, not spreadsheets. Track payments, history, and preferences.",
    icon: Database,
    button: "Get Organized",
    color: "bg-indigo-600",
    hover: "hover:bg-indigo-700"
  }
];

export function CoreProducts() {
  return (
    <section className="py-24 bg-slate-900 text-white">
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
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Core AI-Powered Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Modular solutions designed to scale with you.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative cursor-pointer h-full"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 flex flex-col h-full relative overflow-hidden shadow-xl"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-border"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-xl ${product.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <product.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-400 mb-8 leading-relaxed flex-grow group-hover:text-slate-300 transition-colors duration-300">
                    {product.description}
                  </p>
                  
                  {/* Button */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-slate-700/50 group-hover:bg-white group-hover:text-slate-900 border border-slate-600 group-hover:border-white shadow-lg"
                  >
                    {product.button}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
