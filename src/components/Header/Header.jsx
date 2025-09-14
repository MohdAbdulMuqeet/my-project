"use client";

import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

const Header = () => {
  const menuItems = ["Features", "Pricing", "FAQs"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full flex items-center justify-between bg-transparent z-50 px-4 sm:px-6 md:px-20 lg:px-40 py-4 sm:py-6">
      {/* Logo */}
      <div className="flex items-center relative z-10">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
          Coffee Mustache
        </h1>
      </div>

      {/* Middle Menu - Hidden on mobile */}
      <div className="hidden sm:flex bg-white/10 backdrop-blur-md rounded-full overflow-hidden relative z-10 border border-gray-400/40 shadow-[0_0_8px_rgba(156,163,175,0.8)]">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-6 py-3 text-white text-lg font-thin transition-colors duration-300 hover:text-gray-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4 relative z-10">
        {/* Login Button (Desktop only) */}
        <div className="hidden sm:block text-sm sm:text-base md:text-lg font-thin">
          <AnimatedButton className="w-full max-w-xs sm:max-w-sm md:max-w-md px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-base sm:text-lg md:text-xl">
            Log In <span className="ml-1 sm:ml-2">→</span>
          </AnimatedButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 rounded-full bg-white/10 border border-gray-400/40 backdrop-blur-md text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 w-full bg-white/10 backdrop-blur-md border-t border-gray-400/30 shadow-lg sm:hidden">
          <ul className="flex flex-col divide-y divide-white/10">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-6 py-4 text-white text-base hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Login Button inside dropdown */}
            <li className="flex justify-center px-6 py-8 w-full max-w-2xl">
              <AnimatedButton className="w-full text-xl px-32 py-4">
                Log In <span className="ml-2 p-5">→</span>
              </AnimatedButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
