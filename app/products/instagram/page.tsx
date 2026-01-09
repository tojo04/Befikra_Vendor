"use client";

import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer, CTA } from "../../components/Footer";
import { MessageCircle, CheckCircle2, Zap, Clock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function InstagramPage() {
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                    <MessageCircle className="w-4 h-4" />
                    Instagram Automation
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Turn Instagram DMs into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Confirmed Bookings.</span>
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Befikra helps adventure businesses use AI-powered Instagram automation to capture leads, qualify travellers, and convert conversations into confirmed bookings — without manual follow-ups.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-pink-500/25">
                      Schedule a Demo
                    </Link>
                    <Link href="#" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold rounded-full transition-all">
                      Vendor Login
                    </Link>
                  </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative">
                {/* Mockup for Instagram DM */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 p-6 max-w-sm mx-auto rotate-1 hover:rotate-0 transition-transform duration-500"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                    <div className="bg-slate-50 rounded-[2rem] h-[500px] overflow-hidden flex flex-col relative">
                       {/* Header */}
                       <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-between z-10">
                          <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">A</div>
                             <span className="font-bold text-slate-900 text-sm">Adventure Co.</span>
                          </div>
                       </div>
                       
                       {/* Messages */}
                       <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                          <div className="flex justify-end">
                             <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                                Hi! Do you have slots for the Triund trek this weekend?
                             </div>
                          </div>
                          
                          <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 1 }}
                             className="flex justify-start items-end gap-2"
                          >
                             <div className="bg-white shadow-sm border border-gray-100 p-3 rounded-2xl rounded-tl-none text-sm max-w-[85%] text-slate-700">
                                <span className="block text-xs text-purple-600 font-bold mb-1">AI Assistant</span>
                                Yes! We have 4 slots left for Saturday. The package is ₹1200/person including meals. Should I book it?
                             </div>
                          </motion.div>
                          
                          <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 2.5 }}
                             className="flex justify-end"
                          >
                             <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                                Yes please! For 2 people.
                             </div>
                          </motion.div>
                          
                           <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 4 }}
                             className="flex justify-start items-end gap-2"
                          >
                             <div className="bg-white shadow-sm border border-gray-100 p-3 rounded-2xl rounded-tl-none text-sm max-w-[85%] text-slate-700">
                                Great! Here is the payment link to confirm: <span className="text-blue-500 underline">pay.befikra.in/xyz</span>
                             </div>
                          </motion.div>
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
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Instagram Automation?</h2>
               <p className="text-lg text-slate-600">Instagram is where travellers discover you. Don't let manual replies slow you down.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  {
                    icon: Clock,
                    title: "24/7 Response",
                    desc: "Reply to enquiries instantly, even at 2 AM.",
                    color: "text-blue-600",
                    bg: "bg-blue-50"
                  },
                  {
                    icon: Users,
                    title: "Scale Conversations",
                    desc: "Handle 100s of DMs without hiring more staff.",
                    color: "text-purple-600",
                    bg: "bg-purple-50"
                  },
                  {
                    icon: Zap,
                    title: "Instant Conversion",
                    desc: "Turn questions into payment links in seconds.",
                    color: "text-pink-600",
                    bg: "bg-pink-50"
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
               <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-8">What You Get</h2>
                  <div className="space-y-8">
                     {[
                        "Instant AI Replies to FAQs",
                        "Automated Lead Qualification",
                        "Story Mention Tracking",
                        "Comment to DM Automation",
                        "Booking Link Generation"
                     ].map((feat, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           className="flex items-center gap-4"
                        >
                           <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-purple-400" />
                           </div>
                           <span className="text-xl font-medium">{feat}</span>
                        </motion.div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-2xl"></div>
                   <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
                      <div className="space-y-4">
                         <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-slate-600"></div>
                            <div className="flex-1 space-y-2">
                               <div className="h-4 bg-slate-700 rounded w-1/4"></div>
                               <div className="h-16 bg-slate-700 rounded w-full"></div>
                            </div>
                         </div>
                         <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 space-y-2">
                               <div className="h-4 bg-slate-700 rounded w-1/4"></div>
                               <div className="h-24 bg-slate-700 rounded w-3/4"></div>
                            </div>
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
