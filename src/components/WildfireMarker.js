import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

// The Lottie fire animation at wildfire locations
const WildfireMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="wildfire-marker" onClick={onClick}>
      <Player
        src="https://assets1.lottiefiles.com/packages/lf20_ko9ahj1s.json"
        className="fireAnimation"
        loop
        autoplay
      />
    </div>
  );
};

export default WildfireMarker;
