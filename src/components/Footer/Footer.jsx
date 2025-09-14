'use client';

import React from "react";
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton"; // adjust path if needed
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-white px-4 sm:px-6 md:px-12 py-16 sm:py-20">
  {/* CTA Section */}
  <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 px-4">
    <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">
      Ready to experience smarter & more accurate AI answers?
    </h2>
    <p className="text-gray-300 mb-6 sm:mb-10 text-base sm:text-xl md:text-2xl leading-relaxed">
      Gain an edge with our exclusive Promptbook, designed to provide you with tailored insights and guidance across every industry and subject.
    </p>
    <AnimatedButton className="px-6 sm:px-12 py-3 sm:py-5 text-lg sm:text-2xl">
      Get Started Now &rarr;
    </AnimatedButton>
  </div>

  {/* Main Footer Content */}
  <div className="max-w-5xl mx-auto text-center pt-10 sm:pt-16 flex flex-col items-center gap-6 sm:gap-8 px-4">
    
    {/* Logo */}
    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xl sm:text-2xl">✦</span>
      </div>
      <span className="text-2xl sm:text-3xl font-semibold">AI Fiesta</span>
    </div>

    {/* Support Email */}
    <Link
      href="mailto:support@aifiesta.ai"
      className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors text-sm sm:text-lg"
    >
      <FaPaperPlane className="text-base sm:text-lg" />
      support@aifiesta.ai
    </Link>

    {/* Separator Line */}
    <div className="w-full max-w-6xl my-4 sm:my-6">
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>

    {/* Footer Links and Copyright */}
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-gray-400 text-sm sm:text-lg text-center">
      <Link href="/privacy" className="hover:text-white transition-colors">
        Privacy Policy
      </Link>
      <Link href="/terms" className="hover:text-white transition-colors">
        Terms & Conditions
      </Link>
      <div className="text-gray-500 text-sm sm:text-base">
        © 2025 AI Fiesta. All rights reserved.
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;