"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    number: "01",
    label: "Unified Operations",
    title: "One dashboard to rule them all",
    description: "Manage every booking, conversation, and payment from a single, intelligent interface. No more juggling between apps—your entire business lives here.",
    stat: "10x faster",
    statLabel: "Than traditional tools"
  },
  {
    number: "02",
    label: "Smart Automation",
    title: "AI handles the heavy lifting",
    description: "From quote generation to itinerary creation, let artificial intelligence do the repetitive work while you focus on delivering unforgettable experiences.",
    stat: "95% time saved",
    statLabel: "On manual tasks"
  },
  {
    number: "03",
    label: "Growth Analytics",
    title: "Data that drives decisions",
    description: "Real-time insights into your revenue, conversion rates, and customer behavior. Know what's working, optimize what's not, and scale what matters.",
    stat: "+67% growth",
    statLabel: "Average yearly increase"
  },
];

export function VendorCommandCenter() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark blue background with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#0A1E3B'
        }}
      ></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[60vh] min-h-[500px] max-h-[700px] overflow-hidden"
        >
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1E3B] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3B]/40 via-transparent to-[#0A1E3B]/40 z-10"></div>
          
          {/* Hero Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Ambient lighting effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl z-5" style={{ backgroundColor: 'rgba(60,121,210,0.2)' }}></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl z-5" style={{ backgroundColor: 'rgba(218,226,250,0.15)' }}></div>
        </motion.div>

        {/* Content Section - Overlapping the image */}
        <div className="relative -mt-32 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main content card with rounded corners */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(10,30,59,0.95)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
              }}
            >
              <div className="px-8 sm:px-16 py-20">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center mb-8"
                >
                  <span 
                    className="inline-block px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                    style={{
                      backgroundColor: 'rgba(218,226,250,0.2)',
                      color: '#DAE2FA',
                      border: '1px solid rgba(218,226,250,0.3)'
                    }}
                  >
                    Enterprise-Grade Platform
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 leading-tight"
                  style={{ color: '#ffffff' }}
                >
                  Your Command Center for Effortless Growth
                </motion.h2>

                {/* Three Column Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                      className="group relative"
                    >
                      {/* Card with border and hover effect */}
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-full rounded-2xl p-8 border transition-all duration-300"
                        style={{
                          borderColor: 'rgba(218,226,250,0.2)',
                          backgroundColor: 'rgba(60,121,210,0.1)'
                        }}
                      >
                        {/* Number Badge */}
                        <div className="flex items-start justify-between mb-6">
                          <span 
                            className="text-7xl font-black opacity-20"
                            style={{ color: '#DAE2FA' }}
                          >
                            {feature.number}
                          </span>
                          <span 
                            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: 'rgba(60,121,210,0.15)',
                              color: '#DAE2FA'
                            }}
                          >
                            {feature.label}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 
                          className="text-2xl font-bold mb-4 leading-tight transition-colors duration-300 group-hover:text-white"
                          style={{ color: '#ffffff' }}
                        >
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p 
                          className="text-base leading-relaxed mb-6"
                          style={{ color: 'rgba(255,255,255,0.7)' }}
                        >
                          {feature.description}
                        </p>

                        {/* Stat */}
                        <div className="pt-6 border-t" style={{ borderColor: 'rgba(218,226,250,0.1)' }}>
                          <div 
                            className="text-3xl font-bold mb-1"
                            style={{
                              color: '#3C79D2'
                            }}
                          >
                            {feature.stat}
                          </div>
                          <div 
                            className="text-sm font-medium"
                            style={{ color: 'rgba(255,255,255,0.6)' }}
                          >
                            {feature.statLabel}
                          </div>
                        </div>

                        {/* Glow effect on hover */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle at center, rgba(60,121,210,0.15) 0%, transparent 70%)',
                          }}
                        ></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom spacing */}
          <div className="h-32"></div>
        </div>
      </div>
    </section>
  );
}
