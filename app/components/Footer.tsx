"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const links = {
    Platform: [
      { name: "AI Vendor Panel", href: "/products/vendor-panel" },
      { name: "UniChat", href: "/products/unichat" },
      { name: "Snaplink", href: "/products/snaplink" }
    ],
    Tools: [
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
    <footer className="pt-20 pb-12 border-t" style={{ backgroundColor: '#0A1E3B', borderColor: '#15325D' }}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-7 gap-10 mb-16">
              <div className="col-span-2 lg:col-span-2">
                 <div className="flex items-center gap-2 mb-6">
                     <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#3C79D2' }}>B</div>
                     <span className="font-bold text-xl text-white">Befikra</span>
                 </div>
                 <p className="text-sm max-w-xs mb-6" style={{ color: '#DAE2FA' }}>
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
                   <h4 className="font-bold text-white mb-6">{category}</h4>
                   <ul className="space-y-4">
                      {items.map(item => (
                        <li key={item.name}>
                          <Link href={item.href} className="text-sm font-medium transition-colors" style={{ color: '#DAE2FA' }}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
          </div>
          
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm" style={{ borderColor: '#15325D', color: '#DAE2FA' }}>
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
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#15325D' }}>
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
       <div className="absolute top-0 w-full h-full" style={{ backgroundColor: 'rgba(10, 30, 59, 0.3)' }}></div>
       <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
              Ready to Automate Your Adventure Business?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#DAE2FA' }}>
              Join 500+ vendors who are scaling effortlessly with Befikra.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="w-full sm:w-auto px-8 py-4 text-white font-bold rounded-full transition-all shadow-lg text-lg" style={{ backgroundColor: '#3C79D2' }}>
                 Get Started for Free
              </Link>
              <Link href="/demo" className="w-full sm:w-auto px-8 py-4 bg-transparent border text-white font-bold rounded-full transition-all text-lg flex items-center justify-center group" style={{ borderColor: '#DAE2FA' }}>
                 Book a Demo
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
       </div>
    </section>
  )
}
