"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "../components/Navbar";

// Trust elements list
const benefits = [
  "Free & personalised demo",
  "No technical knowledge required",
  "Takes ~20 minutes",
  "Trusted by 250+ adventure businesses"
];

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Handle success logic here
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
         </div>

         <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="hidden lg:block space-y-8"
            >
               <div>
                 <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                   See How AI Helps You <span className="text-blue-600">Grow Your Adventure Business</span>
                 </h1>
                 <p className="text-lg text-slate-600 max-w-lg mb-8">
                   Get a quick, personalised walkthrough of Befikra and understand how our AI-powered vendor platform fits your business.
                 </p>
               </div>

               {/* Optional Dashboard Preview / Visual */}
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-video flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                       <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                       </svg>
                    </div>
                    <p className="font-bold text-slate-900 text-lg">Live Dashboard Preview</p>
                    <p className="text-slate-500 text-sm">See your growth in real-time</p>
                  </div>
                  
                  {/* Floating elements */}
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100 text-sm"
                   >
                     <p className="font-bold text-green-600">+35% Conversion</p>
                   </motion.div>
               </div>
               
               {/* Trust Indicators */}
               <div className="space-y-4 pt-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-blue-100 p-1 rounded-full">
                         <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
               </div>
            </motion.div>

            {/* Right Form Card */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10 relative"
            >
               {/* Mobile Header (Only visible on small screens) */}
               <div className="lg:hidden mb-8 text-center">
                 <h1 className="text-3xl font-bold text-slate-900 mb-4">Schedule a Demo</h1>
                 <p className="text-slate-600">See how AI helps you grow your business.</p>
               </div>

               <h2 className="text-2xl font-bold text-slate-900 mb-6 hidden lg:block">Schedule a Demo</h2>
               
               <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name*</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 mb-1">Business Name*</label>
                      <input 
                        type="text" 
                        id="businessName" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        placeholder="My Adventure Co."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number*</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address*</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-1">Business Type</label>
                      <select 
                        id="businessType"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none bg-white"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
                      >
                        <option value="">Select an option</option>
                        <option value="trekking">Trekking Group</option>
                        <option value="camps">Camps / Outdoor Experiences</option>
                        <option value="adventure_sports">Adventure Sports</option>
                        <option value="travel_experiences">Travel Experiences</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="socialLink" className="block text-sm font-medium text-slate-700 mb-1 flex justify-between">
                        Instagram / Website Link
                        <span className="text-slate-400 font-normal">Optional</span>
                      </label>
                      <input 
                        type="url" 
                        id="socialLink" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        placeholder="https://instagram.com/..."
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        "Schedule My Demo"
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-center text-slate-500 mt-4">
                    By scheduling a demo, you agree to our <Link href="#" className="underline hover:text-blue-600">Privacy Policy</Link>.
                  </p>
               </form>

               <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <Link href="#" className="inline-flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm group">
                    Already a partner? Vendor Login 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </motion.div>
         </div>
         
         {/* Mobile Trust Indicators (Below Form) */}
         <div className="lg:hidden mt-12 w-full max-w-md text-center space-y-4">
            <h3 className="font-bold text-slate-900">Why Schedule a Demo?</h3>
             <div className="grid grid-cols-1 gap-3 text-left">
                  {benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-center justify-center gap-2 bg-white/50 p-2 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </div>
                  ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">Trusted by 250+ adventure businesses</p>
         </div>

      </div>
    </main>
  );
}
