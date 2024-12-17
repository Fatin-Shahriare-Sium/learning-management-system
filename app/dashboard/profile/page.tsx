"use client";
import React, { useEffect, useRef } from "react";

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null); // Reference to the YouTube Player

  useEffect(() => {
    // Load the YouTube IFrame Player API script dynamically
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create a global onYouTubeIframeAPIReady callback
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "xlZTnbXnyJY", // Pass the YouTube video ID
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 1,
          controls: 0, // Hide default YouTube controls
          rel: 0, // No suggested videos
          modestbranding: 1, // Minimize YouTube branding
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    // Cleanup on unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      delete window.onYouTubeIframeAPIReady;
    };
  }, [videoId]);

  // Callback when player is ready
  const onPlayerReady = (event) => {
    console.log("Player Ready");
    event.target.playVideo();
  };

  // Custom play function
  const handlePlay = () => {
    playerRef.current.playVideo();
  };

  // Custom pause function
  const handlePause = () => {
    playerRef.current.pauseVideo();
  };

  return (
    <div>
      <div id="youtube-player"></div> {/* YouTube IFrame will render here */}
      <div style={{ marginTop: "10px" }}>
        {/* Custom Buttons */}
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
};

export default YouTubePlayer;
