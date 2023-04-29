import React, { memo, useCallback, useContext } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import UserContext from "../components/UserContext";

const Map = () => {
  const { position } = useContext(UserContext);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  const onLoad = useCallback(
    function callback(map) {
      console.log("POG", position);
      const bounds = new window.google.maps.LatLngBounds(position);
      map.fitBounds(bounds);
    },
    [position]
  );

  return (
    <div>
      {isLoaded && position && (
        <div className="absolute top-0 left-0 -z-10">
          <GoogleMap
            center={position}
            zoom={15}
            onLoad={onLoad}
            mapContainerStyle={{
              width: "100vw",
              height: "100vh",
            }}
            options={{
              streetViewControl: false,
              disableDoubleClickZoom: true,
              fullscreenControl: false,
              zoomControl: false,
              mapTypeControl: false,
            }}
          ></GoogleMap>
        </div>
      )}
    </div>
  );
};

export default memo(Map);
