"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "We were nervous about buying our first home, but Mohit guided us through every step with patience and professionalism. He found us the best loan deal and made the whole process stress-free. Highly recommended! ",
    name: "Samuel and Eva Daniel",
    title: "Mohit made our home loan process seamless!",
  },
  {
    quote:
      "Mohit helped us refinance our home loan and saved us a significant amount in interest. He explained everything clearly and found a lender that suited our needs perfectly. ",
    name: "Kevin G",
    title: "Excellent service and great loan options!",
  },
  {
    quote: "We were struggling with high interest rates, but Mohit found us a better deal, reducing our monthly repayments significantly. He made the transition smooth and easy.",
    name: "Laura & James W",
    title: "Refinancing made easy",
  },
  {
    quote:
      "Mohit went above and beyond to help us secure our home loan. He was always available to answer our questions and made sure we got the best rate possible",
    name: "Rhonda and Sunny G",
    title: "Best mortgage broker in Sydney!",
  },
  {
    quote:
      "Thanks to Mohit, we secured financing for our investment property at a fantastic rate. He made the process smooth and hassle-free",
    name: "Chang and Olivia L ",
    title: "A game changer for our investment property!",
  },
];
