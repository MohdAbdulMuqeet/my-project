"use client";

import React, { useState, useEffect } from "react";
import AnimatedButton from "../ui/AnimatedButton";

const Herosection = () => {
  const [currentText, setCurrentText] = useState("Chat.");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentText((prev) => (prev === "Chat." ? "Subscrip." : "Chat."));
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28 mb-8 sm:mb-12 px-3 sm:px-6 lg:px-8">

  <div className="max-w-7xl w-full mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-2 text-center lg:text-left">
        {/* Badge */}
        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
          <span className="text-slate-300 text-xs sm:text-sm font-medium">
            Built by Y Combinator Alumni
          </span>
        </div>

        {/* Headings */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          World's Most
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent leading-tight">
          Powerful AIs.
        </h1>
        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          One{" "}
          <span
            className={`inline-block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent transition-all duration-500 ${
              isAnimating
                ? "opacity-0 transform -translate-y-4"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            {currentText}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-md sm:max-w-xl mx-auto lg:mx-0">
          Stop juggling tabs and subscriptions – AI Fiesta gives you access
          to all best-in-class AI models for just $12/month. Almost half of
          what you'd pay for a single premium AI chat subscription.
        </p>

        {/* CTA */}
        <div className="pt-4">
          <AnimatedButton className="px-6 sm:px-10 md:px-14 py-2.5 sm:py-3 text-base sm:text-lg md:text-xl">
            Get Started Now <span className="ml-2 text-xl sm:text-2xl">→</span>
          </AnimatedButton>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm md:text-base">
          Experience smarter & more accurate answers
        </p>
      </div>

      {/* Right Content */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto">
        <div className="relative group">
          {/* Gradient Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          {/* Main Card */}
          <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700">
            {/* Chat UI */}
            <div className="space-y-4 text-xs sm:text-sm md:text-base">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-slate-600">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
                  <span className="text-white font-medium">AI Assistant</span>
                </div>
                <div className="flex space-x-1.5 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Question */}
              <div className="bg-slate-700/50 rounded-lg p-2 sm:p-3">
                <p className="text-slate-300 mb-1">You asked:</p>
                <p className="text-white">
                  What's the best way to brew coffee at home? Keep it simple.
                </p>
              </div>

              {/* Response */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg h-32 sm:h-40 md:h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-400">AI Generated Response</p>
                </div>
              </div>

              {/* Input */}
              <div className="flex items-center space-x-2 pt-2">
                <div className="flex-1 bg-slate-700/50 rounded-full px-3 py-2 border border-slate-600">
                  <p className="text-slate-400">Type your message...</p>
                </div>
                <button className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Herosection;
