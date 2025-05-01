"use client";

export default function MarketplaceCard() {
  return (
    <div className="bg-[#0a192f] rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-500 transition-colors">
      {/* Horse Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden bg-[#112240]">
        <div className="absolute top-2 left-2 bg-purple-600 text-white text-sm font-bold px-2 py-1 rounded">
          S+
        </div>
      </div>

      {/* Horse Info */}
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">Trauma Fruit</h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Age 5 • Stallion • LionShark Racing
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-3 sm:mb-4 text-xs sm:text-sm">
          <div className="text-center">
            <p className="text-gray-400">Right</p>
            <div className="flex justify-center">
              <span className="text-yellow-400">★★</span>
              <span className="text-gray-600">★</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Dirt</p>
            <div className="flex justify-center">
              <span className="text-yellow-400">★★</span>
              <span className="text-gray-600">★</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Firm</p>
            <div className="flex justify-center">
              <span className="text-yellow-400">★★</span>
              <span className="text-gray-600">★</span>
            </div>
          </div>
        </div>

        {/* Race Record */}
        <div className="flex justify-between items-center text-xs sm:text-sm mb-3 sm:mb-4">
          <div className="text-emerald-500">
            8 (0-0-2)
            <span className="text-gray-400 ml-1">
              Starts (W-P-S)
            </span>
          </div>
          <div className="text-gray-400">
            0/18 Breeds
          </div>
        </div>

        {/* Price Button */}
        <button className="w-full bg-[#1a365d] hover:bg-emerald-500 text-white text-sm sm:text-base font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded transition-colors">
          800.00
        </button>
      </div>
    </div>
  );
} 