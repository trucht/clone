"use client";

import RaceCard from "./RaceCard";
import { useState } from "react";

export default function FeaturedRaces() {
  const [selectedDistance, setSelectedDistance] = useState<'Short' | 'Mid' | 'Long'>('Mid');
  const [selectedTrack, setSelectedTrack] = useState<'Dirt' | 'Turf'>('Dirt');
  const [selectedDirection, setSelectedDirection] = useState<'Left' | 'Right'>('Left');

  // Sample race data
  const races = [
    {
      title: "Harbor Classic Sprint",
      prize: 800000,
      date: "5/2",
      time: "7:30 AM",
    },
    {
      title: "Harbor Classic Gallop",
      prize: 800000,
      date: "5/2",
      time: "7:45 AM",
    },
    {
      title: "Harbor Classic",
      prize: 800000,
      date: "5/2",
      time: "8:00 AM",
    },
    {
      title: "Artemis Cup Sprint",
      prize: 800000,
      date: "5/3",
      time: "7:30 AM",
    },
    {
      title: "Artemis Cup Gallop",
      prize: 800000,
      date: "5/3",
      time: "7:45 AM",
    },
    {
      title: "Artemis Cup",
      prize: 800000,
      date: "5/3",
      time: "8:00 AM",
    },
  ];

  return (
    <div className="bg-[#0a192f] rounded-lg overflow-hidden">
      {/* Header with background image */}
      <div className="relative h-24 bg-[url('/races-banner.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] to-transparent"></div>
        <div className="relative h-full flex items-center px-6">
          <h2 className="text-2xl font-bold text-white">FEATURED RACES</h2>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a192f] to-transparent">
          <div className="text-yellow-400 text-sm">
            Race for your share of $60,081
          </div>
        </div>
      </div>

      {/* Major Races Section */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="text-yellow-400 font-medium">Major Races</span>
        </div>

        <div className="space-y-2">
          {races.map((race) => (
            <RaceCard
              key={`${race.title}-${race.time}`}
              {...race}
            />
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="text-emerald-400 font-medium">Free Rolls</span>
        </div>

        {/* Direction Filter */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <button
            onClick={() => setSelectedDirection('Left')}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              selectedDirection === 'Left'
                ? 'bg-emerald-500 text-black'
                : 'bg-[#112240] text-white hover:bg-[#1a365d]'
            }`}
          >
            ← Left
          </button>
          <button
            onClick={() => setSelectedDirection('Right')}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              selectedDirection === 'Right'
                ? 'bg-emerald-500 text-black'
                : 'bg-[#112240] text-white hover:bg-[#1a365d]'
            }`}
          >
            Right →
          </button>
        </div>

        {/* Track Type Filter */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <button
            onClick={() => setSelectedTrack('Dirt')}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              selectedTrack === 'Dirt'
                ? 'bg-emerald-500 text-black'
                : 'bg-[#112240] text-white hover:bg-[#1a365d]'
            }`}
          >
            • Dirt
          </button>
          <button
            onClick={() => setSelectedTrack('Turf')}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              selectedTrack === 'Turf'
                ? 'bg-emerald-500 text-black'
                : 'bg-[#112240] text-white hover:bg-[#1a365d]'
            }`}
          >
            ⸙ Turf
          </button>
        </div>

        {/* Distance Filter */}
        <div className="grid grid-cols-3 gap-2">
          {['Short', 'Mid', 'Long'].map((distance) => (
            <button
              key={distance}
              onClick={() => setSelectedDistance(distance as 'Short' | 'Mid' | 'Long')}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                selectedDistance === distance
                  ? 'bg-emerald-500 text-black'
                  : 'bg-[#112240] text-white hover:bg-[#1a365d]'
              }`}
            >
              {distance}
            </button>
          ))}
        </div>
      </div>

      {/* Race List */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white font-medium">Race List</span>
        </div>
        <div className="bg-[#112240] rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/baxus-logo.png" alt="Baxus" className="w-8 h-8 rounded" />
            <div>
              <h3 className="text-white font-medium">Baxus Cup Q18</h3>
              <p className="text-sm text-gray-400">5/1, 8:21 PM</p>
            </div>
          </div>
          <div className="text-emerald-500 font-bold">1,440.00 Ⓒ</div>
        </div>
      </div>
    </div>
  );
} 