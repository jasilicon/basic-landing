import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto max-w-3xl flex-grow px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-6 text-gray-600">
          This is a placeholder for the legal privacy policy document. 
        </p>
      </main>
      <Footer />
    </div>
  );
}