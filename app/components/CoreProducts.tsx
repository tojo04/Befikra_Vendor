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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Core AI-Powered Products</h2>
          <p className="text-lg text-slate-400">Modular solutions designed to scale with you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col group"
            >
              <div className={`w-14 h-14 rounded-2xl ${product.color} flex items-center justify-center mb-6`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed flex-grow">{product.description}</p>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 bg-slate-700 group-hover:bg-white group-hover:text-slate-900`}>
                {product.button}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
