import { siteConfig } from "../config";

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {siteConfig.copy.benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:ring-blue-600/20"
            >
              <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-4 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}