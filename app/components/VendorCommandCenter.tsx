"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Map, Banknote, LineChart, Users, FileText, Zap, TrendingUp } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "AI Itinerary Builder",
    description: "Drag, drop, done. Create stunning multi-day itineraries in under 5 minutes. AI suggests routes, timing, and pricing automatically.",
    icon: Map,
    size: "large",
    gradient: "from-blue-600 to-cyan-500",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
    metric: { value: "5min", label: "Avg. Creation Time" }
  },
  {
    title: "Lead Intelligence",
    description: "Every conversation tracked, every opportunity visible. Watch leads flow through your pipeline in real-time.",
    icon: Users,
    size: "medium",
    gradient: "from-purple-600 to-pink-500",
    metric: { value: "+40%", label: "Conversion Rate" }
  },
  {
    title: "Instant Quotes",
    description: "AI-powered pricing based on season, availability, and competitor analysis. Send professional quotes in seconds.",
    icon: FileText,
    size: "medium",
    gradient: "from-orange-500 to-yellow-500",
    metric: { value: "< 30s", label: "Quote Generation" }
  },
  {
    title: "Payments & Deposits",
    description: "Secure payment links, automated reminders, deposit tracking. Get paid faster, chase less.",
    icon: Banknote,
    size: "medium",
    gradient: "from-green-500 to-emerald-500",
    metric: { value: "100%", label: "Payment Tracking" }
  },
  {
    title: "Revenue Analytics",
    description: "Live dashboards showing booking trends, popular packages, and revenue forecasts. Make decisions with confidence.",
    icon: LineChart,
    size: "large",
    gradient: "from-indigo-600 to-blue-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    metric: { value: "Real-time", label: "Data Updates" }
  },
  {
    title: "Team Workspace",
    description: "Assign leads, share itineraries, leave notes. Your entire team stays in sync, no matter where they are.",
    icon: MessageSquareText,
    size: "medium",
    gradient: "from-rose-500 to-red-500",
    metric: { value: "∞", label: "Team Members" }
  },
];

export function VendorCommandCenter() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: '#EFF6FF', border: '1px solid #DBEAFE' }}
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">All-in-One Platform</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            style={{ color: '#0F172A' }}
          >
            Your Command Center for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              {" "}Effortless Growth
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-relaxed"
            style={{ color: '#64748B' }}
          >
            Everything you need to run a modern adventure business—from lead capture to payment collection—powered by AI, built for speed.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[280px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
              className={`
                group relative rounded-3xl overflow-hidden
                ${feature.size === 'large' ? 'md:col-span-3 md:row-span-2' : 'md:col-span-2'}
              `}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-full bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
                style={{
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)'
                }}
              >
                {/* Background image for large cards */}
                {feature.size === 'large' && feature.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/80"></div>
                  </div>
                )}

                {/* Gradient overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Glow effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  <div>
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className={`leading-relaxed ${feature.size === 'large' ? 'text-base' : 'text-sm'}`}
                      style={{ color: '#64748B' }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Metric Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3 mt-auto"
                  >
                    <div className="flex-1 rounded-2xl px-4 py-3 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                      <div className="flex items-baseline gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <div className={`font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent text-xl`}>
                          {feature.metric.value}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-gray-500 mt-1">
                        {feature.metric.label}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-12 px-8 py-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
            {[
              { value: '500+', label: 'Active Vendors' },
              { value: '50k+', label: 'Bookings Processed' },
              { value: '98%', label: 'Customer Satisfaction' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
