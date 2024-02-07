// components/VideoBackground.tsx
import { px } from "framer-motion";
import React from "react";


const VideoProject: React.FC = () => {
  return (

    <div  className="video-project">

      <video autoPlay muted loop width={1300} className="video-p">
        <source src="\encryption.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default VideoProject;
