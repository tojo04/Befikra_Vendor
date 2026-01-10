import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import PerformanceMetrics from "./components/PerformanceMetrics";
import { UnifiedDashboard } from "./components/UnifiedDashboard";
import { ChannelIntegration } from "./components/ChannelIntegration";
import { VendorCommandCenter } from "./components/VendorCommandCenter";
import { BeforeAfter } from "./components/BeforeAfter";
import { CoreProducts } from "./components/CoreProducts";
import { Integrations } from "./components/Integrations";
import { Testimonials } from "./components/Testimonials";
import { Footer, CTA } from "./components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PerformanceMetrics />
      <UnifiedDashboard />
      <ChannelIntegration />
      <VendorCommandCenter />
      <BeforeAfter />
      <CoreProducts />
      <Integrations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
