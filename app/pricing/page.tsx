"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer, CTA } from "../components/Footer";
import { Check, X, HelpCircle, ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "1,999",
    description: "Perfect for new trek organizers and small agencies getting started.",
    features: [
      "Up to 500 Leads / Month",
      "Basic WhatsApp Automation",
      "1 Team Member",
      "Standard Booking Engine",
      "Email Support"
    ],
    highlight: false,
    cta: "Start Free Trial",
    color: "blue",
    icon: Zap
  },
  {
    name: "Premium",
    price: "4,999",
    description: "For growing adventure businesses dealing with daily enquiries.",
    features: [
      "Up to 2,000 Leads / Month",
      "Advanced WhatsApp Flows",
      "5 Team Members",
      "Custom Branding on Booking Engine",
      "Priority Chat Support",
      "Basic AI Responses"
    ],
    highlight: true,
    cta: "Get Started",
    popular: true,
    color: "violet",
    icon: Sparkles
  },
  {
    name: "Pro",
    price: "9,999",
    description: "Complete automation suite for established travel companies.",
    features: [
      "Unlimited Leads",
      "Full API Access",
      "Unlimited Team Members",
      "White-label Solution",
      "24/7 Dedicated Manager",
      "Advanced AI Sales Agent"
    ],
    highlight: false,
    cta: "Contact Sales",
    color: "emerald",
    icon: Shield
  }
];

