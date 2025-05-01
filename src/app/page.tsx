"use client";

import Image from "next/image";
import Banner from "./components/Banner";
import VideoPlayer from "./components/VideoPlayer";
import Marketplace from "./components/Marketplace";
import Leaderboard from "./components/Leaderboard";
import StatsOverview from "./components/StatsOverview";
import FeaturedRaces from "./components/FeaturedRaces";
import RecentWinners from "./components/RecentWinners";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <div className="w-full mx-auto my-8 px-4 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <VideoPlayer
              src="https://www.youtube.com/watch?v=0Txi8y4Ue4s&t=2s"
              isYoutube={true}
              title="Horse Racing Video"
            />
            <div className="mt-16">
              <Marketplace />
            </div>
            <div className="mt-16">
              <Leaderboard />
            </div>
          </div>
          <div className="w-full lg:w-1/3 space-y-8">
            <StatsOverview />
            <FeaturedRaces />
            <RecentWinners />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <LatestNews />
      </div>
      
      <Footer />
    </div>
  );
}
