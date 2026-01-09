"use client";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12 border-b border-slate-100 pb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
                <p className="text-slate-500">Last updated: January 9, 2026</p>
            </div>

            {/* Content */}
            <div className="prose prose-slate max-w-none text-slate-600 space-y-12">
                <p className="text-lg leading-relaxed">
                    This Privacy Policy explains how Befikra (“Befikra”, “we”, “our”, or “us”) collects, uses, stores, and protects your information when you use our website, products, and services (collectively, the “Services”). By accessing or using Befikra, you agree to the terms of this Privacy Policy.
                </p>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
                    <p>We collect information to provide and improve our Services.</p>
                    
                    <h3 className="text-lg font-semibold text-slate-900 mt-4">a. Information You Provide</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Name, email address, phone number</li>
                        <li>Business name and details</li>
                        <li>Login credentials</li>
                        <li>Payment and billing information</li>
                        <li>Messages, enquiries, and support requests</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-slate-900 mt-4">b. Information Collected Automatically</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>IP address and browser details</li>
                        <li>Device and usage data</li>
                        <li>Pages visited and actions taken</li>
                        <li>Cookies and similar tracking technologies</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">2. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide and operate our Services</li>
                        <li>Enable bookings, payments, and communications</li>
                        <li>Improve product functionality and user experience</li>
                        <li>Respond to enquiries and provide support</li>
                        <li>Send service-related updates and notifications</li>
                        <li>Maintain platform security and prevent misuse</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">3. Sharing of Information</h2>
                    <p>We do not sell your personal data. We may share information only:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>With trusted service providers (payments, messaging, hosting)</li>
                        <li>When required by law or legal process</li>
                        <li>To protect the rights, safety, and security of Befikra and its users</li>
                    </ul>
                    <p>All third parties are bound by confidentiality obligations.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">4. Data Security</h2>
                    <p>We implement industry-standard security practices to protect your data against unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">5. Cookies & Tracking Technologies</h2>
                    <p>Befikra uses cookies to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Improve website functionality</li>
                        <li>Understand usage patterns</li>
                        <li>Enhance user experience</li>
                    </ul>
                    <p>You can control cookie preferences through your browser settings.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">6. Data Retention</h2>
                    <p>We retain personal data only for as long as necessary to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide our Services</li>
                        <li>Comply with legal obligations</li>
                        <li>Resolve disputes and enforce agreements</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Access your personal data</li>
                        <li>Update or correct information</li>
                        <li>Request deletion of your data (subject to legal requirements)</li>
                        <li>Opt out of non-essential communications</li>
                    </ul>
                    <p>To exercise your rights, contact us at <a href="mailto:support@gobefikra.com" className="text-blue-600 hover:underline">support@gobefikra.com</a>.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">8. Third-Party Links</h2>
                    <p>Our Services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">9. Children’s Privacy</h2>
                    <p>Befikra does not knowingly collect personal information from individuals under the age of 18.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">10. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">11. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-4">
                        <p className="font-bold text-slate-900">Befikra Support</p>
                        <p><a href="mailto:support@gobefikra.com" className="text-blue-600 hover:underline">support@gobefikra.com</a></p>
                    </div>
                </div>

            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
