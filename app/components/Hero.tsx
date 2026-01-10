"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Zap, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/80 to-indigo-50/0 rounded-b-[100%] blur-3xl opacity-70" />
        <motion.div 
            animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3], 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[100px] mix-blend-multiply filter"
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3], 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] mix-blend-multiply filter"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Badge */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New: AI-Powered Automation
            <ArrowRight size={14} className="ml-1" />
        </motion.div>

        {/* Heading */}
        <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl"
        >
          Grow Your Adventure <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
             Business with AI.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
        >
          The Smart Vendor Platform Built for Treks, Camps & Experience Businesses. Capture more leads, convert bookings faster, and run operations efficiently.
        </motion.p>

        {/* CTAs */}
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl relative overflow-hidden group">
              <span className="relative z-10">Schedule a Demo</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 hover:shadow-lg hover:text-blue-600">
              See Pricing
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image / Dashboard Mockup */}
        <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="mt-20 relative w-full max-w-5xl perspective-1000"
        >
            <div className="relative rounded-2xl bg-slate-900/5 p-2 ring-1 ring-slate-900/10 backdrop-blur-3xl lg:rounded-3xl lg:p-4">
                <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden aspect-[16/9] border border-gray-200/50">
                    {/* Abstract UI Representation */}
                    <div className="absolute inset-0 bg-slate-50 flex flex-col">
                        {/* Fake Header */}
                        <div className="h-14 border-b border-gray-200/60 bg-white flex items-center px-6 justify-between">
                             <div className="flex gap-2">
                                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
                             </div>
                             <div className="h-2 w-32 bg-gray-100 rounded-full"></div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 p-8 grid grid-cols-12 gap-8">
                             {/* Sidebar */}
                             <div className="col-span-3 hidden md:flex flex-col gap-4">
                                 {[1,2,3,4,5].map(i => (
                                     <div key={i} className="h-8 w-full bg-gray-100 rounded-lg animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
                                 ))}
                             </div>
                             {/* Main Content */}
                             <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
                                 <div className="flex gap-4">
                                     <div className="h-32 w-full bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center flex-col gap-2">
                                          <div className="h-8 w-20 bg-blue-200 rounded animate-pulse"></div>
                                          <div className="h-2 w-12 bg-blue-200 rounded animate-pulse"></div>
                                     </div>
                                     <div className="h-32 w-full bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center justify-center flex-col gap-2">
                                          <div className="h-8 w-20 bg-indigo-200 rounded animate-pulse"></div>
                                          <div className="h-2 w-12 bg-indigo-200 rounded animate-pulse"></div>
                                     </div>
                                     <div className="h-32 w-full bg-purple-50 rounded-2xl border border-purple-100 flex items-center justify-center flex-col gap-2">
                                          <div className="h-8 w-20 bg-purple-200 rounded animate-pulse"></div>
                                          <div className="h-2 w-12 bg-purple-200 rounded animate-pulse"></div>
                                     </div>
                                 </div>
                                 <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                                     <div className="h-4 w-1/3 bg-gray-100 rounded mb-8"></div>
                                     {[1,2,3,4].map(i => (
                                          <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-4">
                                              <div className="flex items-center gap-4">
                                                  <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                                                  <div className="space-y-2">
                                                      <div className="w-24 h-2 bg-gray-100 rounded"></div>
                                                      <div className="w-16 h-2 bg-gray-100 rounded"></div>
                                                  </div>
                                              </div>
                                              <div className="w-12 h-6 bg-green-50 text-green-600 text-xs rounded-full flex items-center justify-center font-bold">Paid</div>
                                          </div>
                                     ))}
                                 </div>
                             </div>
                        </div>
                    </div>
                    
                    {/* Floating Element 1 */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -right-6 top-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 w-64"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                             <ShieldCheck size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 font-bold uppercase">Status</div>
                            <div className="text-sm font-bold text-slate-800">Policy Compliant</div>
                        </div>
                    </motion.div>

                    {/* Floating Element 2 */}
                    <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -left-6 bottom-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 w-56"
                    >
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                             <Zap size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 font-bold uppercase">Speed</div>
                            <div className="text-sm font-bold text-slate-800">Instant Approval</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>

        {/* Social Proof Text */}
        <p className="mt-16 text-sm text-slate-400 font-medium uppercase tracking-widest">Trusted by innovative teams worldwide</p>
      </div>
    </div>
  );
}
