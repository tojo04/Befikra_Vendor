"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer, CTA } from "../components/Footer";
import { MessageCircle, Globe, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Instagram Automation",
    description: "Turn comments and DMs into bookings instantly. Auto-reply to leads 24/7 without lifting a finger.",
    icon: MessageCircle,
    color: "bg-pink-50 text-pink-600",
    href: "/products/instagram",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "WhatsApp Automation",
    description: "Handle bulk enquiries, send automated follow-ups, and broadcast offers to your past customers.",
    icon: MessageSquare,
    color: "bg-green-50 text-green-600",
    href: "/products/whatsapp",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Website Booking Engine",
    description: "Accept payments and confirm trips directly on your website with a mobile-first booking widget.",
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
    href: "/products/website",
    gradient: "from-blue-500 to-cyan-500"
  }
];

export default function ProductsHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50 to-white rounded-b-[100%] blur-3xl opacity-60" />
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight"
            >
              The Befikra <span className="text-blue-600">Product Suite</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-xl text-slate-600 max-w-2xl mx-auto mb-16"
            >
              Everything you need to automate your adventure business, from lead generation to final payment. Choose a tool to get started.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {products.map((product, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col text-left group cursor-pointer"
                  >
                     <Link href={product.href} className="flex flex-col h-full">
                        <div className={`w-16 h-16 rounded-2xl ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                           <product.icon className="w-8 h-8" />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{product.title}</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{product.description}</p>
                        
                        <div className="flex items-center text-slate-900 font-bold group-hover:text-blue-600 transition-colors mt-auto">
                           Learn More 
                           <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                        
                        <div className={`h-1 w-full bg-gradient-to-r ${product.gradient} mt-8 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                     </Link>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
