import React from "react";

import video from "../../assets/videos/hero-video.mp4";

const Video = () => {
  return (
    <div className="bckg-video">
      <video loop autoPlay>
        <source src={video} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
