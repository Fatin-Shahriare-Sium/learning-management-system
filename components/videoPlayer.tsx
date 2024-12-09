"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <div>
      <ReactPlayer controls height="50vh" width="100%" url={url} />
    </div>
  );
};

export default VideoPlayer;
