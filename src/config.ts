export const siteConfig = {
      productName: "MetricMaster",
      accentHex: "#2563EB", 
      trialUrl: "/signup",
      seo: {
        keyword: "Metric Master Official",
        noIndex: false, 
      },
      pixels: {
        googleAnalyticsId: "", 
        metaPixelId: "",
      },
    copy: {
        hero: {
          h1: "Stop guessing. Start tracking your sales KPIs in real-time.",
          subheadline: "MetricMaster connects to your CRM in seconds and gives your sales team the exact metrics they need to close more deals.",
          primaryCta: "Start Free Trial",
          secondaryCta: "See how it works",
        },
        benefits: [
          { title: "Real-time Sync", description: "Your data updates instantly as deals move through the pipeline." },
          { title: "Custom Dashboards", description: "Build the exact views your reps and managers need to succeed." },
          { title: "Automated Alerts", description: "Get notified immediately when a rep hits their daily quota." }
        ],
        howItWorks: [
          { step: "01", title: "Connect your CRM", description: "Securely link Salesforce or HubSpot with one click." },
          { step: "02", title: "Set your KPIs", description: "Choose the metrics that actually matter to your bottom line." },
          { step: "03", title: "Watch it grow", description: "Give your team the visibility they need to crush their goals." }
        ],
        testimonial: {
          quote: "MetricMaster completely changed how we run our weekly pipeline reviews. We instantly knew where to focus our coaching efforts.",
          author: "Jame Doe",
          role: "VP of Sales, Acme Corp"
        },
        faq: [
          { question: "How long does setup take?", answer: "Under 5 minutes. Just authorize your CRM and we handle the data mapping." },
          { question: "Do you integrate with Salesforce?", answer: "Yes, we have native 1-click integrations for both Salesforce and HubSpot." },
          { question: "Is there a free trial?", answer: "Yes, you get 14 days of full access, no credit card required." },
          { question: "Can I invite my whole team?", answer: "Absolutely. Our Pro plan includes unlimited viewer seats for your reps." },
          { question: "Is my data secure?", answer: "We use enterprise-grade encryption and never sell your data to third parties." }
        ],
        finalCta: {
          title: "Ready to hit your quota?",
          buttonText: "Start your free trial today"
        }
      }
};
