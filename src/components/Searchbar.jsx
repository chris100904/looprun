import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const Searchbar = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <div className="border-4 border-blue-500">
      <APIProvider apiKey={apiKey}>
        <Map
          style={{ width: "50vw", height: "50vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
};

export default Searchbar;
