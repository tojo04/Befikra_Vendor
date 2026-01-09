"use client";

import { motion } from "framer-motion";
import { CreditCard, Globe2, Sparkles, LayoutDashboard, Users, Smartphone, ArrowRight } from "lucide-react";
import clsx from "clsx";

const features = [
  {
    title: "Global Travel Inventory",
    description: "Access millions of flight, hotel, and train options at exclusive rates.",
    icon: Globe2,
    className: "md:col-span-2 md:row-span-2 bg-blue-600 text-white",
    contentClassName: "text-blue-100",
    iconClassName: "text-blue-200",
  },
  {
    title: "Instant Expense",
    description: "Snap a photo, and AI handles the rest. No manual entry.",
    icon: CreditCard,
    className: "md:col-span-1 bg-white border border-gray-100",
    contentClassName: "text-gray-500",
    iconClassName: "text-blue-600",
  },
  {
    title: "Smart Policies",
    description: "Automate compliance with dynamic spending limits.",
    icon: Sparkles,
    className: "md:col-span-1 bg-white border border-gray-100",
    contentClassName: "text-gray-500",
    iconClassName: "text-purple-600",
  },
  {
    title: "Team Management",
    description: "Organize approvals by department or project tiered roles.",
    icon: Users,
    className: "md:col-span-1 bg-white border border-gray-100",
    contentClassName: "text-gray-500",
    iconClassName: "text-indigo-600",
  },
  {
    title: "Real-time Reporting",
    description: "Visualize spending trends across your entire organization instantly.",
    icon: LayoutDashboard,
    className: "md:col-span-2 bg-gray-900 text-white",
    contentClassName: "text-gray-400",
    iconClassName: "text-gray-200",
  },
  {
    title: "Mobile First",
    description: "Approve requests and book travel from anywhere.",
    icon: Smartphone,
    className: "md:col-span-1 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100",
    contentClassName: "text-indigo-900/70",
    iconClassName: "text-indigo-600",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Features</h2>
           <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Everything you need to run your business travel.</h3>
           <p className="text-lg text-slate-600">Stop juggling multiple tools. Get visibility, control, and savings in one platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={clsx(
                "rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300",
                feature.className
              )}
            >
               {feature.className.includes("bg-blue-600") && (
                 <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
               )}
               
               <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                 <feature.icon className={clsx("w-6 h-6", feature.iconClassName)} />
               </div>
               
               <div className="relative z-10">
                 <h4 className="text-2xl font-bold mb-2">{feature.title}</h4>
                 <p className={clsx("text-base leading-relaxed", feature.contentClassName)}>{feature.description}</p>
                 
                 <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 font-bold text-sm cursor-pointer">
                    Learn more <ArrowRight size={16} />
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
