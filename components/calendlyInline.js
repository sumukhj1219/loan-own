"use client";
import Script from "next/script";

export default function CalendlyInline() {
  const initWidget = () => {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/topaussiebroker/discovery_call",
        parentElement: document.getElementById("calendly-home"),
        prefill: {},
        utm: {},
      });
    }
  };

  return (
    <section className="bg-gray-950 py-16 px-4" id="book-appointment">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-2">
          Book a Free Consultation
        </h2>
        <p className="text-yellow-400 text-center mb-8 text-lg">
          Pick a time that works for you and speak with one of our mortgage specialists
        </p>

        <div
          id="calendly-home"
          style={{ minWidth: "320px", height: "1050px" }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          onLoad={initWidget}
        />
      </div>
    </section>
  );
}
