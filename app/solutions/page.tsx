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
  ArrowRight,
  XCircle,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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

const businessModels = [
  "Weekend Treks",
  "Multi-day Expeditions",
  "Adventure Sports",
  "Group Tours & Curated Trips"
];

const useCaseSlides = [
  {
    type: 'split',
    bgColor: 'bg-emerald-50',
    textColor: 'text-slate-900',
    title: "Group Booking Made Simple",
    description: "Manage trek batches, capacity limits, and waiting lists effortlessly. Track group sizes in real-time and automatically notify customers when spots open up. Perfect for high-demand weekend treks and expeditions.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    type: 'overlay',
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    title: "AI Responds Instantly on Instagram & WhatsApp",
    description: "Never lose a lead while you sleep. Our AI qualifies enquiries, answers FAQs, shares itineraries, and sends booking links automatically—across all your channels, 24/7.",
    textColor: 'text-white'
  },
  {
    type: 'split',
    bgColor: 'bg-blue-50',
    textColor: 'text-slate-900',
    title: "One Dashboard for Everything",
    description: "Track bookings, payments, customer communications, and performance metrics in one unified panel. No more switching between WhatsApp, Excel, and payment apps.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    type: 'overlay',
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    title: "Real-Time Analytics for Better Decisions",
    description: "Know which treks are filling fastest, which channels bring the most bookings, and where your revenue is coming from. Make data-driven decisions to grow your business.",
    textColor: 'text-white'
  }
];

const testimonials = [
  {
    quote: "Befikra helped us double our trek bookings in peak season. The AI handles 90% of enquiries automatically!",
    author: "Vikram Sharma",
    role: "Himalayan Explorers",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Managing group capacities was a nightmare. Now it's automated and we never overbook. Game changer!",
    author: "Priya Desai",
    role: "Adventure Trails India",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "From Instagram DM to confirmed booking in under 5 minutes. Our conversion rate jumped 60%.",
    author: "Arjun Mehta",
    role: "Peak Adventures",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

export default function SolutionsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCaseSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCaseSlides.length) % useCaseSlides.length);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % useCaseSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Case Carousel */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#15325D' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              How Befikra Powers Your Operations
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              From first enquiry to confirmed booking, we handle it all
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative h-[600px]">
            <div className="overflow-hidden h-full">
              <motion.div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {useCaseSlides.map((slide, index) => (
                  <div
                    key={index}
                    className="min-w-full px-4"
                  >
                    {slide.type === 'split' ? (
                      // Split Layout
                      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                        <div className={`${slide.bgColor} w-full md:w-2/5 p-12 flex flex-col justify-center`}>
                          <h3 className={`text-4xl font-bold ${slide.textColor} mb-6 leading-tight`}>
                            {slide.title}
                          </h3>
                          <p className={`${slide.textColor} text-lg mb-8 leading-relaxed opacity-90`}>
                            {slide.description}
                          </p>
                          <button className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white transition-all w-fit">
                            Learn more
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="w-full md:w-3/5 relative">
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            unoptimized
                            priority
                          />
                        </div>
                      </div>
                    ) : (
                      // Overlay Layout
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          unoptimized
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                          <h3 className="text-4xl font-bold mb-4 leading-tight">
                            {slide.title}
                          </h3>
                          <p className="text-lg text-white/90 max-w-2xl mb-6 leading-relaxed">
                            {slide.description}
                          </p>
                          <button className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-all">
                            Explore feature
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {useCaseSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
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
              Trusted by Leading Adventure Businesses
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              Join 500+ trekking agencies, adventure operators, and travel curators growing with Befikra
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative cursor-pointer h-full"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 relative overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <Quote className="w-10 h-10 text-blue-200 mb-6 fill-blue-100 group-hover:text-blue-300 transition-colors duration-300" />
                    
                    <p className="text-slate-700 text-base mb-8 leading-relaxed font-medium flex-grow group-hover:text-slate-900 transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative ring-2 ring-transparent group-hover:ring-blue-400/50 transition-all duration-300">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          unoptimized
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
