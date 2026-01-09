"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const links = {
    Products: [
      { name: "Instagram Automation", href: "/products/instagram" },
      { name: "WhatsApp Automation", href: "/products/whatsapp" },
      { name: "Website Booking Engine", href: "/products/website" }
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "#" }
    ],
    Resources: [
      { name: "Help Center", href: "#" },
      { name: "API Docs", href: "#" },
      { name: "Community", href: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" }
    ]
  }

  return (
    <footer className="bg-slate-50 pt-20 pb-12 border-t border-gray-200">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
              <div className="col-span-2 lg:col-span-2">
                 <div className="flex items-center gap-2 mb-6">
                     <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold">B</div>
                     <span className="font-bold text-xl text-slate-900">Befikra</span>
                 </div>
                 <p className="text-slate-500 text-sm max-w-xs mb-6">
                   Automating the adventure business, one booking at a time.
                 </p>
                 <div className="flex gap-4">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer"></div>
                     ))}
                 </div>
              </div>
              
              {Object.entries(links).map(([category, items]) => (
                <div key={category}>
                   <h4 className="font-bold text-slate-900 mb-6">{category}</h4>
                   <ul className="space-y-4">
                      {items.map(item => (
                        <li key={item.name}>
                          <Link href={item.href} className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
             <p>© 2024 Befikra. All rights reserved.</p>
             <div className="flex gap-8 mt-4 md:mt-0">
                <span>English (US)</span>
             </div>
          </div>
       </div>
    </footer>
  )
}

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
       <div className="absolute top-0 w-full h-full bg-slate-900/50"></div>
       <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
              Ready to Automate Your Adventure Business?
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Join 500+ vendors who are scaling effortlessly with Befikra.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/50 text-lg">
                 Get Started for Free
              </Link>
              <Link href="/demo" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 hover:bg-white/10 text-white font-bold rounded-full transition-all text-lg flex items-center justify-center group">
                 Book a Demo
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
       </div>
    </section>
  )
}
