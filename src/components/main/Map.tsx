import { useEffect } from "react";
import { loadMap } from "../../modules/map/loadMap";

const Map = () => {
  useEffect(() => {
    const initializeMap = async () => {
      try {
        const maps = await loadMap();
        console.log("Map initialized successfully");
      } catch (error) {
        console.error("Map initialization failed:", error);
      }
    };

    initializeMap();
  }, []);

  return (
    <div id="map" className="bg-black w-[75%] h-screen right-0 fixed"></div>
  );
};

export default Map;
