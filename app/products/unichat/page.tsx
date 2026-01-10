"use client";

import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer, CTA } from "../../components/Footer";
import { MessagesSquare, Instagram, Globe, Bot, Users, Clock, Zap, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Unified Inbox",
    description: "WhatsApp, Instagram, and Website chat in one place. No tab switching.",
    icon: MessagesSquare,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "AI That Sleeps for You",
    description: "Auto-reply to enquiries 24/7. Let AI handle the basics while you rest.",
    icon: Bot,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Smart Handoff",
    description: "AI filters leads, then hands over high-intent VIPs to your human team.",
    icon: Users,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Campaign Support",
    description: "Broadcast offers and itineraries to hundreds of users instantly.",
    icon: Zap,
    color: "bg-orange-50 text-orange-600"
  }
];

export default function UniChatPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                        <MessagesSquare className="w-4 h-4" />
                        <span>Befikra UniChat</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                    One Inbox. <br className="hidden md:block"/> Every Conversation. <span className="text-blue-600">Always On.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                    From customer support to sales conversations — everything happens in one place, with AI working for you even when you’re offline.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/demo" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center gap-2">
                            Schedule a Demo <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
            
            {/* Dashboard Preview Abstract */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.7 }}
               className="mt-16 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] flex"
            >
               {/* Sidebar */}
               <div className="w-20 md:w-64 bg-slate-50 border-r border-slate-100 p-4 flex flex-col gap-4">
                   <div className="h-8 w-8 bg-blue-600 rounded-lg mb-4"></div>
                   {[1,2,3,4,5].map(i => (
                       <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors cursor-pointer">
                           <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
                           <div className="hidden md:block h-2 w-24 bg-slate-200 rounded"></div>
                       </div>
                   ))}
               </div>
               
               {/* Chat Area */}
               <div className="flex-1 flex flex-col">
                   <div className="h-16 border-b border-slate-100 flex items-center px-6 justify-between">
                       <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                               <MessageCircle className="w-5 h-5" />
                           </div>
                           <div className="space-y-1">
                               <div className="h-3 w-32 bg-slate-900 rounded"></div>
                               <div className="h-2 w-20 bg-green-500/20 text-green-600 text-[10px] px-1 rounded flex items-center">WhatsApp</div>
                           </div>
                       </div>
                   </div>
                   <div className="flex-1 p-6 space-y-6 bg-slate-50/30">
                       <div className="flex justify-start">
                           <div className="bg-white p-4 rounded-b-2xl rounded-tr-2xl shadow-sm border border-slate-100 max-w-md">
                               <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>
                               <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                           </div>
                       </div>
                       <div className="flex justify-end">
                           <div className="bg-blue-600 p-4 rounded-b-2xl rounded-tl-2xl shadow-sm border border-blue-600 max-w-md">
                               <div className="h-2 w-full bg-white/20 rounded mb-2"></div>
                               <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                           </div>
                       </div>
                       <div className="flex justify-center">
                           <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-500 flex items-center gap-2">
                               <Bot className="w-3 h-3" /> AI took over this chat
                           </div>
                       </div>
                   </div>
                   <div className="h-20 border-t border-slate-100 bg-white p-4">
                       <div className="w-full h-full bg-slate-50 rounded-xl border border-slate-200"></div>
                   </div>
               </div>
            </motion.div>
        </div>
      </section>

      {/* Supported Channels */}
      <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-12">Supported Channels</h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                  <div className="flex items-center gap-3 text-2xl font-bold text-slate-400">
                      <MessageCircle className="w-8 h-8" /> WhatsApp
                  </div>
                  <div className="flex items-center gap-3 text-2xl font-bold text-slate-400">
                      <Instagram className="w-8 h-8" /> Instagram
                  </div>
                  <div className="flex items-center gap-3 text-2xl font-bold text-slate-400">
                      <Globe className="w-8 h-8" /> Website Chat
                  </div>
              </div>
          </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Customer Support + Sales, Together</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        UniChat is built for experience businesses, where support and sales happen in the same conversation. Answer FAQs instantly. Share itineraries. Guide users from enquiry to booking in one flow.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-slate-700">
                            <Clock className="w-5 h-5 text-blue-600" />
                            No handoffs. No confusion. No dropped context.
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, i) => (
                        <div key={i} className={`p-6 rounded-2xl ${feature.color.split(' ')[0]} bg-opacity-50`}>
                             <feature.icon className={`w-8 h-8 mb-4 ${feature.color.split(' ')[1]}`} />
                             <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                             <p className="text-sm text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* AI Callout */}
             <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden text-white">
                 <div className="relative z-10 max-w-3xl mx-auto">
                     <Bot className="w-16 h-16 mx-auto mb-8 text-blue-400" />
                     <h2 className="text-3xl md:text-5xl font-bold mb-6">AI That Works While You Sleep</h2>
                     <p className="text-xl text-slate-300 mb-10">
                         Auto-reply to enquiries 24x7. Ask qualifying questions. Share trip details. Your business stays responsive — even at midnight.
                     </p>
                     <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest">
                         AI + Human = Best Conversion
                     </p>
                 </div>
             </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
