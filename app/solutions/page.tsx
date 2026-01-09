"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer, CTA } from "../components/Footer";
import { 
  Mountain, 
  Compass, 
  Map, 
  Users, 
  MessageCircle, 
  Zap, 
  BarChart3, 
  Calendar,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    id: "trekking",
    title: "Trekking Agencies & Trek Organizers",
    description: "Trekking businesses deal with high enquiry volume, group capacities, seasonal demand, and safety-critical coordination. Befikra is built around these realities.",
    icon: Mountain,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    features: [
      "Capture enquiries from Instagram, WhatsApp & website",
      "Manage group sizes, batches & multiple trek dates",
      "Automate confirmations, reminders & updates",
      "Track bookings, payments & payouts in one dashboard"
    ],
    impact: [
      "Fewer missed leads during peak season",
      "Faster trek filling",
      "Less manual coordination"
    ],
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "adventure",
    title: "Adventure Agencies & Operators",
    description: "Adventure businesses run on speed, trust, and response time. Slow replies cost bookings. Befikra ensures you never miss a customer.",
    icon: Compass,
    color: "text-orange-600",
    bg: "bg-orange-50",
    features: [
      "AI replies instantly to DMs & WhatsApp enquiries",
      "Qualifies serious participants automatically",
      "Sends booking links with real-time availability",
      "Manages multiple experiences from one panel"
    ],
    impact: [
      "Higher conversion from social enquiries",
      "Reduced dependence on manual staff",
      "Clear visibility across all experiences"
    ],
    image: "https://images.unsplash.com/photo-1533130061792-649d45df4c72?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "travel",
    title: "Travel Agencies & Curators",
    description: "Modern travel agencies sell custom experiences, trips, and group tours, not just itineraries. Befikra gives them a system to scale.",
    icon: Map,
    color: "text-blue-600",
    bg: "bg-blue-50",
    features: [
      "Centralised CRM for all travel enquiries",
      "Structured booking flows for trips & tours",
      "Automated follow-ups & payment collection",
      "Performance insights across destinations & trips"
    ],
    impact: [
      "Faster decision-making for customers",
      "Higher booking confidence",
      "Better operational control"
    ],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
  }
];

const reasons = [
  {
    title: "Group Booking Built-in",
    description: "Built for group bookings & capacities instantly.",
    icon: Users
  },
  {
    title: "Omnichannel",
    description: "Works across Instagram, WhatsApp & websites.",
    icon: MessageCircle
  },
  {
    title: "AI Powered",
    description: "AI handles repetitive conversations 24/7.",
    icon: Zap
  },
  {
    title: "Centralized Ops",
    description: "One dashboard for sales & operations.",
    icon: BarChart3
  }
];

const businessModels = [
  "Weekend Treks",
  "Multi-day Expeditions",
  "Adventure Sports",
  "Group Tours & Curated Trips"
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
              Built for Experience-Based Businesses
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              One Platform for <span className="text-blue-600">Trekking, Adventure & Travel</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Befikra is designed for businesses that sell experiences, not products. Whether you organise treks, adventure activities, or curated travel experiences — we help you capture leads, convert bookings, and run operations at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/demo" 
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#" 
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all hover:scale-105 flex items-center gap-2"
              >
                Vendor Login
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
            >
              <div className="flex-1 space-y-8">
                <div className={`w-16 h-16 rounded-2xl ${industry.bg} flex items-center justify-center`}>
                  <industry.icon className={`w-8 h-8 ${industry.color}`} />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  {industry.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">How Befikra Helps</h3>
                    <ul className="space-y-3">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${industry.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Business Impact</h3>
                    <div className="flex flex-wrap gap-3">
                        {industry.impact.map((impact, i) => (
                          <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium shadow-sm">
                            {impact}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 aspect-[4/3] group">
                  <Image 
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Experience Businesses Choose Befikra
            </h2>
            <p className="text-lg text-slate-600">
              Because generic CRMs and booking tools don’t understand experience-based operations. 
              <br/>
              <span className="font-semibold text-slate-900">This is not software adapted for travel. This is software built for it.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                One Platform. Multiple Business Models.
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
                Whether you run weekend treks, multi-day expeditions, or curated group tours, Befikra adapts to how your business works.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {businessModels.map((model, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors"
                  >
                    <span className="text-white font-medium">{model}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16">
                 <Link 
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors"
                 >
                   Ready to Scale?
                   <ArrowRight className="w-5 h-5 ml-2" />
                 </Link>
                 <div className="mt-4">
                    <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                      Or Vendor Login
                    </Link>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
