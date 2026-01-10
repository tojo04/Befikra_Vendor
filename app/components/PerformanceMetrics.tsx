'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PerformanceMetrics() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      type: 'split',
      bgColor: 'bg-emerald-50',
      textColor: 'text-slate-900',
      title: "Seamlessly book and manage trips",
      description: "Forget multiple tabs. You can book every part of a work trip and see all the details in one helpful itinerary. With our extensive global inventory, Befikra gives you access to 1000s of options and proprietary rates across flights, stays, trains and cars.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop"
    },
    {
      type: 'overlay',
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop",
      title: "Make trip changes in seconds",
      description: "Plans change and so can your trips. Rebook or cancel flights and hotels in just a few taps. No need to contact customer support or even open your laptop.",
      textColor: 'text-white'
    },
    {
      type: 'split',
      bgColor: 'bg-blue-100',
      textColor: 'text-slate-900',
      title: "Submit and approve expenses automatically",
      description: "Free yourself from piles of receipts. Powered by AI, Befikra automatically captures and categorizes expenses, spots discrepancies, and flags policy breaches for you.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"
    },
    {
      type: 'overlay',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      title: "Real-time analytics and insights",
      description: "Track everything that matters. Get instant insights into your vendor performance, inventory levels, and customer satisfaction scores all in one powerful dashboard.",
      textColor: 'text-white'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Wave goodbye to the work behind the work
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[600px]">
          <div className="overflow-hidden h-full">
            <motion.div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="min-w-full px-4"
                >
                  {feature.type === 'split' ? (
                    // Split Layout: Colored left + Image right
                    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                      <div className={`${feature.bgColor} w-full md:w-2/5 p-12 flex flex-col justify-center`}>
                        <h3 className={`text-4xl font-bold ${feature.textColor} mb-6 leading-tight`}>
                          {feature.title}
                        </h3>
                        <p className={`${feature.textColor} text-lg mb-8 leading-relaxed opacity-90`}>
                          {feature.description}
                        </p>
                        <button className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white transition-all w-fit">
                          Learn more
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="relative w-full md:w-3/5">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    // Overlay Layout: Full image with text overlay
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                      <div className="absolute inset-0 p-12 flex flex-col justify-end">
                        <h3 className={`text-5xl font-bold ${feature.textColor} mb-6 leading-tight max-w-2xl`}>
                          {feature.title}
                        </h3>
                        <p className={`${feature.textColor} text-lg mb-8 leading-relaxed max-w-2xl opacity-90`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-slate-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-slate-900" />
          </button>
        </div>

        {/* Dots Indicator and Show All Features Button */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-slate-900 w-8'
                    : 'bg-slate-300 hover:bg-slate-400 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-slate-900 hover:text-white transition-all">
            Show all features
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
