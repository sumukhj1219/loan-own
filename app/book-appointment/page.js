"use client";
import Script from "next/script";

export default function BookAppointment() {
  const initWidget = () => {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/topaussiebroker/discovery_call",
        parentElement: document.getElementById("calendly-book-page"),
        prefill: {},
        utm: {},
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Book an Appointment
        </h1>
        <p className="text-yellow-400 text-center mb-8 text-lg">
          Schedule a free consultation with our mortgage specialists
        </p>

        <div
          id="calendly-book-page"
          style={{ minWidth: "320px", height: "1050px" }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          onLoad={initWidget}
        />
      </div>
    </div>
  );
}
