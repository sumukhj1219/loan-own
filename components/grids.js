import React from "react";

export function DotBackgroundDemo({ children }) {
  return (
    <div
      className="h-[50rem] w-full bg-white relative flex items-center justify-center"
      style={{
        backgroundImage: "radial-gradient(darkgreen 0.9px, transparent 0.9px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {children}
      </div>
    </div>
  );
}
