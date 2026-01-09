"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, Globe, CheckCircle2 } from "lucide-react";

const channels = [
  {
    name: "Instagram",
    icon: Instagram,
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
    icon: MessageCircle,
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
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">One Platform for All Your Channels</h2>
          <p className="text-lg text-slate-600">Your customers are everywhere. Now, you can be too—without the burnout.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {channels.map((channel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl ${channel.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-200`}>
                <channel.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{channel.name}</h3>
              <p className="text-slate-500 mb-8">{channel.description}</p>
              
              <ul className="space-y-4 mt-auto">
                {channel.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
