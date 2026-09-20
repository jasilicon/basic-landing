import type { Metadata } from "next";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { siteConfig } from "../../src/config";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.productName}`,
  description: `Terms of Service for ${siteConfig.productName}.`,
  robots: siteConfig.seo.noIndex ? "noindex, nofollow" : "index, follow",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto max-w-3xl flex-grow px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
        <p className="mt-4 text-gray-600">
          By accessing or using {siteConfig.productName}, you agree to be bound by these Terms of
          Service. If you do not agree, please do not use the service.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">2. Use of the Service</h2>
        <p className="mt-4 text-gray-600">
          {siteConfig.productName} provides sales KPI tracking and analytics tools. You may use the
          service only for lawful purposes and in accordance with these Terms. You are responsible
          for maintaining the confidentiality of your account credentials.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">3. Subscriptions and Billing</h2>
        <p className="mt-4 text-gray-600">
          The free trial grants 14 days of full access. Paid plans are billed on the terms stated at
          signup. You may cancel at any time, and access continues until the end of the current
          billing period.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">4. Intellectual Property</h2>
        <p className="mt-4 text-gray-600">
          All content, software, and trademarks associated with {siteConfig.productName} are the
          property of their respective owners. You may not copy, modify, or redistribute the service.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">5. Limitation of Liability</h2>
        <p className="mt-4 text-gray-600">
          {siteConfig.productName} is provided “as is” without warranties of any kind. To the fullest
          extent permitted by law, we are not liable for any damages arising from your use of the
          service.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">6. Changes to These Terms</h2>
        <p className="mt-4 text-gray-600">
          We may update these Terms from time to time. Continued use of the service after changes
          constitutes acceptance of the revised Terms.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">7. Contact</h2>
        <p className="mt-4 text-gray-600">
          For questions about these Terms, reach out to our support team from the contact channels
          listed on our website.
        </p>

        <p className="mt-12 text-sm text-gray-400">
          This is a sample placeholder document and does not constitute legal advice. Replace it with
          the actual legal Terms of Service before launch.
        </p>
      </main>
      <Footer />
    </div>
  );
}