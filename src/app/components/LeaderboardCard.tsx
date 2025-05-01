"use client";

interface LeaderboardCardProps {
  rank: number;
  horseName: string;
  stableName: string;
  points: number;
  imageUrl?: string;
}

export default function LeaderboardCard({
  rank,
  horseName,
  stableName,
  points,
  imageUrl = "/placeholder-horse.jpg"
}: LeaderboardCardProps) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-[#112240] rounded-lg transition-colors group">
      {/* Rank and Horse Info */}
      <div className="flex items-center gap-3">
        <span className="text-gray-400 w-8 text-right">{rank}</span>
        <div className="h-8 w-8 rounded-full bg-[#1a365d] overflow-hidden">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={horseName}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <h3 className="text-white font-medium group-hover:text-emerald-500 transition-colors">
            {horseName}
          </h3>
          <p className="text-sm text-gray-400">{stableName}</p>
        </div>
      </div>

      {/* Points */}
      <div className="text-right">
        <span className="text-emerald-500 font-bold">{points.toLocaleString()}</span>
      </div>
    </div>
  );
} 