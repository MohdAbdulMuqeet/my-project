"use client";

import React from "react";

const CardGridBackground = ({
  className = "",
  gridSize = 4,
  strokeWidth = 1,
  opacity = 0.1,
  color = "#ffffff"
}) => {
  return (
    <div className={`absolute inset-0 -z-20 ${className}`}>
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

export default CardGridBackground;
