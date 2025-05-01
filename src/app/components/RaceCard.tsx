"use client";

interface RaceCardProps {
  title: string;
  prize: number;
  time: string;
  date: string;
  isFreeEntry?: boolean;
}

export default function RaceCard({ title, prize, time, date, isFreeEntry = true }: RaceCardProps) {
  return (
    <div className="bg-[#0a192f] hover:bg-[#112240] rounded-lg p-4 transition-colors cursor-pointer border border-gray-800 hover:border-emerald-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-yellow-400">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold">{title}</h3>
            <p className="text-sm text-gray-400">
              {date}, {time}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-emerald-500 font-bold">
            {prize.toLocaleString()}.00 Ⓒ
          </div>
          {isFreeEntry && (
            <span className="text-sm text-emerald-400">Free Entry!</span>
          )}
        </div>
      </div>
    </div>
  );
} 