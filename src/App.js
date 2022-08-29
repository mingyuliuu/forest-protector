import React from "react";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  // The wildfire data during the past 30 days
  const [recentData, setRecentData] = useState([]);
  // The wildfire data during the past year
  const [detailData, setDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    // Show loading animation while the webpage is still fetching data
    setIsLoading(true);

    const res1 = await fetch(
      "https://eonet.gsfc.nasa.gov/api/v2.1/events?days=30"
    );
    const res2 = await fetch(
      "https://eonet.gsfc.nasa.gov/api/v2.1/categories/8?days=365"
    );
    var { events } = await res1.json();
    setRecentData(events);

    var { events } = await res2.json();
    setDetailData(events);

    // Once data has been fetched, the loading animation should disappear
    setIsLoading(false);
  };

  const storeEvent = async (eventType, event) => {
    let url = 'http://localhost:3004/'
    if (eventType === "recent") {
      url = 'http://localhost:3004/recentRecords'
    } else { url = 'http://localhost:3004/detailedRecords' }
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(event),
    })

    const data = await res.json()
    console.log(url)
    console.log(data)
  }

  const getEvents = async () => {
    const recent = await fetch('http://localhost:3004/recentRecords')
    const rData = await recent.json()
    setRecentData(rData)

    const detailed = await fetch('http://localhost:3004/detailedRecords')
    const dData = await detailed.json()
    setDetailData(dData)
  }


  // Fetch data from NASA API when the webpage first loads
  useEffect(() => {
    // fetchEvents();
    const isload = true
   
    if (isload) {
      console.log("get events")
      getEvents()
    } else {
      fetchEvents()
      recentData.map((event) => {
        storeEvent("recent", event)
      })
      detailData.map((event) => {
        storeEvent("detailed", event)
      })
    }
  }, [recentData, detailData]);

  return (
    <div className="App">
      {!isLoading ? (
        <Map recentData={recentData} detailData={detailData} />
      ) : (
        // Show the loading tree animation
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
