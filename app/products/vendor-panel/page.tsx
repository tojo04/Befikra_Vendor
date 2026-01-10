"use client";

import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer, CTA } from "../../components/Footer";
import { LayoutDashboard, Users, Calendar, Wallet, BrainCircuit, ArrowRight, BarChart, Bell } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Leads & Conversations",
    description: "All Instagram, WhatsApp & website leads in one CRM. Full history, easy status tracking.",
    icon: Users,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Bookings & Experiences",
    description: "Manage trips, dates & group capacities. Track confirmed bookings in real-time.",
    icon: Calendar,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Payments & Settlements",
    description: "See earnings at a glance. Track payouts & settlements. No manual reconciliation.",
    icon: Wallet,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Team & Operations",
    description: "Auto-assign leads. Track ownership & follow-ups. Maintain clarity.",
    icon: LayoutDashboard,
    color: "bg-purple-50 text-purple-600"
  }
];

export default function VendorPanelPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-semibold mb-6">
                        <LayoutDashboard className="w-4 h-4" />
                        <span>Befikra AI Panel</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                    Run Your Business from One <span className="text-blue-600">Intelligent Dashboard.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                    It connects sales, conversations, bookings, payments, and operations — and then uses AI to make sense of it all.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/demo" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg flex items-center gap-2">
                            Explore with a Demo <ArrowRight className="w-4 h-4" />
                        </Link>
                         <Link href="/pricing" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
                            See Pricing
                        </Link>
                    </div>
                </motion.div>
            </div>

             {/* UI: Dashboard Overview */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="mt-16 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-w-6xl mx-auto aspect-[16/9] md:aspect-[16/8] lg:aspect-[21/9] p-2"
            >
                <div className="bg-slate-50 w-full h-full rounded-2xl border border-slate-100 p-6 flex gap-6">
                     {/* Sidebar Mock */}
                     <div className="hidden md:flex flex-col w-16 items-center gap-6 py-4">
                         <div className="w-10 h-10 bg-slate-900 rounded-xl"></div>
                         <div className="w-full h-px bg-slate-200"></div>
                         {[1,2,3,4,5].map(i => (
                             <div key={i} className={`w-10 h-10 rounded-xl ${i === 1 ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:bg-slate-200'}`}></div>
                         ))}
                     </div>
                     
                     {/* Dashboard Content Mock */}
                     <div className="flex-1 flex flex-col gap-6">
                         {/* Header */}
                         <div className="h-12 flex justify-between items-center">
                             <div className="space-y-1">
                                 <div className="h-4 w-48 bg-slate-200 rounded"></div>
                                 <div className="h-3 w-32 bg-slate-100 rounded"></div>
                             </div>
                             <div className="flex gap-3">
                                 <div className="w-10 h-10 bg-white border border-slate-200 rounded-full"></div>
                                 <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                             </div>
                         </div>
                         
                         {/* Stats Row */}
                         <div className="grid grid-cols-4 gap-4">
                             {[1,2,3,4].map(i => (
                                 <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                     <div className="flex justify-between mb-2">
                                         <div className="h-2 w-12 bg-slate-100 rounded"></div>
                                         <div className="h-4 w-4 bg-green-100 rounded-full"></div>
                                     </div>
                                     <div className="h-8 w-16 bg-slate-900 rounded mb-1"></div>
                                     <div className="h-2 w-24 bg-slate-50 rounded"></div>
                                 </div>
                             ))}
                         </div>
                         
                         {/* Main Chart + List */}
                         <div className="flex-1 flex gap-6">
                             <div className="flex-[2] bg-white rounded-xl border border-slate-100 p-4">
                                 <div className="flex justify-between mb-6">
                                     <div className="h-4 w-24 bg-slate-200 rounded"></div>
                                     <div className="h-4 w-16 bg-slate-100 rounded"></div>
                                 </div>
                                 <div className="flex items-end gap-2 h-40">
                                     {[...Array(12)].map((_, i) => (
                                         <div key={i} className="flex-1 bg-blue-50 hover:bg-blue-100 rounded-t-sm" style={{ height: `${Math.random() * 100}%` }}></div>
                                     ))}
                                 </div>
                             </div>
                             <div className="flex-1 bg-white rounded-xl border border-slate-100 p-4">
                                  <div className="h-4 w-24 bg-slate-200 rounded mb-4"></div>
                                  <div className="space-y-3">
                                      {[1,2,3].map(i => (
                                          <div key={i} className="flex gap-3 items-center">
                                              <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                              <div className="flex-1">
                                                  <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                                                  <div className="h-2 w-10 bg-slate-100 rounded"></div>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                             </div>
                         </div>
                     </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                      <BrainCircuit className="w-4 h-4" />
                      <span>AI That Understands Context</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900">This Is Not Just Software.<br/>It’s an Operating System.</h2>
                  <p className="text-lg text-slate-600">
                      Most tools help you manage tasks. The Befikra AI Vendor Panel helps you run a business. It highlights stalled leads, flags underperforming trips, and suggests follow-ups.
                  </p>
                  <ul className="space-y-4 pt-4">
                      <li className="flex gap-4">
                          <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold shrink-0">1</div>
                          <div>
                              <h4 className="font-bold text-slate-900">Priority Queue</h4>
                              <p className="text-slate-600 text-sm">See what needs action now. No distractions.</p>
                          </div>
                      </li>
                      <li className="flex gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                          <div>
                              <h4 className="font-bold text-slate-900">Business Memory</h4>
                              <p className="text-slate-600 text-sm">Remembers what worked last season and guides you.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                   {features.map((feature, i) => (
                       <motion.div 
                        whileHover={{ y: -5 }}
                        key={i} 
                        className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
                       >
                           <feature.icon className={`w-8 h-8 mb-4 ${feature.color.split(' ')[1]}`} />
                           <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                           <p className="text-xs text-slate-500">{feature.description}</p>
                       </motion.div>
                   ))}
              </div>
          </div>
      </section>

      {/* Business Scale */}
      <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-16">Built for Growth Without Chaos</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-8 rounded-2xl border border-slate-800 bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                      <h3 className="text-xl font-bold mb-4">Solo Operators</h3>
                      <p className="text-slate-400">Manage bookings without hiring staff.</p>
                  </div>
                  <div className="p-8 rounded-2xl border border-slate-800 bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                      <h3 className="text-xl font-bold mb-4">Adventure Brands</h3>
                      <p className="text-slate-400">Scale leads and team efficiency.</p>
                  </div>
                  <div className="p-8 rounded-2xl border border-slate-800 bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                      <h3 className="text-xl font-bold mb-4">Travel Companies</h3>
                      <p className="text-slate-400">Multi-destination management & insights.</p>
                  </div>
              </div>
          </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
