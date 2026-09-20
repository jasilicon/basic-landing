import Link from "next/link";
import { siteConfig } from "../config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            {siteConfig.productName}
          </span>
        </Link>

        {/* Start Free Trial CTA */}
        <Link
          href={siteConfig.trialUrl}
          style={{ backgroundColor: siteConfig.accentHex }}
          className="rounded-md px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Start Free Trial
        </Link>
      </div>
    </header>
  );
}