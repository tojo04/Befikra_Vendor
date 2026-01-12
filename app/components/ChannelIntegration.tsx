"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Globe, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const channels = [
  {
    name: "Instagram",
    logo: "/logos/Instagram_Glyph_Gradient.svg",
    useIcon: true,
    tagline: "Turn scrollers into explorers",
    description: "Capture adventure-seekers directly from their feeds. Every DM becomes a potential booking.",
    color: "from-purple-600 to-pink-600",
    accentColor: "#E4405F",
    href: "/products/instagram",
    features: [
      "Auto-respond to story mentions",
      "Convert comments to leads instantly",
      "24/7 AI engagement"
    ],
    stats: { label: "Response Time", value: "< 30s" }
  },
  {
    name: "WhatsApp",
    logo: "/logos/whatsapp.svg",
    useIcon: true,
    tagline: "Where conversations convert",
    description: "Meet your customers where they already are. Instant quotes, automated follow-ups, personal touch at scale.",
    color: "from-green-500 to-emerald-600",
    accentColor: "#25D366",
    href: "/products/whatsapp",
    features: [
      "Instant itinerary sharing",
      "Smart broadcast campaigns",
      "Payment links in chat"
    ],
    stats: { label: "Conversion Rate", value: "+47%" }
  },
  {
    name: "Website",
    icon: Globe,
    useIcon: false,
    tagline: "Your 24/7 booking machine",
    description: "Transform your website into an intelligent sales agent that never sleeps, never misses a lead.",
    color: "from-blue-500 to-cyan-500",
    accentColor: "#3B82F6",
    href: "/products/website",
    features: [
      "AI-powered live chat",
      "Smart lead capture forms",
      "Real-time availability sync"
    ],
    stats: { label: "Lead Capture", value: "+85%" }
  }
];

export function ChannelIntegration() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0A1E3B' }}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
            style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: '#3B82F6' }}
          >
            <Sparkles className="w-4 h-4" style={{ color: '#60A5FA' }} />
            <span className="text-sm font-semibold" style={{ color: '#93C5FD' }}>Omnichannel Intelligence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Every Channel.<br/>
            <span style={{ color: '#3C79D2' }}>
              One Conversation.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-relaxed"
            style={{ color: '#94A3B8' }}
          >
            Stop juggling platforms. Start capturing leads everywhere your customers are—Instagram DMs, WhatsApp chats, website visitors—all flowing into one unified inbox.
          </motion.p>
        </motion.div>

        {/* Channel Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {channels.map((channel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden h-full"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Gradient overlay */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${channel.color}`}
                ></div>
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${channel.accentColor}40, transparent)` }}
                ></motion.div>

                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon & Stats Row */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl relative`}
                      style={{ 
                        background: channel.name === 'Instagram' ? 'white' : (channel.name === 'WhatsApp' ? '#25D366' : `linear-gradient(135deg, ${channel.accentColor}, ${channel.accentColor}dd)`),
                        padding: channel.name === 'Instagram' ? '12px' : '12px',
                        boxShadow: `0 8px 32px ${channel.accentColor}40` 
                      }}
                    >
                      {channel.useIcon && channel.logo ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={channel.logo}
                            alt={channel.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : channel.icon ? (
                        <channel.icon className="w-8 h-8 text-white" />
                      ) : null}
                    </motion.div>

                    {/* Stats Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="text-right px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    >
                      <div className="text-xs font-medium" style={{ color: '#64748B' }}>{channel.stats.label}</div>
                      <div className="text-lg font-bold" style={{ color: channel.accentColor }}>
                        {channel.stats.value}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {channel.name}
                    </h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: channel.accentColor }}>
                      {channel.tagline}
                    </p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
                      {channel.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {channel.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: channel.accentColor }} />
                          <span className="text-sm font-medium" style={{ color: '#CBD5E1' }}>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link href={channel.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-sm font-semibold group/btn mt-auto cursor-pointer"
                      style={{ color: channel.accentColor }}
                    >
                      Learn more
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </motion.div>
                  </Link>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                  }}
                  animate={hoveredIndex === i ? { x: ['-100%', '200%'] } : {}}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-medium mb-4" style={{ color: '#64748B' }}>
            Trusted by 500+ adventure businesses across 12 countries
          </p>
          <div className="flex items-center justify-center gap-8 opacity-40">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-24 h-8 bg-white/10 rounded"></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
