'use client';

import React from 'react';

const AIModelsHubShowcase = () => {
  const aiModels = [
    {
      id: 1,
      name: "ChatGPT 5",
      tag: "All Rounder Explainer",
      description: "Great for questions, brainstorming, and clear step-by-step explanations",
      icon: "🔄",
      position: "top-left"
    },
    {
      id: 2,
      name: "Claude Sonnet 4",
      tag: "Co-Writing Master",
      description: "Refines polished emails, essays, and scripts while keeping your style.",
      icon: "✨",
      position: "middle-left"
    },
    {
      id: 3,
      name: "Gemini 2.5 Pro",
      tag: "Long Context Master",
      description: "Handles long documents and images, tracking full context and details.",
      icon: "⭐",
      position: "bottom-left"
    },
    {
      id: 4,
      name: "Perplexity Sonar Pro",
      tag: "Live Web Researcher",
      description: "Delivers fresh answers and news from credible, real-time sources.",
      icon: "🔍",
      position: "top-right"
    },
    {
      id: 5,
      name: "DeepSeek",
      tag: "Reasoning Specialist",
      description: "Excels at logic, math, and coding with clear, detailed solutions.",
      icon: "🧠",
      position: "middle-right"
    },
    {
      id: 6,
      name: "Grok 4",
      tag: "Creative Powerhouse",
      description: "Bold, unconventional ideas and punchy copy for trend-focused content.",
      icon: "⚡",
      position: "bottom-right"
    }
  ];

  const getCardPosition = (position) => {
    const positions = {
      'top-left': 'absolute top-0 left-0',
      'middle-left': 'absolute top-1/2 left-0 -translate-y-1/2',
      'bottom-left': 'absolute bottom-0 left-0',
      'top-right': 'absolute top-0 right-0',
      'middle-right': 'absolute top-1/2 right-0 -translate-y-1/2',
      'bottom-right': 'absolute bottom-0 right-0'
    };
    return positions[position];
  };

  const getConnectionLine = (position) => {
    const lines = {
      'top-left': 'absolute top-1/2 left-full w-[200px] h-px bg-gradient-to-r from-teal-400 via-cyan-500 to-transparent animate-line-left',
      'middle-left': 'absolute top-1/2 left-full w-[200px] h-px bg-gradient-to-r from-teal-400 via-cyan-500 to-transparent animate-line-left',
      'bottom-left': 'absolute top-1/2 left-full w-[200px] h-px bg-gradient-to-r from-teal-400 via-cyan-500 to-transparent animate-line-left',
      'top-right': 'absolute top-1/2 right-full w-[200px] h-px bg-gradient-to-l from-teal-400 via-cyan-500 to-transparent animate-line-right',
      'middle-right': 'absolute top-1/2 right-full w-[200px] h-px bg-gradient-to-l from-teal-400 via-cyan-500 to-transparent animate-line-right',
      'bottom-right': 'absolute top-1/2 right-full w-[200px] h-px bg-gradient-to-l from-teal-400 via-cyan-500 to-transparent animate-line-right'
    };
    return lines[position];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 mt-20 mb-14">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Pick the best characteristics 
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-500">
            of each AI model
        </h2>
      </div>

      {/* Main Hub Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center min-h-[600px]">
          
          {/* Central Hub */}
          <div className="relative z-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-400 blur-3xl opacity-30 scale-150"></div>
            <div className="relative w-80 h-80 rounded-full border-2 border-teal-400/30 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-500/20 border border-teal-400/50 flex items-center justify-center backdrop-blur-sm">
                <div className="w-20 h-20 rounded-full bg-teal-400/30 flex items-center justify-center">
                  <div className="text-4xl text-teal-300">🔄</div>
                </div>
                <div className="absolute top-8 left-12 w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 right-8 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-16 right-16 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* AI Model Cards */}
          {aiModels.map((model) => (
            <div key={model.id} className={`${getCardPosition(model.position)} z-10`}>
              {/* Connection Line */}
              <div className={getConnectionLine(model.position)}></div>
              
              {/* Card */}
              <div className="w-96 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 bg-gray-900/80 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-400/20 rounded-full flex items-center justify-center border border-teal-400/30">
                    <span className="text-xl">{model.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{model.name}</h3>
                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                      {model.tag}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes line-left {
          0% { width: 0; }
          100% { width: 200px; }
        }
        @keyframes line-right {
          0% { width: 0; }
          100% { width: 200px; }
        }
        .animate-line-left {
          animation: line-left 1s ease forwards;
        }
        .animate-line-right {
          animation: line-right 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default AIModelsHubShowcase;
