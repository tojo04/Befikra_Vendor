"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Map, Banknote, LineChart, Users, FileText } from "lucide-react";
import clsx from "clsx";

const features = [
  {
    title: "Smart Itinerary Builder",
    description: "Create stunning, detailed itineraries in minutes with drag-and-drop ease and AI suggestions.",
    icon: Map,
    className: "md:col-span-2 md:row-span-2 bg-blue-600 text-white",
    contentClassName: "text-blue-100",
    iconClassName: "text-blue-200",
  },
  {
    title: "Lead Management CRM",
    description: "Track every lead from initial contact to final booking. Never lose a customer in the chaos.",
    icon: Users,
    className: "md:col-span-1 bg-white border border-gray-100",
    contentClassName: "text-gray-500",
    iconClassName: "text-blue-600",
  },
  {
    title: "Automated Quotations",
    description: "Generate instant price quotes based on customer preferences and availability.",
    icon: FileText,
    className: "md:col-span-1 bg-white border border-gray-100",
    contentClassName: "text-gray-500",
    iconClassName: "text-purple-600",
  },
  {
    title: "Payment Gateway",
    description: "Secure, integrated payments. Accept deposits and full payments directly through the platform.",
    icon: Banknote,
    className: "md:col-span-1 bg-white border border-gray-100",
    contentClassName: "text-gray-500",
    iconClassName: "text-indigo-600",
  },
  {
    title: "Analytics & Reporting",
    description: "Deep insights into your sales, popular packages, and revenue growth. Make data-driven decisions.",
    icon: LineChart,
    className: "md:col-span-2 bg-slate-900 text-white",
    contentClassName: "text-gray-400",
    iconClassName: "text-gray-200",
  },
  {
    title: "Team Collaboration",
    description: "Assign leads, share itineraries, and communicate with your team in one shared workspace.",
    icon: MessageSquareText,
    className: "md:col-span-1 bg-white border border-gray-100",
    contentClassName: "text-gray-500",
    iconClassName: "text-rose-600",
  },
];

export function VendorCommandCenter() {
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
            The Ultimate Command Center for Vendor Success
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Everything you need to manage your business, powered by AI.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {features.map((feature, i) => (
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
                className={clsx(
                  "rounded-2xl p-8 flex flex-col justify-between h-full shadow-md relative overflow-hidden",
                  feature.className
                )}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-border"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={clsx("w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all shadow-lg", feature.iconClassName)}
                  >
                    <feature.icon className="w-7 h-7" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={clsx("text-sm leading-relaxed", feature.contentClassName)}>
                    {feature.description}
                  </p>
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
