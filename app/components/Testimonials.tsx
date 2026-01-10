"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Befikra cut my manual work by 80%. I finally have my weekends back!",
    author: "Rohit",
    role: "Himalayan Treks",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The automated itineraries are a game changer. Clients love them!",
    author: "Anjali",
    role: "Wanderlust Travels",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Lead conversion went up by 40% in just one month.",
    author: "Rahul",
    role: "GoGoa Adventures",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
                <motion.h2 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                >
                  Trusted by 500+ Adventure Companies
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-slate-600"
                >
                  See why top vendors are switching to Befikra.
                </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="group relative cursor-pointer h-full"
                    >
                        <motion.div
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 relative overflow-hidden h-full flex flex-col"
                        >
                            {/* Hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                            
                            {/* Animated border on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-border"></div>
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Quote Icon */}
                                <Quote className="w-10 h-10 text-blue-200 mb-6 fill-blue-100 group-hover:text-blue-300 transition-colors duration-300" />
                                
                                {/* Quote Text */}
                                <p className="text-slate-700 text-base mb-8 leading-relaxed font-medium flex-grow group-hover:text-slate-900 transition-colors duration-300">
                                    "{testimonial.quote}"
                                </p>
                                
                                {/* Author Info */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative ring-2 ring-transparent group-hover:ring-blue-400/50 transition-all duration-300">
                                        <Image 
                                            src={testimonial.image} 
                                            alt={testimonial.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {testimonial.author}
                                        </h4>
                                        <p className="text-slate-500 text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[1,2,3,4,5].map(star => (
                                            <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}

