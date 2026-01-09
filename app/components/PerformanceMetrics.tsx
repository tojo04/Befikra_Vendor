"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Users, Zap } from "lucide-react";

const metrics = [
  {
    label: "Faster Response Time",
    value: "3-5x",
    description: "Across Instagram, WhatsApp & Website",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    label: "Weekly Time Saved",
    value: "10-15h",
    description: "Eliminating manual replies & follow-ups",
    icon: Clock,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    label: "Booking Conversion",
    value: "+35%",
    description: "Higher intent from faster, AI-led responses",
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    label: "Lead Leakage",
    value: "0%",
    description: "Every enquiry is captured & followed up",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-50"
  }
];

export function PerformanceMetrics() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">AI That Speeds Up Work — Not Adds More</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What Vendors See After Switching to Befikra</h3>
          <p className="text-lg text-slate-600">Befikra is built to reduce manual effort and decision fatigue, so vendors spend less time managing and more time growing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group"
            >
              <div className={`w-12 h-12 rounded-2xl ${metric.bg} flex items-center justify-center mb-6`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <h4 className={`text-4xl font-bold ${metric.color} mb-2`}>{metric.value}</h4>
              <h5 className="text-lg font-bold text-slate-900 mb-2">{metric.label}</h5>
              <p className="text-slate-500 text-sm leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
