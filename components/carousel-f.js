"use client";

import { Carousel } from "./ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Are you looking to buy?",
      button: "Checkout",
      src: "https://images.unsplash.com/photo-1642543348781-ed9c6d67ed20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Looking to invest ?",
      button: "Checkout",
      src: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Looking for refinance?",
      button: "Checkout",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Looking for Loans?",
      button: "Checkout",
      src: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    (
        <>
        <div className="text-xl md:text-5xl md:underline font-semibold flex items-center mx-auto justify-center mt-10 ">
        Here are our top services
        </div>
        <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
        </>
    
    )
  );
}
