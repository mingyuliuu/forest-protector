import React from "react";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true);

    //const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events?days=15");
    //const { events } = await res.json();
    const { events } = 
    {
      "title": "EONET Events",
      "description": "Natural events from EONET.",
      "link": "https://eonet.gsfc.nasa.gov/api/v2.1/events",
      "events": [
        {
          "id": "EONET_6194",
          "title": "Bezymianny Volcano, Russia",
                "description": "",
          "link": "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6194",
          "categories": [
            {
              "id": 12,
              "title": "Volcanoes"
            }
          ],
          "sources": [
            {
              "id": "SIVolcano",
              "url": "http://volcano.si.edu/volcano.cfm?vn=300250"
            }
          
          ],
          "geometries": [
            {
              "date": "2022-08-22T10:30:34Z",
              "type": "Point", 
              "coordinates": [ 160.595, 55.972 ]
            }
          
          ]
        },
        {
          "id": "EONET_6194",
          "title": "Crockets Knob Fire",
                "description": "",
          "link": "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6195",
          "categories": [
            {
              "id": 8,
              "title": "Wildfires"
            }
          ],
          "sources": [
            {
              "id": "InciWeb",
              "url": "http://inciweb.nwcg.gov/incident/8355/"
            }
          
          ],
          "geometries": [
            {
              "date": "2022-08-22T03:00:00Z",
              "type": "Point", 
              "coordinates": [ -118.708, 44.728000000000002 ]
            }
          
          ]
        },
        {
          "id": "EONET_6195",
          "title": "AbaAba",
                "description": "",
          "link": "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6195",
          "categories": [
            {
              "id": 8,
              "title": "Wildfires"
            }
          ],
          "sources": [
            {
              "id": "InciWeb",
              "url": "http://inciweb.nwcg.gov/incident/8355/"
            }
          
          ],
          "geometries": [
            {
              "date": "2022-08-22T03:00:00Z",
              "type": "Point", 
              "coordinates": [ -118.708, 47.728000000000002 ]
            }
          
          ]
        },
      ]};
    setEventData(events);
    setIsLoading(false);
  };

  // Fetch data from NASA API when the webpage first loads
  useEffect(() => {
    fetchEvents();
    console.log(eventData);
  }, []);

  return (
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
  );
}

export default App;