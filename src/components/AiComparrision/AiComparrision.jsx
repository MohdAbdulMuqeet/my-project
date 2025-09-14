"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

// AnimatedButton component (simplified version)
const AnimatedButton = ({ children, className = "" }) => {
  return (
    <button className={`bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-purple-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105 ${className}`}>
      {children}
    </button>
  );
};

// CardGridBackground component
const CardGridBackground = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-6 gap-4 h-full">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="border border-purple-300/20 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

const AiComparrision = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const individualSubscriptions = [
    { name: "ChatGPT 5", price: 20 },
    { name: "Google Gemini 2.5Pro", price: 20 },
    { name: "Perplexity Sonar Pro", price: 20 },
    { name: "Claude Sonnet 4", price: 20 },
    { name: "Grok 4", price: 30 },
  ];

  const totalIndividualCost = individualSubscriptions.reduce(
    (sum, sub) => sum + sub.price,
    0
  );

  const features = [
    "All premium AI models included",
    "Side-by-side comparison",
    "3 million tokens/month (Premium models count as 4x)",
    "Instant prompt enhancement",
    "Image generation & Audio transcription",
  ];

  const issues = [
    "Multiple subscriptions to manage - expensive",
    "Constant tab switching",
    "No comparison features",
  ];

  return (
    <div className="min-h-screen px-6 lg:px-20 py-10 mt-20 mb-14">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Get 6 Premium AI Models
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-6">
          for Half the Price of One
        </h2>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full px-6 py-3">
          <span className="text-orange-400">🔥</span>
          <span className="text-cyan-400 text-lg">
            Limited time: Save 90% compared to individual subscriptions
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-screen-xl mx-auto">
        {/* Left: Individual Subscriptions */}
        <div className="relative bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-gray-800 w-full lg:w-1/3">
          <h2 className="text-xl font-bold text-white mb-6">
            Individual AI Subscriptions
          </h2>

          <div className="mb-6">
            <div className="text-3xl font-bold text-red-500 mb-1">
              ${totalIndividualCost}
              <span className="text-lg text-gray-400 ml-2">
                (~₹{(totalIndividualCost * 83).toLocaleString()})
              </span>
            </div>
            <p className="text-gray-400 text-sm">What you're paying now</p>
          </div>

          {/* Subscription list */}
          <div className="divide-y divide-gray-800 mb-6">
            {individualSubscriptions.map((sub, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3"
              >
                <span className="text-gray-200">{sub.name}</span>
                <span className="text-red-300 font-semibold">
                  ${sub.price}/mo
                </span>
              </div>
            ))}
          </div>

          {/* Issues */}
          <div className="space-y-3">
            {issues.map((issue, index) => (
              <div key={index} className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm">{issue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle: VS */}
        <div className="flex-shrink-0">
          <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
            {/* Glow background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700 blur-xl opacity-80 animate-pulse"></div>
            {/* Inner circle */}
            <span className="relative w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/40">
              VS
            </span>
          </div>
        </div>

        {/* Right: AI Fiesta Plan */}
        <div
          className="relative 
          bg-gradient-to-b from-purple-400/30 via-purple-900/50 to-purple-950/70 
          backdrop-blur-md rounded-2xl 
          px-12 py-14 
          border border-purple-500/50 
          overflow-hidden 
          shadow-xl shadow-purple-700/30 
          w-full lg:w-1/2 min-h-[750px]"
        >
          <CardGridBackground />
          {/* White gradient overlay at top */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-0"></div>

          <div className="relative z-10">
            {/* Plan Selection */}
            <div className="flex gap-6 mb-10">
              {[
                { id: "monthly", price: "₹999", label: "/Month", sub: "Monthly" },
                {
                  id: "yearly",
                  price: "₹9,999",
                  label: "/Year",
                  sub: "Yearly (Save 17%)",
                },
              ].map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`flex-1 p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-5 ${
                    selectedPlan === plan.id
                      ? "bg-transparent text-white border-purple-500 shadow-lg shadow-purple-600/50"
                      : "bg-gray-800/50 text-gray-300 border-transparent hover:bg-gray-700/50"
                  }`}
                >
                  {/* Checkbox */}
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                      selectedPlan === plan.id
                        ? "border-purple-400 bg-purple-500"
                        : "border-gray-500"
                    }`}
                  >
                    {selectedPlan === plan.id && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                  {/* Text */}
                  <div>
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <div className="text-sm opacity-90">{plan.label}</div>
                    <div className="text-xs mt-1">{plan.sub}</div>
                    {plan.id === "yearly" && (
                      <div className="text-xs bg-purple-500/20 px-2 py-1 rounded mt-1">
                        + Quarterly Webinar Access
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-5 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Bigger CTA Button */}
            <AnimatedButton className="!px-44 !py-6 !text-xl !rounded-2xl !font-bold">
              Get Started Now →
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiComparrision;