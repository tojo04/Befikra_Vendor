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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The Ultimate Command Center for Vendor Success</h2>
          <p className="text-lg text-slate-600">Everything you need to manage your business, powered by AI.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={clsx(
                "rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300",
                feature.className
              )}
            >
              <div className="mb-4">
                <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm", feature.iconClassName)}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className={clsx("font-medium", feature.contentClassName)}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
