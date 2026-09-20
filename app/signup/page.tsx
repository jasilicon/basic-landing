import type { Metadata } from "next";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import SignupForm from "../../src/components/SignupForm";
import { siteConfig } from "../../src/config";

export const metadata: Metadata = {
  title: `Start your free trial | ${siteConfig.productName}`,
  description: siteConfig.copy.hero.subheadline,
  robots: siteConfig.seo.noIndex ? "noindex, nofollow" : "index, follow",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="flex-grow bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start your free trial
            </h1>
            <p className="mt-4 text-gray-600">{siteConfig.copy.hero.subheadline}</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <SignupForm />
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            14 days of full access, no credit card required.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}