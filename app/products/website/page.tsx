"use client";

import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer, CTA } from "../../components/Footer";
import { Globe, CheckCircle2, ShoppingCart, Smartphone, CalendarCheck } from "lucide-react";
import Link from "next/link";

export default function WebsitePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                    <Globe className="w-4 h-4" />
                    Website Booking Engine
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Turn Your Website into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Booking Machine.</span>
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Befikra helps adventure businesses use a fast, AI-powered website booking engine to accept bookings, collect payments, and confirm trips — without manual coordination or follow-ups.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/25">
                      Schedule a Demo
                    </Link>
                    <Link href="#" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold rounded-full transition-all">
                      Vendor Login
                    </Link>
                  </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative">
                {/* Mockup for Booking Engine */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-w-lg mx-auto"
                >
                    <div className="bg-slate-100 p-4 border-b border-gray-200 flex items-center gap-2">
                       <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                       </div>
                       <div className="bg-white px-4 py-1 rounded-md text-xs text-slate-400 flex-1 text-center mx-4">
                          your-website.com/book
                       </div>
                    </div>
                    <div className="p-8">
                       <div className="flex gap-6 mb-8">
                          <div className="w-1/3 aspect-[4/3] bg-slate-200 rounded-lg"></div>
                          <div className="flex-1">
                             <div className="h-6 bg-slate-900 rounded w-3/4 mb-2"></div>
                             <div className="h-4 bg-slate-300 rounded w-1/2 mb-4"></div>
                             <div className="flex gap-2 mb-4">
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Available</span>
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">4 Days</span>
                             </div>
                             <div className="text-2xl font-bold text-slate-900">₹12,499</div>
                          </div>
                       </div>
                       
                       <div className="space-y-4">
                           <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                              <label className="text-xs font-bold text-slate-500 uppercase block mb-2">Select Date</label>
                              <div className="flex gap-2">
                                 <div className="bg-white border-2 border-blue-600 px-4 py-2 rounded-lg text-blue-600 font-bold text-sm">Sat, 12 Aug</div>
                                 <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-slate-500 font-medium text-sm">Sun, 13 Aug</div>
                              </div>
                           </div>
                           <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                              Book Now
                              <ShoppingCart className="w-4 h-4" />
                           </button>
                       </div>
                    </div>
                </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Why a Booking Engine?</h2>
               <p className="text-lg text-slate-600">Stop losing leads to 'request a quote' forms. Let visitors book instantly.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  {
                    icon: ShoppingCart,
                    title: "Instant Booking",
                    desc: "No manual confirmations. Accept payments 24/7.",
                    color: "text-blue-600",
                    bg: "bg-blue-50"
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile First",
                    desc: "Optimized for Instagram traffic and mobile users.",
                    color: "text-cyan-600",
                    bg: "bg-cyan-50"
                  },
                  {
                    icon: CalendarCheck,
                    title: "Real-time Sync",
                    desc: "Availability syncs with your dashboard instantly.",
                    color: "text-indigo-600",
                    bg: "bg-indigo-50"
                  }
               ].map((item, i) => (
                  <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                     <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-slate-600">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-20 blur-2xl"></div>
                   <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 aspect-video flex items-center justify-center">
                      <div className="text-center">
                         <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-10 h-10 text-white" />
                         </div>
                         <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
                         <p className="text-slate-400">Ticket sent to john@example.com</p>
                      </div>
                   </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-5xl font-bold mb-8">What You Get</h2>
                  <div className="space-y-8">
                     {[
                        "Zero-Login Checkout (Guest Checkout)",
                        "Multiple Payment Gateways",
                        "Automated Ticket & Invoice Generation",
                        "Discount Code Engine",
                        "Abandoned Cart Recovery"
                     ].map((feat, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           className="flex items-center gap-4"
                        >
                           <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-blue-400" />
                           </div>
                           <span className="text-xl font-medium">{feat}</span>
                        </motion.div>
                     ))}
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
