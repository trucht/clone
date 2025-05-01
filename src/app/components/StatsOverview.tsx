"use client";

import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsOverview() {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/race-background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,50,0,0.8)] to-[#004d1a] opacity-95"></div>
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-center">
        {/* Logo and Title */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">
            PHOTO FINISH
            <span className="block text-xl sm:text-2xl md:text-3xl mt-1 text-emerald-400">
              LIVE
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-6 sm:mt-8 mb-8 sm:mb-12">
            AS REAL AS IT GETS
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 max-w-4xl mx-auto mb-6">
          <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-lg sm:text-xl md:text-2xl text-white">
              <AnimatedCounter prefix="$" end={17} suffix="M+ USD"/>
              <span className="block text-base sm:text-lg text-gray-300 mt-2">in Horse Sales</span>
            </div>
          </div>

          <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-lg sm:text-xl md:text-2xl text-yellow-400">
              <AnimatedCounter prefix="$" end={12} suffix="M+ USD"/>
              <span className="block text-base sm:text-lg text-gray-300 mt-2">in Race Purses</span>
            </div>
          </div>

          <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-lg sm:text-xl md:text-2xl text-white">
              <AnimatedCounter prefix="$" end={30} suffix="M+"/>
              <span className="block text-base sm:text-lg text-gray-300 mt-2">in Race Prizes</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-400 mb-8">
          *USD Value of $CROWN token gifts
        </div>

        {/* CTA Button */}
        <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#c4a052] hover:bg-[#d4b062] text-black font-bold rounded-lg transition-colors text-base sm:text-lg transform hover:scale-105 duration-200 shadow-lg">
          Join the Fun
        </button>
      </div>
    </div>
  );
} 