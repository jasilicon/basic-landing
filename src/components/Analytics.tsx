"use client";
import { useEffect } from "react";
import { siteConfig } from "../config";

export default function Analytics() {
  useEffect(() => {
    // UTM Preservation: Grab current URL params and attach them to trial links
    const params = new URLSearchParams(window.location.search);
    if (params.toString()) {
      const links = document.querySelectorAll(`a[href^="${siteConfig.trialUrl}"]`);
      links.forEach(link => {
        const url = new URL(link.getAttribute('href') || siteConfig.trialUrl);
        params.forEach((value, key) => url.searchParams.set(key, value));
        link.setAttribute('href', url.toString());
      });
    }
  }, []);

  return (
    <>
      {/* Dummy Ad Pixels - In production, gate this behind a cookie consent banner */}
      {siteConfig.pixels.googleAnalyticsId && (
        <script dangerouslySetInnerHTML={{ __html: `/* Google Analytics script goes here */` }} />
      )}
      {siteConfig.pixels.metaPixelId && (
        <script dangerouslySetInnerHTML={{ __html: `/* Meta Pixel script goes here */` }} />
      )}
    </>
  );
} 