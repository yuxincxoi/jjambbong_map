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
    <div>
      <div
        id="map"
        className="bg-black w-[50%] h-[420px] rounded-3xl mx-auto mt-10"
      ></div>
    </div>
  );
};

export default Map;
