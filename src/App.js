import React from "react";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import Login from "./components/Login"
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true);

    const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events?days=15");
    const { events } = await res.json();

    setEventData(events);
    setIsLoading(false);
  };

  // Fetch data from NASA API when the webpage first loads
  useEffect(() => {
    fetchEvents();
    console.log(eventData);
  }, []);

  return (
    <Login />
    /*
    <div className="App">
      {!isLoading ? (
        <Map eventData={eventData} />
      ) : ( // Show the loading tree animation
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_rqd7lhtn.json"
          className="loadingAnimation"
          loop
          autoplay
        />
      )}
    </div>
    */
  );
}

export default App;
