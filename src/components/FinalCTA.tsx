import Link from "next/link";
import { siteConfig } from "../config";

export default function FinalCTA() {
  return (
    <section className="py-24 text-center">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {siteConfig.copy.finalCta.title}
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href={siteConfig.trialUrl}
            style={{ backgroundColor: siteConfig.accentHex }}
            className="rounded-md px-8 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90"
          >
            {siteConfig.copy.finalCta.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}