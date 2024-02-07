// components/VideoBackground.tsx
import React from "react";


const VideoBg: React.FC = () => {
  return (

    <div  className="video-background">

      <video autoPlay muted loop className="video">
        <source src="\blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default VideoBg;
