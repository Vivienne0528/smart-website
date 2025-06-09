"use client";

import React from "react";
import ReactPlayer from "react-player";
const VideoPlayer = ({ detailsData }) => {
  // const src = detailsData.list[0].vod_play_url
  const fullUrl = detailsData.list[0].vod_play_url;
  const src = fullUrl.split("$")[1];
  console.log("播放链接：", src);
  return (
    // <ReactPlayer url={src} controls playing width="100%" />
    <video width="320" height="240" controls preload="auto" autoPlay>
      <source src={src} type="application/x-mpegURL" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
