"use client";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config";

type FAQItem = { question: string; answer: string };

function FAQItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.height = isOpen ? `${el.scrollHeight}px` : "0px";
  }, [isOpen]);

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left font-semibold text-gray-900"
      >
        {item.question}
        <span className="relative h-5 w-5 flex-shrink-0">
          <svg
            className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <svg
            className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height: 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden transition-[height,opacity] duration-300 ease-in-out"
      >
        <p className="px-6 pb-6 leading-relaxed text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {siteConfig.copy.faq.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}