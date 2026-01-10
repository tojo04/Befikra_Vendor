"use client";

import { motion } from "framer-motion";
import { Globe, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const channels = [
  {
    name: "Instagram",
    logo: "/logos/Instagram_Glyph_Gradient.svg",
    useIcon: true,
    description: "Turn scrolling into bookings.",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    features: [
      "Auto-Reply to DMs & Comments",
      "Convert Comments into Leads",
      "24/7 Engagement"
    ]
  },
  {
    name: "WhatsApp",
    logo: "/logos/whatsapp.svg",
    useIcon: true,
    description: "Instant communication where it matters.",
    color: "bg-green-500",
    features: [
      "Instant Quote Delivery",
      "Automated Follow-ups",
      "Broadcasting to Leads"
    ]
  },
  {
    name: "Website",
    icon: Globe,
    useIcon: false,
    description: "Make your site your best salesperson.",
    color: "bg-blue-500",
    features: [
      "Live Chat Assistant",
      "Lead Capture Forms",
      "Smart Itinerary Builder"
    ]
  }
];

export function ChannelIntegration() {
  return (
    <section className="py-24" style={{ backgroundColor: '#3C79D2' }}>
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
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            One Platform for All Your Channels
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90"
          >
            Your customers are everywhere. Now, you can be too—without the burnout.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {channels.map((channel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative cursor-pointer h-full"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col h-full relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-border"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-xl ${channel.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 p-3`}
                  >
                    {channel.useIcon ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={channel.logo}
                          alt={`${channel.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <channel.icon className="w-8 h-8" />
                    )}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {channel.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {channel.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mt-auto">
                    {channel.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
