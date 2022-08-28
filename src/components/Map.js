import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import WildfireMarker from "./WildfireMarker";
import WildfireDetail from "./WildfireDetail";

const Map = ({ eventData, center, zoom }) => {
  const [wildfireDetail, setWildfireDetail] = useState(null);
  const [isShowingDetail, setIsShowingDetail] = useState(false);

  const wildfireMarkers =
    eventData === null
      ? null
      : eventData.map((event) => {
          // 8 corresponds to Wildfires
          if (event.categories[0].id !== 8) return null;

          console.log(event);

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
          bootstrapURLKeys={{ key: "AIzaSyAbaZ_2-PaTeYCZAHZcqPOfGUX42Ijsm0Q" }}
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
