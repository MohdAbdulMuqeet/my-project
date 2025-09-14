"use client";

import React from "react";

const GreenBackgroundGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-2]">
      {/* Subtle futuristic glow (top-left) */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-emerald-400/25 blur-[160px]" />

      {/* Balanced glow (bottom-right) */}
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-green-500/15 blur-[200px]" />
    </div>
  );
};

export default GreenBackgroundGlow;
