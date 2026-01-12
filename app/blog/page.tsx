"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer, CTA } from "../components/Footer";
import { ArrowRight, Clock, Calendar, Search, BookOpen, Zap, Settings, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Posts", icon: BookOpen },
  { id: "vendor-growth", name: "Vendor Growth", icon: Zap },
  { id: "ai-automation", name: "AI & Automation", icon: Sparkles },
  { id: "operations", name: "Operations", icon: Settings },
  { id: "product-updates", name: "Product Updates", icon: ArrowRight },
];

const featuredPosts = [
  {
    slug: "ai-automation-trekking-agencies",
    title: "How Trekking Agencies Can Fill Batches Faster Using AI Automation",
    excerpt: "Growth strategies for managing high enquiry volumes during peak season. Learn how top agencies are using automation to convert more leads.",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    date: "Jan 8, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    slug: "whatsapp-automation-guide",
    title: "WhatsApp Automation for Adventure Businesses: A Practical Guide",
    excerpt: "Turn everyday chats into structured bookings. A complete playbook for automating your WhatsApp communications.",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    date: "Jan 5, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    slug: "travel-websites-conversion",
    title: "Why Most Travel Websites Don't Convert (And How to Fix It)",
    excerpt: "Booking engine insights for experience vendors. Discover the common mistakes killing your conversions and the simple fixes.",
    category: "vendor-growth",
    categoryLabel: "Vendor Growth",
    date: "Jan 2, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
];

const allPosts = [
  ...featuredPosts,
  {
    slug: "instagram-sales-system",
    title: "From DMs to Bookings: Building an Instagram Sales System",
    excerpt: "How vendors can stop manual replies and scale conversions. A step-by-step guide to automating your Instagram presence.",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=80",
  },
  {
    slug: "experience-business-systems",
    title: "Running an Experience Business Like a System, Not Chaos",
    excerpt: "Mindset and tools for sustainable growth. Transform your operations from reactive firefighting to proactive management.",
    category: "operations",
    categoryLabel: "Operations",
    date: "Dec 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
  },
  {
    slug: "scaling-adventure-business",
    title: "The 5 Stages of Scaling an Adventure Business",
    excerpt: "From solo operator to full team — what changes at each stage and how to prepare for growth without burnout.",
    category: "vendor-growth",
    categoryLabel: "Vendor Growth",
    date: "Dec 18, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80",
  },
  {
    slug: "payment-tracking-vendors",
    title: "Payment Tracking Made Simple for Experience Vendors",
    excerpt: "Stop losing money to manual tracking errors. Learn how to automate payment reconciliation and reduce leakage.",
    category: "operations",
    categoryLabel: "Operations",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
  },
  {
    slug: "unichat-launch-announcement",
    title: "Introducing UniChat: Your Unified Inbox for All Channels",
    excerpt: "We're excited to announce UniChat — bringing WhatsApp, Instagram, and Web chat into one powerful inbox with AI assistance.",
    category: "product-updates",
    categoryLabel: "Product Updates",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
  },
  {
    slug: "team-management-travel-business",
    title: "How to Manage a Growing Team in Your Travel Business",
    excerpt: "Delegation frameworks, role clarity, and tools that help you scale without micromanaging every booking.",
    category: "operations",
    categoryLabel: "Operations",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ backgroundColor: '#0A1E3B' }}>
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-400/10 to-transparent rounded-b-[100%] blur-3xl opacity-50" />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{ backgroundColor: '#3C79D2', mixBlendMode: 'overlay' }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6"
              style={{ backgroundColor: 'rgba(60, 121, 210, 0.2)', borderColor: 'rgba(60, 121, 210, 0.4)', color: '#DAE2FA' }}
            >
              <BookOpen className="w-4 h-4" />
              Befikra Blog
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn. Apply. <span style={{ color: '#3C79D2' }}>Grow.</span>
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: '#DAE2FA' }}>
              Insights, strategies, and practical guides to help you save time, increase bookings, and build long-term business systems.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b sticky top-0 backdrop-blur-xl z-40" style={{ backgroundColor: 'rgba(10, 30, 59, 0.95)', borderColor: 'rgba(60, 121, 210, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "shadow-lg"
                      : "hover:opacity-80"
                  }`}
                  style={activeCategory === category.id 
                    ? { backgroundColor: '#3C79D2', color: 'white' }
                    : { backgroundColor: 'rgba(60, 121, 210, 0.2)', color: '#DAE2FA' }
                  }
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-16" style={{ backgroundColor: '#0A1E3B' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Articles</h2>
              <div className="h-px flex-1 ml-6" style={{ backgroundColor: 'rgba(60, 121, 210, 0.3)' }}></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Main Featured Post */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:row-span-2"
              >
                <Link href={`/blog/${featuredPosts[0].slug}`} className="group block h-full">
                  <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={featuredPosts[0].image}
                      alt={featuredPosts[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-semibold mb-4" style={{ backgroundColor: '#3C79D2' }}>
                        {featuredPosts[0].categoryLabel}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors" style={{ '--tw-text-opacity': 1 } as React.CSSProperties}>
                        {featuredPosts[0].title}
                      </h3>
                      <p className="text-white/80 mb-4 line-clamp-2">{featuredPosts[0].excerpt}</p>
                      <div className="flex items-center gap-4 text-sm" style={{ color: '#DAE2FA' }}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPosts[0].date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPosts[0].readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Secondary Featured Posts */}
              {featuredPosts.slice(1, 3).map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-lg mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold" style={{ backgroundColor: '#3C79D2' }}>
                        {post.categoryLabel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm mb-3 line-clamp-2" style={{ color: '#DAE2FA' }}>{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm" style={{ color: 'rgba(218, 226, 250, 0.7)' }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-20" style={{ backgroundColor: '#0A1E3B' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {activeCategory === "all" ? "All Articles" : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p style={{ color: '#DAE2FA' }}>{filteredPosts.length} articles</p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(60, 121, 210, 0.2)' }}>
                <Search className="w-8 h-8" style={{ color: '#3C79D2' }} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p style={{ color: '#DAE2FA' }}>Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-52 rounded-2xl overflow-hidden mb-5 shadow-md">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="space-y-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(60, 121, 210, 0.2)', color: '#3C79D2' }}>
                        {post.categoryLabel}
                      </span>
                      <h3 className="text-lg font-bold text-white transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm line-clamp-2" style={{ color: '#DAE2FA' }}>{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm pt-2" style={{ color: 'rgba(218, 226, 250, 0.7)' }}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length >= 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#3C79D2', color: 'white' }}
              >
                Load More Articles
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#15325D' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-30" style={{ backgroundColor: '#3C79D2' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want These Insights Applied to Your Business?
            </h2>
            <p className="text-xl mb-8" style={{ color: '#DAE2FA' }}>
              Reading helps. Seeing it live works better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#3C79D2' }}
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold hover:bg-white/20 transition-all border"
                style={{ borderColor: 'rgba(60, 121, 210, 0.5)', backgroundColor: 'rgba(60, 121, 210, 0.1)' }}
              >
                Vendor Login
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
