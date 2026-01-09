"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900"
            >
              Contact & Support
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Have a question, need support, or want to understand how Befikra fits your business? Reach out to us and our team will get back to you shortly.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            
            {/* Form Card */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="md:col-span-2 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-900">Full Name*</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-900">Email Address*</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-900">Phone Number</label>
                        <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="business" className="text-sm font-semibold text-slate-900">Business Name</label>
                        <input type="text" id="business" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Travel Co." />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="query" className="text-sm font-semibold text-slate-900">Query Type</label>
                    <div className="relative">
                        <select id="query" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none bg-white">
                            <option>Product Enquiry</option>
                            <option>Technical Support</option>
                            <option>Billing & Pricing</option>
                            <option>Demo Request</option>
                            <option>General Question</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                             <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-semibold text-slate-900">Message*</label>
                   <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all hover:scale-[1.02] shadow-lg">
                    Submit Request
                </button>

                <p className="text-xs text-center text-slate-500">
                    By submitting this form, you agree to our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </motion.div>

            {/* Side Info */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="space-y-6"
            >
                {/* Contact Info */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-4">
                    <h3 className="font-bold text-slate-900">Other Ways to Reach Us</h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 text-slate-600">
                            <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-slate-900">Support Email</p>
                                <a href="mailto:support@gobefikra.com" className="text-sm hover:text-blue-600 transition-colors">support@gobefikra.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 text-slate-600">
                            <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-slate-900">Business Hours</p>
                                <p className="text-sm">Mon–Sat, 10 AM – 6 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vendor Login Helper */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-2">Already a Partner?</h3>
                    <p className="text-sm text-blue-700 mb-4">Log in to your vendor dashboard for faster support.</p>
                    <Link href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                        Vendor Login
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="space-y-2 text-sm text-slate-500 px-2">
                    <p>• We usually respond within 24 hours</p>
                    <p>• Support available for active vendors</p>
                    <p>• No spam. Your details stay private</p>
                </div>

            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
