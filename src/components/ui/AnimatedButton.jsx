"use client";

import React from "react";

const AnimatedButton = ({ children, className = "" }) => {
  return (
    <button
      className={`relative font-bold text-white rounded-full overflow-hidden group transition-transform transform hover:scale-105 ${className}`}
    >
      {/* Animated gradient background */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-400 animate-rotate-slow opacity-75 transition-opacity group-hover:opacity-100"></span>

      {/* Optional overlay for blur/glow effect */}
      <span className="absolute inset-0 bg-black/20 mix-blend-overlay rounded-full"></span>

      {/* Button text */}
      <span className="relative z-10">{children}</span>

      <style jsx>{`
        /* Animate the gradient rotation */
        @keyframes rotate-slow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-rotate-slow {
          background-size: 200% 200%;
          animation: rotate-slow 3s linear infinite;
        }
      `}</style>
    </button>
  );
};

export default AnimatedButton;
