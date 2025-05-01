"use client";

interface NewsItem {
  title: string;
  color: string;
}

export default function LatestNews() {
  const newsItems: NewsItem[] = [
    {
      title: "$1,000 Blockbet Derby Day Picks Challenge",
      color: "bg-emerald-800"
    },
    {
      title: "Vegas, Baby: Virtual Kentucky Derby Live From Sirius XM at Wynn Hotel",
      color: "bg-blue-800"
    },
    {
      title: "Zedge Edge Betting Challenge",
      color: "bg-purple-800"
    },
    {
      title: "Photo Finish™ LIVE Pick'Em Challenge Series",
      color: "bg-red-800"
    },
    {
      title: "Bryce x AI: Pro Tips & Tricks",
      color: "bg-yellow-800"
    },
    {
      title: "Season 27: What's New",
      color: "bg-green-800"
    }
  ];

  return (
    <div className="bg-[#0a192f] rounded-lg overflow-hidden">
      <div className="p-3 sm:p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl text-white font-bold">Latest News and Updates</h2>
          <a href="#" className="text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            View All
          </a>
        </div>
      </div>

      <div className="p-2 sm:p-3 md:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group relative block overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`aspect-video sm:aspect-[16/9] w-full ${item.color} relative`}>
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBvcGFjaXR5PSIwLjMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Placeholder icon - Responsive size */}
                <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white/20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 z-20">
                <h3 className="text-xs sm:text-sm md:text-base text-white font-medium line-clamp-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 