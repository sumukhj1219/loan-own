"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <ContainerScroll
        // titleComponent={
        //   <>
        //     <h1 className="text-4xl mt-10 md:text-5xl lg:text-6xl font-semibold text-black dark:text-white text-center px-6">
        //       Learning to Owning
        //       <br />
        //       <span className="text-4xl sm:text-5xl md:text-[6rem] font-bold leading-none">
        //         Your{" "}
        //         <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-400 text-transparent bg-clip-text">
        //           Path
        //         </span>{" "}
        //         to{" "}
        //         <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-400 text-transparent bg-clip-text">
        //           Home Ownership
        //         </span>
        //       </span>
        //     </h1>
        //   </>
        // }
      >
        <video
          src="/sample.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
        />
      </ContainerScroll>
    </div>
  );
}
