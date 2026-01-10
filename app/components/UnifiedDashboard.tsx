"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Bell, CreditCard } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Centralized Lead Management",
    description: "No more switching apps. See every enquiry from Instagram, WhatsApp, and your website in one organized feed.",
    icon: MessageSquare,
  },
  {
    title: "Automated Itineraries",
    description: "Generate beautiful, branded itineraries in seconds—not hours—and send them directly to clients.",
    icon: FileText,
  },
  {
    title: "Smart Follow-ups",
    description: "Our AI tracks lead behavior and nudges them at the perfect moment to increase booking conversion.",
    icon: Bell,
  },
  {
    title: "Payment Tracking",
    description: "Get a clear view of your cash flow. Track who has paid, what is pending, and automate reminders.",
    icon: CreditCard,
  },
];

export function UnifiedDashboard() {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: '#DAE2FA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(60, 121, 210, 0.1)', borderColor: '#3C79D2', color: '#15325D' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Built for Vendors
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight"
            >
              More Bookings, <br />
              <span className="text-blue-600">Less Chaos.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
              Managing leads across WhatsApp, Instagram, and email is overwhelming. Befikra unifies everything into one powerful dashboard.
            </motion.p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-500 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Animated gradient background */}
            <motion.div 
              animate={{ 
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-3xl blur-2xl opacity-70"
            />
            
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[4/3]">
              {/* Mock Dashboard UI with better visuals */}
              <div className="absolute inset-0">
                {/* Header bar */}
                <div className="h-14 bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 flex items-center px-6 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm">B</div>
                    <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-700/50"></div>
                    <div className="w-8 h-8 rounded-lg bg-slate-700/50"></div>
                  </div>
                </div>
                
                {/* Main content grid */}
                <div className="p-6 grid grid-cols-3 gap-4 h-full">
                  {/* Stats cards */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="col-span-1 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30"
                  >
                    <div className="h-2 w-16 bg-blue-400/50 rounded-full mb-3"></div>
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-6 w-20 bg-blue-400 rounded-lg mb-2"
                    ></motion.div>
                    <div className="h-1.5 w-24 bg-blue-400/30 rounded-full"></div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="col-span-1 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30"
                  >
                    <div className="h-2 w-16 bg-purple-400/50 rounded-full mb-3"></div>
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="h-6 w-20 bg-purple-400 rounded-lg mb-2"
                    ></motion.div>
                    <div className="h-1.5 w-24 bg-purple-400/30 rounded-full"></div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="col-span-1 bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30"
                  >
                    <div className="h-2 w-16 bg-green-400/50 rounded-full mb-3"></div>
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="h-6 w-20 bg-green-400 rounded-lg mb-2"
                    ></motion.div>
                    <div className="h-1.5 w-24 bg-green-400/30 rounded-full"></div>
                  </motion.div>
                  
                  {/* Chart area */}
                  <div className="col-span-2 row-span-2 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg"
                      />
                    ))}
                  </div>
                  
                  {/* Activity feed */}
                  <div className="col-span-1 row-span-2 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 space-y-3">
                    {[1, 2, 3, 4].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="flex gap-2"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-700/50"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-1.5 w-full bg-slate-700/50 rounded-full"></div>
                          <div className="h-1.5 w-3/4 bg-slate-700/30 rounded-full"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating notification cards with enhanced animations */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8 }}
              animate={{ y: [0, -10, 0] }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              style={{ 
                animationDuration: "4s",
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out"
              }}
              className="absolute -right-8 top-12 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 max-w-xs hidden md:block cursor-pointer hover:shadow-green-200/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"
                >
                  <CreditCard className="w-4 h-4" />
                </motion.div>
                <div>
                  <p className="text-xs text-gray-500">Payment Received</p>
                  <p className="font-bold text-slate-900">₹45,000.00</p>
                </div>
              </div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
                className="h-1 bg-green-500 rounded-full"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1 }}
              animate={{ y: [0, 10, 0] }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              style={{ 
                animationDuration: "5s",
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out",
                animationDelay: "1s"
              }}
              className="absolute -left-8 bottom-12 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 max-w-xs hidden md:block cursor-pointer hover:shadow-blue-200/50 transition-all"
            >
               <div className="flex items-center gap-3 mb-2">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
                >
                  <MessageSquare className="w-4 h-4" />
                </motion.div>
                <div>
                  <p className="text-xs text-gray-500">New Booking Enquiry</p>
                  <p className="font-bold text-slate-900">Manali Trip (4 Pax)</p>
                </div>
              </div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                transition={{ delay: 1.2, duration: 1 }}
                className="h-1 bg-blue-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

