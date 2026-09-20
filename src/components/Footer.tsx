import Link from "next/link";
import { siteConfig } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {siteConfig.productName}. All rights reserved.
        </p>
        <div className="mt-4 flex gap-6 sm:mt-0">
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}