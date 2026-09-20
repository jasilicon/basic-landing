import { siteConfig } from "../config";

export default function Testimonial() {
  const { quote, author, role } = siteConfig.copy.testimonial;
  
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <blockquote className="text-2xl font-medium leading-9 text-gray-600 sm:text-3xl">
          "{quote}"
        </blockquote>
        <div className="mt-8">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
    </section>
  );
}