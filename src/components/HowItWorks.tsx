"use client";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className={`draw-lines bg-white py-24${isVisible ? " is-visible" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h2>
        </div>
        <div className="relative grid gap-12 md:grid-cols-3">
          {siteConfig.copy.howItWorks.map((item, index) => (
            <div key={index} className="relative text-center">
              {index < siteConfig.copy.howItWorks.length - 1 && (
                <div
                  aria-hidden="true"
                  className="animate-draw-line absolute top-8 hidden h-px bg-gray-400 md:block"
                  style={{
                    left: "calc(50% + 2rem)",
                    width: "calc(100% - 1rem)",
                    animationDelay: `${0.4 + index * 0.6}s`,
                  }}
                />
              )}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-xl font-bold text-gray-900">
                {item.step}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}