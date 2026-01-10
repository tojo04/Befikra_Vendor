"use client";

import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer, CTA } from "../../components/Footer";
import { Link2, Instagram, MessageCircle, BarChart3, Palette, CheckCircle2, ArrowRight, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Showcase All Experiences",
    description: "Display treks, camps, adventures, and trips in a clean, scroll-friendly layout. Make discovery easy.",
    icon: Link2,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Capture Leads Instantly",
    description: "Enquiry buttons linked to AI chat. No lost clicks or unanswered questions. Leads saved automatically.",
    icon: MessageCircle,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Get Bookings & Payments",
    description: "Share booking links directly. Real-time availability, secure payments & instant confirmation.",
    icon: CheckCircle2,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Brand It Your Way",
    description: "Custom colors & images. Clean, professional look that matches your brand identity.",
    icon: Palette,
    color: "bg-pink-50 text-pink-600"
  }
];

export default function SnaplinkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                    <Link2 className="w-4 h-4" />
                    <span>Befikra Snaplink</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                One Link. <span className="text-blue-600">Every Experience.</span> More Bookings.
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                Turn your Instagram bio into a mini booking website that captures leads, takes payments, and tells your brand story — all from one link.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/demo" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                    Schedule a Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
                    Vendor Login
                  </Link>
                </div>
            </motion.div>

            {/* Mockup Placeholder */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.7 }}
               className="mt-16 mx-auto max-w-xs relative"
            >
                <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-800">
                    <div className="bg-white rounded-[2rem] aspect-[9/19] relative overflow-hidden flex flex-col items-center pt-8 px-4">
                        <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 animate-pulse"></div>
                        <div className="h-4 w-32 bg-slate-100 rounded mb-2"></div>
                        <div className="h-3 w-24 bg-slate-50 rounded mb-8"></div>
                        <div className="w-full space-y-3">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="h-16 bg-slate-50 rounded-xl w-full border border-slate-100 flex items-center px-3 gap-3">
                                   <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                                   <div className="flex-1">
                                      <div className="h-3 w-20 bg-slate-200 rounded mb-1"></div>
                                      <div className="h-2 w-12 bg-slate-100 rounded"></div>
                                   </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-4 w-1/3 h-1 bg-slate-900 rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Why Snaplink */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Vendors Need Snaplink</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Social media brings traffic — but traffic without structure loses money. Too many links confuse customers. DMs slow down bookings. Snaplink solves this.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow"
                    >
                        <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Built for Social */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold mb-12">Built for Social-First Vendors</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                 <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                     <Instagram className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                     <h3 className="text-xl font-bold">Instagram</h3>
                     <p className="text-slate-400 mt-2 text-sm">Convert bio clicks into customers.</p>
                 </div>
                 <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                     <MessageCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                     <h3 className="text-xl font-bold">WhatsApp</h3>
                     <p className="text-slate-400 mt-2 text-sm">Share one link for all enquiries.</p>
                 </div>
                 <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                     <BarChart3 className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                     <h3 className="text-xl font-bold">Ads & Promos</h3>
                     <p className="text-slate-400 mt-2 text-sm">Track performance seamlessly.</p>
                 </div>
             </div>
         </div>
      </section>

      {/* Dashboard Integration */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-[2.5rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Connected to Your Vendor Dashboard</h2>
                    <p className="text-lg text-slate-600">
                        Snaplink works seamlessly with Befikra’s platform. Every click tracked. Every enquiry saved as a lead. Every booking recorded automatically.
                    </p>
                    <ul className="space-y-3">
                        {["Higher click-to-book conversion", "Faster decision-making", "Less DM back-and-forth", "Clear visibility on performance"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 font-medium text-slate-800">
                                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 w-full relative">
                     <div className="relative aspect-[4/3] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 flex flex-col justify-center">
                        <div className="flex items-end justify-between mb-8 px-4">
                            <div className="space-y-2">
                                <div className="h-2 w-20 bg-slate-100 rounded"></div>
                                <div className="h-6 w-32 bg-slate-900 rounded"></div>
                            </div>
                            <div className="h-8 w-8 bg-green-100 rounded-full text-green-600 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 -rotate-45" />
                            </div>
                        </div>
                        <div className="space-y-4 px-4">
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-1/2 bg-purple-600 rounded-full"></div>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-pink-600 rounded-full"></div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
