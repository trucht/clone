"use client";

interface RaceResult {
  title: string;
  time: string;
  status: string;
  prize?: number;
}

export default function RecentWinners() {
  const raceResults: RaceResult[] = [
    { title: "Claim to Fame Juvy Sprint R.", time: "04:34 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Coral's Pace Claimer 2.5K", time: "04:31 PM", status: "Awaiting Official Winner" },
    { title: "Sundown Trot Stakes", time: "04:26 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Dawn's Trot Claimer Juvy 1.2K", time: "04:19 PM", status: "Awaiting Official Winner" },
    { title: "Mythic Leap Allowance Juvy", time: "04:17 PM", status: "Awaiting Official Winner" },
    { title: "Silver Edge Stakes Juvy", time: "04:14 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Jungle Odyssey Claimer 2.5K", time: "04:03 PM", status: "Awaiting Official Winner" },
    { title: "Island's Winds Stakes", time: "03:51 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Whisper's Trot Stakes Juvy", time: "03:50 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Wind Dance Stakes Juvy", time: "03:48 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Claim to Fame Juvy Sprint R.", time: "04:34 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Coral's Pace Claimer 2.5K", time: "04:31 PM", status: "Awaiting Official Winner" },
    { title: "Sundown Trot Stakes", time: "04:26 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Dawn's Trot Claimer Juvy 1.2K", time: "04:19 PM", status: "Awaiting Official Winner" },
    { title: "Mythic Leap Allowance Juvy", time: "04:17 PM", status: "Awaiting Official Winner" },
    { title: "Silver Edge Stakes Juvy", time: "04:14 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Jungle Odyssey Claimer 2.5K", time: "04:03 PM", status: "Awaiting Official Winner" },
    { title: "Island's Winds Stakes", time: "03:51 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Whisper's Trot Stakes Juvy", time: "03:50 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Wind Dance Stakes Juvy", time: "03:48 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Claim to Fame Juvy Sprint R.", time: "04:34 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Coral's Pace Claimer 2.5K", time: "04:31 PM", status: "Awaiting Official Winner" },
    { title: "Sundown Trot Stakes", time: "04:26 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Dawn's Trot Claimer Juvy 1.2K", time: "04:19 PM", status: "Awaiting Official Winner" },
    { title: "Mythic Leap Allowance Juvy", time: "04:17 PM", status: "Awaiting Official Winner" },
    { title: "Silver Edge Stakes Juvy", time: "04:14 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Jungle Odyssey Claimer 2.5K", time: "04:03 PM", status: "Awaiting Official Winner" },
    { title: "Island's Winds Stakes", time: "03:51 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Whisper's Trot Stakes Juvy", time: "03:50 PM", status: "Awaiting Official Winner", prize: 17 },
    { title: "Wind Dance Stakes Juvy", time: "03:48 PM", status: "Awaiting Official Winner", prize: 17 },
  ];

  return (
    <div className="bg-[#0a192f] rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-white font-medium">Recent Winners</h2>
        </div>
      </div>

      <div className="divide-y divide-gray-800">
        {raceResults.map((race, index) => (
          <div key={index} className="p-4 hover:bg-[#112240] transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    index % 3 === 0 ? 'bg-emerald-400' :
                    index % 3 === 1 ? 'bg-pink-400' :
                    'bg-purple-400'
                  }`} />
                  <h3 className="text-white text-sm font-medium truncate">{race.title}</h3>
                  <span className="text-gray-500 text-xs">- {race.time}</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">{race.status}</p>
              </div>
              {race.prize && (
                <div className="flex items-center gap-1">
                  <span className="text-white font-medium">{race.prize}</span>
                  <span className="text-yellow-400">⚡</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 