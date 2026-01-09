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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Built for Vendors
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              More Bookings, <br />
              <span className="text-blue-600">Less Chaos.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Managing leads across WhatsApp, Instagram, and email is overwhelming. Befikra unifies everything into one powerful dashboard.
            </p>

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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-2 blur-lg opacity-60"></div>
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-[4/3] flex items-center justify-center">
              {/* Placeholder for dashboard UI image */}
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <LayoutDashboardIcon className="w-10 h-10 text-slate-600" />
                </div>
                <p className="text-slate-400 font-medium">Dashboard Preview</p>
                <p className="text-slate-600 text-sm mt-2">Screenshots will be placed here</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Payment Received</p>
                  <p className="font-bold text-slate-900">₹45,000.00</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block"
            >
               <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">New Booking Enquiry</p>
                  <p className="font-bold text-slate-900">Manali Trip (4 Pax)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LayoutDashboardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
    )
}
