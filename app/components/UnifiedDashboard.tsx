"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const features = [
  {
    title: "Centralized Lead Management",
    description: "No more switching apps. See every enquiry from Instagram, WhatsApp, and your website in one organized feed.",
    bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    useImage: true
  },
  {
    title: "Automated Itineraries",
    description: "Generate beautiful, branded itineraries in seconds—not hours—and send them directly to clients.",
    bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
    useImage: true
  },
  {
    title: "Smart Follow-ups",
    description: "Our AI tracks lead behavior and nudges them at the perfect moment to increase booking conversion.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    useImage: true
  },
  {
    title: "Payment Tracking",
    description: "Get a clear view of your cash flow. Track who has paid, what is pending, and automate reminders.",
    bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
    useImage: true
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team. Assign leads, share notes, and track progress across all bookings in real-time.",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    useImage: true
  },
  {
    title: "Analytics & Insights",
    description: "Make data-driven decisions with powerful analytics. See what's working, identify trends, and optimize your sales process.",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    useImage: true
  },
];

export function UnifiedDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleCardClick = (idx: number) => {
    setCurrentIndex(idx);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Calculate the transform offset - start from left edge, not center
  const cardWidth = 400; // Width of each card
  const gap = 24; // gap-6 = 24px
  // Start cards from the left with some padding, then slide left as user progresses
  const offset = -(currentIndex * (cardWidth + gap));

  return (
    <section className="py-32 overflow-hidden" style={{ backgroundColor: '#0A1E3B' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6"
            style={{ backgroundColor: 'rgba(60, 121, 210, 0.2)', borderColor: 'rgba(60, 121, 210, 0.4)', color: '#DAE2FA' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#3C79D2' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#3C79D2' }}></span>
            </span>
            Built for Vendors
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            <span className="text-white">More Bookings,</span>
            <br />
            <span style={{ color: '#3C79D2' }}>
              Less Chaos.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-relaxed"
            style={{ color: '#DAE2FA' }}
          >
            Managing leads across WhatsApp, Instagram, and email is overwhelming. 
            <br />
            <span className="font-semibold text-white">Befikra unifies everything into one powerful dashboard.</span>
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{
                x: offset
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 1
              }}
              style={{
                width: 'max-content'
              }}
            >
              {features.map((feature, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => handleCardClick(idx)}
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1 : 0.92
                    }}
                    whileHover={{ 
                      scale: isActive ? 1.02 : 0.94,
                      opacity: isActive ? 1 : 0.7
                    }}
                    transition={{ 
                      duration: 0.3
                    }}
                    className="relative cursor-pointer flex-shrink-0"
                    style={{
                      width: `${cardWidth}px`,
                      height: '600px',
                    }}
                  >
                    <div
                      className="relative h-full rounded-3xl overflow-hidden"
                      style={{
                        boxShadow: isActive 
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.6)' 
                          : '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {/* Background */}
                      {feature.useImage && feature.bgImage ? (
                        <div className="absolute inset-0">
                          <Image
                            src={feature.bgImage}
                            alt={feature.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        </div>
                      ) : (
                        <div 
                          className="absolute inset-0"
                          style={{ backgroundColor: feature.bgColor }}
                        ></div>
                      )}

                      {/* Content */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <motion.div
                          initial={false}
                          animate={{ 
                            opacity: 1, 
                            y: 0 
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 
                            className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-white"
                          >
                            {feature.title}
                          </h3>
                          <p 
                            className="text-base leading-relaxed text-white/90"
                          >
                            {feature.description}
                          </p>
                          
                          {/* Learn more button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer bg-white text-gray-900"
                          >
                            Learn more
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </motion.button>
                        </motion.div>
                      </div>

                      {/* Active indicator ring */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 rounded-3xl pointer-events-none"
                          style={{ 
                            boxShadow: 'inset 0 0 0 3px rgba(60, 121, 210, 0.6)'
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#3C79D2' }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: '#15325D', border: '2px solid #3C79D2' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="transition-all duration-300 rounded-full cursor-pointer hover:opacity-80"
                  style={{
                    width: idx === currentIndex ? '32px' : '10px',
                    height: '10px',
                    backgroundColor: idx === currentIndex ? '#3C79D2' : 'rgba(218, 226, 250, 0.4)'
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#3C79D2' }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: '#15325D', border: '2px solid #3C79D2' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
