"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer, CTA } from "../components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    title: "AI Vendor Panel",
    description: "The operating system for your business. Manage leads, bookings, payments, and team operations from one dashboard.",
    href: "/products/vendor-panel",
    features: ["Lead Management", "Booking System", "Payment Tracking", "Team Collaboration"],
    bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=80"
  },
  {
    title: "UniChat",
    description: "Unified inbox for WhatsApp, Instagram & Web. AI handles support while your team closes sales.",
    href: "/products/unichat",
    features: ["Multi-Channel Inbox", "AI Auto-Response", "Real-time Sync", "Smart Routing"],
    bgImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&auto=format&fit=crop&q=80"
  },
  {
    title: "Snaplink",
    description: "The ultimate link-in-bio booking store. Showcase trips and capture leads directly from Instagram.",
    href: "/products/snaplink",
    features: ["Custom Landing Page", "Trip Showcase", "Lead Capture", "Instagram Integration"],
    bgImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&auto=format&fit=crop&q=80"
  },
  {
    title: "Instagram Automation",
    description: "Turn comments and DMs into bookings instantly. Auto-reply to leads 24/7.",
    href: "/products/instagram",
    features: ["Comment Auto-Reply", "DM Automation", "Story Responses", "Lead Qualification"],
    bgImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&auto=format&fit=crop&q=80"
  },
  {
    title: "WhatsApp Automation",
    description: "Handle bulk enquiries, send automated follow-ups, and broadcast offers.",
    href: "/products/whatsapp",
    features: ["Bulk Messaging", "Auto Follow-ups", "Broadcast Lists", "Template Messages"],
    bgImage: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=1200&auto=format&fit=crop&q=80"
  },
  {
    title: "Website Booking Engine",
    description: "Accept payments and confirm trips directly on your website.",
    href: "/products/website",
    features: ["Payment Gateway", "Booking Calendar", "Custom Forms", "Email Confirmations"],
    bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop&q=80"
  }
];

export default function ProductsHubPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0A1E3B' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: '#0A1E3B' }}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto mb-20"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6"
                style={{ backgroundColor: 'rgba(60, 121, 210, 0.2)', borderColor: 'rgba(60, 121, 210, 0.4)', color: '#DAE2FA' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#3C79D2' }}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#3C79D2' }}></span>
                </span>
                Complete Product Suite
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
              >
                <span className="text-white">Everything You Need,</span>
                <br />
                <span style={{ color: '#3C79D2' }}>One Platform.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl leading-relaxed"
                style={{ color: '#DAE2FA' }}
              >
                From lead generation to final payment, automate every step of your adventure business.
                <br />
                <span className="font-semibold text-white">Choose the tools that fit your needs.</span>
              </motion.p>
            </motion.div>
            
            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
               {products.map((product, i) => (
                  <Link key={i} href={product.href}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.4 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="relative group cursor-pointer h-full"
                    >
                      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={product.bgImage}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-8">
                          <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                            {product.title}
                          </h3>
                          <p className="text-white/80 text-base mb-6 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Features List */}
                          <div className="space-y-2 mb-6">
                            {product.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#3C79D2' }}></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <motion.div
                            whileHover={{ gap: '12px' }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer"
                            style={{ backgroundColor: '#3C79D2', color: '#ffffff' }}
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>

                        {/* Hover Border Effect */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 rounded-3xl pointer-events-none"
                          style={{ boxShadow: 'inset 0 0 0 2px rgba(60, 121, 210, 0.5)' }}
                        />
                      </div>
                    </motion.div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32" style={{ backgroundColor: '#15325D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Why Befikra Products?
            </h2>
            <p className="text-xl" style={{ color: '#DAE2FA' }}>
              Built specifically for adventure and travel businesses in India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated Ecosystem",
                description: "All products work together seamlessly. No data silos, no manual syncing.",
                icon: "🔗"
              },
              {
                title: "India-First Design",
                description: "Built for Indian languages, payment methods, and business practices.",
                icon: "🇮🇳"
              },
              {
                title: "AI-Powered Automation",
                description: "Let AI handle repetitive tasks while you focus on delivering great experiences.",
                icon: "🤖"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl"
                style={{ backgroundColor: '#0A1E3B', border: '1px solid rgba(60, 121, 210, 0.2)' }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="leading-relaxed" style={{ color: '#DAE2FA' }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
