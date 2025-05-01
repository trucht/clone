import Link from 'next/link';

export default function Banner() {
  return (
    <div className="bg-[#112240] py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Experience the Thrill of Horse Racing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
            Join thousands of players in the most exciting horse racing game
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/races"
              className="px-6 sm:px-8 py-3 bg-emerald-500 text-black font-bold 
                       hover:bg-emerald-400 transition-colors text-sm sm:text-base
                       rounded-lg sm:rounded"
            >
              Start Racing
            </Link>
            <Link
              href="/learn"
              className="px-6 sm:px-8 py-3 border-2 border-emerald-500 text-emerald-500 
                       font-bold hover:bg-emerald-500 hover:text-black transition-colors
                       text-sm sm:text-base rounded-lg sm:rounded"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="text-center p-4 md:p-6 bg-[#1a365d] rounded-lg transform hover:scale-105 transition-transform">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-500 mb-1">1,000+</div>
            <div className="text-xs sm:text-sm text-gray-300">Active Races</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-[#1a365d] rounded-lg transform hover:scale-105 transition-transform">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-500 mb-1">50,000+</div>
            <div className="text-xs sm:text-sm text-gray-300">Players</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-[#1a365d] rounded-lg transform hover:scale-105 transition-transform">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-500 mb-1">$1M+</div>
            <div className="text-xs sm:text-sm text-gray-300">Total Prize Pool</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-[#1a365d] rounded-lg transform hover:scale-105 transition-transform">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-500 mb-1">10,000+</div>
            <div className="text-xs sm:text-sm text-gray-300">Horses Bred</div>
          </div>
        </div>
      </div>
    </div>
  );
} 