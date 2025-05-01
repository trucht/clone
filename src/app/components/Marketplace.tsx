"use client";

import MarketplaceCard from "./MarketplaceCard";

export default function Marketplace() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Marketplace</h2>
        <button className="text-sm md:text-base text-emerald-500 hover:text-emerald-400 transition-colors">
          View All Horses →
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
      </div>
    </div>
  );
} 