"use client";

import React from "react";

const GridBackground = ({ 
  className = "",
  gridSize = 80,
  strokeWidth = 1,
  opacity = 0.05,
  color = "#ffffff"
}) => {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${color} ${strokeWidth}px, transparent ${strokeWidth}px),
            linear-gradient(90deg, ${color} ${strokeWidth}px, transparent ${strokeWidth}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          opacity: opacity,
        }}
      />
    </div>
  );
};

export default GridBackground;
