"use client";

import { useState } from 'react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-purple-600 text-white relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-2">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 pr-8 sm:pr-0">
          <span className="text-xs sm:text-sm font-medium">
            $100k USD available in rewards this week. Make sure to register for ones you're eligible for!
          </span>
          <a 
            href="#" 
            className="text-xs sm:text-sm font-semibold underline hover:text-purple-200 transition-colors whitespace-nowrap"
          >
            Read More
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-1 
                   text-white hover:text-purple-200 transition-colors rounded-full 
                   hover:bg-white/10 active:bg-white/20"
          aria-label="Close banner"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
} 