const featuresComparison = [
  {
    category: "Lead Management",
    features: [
      { name: "Monthly Active Leads", starter: "500", premium: "2,000", pro: "Unlimited" },
      { name: "Lead Qualification", starter: "Manual", premium: "Automated", pro: "AI-Driven" },
      { name: "CRM Access", starter: true, premium: true, pro: true },
    ]
  },
  {
    category: "Automation",
    features: [
      { name: "WhatsApp Broadcasts", starter: "Manual", premium: "Automated", pro: "Advanced Segmentation" },
      { name: "Instagram Auto-Reply", starter: true, premium: true, pro: true },
      { name: "AI Chatbot", starter: false, premium: "Basic", pro: "Advanced + Training" },
    ]
  },
  {
    category: "Operations",
    features: [
      { name: "Team Members", starter: "1", premium: "5", pro: "Unlimited" },
      { name: "Booking Engine", starter: "Standard", premium: "Custom Branding", pro: "White-label" },
      { name: "Analytics", starter: "Basic", premium: "Advanced", pro: "Custom Reports" },
    ]
  },
  {
    category: "Support",
    features: [
      { name: "Onboarding", starter: "Self-serve", premium: "Guided", pro: "Dedicated Manager" },
      { name: "SLA", starter: "48h", premium: "24h", pro: "1h" },
    ]
  }
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

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
                  Flexible Pricing
               </span>
               <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                  Simple, Transparent <span className="text-blue-600">Pricing</span>
               </h1>
               <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Choose the right plan for your adventure business. No hidden fees. Cancel anytime.
               </p>
            </motion.div>
            
            {/* Toggle */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="flex items-center justify-center gap-4 mb-16"
            >
                <span className={`text-sm font-semibold transition-colors ${!annual ? "text-slate-900" : "text-slate-500"}`}>Monthly</span>
                <button 
                  onClick={() => setAnnual(!annual)}
                  className="w-14 h-8 bg-slate-900 rounded-full p-1 relative transition-colors hover:bg-slate-800"
                >
                    <div className={`w-6 h-6 bg-white rounded-full transition-transform ${annual ? "translate-x-6" : "translate-x-0"}`} />
                </button>
                <div className="flex items-center gap-2">
                    <span className={`text-sm font-semibold transition-colors ${annual ? "text-slate-900" : "text-slate-500"}`}>Annually</span>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">Save 20%</span>
                </div>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.3 }}
                        className={`relative rounded-3xl p-8 text-left border-2 ${
                            plan.highlight 
                            ? "bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10" 
                            : "bg-white text-slate-900 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
                        }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                                Most Popular
                            </div>
                        )}
                        
                        <div className={`w-12 h-12 rounded-2xl ${plan.highlight ? "bg-white/10" : "bg-blue-50"} flex items-center justify-center mb-6`}>
                           <plan.icon className={`w-6 h-6 ${plan.highlight ? "text-blue-400" : "text-blue-600"}`} />
                        </div>

                        <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                        <p className={`text-sm mb-6 ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>{plan.description}</p>
                        
                        <div className="mb-8">
                            <span className="text-5xl font-extrabold">₹{annual ? plan.price : (parseInt(plan.price.replace(/,/g, '')) * 1.2).toLocaleString().split('.')[0]}</span>
                            <span className={`text-sm ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>/month</span>
                            {annual && <p className="text-xs text-slate-400 mt-2">Billed annually</p>}
                        </div>
                        
                        <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-all flex items-center justify-center gap-2 ${
                            plan.highlight 
                            ? "bg-white text-slate-900 hover:bg-blue-50 hover:scale-105" 
                            : "bg-slate-900 text-white hover:bg-slate-800 hover:scale-105"
                        }`}>
                            {plan.cta}
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        
                        <ul className="space-y-4">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlight ? "text-emerald-400" : "text-emerald-600"}`} />
                                    <span className={`text-sm ${plan.highlight ? "text-slate-200" : "text-slate-600"}`}>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Compare All Features</h2>
                <p className="text-lg text-slate-600">Find the perfect features for your team structure.</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="py-5 px-6 text-slate-600 font-semibold text-lg w-1/3">Features</th>
                                <th className="py-5 px-6 text-slate-900 font-bold text-lg w-1/5">Starter</th>
                                <th className="py-5 px-6 text-blue-600 font-bold text-lg w-1/5 bg-blue-50/50">Premium</th>
                                <th className="py-5 px-6 text-slate-900 font-bold text-lg w-1/5">Pro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {featuresComparison.map((section, idx) => (
                                <>
                                    <tr key={section.category} className="bg-slate-50">
                                        <td colSpan={4} className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider pt-8">
                                            {section.category}
                                        </td>
                                    </tr>
                                    {section.features.map((feat, i) => (
                                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                            <td className="py-5 px-6 text-slate-700 font-medium flex items-center gap-2">
                                                {feat.name}
                                                <HelpCircle className="w-4 h-4 text-slate-400 cursor-help opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </td>
                                            <td className="py-5 px-6 text-slate-700">
                                                {typeof feat.starter === 'boolean' ? (
                                                    feat.starter ? <Check className="w-5 h-5 text-emerald-500" /> : <X className="w-5 h-5 text-slate-300" />
                                                ) : (
                                                    <span className="text-sm font-semibold">{feat.starter}</span>
                                                )}
                                            </td>
                                            <td className="py-5 px-6 text-slate-900 font-semibold bg-blue-50/30">
                                                {typeof feat.premium === 'boolean' ? (
                                                    feat.premium ? <Check className="w-5 h-5 text-emerald-500" /> : <X className="w-5 h-5 text-slate-300" />
                                                ) : (
                                                    <span className="text-sm font-bold text-blue-600">{feat.premium}</span>
                                                )}
                                            </td>
                                            <td className="py-5 px-6 text-slate-700">
                                                {typeof feat.pro === 'boolean' ? (
                                                    feat.pro ? <Check className="w-5 h-5 text-emerald-500" /> : <X className="w-5 h-5 text-slate-300" />
                                                ) : (
                                                    <span className="text-sm font-semibold">{feat.pro}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-center mb-16"
              >
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-lg text-slate-600">Everything you need to know about our pricing</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                  {[
                      {
                          question: "Can I switch plans later?",
                          answer: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard settings."
                      },
                      {
                          question: "Is there a setup fee?",
                          answer: "No setup fees. You only pay the monthly or annual subscription fee for your selected plan."
                      },
                      {
                          question: "Do you offer refunds?",
                          answer: "We offer a 7-day money-back guarantee if you're not satisfied with Befikra for any reason."
                      },
                      {
                          question: "Can I add more team members?",
                          answer: "Yes, additional team members can be added to the Premium plan for a small additional fee per user."
                      }
                  ].map((faq, i) => (
                      <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
                      >
                          <h3 className="font-bold text-slate-900 mb-3 text-lg group-hover:text-blue-600 transition-colors">{faq.question}</h3>
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                  ))}
              </div>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
              >
                  <p className="text-slate-700 mb-4">Still have questions?</p>
                  <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105"
                  >
                      Contact our team
                      <ArrowRight className="w-4 h-4" />
                  </Link>
              </motion.div>
          </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
