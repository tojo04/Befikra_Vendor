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
            className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3"
          >
            AI That Speeds Up Work — Not Adds More
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            What Vendors See After Switching to Befikra
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Befikra is built to reduce manual effort and decision fatigue, so vendors spend less time managing and more time growing.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 relative overflow-hidden h-full"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-border"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-xl ${metric.bg} flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300`}
                  >
                    <metric.icon className={`w-7 h-7 ${metric.color}`} />
                  </motion.div>
                  
                  {/* Value */}
                  <h4 className={`text-4xl font-extrabold ${metric.color} mb-3 tracking-tight`}>
                    {metric.value}
                  </h4>
                  
                  {/* Label */}
                  <h5 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {metric.label}
                  </h5>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
