"use client";

import { motion } from "framer-motion";

const integrations = [
  "WhatsApp", "Instagram", "Facebook", "Razorpay", "Stripe", "PayPal", "Gmail", "Outlook", "Google Analytics", "Mailchimp"
];

export function Integrations() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Works With the Tools You Already Use</h2>
         <p className="text-lg text-slate-600">Seamless integrations with your favorite platforms.</p>
      </div>

      <div className="flex w-full mask-linear-fade">
        <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 gap-16 pr-16"
        >
            {[...integrations, ...integrations, ...integrations].map((logo, i) => (
                <div key={i} className="text-2xl font-bold text-slate-400 hover:text-blue-600 transition-colors cursor-default whitespace-nowrap">
                    {logo}
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
