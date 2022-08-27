import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import WildfireMarker from "./WildfireMarker";
import WildfireDetail from "./WildfireDetail";

const Map = ({ eventData, center, zoom }) => {
  const [wildfireDetail, setWildfireDetail] = useState(null);

  const wildfireMarkers =
    eventData === null
      ? null
      : eventData.map((event) => {
          // 8 corresponds to Wildfires
          if (event.categories[0].id !== 8) return null;

          return (
            <WildfireMarker
              lat={event.geometries[0].coordinates[1]}
              lng={event.geometries[0].coordinates[0]}
              onClick={() =>
                setWildfireDetail({ id: event.id, title: event.title })
              }
            ></WildfireMarker>
          );
        });

  const defaultProps = {
    center: {
      lat: 43.472286,
      lng: -80.544861,
    },
    zoom: 8,
  };

  return (
    <div className="map" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAbaZ_2-PaTeYCZAHZcqPOfGUX42Ijsm0Q" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {wildfireMarkers}
        {wildfireDetail && <WildfireDetail info={wildfireDetail} />}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
