'use client';

import React from "react";
import AnimatedButton from "../ui/AnimatedButton"; // import your existing button component

const VideoSection = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden mt-20 mb-14">
      {/* Background stars/particles effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Watch AI Fiesta Catch What Others Miss
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Real question. Real answers. See which AI gets it right.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Video Section */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              {/* Glow effect behind video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-400/20 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-gray-900 rounded-2xl p-4 border border-gray-700">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/-NG602qUUK0?enablejsapi=1&autoplay=1&mute=1"
                  title="Watch AI Fiesta Catch What ChatGPT, Gemini, Claude, Perplexity Miss"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                
                {/* Video overlay info */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">AI</span>
                    </div>
                    <span>Watch AI Fiesta Catch What ChatGPT, Gemini, Claude, Per...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex-1 space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                The Results Will Surprise You
              </h2>
            </div>

            {/* Results Cards */}
            <div className="space-y-4">
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-green-400 text-xl font-bold">2 out of 6 got it right</span>
                </div>
                <p className="text-green-200 ml-11">Gave accurate, actionable answers</p>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-yellow-400 text-xl font-bold">3 out of 6 were incomplete</span>
                </div>
                <p className="text-yellow-200 ml-11">Provided partial or incomplete information</p>
              </div>

              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-red-400 text-xl font-bold">1 out of 6 was wrong</span>
                </div>
                <p className="text-red-200 ml-11">Gave misleading guidance</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <AnimatedButton className="w-full py-4 px-8 text-lg font-semibold">
                Get smarter & more accurate AI answers
              </AnimatedButton>
              
              <p className="text-center text-gray-400 mt-4 text-sm">
                This is why comparing matters — get the full picture every time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default VideoSection;
