"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link"; // Assuming you're using Next.js

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // 200ms delay before hiding
  };

  const handleDropdownClick = () => {
    // Keep dropdown open when clicking inside it
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="hidden md:flex space-x-8">
      {/* Features dropdown */}
      <div
        ref={dropdownRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href="#"
          className="text-gray-700 hover:text-green-600 font-medium transition-colors flex items-center"
        >
          Features
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleDropdownClick}
          >
            <div className="py-1">
              <Link
                href="/features/waste"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                Waste Management
              </Link>
              <Link
                href="/features/travel"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                Travel Tracking
              </Link>
              <Link
                href="/features/energy"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                Energy Monitoring
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Other nav items */}
      <Link
        href="/community"
        className="text-gray-700 hover:text-green-600 font-medium transition-colors"
      >
        Community
      </Link>
      <Link
        href="/donate-swap"
        className="text-gray-700 hover:text-green-600 font-medium transition-colors"
      >
        Donate & Swap
      </Link>

      <Link
        href="/about"
        className="text-gray-700   hover:text-green-600 font-medium transition-colors"
      >
        About
      </Link>
    </nav>
  );
};

export default Navigation;
