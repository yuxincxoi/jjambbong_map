import { useEffect } from "react";
import { loadMap } from "../../modules/map/loadMap";

const Map = () => {
  useEffect(() => {
    const initializeMap = async () => {
      try {
        const maps = await loadMap();
      } catch (error) {
        console.error("Map initialization failed:", error);
      }
    };

    initializeMap();
  }, []);

  return <div id="map" className="w-full h-full absolute inset-0 z-0" />;
};

export default Map;
