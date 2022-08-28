import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import WildfireMarker from "./WildfireMarker";
import WildfireDetail from "./WildfireDetail";

const absoluteDifference = (d1, d2) => {
  return Math.abs(d1 - d2);
};

const Map = ({ recentData, detailData, center, zoom }) => {
  const [wildfireDetail, setWildfireDetail] = useState(null);
  const [isShowingDetail, setIsShowingDetail] = useState(false);

  const wildfireMarkers =
    recentData === null || detailData === null
      ? null
      : recentData.map((event) => {
          // 8 corresponds to Wildfires
          if (event.categories[0].id !== 8) return null;

          
          //const temp = Date.parse(detailData[0].geometries[0].date);
          const closeEvents = detailData.filter(
            (anotherEvent) =>
              absoluteDifference(
                event.geometries[0].coordinates[1],
                anotherEvent.geometries[0].coordinates[1]
              ) < 3 &&
              absoluteDifference(
                event.geometries[0].coordinates[0],
                anotherEvent.geometries[0].coordinates[0]
              ) < 3
          );

          /*
          const eventsIn60Days = closeEvents.filter(
            (thisEvent) =>
              absoluteDifference(
                Date.parse(thisEvent.geometries[0].date),
                Date.parse(event.geometries[0].date)
              ) <
              1000 * 3600 * 24 * 60
          );

          const eventsIn30Days = closeEvents.filter(
            (thisEvent) =>
              absoluteDifference(
                Date.parse(thisEvent.geometries[0].date),
                Date.parse(event.geometries[0].date)
              ) <
              1000 * 3600 * 24 * 30
          );

          const eventsIn15Days = closeEvents.filter(
            (thisEvent) =>
              absoluteDifference(
                Date.parse(thisEvent.geometries[0].date),
                Date.parse(event.geometries[0].date)
              ) <
              1000 * 3600 * 24 * 15
          );

          const statsData = [eventsIn15Days.length, eventsIn30Days.length, eventsIn60Days.length];
*/
          const statsData = closeEvents.map((thisEvent) => {
            return { month: parseInt(thisEvent.geometries[0].date.substring(5, 7)) };
          });

          return (
            <WildfireMarker
              key={event.id}
              lat={event.geometries[0].coordinates[1]}
              lng={event.geometries[0].coordinates[0]}
              onClick={() => {
                setWildfireDetail({
                  id: event.id,
                  title: event.title,
                  link: event.sources[0].url,
                  time: event.geometries[0].date,
                  stats: statsData,
                });
                setIsShowingDetail(true);
              }}
            ></WildfireMarker>
          );
        });

  // The default location when the user doesn't grant gps permission is set default to UW.
  const defaultProps = {
    center: {
      lat: 43.472286,
      lng: -80.544861,
    },
    zoom: 8,
  };

  // Close the details section on the right
  const closeDetail = () => {
    setIsShowingDetail(false);
  };

  return (
    <div className="mapView">
      {/* The map section that will take up 70% of screen width or 100% if details are not shown */}
      <div
        className="map"
        style={{ height: "100vh", width: isShowingDetail ? "70vw" : "100vw" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {wildfireMarkers}
        </GoogleMapReact>
      </div>

      {/* The details section (that will take up 30% of screen width) */}
      <div
        className="rightContainer"
        style={{ height: "100vh", width: isShowingDetail ? "30vw" : "0vw" }}
      >
        {wildfireDetail && (
          <WildfireDetail info={wildfireDetail} close={() => closeDetail()} />
        )}
      </div>
    </div>
  );
};

export default Map;
