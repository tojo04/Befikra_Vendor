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
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by 500+ Adventure Companies</h2>
                <p className="text-lg text-slate-600">See why top vendors are switching to Befikra.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group"
                    >
                       <Quote className="w-10 h-10 text-blue-100 mb-6 fill-blue-50" />
                       <p className="text-slate-700 text-lg sm:text-lg mb-8 leading-relaxed font-medium">"{testimonial.quote}"</p>
                       
                       <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                                <Image 
                                    src={testimonial.image} 
                                    alt={testimonial.author}
                                    fill
                                    className="object-cover"
                                />
                           </div>
                           <div>
                               <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                               <p className="text-slate-500 text-sm">{testimonial.role}</p>
                           </div>
                           <div className="ml-auto flex gap-0.5">
                                {[1,2,3,4,5].map(star => (
                                    <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                           </div>
                       </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}

