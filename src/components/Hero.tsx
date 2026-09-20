import Link from "next/link";
import { siteConfig } from "../config";

export default function Hero() {
  return (
    <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        {siteConfig.copy.hero.h1}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        {siteConfig.copy.hero.subheadline}
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        {/* Primary CTA */}
        <Link
          href={siteConfig.trialUrl}
          style={{ backgroundColor: siteConfig.accentHex }}
          className="rounded-md px-8 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
        >
          {siteConfig.copy.hero.primaryCta}
        </Link>
        {/* Secondary CTA */}
        <a
          href="#how-it-works"
          className="rounded-md bg-gray-200 px-8 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-300"
        >
          {siteConfig.copy.hero.secondaryCta}
        </a>
      </div>
    </section>
  );
}