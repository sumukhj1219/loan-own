"use client"
import Script from 'next/script';
import { Button } from './ui/button';
import { Calendar } from 'lucide-react';
export default function CalendlyWidget() {
  function handleClick() {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/topaussiebroker/full-mortgage-assessment',
    });
    return false;
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <Button className="flex items-center justify-center mx-auto" onClick={handleClick}>
        <Calendar />  Schedule time with me
      </Button>
    </>
  );
}
