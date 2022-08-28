import React from "react";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  const [recentData, setRecentData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true);

    const res1 = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events?days=15"); // 15, 30, 60
    const res2 = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/categories/8?days=60");
    var { events } = await res1.json();
    setRecentData(events);

    var { events } = await res2.json();
    setDetailData(events);
    setIsLoading(false);
  };

  // Fetch data from NASA API when the webpage first loads
  useEffect(() => {
    fetchEvents();
    console.log(detailData);
  }, []);

  return (
    <div className="App">
      {!isLoading ? (
        <Map recentData={recentData} detailData={detailData}/>
      ) : ( // Show the loading tree animation
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_rqd7lhtn.json"
          className="loadingAnimation"
          loop
          autoplay
        />
      )}
    </div>
  );
}

export default App;