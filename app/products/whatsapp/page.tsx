"use client";

import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer, CTA } from "../../components/Footer";
import { MessageSquare, CheckCircle2, Bot, Bell, Clock } from "lucide-react";
import Link from "next/link";

export default function WhatsappPage() {
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Automation
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Turn WhatsApp Chats into <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Growth.</span>
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Befikra helps adventure businesses use AI-powered WhatsApp automation to capture enquiries, qualify travellers, and convert conversations into confirmed bookings — without manual replies or follow-ups.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-green-500/25">
                      Schedule a Demo
                    </Link>
                    <Link href="#" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold rounded-full transition-all">
                      Vendor Login
                    </Link>
                  </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative">
                {/* Mockup for WhatsApp Inbox */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 p-6 max-w-sm mx-auto"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                    <div className="bg-slate-50 rounded-[2rem] h-[500px] overflow-hidden flex flex-col relative bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]">
                       {/* Header */}
                       <div className="bg-[#008069] p-4 text-white flex items-center justify-between z-10">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">B</div>
                             <div>
                                <span className="font-bold text-sm block">Befikra AI Bot</span>
                                <span className="text-xs text-white/80">Online</span>
                             </div>
                          </div>
                       </div>
                       
                       {/* Messages */}
                       <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                           <div className="flex justify-end">
                             <div className="bg-[#E7F8F5] text-slate-900 p-2 px-3 rounded-lg text-sm max-w-[80%] shadow-sm">
                                Hey, send me details for Rishikesh Rafting?
                                <span className="text-[10px] text-slate-500 block text-right mt-1">10:42 AM</span>
                             </div>
                          </div>
                          
                          <motion.div 
                             initial={{ opacity: 0, scale: 0.9 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ delay: 1 }}
                             className="flex justify-start"
                          >
                             <div className="bg-white p-2 px-3 rounded-lg text-sm max-w-[85%] text-slate-900 shadow-sm border border-slate-100">
                                <span className="block text-xs text-green-600 font-bold mb-1">🤖 Automated Reply</span>
                                Sure! We have 16km and 24km rafting packages available.
                                <br/><br/>
                                • 16km: ₹1000/person<br/>
                                • 24km: ₹1500/person
                                <br/><br/>
                                Which one would you prefer?
                                <span className="text-[10px] text-slate-400 block text-right mt-1">10:42 AM</span>
                             </div>
                          </motion.div>
                          
                          <motion.div 
                             initial={{ opacity: 0, scale: 0.9 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ delay: 3 }}
                             className="flex justify-end"
                          >
                             <div className="bg-[#E7F8F5] text-slate-900 p-2 px-3 rounded-lg text-sm max-w-[80%] shadow-sm">
                                24km for 5 people.
                                <span className="text-[10px] text-slate-500 block text-right mt-1">10:45 AM</span>
                             </div>
                          </motion.div>
                       </div>
                       
                       {/* Input Area */}
                        <div className="bg-white p-3 flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                +
                             </div>
                             <div className="flex-1 h-8 bg-slate-100 rounded-full px-4 text-xs flex items-center text-slate-400">
                                Type a message
                             </div>
                             <div className="w-8 h-8 rounded-full bg-[#008069] flex items-center justify-center text-white">
                                <MessageSquare className="w-4 h-4" />
                             </div>
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
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Why WhatsApp Automation?</h2>
               <p className="text-lg text-slate-600">WhatsApp is where deals happen. Automate it to scale without burnout.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  {
                    icon: Bot,
                    title: "AI Chatbot",
                    desc: "Handle bulk enquiries instantly. Zero wait time.",
                    color: "text-green-600",
                    bg: "bg-green-50"
                  },
                  {
                    icon: Bell,
                    title: "Automated Follow-ups",
                    desc: "Nudge leads who stop replying automatically.",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50"
                  },
                  {
                    icon: Clock,
                    title: "Broadcast Marketing",
                    desc: "Send bulk offers to past customers in one click.",
                    color: "text-teal-600",
                    bg: "bg-teal-50"
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
                        "24/7 AI Lead Qualification",
                        "Instant Brochure & Itinerary Sharing",
                        "Automated Payment Links",
                        "Post-Trip Feedback Collection",
                        "Unified Team Inbox"
                     ].map((feat, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           className="flex items-center gap-4"
                        >
                           <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-green-400" />
                           </div>
                           <span className="text-xl font-medium">{feat}</span>
                        </motion.div>
                     ))}
                  </div>
               </div>
               
               <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl opacity-20 blur-2xl"></div>
                   <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 aspect-video flex items-center justify-center">
                       <div className="text-center">
                         <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Bot className="w-10 h-10 text-green-400" />
                         </div>
                         <h3 className="text-2xl font-bold mb-2">AI Agent Active</h3>
                         <p className="text-slate-400">Handling 25 conversations...</p>
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
