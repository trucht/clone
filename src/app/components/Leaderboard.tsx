"use client";

import LeaderboardCard from "./LeaderboardCard";

interface LeaderboardSectionProps {
  title: string;
  entries: {
    rank: number;
    horseName: string;
    stableName: string;
    points: number;
    imageUrl?: string;
  }[];
}

function LeaderboardSection({ title, entries }: LeaderboardSectionProps) {
  return (
    <div className="bg-[#0a192f] rounded-lg p-4">
      <h2 className="text-lg font-bold text-white mb-4">{title}</h2>
      <div className="space-y-2">
        {entries.map((entry) => (
          <LeaderboardCard
            key={entry.horseName}
            rank={entry.rank}
            horseName={entry.horseName}
            stableName={entry.stableName}
            points={entry.points}
            imageUrl={entry.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default function Leaderboard() {
  // Sample data - replace with real data
  const sampleData = {
    lineageCupPremier: [
      { rank: 1, horseName: "Whiskey Thief", stableName: "Pink Slip Racing", points: 344077 },
      { rank: 2, horseName: "Cyptopher Columbus", stableName: "Poseidon Racing", points: 195255 },
      { rank: 3, horseName: "Sword Of Damocles", stableName: "YSM Racing Club", points: 158400 },
      { rank: 4, horseName: "Fenella", stableName: "YSM Racing Club", points: 139894 },
      { rank: 5, horseName: "Enduring Vortex", stableName: "Tombstone Stables", points: 118694 },
    ],
    lineageCupUndercard: [
      { rank: 1, horseName: "Gorilla Art", stableName: "Hazy Hills", points: 411693 },
      { rank: 2, horseName: "Leyton Orient", stableName: "DeStables", points: 377769 },
      { rank: 3, horseName: "Savoir Faire", stableName: "Golden Boot Stables", points: 357430 },
      { rank: 4, horseName: "Whiskey Thief", stableName: "Pink Slip Racing", points: 344077 },
      { rank: 5, horseName: "Lie of the Diva", stableName: "abSOLute Horsepower", points: 338400 },
    ],
    championshipSprint: [
      { rank: 1, horseName: "Thalric", stableName: "Blue Elder Racing", points: 98 },
      { rank: 2, horseName: "The Green Manalishi", stableName: "La Jolla Farms East", points: 50 },
      { rank: 3, horseName: "Skyfaller", stableName: "Arch Royal Family", points: 37 },
      { rank: 4, horseName: "Brain Wave", stableName: "La Jolla Farms East", points: 33 },
      { rank: 5, horseName: "Dark Wizard", stableName: "MB Stables", points: 30 },
    ],
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Leaderboards</h1>
        <button className="text-sm md:text-base text-emerald-500 hover:text-emerald-400 transition-colors">
          Show More Leaderboards →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <LeaderboardSection
          title="Lineage Cup Premier"
          entries={sampleData.lineageCupPremier}
        />
        <LeaderboardSection
          title="Lineage Cup Undercard"
          entries={sampleData.lineageCupUndercard}
        />
        <LeaderboardSection
          title="Third Time Championship Sprint"
          entries={sampleData.championshipSprint}
        />
      </div>
    </div>
  );
} 