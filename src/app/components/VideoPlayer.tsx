"use client";

import { useState, useRef, useEffect } from 'react';
import { 
  FaPlay, 
  FaPause, 
  FaExpand, 
  FaCompress,
  FaVolumeUp, 
  FaVolumeMute 
} from 'react-icons/fa';

interface VideoPlayerProps {
  src: string; // Can be YouTube URL or local video path
  poster?: string;
  title?: string;
  isYoutube?: boolean;
}

// Helper function to extract YouTube video ID
const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function VideoPlayer({ src, poster, title, isYoutube = true }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const youtubeId = isYoutube ? getYoutubeId(src) : null;

  // If it's a YouTube video, render the iframe
  if (isYoutube && youtubeId) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
        {title && (
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent
                        p-4 text-white z-10">
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        )}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0&modestbranding=1`}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // For local videos, use the original player
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Update duration when metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    // Update current time
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Format time in MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      const time = (parseFloat(e.target.value) * video.duration) / 100;
      video.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = value;
      setVolume(value);
      setIsMuted(value === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted) {
        videoRef.current.volume = volume;
      } else {
        videoRef.current.volume = 0;
      }
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Render local video player
  return (
    <div className="relative group bg-black rounded-lg overflow-hidden">
      {title && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent
                      p-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      )}
      
      <video
        ref={videoRef}
        className="w-full aspect-video"
        poster={poster}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent
                    p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress Bar */}
        <input
          type="range"
          className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer
                   hover:h-2 transition-all"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleProgress}
        />

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-emerald-500 transition-colors"
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-white hover:text-emerald-500 transition-colors"
              >
                {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
              </button>
              <input
                type="range"
                className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolume}
              />
            </div>

            {/* Time Display */}
            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-emerald-500 transition-colors"
          >
            {isFullscreen ? <FaCompress size={20} /> : <FaExpand size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
} 