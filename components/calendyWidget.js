"use client"
import Script from 'next/script';
import Head from 'next/head'; // Import Head for the stylesheet
import { useState } from 'react';
import { Button } from './ui/button';
import { Calendar } from 'lucide-react';

// Extend the window interface so TypeScript doesn't complain about Calendly
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function CalendlyWidget() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  function handleClick() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/topaussiebroker/full-mortgage-assessment',
      });
    } else {
      console.error("Calendly script hasn't loaded yet.");
    }
  }

  return (
    <>
      {/* Properly inject the CSS into the document head */}
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>

      {/* Load the script and track when it's ready */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />

      <Button
        className="flex items-center justify-center mx-auto"
        onClick={handleClick}
        disabled={!isScriptLoaded} // Optional: disables button until Calendly is ready
      >
        <Calendar className="mr-2 h-4 w-4" /> Schedule time with me
      </Button>
    </>
  );
}
