"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  { name: "WhatsApp", logo: "/logos/whatsapp.svg", width: 140, height: 40 },
  { name: "Instagram", logo: "/logos/Instagram_Glyph_Gradient.svg", width: 40, height: 40 },
  { name: "Facebook", logo: "/logos/Facebook_Logo_Primary.png", width: 120, height: 40 },
  { name: "Razorpay", logo: "/logos/Razorpay_logo.svg", width: 120, height: 40 },
  { name: "Stripe", logo: "/logos/Stripe wordmark - Blurple.svg", width: 100, height: 40 },
  { name: "PayPal", logo: "/logos/paypal-svgrepo-com.svg", width: 100, height: 40 },
  { name: "Gmail", logo: "/logos/gmail-svgrepo-com.svg", width: 100, height: 40 },
  { name: "Outlook", logo: "/logos/ms-outlook-svgrepo-com.svg", width: 100, height: 40 },
  { name: "Mailchimp", logo: "/logos/mailchimp-svgrepo-com.svg", width: 120, height: 40 },
];

export function Integrations() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center"
      >
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
         >
           Works With the Tools You Already Use
         </motion.h2>
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-lg text-slate-600"
         >
           Seamless integrations with your favorite platforms.
         </motion.p>
      </motion.div>

      <div className="flex w-full mask-linear-fade relative py-8">
        <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 gap-16 pr-16 items-center"
        >
            {[...integrations, ...integrations, ...integrations, ...integrations].map((integration, i) => (
                <motion.div
                    key={i}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -8
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    style={{ minWidth: "120px" }}
                >
                    <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        width={integration.width}
                        height={integration.height}
                        className="object-contain h-10"
                    />
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
