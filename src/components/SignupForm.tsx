"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "../config";

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
          ✓
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          Your trial is ready
        </h2>
        <p className="mt-2 text-gray-600">
          Check your inbox to confirm your account and start tracking your KPIs.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm font-medium text-gray-900 underline-offset-4 hover:underline"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-900">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: siteConfig.accentHex }}
        className="w-full rounded-md px-4 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
      >
        {siteConfig.copy.finalCta.buttonText}
      </button>
      <p className="text-center text-xs text-gray-500">
        No credit card required. Cancel anytime.
      </p>
    </form>
  );
}