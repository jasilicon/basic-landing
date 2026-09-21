import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import LogoStrip from "../src/components/LogoStrip";
import Benefits from "../src/components/Benefits";
import HowItWorks from "../src/components/HowItWorks";
import Testimonial from "../src/components/Testimonial";
import FAQ from "../src/components/FAQ";
import FinalCTA from "../src/components/FinalCTA";
import Footer from "../src/components/Footer";
import Analytics from "../src/components/Analytics";
import LeadCapturePopup from "../src/components/LeadCapturePopup";
import { siteConfig } from "../src/config";

export default function Home() {
  // Generate FAQ Schema dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteConfig.copy.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  // Generate Software Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": siteConfig.productName,
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Analytics />
      
      {/* Inject JSON-LD Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <Header />
      <Hero />
      <LogoStrip />
      <Benefits />
      <HowItWorks />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
      <LeadCapturePopup />
    </main>
  );
}