"use client";

import React, { useState, useEffect } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars only on the client
    const generatedStars = Array.from({ length: 25 }).map(() => {
      const size = Math.random() * 2 + 1; // px
      const duration = Math.random() * 3 + 1; // s

      return {
        size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration,
        delay: `${Math.random() * 3}s`,
      };
    });

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full blink"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDuration: `${star.duration}s`,
            animationDelay: star.delay,
            boxShadow: `0 0 ${star.size * 2}px white`,
            backgroundColor: "white",
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarBackground;
