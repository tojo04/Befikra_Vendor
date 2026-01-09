"use client";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12 border-b border-slate-100 pb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
                <p className="text-slate-500">Last updated: January 9, 2026</p>
            </div>

            {/* Content */}
            <div className="prose prose-slate max-w-none text-slate-600 space-y-12">
                <p className="text-lg leading-relaxed">
                    Welcome to Befikra. These Terms & Conditions (“Terms”) govern your access to and use of our website, applications, and services (collectively, the “Services”). By accessing or using Befikra, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
                </p>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">1. About Befikra</h2>
                    <p>Befikra is a technology platform that provides AI-powered tools for vendors to manage leads, bookings, payments, and operations for experience-based businesses such as trekking agencies, adventure operators, and travel companies. Befikra does not own, operate, or conduct the experiences listed on the platform.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">2. Eligibility</h2>
                    <p>To use Befikra:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>You must be at least 18 years old</li>
                        <li>You must have the authority to represent your business</li>
                        <li>You must provide accurate and complete information during registration</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">3. Vendor Responsibilities</h2>
                    <p>As a vendor using Befikra, you agree to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide accurate experience details, pricing, availability, and policies</li>
                        <li>Fulfil bookings as confirmed on the platform</li>
                        <li>Comply with applicable laws, safety standards, and regulations</li>
                        <li>Communicate clearly with customers regarding experiences</li>
                    </ul>
                    <p>Befikra is not responsible for the quality, safety, or execution of vendor experiences.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">4. Platform Usage</h2>
                    <p>You agree not to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Misuse the platform or interfere with its operation</li>
                        <li>Upload false, misleading, or illegal content</li>
                        <li>Attempt unauthorized access to systems or data</li>
                        <li>Use Befikra for unlawful or fraudulent activities</li>
                    </ul>
                    <p>Befikra reserves the right to suspend or terminate access for violations.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">5. Bookings & Payments</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Befikra facilitates booking and payment processing</li>
                        <li>Payments are securely handled through third-party payment providers</li>
                        <li>Payouts to vendors are processed as per agreed timelines</li>
                        <li>Befikra is not responsible for payment failures caused by external providers</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">6. Fees & Pricing</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Pricing plans are communicated clearly on the website or during onboarding</li>
                        <li>Befikra may update pricing with prior notice</li>
                        <li>No hidden charges unless explicitly stated</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">7. Cancellations & Refunds</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Cancellation and refund policies are set by vendors</li>
                        <li>Befikra displays vendor-defined policies to customers</li>
                        <li>Befikra does not guarantee refunds unless required by law</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">8. Intellectual Property</h2>
                    <p>All platform content, software, trademarks, and designs belong to Befikra. Vendors retain ownership of their content but grant Befikra permission to display it for service delivery.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">9. Data & Privacy</h2>
                    <p>Your use of Befikra is also governed by our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>. By using the platform, you consent to data collection and processing as described therein.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">10. Limitation of Liability</h2>
                    <p>Befikra is not liable for:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Any indirect, incidental, or consequential damages</li>
                        <li>Disputes between vendors and customers</li>
                        <li>Losses resulting from misuse of the platform</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">11. Termination</h2>
                    <p>Befikra may suspend or terminate your access if:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>These Terms are violated</li>
                        <li>Required by law</li>
                        <li>Continued access poses risk to the platform or users</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">12. Modifications to Terms</h2>
                    <p>We may update these Terms from time to time. Continued use of Befikra after changes constitutes acceptance of updated Terms.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">13. Governing Law</h2>
                    <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in India.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">14. Contact Information</h2>
                    <p>For questions regarding these Terms, contact:</p>
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
