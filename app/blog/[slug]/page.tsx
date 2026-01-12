"use client";

import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer, CTA } from "../../components/Footer";
import { ArrowRight, ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Copy, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
  author: { name: string; role: string; avatar: string };
}> = {
  "ai-automation-trekking-agencies": {
    title: "How Trekking Agencies Can Fill Batches Faster Using AI Automation",
    excerpt: "Growth strategies for managing high enquiry volumes during peak season. Learn how top agencies are using automation to convert more leads.",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    date: "Jan 8, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&auto=format&fit=crop&q=80",
    author: {
      name: "Befikra Team",
      role: "Product Insights",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    content: [
      "Peak season for trekking agencies is both a blessing and a curse. Enquiries flood in from Instagram, WhatsApp, and your website simultaneously. Without the right systems in place, many of these leads slip through the cracks.",
      "## The Problem: Too Many Leads, Not Enough Time",
      "Most trekking agencies operate with small teams. When you're managing 5-10 active treks, handling logistics, and coordinating with guides, responding to every DM becomes impossible. Studies show that leads who don't receive a response within 5 minutes are 80% less likely to convert.",
      "## The Solution: AI-Powered Instant Response",
      "This is where automation becomes your competitive advantage. By implementing AI auto-responders across your channels, you can:",
      "**1. Instant Acknowledgment**: Every enquiry gets an immediate response, keeping leads warm while your team prepares a detailed reply.",
      "**2. Smart Qualification**: AI can ask the right questions upfront — group size, preferred dates, budget range — so your team gets qualified leads instead of cold enquiries.",
      "**3. 24/7 Availability**: Leads come in at all hours. With automation, you're never 'closed'.",
      "## Real Results from Real Agencies",
      "One of our partner agencies in Uttarakhand implemented Befikra's WhatsApp automation during their peak Kedarkantha season. The results were striking:",
      "- Response time dropped from 2 hours to under 30 seconds\n- Lead-to-booking conversion increased by 34%\n- Team workload reduced by 60% for initial enquiries",
      "## Getting Started",
      "The key is to start simple. Don't try to automate everything at once. Begin with:",
      "1. **Auto-acknowledgment messages**: Let leads know you've received their enquiry\n2. **FAQ responses**: Handle common questions about difficulty levels, inclusions, and dates automatically\n3. **Lead capture forms**: Collect essential information before your team follows up",
      "## Conclusion",
      "Automation isn't about replacing the human touch — it's about amplifying it. By letting AI handle the routine, your team can focus on what they do best: creating incredible experiences and closing bookings with a personal touch."
    ]
  },
  "whatsapp-automation-guide": {
    title: "WhatsApp Automation for Adventure Businesses: A Practical Guide",
    excerpt: "Turn everyday chats into structured bookings. A complete playbook for automating your WhatsApp communications.",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    date: "Jan 5, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=80",
    author: {
      name: "Befikra Team",
      role: "Product Insights",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    content: [
      "WhatsApp is the primary communication channel for adventure businesses in India. But managing hundreds of conversations manually leads to missed messages, inconsistent responses, and lost bookings.",
      "## Why WhatsApp Automation Matters",
      "Consider this: the average adventure business receives 50-100 WhatsApp enquiries during peak season. Responding to each one personally, providing trip details, answering FAQs, and following up takes 3-4 hours daily.",
      "## The Building Blocks of WhatsApp Automation",
      "**1. Welcome Messages**: Set up instant greetings that confirm receipt and set expectations for response time.",
      "**2. Quick Replies**: Create templates for frequently asked questions about pricing, itineraries, and booking process.",
      "**3. Broadcast Lists**: Segment your contacts and send targeted updates about new trips, last-minute availability, or special offers.",
      "**4. Auto Follow-ups**: Schedule reminder messages for leads who showed interest but didn't book.",
      "## Implementation Strategy",
      "Start with the highest-impact automations first. For most businesses, that means:",
      "- Welcome message with your top 3 upcoming trips\n- Automated responses for 'price', 'itinerary', and 'availability' keywords\n- Daily follow-up sequence for new enquiries",
      "## Measuring Success",
      "Track these metrics to measure your automation ROI:\n- Average response time (target: under 1 minute)\n- Lead qualification rate\n- Booking conversion rate\n- Team time saved per week"
    ]
  },
  "travel-websites-conversion": {
    title: "Why Most Travel Websites Don't Convert (And How to Fix It)",
    excerpt: "Booking engine insights for experience vendors. Discover the common mistakes killing your conversions and the simple fixes.",
    category: "vendor-growth",
    categoryLabel: "Vendor Growth",
    date: "Jan 2, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    author: {
      name: "Befikra Team",
      role: "Product Insights",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    content: [
      "You've invested in a beautiful website, but bookings aren't coming through. Sound familiar? Here's why most travel websites fail to convert visitors into customers.",
      "## The 5 Conversion Killers",
      "**1. Too Many Steps to Book**: Every additional click loses 10-20% of potential customers. If your booking flow has more than 3 steps, you're losing money.",
      "**2. No Clear Call-to-Action**: Visitors shouldn't have to search for the booking button. It should be visible above the fold on every page.",
      "**3. Missing Trust Signals**: Reviews, testimonials, and security badges build confidence. Without them, visitors hesitate to enter payment details.",
      "**4. Slow Load Times**: A 1-second delay in page load reduces conversions by 7%. Mobile optimization is crucial.",
      "**5. No Urgency**: Limited availability, countdown timers, and 'only X spots left' messaging drive action.",
      "## The Quick Fixes",
      "Implement these changes this week:\n- Add a sticky 'Book Now' button on mobile\n- Display customer reviews prominently\n- Show real-time availability on trip pages\n- Reduce form fields to the absolute minimum",
      "## The Bigger Picture",
      "Your website should work as a 24/7 sales team, not just a digital brochure. Every element should guide visitors toward one goal: making a booking."
    ]
  },
  "instagram-sales-system": {
    title: "From DMs to Bookings: Building an Instagram Sales System",
    excerpt: "How vendors can stop manual replies and scale conversions. A step-by-step guide to automating your Instagram presence.",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=80",
    author: {
      name: "Befikra Team",
      role: "Product Insights",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    content: [
      "Instagram has become the primary discovery platform for adventure travel. But turning followers into customers requires more than just great content — it requires a system.",
      "## The Instagram Funnel",
      "Understanding your customer journey is step one:\n1. Discovery (Reels, Explore page)\n2. Interest (Profile visit, story views)\n3. Enquiry (DM, comment)\n4. Qualification (conversation)\n5. Booking (conversion)",
      "## Automating Each Stage",
      "**Comment-to-DM Automation**: When someone comments 'interested' or 'price', automatically send them a DM with details. This works 24/7 and captures leads instantly.",
      "**Story Reply Automation**: Use interactive stickers and automate responses to story replies with relevant trip information.",
      "**DM Flow Sequences**: Create conversation flows that qualify leads, answer FAQs, and guide them toward booking — all automatically.",
      "## The Human Handoff",
      "Automation handles the routine. Your team handles the complex. Set up triggers for when a lead is ready for human conversation:\n- Budget confirmed\n- Dates selected\n- Custom requirements mentioned"
    ]
  },
  "experience-business-systems": {
    title: "Running an Experience Business Like a System, Not Chaos",
    excerpt: "Mindset and tools for sustainable growth. Transform your operations from reactive firefighting to proactive management.",
    category: "operations",
    categoryLabel: "Operations",
    date: "Dec 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
    author: {
      name: "Befikra Team",
      role: "Product Insights",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    content: [
      "Most experience businesses start the same way: a passionate founder doing everything themselves. But what works at 10 bookings a month breaks down at 100.",
      "## The Chaos Symptoms",
      "If you recognize these signs, you're in chaos mode:\n- Constantly firefighting issues\n- No time for strategic thinking\n- Team confusion about responsibilities\n- Inconsistent customer experience\n- Working IN the business, not ON it",
      "## Building Systems",
      "**1. Document Everything**: If a process lives only in your head, it dies when you're unavailable. Create SOPs for every repeatable task.",
      "**2. Centralize Information**: No more scattered WhatsApp groups, Excel sheets, and email threads. One source of truth for bookings, payments, and communications.",
      "**3. Automate the Routine**: Identify tasks that are high-volume and low-complexity. These are automation candidates.",
      "**4. Define Roles Clearly**: Every team member should know exactly what they own. Overlap creates confusion; gaps create failures.",
      "## The Transformation",
      "When systems work, you shift from:\n- Reactive → Proactive\n- Dependent → Scalable\n- Stressed → Strategic"
    ]
  },
  "scaling-adventure-business": {
    title: "The 5 Stages of Scaling an Adventure Business",
    excerpt: "From solo operator to full team — what changes at each stage and how to prepare for growth without burnout.",
    category: "vendor-growth",
    categoryLabel: "Vendor Growth",
    date: "Dec 18, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80",
    author: {
      name: "Befikra Team",
      role: "Product Insights",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    content: [
      "Every adventure business goes through predictable stages. Understanding where you are — and what's coming next — helps you prepare instead of panic.",
      "## Stage 1: The Solo Operator (0-20 bookings/month)",
      "You do everything. Marketing, sales, operations, customer service. This stage is about survival and learning what works.",
      "## Stage 2: The Overwhelmed Founder (20-50 bookings/month)",
      "Success creates problems. You're drowning in enquiries, struggling to maintain quality, and working unsustainable hours. This is where most founders burn out.",
      "## Stage 3: First Hires (50-100 bookings/month)",
      "You bring on help — operations support, maybe a sales person. The challenge: delegation. Many founders struggle to let go.",
      "## Stage 4: The Team Leader (100-200 bookings/month)",
      "You're no longer doing the work; you're managing people who do. This requires completely different skills than Stage 1.",
      "## Stage 5: The Business Owner (200+ bookings/month)",
      "The business can run without you. You focus on strategy, partnerships, and growth. This is the goal — but few reach it.",
      "## Key Transitions",
      "The hardest shifts:\n- Stage 2 → 3: Learning to delegate\n- Stage 3 → 4: Becoming a manager\n- Stage 4 → 5: Building systems that outlast individuals"
    ]
  },
  "payment-tracking-vendors": {
    title: "Payment Tracking Made Simple for Experience Vendors",
    excerpt: "Stop losing money to manual tracking errors. Learn how to automate payment reconciliation and reduce leakage.",
    category: "operations",
    categoryLabel: "Operations",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    author: {
      name: "Befikra Team",
      role: "Product Insights",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg"
    },
    content: [
      "If you're tracking payments in Excel or WhatsApp screenshots, you're almost certainly losing money. Here's how to fix it.",
      "## The Leakage Points",
      "**Partial Payments**: Customer pays 50% advance but final payment never collected.\n**Refund Confusion**: Who got refunded? When? For how much?\n**Commission Errors**: Platform fees, agent commissions, and gateway charges add up.\n**Delayed Reconciliation**: Matching bank statements to bookings takes hours.",
      "## The Solution: Automated Tracking",
      "A proper payment system should:\n- Track every transaction automatically\n- Flag overdue payments\n- Calculate commissions accurately\n- Generate reports instantly",
      "## Implementation Steps",
      "1. Audit your current payment flow\n2. Identify where manual entry happens\n3. Connect your payment gateway to your booking system\n4. Set up automated reminders for pending payments\n5. Review weekly reports instead of daily reconciliation"
    ]
  },
  "unichat-launch-announcement": {
    title: "Introducing UniChat: Your Unified Inbox for All Channels",
    excerpt: "We're excited to announce UniChat — bringing WhatsApp, Instagram, and Web chat into one powerful inbox with AI assistance.",
    category: "product-updates",
    categoryLabel: "Product Updates",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    author: {
      name: "Befikra Team",
      role: "Product Updates",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    content: [
      "Today, we're thrilled to launch UniChat — the unified inbox that brings all your customer conversations into one powerful interface.",
      "## The Problem We're Solving",
      "Vendors juggle multiple apps constantly. WhatsApp for enquiries, Instagram for engagement, website chat for bookings. Switching between tabs means slower responses and missed messages.",
      "## What UniChat Offers",
      "**One Inbox, All Channels**: See every conversation in one place. No more tab-switching chaos.\n**AI Auto-Response**: Let AI handle routine questions while you focus on closing deals.\n**Smart Routing**: Automatically assign conversations to the right team member.\n**Context Everywhere**: See customer history, previous bookings, and notes in every chat.",
      "## Early Access",
      "UniChat is now available for all Befikra users. Log in to your dashboard to activate it.\n\nWe're just getting started. Expect more features — including voice message transcription and sentiment analysis — in the coming months."
    ]
  },
  "team-management-travel-business": {
    title: "How to Manage a Growing Team in Your Travel Business",
    excerpt: "Delegation frameworks, role clarity, and tools that help you scale without micromanaging every booking.",
    category: "operations",
    categoryLabel: "Operations",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    author: {
      name: "Befikra Team",
      role: "Product Insights",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    content: [
      "Growing from a solo operator to a team is exciting — and terrifying. Here's how to make the transition without losing your mind or your customer experience.",
      "## The Delegation Framework",
      "Not all tasks should be delegated equally. Use this matrix:\n- **High Impact, Low Complexity**: Delegate first (customer follow-ups, booking confirmations)\n- **High Impact, High Complexity**: Delegate with training (sales conversations, custom trip planning)\n- **Low Impact, Low Complexity**: Automate, don't delegate (confirmation emails, payment reminders)\n- **Low Impact, High Complexity**: Eliminate if possible",
      "## Role Definition",
      "Every team member needs clarity on:\n- What they own completely\n- What they support on\n- What's explicitly not their job\n\nDocument this. Review it quarterly. Update as you grow.",
      "## Communication Rhythms",
      "Establish predictable communication:\n- Daily standups (15 min max)\n- Weekly reviews (what worked, what didn't)\n- Monthly planning (goals and priorities)",
      "## Tools That Help",
      "The right tools reduce management overhead:\n- Shared dashboards for visibility\n- Automated task assignment\n- Performance tracking without micromanagement"
    ]
  }
};

const relatedPosts = [
  {
    slug: "whatsapp-automation-guide",
    title: "WhatsApp Automation for Adventure Businesses",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&auto=format&fit=crop&q=80",
    readTime: "12 min read",
  },
  {
    slug: "instagram-sales-system",
    title: "From DMs to Bookings: Building an Instagram Sales System",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&auto=format&fit=crop&q=80",
    readTime: "10 min read",
  },
  {
    slug: "experience-business-systems",
    title: "Running an Experience Business Like a System",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&auto=format&fit=crop&q=80",
    readTime: "7 min read",
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <main className="min-h-screen" style={{ backgroundColor: '#0A1E3B' }}>
        <Navbar />
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="mb-8" style={{ color: '#DAE2FA' }}>The article you're looking for doesn't exist or has been moved.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-semibold transition-all hover:opacity-90" style={{ backgroundColor: '#3C79D2' }}>
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0A1E3B' }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 mb-8 transition-colors hover:opacity-80" style={{ color: '#DAE2FA' }}>
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4" style={{ backgroundColor: '#3C79D2' }}>
              {post.categoryLabel}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl mb-8" style={{ color: '#DAE2FA' }}>{post.excerpt}</p>

            <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b" style={{ borderColor: 'rgba(60, 121, 210, 0.3)' }}>
              <div className="flex items-center gap-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                  unoptimized
                />
                <div>
                  <p className="font-semibold text-white">{post.author.name}</p>
                  <p className="text-sm" style={{ color: 'rgba(218, 226, 250, 0.7)' }}>{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm" style={{ color: 'rgba(218, 226, 250, 0.7)' }}>
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
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("**") && block.endsWith("**")) {
                return (
                  <p key={i} className="font-semibold text-white">
                    {block.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (block.includes("\n-")) {
                const lines = block.split("\n");
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2" style={{ color: '#DAE2FA' }}>
                    {lines.map((line, j) => (
                      <li key={j}>{line.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="leading-relaxed mb-6" style={{ color: '#DAE2FA' }}>
                  {block.split("**").map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="font-semibold text-white">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </motion.article>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t"
            style={{ borderColor: 'rgba(60, 121, 210, 0.3)' }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="font-semibold text-white flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share this article
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={copyLink}
                  className="p-3 rounded-full transition-colors"
                  style={{ backgroundColor: 'rgba(60, 121, 210, 0.2)' }}
                  title="Copy link"
                >
                  {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" style={{ color: '#DAE2FA' }} />}
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-colors hover:opacity-80"
                  style={{ backgroundColor: 'rgba(60, 121, 210, 0.2)' }}
                >
                  <Twitter className="w-5 h-5" style={{ color: '#DAE2FA' }} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-colors hover:opacity-80"
                  style={{ backgroundColor: 'rgba(60, 121, 210, 0.2)' }}
                >
                  <Linkedin className="w-5 h-5" style={{ color: '#DAE2FA' }} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Inline CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
            style={{ backgroundColor: '#15325D' }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full blur-[80px] opacity-30" style={{ backgroundColor: '#3C79D2' }} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Apply These Insights?
              </h3>
              <p className="mb-6 max-w-lg mx-auto" style={{ color: '#DAE2FA' }}>
                See how Befikra can transform your adventure business with AI-powered automation.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#3C79D2' }}
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20" style={{ backgroundColor: '#15325D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((relatedPost, i) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-md">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:opacity-80 transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm flex items-center gap-1" style={{ color: 'rgba(218, 226, 250, 0.7)' }}>
                      <Clock className="w-4 h-4" />
                      {relatedPost.readTime}
                    </p>
                  </Link>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
